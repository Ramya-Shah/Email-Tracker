function injectPixel(emailId) {
    const iframe = document.querySelector('iframe.Am.Al.editable'); // Gmail compose box
    if (iframe && iframe.contentDocument) {
      const body = iframe.contentDocument.body;
      const pixelImg = iframe.contentDocument.createElement('img');
      pixelImg.src = `https://your-server.com/track/${emailId}`;
      pixelImg.width = 1;
      pixelImg.height = 1;
      pixelImg.style.display = 'none';
      body.appendChild(pixelImg);
    }
  }
  
  // This is just a basic example that triggers on button press or interval
  setInterval(() => {
    const sendBtn = document.querySelector('div[aria-label="Send ‪(Ctrl-Enter)‬"]');
    if (sendBtn && !sendBtn.hasAttribute('data-tracker-injected')) {
      sendBtn.setAttribute('data-tracker-injected', 'true');
      sendBtn.addEventListener('click', () => {
        const emailId = Date.now(); // You can use a hash or UUID here
        injectPixel(emailId);
      });
    }
  }, 1000);
  