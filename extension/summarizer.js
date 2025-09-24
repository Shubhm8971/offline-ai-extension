let summarizerModel = null;

async function summarizeText(text) {
  // Load the model once
  if (!summarizerModel) {
    summarizerModel = await window.transformers.pipeline("summarization", "Xenova/distilbart-cnn-12-6");
  }

  const output = await summarizerModel(text);
  return output[0].summary_text;
}
