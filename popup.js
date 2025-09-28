document.getElementById("summarizeBtn").addEventListener("click", () => {
  const text = document.getElementById("inputText").value.trim();
  if (!text) return alert("Please enter some text first!");
  const summary = text.split(".").slice(0, 2).join(".") + "...";
  document.getElementById("output").innerText = "Mock Summary: " + summary;
});

document.getElementById("translateBtn").addEventListener("click", () => {
  const text = document.getElementById("inputText").value.trim();
  if (!text) return alert("Please enter some text first!");
  document.getElementById("output").innerText = "Mock Translation: [Translated version of your text]";
});

document.getElementById("proofreadBtn").addEventListener("click", () => {
  const text = document.getElementById("inputText").value.trim();
  if (!text) return alert("Please enter some text first!");
  document.getElementById("output").innerText = "Mock Proofread: [Corrected grammar and spelling]";
});

document.getElementById("rewriteBtn").addEventListener("click", () => {
  const text = document.getElementById("inputText").value.trim();
  if (!text) return alert("Please enter some text first!");
  document.getElementById("output").innerText = "Mock Rewrite: [Rewritten version of your text]";
});

// ✅ Fixed: Transcribe now opens file picker
document.getElementById("transcribeBtn").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "audio/*";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      document.getElementById("output").innerText = "Mock Transcription: [Transcribed text from " + file.name + "]";
    }
  };
  input.click();
});

// Upload image/audio
document.getElementById("uploadBtn").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*,audio/*";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      document.getElementById("output").innerText = "Mock Upload: [" + file.name + " processed]";
    }
  };
  input.click();
});
