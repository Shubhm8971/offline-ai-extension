Offline AI Extension

A Chrome extension that simulates AI-powered text processing entirely offline using mock outputs. This allows for smooth testing, a clear UI flow, and a strong foundation for future integration with real AI APIs.

✨ Features

Summarize → Quickly condenses selected text into a short summary.

Translate → Simulates translating text into another language.

Proofread → Detects and fixes mock spelling/grammar issues.

Rewrite → Rephrases text into a cleaner version.

Transcribe → Mock audio transcription from a file.

Upload Image/Audio → Mock input handling for multimodal features.

All outputs are mock-generated locally (no external APIs), making it simple to test functionality and UI without API restrictions.

📂 Project Structure
offline-ai-extension/
│── manifest.json       # Extension configuration
│── popup.html          # Extension popup UI
│── popup.js            # Button logic & mock AI simulation
│── style.css           # Extension styling
│── content.js          # Content script for page interactions

🚀 Getting Started

Clone this repo:

git clone https://github.com/Shubhm8971/offline-ai-extension.git
cd offline-ai-extension


Open Chrome and go to:
chrome://extensions/

Enable Developer Mode.

Click Load unpacked and select the offline-ai-extension/ folder.

Pin the extension and test directly in your browser.

🛠 Built With

JavaScript (ES6+) – Core logic

HTML5 & CSS3 – UI and layout

Chrome Extensions API – Browser integration

(React branch in progress for more modular code structure)

🌟 Inspiration

We wanted to create a lightweight offline simulation of an AI extension so the team can:

Experiment freely with UI/UX before API integration.

Build a clean, modular foundation.

Test features in a realistic flow without relying on connectivity or quotas.

📌 Next Steps

Integrate real AI APIs (e.g., Gemini Nano / local models).

Expand multimodal support (real image/audio input).

Polish UI with React (work in progress).
