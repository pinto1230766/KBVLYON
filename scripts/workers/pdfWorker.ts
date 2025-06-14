import { parentPort, workerData } from 'worker_threads';
import * as fs from 'fs';
import * as path from 'path';
import * as pdf from 'pdf-parse';
import { PdfVocabulary } from '../utils/types';

async function extractVocabularyFromPdf(filePath: string): Promise<PdfVocabulary[]> {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    const text = data.text;
    
    // Extraction basique des mots
    const words = text.split(/\s+/)
      .filter(word => word.length > 2) // Ignorer les mots trop courts
      .map(word => word.replace(/[.,!?;:()\[\]{}"']/g, '').toLowerCase())
      .filter(Boolean);

    // Dédoublonnage
    const uniqueWords = [...new Set(words)];

    return uniqueWords.map((word, index) => ({
      word,
      translation: '', // À compléter manuellement
      page: Math.floor(index / 100) + 1, // Approximation de la page
      source: path.basename(filePath)
    }));
  } catch (error) {
    console.error(`Erreur lors du traitement de ${filePath}:`, error);
    return [];
  }
}

if (parentPort) {
  extractVocabularyFromPdf(workerData.filePath)
    .then(result => parentPort?.postMessage({ success: true, data: result }))
    .catch(error => parentPort?.postMessage({ 
      success: false, 
      error: error instanceof Error ? error.message : String(error) 
    }));
}
