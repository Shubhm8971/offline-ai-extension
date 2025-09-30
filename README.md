Offline AI Extension

Tagline: A lightweight desktop Chrome extension simulating AI-powered text utilities locally.

About the Project

Offline AI Extension is inspired by the idea of testing AI-powered features without relying on external APIs. It allows users to summarize, translate, proofread, rewrite, and transcribe content directly in the browser using mock outputs for fast local testing.

During development, I learned how to structure Chrome extensions modularly, handle content scripts and popups, and implement multiple interactive features in a clean, maintainable way. The main challenge was making all features accessible and functional in a local, offline environment.

Features

Summarize: Condenses selected text into a shorter version (mock summary).

Translate: Converts text into another language (mock translation).

Proofread: Highlights and corrects grammatical issues in the selected text (mock proofread).

Rewrite: Rephrases sentences for clarity or style (mock rewrite).

Transcribe / Upload Audio: Accepts audio files for mock transcription.

All features work locally without requiring external API calls, ensuring smooth testing and development.

Built With

HTML, CSS, JavaScript

Chrome Extension APIs (content scripts, popup, and messaging)

Getting Started

Clone the repository.

Open Chrome and navigate to chrome://extensions.

Enable Developer Mode.

Click Load unpacked and select the extension folder.

Open any webpage, select text (or upload audio for transcription), and test features.

Try It Out

The extension is fully functional locally. All buttons provide mock outputs for testing.
