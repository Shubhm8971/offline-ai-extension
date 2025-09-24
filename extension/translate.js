document.getElementById("translate-btn").addEventListener("click", () => {
  const text = document.getElementById("input-text").value;
  const resultDiv = document.getElementById("result");
  // placeholder for Translator API call
  resultDiv.textContent = "Translated: " + text;
});
