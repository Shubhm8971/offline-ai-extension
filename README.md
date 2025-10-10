🧠 Offline AI Chrome Extension
🚀 Elevator Pitch

A fully local, AI-powered Chrome Extension that performs text summarization, translation, proofreading, rewriting, and audio/image transcription — all without relying on external APIs.
Fast, private, and ideal for users who want AI assistance directly in the browser.

🪄 About the Project
🎯 Inspiration

We wanted to create a lightweight, privacy-friendly AI assistant that works offline, helping users process and interact with text directly from any webpage.
Many AI tools depend on cloud APIs, which limits usability in low-connectivity areas and raises privacy concerns. This project brings AI capabilities right into your browser.

🧩 What We Built

The extension allows users to:

Summarize text from any webpage

Translate selected text between languages

Proofread for grammar and clarity improvements

Rewrite text for different tones or styles

Transcribe audio and image files (mock output for now)

Upload files (image/audio) for multimodal processing

Manage settings like theme, default language, and summary length

All actions currently use mock AI responses for simulation, ensuring fast local testing.

🧠 What We Learned

Building modular, scalable Chrome extensions with clean separation of popup, content, and background scripts

Designing a React-based UI upgrade for a modern interface

Managing Git branching and merging across multiple feature sets

Debugging extension permissions, local storage, and manifest updates

⚙️ How We Built It

Started with a pure HTML/CSS/JS popup prototype

Added mock AI logic for all features

Transitioned to a React-based frontend for better scalability and component management

Integrated a lightweight local simulation for instant feedback

🧱 Challenges We Faced

Handling merge conflicts between branches (mock summary → React app)

Linking CSS to React JSX (current active task)

Maintaining functionality for each feature while improving design

Ensuring cross-browser consistency for the popup

🧩 Built With
Category	Tools / Technologies
Languages	JavaScript, HTML5, CSS3
Frameworks / Libraries	React.js
Platforms	Chrome Extension API, Localhost
Version Control	Git & GitHub
Design Tools	Figma, SVG assets
Others	Mock AI simulation for local testing
🧪 Try It Out

🔗 GitHub Repository: offline-ai-extension

🧩 How to Test Locally:

Clone the repo:

git clone https://github.com/Shubhm8971/offline-ai-extension


Open Chrome → chrome://extensions/

Enable Developer Mode

Click Load Unpacked → Select the /extension folder

Test the buttons on any webpage with selectable text

👥 Team

Aldina Karic — Frontend & React UI

Shubh Mittal — Core Extension Logic & Documentation

Rixony — Custom Prompt Templates & Backend Structure

🌟 Next Steps

Finalize the React UI merge

Add functional AI API integration

Polish theme options in Settings

Deploy the extension to Chrome Web Store
