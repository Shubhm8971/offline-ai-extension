document.getElementById("rewrite-btn").addEventListener("click", () => {
  const text = document.getElementById("input-text").value;
  const resultDiv = document.getElementById("result");
  // placeholder for Rewriter API call
  resultDiv.textContent = "Rewritten: " + text;
});
