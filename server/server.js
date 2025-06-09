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

// La route pour l'inscription à la newsletter a été supprimée.
// Le fichier server/subscribers.json peut être supprimé manuellement s'il a été créé.

// Les routes pour /api/study-requests (GET et POST) ont été supprimées car la gestion se fait maintenant côté client avec localStorage.
// Le fichier server/study_requests.json peut être supprimé manuellement s'il a été créé.

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
