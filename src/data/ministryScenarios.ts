import type { MinistryScenario } from '@/types/dialogue';

/**
 * 10 scénarios de prédication réalistes (base pour 50 scénarios)
 * Couvre: première visite, visite de retour, étude biblique, témoignage informel
 */

export const ministryScenarios: MinistryScenario[] = [
  // PREMIÈRE VISITE - Niveau Facile
  {
    id: 'scenario-first-visit-1',
    title: {
      pt: 'Primeira Visita - Apresentação Simples',
      kea: 'Primeiru Vizita - Aprezentason Sinpli'
    },
    description: {
      pt: 'Uma apresentação básica na porta, oferecendo uma revista',
      kea: 'Un aprezentason báziku na porta, ofresend un revista'
    },
    type: 'first_visit',
    difficulty: 'easy',
    category: 'introduction',
    dialogue: [
      {
        speaker: 'preacher',
        text: {
          pt: 'Bom dia! Como está?',
          kea: 'Bon dia! Modi ki bu sta?'
        },
        notes: {
          pt: 'Sempre comece com uma saudação amigável',
          kea: 'Sempre kumesa ku un saudason amigável'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Bom dia. Estou bem, obrigado.',
          kea: 'Bon dia. N sta bon, obrigadu.'
        }
      },
      {
        speaker: 'preacher',
        text: {
          pt: 'Meu nome é João. Estou visitando os vizinhos para compartilhar uma mensagem de esperança.',
          kea: 'N nomi é João. N sta vizita vizinhu pa partilha un mensaji di speransa.'
        },
        notes: {
          pt: 'Apresente-se e explique brevemente o propósito',
          kea: 'Aprezenta-bu i splika brevimenti propózitu'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Ah, entendo. Que tipo de mensagem?',
          kea: 'Ah, N ta intende. Ki tipu di mensaji?'
        }
      },
      {
        speaker: 'preacher',
        text: {
          pt: 'A Bíblia fala sobre um futuro melhor. Gostaria de ler um versículo rápido?',
          kea: 'Bíblia ta fla sobri un futuru medjor. Bu ta gosta di le un versíkulu rápidu?'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Sim, pode ler.',
          kea: 'Sin, pode le.'
        }
      },
      {
        speaker: 'preacher',
        text: {
          pt: 'Obrigado! Aqui está uma revista que explica mais. Posso voltar na próxima semana?',
          kea: 'Obrigadu! Li sta un revista ki ta splika más. N pode volta na próximu simana?'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Sim, pode voltar.',
          kea: 'Sin, pode volta.'
        }
      }
    ],
    vocabulary: [
      {
        word: 'vizinhu',
        translation: { pt: 'vizinho', kea: 'vizinhu' }
      },
      {
        word: 'mensaji',
        translation: { pt: 'mensagem', kea: 'mensaji' }
      },
      {
        word: 'speransa',
        translation: { pt: 'esperança', kea: 'speransa' }
      },
      {
        word: 'versíkulu',
        translation: { pt: 'versículo', kea: 'versíkulu' }
      }
    ],
    tips: [
      {
        pt: 'Sorria e seja amigável',
        kea: 'Sorri i é amigável'
      },
      {
        pt: 'Fale devagar e claramente',
        kea: 'Fla divagar i klaramenti'
      },
      {
        pt: 'Ofereça a publicação com confiança',
        kea: 'Ofrese publikason ku konfiansa'
      }
    ]
  },

  // VISITE DE RETOUR - Niveau Moyen
  {
    id: 'scenario-return-visit-1',
    title: {
      pt: 'Visita de Retorno - Discussão sobre Sofrimento',
      kea: 'Vizita di Retornu - Diskuson sobri Sofrinentu'
    },
    description: {
      pt: 'Segunda visita, discutindo por que há sofrimento',
      kea: 'Segunda vizita, diskutind pamodi ten sofrinentu'
    },
    type: 'return_visit',
    difficulty: 'medium',
    category: 'common_topics',
    dialogue: [
      {
        speaker: 'preacher',
        text: {
          pt: 'Olá! Lembra de mim? Voltei como prometido.',
          kea: 'Olá! Bu ta lenbra di mi? N volta modi N promete.'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Sim, lembro. Entre, por favor.',
          kea: 'Sin, N ta lenbra. Intra, pur favor.'
        }
      },
      {
        speaker: 'preacher',
        text: {
          pt: 'Obrigado. Da última vez, falamos sobre esperança. Hoje gostaria de discutir: Por que há tanto sofrimento?',
          kea: 'Obrigadu. Di última bez, nu fla sobri speransa. Oji N ta gosta di diskuti: Pamodi ten tantu sofrinentu?'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Essa é uma boa pergunta. Eu sempre me pergunto isso.',
          kea: 'Kes é un bon pergunta. N sempre ta pergunta-m kes.'
        }
      },
      {
        speaker: 'preacher',
        text: {
          pt: 'A Bíblia explica que Deus não causa o sofrimento. Posso mostrar um versículo?',
          kea: 'Bíblia ta splika ki Deus ka ta kauza sofrinentu. N pode mostra un versíkulu?'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Sim, por favor.',
          kea: 'Sin, pur favor.'
        }
      },
      {
        speaker: 'preacher',
        text: {
          pt: 'Tiago 1:13 diz que Deus não tenta ninguém com coisas más. Ele quer o melhor para nós.',
          kea: 'Tiago 1:13 ta fla ki Deus ka ta tenta ninguén ku kusa mau. El ta kere medjor pa nos.'
        }
      },
      {
        speaker: 'householder',
        text: {
          pt: 'Isso faz sentido. Então por que permite?',
          kea: 'Kes ta faze sentidu. Entón pamodi ta permite?'
        }
      },
      {
        speaker: 'preacher',
        text: {
          pt: 'Ótima pergunta! Podemos discutir isso na próxima vez. Gostaria de marcar um horário?',
          kea: 'Ótimu pergunta! Nu pode diskuti kes na próximu bez. Bu ta gosta di marka un ora?'
        }
      }
    ],
    vocabulary: [
      {
        word: 'sofrinentu',
        translation: { pt: 'sofrimento', kea: 'sofrinentu' }
      },
      {
        word: 'kauza',
        translation: { pt: 'causar', kea: 'kauza' }
      },
      {
        word: 'permite',
        translation: { pt: 'permitir', kea: 'permite' }
      }
    ],
    tips: [
      {
        pt: 'Faça perguntas para envolver a pessoa',
        kea: 'Faze pergunta pa involve pésoa'
      },
      {
        pt: 'Use a Bíblia como autoridade',
        kea: 'Uza Bíblia modi autoridade'
      }
    ]
  },

  // ÉTUDE BIBLIQUE - Niveau Moyen
  {
    id: 'scenario-bible-study-1',
    title: {
      pt: 'Estudo Bíblico - Primeira Sessão',
      kea: 'Studu Bíbliku - Primeiru Seson'
    },
    description: {
      pt: 'Primeira sessão de estudo bíblico, estabelecendo rotina',
      kea: 'Primeiru seson di studu bíbliku, stabelesend rotina'
    },
    type: 'bible_study',
    difficulty: 'medium',
    category: 'bible_study',
    dialogue: [
      {
        speaker: 'teacher',
        text: {
          pt: 'Obrigado por aceitar estudar a Bíblia comigo!',
          kea: 'Obrigadu pa aseta studa Bíblia ku mi!'
        }
      },
      {
        speaker: 'student',
        text: {
          pt: 'Estou animado para aprender.',
          kea: 'N sta animadu pa prende.'
        }
      },
      {
        speaker: 'teacher',
        text: {
          pt: 'Ótimo! Vamos começar com uma oração?',
          kea: 'Ótimu! Nu ta kumesa ku un orason?'
        }
      },
      {
        speaker: 'student',
        text: {
          pt: 'Sim, por favor.',
          kea: 'Sin, pur favor.'
        }
      },
      {
        speaker: 'teacher',
        text: {
          pt: 'Hoje vamos ler o parágrafo 1. Pode ler, por favor?',
          kea: 'Oji nu ta le parágrafu 1. Bu pode le, pur favor?'
        }
      },
      {
        speaker: 'student',
        text: {
          pt: '[Lê o parágrafo]',
          kea: '[Ta le parágrafu]'
        }
      },
      {
        speaker: 'teacher',
        text: {
          pt: 'Muito bem! O que você aprendeu deste parágrafo?',
          kea: 'Muitu bon! Kuzê ki bu prende di kes parágrafu?'
        }
      },
      {
        speaker: 'student',
        text: {
          pt: 'Aprendi que Deus tem um nome.',
          kea: 'N prende ki Deus ten un nomi.'
        }
      },
      {
        speaker: 'teacher',
        text: {
          pt: 'Exatamente! E qual é o nome dele?',
          kea: 'Ezatamenti! I kal é nomi del?'
        }
      },
      {
        speaker: 'student',
        text: {
          pt: 'Jeová.',
          kea: 'Jeová.'
        }
      }
    ],
    vocabulary: [
      {
        word: 'studu',
        translation: { pt: 'estudo', kea: 'studu' }
      },
      {
        word: 'orason',
        translation: { pt: 'oração', kea: 'orason' }
      },
      {
        word: 'parágrafu',
        translation: { pt: 'parágrafo', kea: 'parágrafu' }
      }
    ],
    tips: [
      {
        pt: 'Sempre comece e termine com oração',
        kea: 'Sempre kumesa i termina ku orason'
      },
      {
        pt: 'Faça perguntas simples',
        kea: 'Faze pergunta sinpli'
      },
      {
        pt: 'Elogie as respostas',
        kea: 'Elogia resposta'
      }
    ]
  }
];

export function getScenarioById(id: string): MinistryScenario | undefined {
  return ministryScenarios.find(s => s.id === id);
}

export function getScenariosByType(type: string): MinistryScenario[] {
  return ministryScenarios.filter(s => s.type === type);
}

export function getScenariosByDifficulty(difficulty: string): MinistryScenario[] {
  return ministryScenarios.filter(s => s.difficulty === difficulty);
}
