import { PrismaClient } from '@prisma/client';
import { dictionaryEntries } from '../src/data/grammarData';

const prisma = new PrismaClient();

// Définition du type pour les entrées du dictionnaire
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
  note?: string;
}

async function main() {
  console.log('Starting database initialization...');
  
  // Vérifier si la base de données est déjà peuplée
  const count = await prisma.dictionaryEntry.count();
  if (count > 0) {
    console.log(`Database already contains ${count} entries. Skipping initialization.`);
    return;
  }

  console.log(`Importing ${dictionaryEntries.length} dictionary entries...`);
  
  // Préparer les données pour l'importation
  const entriesToCreate = (dictionaryEntries as unknown as DictionaryEntry[]).map(entry => ({
    id: entry.id,
    word: entry.word,
    note: entry.note || null,
    translations: {
      create: [
        { language: 'pt', text: entry.translation.pt || '' },
        { language: 'cv', text: entry.translation.cv || entry.word },
      ].filter(t => t.text)
    },
    examples: {
      create: entry.example ? [
        { language: 'pt', text: entry.example.pt },
        { language: 'cv', text: entry.example.cv }
      ].filter(e => e.text) : []
    }
  }));

  // Insérer les données par lots pour éviter les dépassements de mémoire
  const batchSize = 50;
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < entriesToCreate.length; i += batchSize) {
    const batch = entriesToCreate.slice(i, i + batchSize);
    const batchNumber = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(entriesToCreate.length / batchSize);
    
    console.log(`Processing batch ${batchNumber} of ${totalBatches}...`);
    
    try {
      await prisma.$transaction(
        batch.map(entry => 
          prisma.dictionaryEntry.create({
            data: {
              id: entry.id,
              word: entry.word,
              note: entry.note,
              translations: entry.translations,
              examples: entry.examples
            }
          })
        )
      );
      successCount += batch.length;
      console.log(`✅ Batch ${batchNumber} completed (${successCount}/${entriesToCreate.length} entries)`);
    } catch (error) {
      errorCount += batch.length;
      console.error(`❌ Error in batch ${batchNumber}:`, error);
    }
  }

  console.log('\nDatabase initialization completed!');
  console.log(`✅ Successfully imported: ${successCount} entries`);
  if (errorCount > 0) {
    console.log(`❌ Failed to import: ${errorCount} entries`);
  }
}

main()
  .catch((e) => {
    console.error('Error initializing database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
