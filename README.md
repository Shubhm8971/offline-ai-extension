Offline AI Chrome Extension
Overview

The Offline AI Chrome Extension is a desktop-first browser extension that simulates AI-powered tools locally. It allows users to:

Summarize selected text

Translate text

Proofread text

Rewrite text

Transcribe audio files

Upload images/audio for future enhancements

All features currently return mock outputs, making testing and development independent of external APIs.

Installation

Clone the repository:

git clone https://github.com/Shubhm8971/offline-ai-extension.git


Navigate to the extension folder:

cd offline-ai-extension/extension


Open Chrome and go to chrome://extensions/

Enable Developer Mode

Click Load unpacked and select the extension folder

The extension should now appear in your browser toolbar.

Usage

Open any web page.

Highlight text you want to summarize, translate, proofread, or rewrite.

Click the corresponding button in the popup.

For Transcribe or Upload, select a file from your computer (currently mocked).

Mock results appear in the output area.

Features (Mock Implementation)
Feature	Description
Summarize	Returns the first two sentences of selected text.
Translate	Shows a simulated translation of selected text.
Proofread	Shows mock corrections and suggestions for selected text.
Rewrite	Returns a simplified rewritten version of the text.
Transcribe	Mocks transcription for audio files.
Upload	Allows selection of image/audio files (mocked for now).
Planned API Integration

Once a free backend API is finalized, the extension will:

Call the API for real summarization, translation, proofreading, rewriting, and transcription.

Support additional file formats for multimodal input.

Provide faster and more accurate results compared to the mock version.

Project Structure
offline-ai-extension/
│
├── extension/
│   ├── popup.html
│   ├── popup.js
│   ├── style.css
│   ├── manifest.json
│   └── ... (other scripts)
├── backend/
│   └── api.py  (Flask server for future API integration)
└── README.md

Challenges Faced

Simulating AI functionality locally without external APIs.

Handling multiple buttons with different behaviors in the popup.

Keeping the extension modular for easy future API integration.

Future Work

Integrate a free AI backend for real outputs.

Add user-customizable prompts and templates.

Improve UI/UX design and theme support.

Add multimodal support for images and audio.
