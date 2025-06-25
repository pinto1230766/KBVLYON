// Test du serveur
console.log('=== Test du serveur ===');
console.log('Date:', new Date().toISOString());
console.log('Node.js version:', process.version);
console.log('Plateforme:', process.platform);
console.log('Répertoire courant:', process.cwd());
console.log('Chemin du fichier:', __filename);

// Tester l'accès au système de fichiers
const fs = require('fs');
const path = require('path');

try {
  const testFile = path.join(__dirname, 'test-file.txt');
  fs.writeFileSync(testFile, 'Test d\'écriture');
  console.log('Écriture réussie dans le fichier:', testFile);
  
  const content = fs.readFileSync(testFile, 'utf8');
  console.log('Contenu du fichier:', content);
  
  fs.unlinkSync(testFile);
  console.log('Fichier supprimé avec succès');
  
  console.log('\n=== Test réussi ===');
} catch (error) {
  console.error('ERREUR lors du test:', error);
  process.exit(1);
}
