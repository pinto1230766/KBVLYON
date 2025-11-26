import type { Flashcard } from '@/types/flashcard';

/**
 * 35 flashcards supplémentaires
 * À ajouter au fichier flashcards.ts existant
 */

export const additionalFlashcards: Flashcard[] = [
  // VOCABULAIRE BIBLIQUE (10 cartes)
  { id: 'card-bible-16', front: { pt: 'Salvação' }, back: { pt: 'Salvação', kea: 'Salvason' }, category: 'vocabulary', difficulty: 2, tags: ['bible', 'salvation'], example: { pt: 'A salvação vem de Jeová', kea: 'Salvason ta ben di Jeová' } },
  { id: 'card-bible-17', front: { pt: 'Pecado' }, back: { pt: 'Pecado', kea: 'Pekadu' }, category: 'vocabulary', difficulty: 2, tags: ['bible', 'sin'], example: { pt: 'Todos pecaram', kea: 'Tudu peka' } },
  { id: 'card-bible-18', front: { pt: 'Graça' }, back: { pt: 'Graça', kea: 'Grasa' }, category: 'vocabulary', difficulty: 3, tags: ['bible', 'grace'], example: { pt: 'A graça de Deus', kea: 'Grasa di Deus' } },
  { id: 'card-bible-19', front: { pt: 'Fé' }, back: { pt: 'Fé', kea: 'Fé' }, category: 'vocabulary', difficulty: 2, tags: ['bible', 'faith'], example: { pt: 'Ter fé em Deus', kea: 'Ten fé na Deus' } },
  { id: 'card-bible-20', front: { pt: 'Profecia' }, back: { pt: 'Profecia', kea: 'Profesia' }, category: 'vocabulary', difficulty: 3, tags: ['bible', 'prophecy'], example: { pt: 'Profecia bíblica', kea: 'Profesia bíbliku' } },
  { id: 'card-bible-21', front: { pt: 'Aliança' }, back: { pt: 'Aliança', kea: 'Aliansa' }, category: 'vocabulary', difficulty: 3, tags: ['bible', 'covenant'], example: { pt: 'Nova aliança', kea: 'Nobu aliansa' } },
  { id: 'card-bible-22', front: { pt: 'Sacrifício' }, back: { pt: 'Sacrifício', kea: 'Sakrifísiu' }, category: 'vocabulary', difficulty: 3, tags: ['bible', 'sacrifice'], example: { pt: 'Sacrifício de Jesus', kea: 'Sakrifísiu di Jesus' } },
  { id: 'card-bible-23', front: { pt: 'Santificação' }, back: { pt: 'Santificação', kea: 'Santifikason' }, category: 'vocabulary', difficulty: 4, tags: ['bible', 'holy'], example: { pt: 'Santificado seja o teu nome', kea: 'Santifikadu seja bu nomi' } },
  { id: 'card-bible-24', front: { pt: 'Redenção' }, back: { pt: 'Redenção', kea: 'Redenson' }, category: 'vocabulary', difficulty: 4, tags: ['bible', 'redemption'], example: { pt: 'Redenção pela fé', kea: 'Redenson pa fé' } },
  { id: 'card-bible-25', front: { pt: 'Justiça' }, back: { pt: 'Justiça', kea: 'Justisa' }, category: 'vocabulary', difficulty: 3, tags: ['bible', 'justice'], example: { pt: 'Justiça de Deus', kea: 'Justisa di Deus' } },

  // VERBES COMMUNS (10 cartes)
  { id: 'card-verb-11', front: { pt: 'Ensinar' }, back: { pt: 'Ensinar', kea: 'Insina' }, category: 'verbs', difficulty: 2, tags: ['action', 'teaching'], example: { pt: 'Ensinar a verdade', kea: 'Insina verdadi' } },
  { id: 'card-verb-12', front: { pt: 'Aprender' }, back: { pt: 'Aprender', kea: 'Prende' }, category: 'verbs', difficulty: 1, tags: ['action', 'learning'], example: { pt: 'Aprender a Bíblia', kea: 'Prende Bíblia' } },
  { id: 'card-verb-13', front: { pt: 'Perdoar' }, back: { pt: 'Perdoar', kea: 'Perdoa' }, category: 'verbs', difficulty: 2, tags: ['action', 'forgiveness'], example: { pt: 'Perdoar os outros', kea: 'Perdoa otu' } },
  { id: 'card-verb-14', front: { pt: 'Ajudar' }, back: { pt: 'Ajudar', kea: 'Ajuda' }, category: 'verbs', difficulty: 1, tags: ['action', 'help'], example: { pt: 'Ajudar o próximo', kea: 'Ajuda próximu' } },
  { id: 'card-verb-15', front: { pt: 'Compartilhar' }, back: { pt: 'Compartilhar', kea: 'Partilha' }, category: 'verbs', difficulty: 2, tags: ['action', 'sharing'], example: { pt: 'Compartilhar boas notícias', kea: 'Partilha bon notísia' } },
  { id: 'card-verb-16', front: { pt: 'Visitar' }, back: { pt: 'Visitar', kea: 'Vizita' }, category: 'verbs', difficulty: 1, tags: ['action', 'visiting'], example: { pt: 'Visitar os vizinhos', kea: 'Vizita vizinhu' } },
  { id: 'card-verb-17', front: { pt: 'Explicar' }, back: { pt: 'Explicar', kea: 'Splika' }, category: 'verbs', difficulty: 2, tags: ['action', 'explaining'], example: { pt: 'Explicar a Bíblia', kea: 'Splika Bíblia' } },
  { id: 'card-verb-18', front: { pt: 'Convidar' }, back: { pt: 'Convidar', kea: 'Konvida' }, category: 'verbs', difficulty: 2, tags: ['action', 'inviting'], example: { pt: 'Convidar para reunião', kea: 'Konvida pa runion' } },
  { id: 'card-verb-19', front: { pt: 'Agradecer' }, back: { pt: 'Agradecer', kea: 'Agradese' }, category: 'verbs', difficulty: 2, tags: ['action', 'thanking'], example: { pt: 'Agradecer a Deus', kea: 'Agradese a Deus' } },
  { id: 'card-verb-20', front: { pt: 'Confiar' }, back: { pt: 'Confiar', kea: 'Konfia' }, category: 'verbs', difficulty: 2, tags: ['action', 'trust'], example: { pt: 'Confiar em Jeová', kea: 'Konfia na Jeová' } },

  // PHRASES DE CONVERSATION (10 cartes)
  { id: 'card-phrase-11', front: { pt: 'Com licença' }, back: { pt: 'Com licença', kea: 'Ku lisensa' }, category: 'conversation', difficulty: 1, tags: ['polite', 'greeting'], example: { pt: 'Com licença, posso entrar?', kea: 'Ku lisensa, N pode intra?' } },
  { id: 'card-phrase-12', front: { pt: 'De nada' }, back: { pt: 'De nada', kea: 'Di nada' }, category: 'conversation', difficulty: 1, tags: ['polite', 'response'], example: { pt: 'Obrigado! - De nada', kea: 'Obrigadu! - Di nada' } },
  { id: 'card-phrase-13', front: { pt: 'Até logo' }, back: { pt: 'Até logo', kea: 'Té logu' }, category: 'conversation', difficulty: 1, tags: ['farewell'], example: { pt: 'Até logo! Volto na próxima semana', kea: 'Té logu! N ta volta na próximu simana' } },
  { id: 'card-phrase-14', front: { pt: 'Posso ajudar?' }, back: { pt: 'Posso ajudar?', kea: 'N pode ajuda?' }, category: 'conversation', difficulty: 2, tags: ['offer', 'help'], example: { pt: 'Posso ajudar com algo?', kea: 'N pode ajuda ku algun kusa?' } },
  { id: 'card-phrase-15', front: { pt: 'Não entendi' }, back: { pt: 'Não entendi', kea: 'N ka intende' }, category: 'conversation', difficulty: 1, tags: ['clarification'], example: { pt: 'Desculpe, não entendi', kea: 'Diskulpa, N ka intende' } },
  { id: 'card-phrase-16', front: { pt: 'Pode repetir?' }, back: { pt: 'Pode repetir?', kea: 'Bu pode repeti?' }, category: 'conversation', difficulty: 2, tags: ['clarification'], example: { pt: 'Pode repetir, por favor?', kea: 'Bu pode repeti, pur favor?' } },
  { id: 'card-phrase-17', front: { pt: 'Que bom!' }, back: { pt: 'Que bom!', kea: 'Ki bon!' }, category: 'conversation', difficulty: 1, tags: ['reaction', 'positive'], example: { pt: 'Que bom que você veio!', kea: 'Ki bon ki bu ben!' } },
  { id: 'card-phrase-18', front: { pt: 'Sinto muito' }, back: { pt: 'Sinto muito', kea: 'N sinti muitu' }, category: 'conversation', difficulty: 2, tags: ['sympathy'], example: { pt: 'Sinto muito pela sua perda', kea: 'N sinti muitu pa bu perda' } },
  { id: 'card-phrase-19', front: { pt: 'Tenha um bom dia' }, back: { pt: 'Tenha um bom dia', kea: 'Ten un bon dia' }, category: 'conversation', difficulty: 2, tags: ['farewell', 'polite'], example: { pt: 'Tenha um bom dia!', kea: 'Ten un bon dia!' } },
  { id: 'card-phrase-20', front: { pt: 'Seja bem-vindo' }, back: { pt: 'Seja bem-vindo', kea: 'Seja bon-vindu' }, category: 'conversation', difficulty: 2, tags: ['greeting', 'welcome'], example: { pt: 'Seja bem-vindo à nossa reunião', kea: 'Seja bon-vindu na nos runion' } },

  // EXPRESSIONS IDIOMATIQUES (5 cartes)
  { id: 'card-idiom-1', front: { pt: 'Deus te abençoe' }, back: { pt: 'Deus te abençoe', kea: 'Deus ta abensoa-bu' }, category: 'culture', difficulty: 2, tags: ['blessing', 'idiom'], example: { pt: 'Deus te abençoe sempre', kea: 'Deus ta abensoa-bu sempri' } },
  { id: 'card-idiom-2', front: { pt: 'Se Deus quiser' }, back: { pt: 'Se Deus quiser', kea: 'Si Deus kere' }, category: 'culture', difficulty: 2, tags: ['hope', 'idiom'], example: { pt: 'Voltarei amanhã, se Deus quiser', kea: 'N ta volta manha, si Deus kere' } },
  { id: 'card-idiom-3', front: { pt: 'Graças a Deus' }, back: { pt: 'Graças a Deus', kea: 'Grasa a Deus' }, category: 'culture', difficulty: 1, tags: ['gratitude', 'idiom'], example: { pt: 'Graças a Deus está tudo bem', kea: 'Grasa a Deus tudu sta bon' } },
  { id: 'card-idiom-4', front: { pt: 'Que Deus te guarde' }, back: { pt: 'Que Deus te guarde', kea: 'Ki Deus ta garda-bu' }, category: 'culture', difficulty: 3, tags: ['farewell', 'blessing'], example: { pt: 'Que Deus te guarde até voltarmos', kea: 'Ki Deus ta garda-bu té nu volta' } },
  { id: 'card-idiom-5', front: { pt: 'Está nas mãos de Deus' }, back: { pt: 'Está nas mãos de Deus', kea: 'Sta na mon di Deus' }, category: 'culture', difficulty: 3, tags: ['trust', 'idiom'], example: { pt: 'Está nas mãos de Deus agora', kea: 'Sta na mon di Deus agora' } }
];

// Fonction pour ajouter au deck existant
export function addToExistingDecks() {
  // Ces cartes peuvent être ajoutées aux decks existants:
  // - Cartes 16-25 → Bible Vocabulary deck
  // - Cartes 11-20 → Common Verbs deck  
  // - Cartes 11-20 → Conversation Phrases deck
  // - Cartes 1-5 → Nouveau deck "Expressions Idiomatiques"
}
