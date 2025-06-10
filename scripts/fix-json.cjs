const fs = require('fs');
const path = require('path');

// Chemins des fichiers
const filePath = path.join(__dirname, '../src/data/grammarData.ts');
const backupPath = path.join(__dirname, '../src/data/grammarData.before-json-fix.ts');
const outputPath = path.join(__dirname, '../src/data/grammarData.fixed.ts');

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

// Fonction pour nettoyer une entrée
function cleanEntry(entry) {
  // Supprimer les espaces en début et fin
  entry = entry.trim();
  
  // Si l'entrée est vide, on la saute
  if (!entry) return null;
  
  // Essayer de parser l'entrée comme JSON
  try {
    // Remplacer les simples quotes par des doubles quotes pour le parsing JSON
    const jsonStr = entry
      .replace(/([\w]+):/g, '"$1":')  // Ajouter des guillemets aux clés
      .replace(/'/g, '"')  // Remplacer les simples quotes par des doubles
      .replace(/,\s*}/g, '}')  // Supprimer les virgules avant les accolades fermantes
      .replace(/,\s*\]/g, ']');  // Supprimer les virgules avant les crochets fermants
    
    const entryObj = JSON.parse(`{${jsonStr}}`); // Ajouter des accolades pour en faire un objet valide
    
    // Vérifier si l'entrée a les propriétés requises
    if (!entryObj.word || !entryObj.translation || !entryObj.translation.pt || !entryObj.translation.cv) {
      console.error('Entrée invalide, propriétés manquantes:', entry);
      return null;
    }
    
    // Ajouter un exemple par défaut si manquant
    if (!entryObj.example) {
      entryObj.example = {
        pt: `Exemplo com ${entryObj.translation.pt}`,
        cv: `${entryObj.word} ta ser un eisemplu`
      };
      console.log(`Ajout d'un exemple pour : ${entryObj.word}`);
    }
    
    // Formater l'entrée en chaîne
    return `  {
    word: '${entryObj.word.replace(/'/g, "\\'")}',
    translation: {
      pt: '${entryObj.translation.pt.replace(/'/g, "\\'")}',
      cv: '${entryObj.translation.cv.replace(/'/g, "\\'")}'
    },
    example: {
      pt: '${entryObj.example.pt.replace(/'/g, "\\'")}',
      cv: '${entryObj.example.cv.replace(/'/g, "\\'")}'
    }${entryObj.note ? `,
    note: '${entryObj.note.replace(/'/g, "\\'")}'` : ''}
  }`;
    
  } catch (error) {
    console.error('Erreur lors du traitement de l\'entrée:', entry);
    console.error(error);
    return null;
  }
}

// Diviser les entrées par les accolades ouvrantes
const entries = [];
let currentEntry = '';
let braceCount = 0;

for (let i = 0; i < entriesContent.length; i++) {
  const char = entriesContent[i];
  
  if (char === '{') {
    braceCount++;
    if (braceCount === 1) {
      // Nouvelle entrée
      if (currentEntry.trim()) {
        const cleaned = cleanEntry(currentEntry);
        if (cleaned) entries.push(cleaned);
      }
      currentEntry = '';
    }
  }
  
  currentEntry += char;
  
  if (char === '}') {
    braceCount--;
    if (braceCount === 0) {
      // Fin d'une entrée
      const cleaned = cleanEntry(currentEntry);
      if (cleaned) entries.push(cleaned);
      currentEntry = '';
    }
  }
}

// Traiter la dernière entrée si nécessaire
if (currentEntry.trim()) {
  const cleaned = cleanEntry(currentEntry);
  if (cleaned) entries.push(cleaned);
}

// Reconstruire le contenu
const newContent = `${header}export const dictionaryEntries: DictionaryEntry[] = [
${entries.join(',\n')}
];${footer}`;

// Écrire le fichier corrigé
fs.writeFileSync(outputPath, newContent, 'utf-8');

console.log('\nCorrection terminée !');
console.log(`- Entrées traitées : ${entries.length}`);
console.log(`- Fichier corrigé : ${outputPath}`);
