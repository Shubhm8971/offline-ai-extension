const inputText = document.getElementById('input-text');
const resultDiv = document.getElementById('result');

// --- Summarize ---
document.getElementById('summarize-btn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert("Please enter some text!");
  
  // Mock summary
  const summary = text.split(".").slice(0, 2).join(".") + "...";
  resultDiv.innerText = `[Mock] Summary:\n${summary}`;
});

// --- Translate ---
document.getElementById('translate-btn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert("Please enter some text!");
  
  // Mock translation
  resultDiv.innerText = `[Mock] Translation:\n${text.split("").reverse().join("")}`;
});

// --- Proofread ---
document.getElementById('proofread-btn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert("Please enter some text!");
  
  // Mock proofreading
  const proofread = text.replace(/ teh /g, " the ").replace(/ recieve /g, " receive ");
  resultDiv.innerText = `[Mock] Proofread:\n${proofread}`;
});

// --- Rewrite ---
document.getElementById('rewrite-btn').addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) return alert("Please enter some text!");
  
  // Mock rewrite
  const rewritten = text.toUpperCase();
  resultDiv.innerText = `[Mock] Rewritten:\n${rewritten}`;
});

// --- Transcribe (Audio) ---
document.getElementById('transcribe-btn').addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'audio/*';
  
  input.onchange = () => {
    const file = input.files[0];
    if (!file) return alert("No file selected!");
    
    // Mock transcription
    const reader = new FileReader();
    reader.onload = () => {
      resultDiv.innerText = `[Mock] Transcription of "${file.name}" successful!\nThis is dummy text.`;
    };
    reader.readAsArrayBuffer(file);
  };
  
  input.click();
});
