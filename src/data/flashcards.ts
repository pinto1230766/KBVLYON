import type { Flashcard, FlashcardDeck } from '@/types/flashcard';

/**
 * Collections de flashcards par catégorie
 */

// VOCABULAIRE BIBLIQUE
export const bibleVocabularyCards: Flashcard[] = [
  {
    id: 'card-bible-1',
    front: { pt: 'Bíblia' },
    back: { pt: 'Bíblia', kea: 'Bíblia' },
    category: 'ministry',
    difficulty: 1,
    tags: ['básico', 'essencial'],
    example: {
      pt: 'Eu leio a Bíblia todos os dias',
      kea: 'N ta le Bíblia tud dia'
    }
  },
  {
    id: 'card-bible-2',
    front: { pt: 'Jeová' },
    back: { pt: 'Jeová', kea: 'Jeová' },
    category: 'ministry',
    difficulty: 1,
    tags: ['nome de Deus', 'essencial'],
    example: {
      pt: 'Jeová é o nome de Deus',
      kea: 'Jeová é nomi di Deus'
    }
  },
  {
    id: 'card-bible-3',
    front: { pt: 'Oração' },
    back: { pt: 'Oração', kea: 'Orason' },
    category: 'ministry',
    difficulty: 2,
    tags: ['prática', 'espiritual'],
    example: {
      pt: 'Fazemos uma oração antes do estudo',
      kea: 'Nu ta faze un orason antis di studu'
    }
  },
  {
    id: 'card-bible-4',
    front: { pt: 'Estudo Bíblico' },
    back: { pt: 'Estudo Bíblico', kea: 'Studu Bíbliku' },
    category: 'ministry',
    difficulty: 2,
    tags: ['ensino', 'ministério'],
    example: {
      pt: 'Gostaria de ter um estudo bíblico?',
      kea: 'Bu ta gosta di ten un studu bíbliku?'
    }
  },
  {
    id: 'card-bible-5',
    front: { pt: 'Reino de Deus' },
    back: { pt: 'Reino de Deus', kea: 'Reinu di Deus' },
    category: 'ministry',
    difficulty: 3,
    tags: ['doutrina', 'esperança'],
    example: {
      pt: 'O Reino de Deus trará paz',
      kea: 'Reinu di Deus ta traze paz'
    }
  }
];

// VERBES COURANTS
export const commonVerbsCards: Flashcard[] = [
  {
    id: 'card-verb-1',
    front: { pt: 'Falar (eu falo)' },
    back: { pt: 'Falar', kea: 'N ta fala' },
    category: 'verbs',
    difficulty: 1,
    tags: ['presente', 'básico'],
    example: {
      pt: 'Eu falo cabo-verdiano',
      kea: 'N ta fala kriolu'
    }
  },
  {
    id: 'card-verb-2',
    front: { pt: 'Comer (eu como)' },
    back: { pt: 'Comer', kea: 'N ta kume' },
    category: 'verbs',
    difficulty: 1,
    tags: ['presente', 'básico'],
    example: {
      pt: 'Eu como peixe',
      kea: 'N ta kume pexi'
    }
  },
  {
    id: 'card-verb-3',
    front: { pt: 'Ir (eu vou)' },
    back: { pt: 'Ir', kea: 'N ta bai' },
    category: 'verbs',
    difficulty: 2,
    tags: ['presente', 'movimento'],
    example: {
      pt: 'Eu vou à igreja',
      kea: 'N ta bai na igreja'
    }
  },
  {
    id: 'card-verb-4',
    front: { pt: 'Estudar (eu estudo)' },
    back: { pt: 'Estudar', kea: 'N ta studa' },
    category: 'verbs',
    difficulty: 2,
    tags: ['presente', 'educação'],
    example: {
      pt: 'Eu estudo a Bíblia',
      kea: 'N ta studa Bíblia'
    }
  },
  {
    id: 'card-verb-5',
    front: { pt: 'Pregar (eu prego)' },
    back: { pt: 'Pregar', kea: 'N ta prega' },
    category: 'verbs',
    difficulty: 3,
    tags: ['presente', 'ministério'],
    example: {
      pt: 'Eu prego as boas novas',
      kea: 'N ta prega bon notísia'
    }
  }
];

// PHRASES DE CONVERSATION
export const conversationCards: Flashcard[] = [
  {
    id: 'card-conv-1',
    front: { pt: 'Bom dia' },
    back: { pt: 'Bom dia', kea: 'Bon dia' },
    category: 'vocabulary',
    difficulty: 1,
    tags: ['saudação', 'básico'],
    example: {
      pt: 'Bom dia! Como está?',
      kea: 'Bon dia! Modi ki bu sta?'
    }
  },
  {
    id: 'card-conv-2',
    front: { pt: 'Como está?' },
    back: { pt: 'Como está?', kea: 'Modi ki bu sta?' },
    category: 'vocabulary',
    difficulty: 1,
    tags: ['saudação', 'pergunta'],
    example: {
      pt: 'Como está hoje?',
      kea: 'Modi ki bu sta oji?'
    }
  },
  {
    id: 'card-conv-3',
    front: { pt: 'Obrigado' },
    back: { pt: 'Obrigado', kea: 'Obrigadu' },
    category: 'vocabulary',
    difficulty: 1,
    tags: ['cortesia', 'básico'],
    example: {
      pt: 'Muito obrigado pela ajuda',
      kea: 'Muitu obrigadu pa djuda'
    }
  },
  {
    id: 'card-conv-4',
    front: { pt: 'Por favor' },
    back: { pt: 'Por favor', kea: 'Pur favor' },
    category: 'vocabulary',
    difficulty: 1,
    tags: ['cortesia', 'básico'],
    example: {
      pt: 'Pode ajudar, por favor?',
      kea: 'Bu pode djuda, pur favor?'
    }
  },
  {
    id: 'card-conv-5',
    front: { pt: 'Até logo' },
    back: { pt: 'Até logo', kea: 'Te logu' },
    category: 'vocabulary',
    difficulty: 1,
    tags: ['despedida', 'básico'],
    example: {
      pt: 'Até logo! Tenha um bom dia',
      kea: 'Te logu! Ten un bon dia'
    }
  }
];

// DECKS (Collections)
export const flashcardDecks: FlashcardDeck[] = [
  {
    id: 'deck-bible-vocab',
    title: {
      pt: 'Vocabulário Bíblico',
      kea: 'Vokabuláriu Bíbliku'
    },
    description: {
      pt: 'Palavras essenciais para a pregação e estudo bíblico',
      kea: 'Palavra esensiál pa pregason i studu bíbliku'
    },
    cards: bibleVocabularyCards.map(c => c.id),
    category: 'ministry',
    icon: '📖',
    color: '#8b5cf6'
  },
  {
    id: 'deck-common-verbs',
    title: {
      pt: 'Verbos Comuns',
      kea: 'Verbu Komun'
    },
    description: {
      pt: 'Verbos mais usados no dia a dia',
      kea: 'Verbu más uzadu na dia-a-dia'
    },
    cards: commonVerbsCards.map(c => c.id),
    category: 'verbs',
    icon: '⚡',
    color: '#3b82f6'
  },
  {
    id: 'deck-conversation',
    title: {
      pt: 'Frases de Conversação',
      kea: 'Frazi di Konversason'
    },
    description: {
      pt: 'Frases básicas para conversas do dia a dia',
      kea: 'Frazi báziku pa konversa di dia-a-dia'
    },
    cards: conversationCards.map(c => c.id),
    category: 'vocabulary',
    icon: '💬',
    color: '#10b981'
  }
];

// Toutes les cartes
export const allFlashcards: Flashcard[] = [
  ...bibleVocabularyCards,
  ...commonVerbsCards,
  ...conversationCards
];

export function getCardById(cardId: string): Flashcard | undefined {
  return allFlashcards.find(card => card.id === cardId);
}

export function getCardsByCategory(category: string): Flashcard[] {
  return allFlashcards.filter(card => card.category === category);
}

export function getDeckById(deckId: string): FlashcardDeck | undefined {
  return flashcardDecks.find(deck => deck.id === deckId);
}
