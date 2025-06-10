const fs = require('fs');
const path = require('path');

// Chemins des fichiers
const filePath = path.join(__dirname, '../src/data/grammarData.ts');
const backupPath = path.join(__dirname, '../src/data/grammarData.before-syntax-fix.ts');

console.log('Lecture du fichier source...');
let content = fs.readFileSync(filePath, 'utf-8');

// Créer une sauvegarde
fs.writeFileSync(backupPath, content, 'utf-8');
console.log(`Sauvegarde créée : ${backupPath}`);

// 1. Corriger les virgules en trop après les accolades fermantes
content = content.replace(/,\s*\n\s*{/g, '\n  {');

// 2. Corriger les virgules en trop après les propriétés de traduction
content = content.replace(/,\s*,\s*\n\s*{/g, ',\n  {');

// 3. S'assurer qu'il y a une virgule entre les entrées
content = content.replace(/}\s*\n\s*{/g, '},\n  {');

// 4. Supprimer les virgules en début de tableau
content = content.replace(/\[\s*,/g, '\[');

// 5. S'assurer que la dernière entrée n'a pas de virgule avant la fin du tableau
content = content.replace(/},\s*\]\s*;\s*$/, '}\n];');

// 6. Ajouter des exemples manquants
const entryRegex = /(\s*{\s*word:\s*'([^']+)'[^}]*translation:\s*{\s*pt:\s*'([^']*)'\s*,\s*cv:\s*'([^']*)'\s*}([^}]*)\s*)(?=\s*[},])/g;

content = content.replace(entryRegex, (match, p1, word, pt, cv, rest) => {
  // Vérifier si l'exemple est manquant
  if (!/example\s*:/.test(rest)) {
    const defaultExample = `example: {
      pt: "Exemplo com ${pt}",
      cv: "${word} ta ser un eisemplu"
    }`;
    console.log(`Ajout d'un exemple pour : ${word}`);
    return `${p1},\n    ${defaultExample}\n  `;
  }
  return match;
});

// Écrire le fichier corrigé
fs.writeFileSync(filePath, content, 'utf-8');

console.log('\nCorrections de syntaxe terminées !');
console.log(`Fichier corrigé : ${filePath}`);
