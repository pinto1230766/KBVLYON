const fs = require('fs');
const path = require('path');

// Chemins des fichiers
const inputFile = path.join(__dirname, '../src/data/grammarData.ts');
const outputFile = path.join(__dirname, '../src/data/grammarData.cleaned.ts');

console.log('Lecture du fichier source...');
const content = fs.readFileSync(inputFile, 'utf-8');

// Extraire la partie avant les entrées du dictionnaire
const dictStart = content.indexOf('export const dictionaryEntries');
const beforeDict = content.substring(0, dictStart);

// Extraire le contenu du dictionnaire
let dictContent = content.substring(dictStart);

// Extraire toutes les entrées
const entryRegex = /(\s*{\s*word:\s*'([^']+)'[^}]+)}/g;
const entries = [];
const uniqueWords = new Set();
const duplicates = [];
let match;

while ((match = entryRegex.exec(dictContent)) !== null) {
    const [fullMatch, entry, word] = match;
    const lowerWord = word.toLowerCase().trim();
    
    if (!uniqueWords.has(lowerWord)) {
        uniqueWords.add(lowerWord);
        entries.push(entry);
    } else {
        duplicates.push(word);
        console.log(`Doublon trouvé : ${word}`);
    }
}

// Reconstruire le contenu nettoyé
const cleanedContent = beforeDict + 
    'export const dictionaryEntries: DictionaryEntry[] = [' + 
    entries.join(',\n') + 
    '\n];';

// Écrire le fichier nettoyé
fs.writeFileSync(outputFile, cleanedContent, 'utf-8');

console.log('\nNettoyage terminé !');
console.log(`- Entrées uniques : ${entries.length}`);
console.log(`- Doublons supprimés : ${duplicates.length}`);
console.log(`- Fichier nettoyé : ${outputFile}`);

// Proposer de remplacer l'original
console.log('\nPour remplacer le fichier original, exécutez :');
console.log(`copy "${outputFile}" "${inputFile}" /Y`);
