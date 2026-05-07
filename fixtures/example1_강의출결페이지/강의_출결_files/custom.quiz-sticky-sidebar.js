/**
 * START: 퀴즈 응시 페이지에서 사이드바 스크롤 고정 (PC, 모바일)
 * - PC: right-side-wrapper가 스크롤해도 상단에 고정 (sticky)
 * - 모바일: right-side-wrapper를 body로 이동 후 fixed, 좌우 50% 레이아웃
 *
 * 관련 이슈: LXCCUP-254, LXCCUP-275
 */
(function() {
    'use strict';

    var MOBILE_BREAKPOINT = 768;
    var LAYOUT_ID = 'quiz-mobile-layout';
    var SPACER_ID = 'quiz-header-spacer';

    function getSpacerHeight() {
      // 시험 및 설문에는 100px 공간이 필요하므로 mobile-header-title.expandable 요소가 없으면 100px 공간을 추가함.
      // (주차학습에는 공간이 필요하지 않으므로 mobile-header-title.expandable 요소가 있으면 0px 공간을 추가함.)
        return document.querySelector('.mobile-header-title.expandable') ? '0px' : '100px';
    }

    function isMobile() {
        return window.innerWidth <= MOBILE_BREAKPOINT;
    }

    function isQuizTakePage() {
        return /\/courses\/\d+\/quizzes\/\d+\/take/.test(window.location.pathname);
    }

    /**
     * 모바일: DOM 재구성 및 스타일 적용
     */
    function applyMobileStyling() {
        var wrapper = document.getElementById('right-side-wrapper');
        if (!wrapper) return;

        // body로 이동
        if (wrapper.parentNode !== document.body) {
            document.body.appendChild(wrapper);
        }

        // wrapper 스타일
        Object.assign(wrapper.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            width: '100%',
            zIndex: '99999',
            backgroundColor: '#ffffff',
            padding: '10px 0',
            boxSizing: 'border-box',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderBottom: '1px solid #ddd',
            isolation: 'isolate'
        });

        // right-side 스타일
        var rightSide = document.getElementById('right-side');
        if (rightSide) {
            Object.assign(rightSide.style, {
                backgroundColor: '#ffffff',
                width: '100%',
                margin: '0',
                padding: '0'
            });
        }

        // 레이아웃 재구성 (한 번만)
        if (!document.getElementById(LAYOUT_ID)) {
            var innerDiv = rightSide && rightSide.querySelector(':scope > div');
            var questionHeader = rightSide && rightSide.querySelector('h3');
            var questionList = document.getElementById('question_list');
            var quizTimeElapsed = document.getElementById('quiz-time-elapsed');

            if (innerDiv && questionHeader && questionList && quizTimeElapsed) {
                // 레이아웃 컨테이너
                var layout = document.createElement('div');
                layout.id = LAYOUT_ID;
                Object.assign(layout.style, {
                    display: 'flex',
                    width: '100%'
                });

                // 좌측 50%: 문제 목록
                var leftCol = document.createElement('div');
                Object.assign(leftCol.style, {
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                });
                questionHeader.style.cssText = 'margin: 0 0 5px 0; font-size: 14px;';
                questionList.style.cssText = 'max-height: 80px; overflow-y: auto; margin: 0; padding: 0;';

                // list_question 요소들 좌우 padding 추가 (스크롤 영역 확보)
                var listItems = questionList.querySelectorAll('.list_question');
                for (var i = 0; i < listItems.length; i++) {
                    listItems[i].style.padding = '0 20px';
                }

                leftCol.appendChild(questionHeader);
                leftCol.appendChild(questionList);

                // 우측 50%: 시간
                var rightCol = document.createElement('div');
                Object.assign(rightCol.style, {
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                });
                rightCol.appendChild(quizTimeElapsed);

                layout.appendChild(leftCol);
                layout.appendChild(rightCol);

                innerDiv.innerHTML = '';
                innerDiv.appendChild(layout);
            }
        }

        // 콘텐츠 상단 여백 (한 번만)
        var quizHeader = document.querySelector('.quiz-header');
        var quizTitle = quizHeader && quizHeader.querySelector('h1');
        if (quizTitle && !document.getElementById(SPACER_ID)) {
            var spacer = document.createElement('div');
            spacer.id = SPACER_ID;
            spacer.style.height = getSpacerHeight();
            quizTitle.parentNode.insertBefore(spacer, quizTitle);
        }

        // body padding
        document.body.style.paddingTop = wrapper.offsetHeight + 'px';
    }

    /**
     * PC: sticky 포지션 적용
     */
    function applyPCStyling() {
        var wrapper = document.getElementById('right-side-wrapper');
        if (wrapper) {
            Object.assign(wrapper.style, {
                position: 'sticky',
                top: '0',
                alignSelf: 'flex-start'
            });
        }
    }

    function applyStyling() {
        if (!isQuizTakePage()) return;

        try {
            isMobile() ? applyMobileStyling() : applyPCStyling();
        } catch (e) {
            console.error('Quiz sidebar styling error:', e);
        }
    }

    $(document).ready(function() {
        if (!isQuizTakePage()) return;

        // 초기 실행 및 지연 재실행
        applyStyling();
        setTimeout(applyStyling, 500);
        setTimeout(applyStyling, 1000);

        // 모바일: 주기적 확인 (Canvas DOM 재조작 대응)
        if (isMobile()) {
            setInterval(applyMobileStyling, 1000);
        }

        // 리사이즈 대응
        var resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                var wrapper = document.getElementById('right-side-wrapper');
                if (wrapper) wrapper.style.cssText = '';
                document.body.style.paddingTop = '';
                applyStyling();
            }, 250);
        });
    });
})();
/**
 * END: 퀴즈 응시 페이지에서 사이드바 스크롤 고정 (PC, 모바일)
 */
