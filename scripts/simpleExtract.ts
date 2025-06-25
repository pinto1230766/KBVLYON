import * as fs from 'fs';
import * as path from 'path';
import * as pdf from 'pdf-parse';

interface DictionaryEntry {
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

interface PdfVocabulary {
  word: string;
  page: number;
  source: string;
}

const PDF_DIR = path.join(process.cwd(), '..', 'project', 'public', 'pdfs');
const DICT_PATH = path.join(process.cwd(), '..', 'project', 'public', 'dictionary.json');
const OUTPUT_DIR = path.join(process.cwd(), '..', 'src', 'data', 'extracted');

async function extractVocabularyFromPdf(filePath: string): Promise<PdfVocabulary[]> {
  try {
    console.log(`Traitement de ${path.basename(filePath)}...`);
    const dataBuffer = fs.readFileSync(filePath);
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
      source: path.basename(filePath)
    }));
  } catch (error) {
    console.error(`Erreur lors du traitement de ${filePath}:`, error);
    return [];
  }
}

async function main() {
  // Créer le dossier de sortie
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Vérifier si le dossier des PDFs existe
  if (!fs.existsSync(PDF_DIR)) {
    console.error(`Le dossier des PDFs n'existe pas: ${PDF_DIR}`);
    return;
  }

  // Charger le dictionnaire existant
  let existingWords = new Set<string>();
  try {
    const dictContent = fs.readFileSync(DICT_PATH, 'utf-8');
    const dictionary: DictionaryEntry[] = JSON.parse(dictContent);
    dictionary.forEach(entry => {
      existingWords.add(entry.word.toLowerCase());
      if (entry.translation) {
        Object.values(entry.translation).forEach(t => {
          if (t) existingWords.add(t.toLowerCase());
        });
      }
    });
  } catch (error) {
    console.warn('Impossible de charger le dictionnaire, utilisation d\'un ensemble vide');
  }

  // Trouver les fichiers PDF
  const files = fs.readdirSync(PDF_DIR)
    .filter(file => file.endsWith('.pdf'))
    .map(file => path.join(PDF_DIR, file));

  if (files.length === 0) {
    console.error('Aucun fichier PDF trouvé dans', PDF_DIR);
    return;
  }

  console.log(`Traitement de ${files.length} fichiers PDF...`);

  // Traiter chaque PDF séquentiellement
  const allVocabulary: PdfVocabulary[] = [];
  
  for (const file of files) {
    const vocab = await extractVocabularyFromPdf(file);
    allVocabulary.push(...vocab);
    console.log(`- ${path.basename(file)}: ${vocab.length} mots extraits`);
  }

  // Filtrer les doublons et les entrées existantes
  const uniqueVocab = new Map<string, PdfVocabulary>();
  const newWords = new Set<string>();
  
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
    newWords: Array.from(uniqueVocab.values()).slice(0, 100).map(entry => ({
      word: entry.word,
      source: entry.source,
      page: entry.page
    }))
  };

  // Sauvegarder les résultats
  const outputFile = path.join(OUTPUT_DIR, 'extracted_vocabulary.json');
  fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));

  console.log('\nExtraction terminée !');
  console.log('---------------------');
  console.log(`Mots totaux extraits: ${result.totalWords}`);
  console.log(`Nouveaux mots uniques: ${result.uniqueNewWords}`);
  console.log(`Mots existants dans le dictionnaire: ${result.existingWordsCount}`);
  console.log(`\nRésultats sauvegardés dans: ${outputFile}`);
  
  console.log('\nAperçu des nouveaux mots:');
  result.newWords.slice(0, 20).forEach((entry, i) => {
    console.log(`${i + 1}. ${entry.word} (${entry.source}, page ~${entry.page})`);
  });
}

main().catch(console.error);
