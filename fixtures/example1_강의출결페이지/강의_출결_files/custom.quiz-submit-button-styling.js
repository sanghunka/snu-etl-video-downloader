/**
 * 퀴즈 응시 페이지에서 퀴즈 제출 버튼 UI 개선
 * - 제출 버튼을 가운데로 이동 + 빨간색으로 변경
 *
 */
(function() {
    'use strict';

    /**
     * 퀴즈 제출 버튼 스타일 적용
     */
    function applyQuizSubmitButtonStyling() {
        try {
            // 퀴즈 응시 페이지 확인 (preview 포함)
            var isQuizTakePage = window.location.pathname.match(
                /\/courses\/(\d+)\/quizzes\/(\d+)\/take/
            );

            if (!isQuizTakePage || isQuizTakePage.length === 0) {
                return;
            }

            var submitButton = document.getElementById('submit_quiz_button');
            var formActions = document.querySelector('.form-actions');

            if (!submitButton || !formActions) {
                return;
            }

            // 제출 버튼 색상을 빨간색으로 변경
            submitButton.style.backgroundColor = '#D9534F';
            submitButton.style.borderColor = '#D43F3A';
            submitButton.style.color = '#ffffff';

            // hover 효과를 위한 이벤트 리스너
            submitButton.addEventListener('mouseenter', function() {
                if (!this.disabled) {
                    this.style.backgroundColor = '#C9302C';
                    this.style.borderColor = '#AC2925';
                }
            });

            submitButton.addEventListener('mouseleave', function() {
                if (!this.disabled) {
                    this.style.backgroundColor = '#D9534F';
                    this.style.borderColor = '#D43F3A';
                }
            });

            // 제출 버튼을 중앙으로 이동
            formActions.style.textAlign = 'center';
            formActions.style.display = 'flex';
            formActions.style.flexDirection = 'column';
            formActions.style.alignItems = 'center';
            formActions.style.gap = '10px';

            // 저장 표시 텍스트는 중앙 정렬
            var lastSavedIndicator = document.getElementById('last_saved_indicator');
            if (lastSavedIndicator) {
                lastSavedIndicator.style.width = '100%';
                lastSavedIndicator.style.textAlign = 'center';
                lastSavedIndicator.style.marginBottom = '10px';
            }

            submitButton.style.display = 'inline-block';
            submitButton.style.minWidth = '200px';

        } catch (error) {
            console.error('Error applying quiz submit button styling:', error);
        }
    }

    // DOM이 준비되면 실행
    $(document).ready(function() {
        // 초기 실행
        applyQuizSubmitButtonStyling();

        // 동적으로 로드되는 요소를 위해 약간의 지연 후 재실행
        setTimeout(applyQuizSubmitButtonStyling, 500);
    });
})();
/**
 * END: 퀴즈 응시 페이지에서 퀴즈 제출 버튼 UI 개선
 */