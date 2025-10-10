const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

/**
 * Script pour extraire les données des PDFs de dictionnaire et leçons
 * 
 * Structure attendue des PDFs :
 * 
 * DICTIONNAIRE :
 * - Format : mot (PT: traduction) (CV: traduction) Exemple: phrase
 * 
 * LEÇONS :
 * - Format : Titre de la leçon suivi du contenu
 */

// Chemins des fichiers
const PDF_DIR = path.join(__dirname, '../pdfs');
const OUTPUT_DIR = path.join(__dirname, '../src/data');

/**
 * Extrait le texte d'un PDF
 */
async function extractTextFromPdf(pdfPath) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    return data.text;
  } catch (error) {
    console.error(`Erreur lors de la lecture du PDF ${pdfPath}:`, error);
    return null;
  }
}

/**
 * Parse le texte du dictionnaire et extrait les entrées
 * Format attendu : chaque ligne contient un mot avec sa traduction
 */
function parseDictionaryText(text) {
  const entries = [];
  const lines = text.split('\n').filter(line => line.trim());
  
  let currentId = 1;
  
  for (const line of lines) {
    // Ignorer les lignes de titre ou numéros de page
    if (line.match(/^\d+$/) || line.length < 3) continue;
    
    // Essayer de parser différents formats
    // Format 1: mot - PT: traduction - CV: traduction
    const match1 = line.match(/^(.+?)\s*-\s*PT:\s*(.+?)\s*-\s*CV:\s*(.+?)(?:\s*-\s*Ex[^:]*:\s*(.+))?$/i);
    
    // Format 2: mot (PT) (CV)
    const match2 = line.match(/^(.+?)\s*\((.+?)\)\s*\((.+?)\)(?:\s*Ex[^:]*:\s*(.+))?$/i);
    
    // Format 3: mot PT: traduction CV: traduction
    const match3 = line.match(/^(.+?)\s+PT:\s*(.+?)\s+CV:\s*(.+?)(?:\s+Ex[^:]*:\s*(.+))?$/i);
    
    let match = match1 || match2 || match3;
    
    if (match) {
      const [, word, ptTranslation, cvTranslation, example] = match;
      
      entries.push({
        id: `word-${currentId++}`,
        word: word.trim(),
        translation: {
          pt: ptTranslation.trim(),
          cv: cvTranslation.trim()
        },
        example: example ? {
          pt: example.trim(),
          cv: example.trim() // Adapter si les exemples sont séparés
        } : {
          pt: '',
          cv: ''
        }
      });
    }
  }
  
  return entries;
}

/**
 * Parse le texte des leçons et extrait le contenu
 */
function parseLessonsText(text) {
  const lessons = [];
  
  // Diviser par sections (basé sur les titres)
  const sections = text.split(/(?=Lição \d+|Lesson \d+)/i);
  
  for (const section of sections) {
    if (section.trim().length < 50) continue;
    
    const lines = section.split('\n');
    const title = lines[0].trim();
    const content = lines.slice(1).join('\n').trim();
    
    if (title && content) {
      lessons.push({
        title,
        content,
        // Déterminer la catégorie basée sur des mots-clés
        category: detectCategory(title + ' ' + content)
      });
    }
  }
  
  return lessons;
}

/**
 * Détecte la catégorie d'une leçon basée sur son contenu
 */
function detectCategory(text) {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('pronome') || lowerText.includes('pronoun')) return 'Pronomes';
  if (lowerText.includes('verbo') || lowerText.includes('verb')) return 'Verbos';
  if (lowerText.includes('sintaxe') || lowerText.includes('syntax') || lowerText.includes('frase')) return 'Sintaxe';
  if (lowerText.includes('morfologia') || lowerText.includes('plural') || lowerText.includes('formação')) return 'Morfologia';
  if (lowerText.includes('fonologia') || lowerText.includes('som') || lowerText.includes('pronúncia')) return 'Fonologia';
  if (lowerText.includes('vocabulário') || lowerText.includes('vocabulary')) return 'Vocabulário';
  if (lowerText.includes('prática') || lowerText.includes('diálogo') || lowerText.includes('conversa')) return 'Prática';
  
  return 'Geral';
}

/**
 * Génère le fichier TypeScript pour le dictionnaire
 */
function generateDictionaryFile(entries) {
  const content = `// Fichier généré automatiquement à partir des PDFs
// Ne pas modifier manuellement

export interface DictionaryEntry {
  id: string;
  word: string;
  translation: {
    pt: string;
    cv: string;
  };
  example: {
    pt: string;
    cv: string;
  };
  note?: string;
}

export const dictionaryData: DictionaryEntry[] = ${JSON.stringify(entries, null, 2)};

export default dictionaryData;
`;

  const outputPath = path.join(OUTPUT_DIR, 'dictionaryData.ts');
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`✅ Fichier dictionnaire généré: ${outputPath}`);
  console.log(`   ${entries.length} entrées créées`);
}

/**
 * Génère le fichier TypeScript pour les leçons
 */
function generateLessonsFile(lessons) {
  const content = `// Fichier généré automatiquement à partir des PDFs
// Ne pas modifier manuellement

export interface Lesson {
  id: number;
  title: string;
  description: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  category: 'Fonologia' | 'Morfologia' | 'Sintaxe' | 'Verbos' | 'Pronomes' | 'Vocabulário' | 'Prática' | 'Geral';
  icon: string;
}

export const lessonsData: Lesson[] = ${JSON.stringify(lessons, null, 2)};

export default lessonsData;
`;

  const outputPath = path.join(OUTPUT_DIR, 'lessonsData.ts');
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`✅ Fichier leçons généré: ${outputPath}`);
  console.log(`   ${lessons.length} leçons créées`);
}

/**
 * Fonction principale
 */
async function main() {
  console.log('🚀 Extraction des données des PDFs...\n');
  
  // Créer le dossier de sortie s'il n'existe pas
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Créer le dossier PDFs s'il n'existe pas
  if (!fs.existsSync(PDF_DIR)) {
    fs.mkdirSync(PDF_DIR, { recursive: true });
    console.log(`📁 Dossier créé: ${PDF_DIR}`);
    console.log('   Placez vos PDFs dans ce dossier et relancez le script.\n');
    return;
  }
  
  // Lister tous les PDFs
  const pdfFiles = fs.readdirSync(PDF_DIR).filter(file => file.endsWith('.pdf'));
  
  if (pdfFiles.length === 0) {
    console.log('❌ Aucun fichier PDF trouvé dans le dossier pdfs/');
    console.log(`   Placez vos PDFs dans: ${PDF_DIR}\n`);
    return;
  }
  
  console.log(`📚 ${pdfFiles.length} fichier(s) PDF trouvé(s):\n`);
  pdfFiles.forEach(file => console.log(`   - ${file}`));
  console.log('');
  
  let allDictionaryEntries = [];
  let allLessons = [];
  
  // Traiter chaque PDF
  for (const pdfFile of pdfFiles) {
    const pdfPath = path.join(PDF_DIR, pdfFile);
    console.log(`\n📖 Traitement de: ${pdfFile}`);
    
    const text = await extractTextFromPdf(pdfPath);
    
    if (!text) {
      console.log(`   ⚠️  Impossible de lire le PDF`);
      continue;
    }
    
    console.log(`   ✓ Texte extrait (${text.length} caractères)`);
    
    // Déterminer le type de PDF basé sur le nom du fichier
    const fileName = pdfFile.toLowerCase();
    
    if (fileName.includes('dicionario') || fileName.includes('dictionary') || fileName.includes('dict')) {
      console.log('   → Type: Dictionnaire');
      const entries = parseDictionaryText(text);
      allDictionaryEntries = allDictionaryEntries.concat(entries);
      console.log(`   ✓ ${entries.length} mots extraits`);
    } 
    else if (fileName.includes('licao') || fileName.includes('lesson') || fileName.includes('gramatica') || fileName.includes('grammar')) {
      console.log('   → Type: Leçons');
      const lessons = parseLessonsText(text);
      allLessons = allLessons.concat(lessons);
      console.log(`   ✓ ${lessons.length} leçons extraites`);
    }
    else {
      console.log('   ⚠️  Type non reconnu (renommez le fichier avec "dicionario" ou "licao")');
    }
  }
  
  // Générer les fichiers de sortie
  console.log('\n📝 Génération des fichiers...\n');
  
  if (allDictionaryEntries.length > 0) {
    generateDictionaryFile(allDictionaryEntries);
  }
  
  if (allLessons.length > 0) {
    generateLessonsFile(allLessons);
  }
  
  console.log('\n✅ Extraction terminée avec succès!\n');
  console.log('📊 Résumé:');
  console.log(`   - ${allDictionaryEntries.length} mots de dictionnaire`);
  console.log(`   - ${allLessons.length} leçons`);
  console.log('');
}

// Exécuter le script
main().catch(console.error);
