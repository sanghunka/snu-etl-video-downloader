const videoInfo = new Map();

// GA4 Measurement Protocol
const GA_MEASUREMENT_ID = 'G-DNQ148RFWG';
const GA_API_SECRET = 'aCSNl30NR12geGtZHWptGg';

function getClientId() {
  return chrome.storage.local.get('clientId').then((data) => {
    if (data.clientId) return data.clientId;
    const id = crypto.randomUUID();
    chrome.storage.local.set({ clientId: id });
    return id;
  });
}

async function trackEvent(name, params = {}) {
  const clientId = await getClientId();
  fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
    {
      method: 'POST',
      body: JSON.stringify({
        client_id: clientId,
        events: [{ name, params }],
      }),
    },
  ).catch(() => {});
}

const ICON_COLOR = {
  16: 'icons/icon16.png',
  48: 'icons/icon48.png',
  128: 'icons/icon128.png',
};

const ICON_GRAY = {
  16: 'icons/icon16_gray.png',
  48: 'icons/icon48_gray.png',
  128: 'icons/icon128_gray.png',
};

const DNR_RULE_ID = 1;

function sanitizeFilename(name) {
  return name.replace(/[<>:"/\\|?*]/g, '_').trim() || 'video';
}

function encodeRFC5987(str) {
  return encodeURIComponent(str).replace(/['()]/g, (c) => '%' + c.charCodeAt(0).toString(16));
}

function addRefererRule(videoUrl, referer, filename) {
  const encoded = encodeRFC5987(filename);
  return chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [DNR_RULE_ID],
    addRules: [
      {
        id: DNR_RULE_ID,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            { header: 'Referer', operation: 'set', value: referer },
          ],
          responseHeaders: [
            {
              header: 'Content-Disposition',
              operation: 'set',
              value: "attachment; filename=\"" + filename + "\"; filename*=UTF-8''" + encoded,
            },
          ],
        },
        condition: {
          urlFilter: new URL(videoUrl).hostname,
          resourceTypes: ['main_frame'],
        },
      },
    ],
  });
}

function removeRefererRule() {
  return chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [DNR_RULE_ID],
  });
}

// Native download: add Referer via declarativeNetRequest, open URL in new tab
function nativeDownload(videoUrl, referer, title, sendResponse, trigger) {
  trackEvent('video_download', { title, trigger: trigger || 'icon' });
  const filename = sanitizeFilename(title) + '.mp4';
  addRefererRule(videoUrl, referer, filename).then(() => {
    chrome.tabs.create({ url: videoUrl, active: false }, (tab) => {
      // Close the download tab once Chrome processes the Content-Disposition
      const downloadTabId = tab.id;
      function onUpdated(tabId, changeInfo) {
        if (tabId === downloadTabId && changeInfo.status === 'complete') {
          chrome.tabs.onUpdated.removeListener(onUpdated);
          chrome.tabs.remove(downloadTabId);
          removeRefererRule();
        }
      }
      chrome.tabs.onUpdated.addListener(onUpdated);
      // Fallback: clean up after 15 seconds even if onUpdated doesn't fire
      setTimeout(() => {
        chrome.tabs.onUpdated.removeListener(onUpdated);
        chrome.tabs.remove(downloadTabId).catch(() => {});
        removeRefererRule();
      }, 15000);
    });
    sendResponse({ ok: true, method: 'native' });
  });
}

// Fallback: fetch in page context with progress overlay (not exposed to user)
function fetchBlobDownload(tabId, videoUrl, filename, sendResponse) {
  chrome.scripting.executeScript(
    {
      target: { tabId, allFrames: true },
      world: 'MAIN',
      func: async (videoUrl, filename) => {
        // Only run in the frame that has the video player
        if (!document.querySelector('video.vc-vplay-video1')) return;

        const overlay = document.createElement('div');
        overlay.id = 'etl-dl-progress';
        overlay.style.cssText =
          'position:fixed;top:12px;right:12px;z-index:999999;' +
          'background:#003876;color:#fff;padding:10px 16px;border-radius:8px;' +
          'font:14px -apple-system,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.3);' +
          'min-width:180px;';
        overlay.textContent = '다운로드 준비 중...';
        document.body.appendChild(overlay);

        try {
          const resp = await fetch(videoUrl);
          if (!resp.ok) throw new Error('HTTP ' + resp.status);

          const total = parseInt(resp.headers.get('Content-Length') || '0', 10);
          const reader = resp.body.getReader();
          const chunks = [];
          let loaded = 0;

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            chunks.push(value);
            loaded += value.length;
            if (total) {
              const pct = Math.round((loaded / total) * 100);
              const mb = (loaded / 1048576).toFixed(1);
              const totalMb = (total / 1048576).toFixed(0);
              overlay.textContent = `다운로드 중... ${pct}% (${mb}/${totalMb}MB)`;
            } else {
              const mb = (loaded / 1048576).toFixed(1);
              overlay.textContent = `다운로드 중... ${mb}MB`;
            }
          }

          overlay.textContent = '파일 저장 중...';
          const blob = new Blob(chunks);
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = filename;
          a.click();
          URL.revokeObjectURL(a.href);

          overlay.textContent = '다운로드 완료!';
          setTimeout(() => overlay.remove(), 3000);
        } catch (e) {
          overlay.textContent = '다운로드 실패: ' + e.message;
          overlay.style.background = '#d93025';
          setTimeout(() => overlay.remove(), 5000);
        }
      },
      args: [videoUrl, filename],
    },
    () => {
      if (chrome.runtime.lastError) {
        sendResponse({ error: chrome.runtime.lastError.message });
      } else {
        sendResponse({ ok: true, method: 'fetch' });
      }
    },
  );
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'VIDEO_DETECTED' && sender.tab) {
    videoInfo.set(sender.tab.id, {
      videoUrl: msg.videoUrl,
      title: msg.title,
      origin: msg.origin,
      frameId: sender.frameId,
    });
    chrome.action.setIcon({ tabId: sender.tab.id, path: ICON_COLOR });
    chrome.action.setPopup({ tabId: sender.tab.id, popup: '' });
    trackEvent('video_detected', { title: msg.title });
  }

  if (msg.type === 'GET_VIDEO_INFO') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0]) return sendResponse(null);
      const cached = videoInfo.get(tabs[0].id);
      if (cached) return sendResponse(cached);

      // Map empty (service worker restarted) — ask content script directly
      chrome.tabs.sendMessage(tabs[0].id, { type: 'GET_VIDEO_INFO' }, (resp) => {
        if (chrome.runtime.lastError || !resp || !resp.videoUrl) {
          chrome.action.setIcon({ tabId: tabs[0].id, path: ICON_GRAY });
          return sendResponse(null);
        }
        const info = { videoUrl: resp.videoUrl, title: resp.title, origin: resp.origin };
        videoInfo.set(tabs[0].id, info);
        sendResponse(info);
      });
    });
    return true;
  }

  if (msg.type === 'DOWNLOAD_VIDEO') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0]) return sendResponse({ error: 'No active tab' });
      const info = videoInfo.get(tabs[0].id);
      if (!info) return sendResponse({ error: 'No video info' });

      if (msg.method === 'fetch') {
        fetchBlobDownload(
          tabs[0].id,
          msg.videoUrl,
          msg.filename || 'video.mp4',
          sendResponse,
        );
      } else {
        nativeDownload(msg.videoUrl, info.origin, info.title, sendResponse, 'popup');
      }
    });
    return true;
  }
});

// Icon click when no popup → immediate download
chrome.action.onClicked.addListener((tab) => {
  const info = videoInfo.get(tab.id);
  if (info) {
    nativeDownload(info.videoUrl, info.origin, info.title, () => {}, 'icon');
  }
});

// Overlay click → trigger download from content script
chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type === 'DOWNLOAD_TRIGGER' && sender.tab) {
    const info = videoInfo.get(sender.tab.id);
    if (info) {
      nativeDownload(info.videoUrl, info.origin, info.title, () => {}, 'overlay');
    }
  }
});

// Install / update tracking
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    trackEvent('extension_installed');
  } else if (details.reason === 'update') {
    trackEvent('extension_updated', { version: chrome.runtime.getManifest().version });
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  videoInfo.delete(tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (
    changeInfo.url &&
    !changeInfo.url.includes('myetl.snu.ac.kr') &&
    !changeInfo.url.includes('lcms.snu.ac.kr')
  ) {
    videoInfo.delete(tabId);
    chrome.action.setIcon({ tabId, path: ICON_GRAY });
    chrome.action.setPopup({ tabId, popup: 'popup.html' });
  }
});
