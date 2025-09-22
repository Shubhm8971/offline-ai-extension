document.getElementById("proofread-btn").addEventListener("click", () => {
  const text = document.getElementById("input-text").value;
  const resultDiv = document.getElementById("result");
  // placeholder for Proofreader API call
  resultDiv.textContent = "Proofread: " + text;
});
