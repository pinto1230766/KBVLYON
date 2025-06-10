const fs = require('fs');
const path = require('path');

// Chemins des fichiers
const filePath = path.join(__dirname, '../src/data/grammarData.ts');
const backupPath = path.join(__dirname, '../src/data/grammarData.before-fix.ts');

console.log('Lecture du fichier source...');
let content = fs.readFileSync(filePath, 'utf-8');

// Créer une sauvegarde
fs.writeFileSync(backupPath, content, 'utf-8');
console.log(`Sauvegarde créée : ${backupPath}`);

// Fonction pour générer un exemple par défaut
function generateDefaultExample(word, translation) {
  return `    example: {
      pt: "Exemplo com ${translation.pt}",
      cv: "${word} ta ser un eisemplu"
    }`;
}

// Expression régulière pour trouver les entrées du dictionnaire
const entryRegex = /(\s*{\s*word:\s*'([^']+)'[^}]*translation:\s*{\s*pt:\s*'([^']*)'\s*,\s*cv:\s*'([^']*)'\s*}([^}]*)\s*)(?=\s*[},])/g;

let match;
let fixedCount = 0;

// Fonction de remplacement pour ajouter les exemples manquants
function replaceMatch(match, p1, p2, p3, p4, p5) {
  const word = p2;
  const pt = p3;
  const cv = p4;
  const rest = p5;
  
  // Vérifier si l'exemple est manquant
  if (!/example\s*:/.test(rest)) {
    const defaultExample = generateDefaultExample(word, { pt, cv });
    console.log(`Ajout d'un exemple pour : ${word}`);
    fixedCount++;
    return `${p1},\n${defaultExample}\n  `;
  }
  return match;
}

// Appliquer les corrections
let fixedContent = content.replace(entryRegex, replaceMatch);

// Corriger les virgules manquantes à la fin des entrées
fixedContent = fixedContent.replace(/\s*\n\s*\{\s*\n/g, ',\n  {\n');

// Écrire le fichier corrigé
fs.writeFileSync(filePath, fixedContent, 'utf-8');

console.log(`\nCorrections terminées :`);
console.log(`- Exemples ajoutés : ${fixedCount}`);
console.log(`- Fichier corrigé : ${filePath}`);
