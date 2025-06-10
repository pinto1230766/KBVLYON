const { dictionaryEntries } = require('../dist/data/grammarData');

function findDuplicates() {
  const wordMap = new Map();
  const duplicates = new Map();

  // Parcourir toutes les entrées du dictionnaire
  dictionaryEntries.forEach(entry => {
    const word = entry.word.toLowerCase().trim();
    
    if (!wordMap.has(word)) {
      wordMap.set(word, [entry]);
    } else {
      const entries = wordMap.get(word);
      entries.push(entry);
      duplicates.set(word, entries);
    }
  });

  // Afficher les résultats
  if (duplicates.size > 0) {
    console.log('\x1b[31m%s\x1b[0m', '\nMots en double trouvés :');
    console.log('\x1b[33m%s\x1b[0m', '--------------------------------');
    
    duplicates.forEach((entries, word) => {
      console.log('\n\x1b[36m%s\x1b[0m', `Mot: "${word}"`);
      console.log('Occurrences:', entries.length);
      
      entries.forEach((entry, index) => {
        console.log(`\n  ${index + 1}.`);
        console.log('  Mot:', entry.word);
        console.log('  Traduction PT:', entry.translation.pt);
        console.log('  Traduction CV:', entry.translation.cv);
        if (entry.example) {
          console.log('  Exemple PT:', entry.example.pt || 'Aucun');
          console.log('  Exemple CV:', entry.example.cv || 'Aucun');
        }
      });
      console.log('\n' + '-'.repeat(50));
    });
    
    console.log('\n\x1b[32m%s\x1b[0m', `Total de mots en double: ${duplicates.size}`);
  } else {
    console.log('\x1b[32m%s\x1b[0m', '\nAucun mot en double trouvé dans le dictionnaire.');
  }

  return duplicates;
}

// Exécuter la vérification
findDuplicates();
