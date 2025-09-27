import { useState } from "react";
import './Popup.css';

function Popup() {
  const [output, setOutput] = useState("");

  const sendMessageToContent = (type) => {
    if (typeof chrome !== "undefined" && chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { type }, (response) => {
          if (chrome.runtime.lastError) {
            alert("Content script not available on this page. Open a normal webpage.");
            return;
          }
          if (response.error) {
            alert(response.error);
          } else {
            setOutput(response.result);
          }
        });
      });
    } else {
      console.warn("Chrome API not available. Are you running outside extension context?");
    }
  };

  return (
    <div className="popup-container">
      <div className="logo-section">
        <div className="logo" />
        <h2>Offline AI Demo</h2>
      </div>

      <textarea id="input-text" placeholder="Enter text here..." />

      <div className="button-group">
        <button onClick={() => sendMessageToContent("SUMMARIZE_TEXT")}>Summarize</button>
        <button onClick={() => sendMessageToContent("TRANSLATE_TEXT")}>Translate</button>
        <button onClick={() => sendMessageToContent("PROOFREAD_TEXT")}>Proofread</button>
        <button onClick={() => sendMessageToContent("TRANSCRIBE_AUDIO")}>Transcribe</button>
        <button onClick={() => sendMessageToContent("REWRITE_TEXT")}>Rewrite</button>
        <button onClick={() => sendMessageToContent("MULTIMODAL_UPLOAD")}>Upload Image/Audio</button>
        <button onClick={() => sendMessageToContent("OPEN_SETTINGS")}>Settings</button>
      </div>

      <div className="output">{output}</div>
    </div>
  );
}

export default Popup;
