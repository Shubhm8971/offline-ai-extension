from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data.get('text', '')
    if not text:
        return jsonify({'summary': 'No text provided'})
    
    summary = text.split('.')[:2]  # mock: first two sentences
    return jsonify({'summary': '.'.join(summary) + '...'})

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    text = data.get('text', '')
    if not text:
        return jsonify({'translated': 'No text provided'})
    
    return jsonify({'translated': text[::-1]})  # mock: reverse text

@app.route('/proofread', methods=['POST'])
def proofread():
    data = request.get_json()
    text = data.get('text', '')
    suggestions = [{'error': 'teh', 'suggestion': 'the'}] if 'teh' in text else []
    return jsonify({'suggestions': suggestions})

@app.route('/rewrite', methods=['POST'])
def rewrite():
    data = request.get_json()
    text = data.get('text', '')
    rewritten = text.upper() if text else 'No text provided'  # mock: uppercase
    return jsonify({'rewritten': rewritten})

@app.route('/transcribe', methods=['POST'])
def transcribe():
    return jsonify({'transcription': 'Audio transcription (mock) successful!'})

if __name__ == '__main__':
    app.run(debug=True)
