const fs = require('fs');
const path = require('path');

// Lire le fichier original
const fileContent = fs.readFileSync(path.join(__dirname, 'src/data/grammarData.ts'), 'utf-8');

// Extraire le tableau dictionaryEntries
const dictionaryMatch = fileContent.match(/export const dictionaryEntries: DictionaryEntry\[\] = \[(.|\n)*?\];/);
if (!dictionaryMatch) {
  console.error('Impossible de trouver le tableau dictionaryEntries dans le fichier');
  process.exit(1);
}

// Évaluer le contenu du tableau pour obtenir un tableau JavaScript
const entriesStr = dictionaryMatch[0]
  .replace('export const dictionaryEntries: DictionaryEntry[] = ', '')
  .replace(/;$/, '');

// Utiliser Function pour évaluer le tableau de manière sécurisée
const entries = new Function(`return ${entriesStr}`)();

// Fonction pour normaliser les chaînes pour la comparaison
const normalizeString = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};

// Supprimer les doublons basés sur le champ 'word'
const uniqueEntries = Array.from(
  new Map(entries.map(entry => [normalizeString(entry.word), entry])).values()
);

// Trier les entrées par ordre alphabétique
const sortedEntries = [...uniqueEntries].sort((a, b) => 
  normalizeString(a.word).localeCompare(normalizeString(b.word))
);

// Générer le contenu du nouveau tableau
let newEntriesContent = 'export const dictionaryEntries: DictionaryEntry[] = [\n';

// Ajouter chaque entrée au format souhaité
sortedEntries.forEach((entry, index) => {
  const isLast = index === sortedEntries.length - 1;
  
  // Échapper les apostrophes dans les chaînes
  const escapeQuotes = (str) => str.replace(/'/g, "\\'");
  
  newEntriesContent += `  {\n    word: '${escapeQuotes(entry.word)}',\n`;
  newEntriesContent += `    translation: {\n      pt: '${escapeQuotes(entry.translation.pt)}',\n      cv: '${escapeQuotes(entry.translation.cv)}'\n    },\n    example: {\n      pt: '${escapeQuotes(entry.example.pt)}',\n      cv: '${escapeQuotes(entry.example.cv)}'\n    }`;
  
  if (entry.note) {
    newEntriesContent += `,\n    note: '${escapeQuotes(entry.note)}'`;
  }
  
  newEntriesContent += `\n  }${isLast ? '\n' : ',\n'}`;
});

newEntriesContent += '];\n';

// Remplacer l'ancien contenu par le nouveau
const newFileContent = fileContent.replace(
  /export const dictionaryEntries: DictionaryEntry\[\] = \[(.|\n)*?\];/s,
  newEntriesContent
);

// Écrire le contenu dans le fichier original
fs.writeFileSync(
  path.join(__dirname, 'src/data/grammarData.ts'),
  newFileContent,
  'utf-8'
);

console.log('Dictionnaire trié avec succès !');
console.log(`Nombre d'entrées originales : ${entries.length}`);
console.log(`Nombre d'entrées uniques : ${sortedEntries.length}`);
console.log(`Doublons supprimés : ${entries.length - sortedEntries.length}`);
