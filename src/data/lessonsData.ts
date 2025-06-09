export interface QuizQuestion {
  id: number;
  question: {
    pt: string;
    cv: string;
  };
  options: Array<{
    id: string;
    text: {
      pt: string;
      cv: string;
    };
  }>;
  correctAnswer: string;
  explanation: {
    pt: string;
    cv: string;
  };
}

export interface MatchingExercise {
  id: number;
  title: {
    pt: string;
    cv: string;
  };
  pairs: Array<{
    id: number;
    leftSide: {
      pt: string;
    };
    rightSide: {
      cv: string;
    };
  }>;
}

export interface Roleplay {
  id: number;
  title: {
    pt: string;
    cv: string;
  };
  scenario: {
    pt: string;
    cv: string;
  };
  conversation: Array<{
    speaker: 'publisher' | 'householder';
    text: {
      pt: string;
      cv: string;
    };
  }>;
}

// Définition de l'interface DictationExercise
export interface DictationExercise {
  id: number;
  type: 'dictation';
  title: {
    pt: string;
    cv: string;
  };
  description?: {
    pt: string;
    cv: string;
  };
  instructions: {
    pt: string;
    cv: string;
  };
  audioUrl: string;
  text: {
    pt: string;
    cv: string;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface GrammarExercise {
  id: number;
  title: {
    pt: string;
    cv: string;
  };
  instructions: {
    pt: string;
    cv: string;
  };
  questions: Array<{
    id: number;
    question: {
      pt: string;
      cv: string;
    };
    answer: {
      pt: string;
      cv: string;
    };
  }>;
}

export const quizQuestions: QuizQuestion[] = [
  // Nouveaux exercices de vocabulaire
  {
    id: 101,
    question: {
      pt: 'Como se diz "cabelo" em crioulo cabo-verdiano?',
      cv: 'Modi ki bu ta fla "cabelo" na kriolu kabuverdianu?'
    },
    options: [
      { id: 'a', text: { pt: 'kabesa', cv: 'kabesa' } },
      { id: 'b', text: { pt: 'kabelu', cv: 'kabelu' } },
      { id: 'c', text: { pt: 'kareta', cv: 'kareta' } },
      { id: 'd', text: { pt: 'karnu', cv: 'karnu' } }
    ],
    correctAnswer: 'b',
    explanation: {
      pt: 'A palavra correta é "kabelu". Exemplo: "Nha kabelu é krespu." (Meu cabelo é cacheado).',
      cv: 'Palavra koretu é "kabelu". Izemplu: "Nha kabelu é krespu." (Meu cabelo é cacheado).'
    }
  },
  {
    id: 102,
    question: {
      pt: 'Qual é a tradução de "tio" em crioulo?',
      cv: 'Kual é traduson di "tio" na kriolu?'
    },
    options: [
      { id: 'a', text: { pt: 'pai', cv: 'pai' } },
      { id: 'b', text: { pt: 'tio', cv: 'tio' } },
      { id: 'c', text: { pt: 'primo', cv: 'primo' } },
      { id: 'd', text: { pt: 'avô', cv: 'vô' } }
    ],
    correctAnswer: 'b',
    explanation: {
      pt: 'A tradução correta é "tio". Exemplo: "Nha tio ta mora na ilha di Fogo." (Meu tio mora na ilha do Fogo).',
      cv: 'Traduson koreta é "tio". Izemplu: "Nha tio ta mora na ilha di Fogo." (Meu tio mora na ilha do Fogo).'
    }
  },
  // Exercices existants
  {
    id: 1,
    question: {
      pt: 'Como se diz "Bom dia" em cabo-verdiano?',
      cv: 'Modi ki ta fla "Bom dia" na kriolu?'
    },
    options: [
      {
        id: 'a',
        text: {
          pt: 'Bon dia',
          cv: 'Bon dia'
        }
      },
      {
        id: 'b',
        text: {
          pt: 'Bon tardi',
          cv: 'Bon tardi'
        }
      },
      {
        id: 'c',
        text: {
          pt: 'Bon noti',
          cv: 'Bon noti'
        }
      },
      {
        id: 'd',
        text: {
          pt: 'Ola',
          cv: 'Ola'
        }
      }
    ],
    correctAnswer: 'a',
    explanation: {
      pt: '"Bon dia" é a forma correta de dizer "Bom dia" em cabo-verdiano.',
      cv: '"Bon dia" é forma koretu di fla "Bom dia" na kriolu.'
    }
  },
  {
    id: 2,
    question: {
      pt: 'Qual é a tradução de "Deus te ama" em cabo-verdiano?',
      cv: 'Kal ki é traduson di "Deus te ama" na kriolu?'
    },
    options: [
      {
        id: 'a',
        text: {
          pt: 'Deus gosta di bo',
          cv: 'Deus gosta di bo'
        }
      },
      {
        id: 'b',
        text: {
          pt: 'Deus ta ama-u',
          cv: 'Deus ta ama-u'
        }
      },
      {
        id: 'c',
        text: {
          pt: 'Deus ta ama-bo',
          cv: 'Deus ta ama-bo'
        }
      },
      {
        id: 'd',
        text: {
          pt: 'Deus kre bo',
          cv: 'Deus kre bo'
        }
      }
    ],
    correctAnswer: 'c',
    explanation: {
      pt: '"Deus ta ama-bo" é a tradução correta de "Deus te ama" em cabo-verdiano.',
      cv: '"Deus ta ama-bo" é traduson koretu di "Deus te ama" na kriolu.'
    }
  },
  {
    id: 3,
    question: {
      pt: 'Como se pergunta "Como você está?" em cabo-verdiano?',
      cv: 'Modi ki ta purgunta "Como você está?" na kriolu?'
    },
    options: [
      {
        id: 'a',
        text: {
          pt: 'Modi ki bu sta?',
          cv: 'Modi ki bu sta?'
        }
      },
      {
        id: 'b',
        text: {
          pt: 'Kumo bu sta?',
          cv: 'Kumo bu sta?'
        }
      },
      {
        id: 'c',
        text: {
          pt: 'Ku sta bo?',
          cv: 'Ku sta bo?'
        }
      },
      {
        id: 'd',
        text: {
          pt: 'Komu sta?',
          cv: 'Komu sta?'
        }
      }
    ],
    correctAnswer: 'a',
    explanation: {
      pt: '"Modi ki bu sta?" é a forma correta de perguntar "Como você está?" em cabo-verdiano.',
      cv: '"Modi ki bu sta?" é forma koretu di purgunta "Como você está?" na kriolu.'
    }
  },
  {
    id: 4,
    question: {
      pt: 'Qual a tradução correta de "A Bíblia ensina a verdade" em cabo-verdiano?',
      cv: 'Kal traduson koretu di "A Bíblia ensina a verdade" na kriolu?'
    },
    options: [
      {
        id: 'a',
        text: {
          pt: 'Bíblia ta fla verdadi',
          cv: 'Bíblia ta fla verdadi'
        }
      },
      {
        id: 'b',
        text: {
          pt: 'Bíblia ta ensina verdadi',
          cv: 'Bíblia ta ensina verdadi'
        }
      },
      {
        id: 'c',
        text: {
          pt: 'Bíblia é verdadi',
          cv: 'Bíblia é verdadi'
        }
      },
      {
        id: 'd',
        text: {
          pt: 'Bíblia ten verdadi',
          cv: 'Bíblia ten verdadi'
        }
      }
    ],
    correctAnswer: 'b',
    explanation: {
      pt: '"Bíblia ta ensina verdadi" é a tradução correta de "A Bíblia ensina a verdade".',
      cv: '"Bíblia ta ensina verdadi" é traduson koretu di "A Bíblia ensina a verdade".'
    }
  },
  {
    id: 5,
    question: {
      pt: 'Como se diz "Eu gostaria de estudar a Bíblia com você" em cabo-verdiano?',
      cv: 'Modi ki ta fla "Eu gostaria de estudar a Bíblia com você" na kriolu?'
    },
    options: [
      {
        id: 'a',
        text: {
          pt: 'N kre studa Bíblia ku bo',
          cv: 'N kre studa Bíblia ku bo'
        }
      },
      {
        id: 'b',
        text: {
          pt: 'N ta gosta di studa Bíblia ku bo',
          cv: 'N ta gosta di studa Bíblia ku bo'
        }
      },
      {
        id: 'c',
        text: {
          pt: 'Mi ta studa Bíblia ku bo',
          cv: 'Mi ta studa Bíblia ku bo'
        }
      },
      {
        id: 'd',
        text: {
          pt: 'N pode studa Bíblia ku bo?',
          cv: 'N pode studa Bíblia ku bo?'
        }
      }
    ],
    correctAnswer: 'a',
    explanation: {
      pt: '"N kre studa Bíblia ku bo" é a forma correta de dizer "Eu gostaria de estudar a Bíblia com você".',
      cv: '"N kre studa Bíblia ku bo" é forma koretu di fla "Eu gostaria de estudar a Bíblia com você".'
    }
  }
];

export const matchingExercises: MatchingExercise[] = [
  // Nouvel exercice de vocabulaire - Famille
  {
    id: 101,
    title: {
      pt: 'Termos de Família',
      cv: 'Termu di Família'
    },
    pairs: [
      {
        id: 1,
        leftSide: { pt: 'pai' },
        rightSide: { cv: 'pai' }
      },
      {
        id: 2,
        leftSide: { pt: 'mãe' },
        rightSide: { cv: 'mai' }
      },
      {
        id: 3,
        leftSide: { pt: 'tio' },
        rightSide: { cv: 'tio' }
      },
      {
        id: 4,
        leftSide: { pt: 'primo' },
        rightSide: { cv: 'primo' }
      },
      {
        id: 5,
        leftSide: { pt: 'irmão' },
        rightSide: { cv: 'irmon' }
      }
    ]
  },
  // Nouvel exercice de vocabulaire - Cores
  {
    id: 102,
    title: {
      pt: 'Cores em Crioulo',
      cv: 'Kor na Kriolu'
    },
    pairs: [
      {
        id: 1,
        leftSide: { pt: 'vermelho' },
        rightSide: { cv: 'vermelhu' }
      },
      {
        id: 2,
        leftSide: { pt: 'azul' },
        rightSide: { cv: 'azul' }
      },
      {
        id: 3,
        leftSide: { pt: 'verde' },
        rightSide: { cv: 'verdi' }
      },
      {
        id: 4,
        leftSide: { pt: 'rosa' },
        rightSide: { cv: 'rosu' }
      },
      {
        id: 5,
        leftSide: { pt: 'preto' },
        rightSide: { cv: 'pretu' }
      }
    ]
  },
  // Exercices existants
  {
    id: 1,
    title: {
      pt: 'Correspondência de Saudações',
      cv: 'Korespondensia di Saudasons'
    },
    pairs: [
      {
        id: 1,
        leftSide: {
          pt: 'Bom dia'
        },
        rightSide: {
          cv: 'Bon dia'
        }
      },
      {
        id: 2,
        leftSide: {
          pt: 'Boa tarde'
        },
        rightSide: {
          cv: 'Bon tardi'
        }
      },
      {
        id: 3,
        leftSide: {
          pt: 'Boa noite'
        },
        rightSide: {
          cv: 'Bon noti'
        }
      },
      {
        id: 4,
        leftSide: {
          pt: 'Como está?'
        },
        rightSide: {
          cv: 'Modi ki bu sta?'
        }
      },
      {
        id: 5,
        leftSide: {
          pt: 'Tudo bem?'
        },
        rightSide: {
          cv: 'Tudu dretu?'
        }
      }
    ]
  },
  {
    id: 2,
    title: {
      pt: 'Correspondência de Frases Bíblicas',
      cv: 'Korespondensia di Frazi Bíbliku'
    },
    pairs: [
      {
        id: 1,
        leftSide: {
          pt: 'Deus é amor'
        },
        rightSide: {
          cv: 'Deus é amor'
        }
      },
      {
        id: 2,
        leftSide: {
          pt: 'Jesus ama você'
        },
        rightSide: {
          cv: 'Jesus ta ama-bo'
        }
      },
      {
        id: 3,
        leftSide: {
          pt: 'A Bíblia é a palavra de Deus'
        },
        rightSide: {
          cv: 'Bíblia é palavra di Deus'
        }
      },
      {
        id: 4,
        leftSide: {
          pt: 'Podemos estudar a Bíblia juntos?'
        },
        rightSide: {
          cv: 'Nu pode studa Bíblia djuntu?'
        }
      },
      {
        id: 5,
        leftSide: {
          pt: 'Que Deus te abençoe'
        },
        rightSide: {
          cv: 'Ki Deus abensoa-bo'
        }
      }
    ]
  }
];

// Exercices de grammaire basés sur le vocabulaire
export interface ExerciseProgress {
  exerciseId: number;
  exerciseType: 'grammar' | 'dictation' | 'quiz' | 'matching' | 'roleplay';
  completed: boolean;
  score: number;
  totalQuestions: number;
  completedAt?: Date;
}

// Exercices de dictée (fusionnés et corrigés)
export const dictationExercises: DictationExercise[] = [
  {
    id: 1, // ID original
    type: 'dictation',
    title: {
      pt: 'Primeira Lição',
      cv: 'Purmeru Lison'
    },
    description: {
      pt: 'Ouça e escreva o que você ouve',
      cv: 'Ouví i skrebe kuzê ki bu oi'
    },
    instructions: {
      pt: 'Ouça o áudio e escreva o que você ouve no espaço fornecido.',
      cv: 'Ouví áudiu i skrebe kuzê ki bu oi na spasiu disponivel.'
    },
    audioUrl: '/audio/dictation-1.mp3', // URL originale
    text: {
      pt: 'O gato está em cima do tapete.',
      cv: 'Mingas ta na riba di tapeti.'
    },
    difficulty: 'easy',
    completed: false
  },
  {
    id: 2, // ID original
    type: 'dictation',
    title: {
      pt: 'Segunda Lição',
      cv: 'Sigundu Lison'
    },
    description: {
      pt: 'Ditado com frases mais longas',
      cv: 'Ditadu ku frasis mas longu'
    },
    instructions: {
      pt: 'Escreva a frase que você ouve no áudio.',
      cv: 'Skrebe frasi ki bu oi na áudio.'
    },
    audioUrl: '/audio/dictation-2.mp3', // URL originale
    text: {
      pt: 'A chuva caiu suavemente sobre as árvores no parque.',
      cv: 'Txuba kai suavimenti riba di árboris na parki.'
    },
    difficulty: 'medium',
    completed: false
  },
  {
    id: 3, // Nouvel ID unique
    type: 'dictation', // Ajouté
    title: {
      pt: 'Saudações Básicas',
      cv: 'Saudason Bázika'
    },
    // description est optionnel, donc non ajouté ici s'il n'y en avait pas
    instructions: {
      pt: 'Ouça atentamente e escreva o que você ouve em crioulo cabo-verdiano.',
      cv: 'Ouba ku atenson i skrebe kuza ki bu oi na kriolu kabuverdianu.'
    },
    audioUrl: '/audio/dictation1.mp3', // URL de la deuxième liste
    text: {
      pt: 'Bom dia! Como você está? Meu nome é Maria. Prazer em conhecê-lo!',
      cv: 'Bon dia! Kuma ku bu sta? Nha nómi é Maria. Prazer em konxe-lu!'
    },
    difficulty: 'easy',
    completed: false // Ajouté
  },
  {
    id: 4, // Nouvel ID unique
    type: 'dictation', // Ajouté
    title: {
      pt: 'No Restaurante',
      cv: 'Na Restoranti'
    },
    // description est optionnel
    instructions: {
      pt: 'Ouça o diálogo e escreva o que você ouve em crioulo cabo-verdiano.',
      cv: 'Ouba diálogu i skrebe kuza ki bu oi na kriolu kabuverdianu.'
    },
    audioUrl: '/audio/dictation2.mp3', // URL de la deuxième liste
    text: {
      pt: 'Boa noite! Uma mesa para dois, por favor. O que você recomenda? Quero experimentar a cachupa. Ótima escolha! Vou trazer sua bebida em um instante.',
      cv: 'Boa noiti! Uma meza pa dôs, pa favor. Kuma ki bu rekomenda? N kere prova katchupa. Ótima skolha! N ta trase bo bebida num intantu.'
    },
    difficulty: 'medium',
    completed: false // Ajouté
  }
];


// Fonction utilitaire pour gérer la progression des exercices
export const saveProgress = (progress: ExerciseProgress) => {
  try {
    const progressData = localStorage.getItem('exerciseProgress');
    let progressArray: ExerciseProgress[] = [];
    
    if (progressData) {
      progressArray = JSON.parse(progressData);
    }
    
    // Mettre à jour ou ajouter la progression
    const existingIndex = progressArray.findIndex(
      p => p.exerciseId === progress.exerciseId && p.exerciseType === progress.exerciseType
    );
    
    if (existingIndex >= 0) {
      progressArray[existingIndex] = progress;
    } else {
      progressArray.push(progress);
    }
    
    localStorage.setItem('exerciseProgress', JSON.stringify(progressArray));
    return true;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de la progression:', error);
    return false;
  }
};

export const getProgress = (exerciseId: number, exerciseType: ExerciseProgress['exerciseType']) => {
  try {
    const progressData = localStorage.getItem('exerciseProgress');
    if (!progressData) return null;
    
    const progressArray: ExerciseProgress[] = JSON.parse(progressData);
    return progressArray.find(
      p => p.exerciseId === exerciseId && p.exerciseType === exerciseType
    ) || null;
  } catch (error) {
    console.error('Erreur lors de la récupération de la progression:', error);
    return null;
  }
};

export const grammarExercises: GrammarExercise[] = [
  {
    id: 1,
    title: {
      pt: 'Família e Relacionamentos',
      cv: 'Família y Relasionamentu'
    },
    instructions: {
      pt: 'Complete as frases com a palavra correta em crioulo cabo-verdiano.',
      cv: 'Kumpleta frasis ku palavra koretu na kriolu kabuverdianu.'
    },
    questions: [
      {
        id: 1,
        question: {
          pt: 'O irmão do meu pai é meu ______.',
          cv: 'Irmon di nha pai é nha ______.'
        },
        answer: {
          pt: 'tio',
          cv: 'tio'
        }
      },
      {
        id: 2,
        question: {
          pt: 'A filha do meu tio é minha ______.',
          cv: 'Fidja di nha tio é nha ______.'
        },
        answer: {
          pt: 'prima',
          cv: 'prima'
        }
      },
      {
        id: 3,
        question: {
          pt: 'A mãe do meu pai é minha ______.',
          cv: 'Mai di nha pai é nha ______.'
        },
        answer: {
          pt: 'avó',
          cv: 'vó'
        }
      }
    ]
  },
  {
    id: 2,
    title: {
      pt: 'Cores e Descrições',
      cv: 'Kor y Deskrison'
    },
    instructions: {
      pt: 'Traduza as frases para o crioulo cabo-verdiano.',
      cv: 'Traduz frasis pa kriolu kabuverdianu.'
    },
    questions: [
      {
        id: 1,
        question: {
          pt: 'O céu é azul.',
          cv: 'Seu é ______.'
        },
        answer: {
          pt: 'azul',
          cv: 'azul'
        }
      },
      {
        id: 2,
        question: {
          pt: 'As rosas são vermelhas.',
          cv: 'Rosas é ______.'
        },
        answer: {
          pt: 'vermelhu',
          cv: 'vermelhu'
        }
      },
      {
        id: 3,
        question: {
          pt: 'A relva é verde.',
          cv: 'Mato é ______.'
        },
        answer: {
          pt: 'verde',
          cv: 'verdi'
        }
      }
    ]
  },
  {
    id: 3,
    title: {
      pt: 'Verbos Comuns',
      cv: 'Verbu Kumun'
    },
    instructions: {
      pt: 'Complete as frases com o verbo correto em crioulo.',
      cv: 'Kumpleta frasis ku verbu koretu na kriolu.'
    },
    questions: [
      {
        id: 1,
        question: {
          pt: 'Eu ______ (comer) arroz todos os dias.',
          cv: 'N ______ (kume) arus tudu dia.'
        },
        answer: {
          pt: 'como',
          cv: 'kume'
        }
      },
      {
        id: 2,
        question: {
          pt: 'Nós ______ (beber) água.',
          cv: 'Nu ______ (beve) águ.'
        },
        answer: {
          pt: 'bebemos',
          cv: 'beve'
        }
      },
      {
        id: 3,
        question: {
          pt: 'Ela ______ (dormir) cedo.',
          cv: 'El ______ (drumi) sedu.'
        },
        answer: {
          pt: 'dorme',
          cv: 'drumi'
        }
      }
    ]
  },
  {
    id: 4,
    title: {
      pt: 'Expressões Úteis',
      cv: 'Espresson Útil'
    },
    instructions: {
      pt: 'Complete as expressões em crioulo cabo-verdiano.',
      cv: 'Kumpleta espresson na kriolu kabuverdianu.'
    },
    questions: [
      {
        id: 1,
        question: {
          pt: 'Como você está?',
          cv: '______?'
        },
        answer: {
          pt: 'Kuma ku bu sta?',
          cv: 'Kuma ku bu sta?'
        }
      },
      {
        id: 2,
        question: {
          pt: 'Qual é o seu nome?',
          cv: '______?'
        },
        answer: {
          pt: 'Kuma ki bu yama?',
          cv: 'Kuma ki bu yama?'
        }
      },
      {
        id: 3,
        question: {
          pt: 'Obrigado(a)!',
          cv: '______!'
        },
        answer: {
          pt: 'Obrigadu(a)!',
          cv: 'Obrigadu(a)!'
        }
      }
    ]
  }
];

export const roleplays: Roleplay[] = [
  {
    id: 1,
    title: {
      pt: 'Primeira Visita',
      cv: 'Primeru Vizita'
    },
    scenario: {
      pt: 'Você está fazendo uma primeira visita a uma casa. Pratique apresentar um texto bíblico e fazer uma pergunta.',
      cv: 'Bu sta faze un primeru vizita na un kaza. Pratika apresenta un téstu bíbliku y faze un pergunta.'
    },
    conversation: [
      {
        speaker: 'publisher',
        text: {
          pt: 'Bom dia! Meu nome é [seu nome]. Estou visitando os moradores da área para falar sobre uma mensagem de esperança da Bíblia. Você teria alguns minutos?',
          cv: 'Bon dia! Nha nomi é [bu nomi]. N sta vizita moradoris di área pa papia sobri un mensaji di speransa di Bíblia. Bu teni alguns minutu?'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Sim, alguns minutos.',
          cv: 'Sin, alguns minutu.'
        }
      },
      {
        speaker: 'publisher',
        text: {
          pt: 'Obrigado. Muitas pessoas estão preocupadas com o futuro e com os problemas que vemos no mundo. A Bíblia nos dá uma esperança maravilhosa. Em Apocalipse 21:4, lemos: "E enxugará dos seus olhos toda lágrima, e não haverá mais morte, nem haverá mais tristeza, nem clamor, nem dor, porque as primeiras coisas passaram." O que você acha dessa promessa?',
          cv: 'Obrigadu. Txeu pesoas sta preokupadu ku futuru y ku problemas ki nu ta odja na mundu. Bíblia ta da-nu un speransa maravilhozu. Na Apokalipsi 21:4, nu ta le: "E ta enxuga tudu lágrima di ses odju, e ka ta ten más morti, nen tristeza, nen gritu, nen dor, pamodi kes kuzas di antis dja pasa." Kuze ki bu ta atxa des promesa?'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Parece bom, mas é difícil acreditar que isso vai acontecer um dia.',
          cv: 'Ta parse bon, mas é difísil kredita ma kel-li ta kontisi un dia.'
        }
      },
      {
        speaker: 'publisher',
        text: {
          pt: 'Entendo sua preocupação. Muitas pessoas se sentem assim. Mas a Bíblia nos dá razões para confiar que Deus cumprirá suas promessas. Posso voltar outro dia e mostrar o que a Bíblia diz sobre por que podemos confiar nas promessas de Deus?',
          cv: 'N ta entendi bu preokupason. Txeu pesoas ta sinti asin. Mas Bíblia ta da-nu razon pa konfia ma Deus ta kumpri si promesas. N pode volta otu dia y mostra kuze ki Bíblia ta fla sobri pamodi ki nu pode konfia na promesas di Deus?'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Sim, pode voltar.',
          cv: 'Sin, bu pode volta.'
        }
      }
    ]
  },
  {
    id: 2,
    title: {
      pt: 'Revisita com Oferta de Estudo Bíblico',
      cv: 'Revizita ku Oferta di Studu Bíbliku'
    },
    scenario: {
      pt: 'Você está fazendo uma revisita e quer oferecer um estudo bíblico.',
      cv: 'Bu sta faze un revizita y bu kre oferese un studu bíbliku.'
    },
    conversation: [
      {
        speaker: 'publisher',
        text: {
          pt: 'Bom dia! Sou [seu nome], estive aqui na semana passada e conversamos sobre a promessa de Deus de acabar com o sofrimento. Você se lembra?',
          cv: 'Bon dia! Mi é [bu nomi], N staba li na simana pasadu y nu konversa sobri promesa di Deus di kaba ku sufrimentu. Bu ta lembra?'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Sim, me lembro. Você falou sobre Apocalipse.',
          cv: 'Sin, N ta lembra. Bu fala sobri Apokalipsi.'
        }
      },
      {
        speaker: 'publisher',
        text: {
          pt: 'Exatamente! Hoje eu trouxe esta publicação que explica por que podemos confiar nas promessas de Deus. Ela usa a Bíblia para responder perguntas importantes. Muitas pessoas gostam de estudar a Bíblia usando este material. Poderíamos começar um estudo hoje, se você tiver interesse.',
          cv: 'Ezatamenti! Oji N traze es publikason ki ta splika pamodi ki nu pode konfia na promesas di Deus. El ta uza Bíblia pa responde perguntas importanti. Txeu pesoas ta gosta di studa Bíblia uzandu es material. Nu podia komesa un studu oji, si bu tiver interesi.'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Como funciona esse estudo?',
          cv: 'Modi ki es studu ta funsiona?'
        }
      },
      {
        speaker: 'publisher',
        text: {
          pt: 'É bem simples. Podemos nos encontrar uma vez por semana, por cerca de 30 minutos. Lemos juntos um parágrafo da publicação, depois a pergunta abaixo do parágrafo, e então procuramos a resposta na Bíblia. Não custa nada e podemos fazer no horário que for melhor para você.',
          cv: 'É ben simplis. Nu pode encontra un vez pa simana, pa serka di 30 minutu. Nu ta le djuntu un parágrafu di publikason, dipos pergunta dibaxu di parágrafu, y anton nu ta buska resposta na Bíblia. Ka ta kusta nada y nu pode faze na horário ki for midjor pa bo.'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Isso parece interessante. Podemos tentar.',
          cv: 'Kel-li ta parse interesanti. Nu pode tenta.'
        }
      }
    ]
  }
];
