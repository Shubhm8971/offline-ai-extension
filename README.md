Offline AI Extension

A lightweight Chrome extension that simulates AI-powered text and media processing fully locally. Designed for quick testing and demonstration without external APIs.

Features

Summarize: Condense selected text into a short summary.

Translate: Mock translation of selected text.

Proofread: Highlight basic grammar and spelling issues.

Rewrite: Convert text to a cleaner, alternate version.

Transcribe: Upload an audio file and get a mock transcription.

Upload Image/Audio: Mock processing of images or audio for demonstration purposes.

Installation

Clone or download this repository.

Open Chrome and go to chrome://extensions/.

Enable Developer mode (top-right).

Click Load unpacked and select this repository’s folder.

The extension will appear in your toolbar.

Usage

Select text on a webpage for Summarize, Translate, Proofread, or Rewrite.

Click the respective button in the extension popup to see a mock output.

For Transcribe or Upload Image/Audio, click the button to select a file and view a mock result.

Structure

popup.html – UI for the extension popup.

popup.js – Handles button actions and mock outputs.

content.js – (Optional) Placeholder for content script communication.

README.md – Project overview and instructions.

Notes

Fully local: All outputs are mock simulations for demonstration.

Modular structure: Easy to replace mock functions with real AI APIs later.

No icons are used to keep it lightweight and simple.
