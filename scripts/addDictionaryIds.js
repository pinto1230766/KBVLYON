import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de données
const dataPath = path.join(__dirname, '../src/data/grammarData.ts');

// Lire le contenu du fichier
fs.readFile(dataPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier:', err);
    return;
  }

  // Extraire la partie du tableau dictionaryEntries
  const entriesStart = data.indexOf('export const dictionaryEntries: DictionaryEntry[] = [');
  const entriesEnd = data.lastIndexOf(']; // Fin du tableau dictionaryEntries') + 30;
  
  if (entriesStart === -1 || entriesEnd === -1) {
    console.error('Impossible de trouver le tableau dictionaryEntries dans le fichier');
    return;
  }

  const beforeEntries = data.substring(0, entriesStart);
  let entriesContent = data.substring(entriesStart, entriesEnd);
  const afterEntries = data.substring(entriesEnd);

  // Compter le nombre d'entrées
  const entryCount = (entriesContent.match(/\{/g) || []).length - 1; // -1 pour le début du tableau
  console.log(`Nombre d'entrées trouvées: ${entryCount}`);

  // Ajouter un ID à chaque entrée
  let entryId = 1;
  let modifiedContent = entriesContent.replace(
    /\{\s*\n\s*word:\s*'([^']*)'/g, 
    (match, word) => `{\n    id: 'entry-${entryId++}',\n    word: '${word}'`
  );

  // Reconstruire le contenu du fichier
  const newContent = beforeEntries + modifiedContent + afterEntries;

  // Écrire le contenu modifié dans un nouveau fichier
  const outputPath = path.join(__dirname, '../src/data/grammarDataWithIds.ts');
  fs.writeFile(outputPath, newContent, 'utf8', (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier:', err);
      return;
    }
    console.log(`Fichier généré avec succès: ${outputPath}`);
    console.log('Veuillez vérifier le fichier généré avant de le renommer en grammarData.ts');
  });
});
