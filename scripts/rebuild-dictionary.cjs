const fs = require('fs');
const path = require('path');

// Chemins des fichiers
const filePath = path.join(__dirname, '../src/data/grammarData.ts');
const backupPath = path.join(__dirname, '../src/data/grammarData.before-rebuild.ts');

console.log('Lecture du fichier source...');
let content = fs.readFileSync(filePath, 'utf-8');

// Créer une sauvegarde
fs.writeFileSync(backupPath, content, 'utf-8');
console.log(`Sauvegarde créée : ${backupPath}`);

// Extraire la partie avant les entrées du dictionnaire
const header = content.substring(0, content.indexOf('export const dictionaryEntries'));

// Extraire la partie après les entrées du dictionnaire
const footer = content.substring(content.lastIndexOf('];') + 2);

// Extraire le contenu du tableau
let entriesContent = content
  .substring(content.indexOf('[') + 1, content.lastIndexOf(']'))
  .trim();

// Fonction pour nettoyer et formater une entrée
function cleanEntry(entry) {
  // Nettoyer les virgules en trop
  entry = entry.replace(/,\s*$/, '');
  
  // S'assurer que l'entrée a les propriétés requises
  if (!entry.includes('example')) {
    // Extraire le mot et la traduction
    const wordMatch = entry.match(/word:\s*'([^']+)'/);
    const ptMatch = entry.match(/pt:\s*'([^']+)'/);
    const cvMatch = entry.match(/cv:\s*'([^']+)'/);
    
    if (wordMatch && ptMatch && cvMatch) {
      const word = wordMatch[1];
      const pt = ptMatch[1];
      const cv = cvMatch[1];
      
      // Ajouter un exemple par défaut
      const defaultExample = `example: {
      pt: "Exemplo com ${pt}",
      cv: "${word} ta ser un eisemplu"
    }`;
      
      // Ajouter la propriété example à l'entrée
      entry = entry.replace(/\s*$/, '');
      if (!entry.endsWith(',')) entry += ',';
      entry += `
    ${defaultExample}\n  `;
      
      console.log(`Ajout d'un exemple pour : ${word}`);
    }
  }
  
  return entry;
}

// Diviser les entrées
let entries = [];
let currentEntry = '';
let braceCount = 0;
let inString = false;
let lastChar = '';

for (let i = 0; i < entriesContent.length; i++) {
  const char = entriesContent[i];
  
  // Gérer les chaînes de caractères
  if (char === '"' && lastChar !== '\\') {
    inString = !inString;
  }
  
  // Compter les accolades seulement en dehors des chaînes
  if (!inString) {
    if (char === '{') braceCount++;
    if (char === '}') braceCount--;
  }
  
  currentEntry += char;
  
  // Si on trouve une fin d'entrée
  if (char === '}' && braceCount === 0 && !inString) {
    entries.push(currentEntry.trim());
    currentEntry = '';
  }
  
  lastChar = char;
}

// Nettoyer et formater chaque entrée
entries = entries
  .map(entry => cleanEntry(entry))
  .filter(entry => entry.trim() !== '');

// Reconstruire le contenu
const newContent = `${header}export const dictionaryEntries: DictionaryEntry[] = [
  ${entries.join(',\n  ')}\n];${footer}`;

// Écrire le fichier corrigé
fs.writeFileSync(filePath, newContent, 'utf-8');

console.log('\nReconstruction terminée !');
console.log(`- Entrées traitées : ${entries.length}`);
console.log(`- Fichier corrigé : ${filePath}`);
console.log('---DICTIONARY_START---');
console.log(JSON.stringify(sortedEntries, null, 2));
console.log('---DICTIONARY_END---');
