const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(500).json({ error: 'intentionally broken', version: 'v2' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello from v2!', region: process.env.REGION || 'unknown' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔴 v2 server running on port ${PORT} — health check is BROKEN`);
});