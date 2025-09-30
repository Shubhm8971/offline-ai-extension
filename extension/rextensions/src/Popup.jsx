import { useState, useEffect } from "react";
import './Popup.css';

function Popup() {
  const [output, setOutput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Učitavanje moda iz localStorage pri mountu
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setIsDarkMode(true);
  }, []);

  // Ažuriranje body klase i localStorage kad se mod promijeni
  useEffect(() => {
    document.body.classList.toggle('dark-body', isDarkMode);
    document.body.classList.toggle('light-body', !isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

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
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="top-bar">
        <div className="logo-section">
          <div className="logo" />
          <div className="mode-switch" onClick={() => setIsDarkMode(!isDarkMode)}>
            <div className={`switch-track ${isDarkMode ? 'dark' : 'light'}`}>
              <div className={`switch-thumb ${isDarkMode ? 'thumb-right' : 'thumb-left'}`} />
            </div>
          </div>
          <h2>Offline AI Demo</h2>
        </div>
      </div>

      <textarea
        id="input-text"
        className={`text-input ${isDarkMode ? 'dark-textarea' : 'light-textarea'}`}
        placeholder="Enter text here..."
      />


      <div className="button-group">
        <button className="Summarize" onClick={() => sendMessageToContent("SUMMARIZE_TEXT")}>📝</button>
        <button className="Translate" onClick={() => sendMessageToContent("TRANSLATE_TEXT")}>🌍</button>
        <button className="Proofread" onClick={() => sendMessageToContent("PROOFREAD_TEXT")}>🔍</button>
        <button className="Transcribe" onClick={() => sendMessageToContent("TRANSCRIBE_AUDIO")}>🎙️</button>
        <button className="Rewrite" onClick={() => sendMessageToContent("REWRITE_TEXT")}>✏️</button>
        <button className="Upload Image/Audio" onClick={() => sendMessageToContent("MULTIMODAL_UPLOAD")}>📤</button>
        <button className="Settings" onClick={() => sendMessageToContent("OPEN_SETTINGS")}>⚙️</button>
      </div>

    <div
      id="output"
      className={`output ${isDarkMode ? 'dark-output' : 'light-output'}`}
      >
      {output}
    </div>


    </div>
  );
}

export default Popup;
