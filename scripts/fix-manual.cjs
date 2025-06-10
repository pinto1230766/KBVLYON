const fs = require('fs');
const path = require('path');

// Chemins des fichiers
const inputPath = path.join(__dirname, '../src/data/grammarData.ts');
const outputPath = path.join(__dirname, '../src/data/grammarData.manual-fix.ts');

// Lire le contenu du fichier
let content = fs.readFileSync(inputPath, 'utf-8');

// 1. Corriger les erreurs de syntaxe de base
// Remplacer les virgules en trop après les accolades fermantes
content = content.replace(/,\s*\n\s*{/g, '\n  {');

// 2. Ajouter les exemples manquants
const entryRegex = /(\s*{\s*word:\s*'([^']+)'[^}]*translation:\s*{\s*pt:\s*'([^']*)'\s*,\s*cv:\s*'([^']*)'\s*}([^}]*)\s*)(?=\s*[},])/g;

content = content.replace(entryRegex, (match, p1, word, pt, cv, rest) => {
  // Vérifier si l'exemple est manquant
  if (!/example\s*:/.test(rest)) {
    const defaultExample = `,\n    example: {\n      pt: "Exemplo com ${pt.replace(/"/g, '\\"')}",\n      cv: "${word} ta ser un eisemplu"\n    }`;
    console.log(`Ajout d'un exemple pour : ${word}`);
    return `${p1}${defaultExample}\n  `;
  }
  return match;
});

// 3. Corriger les virgules manquantes entre les entrées
content = content.replace(/}\s*\n\s*{/g, '},\n  {');

// 4. Supprimer les virgules en début de tableau
content = content.replace(/\[\s*,/g, '\[');

// 5. S'assurer que la dernière entrée n'a pas de virgule avant la fin du tableau
content = content.replace(/},\s*\]\s*;\s*$/, '}\n];');

// Écrire le fichier corrigé
fs.writeFileSync(outputPath, content, 'utf-8');

console.log('\nCorrection terminée !');
console.log(`Fichier corrigé : ${outputPath}`);
