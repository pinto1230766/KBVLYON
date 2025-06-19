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
  try {
    const response = await fetch('/api/dictionary/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    if (!response.ok) {
      throw new Error('Failed to create dictionary entry');
    }

    return response.json();
  } catch (error) {
    console.error('Error creating dictionary entry:', error);
    throw error;
  }
}

export async function getDictionaryEntry(id: string): Promise<DictionaryEntry | null> {
  try {
    const response = await fetch(`/api/dictionary/entries/${id}`);
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Error fetching dictionary entry:', error);
    return null;
  }
}

export async function searchDictionaryEntries(query: string, language: 'pt' | 'cv' = 'pt'): Promise<DictionaryEntry[]> {
  try {
    const response = await fetch(`/api/dictionary/search?q=${encodeURIComponent(query)}&lang=${language}`);
    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    console.error('Error searching dictionary entries:', error);
    return [];
  }
}

// Function to migrate existing data from the dictionary.ts file
export async function migrateDictionaryData(entries: Omit<DictionaryEntry, 'id'>[]): Promise<void> {
  try {
    for (const entry of entries) {
      await createDictionaryEntry(entry);
    }
  } catch (error) {
    console.error('Error migrating dictionary data:', error);
    throw error;
  }
}
