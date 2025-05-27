document.getElementById('downloadBtn').addEventListener('click', async () => {
    const urlInput = document.getElementById('url');
    const resultDiv = document.getElementById('result');
    const url = urlInput.value.trim();

    if (!url) {
        resultDiv.innerHTML = 'অনুগ্ৰহ কৰি এটা সঠিক লিংক দিয়ক।';
        return;
    }

    resultDiv.innerHTML = 'অনুগ্ৰহ কৰি অপেক্ষা কৰক...';

    try {
        // মানি লওঁ API নাই, সেয়ে demo purpose ত এইদৰে set কৰিলো
        // আপুনি backend থাকিলে fetch URL adjust কৰিব
        const response = await fetch('/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: url })
        });

        const data = await response.json();

        if (data.video_url) {
            resultDiv.innerHTML = `<a href="${data.video_url}" target="_blank" class="download-link">ভিডিঅ’ ডাউনলোড কৰক</a>`;
        } else if(data.error){
            resultDiv.textContent = data.error;
        } else {
            resultDiv.textContent = 'ভিডিঅ’ URL পোৱা নগ’ল।';
        }
    } catch (error) {
        resultDiv.textContent = 'কিছু সমস্যা হৈছে, পুনৰ চেষ্টা কৰক।';
    }
});
