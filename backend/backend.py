from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow Chrome extension to access

@app.route('/summarize', methods=['POST'])
def summarize():
    text = request.json.get('text', '')
    summary = '.'.join(text.split('.')[:2]) + '...'
    return jsonify({'summary': summary})

@app.route('/translate', methods=['POST'])
def translate():
    text = request.json.get('text', '')
    return jsonify({'translation': text + ' (translated)'})

@app.route('/proofread', methods=['POST'])
def proofread():
    text = request.json.get('text', '')
    return jsonify({'corrected': text + ' (proofread)'})

@app.route('/rewrite', methods=['POST'])
def rewrite():
    text = request.json.get('text', '')
    return jsonify({'rewrite': text + ' (rewritten)'})

@app.route('/transcribe', methods=['POST'])
def transcribe():
    filename = request.json.get('filename', '')
    return jsonify({'transcription': f'Audio transcription (mock) for {filename} successful!'})

if __name__ == '__main__':
    app.run(debug=True)
