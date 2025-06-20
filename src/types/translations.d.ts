export type TranslationValue = {
  pt: string;
  cv: string;
  [key: string]: string; // Pour d'autres langues
};

type NestedTranslation = {
  [key: string]: TranslationValue | string | NestedTranslation;
};

export interface Translations {
  // Common
  carregando: TranslationValue;
  
  // Navigation
  navegacao: {
    inicio: TranslationValue;
    predicacao: TranslationValue;
    gramaticaDicionario: TranslationValue;
    gramatica: TranslationValue;
    licoesExercicios: TranslationValue;
    estudosBiblicos: TranslationValue;
    sobre: TranslationValue;
    notas: TranslationValue;
    notasGerais: TranslationValue;
    alunos: TranslationValue;
    [key: string]: TranslationValue | NestedTranslation;
  };
  
  // UI
  iu: {
    carregando: TranslationValue;
    tema: {
      pt: string;
      cv: string;
      mudar: TranslationValue;
      claro: TranslationValue;
      sombrio: TranslationValue;
      sistema: TranslationValue;
      [key: string]: TranslationValue | string;
    };
    [key: string]: TranslationValue | NestedTranslation;
  };
  
  // Autres clés
  [key: string]: TranslationValue | NestedTranslation | string;
}
