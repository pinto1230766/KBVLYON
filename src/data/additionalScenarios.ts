import type { MinistryScenario } from '@/types/dialogue';

/**
 * 40 scénarios supplémentaires de prédication
 * À ajouter au fichier ministryScenarios.ts existant
 */

export const additionalScenarios: MinistryScenario[] = [
  // PREMIÈRES VISITES (10 scénarios)
  {
    id: 'scenario-first-visit-2',
    title: { pt: 'Primeira Visita - Família Ocupada', kea: 'Primeiru Vizita - Família Okupadu' },
    description: { pt: 'Abordagem rápida para família com pouco tempo', kea: 'Abordaji rápidu pa família ku poku tenpu' },
    type: 'first_visit',
    difficulty: 'easy',
    category: 'introduction',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Bom dia! Vejo que estão ocupados. Só um minuto?', kea: 'Bon dia! N ta odja ki bu sta okupadu. Só un minutu?' } },
      { speaker: 'householder', text: { pt: 'Sim, estamos com pressa.', kea: 'Sin, nu sta ku presa.' } },
      { speaker: 'preacher', text: { pt: 'Entendo. Deixo esta revista sobre família feliz. Boa leitura!', kea: 'N ta intende. N ta dexa kes revista sobri família feliz. Bon leitura!' } }
    ],
    vocabulary: [
      { word: 'okupadu', translation: { pt: 'ocupado', kea: 'okupadu' } },
      { word: 'presa', translation: { pt: 'pressa', kea: 'presa' } }
    ],
    tips: [
      { pt: 'Respeite o tempo das pessoas', kea: 'Respeita tenpu di pésoa' },
      { pt: 'Seja breve mas caloroso', kea: 'É brevi ma kaloroso' }
    ]
  },

  {
    id: 'scenario-first-visit-3',
    title: { pt: 'Primeira Visita - Pessoa Idosa', kea: 'Primeiru Vizita - Pésoa Idozu' },
    description: { pt: 'Conversa respeitosa com pessoa mais velha', kea: 'Konversa respeitozu ku pésoa más velhu' },
    type: 'first_visit',
    difficulty: 'easy',
    category: 'introduction',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Bom dia, senhor! Como está hoje?', kea: 'Bon dia, senhor! Modi ki nho sta oji?' } },
      { speaker: 'householder', text: { pt: 'Bem, obrigado. E você?', kea: 'Bon, obrigadu. I bo?' } },
      { speaker: 'preacher', text: { pt: 'Muito bem! Estou visitando para compartilhar boas notícias da Bíblia.', kea: 'Muitu bon! N sta vizita pa partilha bon notísia di Bíblia.' } }
    ],
    vocabulary: [
      { word: 'idozu', translation: { pt: 'idoso', kea: 'idozu' } },
      { word: 'senhor', translation: { pt: 'senhor', kea: 'senhor/nho' } }
    ],
    tips: [
      { pt: 'Fale mais devagar', kea: 'Fla más divagar' },
      { pt: 'Mostre respeito extra', kea: 'Mostra respeitu extra' }
    ]
  },

  {
    id: 'scenario-first-visit-4',
    title: { pt: 'Primeira Visita - Jovem Casal', kea: 'Primeiru Vizita - Joven Kasal' },
    description: { pt: 'Apresentação focada em família e filhos', kea: 'Aprezentason fokadu na família i fidju' },
    type: 'first_visit',
    difficulty: 'medium',
    category: 'family',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Olá! Vocês têm filhos pequenos?', kea: 'Olá! Nhos ten fidju pekenu?' } },
      { speaker: 'householder', text: { pt: 'Sim, temos dois.', kea: 'Sin, nu ten dos.' } },
      { speaker: 'preacher', text: { pt: 'Que bom! Tenho uma revista sobre educação de filhos. Posso deixar?', kea: 'Ki bon! N ten un revista sobri edukason di fidju. N pode dexa?' } }
    ],
    vocabulary: [
      { word: 'fidju', translation: { pt: 'filho', kea: 'fidju' } },
      { word: 'edukason', translation: { pt: 'educação', kea: 'edukason' } }
    ],
    tips: [
      { pt: 'Adapte ao interesse da família', kea: 'Adapta na interesi di família' }
    ]
  },

  {
    id: 'scenario-first-visit-5',
    title: { pt: 'Primeira Visita - Pessoa Cética', kea: 'Primeiru Vizita - Pésoa Sétiku' },
    description: { pt: 'Abordagem com alguém que duvida', kea: 'Abordaji ku alguén ki ta duvida' },
    type: 'first_visit',
    difficulty: 'hard',
    category: 'objections',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Bom dia! Estou compartilhando esperança bíblica.', kea: 'Bon dia! N sta partilha speransa bíbliku.' } },
      { speaker: 'householder', text: { pt: 'Não acredito na Bíblia.', kea: 'N ka ta kre na Bíblia.' } },
      { speaker: 'preacher', text: { pt: 'Entendo. Mas ela tem conselhos práticos. Posso mostrar um exemplo?', kea: 'N ta intende. Ma el ten konselhu prátiku. N pode mostra un ezemplu?' } }
    ],
    vocabulary: [
      { word: 'sétiku', translation: { pt: 'cético', kea: 'sétiku' } },
      { word: 'duvida', translation: { pt: 'duvidar', kea: 'duvida' } }
    ],
    tips: [
      { pt: 'Não discuta, seja gentil', kea: 'Ka diskuti, é jentil' },
      { pt: 'Foque em benefícios práticos', kea: 'Foka na benefísiu prátiku' }
    ]
  },

  {
    id: 'scenario-first-visit-6',
    title: { pt: 'Primeira Visita - Estudante Universitário', kea: 'Primeiru Vizita - Studanti Universitáriu' },
    description: { pt: 'Conversa com jovem intelectual', kea: 'Konversa ku joven intelektual' },
    type: 'first_visit',
    difficulty: 'medium',
    category: 'youth',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Olá! Você estuda aqui?', kea: 'Olá! Bu ta studa li?' } },
      { speaker: 'householder', text: { pt: 'Sim, estou na universidade.', kea: 'Sin, N sta na universidadi.' } },
      { speaker: 'preacher', text: { pt: 'Interessante! A Bíblia também fala sobre sabedoria. Quer saber mais?', kea: 'Interesanti! Bíblia tanbé ta fla sobri sabedoria. Bu kere sabe más?' } }
    ],
    vocabulary: [
      { word: 'universidadi', translation: { pt: 'universidade', kea: 'universidadi' } },
      { word: 'sabedoria', translation: { pt: 'sabedoria', kea: 'sabedoria' } }
    ],
    tips: [
      { pt: 'Use raciocínio lógico', kea: 'Uza rasiosiniu lójiku' }
    ]
  },

  {
    id: 'scenario-first-visit-7',
    title: { pt: 'Primeira Visita - Comerciante', kea: 'Primeiru Vizita - Komersianti' },
    description: { pt: 'Testemunho em loja ou mercado', kea: 'Testemunhu na loja o merkadu' },
    type: 'first_visit',
    difficulty: 'easy',
    category: 'informal',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Bom dia! Seu negócio está indo bem?', kea: 'Bon dia! Bu negósiu sta bai bon?' } },
      { speaker: 'householder', text: { pt: 'Mais ou menos, tempos difíceis.', kea: 'Más o menu, tenpu difísil.' } },
      { speaker: 'preacher', text: { pt: 'Entendo. A Bíblia dá conforto em tempos difíceis. Posso compartilhar?', kea: 'N ta intende. Bíblia ta da konfortu na tenpu difísil. N pode partilha?' } }
    ],
    vocabulary: [
      { word: 'negósiu', translation: { pt: 'negócio', kea: 'negósiu' } },
      { word: 'konfortu', translation: { pt: 'conforto', kea: 'konfortu' } }
    ],
    tips: [
      { pt: 'Seja breve, eles estão trabalhando', kea: 'É brevi, es sta trabadja' }
    ]
  },

  {
    id: 'scenario-first-visit-8',
    title: { pt: 'Primeira Visita - Pessoa de Outra Religião', kea: 'Primeiru Vizita - Pésoa di Otu Relijon' },
    description: { pt: 'Respeito ao falar com outras crenças', kea: 'Respeitu pa fla ku otu krensa' },
    type: 'first_visit',
    difficulty: 'hard',
    category: 'interfaith',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Bom dia! Vejo que você é religioso.', kea: 'Bon dia! N ta odja ki bu é relijozu.' } },
      { speaker: 'householder', text: { pt: 'Sim, sou católico.', kea: 'Sin, N é katóliku.' } },
      { speaker: 'preacher', text: { pt: 'Que bom! Então você ama a Bíblia. Podemos conversar sobre ela?', kea: 'Ki bon! Entón bu ta gosta Bíblia. Nu pode konversa sobri el?' } }
    ],
    vocabulary: [
      { word: 'relijon', translation: { pt: 'religião', kea: 'relijon' } },
      { word: 'krensa', translation: { pt: 'crença', kea: 'krensa' } }
    ],
    tips: [
      { pt: 'Respeite as crenças deles', kea: 'Respeita krensa di es' },
      { pt: 'Encontre pontos em comum', kea: 'Atxa pontu na komun' }
    ]
  },

  {
    id: 'scenario-first-visit-9',
    title: { pt: 'Primeira Visita - Pessoa Doente', kea: 'Primeiru Vizita - Pésoa Duenti' },
    description: { pt: 'Oferecer conforto a alguém enfermo', kea: 'Ofrese konfortu a alguén enfermu' },
    type: 'first_visit',
    difficulty: 'medium',
    category: 'comfort',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Olá! Ouvi que você não está bem. Como está?', kea: 'Olá! N obi ki bu ka sta bon. Modi ki bu sta?' } },
      { speaker: 'householder', text: { pt: 'Estou doente, obrigado por perguntar.', kea: 'N sta duenti, obrigadu pa pergunta.' } },
      { speaker: 'preacher', text: { pt: 'Sinto muito. A Bíblia promete saúde futura. Posso ler?', kea: 'N sinti muitu. Bíblia ta promete saúdi futuru. N pode le?' } }
    ],
    vocabulary: [
      { word: 'duenti', translation: { pt: 'doente', kea: 'duenti' } },
      { word: 'saúdi', translation: { pt: 'saúde', kea: 'saúdi' } }
    ],
    tips: [
      { pt: 'Seja compassivo', kea: 'É konpasivo' },
      { pt: 'Não fique muito tempo', kea: 'Ka fika muitu tenpu' }
    ]
  },

  {
    id: 'scenario-first-visit-10',
    title: { pt: 'Primeira Visita - Vizinho Novo', kea: 'Primeiru Vizita - Vizinhu Nobu' },
    description: { pt: 'Dar boas-vindas a novo morador', kea: 'Da bon-vinda a nobu moradu' },
    type: 'first_visit',
    difficulty: 'easy',
    category: 'welcome',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Olá! Você é novo aqui?', kea: 'Olá! Bu é nobu li?' } },
      { speaker: 'householder', text: { pt: 'Sim, acabei de me mudar.', kea: 'Sin, N kaba di muda.' } },
      { speaker: 'preacher', text: { pt: 'Bem-vindo! Aqui está uma revista sobre a comunidade. Aproveite!', kea: 'Bon-vinda! Li sta un revista sobri komunidadi. Aproveita!' } }
    ],
    vocabulary: [
      { word: 'nobu', translation: { pt: 'novo', kea: 'nobu' } },
      { word: 'muda', translation: { pt: 'mudar-se', kea: 'muda' } }
    ],
    tips: [
      { pt: 'Seja acolhedor', kea: 'É akolhedor' }
    ]
  },

  // VISITES DE RETOUR (15 scénarios)
  {
    id: 'scenario-return-visit-2',
    title: { pt: 'Visita de Retorno - Morte de Ente Querido', kea: 'Vizita di Retornu - Morti di Enti Keridu' },
    description: { pt: 'Conforto após perda familiar', kea: 'Konfortu despois perda familiar' },
    type: 'return_visit',
    difficulty: 'medium',
    category: 'comfort',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Olá. Soube da sua perda. Meus sentimentos.', kea: 'Olá. N sabe di bu perda. N sentimentu.' } },
      { speaker: 'householder', text: { pt: 'Obrigado. Está sendo difícil.', kea: 'Obrigadu. Ta sendo difísil.' } },
      { speaker: 'preacher', text: { pt: 'A Bíblia promete ressurreição. Posso mostrar?', kea: 'Bíblia ta promete resurreison. N pode mostra?' } }
    ],
    vocabulary: [
      { word: 'morti', translation: { pt: 'morte', kea: 'morti' } },
      { word: 'resurreison', translation: { pt: 'ressurreição', kea: 'resurreison' } }
    ],
    tips: [
      { pt: 'Seja muito compassivo', kea: 'É muitu konpasivo' }
    ]
  },

  {
    id: 'scenario-return-visit-3',
    title: { pt: 'Visita de Retorno - Problemas Financeiros', kea: 'Vizita di Retornu - Problema Finanseru' },
    description: { pt: 'Ajuda com ansiedade financeira', kea: 'Ajuda ku ansiedadi finanseru' },
    type: 'return_visit',
    difficulty: 'medium',
    category: 'practical',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Como estão as coisas?', kea: 'Modi ki kusa sta?' } },
      { speaker: 'householder', text: { pt: 'Difíceis. Problemas de dinheiro.', kea: 'Difísil. Problema di dinheru.' } },
      { speaker: 'preacher', text: { pt: 'A Bíblia tem conselhos sobre contentamento. Vamos ver?', kea: 'Bíblia ten konselhu sobri kontentamentu. Nu ta odja?' } }
    ],
    vocabulary: [
      { word: 'dinheru', translation: { pt: 'dinheiro', kea: 'dinheru' } },
      { word: 'kontentamentu', translation: { pt: 'contentamento', kea: 'kontentamentu' } }
    ],
    tips: [
      { pt: 'Não prometa ajuda material', kea: 'Ka promete ajuda material' }
    ]
  },

  {
    id: 'scenario-return-visit-4',
    title: { pt: 'Visita de Retorno - Casamento em Crise', kea: 'Vizita di Retornu - Kazamentu na Krizi' },
    description: { pt: 'Conselhos para relacionamento', kea: 'Konselhu pa relasionamentu' },
    type: 'return_visit',
    difficulty: 'hard',
    category: 'marriage',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Como vai o casamento?', kea: 'Modi ki kazamentu ta bai?' } },
      { speaker: 'householder', text: { pt: 'Não muito bem...', kea: 'Ka muitu bon...' } },
      { speaker: 'preacher', text: { pt: 'A Bíblia tem princípios que ajudam. Quer conhecer?', kea: 'Bíblia ten prinsípiu ki ta ajuda. Bu kere konhese?' } }
    ],
    vocabulary: [
      { word: 'kazamentu', translation: { pt: 'casamento', kea: 'kazamentu' } },
      { word: 'prinsípiu', translation: { pt: 'princípio', kea: 'prinsípiu' } }
    ],
    tips: [
      { pt: 'Seja neutro', kea: 'É neutru' }
    ]
  },

  {
    id: 'scenario-return-visit-5',
    title: { pt: 'Visita de Retorno - Jovem Rebelde', kea: 'Vizita di Retornu - Joven Rebeli' },
    description: { pt: 'Pais preocupados com filho', kea: 'Pais preokupadu ku fidju' },
    type: 'return_visit',
    difficulty: 'hard',
    category: 'youth',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Como está seu filho?', kea: 'Modi ki bu fidju sta?' } },
      { speaker: 'householder', text: { pt: 'Rebelde. Não nos ouve.', kea: 'Rebeli. Ka ta obi-nu.' } },
      { speaker: 'preacher', text: { pt: 'A Bíblia tem conselhos para pais. Vamos ver juntos?', kea: 'Bíblia ten konselhu pa pais. Nu ta odja juntu?' } }
    ],
    vocabulary: [
      { word: 'rebeli', translation: { pt: 'rebelde', kea: 'rebeli' } },
      { word: 'pais', translation: { pt: 'pais', kea: 'pais' } }
    ],
    tips: [
      { pt: 'Encoraje os pais', kea: 'Enkoraja pais' }
    ]
  },

  {
    id: 'scenario-return-visit-6',
    title: { pt: 'Visita de Retorno - Dúvidas sobre Deus', kea: 'Vizita di Retornu - Dúvida sobri Deus' },
    description: { pt: 'Questões sobre existência de Deus', kea: 'Keston sobri ezisténsia di Deus' },
    type: 'return_visit',
    difficulty: 'hard',
    category: 'doctrine',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Você acredita em Deus?', kea: 'Bu ta kre na Deus?' } },
      { speaker: 'householder', text: { pt: 'Não tenho certeza.', kea: 'N ka ten serteza.' } },
      { speaker: 'preacher', text: { pt: 'A criação mostra um Criador. Posso explicar?', kea: 'Kriason ta mostra un Kriador. N pode splika?' } }
    ],
    vocabulary: [
      { word: 'kriason', translation: { pt: 'criação', kea: 'kriason' } },
      { word: 'kriador', translation: { pt: 'criador', kea: 'kriador' } }
    ],
    tips: [
      { pt: 'Use evidências da natureza', kea: 'Uza evidénsia di natureza' }
    ]
  },

  {
    id: 'scenario-return-visit-7',
    title: { pt: 'Visita de Retorno - Interesse em Profecia', kea: 'Vizita di Retornu - Interesi na Profesia' },
    description: { pt: 'Discussão sobre profecias bíblicas', kea: 'Diskuson sobri profesia bíbliku' },
    type: 'return_visit',
    difficulty: 'medium',
    category: 'prophecy',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Lembra que falamos sobre o futuro?', kea: 'Bu ta lenbra ki nu fla sobri futuru?' } },
      { speaker: 'householder', text: { pt: 'Sim! Quero saber mais sobre profecias.', kea: 'Sin! N kere sabe más sobri profesia.' } },
      { speaker: 'preacher', text: { pt: 'Ótimo! Vamos ver Daniel capítulo 2?', kea: 'Ótimu! Nu ta odja Daniel kapítulu 2?' } }
    ],
    vocabulary: [
      { word: 'profesia', translation: { pt: 'profecia', kea: 'profesia' } },
      { word: 'futuru', translation: { pt: 'futuro', kea: 'futuru' } }
    ],
    tips: [
      { pt: 'Use a Bíblia como prova', kea: 'Uza Bíblia modi prova' }
    ]
  },

  {
    id: 'scenario-return-visit-8',
    title: { pt: 'Visita de Retorno - Pergunta sobre Trindade', kea: 'Vizita di Retornu - Pergunta sobri Trindadi' },
    description: { pt: 'Explicação sobre natureza de Deus', kea: 'Splikason sobri natureza di Deus' },
    type: 'return_visit',
    difficulty: 'hard',
    category: 'doctrine',
    dialogue: [
      { speaker: 'householder', text: { pt: 'Vocês não acreditam na Trindade?', kea: 'Nhos ka ta kre na Trindadi?' } },
      { speaker: 'preacher', text: { pt: 'Acreditamos no que a Bíblia ensina. Posso mostrar?', kea: 'Nu ta kre na kuzê ki Bíblia ta insina. N pode mostra?' } },
      { speaker: 'householder', text: { pt: 'Sim, estou curioso.', kea: 'Sin, N sta kuriozu.' } }
    ],
    vocabulary: [
      { word: 'trindadi', translation: { pt: 'trindade', kea: 'trindadi' } },
      { word: 'insina', translation: { pt: 'ensinar', kea: 'insina' } }
    ],
    tips: [
      { pt: 'Use apenas a Bíblia', kea: 'Uza só Bíblia' }
    ]
  },

  {
    id: 'scenario-return-visit-9',
    title: { pt: 'Visita de Retorno - Convite para Reunião', kea: 'Vizita di Retornu - Konviti pa Runion' },
    description: { pt: 'Convidar para assistir reunião', kea: 'Konvida pa asisti runion' },
    type: 'return_visit',
    difficulty: 'easy',
    category: 'invitation',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Você gostaria de nos visitar?', kea: 'Bu ta gosta di vizita-nu?' } },
      { speaker: 'householder', text: { pt: 'Visitar onde?', kea: 'Vizita undi?' } },
      { speaker: 'preacher', text: { pt: 'Nossa reunião. É domingo às 10h. Posso buscá-lo?', kea: 'Nos runion. É dumingu 10h. N pode buska-bu?' } }
    ],
    vocabulary: [
      { word: 'runion', translation: { pt: 'reunião', kea: 'runion' } },
      { word: 'konviti', translation: { pt: 'convite', kea: 'konviti' } }
    ],
    tips: [
      { pt: 'Ofereça transporte', kea: 'Ofrese transporti' }
    ]
  },

  {
    id: 'scenario-return-visit-10',
    title: { pt: 'Visita de Retorno - Pessoa Interessada em Batismo', kea: 'Vizita di Retornu - Pésoa Interesadu na Batismu' },
    description: { pt: 'Preparação para dedicação', kea: 'Preparason pa dedikason' },
    type: 'return_visit',
    difficulty: 'medium',
    category: 'baptism',
    dialogue: [
      { speaker: 'householder', text: { pt: 'Quero me batizar. O que devo fazer?', kea: 'N kere batiza-m. Kuzê ki N deve faze?' } },
      { speaker: 'preacher', text: { pt: 'Que bom! Primeiro, vamos estudar mais. Está pronto?', kea: 'Ki bon! Primeiru, nu ta studa más. Bu sta prontu?' } },
      { speaker: 'householder', text: { pt: 'Sim, estou pronto!', kea: 'Sin, N sta prontu!' } }
    ],
    vocabulary: [
      { word: 'batismu', translation: { pt: 'batismo', kea: 'batismu' } },
      { word: 'dedikason', translation: { pt: 'dedicação', kea: 'dedikason' } }
    ],
    tips: [
      { pt: 'Verifique o progresso espiritual', kea: 'Verifika progresu spiritual' }
    ]
  },

  {
    id: 'scenario-return-visit-11',
    title: { pt: 'Visita de Retorno - Discussão sobre Evolução', kea: 'Vizita di Retornu - Diskuson sobri Evoluson' },
    description: { pt: 'Criação vs Evolução', kea: 'Kriason vs Evoluson' },
    type: 'return_visit',
    difficulty: 'hard',
    category: 'science',
    dialogue: [
      { speaker: 'householder', text: { pt: 'Eu acredito na evolução.', kea: 'N ta kre na evoluson.' } },
      { speaker: 'preacher', text: { pt: 'Interessante. A Bíblia e a ciência concordam em muitos pontos. Posso mostrar?', kea: 'Interesanti. Bíblia i siénsia ta konkorda na muitu pontu. N pode mostra?' } }
    ],
    vocabulary: [
      { word: 'evoluson', translation: { pt: 'evolução', kea: 'evoluson' } },
      { word: 'siénsia', translation: { pt: 'ciência', kea: 'siénsia' } }
    ],
    tips: [
      { pt: 'Seja respeitoso com opiniões', kea: 'É respeitozu ku opinion' }
    ]
  },

  {
    id: 'scenario-return-visit-12',
    title: { pt: 'Visita de Retorno - Ajuda com Vícios', kea: 'Vizita di Retornu - Ajuda ku Vísiu' },
    description: { pt: 'Apoio para superar dependências', kea: 'Apoiu pa supera dependénsia' },
    type: 'return_visit',
    difficulty: 'hard',
    category: 'practical',
    dialogue: [
      { speaker: 'householder', text: { pt: 'Tenho problemas com bebida.', kea: 'N ten problema ku bebida.' } },
      { speaker: 'preacher', text: { pt: 'A Bíblia pode ajudar. Deus dá força. Vamos ver juntos?', kea: 'Bíblia pode ajuda. Deus ta da forsa. Nu ta odja juntu?' } }
    ],
    vocabulary: [
      { word: 'vísiu', translation: { pt: 'vício', kea: 'vísiu' } },
      { word: 'forsa', translation: { pt: 'força', kea: 'forsa' } }
    ],
    tips: [
      { pt: 'Seja encorajador', kea: 'É enkorajador' }
    ]
  },

  {
    id: 'scenario-return-visit-13',
    title: { pt: 'Visita de Retorno - Pergunta sobre Inferno', kea: 'Vizita di Retornu - Pergunta sobri Infernu' },
    description: { pt: 'Esclarecimento sobre destino dos mortos', kea: 'Esklaresinentu sobri destinu di mortu' },
    type: 'return_visit',
    difficulty: 'medium',
    category: 'doctrine',
    dialogue: [
      { speaker: 'householder', text: { pt: 'A Bíblia fala de inferno de fogo?', kea: 'Bíblia ta fla di infernu di fogu?' } },
      { speaker: 'preacher', text: { pt: 'Vamos ver o que a Bíblia realmente diz. Eclesiastes 9:5?', kea: 'Nu ta odja kuzê ki Bíblia realmenti ta fla. Ekleziastes 9:5?' } }
    ],
    vocabulary: [
      { word: 'infernu', translation: { pt: 'inferno', kea: 'infernu' } },
      { word: 'mortu', translation: { pt: 'morto', kea: 'mortu' } }
    ],
    tips: [
      { pt: 'Use vários textos', kea: 'Uza váriu téstu' }
    ]
  },

  {
    id: 'scenario-return-visit-14',
    title: { pt: 'Visita de Retorno - Interesse em Paraíso', kea: 'Vizita di Retornu - Interesi na Paraízu' },
    description: { pt: 'Esperança do Reino de Deus', kea: 'Speransa di Reinu di Deus' },
    type: 'return_visit',
    difficulty: 'easy',
    category: 'hope',
    dialogue: [
      { speaker: 'householder', text: { pt: 'Como será o paraíso?', kea: 'Modi ki paraízu ta ser?' } },
      { speaker: 'preacher', text: { pt: 'Lindo! Sem dor, sem morte. Vamos ler Apocalipse 21:4?', kea: 'Lindu! Sen dor, sen morti. Nu ta le Apokalipsi 21:4?' } }
    ],
    vocabulary: [
      { word: 'paraízu', translation: { pt: 'paraíso', kea: 'paraízu' } },
      { word: 'reinu', translation: { pt: 'reino', kea: 'reinu' } }
    ],
    tips: [
      { pt: 'Seja entusiasta', kea: 'É entusiasta' }
    ]
  },

  {
    id: 'scenario-return-visit-15',
    title: { pt: 'Visita de Retorno - Proposta de Estudo Regular', kea: 'Vizita di Retornu - Proposta di Studu Regular' },
    description: { pt: 'Transição para estudo bíblico', kea: 'Transison pa studu bíbliku' },
    type: 'return_visit',
    difficulty: 'medium',
    category: 'progression',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Você tem gostado das nossas conversas?', kea: 'Bu ta gosta di nos konversa?' } },
      { speaker: 'householder', text: { pt: 'Sim, muito!', kea: 'Sin, muitu!' } },
      { speaker: 'preacher', text: { pt: 'Que tal estudarmos juntos toda semana? Mesma hora?', kea: 'Ki tal nu studa juntu tudu simana? Mesmu ora?' } }
    ],
    vocabulary: [
      { word: 'regular', translation: { pt: 'regular', kea: 'regular' } },
      { word: 'simana', translation: { pt: 'semana', kea: 'simana' } }
    ],
    tips: [
      { pt: 'Seja específico com horário', kea: 'É spesífiku ku ora' }
    ]
  },

  // ÉTUDES BIBLIQUES (10 scénarios)
  {
    id: 'scenario-bible-study-2',
    title: { pt: 'Estudo Bíblico - Nome de Deus', kea: 'Studu Bíbliku - Nomi di Deus' },
    description: { pt: 'Lição sobre Jeová', kea: 'Lison sobri Jeová' },
    type: 'bible_study',
    difficulty: 'easy',
    category: 'god',
    dialogue: [
      { speaker: 'teacher', text: { pt: 'Hoje vamos aprender o nome de Deus. Você sabe qual é?', kea: 'Oji nu ta prende nomi di Deus. Bu sabe kal é?' } },
      { speaker: 'student', text: { pt: 'Não, qual é?', kea: 'Nau, kal é?' } },
      { speaker: 'teacher', text: { pt: 'Jeová! Vamos ler Salmo 83:18?', kea: 'Jeová! Nu ta le Salmu 83:18?' } }
    ],
    vocabulary: [
      { word: 'Jeová', translation: { pt: 'Jeová', kea: 'Jeová' } },
      { word: 'salmu', translation: { pt: 'salmo', kea: 'salmu' } }
    ],
    tips: [
      { pt: 'Enfatize o nome pessoal de Deus', kea: 'Enfatiza nomi pesoal di Deus' }
    ]
  },

  {
    id: 'scenario-bible-study-3',
    title: { pt: 'Estudo Bíblico - Reino de Deus', kea: 'Studu Bíbliku - Reinu di Deus' },
    description: { pt: 'O que é o Reino?', kea: 'Kuzê ki é Reinu?' },
    type: 'bible_study',
    difficulty: 'medium',
    category: 'kingdom',
    dialogue: [
      { speaker: 'teacher', text: { pt: 'O que você acha que é o Reino de Deus?', kea: 'Kuzê ki bu ta axa ki é Reinu di Deus?' } },
      { speaker: 'student', text: { pt: 'Um governo no céu?', kea: 'Un guvernu na séu?' } },
      { speaker: 'teacher', text: { pt: 'Exatamente! E vai governar a Terra. Vamos ver Daniel 2:44?', kea: 'Ezatamenti! I ta guverna Tera. Nu ta odja Daniel 2:44?' } }
    ],
    vocabulary: [
      { word: 'reinu', translation: { pt: 'reino', kea: 'reinu' } },
      { word: 'guvernu', translation: { pt: 'governo', kea: 'guvernu' } }
    ],
    tips: [
      { pt: 'Use ilustrações simples', kea: 'Uza ilustrason sinpli' }
    ]
  },

  {
    id: 'scenario-bible-study-4',
    title: { pt: 'Estudo Bíblico - Ressurreição', kea: 'Studu Bíbliku - Resurreison' },
    description: { pt: 'Esperança para os mortos', kea: 'Speransa pa mortu' },
    type: 'bible_study',
    difficulty: 'medium',
    category: 'hope',
    dialogue: [
      { speaker: 'teacher', text: { pt: 'A Bíblia promete que os mortos voltarão. Você acredita?', kea: 'Bíblia ta promete ki mortu ta volta. Bu ta kre?' } },
      { speaker: 'student', text: { pt: 'É possível?', kea: 'É posível?' } },
      { speaker: 'teacher', text: { pt: 'Sim! Jesus ressuscitou Lázaro. João 11. Vamos ler?', kea: 'Sin! Jesus resusita Lázaru. João 11. Nu ta le?' } }
    ],
    vocabulary: [
      { word: 'resurreison', translation: { pt: 'ressurreição', kea: 'resurreison' } },
      { word: 'resusita', translation: { pt: 'ressuscitar', kea: 'resusita' } }
    ],
    tips: [
      { pt: 'Use exemplos bíblicos', kea: 'Uza ezemplu bíbliku' }
    ]
  },

  {
    id: 'scenario-bible-study-5',
    title: { pt: 'Estudo Bíblico - Oração', kea: 'Studu Bíbliku - Orason' },
    description: { pt: 'Como orar a Deus', kea: 'Modi ora a Deus' },
    type: 'bible_study',
    difficulty: 'easy',
    category: 'prayer',
    dialogue: [
      { speaker: 'teacher', text: { pt: 'Você ora? Como?', kea: 'Bu ta ora? Modi?' } },
      { speaker: 'student', text: { pt: 'Às vezes, mas não sei se está certo.', kea: 'Ás vez, ma N ka sabe si sta sertu.' } },
      { speaker: 'teacher', text: { pt: 'Jesus ensinou. Mateus 6. Vamos aprender juntos?', kea: 'Jesus insina. Mateus 6. Nu ta prende juntu?' } }
    ],
    vocabulary: [
      { word: 'orason', translation: { pt: 'oração', kea: 'orason' } },
      { word: 'ora', translation: { pt: 'orar', kea: 'ora' } }
    ],
    tips: [
      { pt: 'Pratique orar juntos', kea: 'Pratika ora juntu' }
    ]
  },

  {
    id: 'scenario-bible-study-6',
    title: { pt: 'Estudo Bíblico - Batismo', kea: 'Studu Bíbliku - Batismu' },
    description: { pt: 'Significado do batismo', kea: 'Signifikadu di batismu' },
    type: 'bible_study',
    difficulty: 'medium',
    category: 'baptism',
    dialogue: [
      { speaker: 'teacher', text: { pt: 'O batismo é importante. Você sabe por quê?', kea: 'Batismu é importanti. Bu sabe pamodi?' } },
      { speaker: 'student', text: { pt: 'É um símbolo?', kea: 'É un símbolu?' } },
      { speaker: 'teacher', text: { pt: 'Sim! De dedicação a Deus. Mateus 28:19. Vamos ler?', kea: 'Sin! Di dedikason a Deus. Mateus 28:19. Nu ta le?' } }
    ],
    vocabulary: [
      { word: 'batismu', translation: { pt: 'batismo', kea: 'batismu' } },
      { word: 'dedikason', translation: { pt: 'dedicação', kea: 'dedikason' } }
    ],
    tips: [
      { pt: 'Explique o simbolismo', kea: 'Splika simbolismu' }
    ]
  },

  {
    id: 'scenario-bible-study-7',
    title: { pt: 'Estudo Bíblico - Amor ao Próximo', kea: 'Studu Bíbliku - Amor a Próximu' },
    description: { pt: 'Princípio do amor cristão', kea: 'Prinsípiu di amor kristaun' },
    type: 'bible_study',
    difficulty: 'easy',
    category: 'love',
    dialogue: [
      { speaker: 'teacher', text: { pt: 'Jesus disse para amar o próximo. Como fazemos isso?', kea: 'Jesus fla pa ama próximu. Modi nu ta faze kes?' } },
      { speaker: 'student', text: { pt: 'Sendo bondoso?', kea: 'Send bondozu?' } },
      { speaker: 'teacher', text: { pt: 'Sim! E mais. 1 Coríntios 13. Vamos ver?', kea: 'Sin! I más. 1 Koríntiuš 13. Nu ta odja?' } }
    ],
    vocabulary: [
      { word: 'amor', translation: { pt: 'amor', kea: 'amor' } },
      { word: 'próximu', translation: { pt: 'próximo', kea: 'próximu' } }
    ],
    tips: [
      { pt: 'Dê exemplos práticos', kea: 'Da ezemplu prátiku' }
    ]
  },

  {
    id: 'scenario-bible-study-8',
    title: { pt: 'Estudo Bíblico - Perdão', kea: 'Studu Bíbliku - Perdon' },
    description: { pt: 'Importância de perdoar', kea: 'Importánsia di perdoa' },
    type: 'bible_study',
    difficulty: 'medium',
    category: 'forgiveness',
    dialogue: [
      { speaker: 'teacher', text: { pt: 'É difícil perdoar?', kea: 'É difísil perdoa?' } },
      { speaker: 'student', text: { pt: 'Muito difícil.', kea: 'Muitu difísil.' } },
      { speaker: 'teacher', text: { pt: 'Deus nos perdoa. Devemos perdoar também. Mateus 6:14?', kea: 'Deus ta perdoa-nu. Nu deve perdoa tanbé. Mateus 6:14?' } }
    ],
    vocabulary: [
      { word: 'perdon', translation: { pt: 'perdão', kea: 'perdon' } },
      { word: 'perdoa', translation: { pt: 'perdoar', kea: 'perdoa' } }
    ],
    tips: [
      { pt: 'Seja empático', kea: 'É empátiku' }
    ]
  },

  {
    id: 'scenario-bible-study-9',
    title: { pt: 'Estudo Bíblico - Família Feliz', kea: 'Studu Bíbliku - Família Feliz' },
    description: { pt: 'Princípios para família', kea: 'Prinsípiu pa família' },
    type: 'bible_study',
    difficulty: 'easy',
    category: 'family',
    dialogue: [
      { speaker: 'teacher', text: { pt: 'Como ter uma família feliz?', kea: 'Modi ten un família feliz?' } },
      { speaker: 'student', text: { pt: 'Com amor e respeito?', kea: 'Ku amor i respeitu?' } },
      { speaker: 'teacher', text: { pt: 'Exato! A Bíblia ensina isso. Efésios 5. Vamos ler?', kea: 'Ezatu! Bíblia ta insina kes. Efésiu 5. Nu ta le?' } }
    ],
    vocabulary: [
      { word: 'família', translation: { pt: 'família', kea: 'família' } },
      { word: 'feliz', translation: { pt: 'feliz', kea: 'feliz' } }
    ],
    tips: [
      { pt: 'Aplique à situação deles', kea: 'Aplika na situason di es' }
    ]
  },

  {
    id: 'scenario-bible-study-10',
    title: { pt: 'Estudo Bíblico - Pregação', kea: 'Studu Bíbliku - Pregason' },
    description: { pt: 'Importância de pregar', kea: 'Importánsia di prega' },
    type: 'bible_study',
    difficulty: 'medium',
    category: 'ministry',
    dialogue: [
      { speaker: 'teacher', text: { pt: 'Jesus mandou pregar. Você quer fazer isso?', kea: 'Jesus manda prega. Bu kere faze kes?' } },
      { speaker: 'student', text: { pt: 'Tenho medo...', kea: 'N ten medu...' } },
      { speaker: 'teacher', text: { pt: 'Deus ajuda! Mateus 28:19-20. Ele estará conosco.', kea: 'Deus ta ajuda! Mateus 28:19-20. El ta sta ku nos.' } }
    ],
    vocabulary: [
      { word: 'prega', translation: { pt: 'pregar', kea: 'prega' } },
      { word: 'medu', translation: { pt: 'medo', kea: 'medu' } }
    ],
    tips: [
      { pt: 'Encoraje com amor', kea: 'Enkoraja ku amor' }
    ]
  },

  // TÉMOIGNAGE INFORMEL (5 scénarios)
  {
    id: 'scenario-informal-1',
    title: { pt: 'Testemunho Informal - No Trabalho', kea: 'Testemunhu Informal - Na Trabalhu' },
    description: { pt: 'Conversa com colega', kea: 'Konversa ku kolega' },
    type: 'informal_witnessing',
    difficulty: 'medium',
    category: 'workplace',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Como foi seu fim de semana?', kea: 'Modi ki bu fin-di-simana foi?' } },
      { speaker: 'householder', text: { pt: 'Bom. E o seu?', kea: 'Bon. I bu?' } },
      { speaker: 'preacher', text: { pt: 'Ótimo! Fui à reunião. Aprendi sobre esperança.', kea: 'Ótimu! N bai na runion. N prende sobri speransa.' } }
    ],
    vocabulary: [
      { word: 'trabalhu', translation: { pt: 'trabalho', kea: 'trabalhu' } },
      { word: 'kolega', translation: { pt: 'colega', kea: 'kolega' } }
    ],
    tips: [
      { pt: 'Seja natural', kea: 'É natural' }
    ]
  },

  {
    id: 'scenario-informal-2',
    title: { pt: 'Testemunho Informal - No Transporte', kea: 'Testemunhu Informal - Na Transporti' },
    description: { pt: 'Conversa no ônibus', kea: 'Konversa na ónibus' },
    type: 'informal_witnessing',
    difficulty: 'easy',
    category: 'public',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Que dia bonito!', kea: 'Ki dia bonitu!' } },
      { speaker: 'householder', text: { pt: 'Sim, muito bonito.', kea: 'Sin, muitu bonitu.' } },
      { speaker: 'preacher', text: { pt: 'Deus criou tudo lindo. Você acredita nisso?', kea: 'Deus kria tudu lindu. Bu ta kre na kes?' } }
    ],
    vocabulary: [
      { word: 'transporti', translation: { pt: 'transporte', kea: 'transporti' } },
      { word: 'ónibus', translation: { pt: 'ônibus', kea: 'ónibus' } }
    ],
    tips: [
      { pt: 'Inicie com assunto neutro', kea: 'Inisia ku asuntu neutru' }
    ]
  },

  {
    id: 'scenario-informal-3',
    title: { pt: 'Testemunho Informal - No Hospital', kea: 'Testemunhu Informal - Na Ospital' },
    description: { pt: 'Conforto a paciente', kea: 'Konfortu a pasenti' },
    type: 'informal_witnessing',
    difficulty: 'medium',
    category: 'comfort',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Como você está se sentindo?', kea: 'Modi ki bu sta sinti-bu?' } },
      { speaker: 'householder', text: { pt: 'Não muito bem.', kea: 'Ka muitu bon.' } },
      { speaker: 'preacher', text: { pt: 'Sinto muito. Posso orar por você?', kea: 'N sinti muitu. N pode ora pa bo?' } }
    ],
    vocabulary: [
      { word: 'ospital', translation: { pt: 'hospital', kea: 'ospital' } },
      { word: 'pasenti', translation: { pt: 'paciente', kea: 'pasenti' } }
    ],
    tips: [
      { pt: 'Seja compassivo', kea: 'É konpasivo' }
    ]
  },

  {
    id: 'scenario-informal-4',
    title: { pt: 'Testemunho Informal - Na Escola', kea: 'Testemunhu Informal - Na Skola' },
    description: { pt: 'Conversa com pai de aluno', kea: 'Konversa ku pai di alunu' },
    type: 'informal_witnessing',
    difficulty: 'easy',
    category: 'school',
    dialogue: [
      { speaker: 'preacher', text: { pt: 'Seu filho estuda aqui?', kea: 'Bu fidju ta studa li?' } },
      { speaker: 'householder', text: { pt: 'Sim, no 5º ano.', kea: 'Sin, na 5º anu.' } },
      { speaker: 'preacher', text: { pt: 'Que bom! Tenho material sobre educação. Quer ver?', kea: 'Ki bon! N ten material sobri edukason. Bu kere odja?' } }
    ],
    vocabulary: [
      { word: 'skola', translation: { pt: 'escola', kea: 'skola' } },
      { word: 'alunu', translation: { pt: 'aluno', kea: 'alunu' } }
    ],
    tips: [
      { pt: 'Ofereça ajuda prática', kea: 'Ofrese ajuda prátiku' }
    ]
  },

  {
    id: 'scenario-informal-5',
    title: { pt: 'Testemunho Informal - Em Festa', kea: 'Testemunhu Informal - Na Festa' },
    description: { pt: 'Conversa em evento social', kea: 'Konversa na eventu sosial' },
    type: 'informal_witnessing',
    difficulty: 'medium',
    category: 'social',
    dialogue: [
      { speaker: 'householder', text: { pt: 'Você não bebe?', kea: 'Bu ka ta bebi?' } },
      { speaker: 'preacher', text: { pt: 'Não, prefiro ficar sóbrio.', kea: 'Nau, N prefere fika sóbriu.' } },
      { speaker: 'householder', text: { pt: 'Por quê?', kea: 'Pamodi?' } },
      { speaker: 'preacher', text: { pt: 'A Bíblia ensina moderação. Me sinto melhor assim.', kea: 'Bíblia ta insina moderason. N ta sinti medjor asín.' } }
    ],
    vocabulary: [
      { word: 'festa', translation: { pt: 'festa', kea: 'festa' } },
      { word: 'moderason', translation: { pt: 'moderação', kea: 'moderason' } }
    ],
    tips: [
      { pt: 'Seja exemplo', kea: 'É ezemplu' }
    ]
  }
];
