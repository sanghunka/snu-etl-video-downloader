/**
  * 사이트별로 Property ID 변경 필요
 **/

// 구글 태그 ID
var tag_id = 'G-0VBQK73JBP';

// GA4 태그 설치
var script = document.createElement('script');
script.src = 'https://www.googletagmanager.com/gtag/js?id=' + tag_id;
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// 페이지 뷰
gtag('config', tag_id, {
	'custom_map': {
		'dimension1': '콘텐츠 아이디',
		'dimension2': '콘텐츠 유형',
		'dimension3': '플레이어 유형',
		'metric1': '시청수'
   }
});


// 콘텐츠 타입 얻기
var getContentTypeName = function (content_type) {
	switch (content_type) {
		case '1':
			return 'SYNCSLIDE';
		case '2':
			return 'MOVIE';
		case '3':
			return 'SILVERSTREAM';
		case '4':
			return 'SYNCTHINK';
		case '5':
			return 'EMBED';
		case '6':
			return 'SSSLIDE';
		case '7':
			return 'ESTAGE';
		case '9':
			return 'XENOGLOBAL';
		case '10':
			return 'PDF';
		case '11':
			return 'ONCAST';
		case '12':
			return 'PHOTOSET';
		case '13':
			return 'SCREENLECTURE';
		case '14':
			return 'LECTURECAM';
		case '15':
			return 'READYSTREAM';
		case '16':
			return 'WEBSTUDIO';
		case '18':
			return 'EVERLEC';
		case '19':
			return 'WBTZIP';
		case '20':
			return 'XENOGLOBAL_EMBED';
		case '21':
			return 'MOVIE_360';
		case '26':
			return 'AUDIO';
		case '27':
			return 'YOUTUBE';
		case '28':
			return 'MP4';
		case '29':
			return 'ZOOM';
	}
}

var event_category = '재생';
var isFirstPlaying = true;

window.xn_ga = {

	// ViewerLoaded(뷰어가 로딩되면 호출)
	afterViewerLoaded: function() {
		gtag('event', 'ViewerLoaded', {'event_category': event_category, 'event_label': content_title, 'value': 0});
	},
	
	// PlayerLoaded (플레이어가 로딩되면 호출. 단 SLPlayer/HTML5 뷰어의 경우는 재생 버튼을 보여준 직후 호출)
	afterPlayerLoaded: function() {
		gtag('event', 'PlayerLoaded', {'event_category': event_category, 'event_label': content_title, 'value': 0});
	},
	
	// DoStart (재생 버튼을 클릭하면 호출)
	afterDoStart: function() {
		// metric1: 시청수
		gtag('event', 'DoStart', {
				'event_category': event_category, 
				'event_label': content_title, 
				'value': 0, 
				'콘텐츠 아이디': content_id, 
				'콘텐츠 유형': getContentTypeName(content_type), 
				'플레이어 유형': playerType, 
				'시청수': 1
		});
	},
	
	// Player의 상태가 변경될때 호출됨.
	afterPlayStateChange: function(state)
	{	
		// state 설명
		// 0 : closed (media 파일이 열리지 않은 상태)
		// 1 : opening (media 파일이 열리는 중)
		// 2 : buffering (버퍼링)
		// 3 : playing (media 재생)
		// 4 : paused (media 재생 일시정지)
		// 5 : stopped (media 재생 정지)
		
		switch(state) {
			case PlayState.BUFFERING:
				gtag('event', 'Buffering', {'event_category': event_category, 'event_label': content_title, 'value': 0});
				break;
			case PlayState.PLAYING:
				if (isFirstPlaying ) {
					gtag('event', 'StartSucceeded', {'event_category': event_category, 'event_label': content_title, 'value': 0});
					isFirstPlaying = false;
				} else {
					gtag('event', 'Playing', {'event_category': event_category, 'event_label': content_title, 'value': 0});
				}
				break;
			case PlayState.PAUSED:
				gtag('event', 'Paused', {'event_category': event_category, 'event_label': content_title, 'value': 0});
				break;
		}
	},
	onHtml5VideoError: function(error) {
		// error.errorCode: HTML5 video 에러 코드
		// error.currentTime: 오류가 발생한 재생 시점

		// [errorCode]
		// 1: MEDIA_ERR_ABORTED "The fetching process for the media resource was aborted by the user agent at the user's request."
		// 2: MEDIA_ERR_NETWORK "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable."
		// 3: MEDIA_ERR_DECODE "An error of some description occurred while decoding the media resource, after the resource was established to be usable."
		// 4: MEDIA_ERR_SRC_NOT_SUPPORTED "The media resource indicated by the src attribute was not suitable."

		gtag('event', 'Html5VideoError', {'event_category': event_category, 'event_label': error.errorCode, 'value': error.currentTime});
	}
}