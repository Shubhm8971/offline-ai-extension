
from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow Chrome extension access

# ------------------------------
# CONFIG
# ------------------------------
HUGGINGFACE_API = "https://api-inference.huggingface.co/models"
HEADERS = {"Content-Type": "application/json"}

# ------------------------------
# SUMMARIZE
# ------------------------------
@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    try:
        response = requests.post(
            f"{HUGGINGFACE_API}/facebook/bart-large-cnn",
            headers=HEADERS,
            json={"inputs": text}
        )
        summary = response.json()[0]["summary_text"]
        return jsonify({"summary": summary})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ------------------------------
# TRANSLATE (LibreTranslate)
# ------------------------------
@app.route("/translate", methods=["POST"])
def translate():
    data = request.get_json()
    text = data.get("text", "")
    target_lang = data.get("target_lang", "es")  # default Spanish

    try:
        r = requests.post(
            "https://libretranslate.com/translate",
            data={
                "q": text,
                "source": "en",
                "target": target_lang,
                "format": "text"
            }
        )
        translated = r.json().get("translatedText", "")
        return jsonify({"translated": translated})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ------------------------------
# PROOFREAD (LanguageTool API)
# ------------------------------
@app.route("/proofread", methods=["POST"])
def proofread():
    data = request.get_json()
    text = data.get("text", "")

    try:
        r = requests.post(
            "https://api.languagetoolplus.com/v2/check",
            data={"text": text, "language": "en-US"}
        )
        matches = r.json().get("matches", [])
        suggestions = []
        for m in matches:
            if "replacements" in m and m["replacements"]:
                suggestions.append({
                    "error": m["message"],
                    "suggestion": m["replacements"][0]["value"]
                })
        return jsonify({"suggestions": suggestions})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ------------------------------
# TRANSCRIBE (Hugging Face Whisper)
# ------------------------------
@app.route("/transcribe", methods=["POST"])
def transcribe():
    file = request.files.get("file")
    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    try:
        files = {"file": (file.filename, file.stream, file.mimetype)}
        response = requests.post(
            f"{HUGGINGFACE_API}/openai/whisper-base",
            headers={"Authorization": ""},  # empty -> public use
            files=files
        )
        text = response.json().get("text", "")
        return jsonify({"transcription": text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ------------------------------
# HEALTH CHECK
# ------------------------------
@app.route("/", methods=["GET"])
def home():
    return jsonify({"status": "Backend running"})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
