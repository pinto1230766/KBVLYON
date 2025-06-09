// Dictionnaire créé le 2025-06-05T23:00:13.730Z
// 353 entrées uniques

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

export async function fetchDictionaryEntries(): Promise<DictionaryEntry[]> {
  try {
    const response = await fetch('http://localhost:3001/api/dictionary');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: DictionaryEntry[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch dictionary entries:", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
}
