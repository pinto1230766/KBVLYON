import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function cleanDictionary() {
  try {
    const filePath = join(__dirname, 'src', 'data', 'grammarData.ts');
    const content = await readFile(filePath, 'utf8');
    
    // Sauvegarder le fichier original
    await writeFile(filePath + '.backup', content, 'utf8');
    
    // Extraire uniquement la dernière section du dictionnaire
    const dictSections = content.split('export const dictionaryEntries: DictionaryEntry[] =');
    if (dictSections.length < 2) {
      throw new Error('Aucune section de dictionnaire trouvée');
    }
    
    // Prendre la dernière section
    const lastDictSection = dictSections[dictSections.length - 1];
    const dictContent = lastDictSection.split(']; // Fin du tableau dictionaryEntries')[0];
    
    // Diviser en entrées individuelles
    const entries = [];
    let currentEntry = '';
    let inString = false;
    let braceCount = 0;
    
    for (let i = 0; i < dictContent.length; i++) {
      const char = dictContent[i];
      
      if ((char === '"' || char === '\'') && (i === 0 || dictContent[i-1] !== '\\')) {
        inString = !inString;
      }
      
      if (!inString) {
        if (char === '{') {
          if (braceCount === 0) {
            currentEntry = '';
          }
          braceCount++;
        } else if (char === '}') {
          braceCount--;
          if (braceCount === 0) {
            entries.push(currentEntry.trim());
            currentEntry = '';
            continue;
          }
        }
      }
      
      if (braceCount > 0) {
        currentEntry += char;
      }
    }
    
    // Nettoyer et dédupliquer les entrées
    const uniqueEntries = [];
    const wordSet = new Set();
    
    for (const entry of entries) {
      try {
        const wordMatch = entry.match(/word\s*:\s*['"]([^'"]+)['"]/);
        if (!wordMatch) continue;
        
        const word = wordMatch[1];
        
        if (!wordSet.has(word)) {
          wordSet.add(word);
          uniqueEntries.push(entry);
        } else {
          console.log(`Suppression du doublon : ${word}`);
        }
      } catch (e) {
        console.warn('Erreur avec une entrée :', e.message);
      }
    }
    
    // Créer le contenu du nouveau fichier
    const newContent = `// Dictionnaire créé le ${new Date().toISOString()}
// ${uniqueEntries.length} entrées uniques

export interface DictionaryEntry {
  id: string;
  word: string;
  translation: {
    pt: string;
    cv: string;
  };
  example?: {
    pt: string;
    cv: string;
  };
}

export const dictionaryEntries: DictionaryEntry[] = [
  ${uniqueEntries.map((entry, index) => {
    // Mettre à jour l'ID
    const newId = index + 1;
    return entry.replace(
      /id\s*:\s*['"]entry-\d+['"]/, 
      `id: 'entry-${newId}'`
    );
  }).join(',\n  ')}
]; // ${uniqueEntries.length} entrées`;
    
    // Écrire le nouveau fichier
    const outputPath = join(__dirname, 'src', 'data', 'dictionary.ts');
    await writeFile(outputPath, newContent, 'utf8');
    
    console.log('=== NETTOYAGE TERMINÉ ===');
    console.log(`- Entrées initiales : ${entries.length}`);
    console.log(`- Entrées uniques : ${uniqueEntries.length}`);
    console.log(`- Doublons supprimés : ${entries.length - uniqueEntries.length}`);
    console.log(`- Fichier créé : ${outputPath}`);
    console.log('- Sauvegarde : grammarData.ts.backup');
    
  } catch (error) {
    console.error('Erreur lors du nettoyage :', error);
    process.exit(1);
  }
}

cleanDictionary();
