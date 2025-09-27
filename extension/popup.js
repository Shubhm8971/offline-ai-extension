document.getElementById('transcribe-btn').addEventListener('click', async () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'audio/*';
  
  input.onchange = () => {
    const file = input.files[0];
    if (!file) {
      alert("No file selected!");
      return;
    }
    
    // Mock transcription output
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById('result').innerText = `[Mock] Transcription of ${file.name} successful!\nThis is dummy text.`;
    };
    reader.readAsArrayBuffer(file);
  };
  
  input.click();
});
