// server.js
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/track/:emailId', (req, res) => {
  const info = {
    emailId: req.params.emailId,
    time: new Date().toISOString(),
    ip: req.ip,
    userAgent: req.headers['user-agent'],
  };

  console.log(info); // Store in DB if needed

  // Respond with 1x1 transparent pixel
  const pixel = fs.readFileSync('./pixel.png');
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.end(pixel);
});

app.listen(3000, () => console.log('Tracking server running on port 3000'));
