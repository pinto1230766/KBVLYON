import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Chemins relatifs depuis la racine du projet
const rootDir = resolve(__dirname, '..');
const filePath = resolve(rootDir, 'src/data/grammarData.ts');
const backupPath = resolve(rootDir, 'src/data/grammarData.before-fix.ts');

console.log('Lecture du fichier source...');
const content = readFileSync(filePath, 'utf-8');

// Sauvegarde du fichier original
writeFileSync(backupPath, content, 'utf-8');
console.log(`Sauvegarde créée : ${backupPath}`);

// Fonction pour générer un exemple par défaut basé sur le mot et sa traduction
function generateDefaultExample(word: string, translation: { pt: string; cv: string }): string {
  return `    example: {
      pt: "Exemplo com ${translation.pt}",
      cv: "${word} ta ser un eisemplu"
    }`;
}

// Expression régulière pour trouver les entrées du dictionnaire
const entryRegex = /(\s*{\s*word:\s*'([^']+)'[^}]*translation:\s*{\s*pt:\s*'([^']*)'\s*,\s*cv:\s*'([^']*)'\s*}([^}]*)\s*)(?=\s*[},])/g;

let match;
let fixedContent = content;
let fixedCount = 0;

// Parcourir toutes les entrées
while ((match = entryRegex.exec(content)) !== null) {
  const [fullMatch, prefix, word, pt, cv, rest] = match;
  
  // Vérifier si l'exemple est manquant
  if (!/example\s*:/.test(rest)) {
    const defaultExample = generateDefaultExample(word, { pt, cv });
    const fixedEntry = `${prefix},\n${defaultExample}\n  `;
    
    // Remplacer l'entrée dans le contenu
    fixedContent = fixedContent.replace(fullMatch, fixedEntry);
    console.log(`Ajout d'un exemple pour : ${word}`);
    fixedCount++;
  }
}

// Corriger les virgules manquantes à la fin des entrées
fixedContent = fixedContent.replace(/\s*\n\s*\{\s*\n/g, ',\n  {\n');

// Écrire le fichier corrigé
writeFileSync(filePath, fixedContent, 'utf-8');
console.log(`\nCorrections terminées :`);
console.log(`- Exemples ajoutés : ${fixedCount}`);
console.log(`- Fichier corrigé : ${filePath}`);
