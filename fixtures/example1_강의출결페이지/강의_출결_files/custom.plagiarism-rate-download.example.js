/**
 * START: 표절률 데이터 일괄 다운로드 버튼 추가
 */
$(document).ready(function () {
    if (!ENV['current_user_roles'])  return;
    // 현재 사용자가 운영자 또는 교수자가 아니면 return
    const allowedRoles = ['admin', 'teacher'];
    if (!allowedRoles.some(role => ENV['current_user_roles'].includes(role))) return;

    // speed_grader 페이지에서만 동작
    const isSpeedGrader = window.location.pathname.match(
        /\/courses\/(\d+)\/gradebook\/speed_grader$/
    );

    if (!isSpeedGrader) return;

    let xnToken = document.cookie?.split('; ').find(row => row.startsWith('xn_api_token'))?.split('=')[1];
    if (!xnToken) {
        console.warn('xn_api_token not found in cookies');
        return;
    }

    const courseIdMatch = window.location.pathname.match(/\/courses\/(\d+)\//);
    if (!courseIdMatch) return;
    const courseId = courseIdMatch[1];

    // assignment_id 쿼리 파라미터 확인
    const urlParams = new URLSearchParams(window.location.search);
    const assignmentId = urlParams.get('assignment_id');
    if (!assignmentId) return;

    //표절률 데이터 유무 확인
    fetch(`/learningx/api/v1/courses/${courseId}/assignments/${assignmentId}/plagiarism-rate/check`, {
        headers: {
            'Authorization': `Bearer ${xnToken}`,
            'Accept': 'application/json',
        }})
        .then(response => response.json())
        .then(data => {
            if (data && data.show_plagiarism_rate === true) {
                const gradebookActionsElement = document.querySelector("#gradebook_header .subheadContent.subheadContent--flex-end");
                if (!gradebookActionsElement) return;

                const plagiarismRateDownloadButton = document.createElement('button');
                plagiarismRateDownloadButton.id = 'plagiarism-rate-download-button';
                plagiarismRateDownloadButton.type = 'button'; // 명시적으로 type 설정
                plagiarismRateDownloadButton.style.cssText = `
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: transparent;
                    border: none;
                    outline: none;
                    color: white;
                    text-decoration: underline;
                    cursor: pointer;
                    font-size: 14px;
                    margin-right: 16px;
                    padding: 0;
                `;
                plagiarismRateDownloadButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>표절률 일괄 다운로드</span>
                `;

                gradebookActionsElement.insertBefore(plagiarismRateDownloadButton, gradebookActionsElement.firstChild);
                plagiarismRateDownloadButton.addEventListener('click', downloadPlagiarismRateData, true);
            }
        });

    function downloadPlagiarismRateData(e) {
        // 이벤트 기본 동작 및 전파 중단
        if (e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
        window.location.href = `/learningx/courses/${courseId}/assignments/${assignmentId}/plagiarism_rate/download`;
    }
});
/**
 * END: 표절률 데이터 일괄 다운로드 버튼 추가
 */
