const inputText = document.getElementById('input-text');
const resultDiv = document.getElementById('result');

// Summarize button
document.getElementById('summarize-btn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert("Please enter some text first!");
  // Mock summary
  const summary = text.split('.').slice(0, 2).join('.') + '...';
  resultDiv.innerText = `Summary:\n${summary}`;
});

// Translate button
document.getElementById('translate-btn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert("Please enter some text first!");
  // Mock translation
  resultDiv.innerText = `Translation (mock):\n${text.split('').reverse().join('')}`;
});

// Proofread button
document.getElementById('proofread-btn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert("Please enter some text first!");
  // Mock proofreading
  resultDiv.innerText = `Proofread (mock):\n${text.replace(/\s+/g, ' ')}`;
});

// Rewrite button
document.getElementById('rewrite-btn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert("Please enter some text first!");
  // Mock rewrite
  resultDiv.innerText = `Rewritten (mock):\n${text.toUpperCase()}`;
});

// Transcribe / Upload button
document.getElementById('transcribe-btn').addEventListener('click', () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'audio/*,image/*';
  fileInput.onchange = () => {
    const file = fileInput.files[0];
    if (file) {
      resultDiv.innerText = `File selected:\n${file.name} (mock transcription or processing)`;
    }
  };
  fileInput.click();
});
