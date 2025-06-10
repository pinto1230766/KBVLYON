import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Chemin vers le fichier de données
const dataPath = join(__dirname, '../src/data/grammarData.ts');

// Lire le contenu du fichier
let content = readFileSync(dataPath, 'utf8');

// Compter le nombre d'entrées
const entries = content.match(/\{\s*word:/g) || [];
console.log(`Nombre d'entrées trouvées: ${entries.length}`);

// Ajouter un ID unique à chaque entrée
let entryId = 1;
let lastIndex = 0;
let result = '';

// Parcourir toutes les occurrences de "word:" et ajouter un ID avant
for (const match of entries) {
  const index = content.indexOf(match, lastIndex);
  if (index === -1) break;
  
  // Ajouter le contenu avant le match
  result += content.substring(lastIndex, index);
  
  // Ajouter l'ID avant le mot-clé "word"
  result += `{\n    id: 'entry-${entryId++}',`;
  
  // Mettre à jour lastIndex pour la prochaine itération
  lastIndex = index + 1; // +1 pour éviter les boucles infinies
}

// Ajouter le reste du contenu
result += content.substring(lastIndex);

// Écrire le contenu modifié dans un nouveau fichier
const outputPath = join(__dirname, '../src/data/grammarDataWithIds.ts');
writeFileSync(outputPath, result, 'utf8');

console.log(`Fichier généré avec succès: ${outputPath}`);
console.log('Veuillez vérifier le fichier généré avant de le renommer en grammarData.ts');
