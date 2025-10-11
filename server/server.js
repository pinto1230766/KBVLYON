const express = require('express');
const path = require('path');
const fs = require('fs');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const app = express();
const PORT = 3001; // Choose a different port for the API server

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

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

// Endpoint pour le chatbot IA
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: "Vous êtes un assistant IA spécialisé dans l'apprentissage du créole capverdien. Aidez les utilisateurs à apprendre la langue, fournissez des traductions, expliquez la grammaire, le vocabulaire, et répondez aux questions sur la culture capverdienne et l'application. Répondez en français ou en créole selon le contexte."
    });

    const contents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const result = await model.generateContent({
      contents,
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
