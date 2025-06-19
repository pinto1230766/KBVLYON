const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function fixEncoding() {
  try {
    // Lire le fichier en tant que buffer
    const filePath = path.join(__dirname, 'public', 'dictionary.json');
    const data = await readFile(filePath);
    
    // Convertir en chaîne avec l'encodage correct
    let content = data.toString('latin1');
    
    // Écrire le fichier avec l'encodage UTF-8
    await writeFile(filePath, content, 'utf8');
    
    console.log('Encodage corrigé avec succès!');
  } catch (error) {
    console.error('Erreur lors de la correction de l\'encodage:', error);
  }
}

fixEncoding();
