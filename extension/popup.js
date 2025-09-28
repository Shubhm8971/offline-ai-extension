// Utility: mock output generator
function setOutput(text) {
  document.getElementById('summaryOutput').textContent = text;
}

// ---- Summarize ----
document.getElementById('summarizeBtn').addEventListener('click', () => {
  setOutput('Mock Summary:\nThis is a concise summary of the selected content.');
});

// ---- Translate ----
document.getElementById('translateBtn').addEventListener('click', () => {
  setOutput('Mock Translation:\nThis text has been “translated” to another language.');
});

// ---- Proofread ----
document.getElementById('proofreadBtn').addEventListener('click', () => {
  setOutput('Mock Proofread:\nNo grammar issues found. All good!');
});

// ---- Rewrite ----
document.getElementById('rewriteBtn').addEventListener('click', () => {
  setOutput('Mock Rewrite:\nHere is a different phrasing of the input text.');
});

// ---- Transcribe ---- (now uses file picker directly, no content script)
document.getElementById('transcribeBtn').addEventListener('click', () => {
  document.getElementById('audioInput').click();
});

document.getElementById('audioInput').addEventListener('change', () => {
  const file = document.getElementById('audioInput').files[0];
  if (!file) return;
  setOutput(`Mock Transcription:\nSuccessfully received file "${file.name}". (Sample transcript here.)`);
});

// ---- Upload Image/Audio ---- (mock handler)
document.getElementById('uploadBtn').addEventListener('click', () => {
  document.getElementById('uploadInput').click();
});

document.getElementById('uploadInput').addEventListener('change', () => {
  const file = document.getElementById('uploadInput').files[0];
  if (!file) return;
  setOutput(`Mock Upload:\nYou selected "${file.name}". Image/Audio processing would appear here.`);
});
