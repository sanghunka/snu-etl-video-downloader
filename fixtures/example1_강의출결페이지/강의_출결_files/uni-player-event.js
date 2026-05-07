function initUniPlayerEventListener(_apiManager) {
	var uniPlayerEvent = _apiManager.getPlayerEvent();
	var uniPlayerEventTarget = uniPlayerEvent.getEventTarget();
	uniPlayerEventTarget.addListener(PlayerEvent.PLAYER_LOADED, onPlayerLoaded);
	uniPlayerEventTarget.addListener(PlayerEvent.DO_START, onDoStart);
	uniPlayerEventTarget.addListener(PlayerEvent.PLAY_STATE_CHANGE, onPlayStateChange);
	uniPlayerEventTarget.addListener(PlayerEvent.TIME_UPDATE, onTimeUpdate);
	uniPlayerEventTarget.addListener(PlayerEvent.GO_TO_SLIDE, onGoToSlide);
	uniPlayerEventTarget.addListener(PlayerEvent.CONTENT_END, onContentEnd);
	uniPlayerEventTarget.addListener(PlayerEvent.PLAYER_ACTIVATED, onPlayerActivated);
	uniPlayerEventTarget.addListener(PlayerEvent.PLAYER_DEACTIVATED, onPlayerDeactivated);
	uniPlayerEventTarget.addListener(PlayerEvent.HTML5_VIDEO_ERROR, onHtml5VideoError);
}

/* GA 함수들이 정의되어 있는지 체크한다. */
function isExistGA() {
	return window.xn_ga ? true : false;
}

function onPlayerLoaded(event) {
	// ga 호출
	if(isExistGA && typeof(isExistGA) === 'function' && isExistGA()) {
		try {
			xn_ga.afterPlayerLoaded();	
		} catch(e) {
			$.get('/ga_fail.html?state=playerloaded&player=uniplayer');
		}
	}
}

function onDoStart(event) {
	// ga 호출
	if(isExistGA && typeof(isExistGA) === 'function' && isExistGA()) {
		try {
			xn_ga.afterDoStart();	
		} catch(e) {
			$.get('/ga_fail.html?state=dostart&player=uniplayer');	
		}
	}
}

function onPlayStateChange(event, state) {
	// cscript 호출
	afterPlayStateChange(state);
	// ga 호출
	if(isExistGA && typeof(isExistGA) === 'function' && isExistGA()) {
		try {
			xn_ga.afterPlayStateChange(state);
		} catch(e) {
			$.get('/ga_fail.html?state=' + state +'&player=uniplayer');
		}
	}
}

function onTimeUpdate(event) {
	try {
		// cscript 호출
		afterTimeUpdate();
		// ga 호출
	} catch(e) {
	}
}

function onGoToSlide(event) {
	try {
		// cscript 호출
		afterGotoSlide();
		// ga 호출
	} catch(e) {
	}
}

function onContentEnd(event) {
	try {
		// cscript 호출
		afterContentEnd();
		// ga 호출
	} catch(e) {
	}
}

function onPlayerDeactivated(event) {
	try {
		// cscript 호출
		afterPlayerDeactivated();
	} catch(e) {
	}
}

function onPlayerActivated(event) {
	try {
		// cscript 호출
		afterPlayerActivated();
	} catch(e) {
	}
}

function onHtml5VideoError(event, error) {
	// HTML5 Video error가 발생했을 때 이벤트
	// error.errorCode: HTML5 video 에러 코드
	// error.currentTime: 오류가 발생한 재생 시점

	// [errorCode]
	// 1: MEDIA_ERR_ABORTED "The fetching process for the media resource was aborted by the user agent at the user's request."
	// 2: MEDIA_ERR_NETWORK "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable."
	// 3: MEDIA_ERR_DECODE "An error of some description occurred while decoding the media resource, after the resource was established to be usable."
	// 4: MEDIA_ERR_SRC_NOT_SUPPORTED "The media resource indicated by the src attribute was not suitable."
	
	// ga 호출
	if (isExistGA && typeof(isExistGA) === 'function' && isExistGA()) {
		try {
			xn_ga.onHtml5VideoError(error);
		} catch(e) {
			$.get('/ga_fail.html?state=html5videoerror&player=uniplayer');
		}
	}
}