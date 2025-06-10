import { PrismaClient } from '@prisma/client';
import { dictionaryEntries } from '../src/data/grammarData';
import { migrateDictionaryData } from '../src/services/dictionaryService';

async function main() {
  console.log('Starting migration...');
  
  const prisma = new PrismaClient();
  
  try {
    // Connect to the database
    await prisma.$connect();
    console.log('Connected to database');
    
    // Migrate the dictionary data
    console.log(`Migrating ${dictionaryEntries.length} entries...`);
    const results = await migrateDictionaryData(dictionaryEntries);
    
    // Calculate statistics
    const successCount = results.filter(r => r.success).length;
    const errorCount = results.filter(r => !r.success).length;
    
    console.log('\nMigration completed!');
    console.log(`✅ Success: ${successCount} entries`);
    console.log(`❌ Errors: ${errorCount} entries`);
    
    if (errorCount > 0) {
      console.log('\nFailed entries:');
      results
        .filter(r => !r.success)
        .forEach((r, i) => {
          console.log(`${i + 1}. Word: ${r.word}`);
          console.log(`   Error: ${r.error}`);
        });
    }
    
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error('Fatal error during migration:', e);
    process.exit(1);
  })
  .finally(async () => {
    process.exit(0);
  });
