const fs = require('fs');
const path = require('path');

function findDuplicates() {
  // Lire le fichier grammarData.ts
  const filePath = path.join(__dirname, '../src/data/grammarData.ts');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extraire les entrées du dictionnaire (simplification)
  const entries = [];
  const wordRegex = /word: ['"`]([^'"`]+)['"`]/g;
  let match;

  while ((match = wordRegex.exec(content)) !== null) {
    entries.push(match[1].toLowerCase().trim());
  }

  // Trouver les doublons
  const duplicates = [];
  const uniqueWords = new Set();
  const seenWords = new Set();

  entries.forEach(word => {
    if (uniqueWords.has(word)) {
      if (!seenWords.has(word)) {
        duplicates.push(word);
        seenWords.add(word);
      }
    } else {
      uniqueWords.add(word);
    }
  });

  // Afficher les résultats
  if (duplicates.length > 0) {
    console.log('\n\x1b[31mMots en double trouvés :\x1b[0m');
    console.log('\x1b[33m' + '-'.repeat(30) + '\x1b[0m');
    
    duplicates.forEach((word, index) => {
      console.log(`\n\x1b[36m${index + 1}. "${word}"\x1b[0m`);
      
      // Afficher les lignes complètes des entrées en double
      const regex = new RegExp(`word: ['\"\`]${word}['\"\`][^}]+}`, 'g');
      const matches = content.match(regex);
      
      if (matches) {
        console.log('  Occurrences trouvées :');
        matches.forEach((match, i) => {
          console.log(`  ${i + 1}. ${match.replace(/\s+/g, ' ').trim()}`);
        });
      }
    });
    
    console.log('\n\x1b[32m' + `Total de mots en double: ${duplicates.length}` + '\x1b[0m');
  } else {
    console.log('\n\x1b[32mAucun mot en double trouvé dans le dictionnaire.\x1b[0m');
  }
}

// Exécuter la vérification
findDuplicates();
