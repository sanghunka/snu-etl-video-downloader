const waiting = document.getElementById('waiting');
const notFound = document.getElementById('not-found');

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const url = tabs[0] && tabs[0].url;
  if (url && (url.includes('myetl.snu.ac.kr') || url.includes('lcms.snu.ac.kr'))) {
    notFound.style.display = 'none';
    waiting.style.display = 'block';
  }
});

const feedbackLink = document.getElementById('feedback');
const version = chrome.runtime.getManifest().version;
const ua = navigator.userAgent;
const body = encodeURIComponent('\n\n---\nVersion: ' + version + '\nUA: ' + ua);
feedbackLink.href = 'mailto:sanghun.kang@outlook.com?subject=SNU eTL Video Downloader Feedback&body=' + body;

feedbackLink.addEventListener('click', () => {
  navigator.clipboard.writeText('sanghun.kang@outlook.com');
  const copied = document.getElementById('copied');
  copied.style.opacity = '1';
  setTimeout(() => { copied.style.opacity = '0'; }, 1500);
});
