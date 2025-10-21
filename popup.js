const API_BASE = "http://127.0.0.1:5000";

document.getElementById("summarizeBtn").addEventListener("click", async () => {
  const text = getInput();
  const result = await postData(`${API_BASE}/summarize`, { text });
  showOutput(result.summary || result.error);
});

document.getElementById("translateBtn").addEventListener("click", async () => {
  const text = getInput();
  const result = await postData(`${API_BASE}/translate`, { text, target_lang: "es" });
  showOutput(result.translated || result.error);
});

document.getElementById("proofreadBtn").addEventListener("click", async () => {
  const text = getInput();
  const result = await postData(`${API_BASE}/proofread`, { text });
  if (result.suggestions && result.suggestions.length > 0) {
    const formatted = result.suggestions.map(
      s => `• ${s.error} → ${s.suggestion}`
    ).join("<br>");
    showOutput(formatted);
  } else {
    showOutput("No major issues found ✅");
  }
});

document.getElementById("rewriteBtn").addEventListener("click", async () => {
  const text = getInput();
  // Just reusing summarization model for simplicity
  const result = await postData(`${API_BASE}/summarize`, { text });
  showOutput(result.summary || result.error);
});

document.getElementById("transcribeBtn").addEventListener("click", async () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "audio/*";
  fileInput.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE}/transcribe`, {
      method: "POST",
      body: formData
    });
    const result = await response.json();
    showOutput(result.transcription || result.error);
  };
  fileInput.click();
});

// ====================== Helper functions ======================
function getInput() {
  return document.getElementById("inputText").value.trim();
}

function showOutput(text) {
  document.getElementById("output").innerHTML = text || "No output.";
}

async function postData(url, data) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (err) {
    console.error("Error:", err);
    return { error: "Failed to connect to backend." };
  }
}
