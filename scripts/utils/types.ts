export interface DictionaryEntry {
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
  category?: string;
  pronunciation?: string;
  notes?: {
    pt?: string;
    cv?: string;
  };
}

export interface PdfVocabulary {
  word: string;
  translation: string;
  context?: string;
  page: number;
  source: string;
}

export interface ExtractionResult {
  vocabulary: PdfVocabulary[];
  existingEntries: string[];
  newEntries: PdfVocabulary[];
}
