import { PrismaClient } from '@prisma/client';

interface DictionaryEntry {
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

async function getDictionaryEntry(tx: PrismaClient, id: string): Promise<DictionaryEntry | null> {
  const entry = await tx.dictionaryEntry.findUnique({
    where: { id },
    include: {
      translations: true,
      examples: true,
    },
  });

  if (!entry) {
    return null;
  }

  const translations = entry.translations.reduce((acc: Record<'pt'|'cv', string>, t) => {
    acc[t.language as 'pt'|'cv'] = t.text;
    return acc;
  }, {} as Record<'pt'|'cv', string>);

  const examples = entry.examples.reduce((acc: Record<'pt'|'cv', string>, e) => {
    if (e.text) acc[e.language as 'pt'|'cv'] = e.text;
    return acc;
  }, {} as Record<'pt'|'cv', string>);

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

// ... autres fonctions et implémentations existantes ...

export { getDictionaryEntry };
