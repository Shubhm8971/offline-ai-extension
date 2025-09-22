document.getElementById("summarize-btn").addEventListener("click", () => {
  const text = document.getElementById("input-text").value;
  const resultDiv = document.getElementById("result");
  // placeholder for Summarizer API call
  resultDiv.textContent = "Summarized: " + text.slice(0, 50) + "...";
});
