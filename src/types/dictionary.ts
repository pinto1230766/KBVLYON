export type Language = 'pt' | 'cv';

export interface DictionaryEntry {
  id: string;
  word: string;
  type: string;
  definition: string;
  translation: Record<Language, string>;
  example?: Record<Language, string>;
  note?: string;
  category?: string;
  synonyms?: string[];
}

export interface GrammarLesson {
  id: string;
  title: string;
  description: string;
  level: string;
  content: Record<Language, string>;
}

export type TabType = 'dictionary' | 'grammar' | 'favorites';
