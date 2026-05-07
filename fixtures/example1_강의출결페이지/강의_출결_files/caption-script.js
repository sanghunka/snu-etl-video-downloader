var isCaptionScriptShow = false;
var captionScriptList = null;
var captionScriptLangId = null;
var cueList = null;
var currentHighlightIndex = null;
var initLimitTime = null;
var searchCaptionList = [];
var searchCaptionIndex = 0;
var lastSearchKeyword = '';

function initCaptionScriptEventListener(_apiManager) {
	var uniPlayerEvent = _apiManager.getPlayerEvent();
	var uniPlayerEventTarget = uniPlayerEvent.getEventTarget();
    uniPlayerEventTarget.addListener(PlayerEvent.PLAY_STATE_CHANGE, function(e, state) { stateChangeViewerCaptionScript(state); })
    uniPlayerEventTarget.addListener(PlayerEvent.TIME_UPDATE, syncViewerCaptionScript);
    uniPlayerEventTarget.addListener(PlayerEvent.SHOW_CAPTION_SCRIPT, showViewerCaptionScript);
    uniPlayerEventTarget.addListener(PlayerEvent.HIDE_CAPTION_SCRIPT, hideViewerCaptionScript);
    uniPlayerEventTarget.addListener(PlayerEvent.UPDATE_CAPTION_SCRIPT_SEEK_LIMIT, function(e, time) { updateSeekLimit(time); });

    // 검색창 열기
    $('#caption-script-area .cs-header-search-icon').click(function() {
        showSearchInput();
        $('#caption-script-area .cs-search-input').focus();
    });
    // 검색창 닫기
    $('#caption-script-area .cs-search-input-close-icon').click(function() {
        hideSearchInput();
    });
    // 검색 키워드 입력 이벤트
    $('#caption-script-area .cs-search-input').keydown(function (e) {
        e.stopPropagation();
        if (e.keyCode == 13) {
            var keyword = $('#caption-script-area .cs-search-input').val();
            searchCaptionScript(keyword);
        }
    });
    // 이전 검색 결과로 이동
    $('#caption-script-area .cs-search-up-icon').click(function() {
        prevSearchCaption();
        $('#caption-script-area .cs-search-input').focus();
    });
    // 다음 검색 결과로 이동
    $('#caption-script-area .cs-search-down-icon').click(function() {
        nextSearchCaption();
        $('#caption-script-area .cs-search-input').focus();
    });
    // 언어 변경
    $('#caption-script-area .cs-header-lang-select').on('change', function(e) {
        captionScriptLangId = e.currentTarget.value;
        setCaptionScriptList();
        syncViewerCaptionScript();
        hideSearchInput();
    });
    // 닫기
    $('#caption-script-area .cs-header-close').click(function() {
        HideCaptionScript();
        hideViewerCaptionScript();
    });
}

function showViewerCaptionScript() {
    $('#video-player-area').addClass('caption-script');
    $('#caption-script-area').show();
    window.dispatchEvent(new Event('resize'));
    isCaptionScriptShow = true;
}

function hideViewerCaptionScript() {
    $('#video-player-area').removeClass('caption-script');
    $('#caption-script-area').hide();
    window.dispatchEvent(new Event('resize'));
    isCaptionScriptShow = false;
}

function showSearchInput() {
    $('#caption-script-area .cs-content').addClass('search');
    $('#caption-script-area .cs-search').show();
}

function hideSearchInput() {
    $('#caption-script-area .cs-content').removeClass('search');
    $('#caption-script-area .cs-search').hide();
    $('#caption-script-area .cs-search-input').val('');
    hideSearchResult();
    clearSearchCaption();
}

function stateChangeViewerCaptionScript(state) {
    // Player으로 최초 상태가 들어왔을 때 자막 데이터를 얻어서 화면을 구성한다.
    if (state == 3 && captionScriptList == null) {
        captionScriptList = GetCaptionList();
        initializeCaptionScriptUI();
    }
}

function initializeCaptionScriptUI() {
    // 상단 언어 선택 UI 구성
    captionScriptList.forEach(function (captionScriptData) {
        var captionLangOption = $(`<option value="${captionScriptData.id}">${captionScriptData.lang}</option>`)
        $('#caption-script-area .cs-header-lang-select').append(captionLangOption);
        if (captionScriptLangId == null) {
            captionScriptLangId = captionScriptData.id;
        }
    });
    
    setCaptionScriptList();
    if (initLimitTime != null) {
        updateSeekLimit(initLimitTime);
        initLimitTime = null;
    }
}

function setCaptionScriptList() {
    var captionScript = captionScriptList.find(function (captionScript) { return captionScript.id == captionScriptLangId });
    $('#caption-script-area #cs-script-list').empty();

    cueList = captionScript?.caption?.cues.filter(function (cue) {
        return cue.text.trim() != '';
    }).map(function (cue, index) {
        return {
            ...cue,
            index
        }
    });
    cueList.forEach(function (cue) {
        var captionScriptItem = $(`<li class="cs-script-item" data-index="${cue.index}"><div class="cs-script-item-text">${cue.text}</div><div class="cs-script-item-time">${formatSecondsToTimeStr(cue.startTime)}</li>`);
        $('#caption-script-area #cs-script-list').append(captionScriptItem);
        captionScriptItem.click(function(e) {
            if (!$(e.currentTarget).hasClass('seek-limit')) {
                Seek(cue.startTime);
            }
        })
    });
    
}

function syncViewerCaptionScript() {
    var time = GetCurrentTime();
    // video tag에서 얻는 시간이 32.329999 이런 식으로 나오는 경우가 있어서 소수점 2자리 까지 처리
    time = time.toFixed(2);
    var currentIndex = -1;
   
    for (var cueData of cueList) {
        if (cueData.startTime <= time && cueData.endTime > time) {
            currentIndex = cueData.index;
            break;
        }
        // 시작 시간이 현재 시간보다 큰 경우 뒤에 있는 데이터는 확인할 필요가 없다.
        if (cueData.startTime > time) {
            break;
        }
    }

    if (currentHighlightIndex === currentIndex) {
        return;
    }

    // 이전 highlight된 항목을 제거한다.
    if (currentHighlightIndex != null) {
        var currentHighlightElem = $(`#caption-script-area .cs-script-item[data-index=${currentHighlightIndex}]`);
        currentHighlightElem.removeClass('highlight');
        currentHighlightIndex = null;
    }

    // 해당 시간에 있는 자막이 있으면 highlight 처리를 한다.
    if (currentIndex != -1) {
        currentHighlightIndex = currentIndex;
        var targetItemElement = $(`#caption-script-area .cs-script-item[data-index=${currentIndex}]`);
        targetItemElement.addClass('highlight');

        // 해당 자막이 화면에 보이지 않으면 scroll을 처리한다.
        let viewportHeight = $('#caption-script-area .cs-content').height();
        let scrollTop = $('#caption-script-area .cs-content').scrollTop();
        let elementTop = targetItemElement.position().top + scrollTop;
        let elementHeight = targetItemElement.outerHeight();

        // 스크롤 영역 밖에 있는 경우 해당 element를 scroll 맨 하단으로 보내준다.
        if (!(elementTop >= scrollTop && elementTop + elementHeight <= scrollTop + viewportHeight)) {
            $('#caption-script-area .cs-content').scrollTop(elementTop + elementHeight - viewportHeight);
        }
    }
}

function updateSeekLimit(limitTime) {
    if (cueList == null) {
        initLimitTime = limitTime;
        return;
    }

    cueList.forEach(function (cue) {
        var cueElem = $(`#caption-script-area .cs-script-item[data-index=${cue.index}]`);
        if (cue.startTime > limitTime) {
            cueElem.addClass('seek-limit');
        } else {
            cueElem.removeClass('seek-limit');
        }
    });
}

function formatSecondsToTimeStr(seconds) {
    seconds = parseInt(seconds);
    let minute = parseInt(seconds / 60);
    seconds = seconds - minute * 60;
    var hour = parseInt(minute / 60);
    minute = minute - hour * 60;

    if (hour > 0) {
        return `${String(hour)}:${String(minute).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
	return `${String(minute).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function searchCaptionScript(keyword) {
    keyword = keyword.trim();

    // 같은 키워드 검색이 들어오면 다음 검색 결과로 이동하자
    if (keyword !== "" && lastSearchKeyword == keyword && searchCaptionList.length > 0) {
        nextSearchCaption();
        return;
    }

    // 기존 검색 결과 초기화
    clearSearchCaption();
    hideSearchResult();

    lastSearchKeyword = keyword;

    // 빈 키워드 입력시 아무것도 하지 않는다.
    if (keyword == "") {
        return;
    }

    // 전체 captionScriptItem을 돌면서 내용을 확인하고 겹치면 텍스트 내용을 변경한다.
    var captionScriptElems = $('.cs-script-item');
    for (var i=0; i<captionScriptElems.length; i++) {
        var captionScriptElem = $(captionScriptElems[i]);
        var captionTextElem = captionScriptElem.find('.cs-script-item-text');
        var captionText = captionTextElem.text();

        // keyword를 포함하는지 확인한다.
        var findIndex = captionText.toLowerCase().indexOf(keyword.toLowerCase());
        if (findIndex != -1) {
            // 검색 keyword를 <mark>표시한다.
            var leftText = captionText.substring(0, findIndex);
            var findText = captionText.substring(findIndex, findIndex + keyword.length);
            var rightText = captionText.substring(findIndex + keyword.length);

            // 최초 검색 결과는 current class를 추가한다.
            captionTextElem.html(`${leftText}<mark class="${searchCaptionList.length == 0 ? 'current' : ''}">${findText}</mark>${rightText}`);

            // 검색 결과 이동을 위한 index를 저장
            var captionIndex = captionScriptElem.attr('data-index');
            searchCaptionList.push(captionIndex);
        }
    }

    // 검색 결과가 있는 경우 화면 UI 변경
    if (searchCaptionList.length > 0) {
        showSearchResult();
    }
}

function clearSearchCaption() {
    cueList.forEach(function (cue) {
        var captionScriptElem = $(`#caption-script-area .cs-script-item[data-index=${cue.index}]`);
        captionScriptElem.find('.cs-script-item-text').text(cue.text);
    });

    searchCaptionList = [];
    searchCaptionIndex = 0;
    lastSearchKeyword = '';
}

function showSearchResult() {
    $('#caption-script-area .cs-search-result').css('display', 'flex');
    $('#caption-script-area .cs-search-input').addClass('result');
    changeSearchCaptionIndex(0);
}

function hideSearchResult() {
    $('#caption-script-area .cs-search-result').hide();
    $('#caption-script-area .cs-search-input').removeClass('result');
}

function changeSearchCaptionIndex(newIndex) {
    // 검색 키워드 Highlight 처리
    var currentSearchCaptionElem = $(`#caption-script-area .cs-script-item[data-index=${searchCaptionList[searchCaptionIndex]}]`);
    currentSearchCaptionElem.find('mark').removeClass('current');
    var nextSearchCaptionElem = $(`#caption-script-area .cs-script-item[data-index=${searchCaptionList[newIndex]}]`);
    nextSearchCaptionElem.find('mark').addClass('current');

    // 해당 자막이 화면에 보이지 않으면 scroll을 처리한다.
    let viewportHeight = $('#caption-script-area .cs-content').height();
    let scrollTop = $('#caption-script-area .cs-content').scrollTop();
    let elementTop = nextSearchCaptionElem.position().top + scrollTop;
    let elementHeight = nextSearchCaptionElem.outerHeight();
    // 스크롤 영역 밖에 있는 경우 해당 element를 scroll 맨 하단으로 보내준다.
    if (!(elementTop >= scrollTop && elementTop + elementHeight <= scrollTop + viewportHeight)) {
        $('#caption-script-area .cs-content').scrollTop(elementTop + elementHeight - viewportHeight);
    }

    $('#caption-script-area .cs-search-count').text(`${newIndex+1}/${searchCaptionList.length}`);
    searchCaptionIndex = newIndex;
}

function nextSearchCaption() {
    if (searchCaptionIndex == searchCaptionList.length - 1) {
        changeSearchCaptionIndex(0);
        return;
    }

    changeSearchCaptionIndex(searchCaptionIndex + 1);
}

function prevSearchCaption() {
    if (searchCaptionIndex == 0) {
        changeSearchCaptionIndex(searchCaptionList.length -1);
        return;
    }

    changeSearchCaptionIndex(searchCaptionIndex - 1);
}