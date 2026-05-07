/*****************************************
 * title: 진도체크 연동 스크립트 Case19
 * description: 진도기록 Cookie 적용 - 표준 진도체크 스크립트 (조작 방지, 중복방지, 배속초과방지)
 * UniPlayer Confirm, Alert 사용
 * 적용대상 : LearningX
 *****************************************/

// 브라우저를 종료할 때 종료 시간 메세지 표시 여부
var showClosedConfirmMsg;

// 내부 처리용 변수
var isPlayedContent = false;		// 뷰어 초기 재생 상태
var isPlayerDeactivated = false; 	// 팝업 전체화면으로 등으로 인해 현재 콘테츠 재생 영역이 해제된 상태인지

var PlayState = {
		CLOSED: 0,
		OPENING: 1,
		BUFFERING: 2,
		PLAYING: 3,
		PAUSED: 4,
		STOPPED: 5
	};
	
var isMobile = function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		return true;
	}
	
	return false;
}

var isIE = function() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
}

var LMSState = {
		STOPPED: 1,
		PAUSED: 2,
		PLAYING: 3,
		BUFFERING: 6,
		UPDATE_DATA: 8,
		CONTENT_END: 10,
		UNLOAD: 99,
		UNLOAD_END: 100
	};

var lms_url;	// LMS 연동 주소 [Request/TargetUrl]
var gDataPostTimer;	// LMS에 메세지를 주기적으로 보내기 위한 Timer
var gDuration;	// 전체 콘텐츠 duration
var SEND_PLAYTIME_INTERVAL=300000;	// LMS에 메세지를 보낼 주기 (5분)
var play_time;	// 현재 재생 시간 기록
var startat;	// LMS 연동 시작 시간 [Request/startat]
var endat;		// LMS 연동 Seek제한 시간 [Request/endat]
var isUnloadComplete = false;

var PERCENT_STEP1 = 0.5; // 50% 진행율이 되면 LMS에 데이터 전송
var isPercentStep1Complete = false;
var PERCENT_STEP2 = 0.9; // 90% 진행얄이 되면 LMS에 데이터 전송
var isPercentStep2Complete = false;

var lmsUserIdentifier = 'user_id'; // LMS에서 TargetUrl에 포함하여 사용자 구분을 위해서 사용하는 인자
var lmsUserValue;
var isContentEnded; // 2021년 3월부터 갑자기 콘텐츠 끝도 아닌데 CONTENT_END 이벤트가 같은 시간에 1만~10만개까지 엄청나게 LMS 로그에 쌓이는 문제가 종종 보고되고 있어 조치하기 위함.

/** LMS 진도체크 대응 END **/

/* UniPlayer 초기 시작 이벤트 처리 */
function afterWinLoad() 
{
	isContentEnded = false;

	lms_url = Request('TargetUrl');
	play_time = Request('endat');
	startat = Request('startat');
	endat = Request('endat');
	
	if (typeof endat == 'undefined') {
		if (typeof startat != 'undefined') {
			play_time = startat;
		} else {
			play_time = -8888;
		}
	}

	if (lms_url.length <= 0) {
		// 브라우저 종료 시 시청 완료구간 안내 메세지는 진도체크 기능이 작동하는 경우에만 제한한다.
		showClosedConfirmMsg = false;
	} else {
		showClosedConfirmMsg = true;
		// TargetUrl에서 lmsUser를 구한다.
		lmsUserValue = GetLMSUser(lms_url, lmsUserIdentifier);
	}
}

/* UniPlayer 초기 시작 완료 이벤트 처리 */
function afterWinLoadComplete() {
	if (lms_url.length > 0) {
		// Cookie에 있는 값과 endat 값을 비교하여 추가 전달이 필요한지 판단한다.
		// API 조작 검증을 위해 오해의 소지가 발생할 가능성이 있는 Cookie 기능을 사용하지 않도록 막는다.
		// checkLMSCookieData();
	}
}

/* [데스크톱 Only] UniPlayer 창이 닫힐때 이벤트 처리 */
function afterWinUnload() 
{
	if (GetCurrentTime() == 0) return;
	if (isUnloadComplete) return;
	isUnloadComplete = true;

	sendPlayedTime(LMSState.UNLOAD);

	try {
		Pause();	
	}catch(e) {			
	}
	
	if (isShowClosedConfirmMsg()) {
		if (isPlayedContent) {
			var msg = GetStartTimeString(GetCumulativePlayedTime()) + "까지 시청하셨습니다.";						
			uniPlayer.alert(msg);
		}
	}	
}

/* 목차 이동시 발생하는 이벤트 처리 */
function afterGotoSlide() 
{
	// 진도 체크를 위한 보완 측면에 추가함
	if(isPlayedContent){
		sendPlayedTime(LMSState.UPDATE_DATA);
	}
}

/* [데스크톱 Only] UniPlayer 창이 닫힐때 이벤트 처리 */
/* chrome은 반드시 return값이 존재해야만 window.onbeforeunload 이벤트가 발생하므로, 별도의 함수로 분리함. */
function afterChromeWinUnload() 
{
	if (GetCurrentTime() == 0) return;
	if (isUnloadComplete) return;
	isUnloadComplete = true;

	// chrome에서는 form으로 보내면 정상적으로 데이터를 보내지 못하기 때문에 ajax로 보내도록 함
	sendPlayedTime(LMSState.UNLOAD);

	try {
		Pause();	
	}catch(e) {	
	}
	
	// chrome은 메세지를 임의로 출력할 수 없음
	if (isShowClosedConfirmMsg()) {
		var msg = GetStartTimeString(GetCumulativePlayedTime()) + "까지 시청하셨습니다.";
		return msg;
	}
}

/**
 * 팝업 전체화면 등으로 인해 현재 Player의 콘텐츠 재생 영역이 해제 되었을 때 
 */
function afterPlayerDeactivated() {
	isPlayerDeactivated = true;
	// 주기적으로 시청 완료 구간을 알리기 위한 타이머를 해제한다.
	if (gDataPostTimer) {
		clearInterval(gDataPostTimer);
		gDataPostTimer = null;
	}
}

/**
 * 팝업 전체화면 등으로 인해 현재 Player의 콘텐츠 재생 영역이 해제 된 것이 풀렸을 때
 */
function afterPlayerActivated() {
	isPlayerDeactivated = false;
	// 주기적으로 시청 완료 구간을 알리기 위한 타이머를 다시 구동한다.
	if (!gDataPostTimer && gDuration != 0) {
		gDataPostTimer = setInterval(function(){
			sendPlayedTime(LMSState.UPDATE_DATA);
		}, SEND_PLAYTIME_INTERVAL);
	}
}

/* 재생 상태 변경시 발생하는 이벤트 처리 */
function afterPlayStateChange(state)
{	
    // state 설명
    // 0 : closed (media 파일이 열리지 않은 상태)
    // 1 : opening (media 파일이 열리는 중)
    // 2 : buffering (버퍼링)
    // 3 : playing (media 재생)
    // 4 : paused (media 재생 일시정지)
    // 5 : stopped (media 재생 정지)

 	// console.log('[API]:afterPlayStateChange: ' + state);
	
	if (state == PlayState.PLAYING) setPlayedContent();
}

/* 시간 변화시 발생하는 이벤트 처리 */
/* 모바일 Seek 제한을 위한 처리가 포함되어 있음 */
function afterTimeUpdate()
{
	if (lms_url.length > 0) {
		var gDuration = GetTotalDuration();
		var cur_pos = GetCurrentTime();

		if (gDuration != endat)
		{		
			// 프로그래스 검색 제어
			// 이전 afterTimeUpdate 시간보다 현재 시간이 2초 보다 큰 경우 문제라고 판단한다.
			if (Math.abs(cur_pos-play_time) > 2 && cur_pos > play_time)
			{
				if (play_time == -9999 || play_time == -8888) return;	// -9999: 전 구간 시청 완료 처리, -8888: seek 제한 사용하지 않음
				SeekWithUpdateCumulativeTime(play_time);
			}
			else 
			{
				if (cur_pos > play_time) play_time = cur_pos;
			}
		}
	}

	if (lms_url.length > 0 && isPlayedContent) {
		// LMS 전송 정보를 cookie에 저장
		// API 조작 검증을 위해 오해의 소지가 발생할 가능성이 있는 Cookie 기능을 사용하지 않도록 막는다.
		// setLMSCookieData(lms_url, GetCurrentTime(), GetCumulativePlayedTime(), GetCurrentPage());

		// 현재 시간이 duration 대비 %를 기준으로 설정된 %를 지나면 진도체크 정보 전달
		var playingPercent = GetCurrentTime() / GetTotalDuration();
		if (playingPercent > PERCENT_STEP1 && isPercentStep1Complete == false) {
			isPercentStep1Complete = true;
			sendPlayedTime(LMSState.UPDATE_DATA);
		}
		if (playingPercent > PERCENT_STEP2 && isPercentStep2Complete == false) {
			isPercentStep2Complete = true;
			sendPlayedTime(LMSState.UPDATE_DATA);
		}
	}
}

/* 콘텐츠 시청 종료시 발생하는 이벤트 */
function afterContentEnd()
{
	// 모두 시청완료 되었으므로 시청 완료된 구간(GetCumulativePlayedTime)이 아닌 총 콘텐츠 길이를 전달한다.
	clearInterval(gDataPostTimer);
	gDataPostTimer = null;

	setTimeout(function(){
		if (!isContentEnded) {
			isContentEnded = true;
			sendPlayedTime(LMSState.CONTENT_END);
		}
	}, 100);

	// LMS 전송 정보를 cookie에 저장
	// API 조작 검증을 위해 오해의 소지가 발생할 가능성이 있는 Cookie 기능을 사용하지 않도록 막는다.
	// setLMSCookieData(lms_url, GetCurrentTime(), GetTotalDuration(), GetCurrentPage());
}

/* IE의 winUnload 이벤트 연결 */
function setWinUnload() {
	var isInternetExplorer = navigator.appName.indexOf("Microsoft") != -1;
	if (isInternetExplorer) {
		version = parseFloat(navigator.appVersion.split("MSIE")[1]);
		if (version >= 9) {
			window.onbeforeunload = afterWinUnload;
		} else {
			window.onunload = afterWinUnload;
			window.onbeforeunload = afterWinUnload; // IE11의 호환성 보기 모드에서는 onunload가 동작하지 않기 때문에 onbeforeunload도 추가함
		}
	}
	else {
		window.onunload = afterWinUnload;
		window.onbeforeunload = afterWinUnload;
	}	
}

/* 최초 재생 시작시 초기화 처리 */
/* 사용자가 콘텐츠를 재생 했을 때만 종료 시에 종료 메시지를 띄우도록 처리함. */
function setPlayedContent() {
	if (lms_url.length <= 0) return;
	if (isPlayedContent) return;
	isPlayedContent = true;
	
	// 총 콘텐츠 길이를 저장해 둔다.
	gDuration = GetTotalDuration();
	sendPlayedTime(LMSState.PLAYING);

	// 주기적으로 시청 완료 구간을 알리기 위한 타이머를 구동한다.
	if (gDuration != 0) {
		gDataPostTimer = setInterval(function(){
			sendPlayedTime(LMSState.UPDATE_DATA);
		}, SEND_PLAYTIME_INTERVAL);
	}

	var is_chrome = /chrome/.test(navigator.userAgent.toLowerCase());
	if (!is_chrome) {
		setWinUnload();
		return;
	}

	window.onunload = afterChromeWinUnload;
	window.onbeforeunload = afterChromeWinUnload;
}

/* 종료 메세지를 표시할 수 있는지 여부 판단 */
function isShowClosedConfirmMsg() {
	if (showClosedConfirmMsg == false) return false;	
	if (null != navigator.userAgent.match(/(iPad|iPhone)/i)) return false;
	if (null != navigator.userAgent.match(/(Android)/i)) return false;    
	return	true;
}

/* [LMS 연동 함수] 재생 정보 전달 */
function sendPlayedTime(lmsStatus){
	var playedTime = GetCumulativePlayedTime();
	var curTime = GetCurrentTime();
	switch(lmsStatus) {
		case LMSState.PLAYING:
			mod_xncommons_track(lmsStatus, curTime, playedTime, callbackCheckDuplicate);
			break;

		case LMSState.UPDATE_DATA:
			mod_xncommons_track(lmsStatus, curTime, playedTime, callbackCheckIllegalPlay);
			break;
			
		case LMSState.UNLOAD:
			mod_xncommons_track(lmsStatus, curTime, playedTime, null);
			break;
			
		case LMSState.CONTENT_END:
			mod_xncommons_track(lmsStatus, curTime, playedTime, null);
			break;

		case LMSState.UNLOAD_END:
			mod_xncommons_track(LMSState.UNLOAD_END, gDuration, gDuration, null);
			break;
	}
}

/* [LMS 연동 함수] 재생 정보 전달 */
function mod_xncommons_track(lmsstate, curPos, cumulativeTime, callback) {
	if (!isPlayedContent) return;
	if (isPlayerDeactivated) return;
	if (lms_url.length <= 0) return;
	
	var page = GetCurrentPage();
	var total_page = GetTotalPage();
	var cumulative_page = GetCumulativePage();
	curPos = Math.round(curPos*1000)/1000;
	cumulativeTime = Math.round(cumulativeTime*1000)/1000;

	// 모바일에서 seek를 했을 때 curPos이 크게 나올 수 있기 때문에 처리한다.
	if (curPos > cumulativeTime && Math.abs(curPos - cumulativeTime) > 2) return;

	// 이전 afterTimeUpdate 시간보다 현재 시간이 2초 보다 큰 경우 문제라고 판단한다.
	// -9999: 전 구간 시청 완료 처리, -8888: seek 제한 사용하지 않음
    if (play_time != -9999 && play_time != -8888 && Math.abs(curPos-play_time) > 2 && curPos > play_time) return;
    
	// 시간을 얻는 타이밍에 따라 curPos이 크게 나오는 경우 같은 값으로 처리한다.
	if (curPos > cumulativeTime) curPos = cumulativeTime;

	// curPos와 cumulativeTime이 duration 보다 크면 duration 으로 설정한다.
    if (curPos > gDuration) curPos = gDuration;
    if (cumulativeTime > gDuration) cumulativeTime = gDuration;

    // jsonp로 요청하여 응답을 받을 수 있도록 한다.
	$.ajax({
		type: 'POST',
		dataType: 'jsonp',
		url: lms_url,
		data: {
			state: lmsstate,
			duration: gDuration,
			currentTime: curPos,
			cumulativeTime: cumulativeTime,
			page: page,
			totalpage: total_page,
			cumulativePage: cumulative_page
		},
		success: function(data) {
			// callback이 존재하는 경우
			if (callback) {
				callback(data);
			}
	    },
	    error: function(xhr) {
	    	// jsonp의 응답이 정상적이지 않는 경우에는 API가 아직 업데이트 되기 전으로 판단할 수 있다.
	    	// 이 경우는 실제 서버에서는 기존과 동일하게 처리되므로 무시하면 된다.
	    }
	});
}

/**
 * 최초 시청 시 콘텐츠 중복을 확인하기 위한 callback 함수
 * 중복인 경우 경고를 띄우고 사용자가 취소할 수 있도록 함
 */
function callbackCheckDuplicate(response) {
	// 중복인 콘텐츠가 있는 경우 대응
	if (!response.result) {
		// 콘텐츠를 일시정지한다.
		Pause();
		// 이전 시청중인 콘텐츠의 취소 여부를 묻는다.
		var duplicateConfirmMsg = GetCancelDuplicateContentsConfirmMessage();
		// UniPlayer의 Confirm을 사용한다.
		uniPlayer.confirm(
			duplicateConfirmMsg, 
			null,
			null,
			function() {
				// 취소 API를 요청한다.
				requestCancelApi();
				// 콘텐츠를 다시 재생한다.
				Play();	
			},
			function () {
				// 현재 재생중인 시청을 취소시킨다.
				CancelDuplicateContents();	
			}
		);
	}
}

/**
 * 시청 중 progress API를 요청했을 때 문제있는 상황인지 확인한다.
 * 1. 다른 콘텐츠가 시청을 취소한 경우 - 일시 정지, 경고 표시
 * 2. 허용된 배속 이상으로 시청하는 경우 - 일시 정지, 배속 1.0, 경고 표시
 */
function callbackCheckIllegalPlay(response) {
	if (!response.result) {
		// 허용된 배속 이상으로 시청하는 경우 예외처리
		if (response.error_code && response.error_code.toLowerCase() == 'invalidpbrate') {
			InvalidPbrate();
			return;
		}

		// 다른 콘텐츠로 인한 시청 취소
		// 콘텐츠를 일시정지한다.
		Pause();
		// 현재 재생중인 시청 창에 경고를 표시한다.
		WarnDuplicateContents();
	}
}

/**
 * 중복 시청에서 기존 시청중인 콘텐츠를 취소하기 위한 API 요청
 */
function requestCancelApi() {
	if (lms_url.length <= 0) return;

	var cumulativeTime = GetCumulativePlayedTime();
	cumulativeTime = Math.round(cumulativeTime*1000)/1000;
	var curTime = GetCurrentTime();
	curTime = Math.round(curTime*1000)/1000;

	var page = GetCurrentPage();
	var total_page = GetTotalPage();
	var cumulative_page = GetCumulativePage();

	// jsonp로 취소 API를 요청한다.
	// progress API에서 force_cancel: true로 전달한다.
	$.ajax({
		type: 'POST',
		dataType: 'jsonp',
		url: lms_url,
		data: {
			state: LMSState.PLAYING,
			duration: gDuration,
			currentTime: curTime,
			cumulativeTime: cumulativeTime,
			page: page,
			totalpage: total_page,
			cumulativePage: cumulative_page,
			force_cancel: true
		}
	});
}

/**
 * 스트링 포메팅
 * 첫 번째 인자는 치환되기 전의 문자열이며 [n] 형태의 문자열을 포함하고 있다. (n는 0 이상의 정수)
 * 이 함수는 첫 번째 인자의 [n]이 n+1번째 인자로 치환된 결과를 반환한다.
 * 
 * 예) xn_common.format('Hello, [0]', 'Cheol') === 'Hello, Cheol'
 */
function format(str) {
	// TODO: underscore의 template()처럼 컴파일된 녀석을 반환
	var safe,
		arg,
		args = Array.prototype.slice.call(arguments, 1),
		len = args.length;

	for (var i = 0; i < len; i++) {
		arg = args[i];
		safe = typeof arg === 'object' ? JSON.stringify(arg) : arg;
		str = str.replace(RegExp('\\['+i+'\\]', 'g'), safe);
	}
	return str;
}

function isUndefined( variable ) { return ( (variable == null || variable == "" || typeof(variable) == "undefined" )) }

//Request [GET]
function Request(valuename)
{
	var rtnval = "";
	var nowAddress = location.search;
	var parameters = new Array();
	parameters = (nowAddress.slice(nowAddress.indexOf("?")+1,nowAddress.length)).split("&");
	for(var i = 0 ; i < parameters.length ; i++) {
		if(parameters[i].indexOf(valuename) != -1) {
			rtnval = parameters[i].split("=")[1];
			if (isUndefined(rtnval)) rtnval = "";
			rtnval = decodeURIComponent(rtnval);
			break;
		}
	}
	return rtnval;
}

// 초 단위를 사람이 인식할 수 있는 시:분:초 형태로 변환한다.
function GetStartTimeString(startTime)
{
	var rtnStringTime = "";
	
	if (startTime >= 3600) //Hour
	{
		rtnStringTime += Math.floor(startTime / 3600)  + "시 " ;
		startTime -= Math.floor(startTime / 3600) * 3600;
	}

	if (startTime >= 60) //minute
	{
		rtnStringTime += Math.floor(startTime / 60) + "분 ";
		startTime -= Math.floor(startTime / 60) * 60;
	}
	
	//seconds	
	startTime = Math.round(startTime*100)/100;

	rtnStringTime += startTime;

	if (rtnStringTime.indexOf(".") != -1)
	{
		rtnStringTime =  rtnStringTime.substring(0, rtnStringTime.indexOf("."));
	}
	rtnStringTime += "초";
	
	return rtnStringTime;
}

// LMS에서 전달받은 targetUrl에서 LMS 사용자 구분 값을 구한다.
function GetLMSUser(targetUrl, lmsUserIdentifier) {
	var rtnval = "";
	var parameters = new Array();
	parameters = (targetUrl.slice(targetUrl.indexOf("?")+1,targetUrl.length)).split("&");
	for(var i = 0 ; i < parameters.length ; i++) {
		if(parameters[i].indexOf(lmsUserIdentifier) != -1) {
			rtnval = parameters[i].split("=")[1];
			if (isUndefined(rtnval)) rtnval = "";
			rtnval = decodeURIComponent(rtnval);
			break;
		}
	}
	return rtnval;
}

// LMS에 전송하기 위한 정보를 모두 cookie에 기록한다.
function setLMSCookieData(targetUrl, currentTime, cumulativeTime, page) {
	// 진도체크 사용 하지 않으면 return
	if (lms_url.length <= 0) return;
	// -9999: 전 구간 시청 완료 처리, -8888: seek 제한 사용하지 않음
	if (play_time == -9999 || play_time == -8888) return;
	// lmsUserValue가 없으면 return
	if (lmsUserValue.length <= 0) return;
	
	// 콘텐츠 별로 cookie를 저장한다.
	var path = window.location.pathname;

    //expire time을 1년으로 한다.
    var afterYear = new Date();
    var time = afterYear.getTime();
    time += 365 * 24 * 3600 * 1000;
    afterYear.setTime(time);

    // targetUrl
    var lmsUrlName = "up_lms_target_url";
    var lmsUrlValue = targetUrl;
    setCookie(path, lmsUserValue, lmsUrlName, lmsUrlValue, afterYear);

    // currentTime
    var currentTimeName = "up_lms_current_time";
    var currentTimeValue = currentTime;
    currentTimeValue = Math.round(currentTimeValue*1000)/1000;
    setCookie(path, lmsUserValue, currentTimeName, currentTimeValue, afterYear);

	// cumulativeTime
    var cumulativeTimeName = "up_lms_cumulative_time";
    var cumulativeTimeValue = cumulativeTime;
    cumulativeTimeValue = Math.round(cumulativeTimeValue*1000)/1000;
    setCookie(path, lmsUserValue, cumulativeTimeName, cumulativeTimeValue, afterYear);

    // page
    var pageName = "up_lms_page";
	var pageValue = page;
	setCookie(path, lmsUserValue, pageName, pageValue, afterYear);
}

// LMS에서 전달 받은 데이터와 cookie에 기록된 데이터를 비교한다.
function checkLMSCookieData() {
	// 진도체크 사용 하지 않으면 return
	if (lms_url.length <= 0) return;
	// -9999: 전 구간 시청 완료 처리, -8888: seek 제한 사용하지 않음
	if (play_time == -9999 || play_time == -8888) return;
	// lmsUserValue가 없으면 return
	if (lmsUserValue.length <= 0) return;

	var cookieCurrentTime = getCookie(lmsUserValue, "up_lms_current_time");
	if (typeof(cookieCurrentTime) != 'undefined') {
		cookieCurrentTime = parseFloat(cookieCurrentTime);
		// cookie에 기록된 값이 입력으로 들어온 startat과 다르면 
		// * 이어보기 시작 시간을 cookie에 있는 값으로 업데이트 한다.
        var parseStartat = parseFloat(startat);
        if (isNaN(parseStartat)) parseStartat = 0;
		if (Math.abs(cookieCurrentTime-parseStartat) > 1 && cookieCurrentTime != parseStartat) {
			SetContentStartTime(cookieCurrentTime);
		}	
	}

	var cookieCumulativeTime = getCookie(lmsUserValue, "up_lms_cumulative_time");
	if (typeof(cookieCumulativeTime) != 'undefined') {
		cookieCumulativeTime = parseFloat(cookieCumulativeTime);
		// cookie에 기록된 값이 입력으로 들어온 endat보다 크면 
		// * LMS에 정보를 다시 전송할 수 있도록 UniPlayer의 cumulativeTime을 업데이트한다.
        var parseEndat = parseFloat(endat);
        if (isNaN(parseEndat)) parseEndat = 0;
		if (Math.abs(cookieCumulativeTime-parseEndat) > 1 && cookieCumulativeTime > parseEndat) {
            // 모바일 seek 제한을 위한 값 업데이트
			play_time = cookieCumulativeTime;
            SetInitLimitTime(cookieCumulativeTime);
		}
	}
}

// 지정한 이름의 쿠키 값을 저장한다. expireDate는 Date() 클래스를 받는다.
function setCookie(path, lmsUser, name, value, expireDate) {
	if (isIE()) return setStorage(lmsUser, name, value);
	if (lmsUser.length > 0) name = name + "_" + lmsUser;
    var cookie = name + "=" + value;
    if (expireDate) {
        cookie += ";expires=" + expireDate.toUTCString();
    }
    if (path) {
    	cookie += ";path=" + path;
    }
    document.cookie = cookie;
}

function setStorage(lmsUser, name, value) {
	if (typeof(Storage) == "undefined") return;
	name = name + "_" + GetContentId();
	if (lmsUser.length > 0) name = name + "_" + lmsUser;
	window.localStorage.setItem(name, value);
}

// 지정한 이름의 쿠키 값을 얻는다.
function getCookie(lmsUser, name) {
	if (isIE()) return getStorage(lmsUser, name);
	if (lmsUser.length > 0) name = name + "_" + lmsUser;
    name = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return undefined;
}

function getStorage(lmsUser, name) {
	if (typeof(Storage) == "undefined") return undefined;
	name = name + "_" + GetContentId();
	if (lmsUser.length > 0) name = name + "_" + lmsUser;
	return window.localStorage.getItem(name);
}

function deleteAllCookies(path) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=" + path;
    }
}