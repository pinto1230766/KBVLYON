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

export const quizQuestions: QuizQuestion[] = [
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