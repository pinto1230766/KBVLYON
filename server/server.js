// Configuration de base
console.log('1. Début du script');

const express = require('express');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

console.log('2. Modules chargés');

// Configuration du serveur
const app = express();
const PORT = 3001;

// Middleware de base
app.use(express.json());

// Route de test
app.get('/api/test', (req, res) => {
  console.log('Requête reçue sur /api/test');
  res.json({ status: 'ok', message: 'Le serveur fonctionne !' });
});

// Démarrer le serveur
console.log('3. Démarrage du serveur...');
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`4. Serveur démarré sur http://localhost:${PORT}`);
  console.log('5. Testez avec: http://localhost:3001/api/test');
});

// Gestion de l'arrêt
process.on('SIGINT', () => {
  console.log('\nArrêt du serveur...');
  server.close(() => {
    console.log('Serveur arrêté.');
    process.exit(0);
  });
});

console.log('6. Configuration terminée, attente des requêtes...');
