import { prisma } from '@/lib/db/prisma';
import { DictionaryEntry as PrismaDictionaryEntry, Translation as PrismaTranslation, Example as PrismaExample } from '@prisma/client';

export interface DictionaryEntry {
  id: string;
  word: string;
  type?: string;
  definition?: string;
  note?: string;
  translations: {
    pt: string;
    cv: string;
  };
  examples: {
    pt?: string;
    cv?: string;
  };
}

export async function createDictionaryEntry(entry: Omit<DictionaryEntry, 'id'>): Promise<DictionaryEntry> {
  const { translations, examples, ...entryData } = entry;
  
  const createdEntry = await prisma.$transaction(async (tx) => {
    // Create the main entry
    const newEntry = await tx.dictionaryEntry.create({
      data: {
        ...entryData,
        translations: {
          create: [
            { language: 'pt', text: translations.pt },
            { language: 'cv', text: translations.cv },
          ].filter(t => t.text) as { language: string; text: string }[],
        },
      },
      include: {
        translations: true,
      },
    });

    // Add examples if they exist
    if (examples.pt || examples.cv) {
      const exampleCreates = [];
      if (examples.pt) {
        exampleCreates.push({
          language: 'pt',
          text: examples.pt,
          entryId: newEntry.id,
        });
      }
      if (examples.cv) {
        exampleCreates.push({
          language: 'cv',
          text: examples.cv,
          entryId: newEntry.id,
        });
      }
      
      await tx.example.createMany({
        data: exampleCreates,
      });
    }

    return newEntry;
  });

  return mapToDictionaryEntry(await getFullEntry(createdEntry.id));
}

export async function getDictionaryEntry(id: string): Promise<DictionaryEntry | null> {
  const entry = await getFullEntry(id);
  return entry ? mapToDictionaryEntry(entry) : null;
}

export async function searchDictionaryEntries(query: string, language: 'pt' | 'cv' = 'pt'): Promise<DictionaryEntry[]> {
  const entries = await prisma.dictionaryEntry.findMany({
    where: {
      OR: [
        { word: { contains: query, mode: 'insensitive' } },
        { definition: { contains: query, mode: 'insensitive' } },
        {
          translations: {
            some: {
              text: { contains: query, mode: 'insensitive' },
              language,
            },
          },
        },
      ],
    },
    include: {
      translations: true,
      examples: true,
    },
    take: 50, // Limit results
  });

  return entries.map(mapToDictionaryEntry);
}

// Helper function to get a full entry with relations
async function getFullEntry(id: string) {
  return prisma.dictionaryEntry.findUnique({
    where: { id },
    include: {
      translations: true,
      examples: true,
    },
  });
}

// Helper to map Prisma model to our DictionaryEntry type
function mapToDictionaryEntry(entry: any): DictionaryEntry {
  const translations = entry.translations.reduce((acc: any, t: any) => {
    acc[t.language as 'pt' | 'cv'] = t.text;
    return acc;
  }, { pt: '', cv: '' });

  const examples = entry.examples.reduce((acc: any, e: any) => {
    acc[e.language as 'pt' | 'cv'] = e.text;
    return acc;
  }, { pt: undefined, cv: undefined });

  return {
    id: entry.id,
    word: entry.word,
    type: entry.type || undefined,
    definition: entry.definition || undefined,
    note: entry.note || undefined,
    translations: {
      pt: translations.pt || '',
      cv: translations.cv || '',
    },
    examples: {
      pt: examples.pt,
      cv: examples.cv,
    },
  };
}

// Function to migrate existing data from the dictionary.ts file
export async function migrateDictionaryData(entries: any[]) {
  const results = [];
  
  for (const entry of entries) {
    try {
      const created = await createDictionaryEntry({
        word: entry.word,
        type: entry.type,
        definition: entry.definition,
        note: entry.note,
        translations: {
          pt: entry.translation?.pt || '',
          cv: entry.translation?.cv || entry.word, // Fallback to word if no CV translation
        },
        examples: {
          pt: entry.example?.pt,
          cv: entry.example?.cv,
        },
      });
      results.push({ success: true, id: created.id, word: entry.word });
    } catch (error) {
      console.error(`Failed to migrate entry: ${entry.word}`, error);
      results.push({ success: false, word: entry.word, error: String(error) });
    }
  }
  
  return results;
}
