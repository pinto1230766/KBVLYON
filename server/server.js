const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001; // Choose a different port for the API server

// Middleware pour permettre les requêtes CORS depuis le frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permet à toutes les origines d'accéder
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Servir le fichier dictionary.json
app.get('/api/dictionary', (req, res) => {
  const dictionaryPath = path.join(__dirname, 'dictionary.json');
  fs.readFile(dictionaryPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading dictionary.json:', err);
      return res.status(500).json({ error: 'Unable to read dictionary data' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
