import { describe, it, expect } from 'vitest';
import { PrismaClient } from '@prisma/client';
import { getDictionaryEntry } from '../services/dictionaryService';

describe('DictionaryService', () => {
  const prisma = new PrismaClient();

  it('should get dictionary entry', async () => {
    const testEntry = await prisma.dictionaryEntry.create({
      data: {
        word: 'test',
        translations: {
          create: [{ language: 'pt', text: 'teste' }]
        }
      },
      include: { translations: true }
    });

    const result = await getDictionaryEntry(prisma, testEntry.id);
    expect(result?.word).toBe('test');
    
    // Nettoyage
    await prisma.dictionaryEntry.delete({ where: { id: testEntry.id } });
  });
});
