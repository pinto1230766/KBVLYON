import { readFile, writeFile, mkdir, access, constants } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import pdf from 'pdf-parse';

// Configuration des chemins
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const PDF_DIR = join(PROJECT_ROOT, 'project', 'public', 'pdfs');
const DICT_PATH = join(PROJECT_ROOT, 'project', 'public', 'dictionary.json');
const OUTPUT_DIR = join(PROJECT_ROOT, 'src', 'data', 'extracted');

// Fonction pour vérifier si un fichier existe
async function fileExists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

// Fonction pour extraire le vocabulaire d'un PDF
async function extractVocabularyFromPdf(filePath) {
  try {
    console.log(`Traitement de ${basename(filePath)}...`);
    const dataBuffer = await readFile(filePath);
    const data = await pdf(dataBuffer);
    const text = data.text;
    
    // Extraction basique des mots
    const words = text.split(/\s+/)
      .filter(word => word.length > 2)
      .map(word => word.replace(/[.,!?;:()\[\]{}"']/g, '').toLowerCase())
      .filter(Boolean);

    // Dédoublonnage
    const uniqueWords = [...new Set(words)];

    return uniqueWords.map((word, index) => ({
      word,
      page: Math.floor(index / 100) + 1,
      source: basename(filePath)
    }));
  } catch (error) {
    console.error(`Erreur lors du traitement de ${filePath}:`, error);
    return [];
  }
}

// Fonction principale
async function main() {
  try {
    // Vérifier si le dossier des PDFs existe
    if (!await fileExists(PDF_DIR)) {
      console.error(`Le dossier des PDFs n'existe pas: ${PDF_DIR}`);
      return;
    }

    // Créer le dossier de sortie
    await mkdir(OUTPUT_DIR, { recursive: true });

    // Charger le dictionnaire existant
    let existingWords = new Set();
    try {
      const dictContent = await readFile(DICT_PATH, 'utf-8');
      const dictionary = JSON.parse(dictContent);
      
      dictionary.forEach(entry => {
        if (entry.word) existingWords.add(entry.word.toLowerCase());
        if (entry.translation) {
          Object.values(entry.translation).forEach(t => {
            if (t) existingWords.add(String(t).toLowerCase());
          });
        }
      });
      console.log(`Dictionnaire chargé: ${existingWords.size} mots existants`);
    } catch (error) {
      console.warn('Impossible de charger le dictionnaire, utilisation d\'un ensemble vide');
    }

    // Lire les fichiers PDF
    const files = (await readdir(PDF_DIR))
      .filter(file => file.endsWith('.pdf'))
      .map(file => join(PDF_DIR, file));

    if (files.length === 0) {
      console.error('Aucun fichier PDF trouvé dans', PDF_DIR);
      return;
    }

    console.log(`Traitement de ${files.length} fichiers PDF...`);

    // Traiter chaque PDF séquentiellement
    let allVocabulary = [];
    
    for (const file of files) {
      const vocab = await extractVocabularyFromPdf(file);
      allVocabulary = [...allVocabulary, ...vocab];
      console.log(`- ${basename(file)}: ${vocab.length} mots extraits`);
    }

    // Filtrer les doublons et les entrées existantes
    const uniqueVocab = new Map();
    const newWords = new Set();
    
    allVocabulary.forEach(entry => {
      const key = `${entry.word}_${entry.source}`;
      const lowerWord = entry.word.toLowerCase();
      
      if (!existingWords.has(lowerWord) && !newWords.has(lowerWord)) {
        uniqueVocab.set(key, entry);
        newWords.add(lowerWord);
      }
    });

    const result = {
      totalWords: allVocabulary.length,
      uniqueNewWords: uniqueVocab.size,
      existingWordsCount: existingWords.size,
      newWords: Array.from(uniqueVocab.values())
        .slice(0, 100)
        .map(entry => ({
          word: entry.word,
          source: entry.source,
          page: entry.page
        }))
    };

    // Sauvegarder les résultats
    const outputFile = join(OUTPUT_DIR, 'extracted_vocabulary.json');
    await writeFile(outputFile, JSON.stringify(result, null, 2));

    console.log('\nExtraction terminée !');
    console.log('---------------------');
    console.log(`Mots totaux extraits: ${result.totalWords}`);
    console.log(`Nouveaux mots uniques: ${result.uniqueNewWords}`);
    console.log(`Mots existants dans le dictionnaire: ${result.existingWordsCount}`);
    console.log(`\nRésultats sauvegardés dans: ${outputFile}`);
    
    if (result.uniqueNewWords > 0) {
      console.log('\nAperçu des nouveaux mots:');
      result.newWords.slice(0, 20).forEach((entry, i) => {
        console.log(`${i + 1}. ${entry.word} (${entry.source}, page ~${entry.page})`);
      });
    } else {
      console.log('\nAucun nouveau mot trouvé à ajouter au dictionnaire.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'extraction:', error);
  }
}

// Fonction utilitaire pour lire un répertoire (manquante dans fs/promises)
async function readdir(path) {
  const { readdir } = await import('fs/promises');
  return readdir(path);
}

// Démarrer l'extraction
main();
