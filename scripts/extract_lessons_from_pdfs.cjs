const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

const SOURCE_DIRECTORIES = [
  path.resolve('pdfs'),
  path.resolve('public/pdfs')
];

const OUTPUT_FILE = path.resolve('src/data/lessons_extracted.json');

async function extractFromFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  return {
    file: path.relative(process.cwd(), filePath),
    text: data.text,
    metadata: {
      info: data.info || {},
      numPages: data.numpages || data.numPages || null
    }
  };
}

async function main() {
  const results = [];

  for (const dir of SOURCE_DIRECTORIES) {
    if (!fs.existsSync(dir)) {
      continue;
    }

    const entries = fs.readdirSync(dir).filter((name) => name.toLowerCase().endsWith('.pdf'));

    for (const entry of entries) {
      const filePath = path.join(dir, entry);
      process.stdout.write(`📄 Lecture de ${filePath} ... `);
      try {
        const result = await extractFromFile(filePath);
        results.push(result);
        process.stdout.write('OK\n');
      } catch (error) {
        process.stdout.write('ERREUR\n');
        console.error(`   → Impossible d'extraire ${filePath}:`, error.message);
      }
    }
  }

  if (results.length === 0) {
    console.warn('⚠️  Aucun PDF trouvé ou extraction impossible.');
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n✅ Extraction terminée. Résultats dans ${OUTPUT_FILE}`);
  console.log('   Vous pouvez maintenant mapper ces textes vers `src/data/lessonsData.ts`.');
}

main().catch((error) => {
  console.error('❌ Échec de l\'extraction:', error);
  process.exit(1);
});
