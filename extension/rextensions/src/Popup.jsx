import { useState, useEffect } from "react";
import './Popup.css';
import robotIcon from './assets/robot.svg';

function Popup() {
  const [output, setOutput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [buttonPage, setButtonPage] = useState(0);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setIsDarkMode(true);
  }, []);

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
            alert("Content script not available.");
            return;
          }
          if (response.error) {
            alert(response.error);
          } else {
            setOutput(response.result);
          }
        });
      });
    }
  };

  const allButtons = [
    { label: "Summarize", icon: "🧠", type: "SUMMARIZE_TEXT" },
    { label: "Translate", icon: "🌐", type: "TRANSLATE_TEXT" },
    { label: "Proofread", icon: "➕", type: "PROOFREAD_TEXT" },
    { label: "Rewrite", icon: "✏️", type: "REWRITE_TEXT" },
    { label: "Transcribe", icon: "🎤", type: "TRANSCRIBE_AUDIO" },
    { label: "Upload", icon: "📤", type: "MULTIMODAL_UPLOAD" },
    { label: "Templates", icon: "📋", type: "CUSTOM_TEMPLATES" },
    { label: "Mock Output", icon: "🧪", type: "MOCK_OUTPUT" },
    { label: "Settings", icon: "⚙️", type: "OPEN_SETTINGS" },
  ];

  const buttonsPerPage = 4;
  const totalPages = Math.ceil(allButtons.length / buttonsPerPage);
  const visibleButtons = allButtons.slice(
    buttonPage * buttonsPerPage,
    (buttonPage + 1) * buttonsPerPage
  );

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header">
        <div className="logo">
          <img src={robotIcon} alt="AI Logo" className="robot-animation" />
        </div>
        <h2 className="title">Offline AI Extension</h2>
        <div className="mode-switch" onClick={() => setIsDarkMode(!isDarkMode)}>
          <div className={`switch-track ${isDarkMode ? 'dark' : 'light'}`}>
            <div className={`switch-thumb ${isDarkMode ? 'thumb-right' : 'thumb-left'}`} />
          </div>
        </div>
      </div>

      <div className="button-row">
        {buttonPage > 0 && (
          <button className="nav-button prev-button" onClick={() => setButtonPage(buttonPage - 1)}>
            &lt;
          </button>
        )}

        <div className="button-group">
          {visibleButtons.map((btn, index) => (
            <button key={index} className="ai-button" onClick={() => sendMessageToContent(btn.type)}>
              <span className="icon">{btn.icon}</span>
              <span className="label">{btn.label}</span>
            </button>
          ))}
        </div>

        {buttonPage < totalPages - 1 && (
          <button className="nav-button next-button" onClick={() => setButtonPage(buttonPage + 1)}>
            &gt;
          </button>
        )}
      </div>

      <div className="section-label">Input</div>
      <textarea
        className="text-input"
        placeholder="Enter text here..."
      />

      <div className="section-label">Output</div>
      <div
        className={`output ${output ? 'fade-in' : ''}`}
        onClick={() => {
          if (output) {
            navigator.clipboard.writeText(output);
            alert("✅ Output kopiran u clipboard!");
          }
        }}
      >
        {output}
      </div>
    </div>
  );
}

export default Popup;
