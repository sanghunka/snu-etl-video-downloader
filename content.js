(function () {
  let lastUrl = null;

  function getTitle() {
    const meta = document.querySelector('meta[name="title"]');
    if (meta && meta.content) return meta.content;
    return document.title || 'video';
  }

  function isLectureVideo(url) {
    return url && url.includes('edge.naverncp.com');
  }

  function dismissOverlay(el) {
    if (!el || !el.parentNode) return;
    el.style.right = '-300px';
    el.style.opacity = '0';
    el.addEventListener('transitionend', () => el.remove(), { once: true });
  }

  function showNotifyOverlay() {
    if (document.getElementById('etl-dl-notify')) return;

    const overlay = document.createElement('div');
    overlay.id = 'etl-dl-notify';
    overlay.style.cssText =
      'position:fixed;top:12px;right:-300px;z-index:999999;' +
      'background:#003876;color:#fff;padding:12px 40px 12px 16px;border-radius:8px;' +
      'font:14px -apple-system,BlinkMacSystemFont,sans-serif;' +
      'box-shadow:0 4px 12px rgba(0,0,0,.25);cursor:pointer;' +
      'opacity:0;transition:right .4s cubic-bezier(.4,0,.2,1), opacity .3s ease, background .2s ease;' +
      'max-width:300px;';

    const text = document.createElement('span');
    text.textContent = '\u2B07 다운로드';
    overlay.appendChild(text);

    const close = document.createElement('span');
    close.textContent = '\u00d7';
    close.style.cssText =
      'position:absolute;top:8px;right:12px;font-size:20px;' +
      'cursor:pointer;opacity:.7;line-height:1;';
    close.addEventListener('mouseenter', () => { close.style.opacity = '1'; });
    close.addEventListener('mouseleave', () => { close.style.opacity = '.7'; });
    close.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissOverlay(overlay);
    });
    overlay.appendChild(close);

    // Hover effect
    overlay.addEventListener('mouseenter', () => { overlay.style.background = '#004a9e'; });
    overlay.addEventListener('mouseleave', () => { overlay.style.background = '#003876'; });

    // Click overlay → trigger download
    overlay.addEventListener('click', () => {
      chrome.runtime.sendMessage({ type: 'DOWNLOAD_TRIGGER' });
      dismissOverlay(overlay);
    });

    document.body.appendChild(overlay);

    // Slide in from right + fade in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.right = '12px';
        overlay.style.opacity = '1';
      });
    });

    // Auto dismiss after 5s
    setTimeout(() => dismissOverlay(overlay), 5000);
  }

  function notifyBackground(videoUrl) {
    if (videoUrl === lastUrl) return;
    lastUrl = videoUrl;
    chrome.runtime.sendMessage({
      type: 'VIDEO_DETECTED',
      videoUrl,
      title: getTitle(),
      origin: location.origin + '/',
    });
    showNotifyOverlay();
  }

  function checkVideo() {
    const video = document.querySelector('video.vc-vplay-video1');
    if (video && isLectureVideo(video.src)) {
      notifyBackground(video.src);
    }
  }

  checkVideo();

  const observer = new MutationObserver(() => checkVideo());
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src'],
  });

  chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg.type === 'GET_VIDEO_INFO') {
      const video = document.querySelector('video.vc-vplay-video1');
      const url = video && isLectureVideo(video.src) ? video.src : null;
      sendResponse({ videoUrl: url, title: getTitle(), origin: location.origin + '/' });
    }
  });
})();
