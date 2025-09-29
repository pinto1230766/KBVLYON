const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001; // Choose a different port for the API server

// Middleware pour permettre les requêtes CORS depuis le frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Ajout de Authorization au cas où
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Ajout des méthodes
  if (req.method === 'OPTIONS') {
    // Répondre aux requêtes preflight OPTIONS
    return res.sendStatus(200);
  }
  next();
});

// Middleware pour parser le JSON du corps des requêtes
app.use(express.json());

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

// Nouvelle route pour /api/dictionary/entries
app.get('/api/dictionary/entries', (req, res) => {
  const dictionaryPath = path.join(__dirname, 'dictionary.json');
  fs.readFile(dictionaryPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading dictionary.json:', err);
      return res.status(500).json({ error: 'Unable to read dictionary data' });
    }
    res.json(JSON.parse(data));
  });
});

// Nouvelle route pour /api/dictionary/entries/:id
app.get('/api/dictionary/entries/:id', (req, res) => {
  const entryId = req.params.id;
  const dictionaryPath = path.join(__dirname, 'dictionary.json');
  fs.readFile(dictionaryPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading dictionary.json:', err);
      return res.status(500).json({ error: 'Unable to read dictionary data' });
    }
    const dictionary = JSON.parse(data);
    const entry = dictionary.find(item => item.id === entryId); // Assuming each entry has an 'id' field
    if (entry) {
      res.json(entry);
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  });
});

// Nouvelle route pour /api/dictionary/search
app.get('/api/dictionary/search', (req, res) => {
  const query = req.query.q;
  const language = req.query.lang; // You might use this for language-specific search
  const dictionaryPath = path.join(__dirname, 'dictionary.json');
  fs.readFile(dictionaryPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading dictionary.json:', err);
      return res.status(500).json({ error: 'Unable to read dictionary data' });
    }
    const dictionary = JSON.parse(data);
    // Basic search logic: filter entries that contain the query in any string field
    const results = dictionary.filter(entry =>
      Object.values(entry).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
      )
    );
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
