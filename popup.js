const inputText = document.getElementById('inputText');
const outputDiv = document.getElementById('output');

// Summarize
document.getElementById('summarizeBtn').addEventListener('click', () => {
  const text = inputText.value;
  if (!text) {
    alert("Please enter some text first!");
    return;
  }
  const summary = text.split(".").slice(0, 2).join(".") + "...";
  outputDiv.innerText = `Summary (mock): ${summary}`;
});

// Translate
document.getElementById('translateBtn').addEventListener('click', () => {
  const text = inputText.value;
  if (!text) {
    alert("Please enter some text first!");
    return;
  }
  outputDiv.innerText = `Translation (mock): ${text.split("").reverse().join("")}`;
});

// Proofread
document.getElementById('proofreadBtn').addEventListener('click', () => {
  const text = inputText.value;
  if (!text) {
    alert("Please enter some text first!");
    return;
  }
  outputDiv.innerText = `Proofread (mock): ${text}`;
});

// Rewrite
document.getElementById('rewriteBtn').addEventListener('click', () => {
  const text = inputText.value;
  if (!text) {
    alert("Please enter some text first!");
    return;
  }
  outputDiv.innerText = `Rewrite (mock): ${text.toUpperCase()}`;
});

// Transcribe (audio file picker)
document.getElementById('transcribeBtn').addEventListener('click', () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'audio/*';
  fileInput.onchange = () => {
    const file = fileInput.files[0];
    if (file) {
      outputDiv.innerText = `Selected audio file: ${file.name} (mock transcription successful!)`;
    }
  };
  fileInput.click();
});

// Upload (image/audio picker)
document.getElementById('uploadBtn').addEventListener('click', () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*,audio/*';
  fileInput.onchange = () => {
    const file = fileInput.files[0];
    if (file) {
      outputDiv.innerText = `Selected file: ${file.name} (mock upload processed!)`;
    }
  };
  fileInput.click();
});
