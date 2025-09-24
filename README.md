# Offline AI Summarizer (Local Mock Version)

A Chrome extension that highlights text on any webpage and produces a **local mock summary**—no external APIs required.

---

## ✨ Features
- **Context-menu summarization**: Select text on any webpage and click the extension button to get a summary.
- **100% local**: No network calls or third-party APIs.
- **Simple architecture**: Clear separation between `popup.js` and `content.js` for easy future upgrades.

---

## 🗂 Project Structure
offline-ai-extension/
│
├── manifest.json # Extension configuration  
├── popup.html # UI shown when clicking the extension icon  
├── popup.js # Handles summarize button and display  
├── content.js # Injected into pages to grab selected text  
└── README.md # This file

---

## 🚀 Installation & Testing
1. **Download or clone** this repository.  
2. Open **Chrome** → go to `chrome://extensions/`.  
3. Enable **Developer Mode** (top right).  
4. Click **Load unpacked** and select the project folder.  
5. Navigate to any webpage, select some text, click the extension icon, and hit **Summarize**.

---

## 🛠 Future Upgrades
- Swap the mock summarizer in `popup.js` with a real AI API (e.g., Chrome Built-in AI or OpenAI API).  
- Keep the modular structure: only update the summarization logic, not the messaging flow.

---

## 📌 Notes
This is a local mock; replace the summarizer logic later when a real AI API is available.

---

## 👩‍💻 Credits
Built by **Shubh Mittal** and team.  
Feedback and contributions welcome!