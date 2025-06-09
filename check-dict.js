const fs = require('fs');
const path = require('path');

// Lire le fichier grammarData.ts
const filePath = path.join(__dirname, 'src', 'data', 'grammarData.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Compter le nombre d'entrées
const entryCount = (content.match(/\bentry-\d+\b/g) || []).length;
const uniqueEntries = new Set(content.match(/\bentry-\d+\b/g) || []);

console.log('=== VÉRIFICATION DU FICHIER DICTIONNAIRE ===');
console.log(`Nombre total d'entrées trouvées: ${entryCount}`);
console.log(`Nombre d'entrées uniques: ${uniqueEntries.size}`);

// Afficher les 5 premières et 5 dernières entrées
const firstEntries = content.match(/\bentry-\d+\b.*?word: '([^']+)'/gs)?.slice(0, 5) || [];
const lastEntries = content.match(/\bentry-\d+\b.*?word: '([^']+)'/gs)?.slice(-5) || [];

console.log('\n5 premières entrées:');
console.log(firstEntries.map(e => e.match(/entry-(\d+).*?'([^']+)'/).slice(1).join(': ')).join('\n'));

console.log('\n5 dernières entrées:');
console.log(lastEntries.map(e => e.match(/entry-(\d+).*?'([^']+)'/).slice(1).join(': ')).join('\n'));

// Vérifier les doublons
const wordCounts = new Map();
const wordRegex = /word: '([^']+)'/g;
let match;

while ((match = wordRegex.exec(content)) !== null) {
  const word = match[1];
  wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
}

const duplicates = Array.from(wordCounts.entries())
  .filter(([_, count]) => count > 1)
  .map(([word, count]) => `${word} (${count} fois)`);

console.log(`\nMots en double (${duplicates.length}):`);
if (duplicates.length > 0) {
  console.log(duplicates.join(', '));
} else {
  console.log('Aucun doublon trouvé.');
}

console.log('=== FIN DE LA VÉRIFICATION ===');
