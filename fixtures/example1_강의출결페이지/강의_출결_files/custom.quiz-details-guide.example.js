/**
 * START: 퀴즈 세부사항 탭의 시험 출제 방법 관련 안내 문구 
 */
$(document).ready(function () {
    try {
        const isModuleTab = window.location.pathname.match(
            /\/courses\/(\d+)\/quizzes\/(\d+)\/edit$/
        );

        if (!!isModuleTab) {
            let quizOptionsForm = document.querySelector("#xn-auto-rescore-message");
            if (!quizOptionsForm) {
                quizOptionsForm = document.querySelector("#show_question_details_wrap");
            }

            if (!!quizOptionsForm) {
                const quizInfoDetail = {
                    ko: `
                        <div style="border: 1px solid #91D5FF; background-color: #E6F7FF; padding: 9px 16px; border-radius: 5px; margin-bottom: 24px;">
                            <p style="font-weight: bold; color: #1677FF; margin: 0; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0C4.70156 0 0 4.70156 0 10.5C0 16.2984 4.70156 21 10.5 21C16.2984 21 21 16.2984 21 10.5C21 4.70156 16.2984 0 10.5 0ZM11.25 15.5625C11.25 15.6656 11.1656 15.75 11.0625 15.75H9.9375C9.83438 15.75 9.75 15.6656 9.75 15.5625V9.1875C9.75 9.08438 9.83438 9 9.9375 9H11.0625C11.1656 9 11.25 9.08438 11.25 9.1875V15.5625ZM10.5 7.5C10.2056 7.49399 9.9253 7.37282 9.71923 7.1625C9.51315 6.95218 9.39773 6.66945 9.39773 6.375C9.39773 6.08055 9.51315 5.79782 9.71923 5.5875C9.9253 5.37718 10.2056 5.25601 10.5 5.25C10.7944 5.25601 11.0747 5.37718 11.2808 5.5875C11.4868 5.79782 11.6023 6.08055 11.6023 6.375C11.6023 6.66945 11.4868 6.95218 11.2808 7.1625C11.0747 7.37282 10.7944 7.49399 10.5 7.5Z" fill="#1890FF"/>
                                </svg>
                                문제그룹 이용하여 무작위 랜덤 퀴즈 출제 방법
                            </p>
                            <ol style="font-size: 14px; margin-left: 48px; line-height: 1.7em; margin-top: 10px; font-weight: 500; color:#000000;">
                                <li>[+ 새 문제 그룹] 클릭</li>
                                <li>문제그룹 세부 정보 설정(문제그룹명, 문제 수, 배점)</li>
                                <li>
                                    [ 
                                    <i class="icon-search"></i>
                                    문제은행으로 링크] 클릭 후 문제그룹 선택
                                </li>
                                <li>[그룹 만들기] 클릭</li>
                            </ol>
                            <p style="font-size: 14px; margin-left: 28px; margin-top: 10px; line-height: 1.5em; color:#000000;">
                                ※ [문제 그룹]을 활용하면, 그룹 내 문제를 무작위로 출제하여 응시자들이 서로 다른 문제를 풀도록 할 수 있습니다.
                            </p>
                        </div>
                    `,
                    en: `
                        <div style="border: 1px solid #91D5FF; background-color: #E6F7FF; padding: 9px 16px; border-radius: 5px; margin-bottom: 24px;">
                            <p style="font-weight: bold; color: #1677FF; margin: 0; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0C4.70156 0 0 4.70156 0 10.5C0 16.2984 4.70156 21 10.5 21C16.2984 21 21 16.2984 21 10.5C21 4.70156 16.2984 0 10.5 0ZM11.25 15.5625C11.25 15.6656 11.1656 15.75 11.0625 15.75H9.9375C9.83438 15.75 9.75 15.6656 9.75 15.5625V9.1875C9.75 9.08438 9.83438 9 9.9375 9H11.0625C11.1656 9 11.25 9.08438 11.25 9.1875V15.5625ZM10.5 7.5C10.2056 7.49399 9.9253 7.37282 9.71923 7.1625C9.51315 6.95218 9.39773 6.66945 9.39773 6.375C9.39773 6.08055 9.51315 5.79782 9.71923 5.5875C9.9253 5.37718 10.2056 5.25601 10.5 5.25C10.7944 5.25601 11.0747 5.37718 11.2808 5.5875C11.4868 5.79782 11.6023 6.08055 11.6023 6.375C11.6023 6.66945 11.4868 6.95218 11.2808 7.1625C11.0747 7.37282 10.7944 7.49399 10.5 7.5Z" fill="#1890FF"/>
                                </svg>
                                How to Create a Random Quiz Using Question Groups
                            </p>
                            <ol style="font-size: 14px; margin-left: 48px; line-height: 1.7em; margin-top: 10px; font-weight: 500; color:#000000;">
                                <li>Click [+ New Question Group]</li>
                                <li>Set the details of the question group (Group Name, Number of Questions, Points)</li>
                                <li>
                                    Click [                             
                                        <i class="icon-search"></i>
                                    Link to Question Bank] and select the question group
                                </li>
                                <li>Click [Create Group]</li>
                            </ol>
                            <p style="font-size: 14px; margin-left: 28px; margin-top: 10px; line-height: 1.5em; color:#000000;">
                                ※ By using [Question Groups], you can randomly present quiz questions so that participants answer different questions.
                            </p>
                        </div>
                    `
                };

                const infoDescription = quizInfoDetail[ENV.LOCALE] || quizInfoDetail['en'];

                // 새로운 div 요소 생성
                const quizInfoBox = document.createElement("div");
                quizInfoBox.className = "quiz-info-box";
                quizInfoBox.innerHTML = infoDescription;

                // quiz_options_form 이전에 삽입
                quizOptionsForm.parentNode.insertBefore(quizInfoBox, quizOptionsForm);
            }
        }
    } catch {}
});
/**
 * END: 퀴즈 세부사항 탭의 시험 출제 방법 관련 안내 문구
 */


/**
 * START: 퀴즈 문제 작성 탭의 무작위 랜덤 퀴즈 출제 방법 관련 안내 문구
 */
$(document).ready(function () {
    try {
        const isModuleTab = window.location.pathname.match(
            /\/courses\/(\d+)\/quizzes\/(\d+)\/edit$/
        );

        if (!!isModuleTab) {
            const quizOptionsForm = document.querySelector("#quiz_options_form");

            if (!!quizOptionsForm) {

                const quizInfoQuestions = {
                    ko: `
                        <div style="border: 1px solid #91D5FF; background-color: #E6F7FF; padding: 9px 16px; border-radius: 5px; margin-bottom: 16px;">
                            <p style="font-weight: bold; color: #1677FF; margin: 0; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0C4.70156 0 0 4.70156 0 10.5C0 16.2984 4.70156 21 10.5 21C16.2984 21 21 16.2984 21 10.5C21 4.70156 16.2984 0 10.5 0ZM11.25 15.5625C11.25 15.6656 11.1656 15.75 11.0625 15.75H9.9375C9.83438 15.75 9.75 15.6656 9.75 15.5625V9.1875C9.75 9.08438 9.83438 9 9.9375 9H11.0625C11.1656 9 11.25 9.08438 11.25 9.1875V15.5625ZM10.5 7.5C10.2056 7.49399 9.9253 7.37282 9.71923 7.1625C9.51315 6.95218 9.39773 6.66945 9.39773 6.375C9.39773 6.08055 9.51315 5.79782 9.71923 5.5875C9.9253 5.37718 10.2056 5.25601 10.5 5.25C10.7944 5.25601 11.0747 5.37718 11.2808 5.5875C11.4868 5.79782 11.6023 6.08055 11.6023 6.375C11.6023 6.66945 11.4868 6.95218 11.2808 7.1625C11.0747 7.37282 10.7944 7.49399 10.5 7.5Z" fill="#1890FF"/>
                                </svg>
                                시험(퀴즈) 출제 방법
                            </p>
                            <ol style="font-size: 14px; margin-left: 48px; line-height: 1.7em; margin-top: 10px; font-weight: 500; color:#000000;">
                                <li>퀴즈 세부 정보 작성 : 퀴즈명, 퀴즈 설명 등</li>
                                <li>퀴즈 유형 선택 : 평가용 퀴즈, 미평가 설문 등</li>
                                <li>평가 그룹 선택 : 중간고사, 기말고사, 과제 등</li>
                                <li>옵션 선택 : 시간 제한, 오답 여부 공개 등</li>
                                <li>퀴즈 이용 기간 설정</li>
                            </ol>
                        </div>
                    `,
                    en: `
                        <div style="border: 1px solid #91D5FF; background-color: #E6F7FF; padding: 9px 16px; border-radius: 5px; margin-bottom: 16px;">
                            <p style="font-weight: bold; color: #1677FF; margin: 0; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0C4.70156 0 0 4.70156 0 10.5C0 16.2984 4.70156 21 10.5 21C16.2984 21 21 16.2984 21 10.5C21 4.70156 16.2984 0 10.5 0ZM11.25 15.5625C11.25 15.6656 11.1656 15.75 11.0625 15.75H9.9375C9.83438 15.75 9.75 15.6656 9.75 15.5625V9.1875C9.75 9.08438 9.83438 9 9.9375 9H11.0625C11.1656 9 11.25 9.08438 11.25 9.1875V15.5625ZM10.5 7.5C10.2056 7.49399 9.9253 7.37282 9.71923 7.1625C9.51315 6.95218 9.39773 6.66945 9.39773 6.375C9.39773 6.08055 9.51315 5.79782 9.71923 5.5875C9.9253 5.37718 10.2056 5.25601 10.5 5.25C10.7944 5.25601 11.0747 5.37718 11.2808 5.5875C11.4868 5.79782 11.6023 6.08055 11.6023 6.375C11.6023 6.66945 11.4868 6.95218 11.2808 7.1625C11.0747 7.37282 10.7944 7.49399 10.5 7.5Z" fill="#1890FF"/>
                                </svg>
                                Quiz Creation Guide
                            </p>
                            <ol style="font-size: 14px; margin-left: 48px; line-height: 1.7em; margin-top: 10px; font-weight: 500; color:#000000;">
                                <li>Write Quiz Details: Quiz title, description, etc.</li>
                                <li>Select Quiz Type: Graded Quiz, Ungraded Survey, etc.</li>
                                <li>Select Assignment Group: Midterm Exam, Final Exam, Assignment, etc.</li>
                                <li>Choose Options: Time limit, Disclose incorrect answers, etc.</li>
                                <li>Set Quiz Availability Period</li>
                            </ol>
                        </div>
                    `
                };

                // 새로운 div 요소 생성
                const quizInfoBox = document.createElement("div");
                quizInfoBox.className = "quiz-info-box";
                quizInfoBox.innerHTML = quizInfoQuestions[ENV.LOCALE] || quizInfoQuestions['en'];

                // quiz-info-box 이전에 삽입
                quizOptionsForm.parentNode.insertBefore(quizInfoBox, quizOptionsForm);
            }
        }
    } catch {}
});
/**
 * END: 퀴즈 문제 작성 탭의 무작위 랜덤 퀴즈 출제 방법 관련 안내 문구
 */


/**
 * START: 새 퀴즈 생성 화면의 "오답 여부 표시하기" 옵션 체크 해제
 */
$(document).ready(function () {
    try {
        // 코스와 퀴즈 ID 가져오기
        const isQuizView = window.location.pathname.match(/\/courses\/(\d+)\/quizzes\/(\d+)\/edit/);
        if (!isQuizView) return;

        const [courseId, quizId] = isQuizView.slice(1);
        if (!courseId || !quizId) return;

        /**
         * 새 퀴즈 생성 화면인지 확인 (workflow_status === 'created')
         */
        fetch(`/learningx/api/v1/courses/${courseId}/quizzes/${quizId}/workflow_status`)
            .then(async (quizRes) => {
                if (!quizRes.ok) {
                    console.error('Failed to fetch quiz data');
                    return;
                }

                const { workflow_status } = await quizRes.json();

                // 새 퀴즈 생성 화면인 경우 처리
                if (workflow_status === 'created') {
                    const hideResultsCheckbox = document.querySelector(
                        '.option-group input[type="checkbox"][name="quiz[hide_results][never]"]'
                    );
                    
                    // checked 속성만 바뀌는 문제를 해결하기 위해 클릭 이벤트를 트리거해준다.
                    if (hideResultsCheckbox && hideResultsCheckbox.checked) {
                        hideResultsCheckbox.click();
                    }
                }
            })
            .catch((err) => {
                console.error('Error fetching workflow status:', err);
            });
    } catch (error) {
        console.error('An unexpected error occurred:', error);
    }
});
/**
 * END: 새 퀴즈 생성 화면의 "오답 여부 표시하기" 옵션 체크 해제
 */