const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'v1' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello from v1!', region: process.env.REGION || 'unknown' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ v1 server running on port ${PORT}`);
});// v1
