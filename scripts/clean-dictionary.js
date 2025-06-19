/**
 * Script unifié pour nettoyer le dictionnaire
 * - Supprime les doublons
 * - Standardise le format
 * - Réindexe les IDs
 */

import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function cleanDictionary() {
  try {
    // Chemins des fichiers
    const inputPath = join(__dirname, '..', 'public', 'dictionary.json');
    const outputPath = join(__dirname, '..', 'public', 'dictionary.json');
    const backupPath = join(__dirname, '..', 'public', 'dictionary.backup.json');
    
    console.log('Lecture du dictionnaire...');
    const content = await readFile(inputPath, 'utf8');
    
    // Sauvegarder le fichier original
    await writeFile(backupPath, content, 'utf8');
    console.log(`Sauvegarde créée: ${backupPath}`);
    
    // Parser le dictionnaire
    const dictionary = JSON.parse(content);
    console.log(`Nombre d'entrées initiales: ${dictionary.length}`);
    
    // Nettoyer et dédupliquer les entrées
    const uniqueEntries = [];
    const wordSet = new Set();
    const duplicates = [];
    
    for (const entry of dictionary) {
      try {
        const word = entry.word.toLowerCase().trim();
        
        if (!wordSet.has(word)) {
          wordSet.add(word);
          uniqueEntries.push(entry);
        } else {
          duplicates.push(entry.word);
          console.log(`Suppression du doublon: ${entry.word}`);
        }
      } catch (e) {
        console.warn('Erreur avec une entrée:', e.message);
      }
    }
    
    // Réindexer les IDs
    const cleanedEntries = uniqueEntries.map((entry, index) => {
      return {
        ...entry,
        id: `entry-${index + 1}`
      };
    });
    
    // Écrire le fichier nettoyé
    await writeFile(outputPath, JSON.stringify(cleanedEntries, null, 2), 'utf8');
    
    console.log('=== NETTOYAGE TERMINÉ ===');
    console.log(`- Entrées initiales: ${dictionary.length}`);
    console.log(`- Entrées uniques: ${cleanedEntries.length}`);
    console.log(`- Doublons supprimés: ${duplicates.length}`);
    console.log(`- Fichier mis à jour: ${outputPath}`);
    console.log(`- Sauvegarde: ${backupPath}`);
    
  } catch (error) {
    console.error('Erreur lors du nettoyage:', error);
    process.exit(1);
  }
}

cleanDictionary();