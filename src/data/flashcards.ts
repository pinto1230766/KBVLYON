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
  },
  { id: 'card-bible-16', front: { pt: 'Salvação' }, back: { pt: 'Salvação', kea: 'Salvason' }, category: 'vocabulary', difficulty: 2, tags: ['bible', 'salvation'], example: { pt: 'A salvação vem de Jeová', kea: 'Salvason ta ben di Jeová' } },
  { id: 'card-bible-17', front: { pt: 'Pecado' }, back: { pt: 'Pecado', kea: 'Pekadu' }, category: 'vocabulary', difficulty: 2, tags: ['bible', 'sin'], example: { pt: 'Todos pecaram', kea: 'Tudu peka' } },
  { id: 'card-bible-18', front: { pt: 'Graça' }, back: { pt: 'Graça', kea: 'Grasa' }, category: 'vocabulary', difficulty: 3, tags: ['bible', 'grace'], example: { pt: 'A graça de Deus', kea: 'Grasa di Deus' } },
  { id: 'card-bible-19', front: { pt: 'Fé' }, back: { pt: 'Fé', kea: 'Fé' }, category: 'vocabulary', difficulty: 2, tags: ['bible', 'faith'], example: { pt: 'Ter fé em Deus', kea: 'Ten fé na Deus' } },
  { id: 'card-bible-20', front: { pt: 'Profecia' }, back: { pt: 'Profecia', kea: 'Profesia' }, category: 'vocabulary', difficulty: 3, tags: ['bible', 'prophecy'], example: { pt: 'Profecia bíblica', kea: 'Profesia bíbliku' } },
  { id: 'card-bible-21', front: { pt: 'Aliança' }, back: { pt: 'Aliança', kea: 'Aliansa' }, category: 'vocabulary', difficulty: 3, tags: ['bible', 'covenant'], example: { pt: 'Nova aliança', kea: 'Nobu aliansa' } },
  { id: 'card-bible-22', front: { pt: 'Sacrifício' }, back: { pt: 'Sacrifício', kea: 'Sakrifísiu' }, category: 'vocabulary', difficulty: 3, tags: ['bible', 'sacrifice'], example: { pt: 'Sacrifício de Jesus', kea: 'Sakrifísiu di Jesus' } },
  { id: 'card-bible-23', front: { pt: 'Santificação' }, back: { pt: 'Santificação', kea: 'Santifikason' }, category: 'vocabulary', difficulty: 4, tags: ['bible', 'holy'], example: { pt: 'Santificado seja o teu nome', kea: 'Santifikadu seja bu nomi' } },
  { id: 'card-bible-24', front: { pt: 'Redenção' }, back: { pt: 'Redenção', kea: 'Redenson' }, category: 'vocabulary', difficulty: 4, tags: ['bible', 'redemption'], example: { pt: 'Redenção pela fé', kea: 'Redenson pa fé' } },
  { id: 'card-bible-25', front: { pt: 'Justiça' }, back: { pt: 'Justiça', kea: 'Justisa' }, category: 'vocabulary', difficulty: 3, tags: ['bible', 'justice'], example: { pt: 'Justiça de Deus', kea: 'Justisa di Deus' } }
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
  },
  { id: 'card-verb-11', front: { pt: 'Ensinar' }, back: { pt: 'Ensinar', kea: 'Insina' }, category: 'verbs', difficulty: 2, tags: ['action', 'teaching'], example: { pt: 'Ensinar a verdade', kea: 'Insina verdadi' } },
  { id: 'card-verb-12', front: { pt: 'Aprender' }, back: { pt: 'Aprender', kea: 'Prende' }, category: 'verbs', difficulty: 1, tags: ['action', 'learning'], example: { pt: 'Aprender a Bíblia', kea: 'Prende Bíblia' } },
  { id: 'card-verb-13', front: { pt: 'Perdoar' }, back: { pt: 'Perdoar', kea: 'Perdoa' }, category: 'verbs', difficulty: 2, tags: ['action', 'forgiveness'], example: { pt: 'Perdoar os outros', kea: 'Perdoa otu' } },
  { id: 'card-verb-14', front: { pt: 'Ajudar' }, back: { pt: 'Ajudar', kea: 'Ajuda' }, category: 'verbs', difficulty: 1, tags: ['action', 'help'], example: { pt: 'Ajudar o próximo', kea: 'Ajuda próximu' } },
  { id: 'card-verb-15', front: { pt: 'Compartilhar' }, back: { pt: 'Compartilhar', kea: 'Partilha' }, category: 'verbs', difficulty: 2, tags: ['action', 'sharing'], example: { pt: 'Compartilhar boas notícias', kea: 'Partilha bon notísia' } },
  { id: 'card-verb-16', front: { pt: 'Visitar' }, back: { pt: 'Visitar', kea: 'Vizita' }, category: 'verbs', difficulty: 1, tags: ['action', 'visiting'], example: { pt: 'Visitar os vizinhos', kea: 'Vizita vizinhu' } },
  { id: 'card-verb-17', front: { pt: 'Explicar' }, back: { pt: 'Explicar', kea: 'Splika' }, category: 'verbs', difficulty: 2, tags: ['action', 'explaining'], example: { pt: 'Explicar a Bíblia', kea: 'Splika Bíblia' } },
  { id: 'card-verb-18', front: { pt: 'Convidar' }, back: { pt: 'Convidar', kea: 'Konvida' }, category: 'verbs', difficulty: 2, tags: ['action', 'inviting'], example: { pt: 'Convidar para reunião', kea: 'Konvida pa runion' } },
  { id: 'card-verb-19', front: { pt: 'Agradecer' }, back: { pt: 'Agradecer', kea: 'Agradese' }, category: 'verbs', difficulty: 2, tags: ['action', 'thanking'], example: { pt: 'Agradecer a Deus', kea: 'Agradese a Deus' } },
  { id: 'card-verb-20', front: { pt: 'Confiar' }, back: { pt: 'Confiar', kea: 'Konfia' }, category: 'verbs', difficulty: 2, tags: ['action', 'trust'], example: { pt: 'Confiar em Jeová', kea: 'Konfia na Jeová' } }
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
  },
  { id: 'card-phrase-11', front: { pt: 'Com licença' }, back: { pt: 'Com licença', kea: 'Ku lisensa' }, category: 'conversation', difficulty: 1, tags: ['polite', 'greeting'], example: { pt: 'Com licença, posso entrar?', kea: 'Ku lisensa, N pode intra?' } },
  { id: 'card-phrase-12', front: { pt: 'De nada' }, back: { pt: 'De nada', kea: 'Di nada' }, category: 'conversation', difficulty: 1, tags: ['polite', 'response'], example: { pt: 'Obrigado! - De nada', kea: 'Obrigadu! - Di nada' } },
  { id: 'card-phrase-13', front: { pt: 'Até logo' }, back: { pt: 'Até logo', kea: 'Té logu' }, category: 'conversation', difficulty: 1, tags: ['farewell'], example: { pt: 'Até logo! Volto na próxima semana', kea: 'Té logu! N ta volta na próximu simana' } },
  { id: 'card-phrase-14', front: { pt: 'Posso ajudar?' }, back: { pt: 'Posso ajudar?', kea: 'N pode ajuda?' }, category: 'conversation', difficulty: 2, tags: ['offer', 'help'], example: { pt: 'Posso ajudar com algo?', kea: 'N pode ajuda ku algun kusa?' } },
  { id: 'card-phrase-15', front: { pt: 'Não entendi' }, back: { pt: 'Não entendi', kea: 'N ka intende' }, category: 'conversation', difficulty: 1, tags: ['clarification'], example: { pt: 'Desculpe, não entendi', kea: 'Diskulpa, N ka intende' } },
  { id: 'card-phrase-16', front: { pt: 'Pode repetir?' }, back: { pt: 'Pode repetir?', kea: 'Bu pode repeti?' }, category: 'conversation', difficulty: 2, tags: ['clarification'], example: { pt: 'Pode repetir, por favor?', kea: 'Bu pode repeti, pur favor?' } },
  { id: 'card-phrase-17', front: { pt: 'Que bom!' }, back: { pt: 'Que bom!', kea: 'Ki bon!' }, category: 'conversation', difficulty: 1, tags: ['reaction', 'positive'], example: { pt: 'Que bom que você veio!', kea: 'Ki bon ki bu ben!' } },
  { id: 'card-phrase-18', front: { pt: 'Sinto muito' }, back: { pt: 'Sinto muito', kea: 'N sinti muitu' }, category: 'conversation', difficulty: 2, tags: ['sympathy'], example: { pt: 'Sinto muito pela sua perda', kea: 'N sinti muitu pa bu perda' } },
  { id: 'card-phrase-19', front: { pt: 'Tenha um bom dia' }, back: { pt: 'Tenha um bom dia', kea: 'Ten un bon dia' }, category: 'conversation', difficulty: 2, tags: ['farewell', 'polite'], example: { pt: 'Tenha um bom dia!', kea: 'Ten un bon dia!' } },
  { id: 'card-phrase-20', front: { pt: 'Seja bem-vindo' }, back: { pt: 'Seja bem-vindo', kea: 'Seja bon-vindu' }, category: 'conversation', difficulty: 2, tags: ['greeting', 'welcome'], example: { pt: 'Seja bem-vindo à nossa reunião', kea: 'Seja bon-vindu na nos runion' } }
];

// EXPRESSÕES IDIOMÁTICAS
export const idiomCards: Flashcard[] = [
  { id: 'card-idiom-1', front: { pt: 'Deus te abençoe' }, back: { pt: 'Deus te abençoe', kea: 'Deus ta abensoa-bu' }, category: 'culture', difficulty: 2, tags: ['blessing', 'idiom'], example: { pt: 'Deus te abençoe sempre', kea: 'Deus ta abensoa-bu sempri' } },
  { id: 'card-idiom-2', front: { pt: 'Se Deus quiser' }, back: { pt: 'Se Deus quiser', kea: 'Si Deus kere' }, category: 'culture', difficulty: 2, tags: ['hope', 'idiom'], example: { pt: 'Voltarei amanhã, se Deus quiser', kea: 'N ta volta manha, si Deus kere' } },
  { id: 'card-idiom-3', front: { pt: 'Graças a Deus' }, back: { pt: 'Graças a Deus', kea: 'Grasa a Deus' }, category: 'culture', difficulty: 1, tags: ['gratitude', 'idiom'], example: { pt: 'Graças a Deus está tudo bem', kea: 'Grasa a Deus tudu sta bon' } },
  { id: 'card-idiom-4', front: { pt: 'Que Deus te guarde' }, back: { pt: 'Que Deus te guarde', kea: 'Ki Deus ta garda-bu' }, category: 'culture', difficulty: 3, tags: ['farewell', 'blessing'], example: { pt: 'Que Deus te guarde até voltarmos', kea: 'Ki Deus ta garda-bu té nu volta' } },
  { id: 'card-idiom-5', front: { pt: 'Está nas mãos de Deus' }, back: { pt: 'Está nas mãos de Deus', kea: 'Sta na mon di Deus' }, category: 'culture', difficulty: 3, tags: ['trust', 'idiom'], example: { pt: 'Está nas mãos de Deus agora', kea: 'Sta na mon di Deus agora' } }
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
      kea: 'Palavra esensial pa pregason i studu bíbliku'
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
  },
  {
    id: 'deck-idioms',
    title: {
      pt: 'Expressões Idiomáticas',
      kea: 'Spreson Idiomátiku'
    },
    description: {
      pt: 'Expressões comuns da cultura cabo-verdiana',
      kea: 'Spreson komun di kultura kabuverdianu'
    },
    cards: idiomCards.map(c => c.id),
    category: 'culture',
    icon: '🗣️',
    color: '#f59e0b'
  }
];

// Toutes les cartes
export const allFlashcards: Flashcard[] = [
  ...bibleVocabularyCards,
  ...commonVerbsCards,
  ...conversationCards,
  ...idiomCards
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
