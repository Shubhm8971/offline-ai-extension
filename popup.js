const inputText = document.getElementById('inputText');
const outputDiv = document.getElementById('output');

// Mock functions for each button
function mockSummarize(text) {
  return text.split('.').slice(0, 2).join('.') + '...';
}

function mockTranslate(text) {
  return "Translated: " + text;
}

function mockProofread(text) {
  return "Proofread: " + text;
}

function mockRewrite(text) {
  return "Rewritten: " + text;
}

function mockTranscribe() {
  return "Audio transcription (mock) successful!";
}

function mockUpload() {
  return "Image/Audio upload processed (mock)!";
}

// Event listeners
document.getElementById('summarizeBtn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert('Please enter some text first!');
  outputDiv.innerText = mockSummarize(text);
});

document.getElementById('translateBtn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert('Please enter some text first!');
  outputDiv.innerText = mockTranslate(text);
});

document.getElementById('proofreadBtn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert('Please enter some text first!');
  outputDiv.innerText = mockProofread(text);
});

document.getElementById('rewriteBtn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert('Please enter some text first!');
  outputDiv.innerText = mockRewrite(text);
});

document.getElementById('transcribeBtn').addEventListener('click', () => {
  outputDiv.innerText = mockTranscribe();
});

document.getElementById('uploadBtn').addEventListener('click', () => {
  outputDiv.innerText = mockUpload();
});
