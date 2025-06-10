import { dictionaryEntries } from '../src/data/grammarData';

function findDuplicates() {
  const wordMap = new Map<string, number>();
  const duplicates: string[] = [];

  // Parcourir toutes les entrées du dictionnaire
  dictionaryEntries.forEach(entry => {
    const word = entry.word.toLowerCase().trim();
    const count = wordMap.get(word) || 0;
    
    if (count === 1) { // Si c'est la deuxième occurrence
      duplicates.push(word);
    }
    
    wordMap.set(word, count + 1);
  });

  // Afficher les résultats
  if (duplicates.length > 0) {
    console.log('\x1b[31m%s\x1b[0m', '\nMots en double trouvés :');
    console.log('\x1b[33m%s\x1b[0m', '--------------------------------');
    
    duplicates.forEach(word => {
      const entries = dictionaryEntries.filter(e => e.word.toLowerCase().trim() === word);
      console.log('\n\x1b[36m%s\x1b[0m', `Mot: "${word}"`);
      console.log('Occurrences:', entries.length);
      
      entries.forEach((entry, index) => {
        console.log(`\n  ${index + 1}.`);
        console.log('  Traduction PT:', entry.translation.pt);
        console.log('  Traduction CV:', entry.translation.cv);
        if (entry.example) {
          console.log('  Exemple PT:', entry.example.pt || 'Aucun');
          console.log('  Exemple CV:', entry.example.cv || 'Aucun');
        }
      });
      console.log('\n' + '-'.repeat(50));
    });
    
    console.log('\n\x1b[32m%s\x1b[0m', `Total de mots en double: ${duplicates.length}`);
  } else {
    console.log('\x1b[32m%s\x1b[0m', '\nAucun mot en double trouvé dans le dictionnaire.');
  }

  return duplicates;
}

// Exécuter la vérification
findDuplicates();
