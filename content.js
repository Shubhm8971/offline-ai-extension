chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (!window.getSelection) {
    sendResponse({ error: "Selection API not available on this page" });
    return;
  }

  const selectedText = window.getSelection().toString();

  if (!selectedText) {
    sendResponse({ error: "Please select some text on the page first!" });
    return;
  }

  let result = "";

  switch (request.type) {
    case "SUMMARIZE_TEXT":
      result = selectedText.split(".").slice(0, 2).join(".") + "...";
      break;
    case "TRANSLATE_TEXT":
      result = "[Translated text] " + selectedText;
      break;
    case "PROOFREAD_TEXT":
      result = "[Proofread text] " + selectedText;
      break;
    case "TRANSCRIBE_AUDIO":
      result = "[Transcribed audio text]";
      break;
    default:
      result = "[Unknown action]";
  }

  sendResponse({ result });
  return true; // Keep the channel open for async response
});
