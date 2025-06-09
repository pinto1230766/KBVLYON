export interface TranslationText {
  pt: string;
  cv: string;
  [key: string]: string; // Allow for other languages if added later
}

export interface NestedTranslation {
  [key: string]: TranslationText | NestedTranslation;
}

export interface Translations {
  [key: string]: NestedTranslation | TranslationText;
}
