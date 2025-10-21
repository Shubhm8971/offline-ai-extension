async function callBackend(endpoint, payload) {
    try {
        const res = await fetch(`http://127.0.0.1:5000/${endpoint}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
        return await res.json();
    } catch (err) {
        console.error(err);
        return {error: 'Backend not reachable'};
    }
}

document.getElementById('summarize-btn').addEventListener('click', async () => {
    const text = document.getElementById('input-text').value;
    if (!text) return alert("Enter some text!");
    const data = await callBackend('summarize', {text});
    document.getElementById('result').innerText = data.summary || data.error;
});

document.getElementById('translate-btn').addEventListener('click', async () => {
    const text = document.getElementById('input-text').value;
    if (!text) return alert("Enter some text!");
    const data = await callBackend('translate', {text});
    document.getElementById('result').innerText = data.translation || data.error;
});

document.getElementById('proofread-btn').addEventListener('click', async () => {
    const text = document.getElementById('input-text').value;
    if (!text) return alert("Enter some text!");
    const data = await callBackend('proofread', {text});
    document.getElementById('result').innerText = data.corrected || data.error;
});

document.getElementById('rewrite-btn').addEventListener('click', async () => {
    const text = document.getElementById('input-text').value;
    if (!text) return alert("Enter some text!");
    const data = await callBackend('rewrite', {text});
    document.getElementById('result').innerText = data.rewrite || data.error;
});

document.getElementById('transcribe-btn').addEventListener('click', async () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*';
    fileInput.onchange = async e => {
        const file = e.target.files[0];
        if (!file) return;
        const data = await callBackend('transcribe', {filename: file.name});
        document.getElementById('result').innerText = data.transcription || data.error;
    };
    fileInput.click();
});
