import { dictionaryEntries } from './src/data/grammarData';

console.log('=== VÉRIFICATION DU DICTIONNAIRE ===');
console.log(`Nombre total d'entrées: ${dictionaryEntries.length}`);
console.log('5 premières entrées:');
console.log(dictionaryEntries.slice(0, 5).map(e => `${e.id}: ${e.word}`).join('\n'));
console.log('5 dernières entrées:');
console.log(dictionaryEntries.slice(-5).map(e => `${e.id}: ${e.word}`).join('\n'));

// Vérifier les doublons
const wordCounts = new Map<string, number>();
dictionaryEntries.forEach(entry => {
  wordCounts.set(entry.word, (wordCounts.get(entry.word) || 0) + 1);
});

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
