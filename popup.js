const backendURL = 'http://127.0.0.1:5000';

const inputText = document.getElementById('input-text');
const resultDiv = document.getElementById('result');

document.getElementById('summarize-btn').addEventListener('click', async () => {
    const text = inputText.value;
    if (!text) return alert('Please enter some text first!');
    
    const res = await fetch(`${backendURL}/summarize`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({text})
    });
    const data = await res.json();
    resultDiv.innerText = data.summary;
});

document.getElementById('translate-btn').addEventListener('click', async () => {
    const text = inputText.value;
    if (!text) return alert('Please enter some text first!');
    
    const res = await fetch(`${backendURL}/translate`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({text})
    });
    const data = await res.json();
    resultDiv.innerText = data.translated;
});

document.getElementById('proofread-btn').addEventListener('click', async () => {
    const text = inputText.value;
    if (!text) return alert('Please enter some text first!');
    
    const res = await fetch(`${backendURL}/proofread`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({text})
    });
    const data = await res.json();
    resultDiv.innerText = data.suggestions.length 
        ? JSON.stringify(data.suggestions) 
        : 'No errors found (mock)';
});

document.getElementById('rewrite-btn').addEventListener('click', async () => {
    const text = inputText.value;
    if (!text) return alert('Please enter some text first!');
    
    const res = await fetch(`${backendURL}/rewrite`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({text})
    });
    const data = await res.json();
    resultDiv.innerText = data.rewritten;
});

document.getElementById('transcribe-btn').addEventListener('click', async () => {
    const res = await fetch(`${backendURL}/transcribe`, {method:'POST'});
    const data = await res.json();
    resultDiv.innerText = data.transcription;
});
