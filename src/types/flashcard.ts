/**
 * Types pour le système de flashcards avec répétition espacée
 */

export interface Flashcard {
  id: string;
  front: {
    pt: string;
    kea?: string;
  };
  back: {
    pt: string;
    kea: string;
  };
  category: 'vocabulary' | 'grammar' | 'ministry' | 'culture' | 'verbs';
  difficulty: number; // 1-5
  tags: string[];
  example?: {
    pt: string;
    kea: string;
  };
}

export interface FlashcardProgress {
  cardId: string;
  userId: string;
  easeFactor: number; // 1.3 - 2.5 (algorithme SM-2)
  interval: number; // Jours jusqu'à la prochaine révision
  repetitions: number; // Nombre de fois révisé
  lastReviewed: Date;
  nextReview: Date;
  timesCorrect: number;
  timesIncorrect: number;
  averageResponseTime: number; // En secondes
}

export interface FlashcardDeck {
  id: string;
  title: {
    pt: string;
    kea: string;
  };
  description: {
    pt: string;
    kea: string;
  };
  cards: string[]; // IDs des flashcards
  category: string;
  icon: string;
  color: string;
}

export type ReviewQuality = 0 | 1 | 2 | 3 | 4 | 5;
// 0: Blackout complet
// 1: Réponse incorrecte mais familière
// 2: Réponse incorrecte mais facile à rappeler
// 3: Réponse correcte avec difficulté
// 4: Réponse correcte avec hésitation
// 5: Réponse correcte et facile
