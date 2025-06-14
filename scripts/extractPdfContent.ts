import * as fs from 'fs';
import * as path from 'path';
import { Worker, isMainThread, workerData } from 'worker_threads';
import { cpus } from 'os';
import { DictionaryEntry, ExtractionResult, PdfVocabulary } from './utils/types';

const PDF_DIR = path.join(process.cwd(), 'project', 'public', 'pdfs');
const DICT_PATH = path.join(process.cwd(), 'project', 'public', 'dictionary.json');
const OUTPUT_DIR = path.join(process.cwd(), 'src', 'data', 'extracted');

async function extractVocabulary() {
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

  // Traiter chaque PDF
  const allVocabulary: PdfVocabulary[] = [];
  const batchSize = Math.max(1, cpus().length - 1);

  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    const batchPromises = batch.map(filePath => 
      new Promise<PdfVocabulary[]>(resolve => {
        const worker = new Worker(path.join(__dirname, 'workers/pdfWorker.js'), {
          workerData: { filePath },
        });

        worker.on('message', (result) => {
          if (result.success) {
            resolve(result.data);
          } else {
            console.error(`Erreur avec ${path.basename(filePath)}:`, result.error);
            resolve([]);
          }
        });

        worker.on('error', (error) => {
          console.error(`Erreur du worker pour ${path.basename(filePath)}:`, error);
          resolve([]);
        });
      })
    );

    const batchResults = await Promise.all(batchPromises);
    const flatResults = batchResults.flat();
    allVocabulary.push(...flatResults);
    
    console.log(`Traitement: ${Math.min(i + batch.length, files.length)}/${files.length} fichiers terminés`);
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

  const result: ExtractionResult = {
    vocabulary: Array.from(uniqueVocab.values()),
    existingEntries: Array.from(existingWords).slice(0, 10),
    newEntries: Array.from(uniqueVocab.values()).slice(0, 50)
  };

  // Sauvegarder les résultats
  const outputFile = path.join(OUTPUT_DIR, 'extracted_vocabulary.json');
  fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));

  console.log(`\nExtraction terminée.`);
  console.log(`- Mots trouvés: ${allVocabulary.length}`);
  console.log(`- Nouveaux mots uniques: ${uniqueVocab.size}`);
  console.log(`\nRésultats sauvegardés dans: ${outputFile}`);
  console.log('\nAperçu des nouveaux mots:');
  result.newEntries.forEach((entry, i) => {
    console.log(`${i + 1}. ${entry.word} (${entry.source}, page ~${entry.page})`);
  });
}

// Point d'entrée
if (isMainThread) {
  extractVocabulary().catch(console.error);
} else {
  import('./workers/pdfWorker').catch(console.error);
}
