from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data.get('text', '')
    if not text:
        return jsonify({'summary': 'No text provided'})
    
    # Simple mock summary
    summary = text[:min(len(text), 100)] + '...' if len(text) > 100 else text
    return jsonify({'summary': summary})

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    text = data.get('text', '')
    return jsonify({'translated': text[::-1]})  # just reversing text as mock

@app.route('/proofread', methods=['POST'])
def proofread():
    data = request.get_json()
    text = data.get('text', '')
    # Mock suggestion
    suggestions = [{'error': 'teh', 'suggestion': 'the'}] if 'teh' in text else []
    return jsonify({'suggestions': suggestions})

@app.route('/transcribe', methods=['POST'])
def transcribe():
    return jsonify({'transcription': 'Audio transcription (mock) successful!'})

if __name__ == '__main__':
    app.run(debug=True)
