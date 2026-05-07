/**
 * START: 퀴즈 편집 화면에 [AI 시험 감독 사용 여부] 설정 추가
 */
$(document).ready(function () {
    if (!ENV['current_user_roles']) return;
    // 현재 사용자가 운영자 또는 교수자가 아니면 return
    const allowedRoles = ['admin', 'teacher'];
    if (!allowedRoles.some(role => ENV['current_user_roles'].includes(role))) return;

    // 시험 생성 페이지에서만 동작
    const isQuizEdit = window.location.pathname.match(
        /\/courses\/(\d+)\/quizzes\/(\d+)\/edit$/
    );
    if (!isQuizEdit) return;

    const [courseId, quizId] = isQuizEdit.slice(1);
    if (!courseId || !quizId) return;

    const maxRetries = 5;
    const retryDelay = 500;
    let retryCount = 0;

    function createCheatingPreventionOptionInQuizEdit() {
        try {

            const optionGroupElement = document.querySelector("#quiz_edit_wrapper #quiz_tabs #quiz_options_form .option-group");
            const optionGroupParentElement = optionGroupElement.parentElement;

            // 웹라우트를 통해 AI 시험 감독사용 옵션을 가져온다.
            // 웝라우트 자체에서도 운영자, 수업 ID, 퀴즈 ID에 대한 Validation을 하고 있다.
            fetch(`/learningx/courses/${courseId}/quizzes/${quizId}/cheating-prevention/edit`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(responseText => {
                    if (!responseText) return;

                    const cheatingPreventionCheckbox = document.createElement('div');
                    cheatingPreventionCheckbox.innerHTML = responseText;
                    optionGroupParentElement.appendChild(cheatingPreventionCheckbox.firstChild);

                    const checkbox = document.getElementById('quiz_use_ai_proctor');

                    // HTML이 잘 추가되면 체크박스 상태 변경 시 수정 요청을 보낼 수 있도록 event handler을 추가한다.
                    if (checkbox) {
                        checkbox.addEventListener('change', function () {
                            const xnToken = document.cookie?.split('; ').find(row => row.startsWith('xn_api_token'))?.split('=')[1];
                            if (!xnToken) return;

                            fetch(`/learningx/api/v1/courses/${courseId}/quizzes/${quizId}/cheating-prevention`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${xnToken}`,
                                },
                                body: JSON.stringify({ _method: "PUT", enabled: this.checked }),
                            })
                        });
                    }
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        } catch (err) {
            if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(createCheatingPreventionOptionInQuizEdit, retryDelay);
            }
        }
    }

    createCheatingPreventionOptionInQuizEdit();
});
/**
 * END: 퀴즈 편집 화면에 [AI 시험 감독 사용 여부] 설정 추가
 */

/**
 * START: 퀴즈 상세보기 화면에 [AI 시험 감독] 상태 및 [AI 시험 감독 리포트] 버튼 추가
 */
$(document).ready(function () {
    if (!ENV['current_user_roles']) return;
    // 현재 사용자가 운영자 또는 교수자가 아니면 return
    const allowedRoles = ['admin', 'teacher'];
    if (!allowedRoles.some(role => ENV['current_user_roles'].includes(role))) return;

    // 시험 생성 페이지에서만 동작
    const isQuizView = window.location.pathname.match(
        /\/courses\/(\d+)\/quizzes\/(\d+)/
    );
    if (!isQuizView) return;

    const [courseId, quizId] = isQuizView.slice(1);
    if (!courseId || !quizId) return;


    const maxRetries = 5;
    const retryDelay = 500;
    let retryCount = 0;

    function createCheatingPreventionInQuizView() {
        try {
            const optionGroupElement = document.querySelector(".quizzes header.quiz-header fieldset .control-group");
            const optionGroupParentElement = optionGroupElement.parentElement;

            // 웹라우트를 통해 AI 시험 감독사용 상태값을 가져온다.
            // 웝라우트 자체에서도 운영자, 수업 ID, 퀴즈 ID에 대한 Validation을 하고 있다.
            fetch(`/learningx/courses/${courseId}/quizzes/${quizId}/cheating-prevention`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(responseText => {
                    if (!responseText) return;
                    
                    const cheatingPreventionCheckbox = document.createElement('div');
                    cheatingPreventionCheckbox.innerHTML = responseText;
                    optionGroupParentElement.appendChild(cheatingPreventionCheckbox.firstChild);
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        } catch (err) {
            if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(createCheatingPreventionInQuizView, retryDelay);
            }
        }
    }

    createCheatingPreventionInQuizView();
});
/**
 * END: 퀴즈 상세보기 화면에 [AI 시험 감독] 상태 및 [AI 시험 감독 리포트] 버튼 추가
 */


/**
 * START: 퀴즈 편집 화면에 [시험 응시 전 필수 동의 사용] 설정 추가
 */
$(document).ready(function () {
    if (!ENV['current_user_roles']) return;
    // 현재 사용자가 운영자 또는 교수자가 아니면 return
    const allowedRoles = ['admin', 'teacher'];
    if (!allowedRoles.some(role => ENV['current_user_roles'].includes(role))) return;

    // 시험 생성 페이지에서만 동작
    const isQuizEdit = window.location.pathname.match(
        /\/courses\/(\d+)\/quizzes\/(\d+)\/edit$/
    );
    if (!isQuizEdit) return;

    const [courseId, quizId] = isQuizEdit.slice(1);
    if (!courseId || !quizId) return;

    const maxRetries = 5;
    const retryDelay = 500;
    let retryCount = 0;

    function createPreExamConsentOptionInQuizEdit() {
        try {

            const optionGroupElement = document.querySelector("#quiz_edit_wrapper #quiz_tabs #quiz_options_form .option-group");
            const optionGroupParentElement = optionGroupElement.parentElement;

            // 웹라우트를 통해 시험 응시 전 필수 동의 사용 옵션을 가져온다.
            // 웝라우트 자체에서도 운영자, 수업 ID, 퀴즈 ID에 대한 Validation을 하고 있다.
            fetch(`/learningx/courses/${courseId}/quizzes/${quizId}/pre_exam_consent/edit`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(responseText => {
                    if (!responseText) return;

                    const preExamConsentCheckbox = document.createElement('div');
                    preExamConsentCheckbox.innerHTML = responseText;
                    optionGroupParentElement.appendChild(preExamConsentCheckbox.firstChild);

                    const checkbox = document.getElementById('quiz_use_pre_exam_consent');

                    // HTML이 잘 추가되면 체크박스 상태 변경 시 수정 요청을 보낼 수 있도록 event handler을 추가한다.
                    if (checkbox) {
                        checkbox.addEventListener('change', function () {
                            const xnToken = document.cookie?.split('; ').find(row => row.startsWith('xn_api_token'))?.split('=')[1];
                            if (!xnToken) return;

                            fetch(`/learningx/api/v1/courses/${courseId}/quizzes/${quizId}/pre_exam_consent`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${xnToken}`,
                                },
                                body: JSON.stringify({ _method: "PUT", enabled: this.checked }),
                            })
                        });
                    }
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        } catch (err) {
            if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(createCheatingPreventionOptionInQuizEdit, retryDelay);
            }
        }
    }

    createPreExamConsentOptionInQuizEdit();
});
/**
 * END: 퀴즈 편집 화면에 [시험 응시 전 필수 동의 사용] 설정 추가
 */

/**
 * START: 학생 과제 화면에 온라인 시험 전 필수 준비사항 추가 + 시험 응시 전 동의 기능 표기
 */
$(document).ready(function () {
    if (!ENV['current_user_roles']) return;

    // 현재 사용자가 학생이 아니면 return
    const allowedRoles = ['student'];
    if (!allowedRoles.some(role => ENV['current_user_roles'].includes(role))) return;

    // 시험 생성 페이지에서만 동작
    const isQuizView = window.location.pathname.match(
        /\/courses\/(\d+)\/quizzes\/(\d+)/
    );

    if (!isQuizView) return;

    const [courseId, quizId] = isQuizView.slice(1);
    if (!courseId || !quizId) return;

    // User Agent로 브라우저 정보 가져오기
    const userAgent = navigator.userAgent;

    const maxRetries = 5;
    const retryDelay = 500;
    let retryCount = 0;

    // CSS에서 숨긴 버튼을 다시 보이게 하는 함수
    function restoreButtons() {
        const button = findQuizTakeButton();

        if (button) {
            // enableQuizTakeButton을 사용하여 완전히 복원 (tabindex, aria-disabled, 이벤트 핸들러 모두 제거)
            enableQuizTakeButton(button);
        }
    }

    function createQuizPrepInfoWithButtonControl() {
        try {
            const quizSubmissionVersionTable = document.querySelector(".quizzes header.quiz-header #quiz-submission-version-table");
            const takeQuizButtonContainer = document.querySelector(".quizzes header.quiz-header .take_quiz_button");

            if (!quizSubmissionVersionTable) {
                if (retryCount < maxRetries) {
                    retryCount++;
                    setTimeout(createQuizPrepInfoWithButtonControl, retryDelay);
                }
                return;
            }

            // 웹라우트를 통해 AI 시험 감독사용 상태값을 가져온다.
            // 웝라우트 자체에서도 운영자, 수업 ID, 퀴즈 ID에 대한 Validation을 하고 있다.
            fetch(`/learningx/courses/${courseId}/quizzes/${quizId}/cheating-prevention/prep?user_agent=${userAgent}`)
                .then(response => {
                    if (!response.ok) {
                        restoreButtons();
                        return null;
                    }
                    return response.text();
                })
                .then(responseText => {
                    if (!responseText) {
                        restoreButtons();
                        return;
                    }
                    // AI 시험 감독이 활성화된 경우: 준비사항 UI 추가 + 버튼 회색처리로 표시
                    const quizPrepInfo = document.createElement('div');
                    quizPrepInfo.innerHTML = responseText;

                    if (takeQuizButtonContainer) {
                        const takeQuizButtonContainerParentElement = takeQuizButtonContainer.parentElement;
                        takeQuizButtonContainerParentElement.insertBefore(quizPrepInfo.firstChild, takeQuizButtonContainer);
                    } else if (quizSubmissionVersionTable) {
                        const quizSubmissionVersionTableParentElement = quizSubmissionVersionTable.parentElement;
                        quizSubmissionVersionTableParentElement.insertBefore(quizPrepInfo.firstChild, quizSubmissionVersionTable);
                    }

                    // 퀴즈 응시 버튼을 찾아서 미리 비활성화 (보이게 하기 + 회색처리 + 클릭 차단)
                    const quizTakeButton = findQuizTakeButton();

                    const prepContainer = document.getElementById('xn_cheating_prevention_view_prep');
                    const isBeforeQuizStart = prepContainer.dataset.is_before_quiz_start;
                    const preExamConsentBox = document.querySelector('.xn_pre_exam_consent_box');
                    const xncpvpHeader = document.querySelector('.xncpvp_header');
                    const allowHeaderDisplay = prepContainer.dataset.allow_header_display;
                    const trustLockBrowserGuide = document.querySelector('.xncpvp_box');

                    // 시험 응시가 완료된 경우 동의 박스를 숨김(시험전에는 보여줘야함)
                    // 시험전 동의만 옵션이 켜져있는 경우에는 헤더도 같이 숨긴다.
                    if(!quizTakeButton && isBeforeQuizStart === 'false' && preExamConsentBox && allowHeaderDisplay === 'false') {
                        preExamConsentBox.style.display = 'none';
                        if (!trustLockBrowserGuide) {
                            xncpvpHeader.style.display = 'none';
                        }
                    }

                    // 퀴즈 응시 버튼이 있으면 체크박스 유무에 따라 바로 활성화/비활성화 결정
                    if (quizTakeButton) {
                        quizTakeButton.style.display = 'inline-block';

                        // 체크박스 바로 확인
                        const aiCheckboxes = document.querySelectorAll('input[name="ai_notice[]"]');
                        const consentCheckboxes = document.querySelectorAll('.xnpecb-consent-item-checkbox');

                        // 체크박스가 있으면 비활성화, 없으면 바로 활성화
                        if (aiCheckboxes.length > 0 || consentCheckboxes.length > 0) {
                            forceDisableQuizButton(quizTakeButton);
                        } else {
                            enableQuizTakeButton(quizTakeButton);
                        }
                    }

                    // 버튼 랜더링 후 가이드 모달 핸들러들과 체크박스 검증 설정
                    setTimeout(async function() {
                        controlQuizButton(quizTakeButton);
                        handleClickTrustLockBrowserGuide();
                        handleClickProctoringXGuide();
                        handleClickProctoringXInstall();
                        handleClickCompatibilityGuide();
                    }, 100);
                })
                .catch(error => {
                    restoreButtons();
                });
        } catch (err) {
            restoreButtons();
        }
    }

    function findQuizTakeButton() {
        // 1) 기본: id=take_quiz_link 우선
        const byId = document.getElementById('take_quiz_link') || document.querySelector('a#take_quiz_link');
        if (byId) return byId;

        // 2) 재응시 등 id가 없는 경우: 컨테이너 내부의 링크 찾기
        const containerSelectors = [
            '#take_quiz_button',
            '.take_quiz_button',
            'div#take_quiz_button',
            'div.take_quiz_button'
        ];

        for (const sel of containerSelectors) {
            const container = document.querySelector(sel);
            if (!container) continue;
            const link = container.querySelector('a[href]');
            if (link) return link;
        }

        return null;
    }

    // 퀴즈 응시 버튼 핸들러: AI 감독 + 시험 응시 전 동의 체크박스 이벤트 리스너 설정
    function controlQuizButton(button) {
        setTimeout(() => {
            // AI 시험 감독 관련 체크박스들
            const aiCheckboxes = document.querySelectorAll('input[name="ai_notice[]"]');

            // 시험 응시 전 동의 관련 체크박스들
            const consentCheckboxes = document.querySelectorAll('.xnpecb-consent-item-checkbox');
            const consentAllCheckbox = document.querySelector('.xnpecb-consent-all-text-item-checkbox');

            // 시험 응시 전 동의 체크박스 전체 선택/해제 로직 설정
            if (consentCheckboxes.length > 0 && consentAllCheckbox) {
                controlPreExamConsentSelectAll(consentCheckboxes, consentAllCheckbox);
            }

            // AI 체크박스가 없고 동의 체크박스도 없으면 이미 활성화 상태이므로 리턴
            if (aiCheckboxes.length === 0 && consentCheckboxes.length === 0) {
                return;
            }

            // 모든 체크박스에 이벤트 리스너 추가
            [...aiCheckboxes, ...consentCheckboxes, ...(consentAllCheckbox ? [consentAllCheckbox] : [])].forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    validateQuizButtonActivation(button, aiCheckboxes, consentCheckboxes);
                });
            });

            // 초기 상태 검증 (체크박스가 이미 체크되어 있을 수 있으므로)
            validateQuizButtonActivation(button, aiCheckboxes, consentCheckboxes);
        }, 500);
    }

    // 시험 응시 전 동의 체크박스 전체 선택/해제 기능 설정
    function controlPreExamConsentSelectAll(individualCheckboxes, selectAllCheckbox) {
        // 개별 체크박스 변경 시 전체 선택 체크박스 상태 업데이트
        individualCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const allChecked = Array.from(individualCheckboxes).every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked;
            });
        });

        // 전체 선택 체크박스 클릭 시 모든 개별 체크박스 상태 변경
        selectAllCheckbox.addEventListener('change', function() {
            const shouldCheck = this.checked;
            individualCheckboxes.forEach(checkbox => {
                checkbox.checked = shouldCheck;
            });
        });
    }

    // 퀴즈 응시 버튼 비활성화 (스타일 + 클릭 차단)
    function forceDisableQuizButton(button) {
        // CSS의 :not() 선택자를 해제하기 위해 클래스 추가
        button.classList.remove('xn-unlocked-quiz-btn');
        button.classList.add('xn-locked-quiz-btn');

        button.style.display = 'inline-block';
        button.style.setProperty('background-color', '#6c757d', 'important');
        button.style.setProperty('border-color', '#6c757d', 'important');
        button.style.setProperty('color', '#ffffff', 'important');
        button.style.setProperty('opacity', '0.65', 'important');
        button.style.setProperty('cursor', 'not-allowed', 'important');
        button.style.setProperty('pointer-events', 'none', 'important');

        // 키보드(Enter/Space) 활성은 pointer-events로 막히지 않으므로 기본동작 차단
        // 핸들러를 프로퍼티에 보관해 두었다가 해제 시 제거
        if (!button.__xnPreventHandler) {
            button.__xnPreventHandler = function(e) {
                e.preventDefault();
                e.stopPropagation();
            };
        }

        button.addEventListener('click', button.__xnPreventHandler, true);
        button.dataset.buttonDisabled = 'true';
    }

    // 퀴즈 응시 버튼 활성화
    function enableQuizTakeButton(button) {
        // CSS의 :not() 선택자를 해제하기 위해 클래스 추가
        button.classList.remove('xn-locked-quiz-btn');
        button.classList.add('xn-unlocked-quiz-btn');

        button.style.removeProperty('background-color');
        button.style.removeProperty('border-color');
        button.style.removeProperty('color');
        button.style.removeProperty('opacity');
        button.style.removeProperty('cursor');
        button.style.removeProperty('pointer-events');

        // 기본동작 차단 리스너 제거
        if (button.__xnPreventHandler) {
            button.removeEventListener('click', button.__xnPreventHandler, true);
            delete button.__xnPreventHandler;
        }

        button.dataset.buttonDisabled = 'false';
        return button;
    }

    function validateQuizButtonActivation(button, aiCheckboxes, consentCheckboxes) {
        if (!button) return;

        // AI 시험 감독 체크박스 검증
        const aiRequirementsMet = aiCheckboxes.length === 0 || Array.from(aiCheckboxes).every(checkbox => checkbox.checked);

        // 시험 응시 전 동의 체크박스 검증 (개별 체크박스들만 확인)
        const consentRequirementsMet = consentCheckboxes.length === 0 || Array.from(consentCheckboxes).every(checkbox => checkbox.checked);

        // 모든 조건이 만족되면 버튼 활성화
        if (aiRequirementsMet && consentRequirementsMet) {
            enableQuizTakeButton(button);
        } else {
            forceDisableQuizButton(button);
        }
        return button;
    }

    function handleClickTrustLockBrowserGuide () {
        // TrustLock Browser 이용안내 자세히 보기
        const trustLockGuideLink = document.getElementById('xncpvp_link_to_trustlock_guide');
        const lang = document.documentElement.getAttribute("lang");

        if (trustLockGuideLink) {
            trustLockGuideLink.addEventListener('click', function () {

                const fadeContainer = document.createElement('div');
                fadeContainer.style.position = "fixed";
                fadeContainer.style.display = "inline-block";
                fadeContainer.style.width = "100vw";
                fadeContainer.style.height = "100vh";
                fadeContainer.style.top = "0";
                fadeContainer.style.left = "0";
                fadeContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                fadeContainer.style.zIndex = "9999";
                fadeContainer.id = "xn-trustlock-browser-guide-iframe-fade";

                const modalIframe = document.createElement('iframe');

                modalIframe.style.position = "fixed";
                modalIframe.style.width = "50%";
                modalIframe.style.height = "600px";
                modalIframe.style.top = "50%";
                modalIframe.style.left = "50%";
                modalIframe.style.transform = "translate(-50%, -50%)";
                modalIframe.style.border = "none";
                modalIframe.style.zIndex = "10000";
                modalIframe.id = "xn-trustlock-guide-iframe";

                modalIframe.src = `/learningx/cheating-prevention-guide/trustlock-browser?locale=${lang}`;

                const mainContents = document.querySelector('.ic-Layout-contentMain');

                document.body.style.overflow = 'hidden';
                fadeContainer.append(modalIframe);

                mainContents.insertBefore(fadeContainer, mainContents.firstChild);
                window.addEventListener('message', closeTrustLockGuide);
            });
        }
    }

    function closeTrustLockGuide () {
        if (event.data !== 'closeTrustLockBrowserGuide') return;

        const fadeContainer = document.getElementById('xn-trustlock-browser-guide-iframe-fade');

        if (fadeContainer) {
            document.body.style.overflow='initial';
            fadeContainer.remove();
        }

        const modalIframe = document.getElementById('xn-trustlock-guide-iframe');

        if (modalIframe) {
            modalIframe.remove();
        }
    }

    function handleClickProctoringXGuide () {
        // ProctoringX 이용안내 자세히 보기
        const proctoringXGuide = document.getElementById('xncpvp_link_to_proctoring_x_guide');
        const lang = document.documentElement.getAttribute("lang");

        if (proctoringXGuide) {
            proctoringXGuide.addEventListener('click', function () {

                const fadeContainer = document.createElement('div');
                fadeContainer.style.position = "fixed";
                fadeContainer.style.display = "inline-block";
                fadeContainer.style.width = "100vw";
                fadeContainer.style.height = "100vh";
                fadeContainer.style.top = "0";
                fadeContainer.style.left = "0";
                fadeContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                fadeContainer.style.zIndex = "9999";
                fadeContainer.id = "xn-proctoring-x-guide-iframe-fade";

                const modalIframe = document.createElement('iframe');

                modalIframe.style.position = "fixed";
                modalIframe.style.width = "50%";
                modalIframe.style.height = "95%";
                modalIframe.style.top = "50%";
                modalIframe.style.left = "50%";
                modalIframe.style.transform = "translate(-50%, -50%)";
                modalIframe.style.border = "none";
                modalIframe.style.zIndex = "10000";
                modalIframe.id = "xn-proctoring-x-guide-iframe";

                modalIframe.src= `/learningx/cheating-prevention-guide/proctoring-x?locale=${lang}`

                const mainContents = document.querySelector('.ic-Layout-contentMain');

                document.body.style.overflow = 'hidden';
                fadeContainer.append(modalIframe);

                mainContents.insertBefore(fadeContainer, mainContents.firstChild);
                window.addEventListener('message', closeProctoringXGuide);
            });
        }


    }

    function handleClickProctoringXInstall () {
        // ProctoringX 이용안내 자세히 보기
        const proctoringXInstall = document.getElementById('xncpvp_proctoring_x_install');
        const lang = document.documentElement.getAttribute("lang");

        if (proctoringXInstall) {
            proctoringXInstall.addEventListener('click', function () {

                const fadeContainer = document.createElement('div');
                fadeContainer.style.position = "fixed";
                fadeContainer.style.display = "inline-block";
                fadeContainer.style.width = "100vw";
                fadeContainer.style.height = "100vh";
                fadeContainer.style.top = "0";
                fadeContainer.style.left = "0";
                fadeContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                fadeContainer.style.zIndex = "9999";
                fadeContainer.id = "xn-proctoring-x-guide-iframe-fade";

                const modalIframe = document.createElement('iframe');

                modalIframe.style.position = "fixed";
                modalIframe.style.width = "50%";
                modalIframe.style.height = "95%";
                modalIframe.style.top = "50%";
                modalIframe.style.left = "50%";
                modalIframe.style.transform = "translate(-50%, -50%)";
                modalIframe.style.border = "none";
                modalIframe.style.zIndex = "10000";
                modalIframe.id = "xn-proctoring-x-guide-iframe";

                modalIframe.src= `/learningx/cheating-prevention-guide/proctoring-x?locale=${lang}`

                const mainContents = document.querySelector('.ic-Layout-contentMain');

                document.body.style.overflow = 'hidden';
                fadeContainer.append(modalIframe);

                mainContents.insertBefore(fadeContainer, mainContents.firstChild);
                window.addEventListener('message', closeProctoringXGuide);
            });
        }
    }

    function closeProctoringXGuide () {
        if (event.data !== 'closeProctoringXGuide') return;

        const fadeContainer = document.getElementById('xn-proctoring-x-guide-iframe-fade');

        if (fadeContainer) {
            document.body.style.overflow='initial';
            fadeContainer.remove();
        }

        const modalIframe = document.getElementById('xn-proctoring-x-guide-iframe');

        if (modalIframe) {
            modalIframe.remove();
        }
    }

    // 호환 기기 이용안내 자세히 보기 모달
    function handleClickCompatibilityGuide () {
        // Compatibility Guide 이용안내 자세히 보기
        const compatibilityGuide = document.getElementById('xncpvp_link_to_compatibility_guide');
        const lang = document.documentElement.getAttribute("lang");

        if (compatibilityGuide) {
            compatibilityGuide.addEventListener('click', function () {

                const fadeContainer = document.createElement('div');
                fadeContainer.style.position = "fixed";
                fadeContainer.style.display = "inline-block";
                fadeContainer.style.width = "100vw";
                fadeContainer.style.height = "100vh";
                fadeContainer.style.top = "0";
                fadeContainer.style.left = "0";
                fadeContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                fadeContainer.style.zIndex = "9999";
                fadeContainer.id = "xn-compatibility-guide-iframe-fade";

                const modalIframe = document.createElement('iframe');

                modalIframe.style.position = "fixed";
                modalIframe.style.width = "50%";
                modalIframe.style.height = "60%";
                modalIframe.style.top = "50%";
                modalIframe.style.left = "50%";
                modalIframe.style.transform = "translate(-50%, -50%)";
                modalIframe.style.border = "none";
                modalIframe.style.zIndex = "10000";
                modalIframe.id = "xn-compatibility-guide-iframe";

                modalIframe.src = `/learningx/cheating-prevention-guide/compatibility?locale=${lang}`;

                const mainContents = document.querySelector('.ic-Layout-contentMain');

                document.body.style.overflow = 'hidden';
                fadeContainer.append(modalIframe);

                mainContents.insertBefore(fadeContainer, mainContents.firstChild);
                window.addEventListener('message', closeCompatibilityGuide);
            });
        }
    }

    function closeCompatibilityGuide () {
        if (event.data !== 'closeCompatibilityGuide') return;

        const fadeContainer = document.getElementById('xn-compatibility-guide-iframe-fade');

        if (fadeContainer) {
            document.body.style.overflow='initial';
            fadeContainer.remove();
        }

        const modalIframe = document.getElementById('xn-compatibility-guide-iframe');

        if (modalIframe) {
            modalIframe.remove();
        }
    }

    createQuizPrepInfoWithButtonControl();
});
/**
 * END: 학생 과제 화면에 온라인 시험 전 필수 준비사항 추가
 */

/**
 * START: 퀴즈 생성/수정 화면 "시험 전용 브라우저" 옵션에 대한 기본값 설정 및 교수자/조교 설정 권한에 따라 설정 비활성화 처리
 */
$(document).ready(function () {
    async function initialiseLockdownBrowserOptions() {
        // 시험 생성 페이지에서만 동작
        const isQuizView = window.location.pathname.match(/\/courses\/(\d+)\/quizzes\/(\d+)\/edit/);
        if (!isQuizView) return;

        const [courseId, quizId] = isQuizView.slice(1);
        if (!courseId || !quizId) return;

        const xnToken = document.cookie?.split('; ').find(row => row.startsWith('xn_api_token'))?.split('=')[1];
        if (!xnToken) {
            console.error('Failed to fetch auth token');
            return;
        }

        const res = await fetch(`/learningx/api/v1/courses/${courseId}/lockdown-browser/settings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${xnToken}`,
            },
        });

        if (!res.ok) {
            console.error('Failed to fetch lockdown browser settings');
            return;
        }

        const {
            use_lockdown_browser_option = false,
            lockdown_browser_settings = {},
        } = await res.json();

        // 시험 전용 브라우저 사용 설정이 꺼져 있는 경우
        // 락다운 브라우저 사용 옵션 요소를 숨김
        if (!use_lockdown_browser_option) {
            const lockdownElement = document.getElementById('quiz_require_lockdown_browser_for_results');
            let optionGroup = lockdownElement.parentElement;
            while (optionGroup && !optionGroup.classList.contains('option-group')) {
                optionGroup = optionGroup.parentElement;
            }
            if (optionGroup) optionGroup.style.display = 'none';

            return;
        }

        const {
            allow_instructors_modification = false,
            default_settings = {
                require_lockdown_browser: false,
                require_lockdown_browser_for_results: false,
            },
        } = lockdown_browser_settings;

        // 시험 전용 브라우저 (TrustLock) 사용 설정 체크박스
        const lockdownBrowserCheckbox = document.querySelector('input#quiz_require_lockdown_browser');
        // 시험 전용 브라우저 "퀴즈 결과 확인도 시험 전용 브라우저에서만 허용" 설정 요소 
        const lockdownBrowserSuboption = document.querySelector('.option-group #lockdown_browser_suboptions');
        // 시험 전용 브라우저 "퀴즈 결과 확인도 시험 전용 브라우저에서만 허용" 설정 요소 체크박스
        const lockdownBrowserSuboptionCheckbox = document.querySelector('input#quiz_require_lockdown_browser_for_results');

        /**
         * 1. 새 퀴즈 생성 화면인 경우, 락다운 브라우저 사용 기본 값을 불러와 체크박스 활성화
         * workflow_status가 'created'인 경우 새 퀴즈 생성 화면이다.
         */
        const quizRes = await fetch(`/learningx/api/v1/courses/${courseId}/quizzes/${quizId}/workflow_status`);
        if (!quizRes.ok) {
            console.error('Failed to fetch quiz data');
            return;
        };

        const { workflow_status } = await quizRes.json();

        // 새 퀴즈 생성 화면이면서 기본 설정이 켜져 있는 경우 체크박스 활성화
        if (workflow_status === 'created' && default_settings.require_lockdown_browser) {
            lockdownBrowserCheckbox.checked = true;
            // "퀴즈 결과 확인도 시험 전용 브라우저에서만 허용" 설정 요소 숨김 해제
            lockdownBrowserSuboption.style.display = 'block';
            lockdownBrowserSuboptionCheckbox.checked = default_settings.require_lockdown_browser_for_results;
        }

        /**
         * 2. 교수자/조교가 시험 전용 브라우저 설정을 변경할 수 있는지 설정 여부에 따라 옵션 비활성화 처리
         */
        if (!ENV['current_user_roles']) return;
        // 운영자는 무조건 허용이니 return
        const allowedRoles = ['admin'];
        if (allowedRoles.some(role => ENV['current_user_roles'].includes(role))) return;
        // 교수자/조교가 설정 권한이 있으면 return
        if (allow_instructors_modification) return;

        lockdownBrowserCheckbox.disabled = true;
        lockdownBrowserSuboptionCheckbox.disabled = true;

        const parentElement = lockdownBrowserSuboption.parentElement;
        parentElement.style.color = '#CECECE';
    }

    initialiseLockdownBrowserOptions();
});
/**
 * END: 퀴즈 생성/수정 화면 "시험 전용 브라우저" 옵션에 대한 기본값 설정 및 교수자/조교 설정 권한에 따라 설정 비활성화 처리
 */