const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', version: 'v1' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello from v1!', region: process.env.REGION || 'unknown' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ v1 server running on 0.0.0.0:${PORT}`);
});
