// Types pour l'application de dictionnaire et grammaire
export type Language = 'pt' | 'cv';

export interface DictionaryEntry {
  id: string;
  word: string;
  type: string;
  definition: string;
  translation: Record<Language, string>;
  example?: Record<Language, string>;
  note?: string;
}

export interface GrammarLesson {
  id: string;
  title: string;
  description: string;
  level: string;
  content: Record<Language, string>;
}

export type TabType = 'dictionary' | 'grammar' | 'favorites';

// Types globaux pour l'application
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import * as React from 'react'; // Changed from require() to ES module import
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Types pour les exercices
type ExerciseType = 'grammar' | 'dictation' | 'quiz' | 'matching' | 'roleplay';

interface ExerciseProgress {
  exerciseId: number;
  exerciseType: ExerciseType;
  completed: boolean;
  score: number;
  totalQuestions: number;
  completedAt?: Date;
}

// Types pour les composants dynamiques
declare module 'next/dynamic' {
  import { ComponentType } from 'react';
  
  interface DynamicOptions {
    ssr?: boolean;
    loading?: () => React.ReactNode | null;
  }
  
  function dynamic<P = object>( // Changed from {} to object
    loader: () => Promise<{ default: ComponentType<P> }>,
    options?: DynamicOptions
  ): ComponentType<P>;
  
  export default dynamic;
}
