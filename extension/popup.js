// Send messages to content script when buttons clicked
document.getElementById('summarizeBtn').addEventListener('click', () => {
  sendMessageToContent("SUMMARIZE_TEXT");
});

document.getElementById('translateBtn').addEventListener('click', () => {
  sendMessageToContent("TRANSLATE_TEXT");
});

document.getElementById('proofreadBtn').addEventListener('click', () => {
  sendMessageToContent("PROOFREAD_TEXT");
});

document.getElementById('transcribeBtn').addEventListener('click', () => {
  sendMessageToContent("TRANSCRIBE_AUDIO");
});

function sendMessageToContent(type) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type }, (response) => {
      if (chrome.runtime.lastError) {
        alert("Content script not available on this page. Open a normal webpage.");
        return;
      }
      if (response.error) {
        alert(response.error);
      } else {
        document.getElementById('summaryOutput').innerText = response.result;
      }
    });
  });
}
