export interface LessonEnriched {
  id: number;
  title: {
    pt: string;
    cv: string;
  };
  description: {
    pt: string;
    cv: string;
  };
  content: {
    pt: string;
    cv: string;
  };
  vocabulary: Array<{
    cv: string;
    pt: string;
  }>;
  exercises: Array<{
    type: 'translation' | 'completion' | 'multiple_choice';
    question: {
      pt: string;
      cv: string;
    };
    options?: string[];
    answer: string;
  }>;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'basic' | 'conversation' | 'grammar' | 'ministry' | 'culture';
}

export const lessonsEnriched: LessonEnriched[] = [
  // BASIC - LIÇÕES BÁSICAS (5 leçons)
  {
    id: 1,
    level: 'beginner',
    category: 'basic',
    title: {
      pt: 'Primeiras Palavras em Crioulo',
      cv: 'Priméru Palavra na Kriolu'
    },
    description: {
      pt: 'Aprenda as primeiras palavras essenciais em crioulo cabo-verdiano para começar a comunicar.',
      cv: 'Aprende priméru palavra esensial na kriolu kabuverdianu pa kumesa komunika.'
    },
    content: {
      pt: 'Nesta lição, você aprenderá as palavras mais básicas e essenciais do crioulo cabo-verdiano. Estas palavras são fundamentais para qualquer conversa e são usadas diariamente pelos falantes nativos. É importante praticar a pronúncia correta desde o início.',
      cv: 'Na es lison, bu ba aprende palavra más báziku y esensial di kriolu kabuverdianu. Es palavra é fundamental pa kualker konversa y ta ser uzadu diáriamenti pa falanti nativu. É importanti pratika pronúnsia koretu dês di inísiu.'
    },
    vocabulary: [
      { cv: 'oi', pt: 'olá' },
      { cv: 'obrigadu', pt: 'obrigado' },
      { cv: 'deskulpa', pt: 'desculpa' },
      { cv: 'bon dia', pt: 'bom dia' },
      { cv: 'boa noiti', pt: 'boa noite' },
      { cv: 'té logu', pt: 'até logo' },
      { cv: 'sim', pt: 'sim' },
      { cv: 'nau', pt: 'não' },
      { cv: 'favor', pt: 'por favor' },
      { cv: 'kuma bu sta?', pt: 'como está?' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como se diz "olá" em crioulo?',
          cv: 'Kuma ki ta fala "olá" na kriolu?'
        },
        answer: 'oi'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Qual é a tradução de "obrigadu"?',
          cv: 'Kal é traduson di "obrigadu"?'
        },
        options: ['olá', 'obrigado', 'desculpa', 'tchau'],
        answer: 'obrigado'
      }
    ]
  },
  {
    id: 2,
    level: 'beginner',
    category: 'basic',
    title: {
      pt: 'Números e Quantidades',
      cv: 'Númeru y Kuantidadi'
    },
    description: {
      pt: 'Aprenda os números em crioulo e como expressar quantidades básicas.',
      cv: 'Aprende númeru na kriolu y kuma espresa kuantidadi báziku.'
    },
    content: {
      pt: 'Os números são essenciais para a comunicação diária. Em crioulo cabo-verdiano, o sistema numérico é similar ao português mas com algumas diferenças na pronúncia e escrita. Esta lição cobrirá números de 1 a 100 e expressões de quantidade.',
      cv: 'Númeru é esensial pa komunikason diáriu. Na kriolu kabuverdianu, sistema numériku é similar ku purtuges mas ku alguns diferensa na pronúnsia y skritu. Es lison ba kubri númeru di 1 pa 100 y espresão di kuantidadi.'
    },
    vocabulary: [
      { cv: 'un', pt: 'um' },
      { cv: 'dos', pt: 'dois' },
      { cv: 'tres', pt: 'três' },
      { cv: 'kuatu', pt: 'quatro' },
      { cv: 'sinku', pt: 'cinco' },
      { cv: 'seis', pt: 'seis' },
      { cv: 'seti', pt: 'sete' },
      { cv: 'oitu', pt: 'oito' },
      { cv: 'nóvi', pt: 'nove' },
      { cv: 'des', pt: 'dez' },
      { cv: 'txeu', pt: 'muito' },
      { cv: 'poku', pt: 'pouco' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como se escreve "cinco" em crioulo?',
          cv: 'Kuma ki ta skrebe "cinco" na kriolu?'
        },
        answer: 'sinku'
      },
      {
        type: 'completion',
        question: {
          pt: 'Complete: un, dos, ___',
          cv: 'Kompleta: un, dos, ___'
        },
        answer: 'tres'
      }
    ]
  },
  {
    id: 3,
    level: 'beginner',
    category: 'basic',
    title: {
      pt: 'Família e Relacionamentos',
      cv: 'Família y Relacionamentu'
    },
    description: {
      pt: 'Aprenda vocabulário sobre família e relacionamentos em crioulo cabo-verdiano.',
      cv: 'Aprende vokabuláriu sobri família y relacionamentu na kriolu kabuverdianu.'
    },
    content: {
      pt: 'A família é fundamental na cultura cabo-verdiana. Conhecer os termos de parentesco e relacionamentos é essencial para comunicar sobre pessoas importantes na sua vida. Esta lição apresenta vocabulário completo sobre família e relacionamentos.',
      cv: 'Família é fundamental na kultura kabuverdianu. Konxe termu di parentesku y relacionamentu é esensial pa komunika sobri pesoa importanti na bu vida. Es lison ta aprezenta vokabuláriu kompletu sobri família y relacionamentu.'
    },
    vocabulary: [
      { cv: 'pai', pt: 'pai' },
      { cv: 'mai', pt: 'mãe' },
      { cv: 'fidju', pt: 'filho' },
      { cv: 'fidja', pt: 'filha' },
      { cv: 'irmãu', pt: 'irmão' },
      { cv: 'irmã', pt: 'irmã' },
      { cv: 'avô', pt: 'avô' },
      { cv: 'avó', pt: 'avó' },
      { cv: 'tiu', pt: 'tio' },
      { cv: 'tia', pt: 'tia' },
      { cv: 'primu', pt: 'primo' },
      { cv: 'maridu', pt: 'marido' },
      { cv: 'mudjer', pt: 'mulher/esposa' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como se diz "minha família" em crioulo?',
          cv: 'Kuma ki ta fala "minha família" na kriolu?'
        },
        answer: 'nha família'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Qual é a tradução de "fidju"?',
          cv: 'Kal é traduson di "fidju"?'
        },
        options: ['pai', 'filho', 'irmão', 'tio'],
        answer: 'filho'
      }
    ]
  },
  {
    id: 4,
    level: 'beginner',
    category: 'basic',
    title: {
      pt: 'Cores e Objetos do Dia a Dia',
      cv: 'Kór y Objetu di Dia a Dia'
    },
    description: {
      pt: 'Vocabulário essencial sobre cores e objetos comuns do cotidiano.',
      cv: 'Vokabuláriu esensial sobri kór y objetu komun di kotidjanu.'
    },
    content: {
      pt: 'Conhecer cores e objetos do dia a dia é fundamental para descrever o mundo ao nosso redor. Esta lição ensina as cores básicas e objetos comuns que encontramos diariamente, permitindo descrições mais ricas e precisas.',
      cv: 'Konxe kór y objetu di dia a dia é fundamental pa deskrebe mundu na nos redor. Es lison ta sina kór báziku y objetu komun ki nu ta topá diáriamenti, permitindu deskrison más riku y presizu.'
    },
    vocabulary: [
      { cv: 'branku', pt: 'branco' },
      { cv: 'pretu', pt: 'preto' },
      { cv: 'vermédju', pt: 'vermelho' },
      { cv: 'azul', pt: 'azul' },
      { cv: 'verdi', pt: 'verde' },
      { cv: 'marelu', pt: 'amarelo' },
      { cv: 'kasa', pt: 'casa' },
      { cv: 'mesa', pt: 'mesa' },
      { cv: 'kadéra', pt: 'cadeira' },
      { cv: 'livru', pt: 'livro' },
      { cv: 'ágwa', pt: 'água' },
      { cv: 'kumida', pt: 'comida' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: A casa é _____ (branca)',
          cv: 'Kompleta: Kasa é _____ (branku)'
        },
        answer: 'branku'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "livro azul"',
          cv: 'Traduz: "livro azul"'
        },
        answer: 'livru azul'
      }
    ]
  },
  {
    id: 5,
    level: 'beginner',
    category: 'basic',
    title: {
      pt: 'Tempo e Clima',
      cv: 'Tempu y Klima'
    },
    description: {
      pt: 'Aprenda a falar sobre tempo, clima e condições meteorológicas.',
      cv: 'Aprende papia sobri tempu, klima y kondison meteorolójiku.'
    },
    content: {
      pt: 'Falar sobre o tempo é uma das conversas mais comuns. Em Cabo Verde, com seu clima tropical, é importante conhecer vocabulário relacionado ao tempo e clima. Esta lição ensina expressões úteis para descrever condições meteorológicas.',
      cv: 'Papia sobri tempu é un di konversa más komun. Na Kabu Verdi, ku si klima tropikal, é importanti konxe vokabuláriu relacionadu ku tempu y klima. Es lison ta sina espresão útil pa deskrebe kondison meteorolójiku.'
    },
    vocabulary: [
      { cv: 'sol', pt: 'sol' },
      { cv: 'txuba', pt: 'chuva' },
      { cv: 'ventu', pt: 'vento' },
      { cv: 'nubi', pt: 'nuvem' },
      { cv: 'kalór', pt: 'calor' },
      { cv: 'friu', pt: 'frio' },
      { cv: 'seku', pt: 'seco' },
      { cv: 'mólhadu', pt: 'molhado' },
      { cv: 'dia', pt: 'dia' },
      { cv: 'noiti', pt: 'noite' },
      { cv: 'mañã', pt: 'manhã' },
      { cv: 'tardi', pt: 'tarde' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Como está o tempo hoje?',
          cv: 'Kuma ki tempu sta oji?'
        },
        options: ['Sta txubandu', 'Sta fazéndu sol', 'Sta ventandu', 'Tudu di riba'],
        answer: 'Tudu di riba'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Está muito calor"',
          cv: 'Traduz: "Está muito calor"'
        },
        answer: 'Sta txeu kalór'
      }
    ]
  },
  {
    id: 6,
    level: 'beginner',
    category: 'basic',
    title: {
      pt: 'Comida e Bebida Cabo-verdiana',
      cv: 'Kumida y Bebida Kabuverdianu'
    },
    description: {
      pt: 'Vocabulário sobre comida típica e bebidas de Cabo Verde.',
      cv: 'Vokabuláriu sobri kumida típiku y bebida di Kabu Verdi.'
    },
    content: {
      pt: 'A culinária cabo-verdiana é rica e diversa, misturando influências africanas, portuguesas e brasileiras. Conhecer nomes de pratos típicos e bebidas é essencial para apreciar a cultura local e comunicar em restaurantes e casas.',
      cv: 'Kulinária kabuverdianu é riku y diversu, misturandu influênsia afrikanu, purtuges y brasileru. Konxe nomi di pratu típiku y bebida é esensial pa apresia kultura lokal y komunika na restauranti y kasa.'
    },
    vocabulary: [
      { cv: 'katxupa', pt: 'cachupa (prato típico)' },
      { cv: 'pãu', pt: 'pão' },
      { cv: 'arós', pt: 'arroz' },
      { cv: 'fidju', pt: 'feijão' },
      { cv: 'karni', pt: 'carne' },
      { cv: 'pesi', pt: 'peixe' },
      { cv: 'ágwa', pt: 'água' },
      { cv: 'grogue', pt: 'grogue (bebida típica)' },
      { cv: 'ponti', pt: 'ponche' },
      { cv: 'kafé', pt: 'café' },
      { cv: 'fruta', pt: 'fruta' },
      { cv: 'dósi', pt: 'doce' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Qual é o prato típico cabo-verdiano?',
          cv: 'Kal é pratu típiku kabuverdianu?'
        },
        options: ['feijoada', 'katxupa', 'bacalhau', 'paella'],
        answer: 'katxupa'
      },
      {
        type: 'translation',
        question: {
          pt: 'Como se pede água em crioulo?',
          cv: 'Kuma ki ta pidi ágwa na kriolu?'
        },
        answer: 'N kere ágwa'
      }
    ]
  },

  // CONVERSATION - LIÇÕES DE CONVERSAÇÃO (5 leçons)
  {
    id: 7,
    level: 'intermediate',
    category: 'conversation',
    title: {
      pt: 'Apresentações e Cumprimentos',
      cv: 'Aprezentason y Kumprimentu'
    },
    description: {
      pt: 'Aprenda a se apresentar e cumprimentar pessoas em diferentes situações.',
      cv: 'Aprende aprezenta bu kabesa y kumprimentá pesoa na diferenti situason.'
    },
    content: {
      pt: 'Saber se apresentar adequadamente é fundamental em qualquer cultura. Em Cabo Verde, os cumprimentos são importantes e variam dependendo da hora do dia, da formalidade da situação e da relação entre as pessoas. Esta lição ensina as formas corretas de cumprimentar e se apresentar.',
      cv: 'Sabe aprezenta bu kabesa adequadamenti é fundamental na kualker kultura. Na Kabu Verdi, kumprimentu é importanti y ta varia dipendendu di ora di dia, di formalidadi di situason y di relason entri pesoa. Es lison ta sina forma koretu di kumprimentá y aprezenta bu kabesa.'
    },
    vocabulary: [
      { cv: 'nomi', pt: 'nome' },
      { cv: 'apelidu', pt: 'sobrenome' },
      { cv: 'idadi', pt: 'idade' },
      { cv: 'terra', pt: 'terra/país' },
      { cv: 'família', pt: 'família' },
      { cv: 'trabadju', pt: 'trabalho' },
      { cv: 'prazer', pt: 'prazer' },
      { cv: 'konxe', pt: 'conhecer' },
      { cv: 'morador', pt: 'morador' },
      { cv: 'vizinhu', pt: 'vizinho' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como se diz "Qual é o seu nome?" em crioulo?',
          cv: 'Kuma ki ta fala "Qual é o seu nome?" na kriolu?'
        },
        answer: 'Kal é bu nomi?'
      },
      {
        type: 'completion',
        question: {
          pt: 'Complete a apresentação: "N nomi é João, n é di ___"',
          cv: 'Kompleta aprezentason: "N nomi é João, n é di ___"'
        },
        answer: 'Kabu Verdi'
      }
    ]
  },
  {
    id: 8,
    level: 'intermediate',
    category: 'conversation',
    title: {
      pt: 'No Mercado e Compras',
      cv: 'Na Merkadu y Kompra'
    },
    description: {
      pt: 'Vocabulário e expressões para fazer compras e negociar preços.',
      cv: 'Vokabuláriu y espresão pa faze kompra y negosia presu.'
    },
    content: {
      pt: 'Ir ao mercado é uma experiência cultural importante em Cabo Verde. Saber negociar preços, perguntar sobre produtos e fazer compras é essencial. Esta lição ensina vocabulário e frases úteis para situações de compra.',
      cv: 'Bai na merkadu é un esperiênsia kultural importanti na Kabu Verdi. Sabe negosia presu, pergunta sobri produtu y faze kompra é esensial. Es lison ta sina vokabuláriu y frazi útil pa situason di kompra.'
    },
    vocabulary: [
      { cv: 'merkadu', pt: 'mercado' },
      { cv: 'presu', pt: 'preço' },
      { cv: 'barátu', pt: 'barato' },
      { cv: 'karu', pt: 'caro' },
      { cv: 'kumpra', pt: 'comprar' },
      { cv: 'bende', pt: 'vender' },
      { cv: 'dinhéru', pt: 'dinheiro' },
      { cv: 'paga', pt: 'pagar' },
      { cv: 'kuantu', pt: 'quanto' },
      { cv: 'kilu', pt: 'quilo' },
      { cv: 'saku', pt: 'saco' },
      { cv: 'troku', pt: 'troco' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como perguntar "Quanto custa?"',
          cv: 'Kuma ki ta pergunta "Kuantu ki kusta?"'
        },
        answer: 'Kuantu ki kusta?'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Como se diz "muito caro"?',
          cv: 'Kuma ki ta fala "muito caro"?'
        },
        options: ['muitu barátu', 'muitu karu', 'pouku karu', 'nada karu'],
        answer: 'muitu karu'
      }
    ]
  },
  {
    id: 9,
    level: 'intermediate',
    category: 'conversation',
    title: {
      pt: 'Pedindo Direções',
      cv: 'Pidíndu Direson'
    },
    description: {
      pt: 'Como pedir e dar direções em crioulo cabo-verdiano.',
      cv: 'Kuma pidi y da direson na kriolu kabuverdianu.'
    },
    content: {
      pt: 'Saber pedir e dar direções é fundamental quando se está em um lugar novo. Esta lição ensina vocabulário sobre localização, pontos de referência e como se orientar nas cidades cabo-verdianas.',
      cv: 'Sabe pidi y da direson é fundamental kuandu nu sta na un lokal novu. Es lison ta sina vokabuláriu sobri lokalizason, pontu di referênsia y kuma orienta na sidadi kabuverdianu.'
    },
    vocabulary: [
      { cv: 'undi', pt: 'onde' },
      { cv: 'diretu', pt: 'direito' },
      { cv: 'skerda', pt: 'esquerda' },
      { cv: 'direita', pt: 'direita' },
      { cv: 'longi', pt: 'longe' },
      { cv: 'perti', pt: 'perto' },
      { cv: 'rua', pt: 'rua' },
      { cv: 'prasa', pt: 'praça' },
      { cv: 'igreja', pt: 'igreja' },
      { cv: 'eskola', pt: 'escola' },
      { cv: 'ospital', pt: 'hospital' },
      { cv: 'bai', pt: 'ir' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: Undi ki _____ igreja? (onde fica a igreja?)',
          cv: 'Kompleta: Undi ki _____ igreja?'
        },
        answer: 'sta'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Vire à direita"',
          cv: 'Traduz: "Vire à direita"'
        },
        answer: 'Bira pa direita'
      }
    ]
  },
  {
    id: 10,
    level: 'intermediate',
    category: 'conversation',
    title: {
      pt: 'No Restaurante',
      cv: 'Na Restauranti'
    },
    description: {
      pt: 'Vocabulário e expressões para comer fora e pedir comida.',
      cv: 'Vokabuláriu y espresão pa kume fora y pidi kumida.'
    },
    content: {
      pt: 'Comer em restaurantes é uma experiência social importante. Saber pedir comida, entender o cardápio e interagir com garçons em crioulo torna a experiência mais autêntica e agradável.',
      cv: 'Kume na restauranti é un esperiênsia sosial importanti. Sabe pidi kumida, komprende kardápiu y interaji ku garsãu na kriolu ta torna esperiênsia más autêntiku y agradável.'
    },
    vocabulary: [
      { cv: 'restauranti', pt: 'restaurante' },
      { cv: 'kardápiu', pt: 'cardápio' },
      { cv: 'garsãu', pt: 'garçom' },
      { cv: 'pidi', pt: 'pedir' },
      { cv: 'kume', pt: 'comer' },
      { cv: 'bebe', pt: 'beber' },
      { cv: 'gostózu', pt: 'gostoso' },
      { cv: 'salgádu', pt: 'salgado' },
      { cv: 'dósi', pt: 'doce' },
      { cv: 'kénti', pt: 'quente' },
      { cv: 'friu', pt: 'frio' },
      { cv: 'konta', pt: 'conta' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Como pedir a conta?',
          cv: 'Kuma pidi konta?'
        },
        options: ['N kere konta', 'N kere kumida', 'N kere ágwa', 'N kere dinhéru'],
        answer: 'N kere konta'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "A comida está deliciosa"',
          cv: 'Traduz: "Kumida sta gostózu"'
        },
        answer: 'Kumida sta gostózu'
      }
    ]
  },
  {
    id: 11,
    level: 'intermediate',
    category: 'conversation',
    title: {
      pt: 'Falando sobre Sentimentos',
      cv: 'Papiándu sobri Sentimentu'
    },
    description: {
      pt: 'Expressões para falar sobre emoções e sentimentos.',
      cv: 'Espresão pa papia sobri emosão y sentimentu.'
    },
    content: {
      pt: 'Expressar sentimentos e emoções é fundamental para comunicação profunda. Esta lição ensina vocabulário emocional e como expressar diferentes estados de espírito em crioulo cabo-verdiano.',
      cv: 'Espresa sentimentu y emosão é fundamental pa komunikason profundu. Es lison ta sina vokabuláriu emosional y kuma espresa diferenti stadu di spíritu na kriolu kabuverdianu.'
    },
    vocabulary: [
      { cv: 'kontenti', pt: 'feliz/contente' },
      { cv: 'tristi', pt: 'triste' },
      { cv: 'raivózu', pt: 'bravo/zangado' },
      { cv: 'medrózu', pt: 'com medo' },
      { cv: 'kansádu', pt: 'cansado' },
      { cv: 'animádu', pt: 'animado' },
      { cv: 'preokupádu', pt: 'preocupado' },
      { cv: 'kalmádu', pt: 'calmo' },
      { cv: 'nervózu', pt: 'nervoso' },
      { cv: 'saudózu', pt: 'com saudades' },
      { cv: 'sinti', pt: 'sentir' },
      { cv: 'emosão', pt: 'emoção' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: N sta _____ (feliz)',
          cv: 'Kompleta: N sta _____ (kontenti)'
        },
        answer: 'kontenti'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Como expressar saudades?',
          cv: 'Kuma espresa saudadi?'
        },
        options: ['N sta saudózu', 'N sta kontenti', 'N sta tristi', 'N sta kansádu'],
        answer: 'N sta saudózu'
      }
    ]
  },
  {
    id: 12,
    level: 'advanced',
    category: 'conversation',
    title: {
      pt: 'Conversas Telefônicas',
      cv: 'Konversa Telefóniku'
    },
    description: {
      pt: 'Vocabulário e expressões para conversas ao telefone.',
      cv: 'Vokabuláriu y espresão pa konversa na telefoni.'
    },
    content: {
      pt: 'Falar ao telefone requer vocabulário específico e expressões próprias. Esta lição ensina como atender, fazer chamadas e manter conversas telefônicas em crioulo cabo-verdiano de forma natural.',
      cv: 'Papia na telefoni ta presis vokabuláriu ispesífiku y espresão própryu. Es lison ta sina kuma atende, faze xamada y mantén konversa telefóniku na kriolu kabuverdianu di forma natural.'
    },
    vocabulary: [
      { cv: 'telefoni', pt: 'telefone' },
      { cv: 'xama', pt: 'chamar' },
      { cv: 'atende', pt: 'atender' },
      { cv: 'alô', pt: 'alô' },
      { cv: 'ken ki ta papia?', pt: 'quem está falando?' },
      { cv: 'spera', pt: 'esperar' },
      { cv: 'liga', pt: 'ligar' },
      { cv: 'dizliga', pt: 'desligar' },
      { cv: 'mensaji', pt: 'mensagem' },
      { cv: 'númeru', pt: 'número' },
      { cv: 'obi', pt: 'ouvir' },
      { cv: 'fala más altu', pt: 'falar mais alto' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como atender o telefone?',
          cv: 'Kuma atende telefoni?'
        },
        answer: 'Alô'
      },
      {
        type: 'completion',
        question: {
          pt: 'Complete: _____ ki ta papia? (quem está falando?)',
          cv: 'Kompleta: _____ ki ta papia?'
        },
        answer: 'Ken'
      }
    ]
  },

  // GRAMMAR - LIÇÕES DE GRAMÁTICA (5 leçons)
  {
    id: 13,
    level: 'intermediate',
    category: 'grammar',
    title: {
      pt: 'Verbos no Presente - Sistema TA',
      cv: 'Verbu na Prezenti - Sistema TA'
    },
    description: {
      pt: 'Compreenda o sistema verbal do crioulo e o uso do marcador "ta".',
      cv: 'Komprende sistema verbal di kriolu y uzu di markadó "ta".'
    },
    content: {
      pt: 'O sistema verbal do crioulo cabo-verdiano é diferente do português. O marcador "ta" indica ações habituais, contínuas ou no presente. É fundamental compreender este sistema para falar corretamente. O "ta" é colocado antes do verbo principal e não varia com a pessoa.',
      cv: 'Sistema verbal di kriolu kabuverdianu é diferenti di purtuges. Markadó "ta" ta indika ason habitual, kontínuu o na prezenti. É fundamental komprende es sistema pa papia koretamenti. "Ta" ta ser kolokadu antis di verbu prinsipal y ka ta varia ku pesoa.'
    },
    vocabulary: [
      { cv: 'ta kume', pt: 'come/está comendo' },
      { cv: 'ta bebe', pt: 'bebe/está bebendo' },
      { cv: 'ta durmi', pt: 'dorme/está dormindo' },
      { cv: 'ta trabadja', pt: 'trabalha/está trabalhando' },
      { cv: 'ta studu', pt: 'estuda/está estudando' },
      { cv: 'ta bai', pt: 'vai/está indo' },
      { cv: 'ta ben', pt: 'vem/está vindo' },
      { cv: 'ta fala', pt: 'fala/está falando' },
      { cv: 'ta obi', pt: 'ouve/está ouvindo' },
      { cv: 'ta odja', pt: 'vê/está vendo' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Eu estou comendo"',
          cv: 'Traduz: "Eu estou comendo"'
        },
        answer: 'N ta kume'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Qual é a forma correta para "Ele trabalha"?',
          cv: 'Kal é forma koretu pa "Ele trabalha"?'
        },
        options: ['El trabadja', 'El ta trabadja', 'El ba trabadja', 'El kume trabadja'],
        answer: 'El ta trabadja'
      }
    ]
  },

  {
    id: 14,
    level: 'intermediate',
    category: 'grammar',
    title: {
      pt: 'Pronomes Pessoais e Possessivos',
      cv: 'Pronomi Pesoal y Posesívu'
    },
    description: {
      pt: 'Aprenda os pronomes pessoais e possessivos do crioulo.',
      cv: 'Aprende pronomi pesoal y posesívu di kriolu.'
    },
    content: {
      pt: 'Os pronomes são fundamentais para evitar repetições e tornar a fala mais fluida. O crioulo cabo-verdiano tem um sistema de pronomes mais simples que o português, sem variação de gênero em muitos casos.',
      cv: 'Pronomi é fundamental pa evita repetison y torna fala más fluidu. Kriolu kabuverdianu ten un sistema di pronomi más simpli ki purtuges, sen variason di jéneru na muitu kazu.'
    },
    vocabulary: [
      { cv: 'n', pt: 'eu' },
      { cv: 'bu', pt: 'tu/você' },
      { cv: 'el', pt: 'ele/ela' },
      { cv: 'nu', pt: 'nós' },
      { cv: 'nha', pt: 'meu/minha' },
      { cv: 'bu', pt: 'teu/tua' },
      { cv: 'si', pt: 'seu/sua' },
      { cv: 'nos', pt: 'nosso/nossa' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: _____ kasa é grandi (minha casa é grande)',
          cv: 'Kompleta: _____ kasa é grandi'
        },
        answer: 'Nha'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Como se diz "ele vai"?',
          cv: 'Kuma ki ta fala "ele vai"?'
        },
        options: ['N ta bai', 'Bu ta bai', 'El ta bai', 'Nu ta bai'],
        answer: 'El ta bai'
      }
    ]
  },
  {
    id: 15,
    level: 'intermediate',
    category: 'grammar',
    title: {
      pt: 'Formação do Plural',
      cv: 'Formason di Plural'
    },
    description: {
      pt: 'Como formar o plural em crioulo cabo-verdiano.',
      cv: 'Kuma forma plural na kriolu kabuverdianu.'
    },
    content: {
      pt: 'O plural no crioulo é mais simples que no português. Geralmente não se marca no substantivo, sendo indicado pelo contexto, números ou quantificadores. Esta é uma característica importante do crioulo.',
      cv: 'Plural na kriolu é más simpli ki na purtuges. Jeralmenti ka ta marka na sustantivu, sendo indikadu pa kontestu, númeru o kuantifikadó. Es é un karakterístika importanti di kriolu.'
    },
    vocabulary: [
      { cv: 'un kasa', pt: 'uma casa' },
      { cv: 'dos kasa', pt: 'duas casas' },
      { cv: 'muitu kasa', pt: 'muitas casas' },
      { cv: 'alguns omi', pt: 'alguns homens' },
      { cv: 'txeu mudjer', pt: 'muitas mulheres' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como se diz "três livros"?',
          cv: 'Kuma ki ta fala "três livros"?'
        },
        answer: 'tres livru'
      },
      {
        type: 'completion',
        question: {
          pt: 'Complete: _____ fidju (muitos filhos)',
          cv: 'Kompleta: _____ fidju'
        },
        answer: 'Muitu'
      }
    ]
  },
  {
    id: 16,
    level: 'advanced',
    category: 'grammar',
    title: {
      pt: 'Perguntas e Interrogativas',
      cv: 'Pergunta y Interrogativu'
    },
    description: {
      pt: 'Aprenda a formar perguntas em crioulo cabo-verdiano.',
      cv: 'Aprende forma pergunta na kriolu kabuverdianu.'
    },
    content: {
      pt: 'As perguntas no crioulo usam palavras interrogativas específicas e estruturas próprias. É importante conhecer essas estruturas para comunicar efetivamente e obter informações.',
      cv: 'Pergunta na kriolu ta uza palavra interrogativu ispesífiku y strutura própryu. É importanti konxe es strutura pa komunika efetivamenti y obi informason.'
    },
    vocabulary: [
      { cv: 'ken', pt: 'quem' },
      { cv: 'kuze', pt: 'o que' },
      { cv: 'undi', pt: 'onde' },
      { cv: 'kuandu', pt: 'quando' },
      { cv: 'kuma', pt: 'como' },
      { cv: 'pamodi', pt: 'por que' },
      { cv: 'kuantu', pt: 'quanto' },
      { cv: 'kal', pt: 'qual' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Como perguntar "onde você mora"?',
          cv: 'Kuma pergunta "undi bu mora"?'
        },
        options: ['Ken bu mora?', 'Undi bu mora?', 'Kuandu bu mora?', 'Kuma bu mora?'],
        answer: 'Undi bu mora?'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Por que você está triste?"',
          cv: 'Traduz: "Pamodi bu sta tristi?"'
        },
        answer: 'Pamodi bu sta tristi?'
      }
    ]
  },
  {
    id: 17,
    level: 'advanced',
    category: 'grammar',
    title: {
      pt: 'Negação em Crioulo',
      cv: 'Negason na Kriolu'
    },
    description: {
      pt: 'Como formar frases negativas em crioulo cabo-verdiano.',
      cv: 'Kuma forma frazi negativu na kriolu kabuverdianu.'
    },
    content: {
      pt: 'A negação no crioulo usa principalmente a partícula "ka" antes do verbo. Existem também outras formas de negação para diferentes contextos e ênfases.',
      cv: 'Negason na kriolu ta uza prinsipalmenti partíkula "ka" antis di verbu. Ezisti tanbé otru forma di negason pa diferenti kontestu y ênfazi.'
    },
    vocabulary: [
      { cv: 'ka', pt: 'não (negação)' },
      { cv: 'nada', pt: 'nada' },
      { cv: 'ninhén', pt: 'ninguém' },
      { cv: 'nunka', pt: 'nunca' },
      { cv: 'nenhun', pt: 'nenhum' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: N _____ ta bai (eu não vou)',
          cv: 'Kompleta: N _____ ta bai'
        },
        answer: 'ka'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Ele nunca come peixe"',
          cv: 'Traduz: "El nunka ta kume pesi"'
        },
        answer: 'El nunka ta kume pesi'
      }
    ]
  },
  {
    id: 18,
    level: 'advanced',
    category: 'grammar',
    title: {
      pt: 'Tempos Verbais Compostos',
      cv: 'Tempu Verbal Kompoztu'
    },
    description: {
      pt: 'Aprenda os tempos verbais compostos do crioulo.',
      cv: 'Aprende tempu verbal kompoztu di kriolu.'
    },
    content: {
      pt: 'O crioulo tem tempos compostos formados com auxiliares como "ten" (ter), "sta" (estar) e "ser" (ser). Estes tempos expressam aspectos específicos da ação no tempo.',
      cv: 'Kriolu ten tempu kompoztu formadu ku ausiliár kuma "ten" (ten), "sta" (sta) y "ser" (ser). Es tempu ta espresa aspetu ispesífiku di ason na tempu.'
    },
    vocabulary: [
      { cv: 'ten + particípiu', pt: 'ter + particípio' },
      { cv: 'sta + gerúndiu', pt: 'estar + gerúndio' },
      { cv: 'ba + infinitivu', pt: 'ir + infinitivo' },
      { cv: 'ja', pt: 'já (aspecto perfectivo)' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Como expressar "eu já comi"?',
          cv: 'Kuma espresa "n ja kume"?'
        },
        options: ['N ta kume', 'N ja kume', 'N ba kume', 'N ten kumidu'],
        answer: 'N ja kume'
      },
      {
        type: 'completion',
        question: {
          pt: 'Complete: El _____ trabaiandu (ele está trabalhando)',
          cv: 'Kompleta: El _____ trabaiandu'
        },
        answer: 'sta'
      }
    ]
  },

  // MINISTRY - LIÇÕES DE MINISTÉRIO (5 leçons)
  {
    id: 19,
    level: 'intermediate',
    category: 'ministry',
    title: {
      pt: 'Vocabulário Bíblico Básico',
      cv: 'Vokabuláriu Bíbliku Básiku'
    },
    description: {
      pt: 'Aprenda palavras essenciais para falar sobre temas bíblicos em crioulo.',
      cv: 'Aprende palavra esensial pa papia sobri tema bíbliku na kriolu.'
    },
    content: {
      pt: 'Para compartilhar verdades bíblicas em crioulo cabo-verdiano, é essencial conhecer o vocabulário religioso básico. Esta lição apresenta termos fundamentais usados nas Escrituras e no ministério cristão, permitindo comunicação eficaz sobre temas espirituais.',
      cv: 'Pa partilha berdadi bíbliku na kriolu kabuverdianu, é esensial konxe vokabuláriu relijozu báziku. Es lison ta aprezenta termu fundamental uzadu na Skritura y na ministériu kristãu, permitindu komunikason efikaz sobri tema spiritual.'
    },
    vocabulary: [
      { cv: 'Deus', pt: 'Deus' },
      { cv: 'Jeová', pt: 'Jeová' },
      { cv: 'Jesus', pt: 'Jesus' },
      { cv: 'Bíblia', pt: 'Bíblia' },
      { cv: 'oração', pt: 'oração' },
      { cv: 'fé', pt: 'fé' },
      { cv: 'amor', pt: 'amor' },
      { cv: 'perdão', pt: 'perdão' },
      { cv: 'salvação', pt: 'salvação' },
      { cv: 'reino', pt: 'reino' },
      { cv: 'paraíso', pt: 'paraíso' },
      { cv: 'ressurreição', pt: 'ressurreição' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como se diz "Deus ama você" em crioulo?',
          cv: 'Kuma ki ta fala "Deus ama você" na kriolu?'
        },
        answer: 'Deus ta gosta di bo'
      },
      {
        type: 'completion',
        question: {
          pt: 'Complete o versículo: "Jeová é nha ___"',
          cv: 'Kompleta versíkulu: "Jeová é nha ___"'
        },
        answer: 'Pastor'
      }
    ]
  },
  {
    id: 20,
    level: 'intermediate',
    category: 'ministry',
    title: {
      pt: 'Pregação de Casa em Casa',
      cv: 'Pregason di Kasa na Kasa'
    },
    description: {
      pt: 'Vocabulário e expressões para a pregação de casa em casa.',
      cv: 'Vokabuláriu y espresão pa pregason di kasa na kasa.'
    },
    content: {
      pt: 'A pregação de casa em casa é uma atividade fundamental dos Testemunhas de Jeová. Saber como se apresentar, iniciar conversas e compartilhar a mensagem bíblica em crioulo é essencial para o ministério eficaz.',
      cv: 'Pregason di kasa na kasa é un atividadi fundamental di Tistemunha di Jeová. Sabe kuma aprezenta, inisia konversa y partilha mensaji bíbliku na kriolu é esensial pa ministériu efikás.'
    },
    vocabulary: [
      { cv: 'pregason', pt: 'pregação' },
      { cv: 'vizita', pt: 'visita' },
      { cv: 'konversa', pt: 'conversa' },
      { cv: 'mensaji', pt: 'mensagem' },
      { cv: 'Bíblia', pt: 'Bíblia' },
      { cv: 'literatura', pt: 'literatura' },
      { cv: 'revista', pt: 'revista' },
      { cv: 'folhetu', pt: 'folheto' },
      { cv: 'konvite', pt: 'convite' },
      { cv: 'reunião', pt: 'reunião' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como se apresentar na pregação?',
          cv: 'Kuma aprezenta na pregason?'
        },
        answer: 'Bon dia, n é Tistemunha di Jeová'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Como oferecer literatura?',
          cv: 'Kuma oferese literatura?'
        },
        options: ['Bu kere kumpra?', 'Bu kere es revista?', 'Bu ten dinhéru?', 'Bu gosta di le?'],
        answer: 'Bu kere es revista?'
      }
    ]
  },
  {
    id: 21,
    level: 'intermediate',
    category: 'ministry',
    title: {
      pt: 'Estudos Bíblicos',
      cv: 'Studu Bíbliku'
    },
    description: {
      pt: 'Vocabulário para conduzir estudos bíblicos em crioulo.',
      cv: 'Vokabuláriu pa konduz studu bíbliku na kriolu.'
    },
    content: {
      pt: 'Conduzir estudos bíblicos requer vocabulário específico para explicar conceitos bíblicos, fazer perguntas e ajudar os estudantes a compreender as verdades bíblicas em sua língua materna.',
      cv: 'Konduz studu bíbliku ta presis vokabuláriu ispesífiku pa esplika konseitu bíbliku, faze pergunta y djuda studanti komprende verdadi bíbliku na si língua materni.'
    },
    vocabulary: [
      { cv: 'studu', pt: 'estudo' },
      { cv: 'lison', pt: 'lição' },
      { cv: 'pergunta', pt: 'pergunta' },
      { cv: 'risposta', pt: 'resposta' },
      { cv: 'esplika', pt: 'explicar' },
      { cv: 'komprende', pt: 'compreender' },
      { cv: 'aprende', pt: 'aprender' },
      { cv: 'sina', pt: 'ensinar' },
      { cv: 'verdadi', pt: 'verdade' },
      { cv: 'prinsípiu', pt: 'princípio' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: Bu _____ es lison? (você compreende esta lição?)',
          cv: 'Kompleta: Bu _____ es lison?'
        },
        answer: 'komprende'
      },
      {
        type: 'translation',
        question: {
          pt: 'Como perguntar se tem dúvidas?',
          cv: 'Kuma pergunta si ten dúvida?'
        },
        answer: 'Bu ten algun pergunta?'
      }
    ]
  },
  {
    id: 22,
    level: 'advanced',
    category: 'ministry',
    title: {
      pt: 'Reuniões e Assembleias',
      cv: 'Reunião y Asembléia'
    },
    description: {
      pt: 'Vocabulário relacionado às reuniões e assembleias das Testemunhas de Jeová.',
      cv: 'Vokabuláriu relacionadu ku reunião y asembléia di Tistemunha di Jeová.'
    },
    content: {
      pt: 'As reuniões e assembleias são parte importante da adoração cristã. Conhecer o vocabulário relacionado a essas atividades ajuda na participação ativa e na compreensão do programa espiritual.',
      cv: 'Reunião y asembléia é parti importanti di adorason kristãu. Konxe vokabuláriu relacionadu ku es atividadi ta djuda na partisipason ativu y na komprensão di programa spiritual.'
    },
    vocabulary: [
      { cv: 'reunião', pt: 'reunião' },
      { cv: 'asembléia', pt: 'assembleia' },
      { cv: 'kongrèsu', pt: 'congresso' },
      { cv: 'programa', pt: 'programa' },
      { cv: 'partisipason', pt: 'participação' },
      { cv: 'komentáriu', pt: 'comentário' },
      { cv: 'orasão', pt: 'oração' },
      { cv: 'kántiku', pt: 'cântico' },
      { cv: 'palestra', pt: 'palestra' },
      { cv: 'demonstrason', pt: 'demonstração' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'O que fazemos no início da reunião?',
          cv: 'Kuze ki nu ta faze na inísiu di reunião?'
        },
        options: ['Nu ta kanta kántiku', 'Nu ta kume', 'Nu ta durmi', 'Nu ta kore'],
        answer: 'Nu ta kanta kántiku'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Vamos fazer uma oração"',
          cv: 'Traduz: "Nu ba faze un orasão"'
        },
        answer: 'Nu ba faze un orasão'
      }
    ]
  },
  {
    id: 23,
    level: 'advanced',
    category: 'ministry',
    title: {
      pt: 'Testemunho Público',
      cv: 'Tistemunhu Públiku'
    },
    description: {
      pt: 'Vocabulário para o testemunho público e pregação em locais públicos.',
      cv: 'Vokabuláriu pa tistemunhu públiku y pregason na lokal públiku.'
    },
    content: {
      pt: 'O testemunho público é uma forma importante de pregação. Saber como abordar pessoas em locais públicos, apresentar a mensagem e oferecer literatura requer vocabulário específico e abordagem respeitosa.',
      cv: 'Tistemunhu públiku é un forma importanti di pregason. Sabe kuma aborda pesoa na lokal públiku, aprezenta mensaji y oferese literatura ta presis vokabuláriu ispesífiku y abordaji rispeitózu.'
    },
    vocabulary: [
      { cv: 'tistemunhu', pt: 'testemunho' },
      { cv: 'públiku', pt: 'público' },
      { cv: 'prasa', pt: 'praça' },
      { cv: 'merkadu', pt: 'mercado' },
      { cv: 'parada', pt: 'parada (ônibus)' },
      { cv: 'aborda', pt: 'abordar' },
      { cv: 'oferese', pt: 'oferecer' },
      { cv: 'distribui', pt: 'distribuir' },
      { cv: 'konvida', pt: 'convidar' },
      { cv: 'rispeitózu', pt: 'respeitoso' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: Nu ta _____ literatura na prasa (distribuímos literatura na praça)',
          cv: 'Kompleta: Nu ta _____ literatura na prasa'
        },
        answer: 'distribui'
      },
      {
        type: 'translation',
        question: {
          pt: 'Como convidar para reunião?',
          cv: 'Kuma konvida pa reunião?'
        },
        answer: 'Bu kere ben na nos reunião?'
      }
    ]
  },
  {
    id: 24,
    level: 'advanced',
    category: 'ministry',
    title: {
      pt: 'Orações e Expressões Espirituais',
      cv: 'Orasão y Espresão Spiritual'
    },
    description: {
      pt: 'Vocabulário para orações e expressões espirituais em crioulo.',
      cv: 'Vokabuláriu pa orasão y espresão spiritual na kriolu.'
    },
    content: {
      pt: 'A oração é comunicação com Deus e requer vocabulário apropriado. Conhecer expressões espirituais em crioulo ajuda na adoração sincera e na comunicação com outros cristãos cabo-verdianos.',
      cv: 'Orasão é komunikason ku Deus y ta presis vokabuláriu apropriadu. Konxe espresão spiritual na kriolu ta djuda na adorason sinseru y na komunikason ku otru kristãu kabuverdianu.'
    },
    vocabulary: [
      { cv: 'orasão', pt: 'oração' },
      { cv: 'Jeová', pt: 'Jeová' },
      { cv: 'Deus', pt: 'Deus' },
      { cv: 'Jesus', pt: 'Jesus' },
      { cv: 'agradese', pt: 'agradecer' },
      { cv: 'pidi', pt: 'pedir' },
      { cv: 'bensão', pt: 'bênção' },
      { cv: 'perdão', pt: 'perdão' },
      { cv: 'adorason', pt: 'adoração' },
      { cv: 'amén', pt: 'amém' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como começar uma oração?',
          cv: 'Kuma kumesa un orasão?'
        },
        answer: 'Nos Pai Jeová'
      },
      {
        type: 'completion',
        question: {
          pt: 'Complete: Nu ta _____ bu pa tudu (agradecemos por tudo)',
          cv: 'Kompleta: Nu ta _____ bu pa tudu'
        },
        answer: 'agradese'
      }
    ]
  },

  // CULTURE - LIÇÕES DE CULTURA (5 leçons)
  {
    id: 25,
    level: 'advanced',
    category: 'culture',
    title: {
      pt: 'Tradições e Cultura Cabo-verdiana',
      cv: 'Tradison y Kultura Kabuverdianu'
    },
    description: {
      pt: 'Explore a rica cultura cabo-verdiana através da língua crioula.',
      cv: 'Esplora kultura kabuverdianu riku atraves di língua kriolu.'
    },
    content: {
      pt: 'A cultura cabo-verdiana é rica em tradições, música, culinária e festivais. Compreender estes aspectos culturais através do crioulo ajuda a conectar-se mais profundamente com o povo cabo-verdiano. Esta lição explora vocabulário cultural essencial.',
      cv: 'Kultura kabuverdianu é riku na tradison, múzika, kulinária y festival. Komprende es aspetu kultural atraves di kriolu ta djuda konekta más profundamenti ku povu kabuverdianu. Es lison ta esplora vokabuláriu kultural esensial.'
    },
    vocabulary: [
      { cv: 'morna', pt: 'morna (música tradicional)' },
      { cv: 'coladeira', pt: 'coladeira (ritmo musical)' },
      { cv: 'batuku', pt: 'batuku (dança tradicional)' },
      { cv: 'festa', pt: 'festa' },
      { cv: 'katxupa', pt: 'cachupa (prato típico)' },
      { cv: 'grogue', pt: 'grogue (bebida tradicional)' },
      { cv: 'tabanka', pt: 'tabanka (povoação)' },
      { cv: 'sodadi', pt: 'saudade' },
      { cv: 'morabeza', pt: 'hospitalidade' },
      { cv: 'kriolu', pt: 'crioulo' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'O que significa "morabeza"?',
          cv: 'Kuze ki "morabeza" ta signifika?'
        },
        answer: 'hospitalidade'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Qual é o prato típico cabo-verdiano?',
          cv: 'Kal é pratu típiku kabuverdianu?'
        },
        options: ['feijoada', 'katxupa', 'bacalhau', 'paella'],
        answer: 'katxupa'
      }
    ]
  },
  {
    id: 26,
    level: 'advanced',
    category: 'culture',
    title: {
      pt: 'Música Cabo-verdiana: Morna e Coladeira',
      cv: 'Múzika Kabuverdianu: Morna y Koladéra'
    },
    description: {
      pt: 'Aprenda sobre os gêneros musicais tradicionais de Cabo Verde.',
      cv: 'Aprende sobri jéneru muzikal tradisional di Kabu Verdi.'
    },
    content: {
      pt: 'A música é fundamental na cultura cabo-verdiana. A morna, melancólica e nostálgica, e a coladeira, mais alegre e dançante, são expressões da alma cabo-verdiana. Conhecer vocabulário musical ajuda a apreciar melhor a cultura.',
      cv: 'Múzika é fundamental na kultura kabuverdianu. Morna, melankóliku y nostáljiku, y koladéra, más alegri y dansanti, é espresão di alma kabuverdianu. Konxe vokabuláriu muzikal ta djuda apresia médjor kultura.'
    },
    vocabulary: [
      { cv: 'morna', pt: 'morna' },
      { cv: 'koladéra', pt: 'coladeira' },
      { cv: 'funaná', pt: 'funaná' },
      { cv: 'batuku', pt: 'batuku' },
      { cv: 'kanta', pt: 'cantar' },
      { cv: 'dansa', pt: 'dançar' },
      { cv: 'viola', pt: 'violão' },
      { cv: 'kavakínhu', pt: 'cavaquinho' },
      { cv: 'saudadi', pt: 'saudade' },
      { cv: 'morabeza', pt: 'morabeza (hospitalidade)' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Qual é o gênero musical mais melancólico?',
          cv: 'Kal é jéneru muzikal más melankóliku?'
        },
        options: ['koladéra', 'morna', 'funaná', 'batuku'],
        answer: 'morna'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Eu gosto de cantar morna"',
          cv: 'Traduz: "N gosta di kanta morna"'
        },
        answer: 'N gosta di kanta morna'
      }
    ]
  },
  {
    id: 27,
    level: 'intermediate',
    category: 'culture',
    title: {
      pt: 'Culinária Tradicional',
      cv: 'Kulinária Tradisional'
    },
    description: {
      pt: 'Explore os pratos típicos e sabores únicos de Cabo Verde.',
      cv: 'Esplora pratu típiku y sabór úniku di Kabu Verdi.'
    },
    content: {
      pt: 'A culinária cabo-verdiana reflete a história do arquipélago, misturando influências africanas, portuguesas e brasileiras. Pratos como cachupa, canja e doces tradicionais são parte da identidade cultural.',
      cv: 'Kulinária kabuverdianu ta refleti stória di arkipélagu, misturandu influênsia afrikanu, purtuges y brasileru. Pratu kuma katxupa, kanja y dósi tradisional é parti di identidadi kultural.'
    },
    vocabulary: [
      { cv: 'katxupa', pt: 'cachupa' },
      { cv: 'kanja', pt: 'canja' },
      { cv: 'pastel', pt: 'pastel' },
      { cv: 'bólu pólu', pt: 'bolo de milho' },
      { cv: 'doce di kóku', pt: 'doce de coco' },
      { cv: 'pudim', pt: 'pudim' },
      { cv: 'kuskus', pt: 'cuscuz' },
      { cv: 'linguisa', pt: 'linguiça' },
      { cv: 'morreia', pt: 'moreia (peixe)' },
      { cv: 'grogue', pt: 'grogue' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: _____ é o prato nacional de Cabo Verde',
          cv: 'Kompleta: _____ é pratu nasional di Kabu Verdi'
        },
        answer: 'Katxupa'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Qual é a bebida tradicional cabo-verdiana?',
          cv: 'Kal é bebida tradisional kabuverdianu?'
        },
        options: ['vinho', 'grogue', 'cerveja', 'refrigerante'],
        answer: 'grogue'
      }
    ]
  },
  {
    id: 28,
    level: 'intermediate',
    category: 'culture',
    title: {
      pt: 'Festas e Celebrações',
      cv: 'Festa y Selebrason'
    },
    description: {
      pt: 'Conheça as principais festas e celebrações cabo-verdianas.',
      cv: 'Konxe prinsipal festa y selebrason kabuverdianu.'
    },
    content: {
      pt: 'As festas cabo-verdianas são momentos de união comunitária, música e tradição. Desde o Carnaval até as festas dos santos padroeiros, cada celebração tem suas características únicas e vocabulário específico.',
      cv: 'Festa kabuverdianu é momentu di união komunitáriu, múzika y tradison. Dês di Karnaval té festa di santu padroeiru, kada selebrason ten ses karakterístika úniku y vokabuláriu ispesífiku.'
    },
    vocabulary: [
      { cv: 'festa', pt: 'festa' },
      { cv: 'karnaval', pt: 'carnaval' },
      { cv: 'selebrason', pt: 'celebração' },
      { cv: 'santu', pt: 'santo' },
      { cv: 'padroeiru', pt: 'padroeiro' },
      { cv: 'prozisão', pt: 'procissão' },
      { cv: 'baile', pt: 'baile' },
      { cv: 'tabanka', pt: 'tabanka (grupo tradicional)' },
      { cv: 'kolá', pt: 'cola (dança)' },
      { cv: 'festa junina', pt: 'festa junina' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como se diz "Vamos à festa"?',
          cv: 'Kuma ki ta fala "Nu ba na festa"?'
        },
        answer: 'Nu ba na festa'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'O que é tabanka?',
          cv: 'Kuze ki é tabanka?'
        },
        options: ['comida', 'grupo tradicional', 'bebida', 'instrumento'],
        answer: 'grupo tradicional'
      }
    ]
  },
  {
    id: 29,
    level: 'advanced',
    category: 'culture',
    title: {
      pt: 'Literatura e Poesia Crioula',
      cv: 'Literatura y Poezia Kriolu'
    },
    description: {
      pt: 'Explore a rica tradição literária cabo-verdiana em crioulo.',
      cv: 'Esplora riku tradison literáriu kabuverdianu na kriolu.'
    },
    content: {
      pt: 'A literatura cabo-verdiana em crioulo é rica e expressiva. Desde Eugénio Tavares até autores contemporâneos, a poesia e prosa crioula capturam a essência da experiência cabo-verdiana, incluindo temas de emigração, saudade e identidade.',
      cv: 'Literatura kabuverdianu na kriolu é riku y espresívu. Dês di Eugéniu Tavaris té autór kontemporáneu, poezia y proza kriolu ta katura esênsia di esperiênsia kabuverdianu, inkluíndu tema di emigrason, saudadi y identidadi.'
    },
    vocabulary: [
      { cv: 'literatura', pt: 'literatura' },
      { cv: 'poezia', pt: 'poesia' },
      { cv: 'poeta', pt: 'poeta' },
      { cv: 'autór', pt: 'autor' },
      { cv: 'livru', pt: 'livro' },
      { cv: 'poema', pt: 'poema' },
      { cv: 'verso', pt: 'verso' },
      { cv: 'rima', pt: 'rima' },
      { cv: 'emigrason', pt: 'emigração' },
      { cv: 'identidadi', pt: 'identidade' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: Eugénio Tavares foi um grande _____',
          cv: 'Kompleta: Eugéniu Tavaris foi un grandi _____'
        },
        answer: 'poeta'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Eu gosto de ler poesia"',
          cv: 'Traduz: "N gosta di le poezia"'
        },
        answer: 'N gosta di le poezia'
      }
    ]
  },

  // BASIC - LIÇÕES BÁSICAS (5 leçons supplémentaires - Total: 10)
  {
    id: 30,
    level: 'beginner',
    category: 'basic',
    title: {
      pt: 'Dias da Semana e Meses',
      cv: 'Dia di Simana y Mes'
    },
    description: {
      pt: 'Aprenda os dias da semana e meses do ano em crioulo.',
      cv: 'Aprende dia di simana y mes di anu na kriolu.'
    },
    content: {
      pt: 'Conhecer os dias da semana e meses é essencial para marcar compromissos e falar sobre datas. O crioulo cabo-verdiano mantém nomes similares ao português, mas com adaptações fonéticas próprias.',
      cv: 'Konxe dia di simana y mes é esensial pa marka kompromisu y papia sobri data. Kriolu kabuverdianu ta mantén nomi similar ku purtuges, mas ku adaptason fonétiku própryu.'
    },
    vocabulary: [
      { cv: 'sigunda-féra', pt: 'segunda-feira' },
      { cv: 'tersa-féra', pt: 'terça-feira' },
      { cv: 'kuarta-féra', pt: 'quarta-feira' },
      { cv: 'kinta-féra', pt: 'quinta-feira' },
      { cv: 'sesta-féra', pt: 'sexta-feira' },
      { cv: 'sábadu', pt: 'sábado' },
      { cv: 'dumingu', pt: 'domingo' },
      { cv: 'janéru', pt: 'janeiro' },
      { cv: 'fevréru', pt: 'fevereiro' },
      { cv: 'marsu', pt: 'março' },
      { cv: 'abril', pt: 'abril' },
      { cv: 'maiu', pt: 'maio' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Qual é o primeiro dia da semana?',
          cv: 'Kal é priméru dia di simana?'
        },
        options: ['dumingu', 'sigunda-féra', 'sábadu', 'tersa-féra'],
        answer: 'sigunda-féra'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Hoje é sexta-feira"',
          cv: 'Traduz: "Oji é sesta-féra"'
        },
        answer: 'Oji é sesta-féra'
      }
    ]
  },
  {
    id: 31,
    level: 'beginner',
    category: 'basic',
    title: {
      pt: 'Partes do Corpo',
      cv: 'Parti di Korpu'
    },
    description: {
      pt: 'Vocabulário sobre as partes do corpo humano.',
      cv: 'Vokabuláriu sobri parti di korpu umanu.'
    },
    content: {
      pt: 'Conhecer as partes do corpo é importante para comunicar sobre saúde, descrever pessoas e expressar sensações físicas. Este vocabulário é usado frequentemente no dia a dia.',
      cv: 'Konxe parti di korpu é importanti pa komunika sobri saúdi, deskrebe pesoa y espresa sensason físiku. Es vokabuláriu ta ser uzadu frekuentimenti na dia a dia.'
    },
    vocabulary: [
      { cv: 'kabesa', pt: 'cabeça' },
      { cv: 'olhu', pt: 'olho' },
      { cv: 'nariz', pt: 'nariz' },
      { cv: 'boka', pt: 'boca' },
      { cv: 'orelha', pt: 'orelha' },
      { cv: 'mãu', pt: 'mão' },
      { cv: 'braçu', pt: 'braço' },
      { cv: 'pé', pt: 'pé' },
      { cv: 'perna', pt: 'perna' },
      { cv: 'barriga', pt: 'barriga' },
      { cv: 'kosta', pt: 'costas' },
      { cv: 'peitu', pt: 'peito' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: N ten dor na _____ (cabeça)',
          cv: 'Kompleta: N ten dor na _____ (kabesa)'
        },
        answer: 'kabesa'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Com que vemos?',
          cv: 'Ku kuze ki nu ta odja?'
        },
        options: ['nariz', 'olhu', 'orelha', 'boka'],
        answer: 'olhu'
      }
    ]
  },
  {
    id: 32,
    level: 'beginner',
    category: 'basic',
    title: {
      pt: 'Roupas e Acessórios',
      cv: 'Ropa y Asesoriu'
    },
    description: {
      pt: 'Vocabulário sobre vestuário e acessórios pessoais.',
      cv: 'Vokabuláriu sobri vestuáriu y asesoriu pesoal.'
    },
    content: {
      pt: 'Saber nomear roupas e acessórios é útil para fazer compras, descrever o que vestimos e falar sobre moda. Este vocabulário é essencial para situações do cotidiano.',
      cv: 'Sabe nomia ropa y asesoriu é útil pa faze kompra, deskrebe kuze ki nu ta visti y papia sobri moda. Es vokabuláriu é esensial pa situason di kotidjanu.'
    },
    vocabulary: [
      { cv: 'kamiza', pt: 'camisa' },
      { cv: 'kalsa', pt: 'calça' },
      { cv: 'vestidu', pt: 'vestido' },
      { cv: 'sapatu', pt: 'sapato' },
      { cv: 'xapéu', pt: 'chapéu' },
      { cv: 'óklus', pt: 'óculos' },
      { cv: 'réloju', pt: 'relógio' },
      { cv: 'kolar', pt: 'colar' },
      { cv: 'anel', pt: 'anel' },
      { cv: 'sintu', pt: 'cinto' },
      { cv: 'meia', pt: 'meia' },
      { cv: 'jaketa', pt: 'jaqueta' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como se diz "Eu uso óculos"?',
          cv: 'Kuma ki ta fala "N ta uza óklus"?'
        },
        answer: 'N ta uza óklus'
      },
      {
        type: 'completion',
        question: {
          pt: 'Complete: El ta visti _____ branku (camisa branca)',
          cv: 'Kompleta: El ta visti _____ branku'
        },
        answer: 'kamiza'
      }
    ]
  },
  {
    id: 33,
    level: 'intermediate',
    category: 'basic',
    title: {
      pt: 'Meios de Transporte',
      cv: 'Meyu di Transporti'
    },
    description: {
      pt: 'Vocabulário sobre diferentes meios de transporte.',
      cv: 'Vokabuláriu sobri diferenti meyu di transporti.'
    },
    content: {
      pt: 'Os meios de transporte são essenciais para a mobilidade em Cabo Verde. Conhecer este vocabulário ajuda a navegar pelas ilhas, pedir informações e planejar viagens.',
      cv: 'Meyu di transporti é esensial pa mobilidadi na Kabu Verdi. Konxe es vokabuláriu ta djuda navega pa ilha, pidi informason y planea viaji.'
    },
    vocabulary: [
      { cv: 'karru', pt: 'carro' },
      { cv: 'ônibus', pt: 'ônibus' },
      { cv: 'avião', pt: 'avião' },
      { cv: 'barku', pt: 'barco' },
      { cv: 'bisikleta', pt: 'bicicleta' },
      { cv: 'mota', pt: 'moto' },
      { cv: 'táxi', pt: 'táxi' },
      { cv: 'tren', pt: 'trem' },
      { cv: 'alugé', pt: 'aluguel (hiace)' },
      { cv: 'ferry', pt: 'ferry' },
      { cv: 'helikópteru', pt: 'helicóptero' },
      { cv: 'kaminhão', pt: 'caminhão' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Qual transporte voa?',
          cv: 'Kal transporti ta vua?'
        },
        options: ['karru', 'barku', 'avião', 'ônibus'],
        answer: 'avião'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Vou de ônibus"',
          cv: 'Traduz: "N ba di ônibus"'
        },
        answer: 'N ba di ônibus'
      }
    ]
  },
  {
    id: 34,
    level: 'intermediate',
    category: 'basic',
    title: {
      pt: 'Animais e Natureza',
      cv: 'Animal y Natureza'
    },
    description: {
      pt: 'Vocabulário sobre animais domésticos, selvagens e elementos da natureza.',
      cv: 'Vokabuláriu sobri animal doméstiku, selvaji y elementu di natureza.'
    },
    content: {
      pt: 'Cabo Verde tem uma fauna única e paisagens naturais diversas. Este vocabulário ajuda a descrever animais locais, falar sobre meio ambiente e apreciar a natureza das ilhas.',
      cv: 'Kabu Verdi ten un fauna úniku y paizaji natural diversu. Es vokabuláriu ta djuda deskrebe animal lokal, papia sobri meyu ambienti y apresia natureza di ilha.'
    },
    vocabulary: [
      { cv: 'kãu', pt: 'cão' },
      { cv: 'gatu', pt: 'gato' },
      { cv: 'porku', pt: 'porco' },
      { cv: 'kabra', pt: 'cabra' },
      { cv: 'galinha', pt: 'galinha' },
      { cv: 'pásaru', pt: 'pássaro' },
      { cv: 'pesi', pt: 'peixe' },
      { cv: 'mar', pt: 'mar' },
      { cv: 'montanha', pt: 'montanha' },
      { cv: 'árvuri', pt: 'árvore' },
      { cv: 'flor', pt: 'flor' },
      { cv: 'pedra', pt: 'pedra' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: _____ ta ladra (o cão late)',
          cv: 'Kompleta: _____ ta ladra'
        },
        answer: 'Kãu'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Onde vivem os peixes?',
          cv: 'Undi ki pesi ta vivi?'
        },
        options: ['montanha', 'mar', 'árvuri', 'pedra'],
        answer: 'mar'
      }
    ]
  },

  // CONVERSATION - LIÇÕES DE CONVERSAÇÃO (5 leçons supplémentaires - Total: 10)
  {
    id: 35,
    level: 'intermediate',
    category: 'conversation',
    title: {
      pt: 'No Hospital e Médico',
      cv: 'Na Ospital y Médiku'
    },
    description: {
      pt: 'Vocabulário e expressões para situações médicas.',
      cv: 'Vokabuláriu y espresão pa situason médiku.'
    },
    content: {
      pt: 'Saber comunicar sobre saúde e sintomas é crucial em emergências. Este vocabulário ajuda a descrever problemas de saúde e entender orientações médicas.',
      cv: 'Sabe komunika sobri saúdi y sintoma é krusial na emerjênsia. Es vokabuláriu ta djuda deskrebe problema di saúdi y komprende orientason médiku.'
    },
    vocabulary: [
      { cv: 'médiku', pt: 'médico' },
      { cv: 'enfermeru', pt: 'enfermeiro' },
      { cv: 'ospital', pt: 'hospital' },
      { cv: 'dor', pt: 'dor' },
      { cv: 'febre', pt: 'febre' },
      { cv: 'remédiu', pt: 'remédio' },
      { cv: 'konsulta', pt: 'consulta' },
      { cv: 'ezami', pt: 'exame' },
      { cv: 'sintoma', pt: 'sintoma' },
      { cv: 'tratamentu', pt: 'tratamento' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como dizer "Estou com dor de cabeça"?',
          cv: 'Kuma fala "N ten dor di kabesa"?'
        },
        answer: 'N ten dor di kabesa'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Onde vamos quando estamos doentes?',
          cv: 'Undi nu ta bai kuandu nu sta duenti?'
        },
        options: ['merkadu', 'ospital', 'eskola', 'igreja'],
        answer: 'ospital'
      }
    ]
  },
  {
    id: 36,
    level: 'intermediate',
    category: 'conversation',
    title: {
      pt: 'Na Escola e Universidade',
      cv: 'Na Eskola y Universidadi'
    },
    description: {
      pt: 'Vocabulário educacional e acadêmico.',
      cv: 'Vokabuláriu edukasional y akadémiku.'
    },
    content: {
      pt: 'A educação é fundamental em Cabo Verde. Este vocabulário ajuda a falar sobre estudos, disciplinas e vida acadêmica.',
      cv: 'Edukason é fundamental na Kabu Verdi. Es vokabuláriu ta djuda papia sobri studu, disiplina y vida akadémiku.'
    },
    vocabulary: [
      { cv: 'eskola', pt: 'escola' },
      { cv: 'universidadi', pt: 'universidade' },
      { cv: 'profesor', pt: 'professor' },
      { cv: 'studanti', pt: 'estudante' },
      { cv: 'livru', pt: 'livro' },
      { cv: 'kadérnu', pt: 'caderno' },
      { cv: 'lápis', pt: 'lápis' },
      { cv: 'prova', pt: 'prova' },
      { cv: 'nota', pt: 'nota' },
      { cv: 'diploma', pt: 'diploma' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: _____ ta sina na eskola (professor ensina na escola)',
          cv: 'Kompleta: _____ ta sina na eskola'
        },
        answer: 'Profesor'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Preciso estudar para a prova"',
          cv: 'Traduz: "N presis studa pa prova"'
        },
        answer: 'N presis studa pa prova'
      }
    ]
  },
  {
    id: 37,
    level: 'advanced',
    category: 'conversation',
    title: {
      pt: 'No Trabalho e Profissões',
      cv: 'Na Trabadju y Profison'
    },
    description: {
      pt: 'Vocabulário sobre trabalho e diferentes profissões.',
      cv: 'Vokabuláriu sobri trabadju y diferenti profison.'
    },
    content: {
      pt: 'Falar sobre trabalho e profissões é essencial para networking e oportunidades. Este vocabulário cobre diversas áreas profissionais.',
      cv: 'Papia sobri trabadju y profison é esensial pa networking y oportunidadi. Es vokabuláriu ta kobri diversu área profesional.'
    },
    vocabulary: [
      { cv: 'trabadju', pt: 'trabalho' },
      { cv: 'xefe', pt: 'chefe' },
      { cv: 'kolega', pt: 'colega' },
      { cv: 'saláriu', pt: 'salário' },
      { cv: 'emprégu', pt: 'emprego' },
      { cv: 'entrevista', pt: 'entrevista' },
      { cv: 'kontratu', pt: 'contrato' },
      { cv: 'férias', pt: 'férias' },
      { cv: 'promosão', pt: 'promoção' },
      { cv: 'aposentadoria', pt: 'aposentadoria' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Quem dirige a empresa?',
          cv: 'Ken ki ta diriji empresa?'
        },
        options: ['kolega', 'xefe', 'studanti', 'klenti'],
        answer: 'xefe'
      },
      {
        type: 'translation',
        question: {
          pt: 'Como dizer "Procuro trabalho"?',
          cv: 'Kuma fala "N ta prokurou trabadju"?'
        },
        answer: 'N ta prokurou trabadju'
      }
    ]
  },
  {
    id: 38,
    level: 'advanced',
    category: 'conversation',
    title: {
      pt: 'Viagens e Turismo',
      cv: 'Viaji y Turizmu'
    },
    description: {
      pt: 'Vocabulário para viagens entre ilhas e turismo.',
      cv: 'Vokabuláriu pa viaji entri ilha y turizmu.'
    },
    content: {
      pt: 'Cabo Verde é um destino turístico. Saber falar sobre viagens, hotéis e atrações é útil para trabalhar no turismo ou viajar.',
      cv: 'Kabu Verdi é un destinu turístiku. Sabe papia sobri viaji, hotel y atrason é útil pa trabadja na turizmu o viaja.'
    },
    vocabulary: [
      { cv: 'viaji', pt: 'viagem' },
      { cv: 'turista', pt: 'turista' },
      { cv: 'hotel', pt: 'hotel' },
      { cv: 'praia', pt: 'praia' },
      { cv: 'aeroportu', pt: 'aeroporto' },
      { cv: 'bilheti', pt: 'bilhete' },
      { cv: 'rezerva', pt: 'reserva' },
      { cv: 'guia', pt: 'guia' },
      { cv: 'monumentu', pt: 'monumento' },
      { cv: 'lembransa', pt: 'lembrança' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: N kere faze _____ di hotel (reserva de hotel)',
          cv: 'Kompleta: N kere faze _____ di hotel'
        },
        answer: 'rezerva'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Onde os aviões pousam?',
          cv: 'Undi avião ta pousa?'
        },
        options: ['praia', 'hotel', 'aeroportu', 'merkadu'],
        answer: 'aeroportu'
      }
    ]
  },
  {
    id: 39,
    level: 'advanced',
    category: 'conversation',
    title: {
      pt: 'Emergências e Problemas',
      cv: 'Emerjênsia y Problema'
    },
    description: {
      pt: 'Vocabulário para situações de emergência e problemas.',
      cv: 'Vokabuláriu pa situason di emerjênsia y problema.'
    },
    content: {
      pt: 'Em situações de emergência, saber comunicar rapidamente é vital. Este vocabulário pode salvar vidas e resolver problemas urgentes.',
      cv: 'Na situason di emerjênsia, sabe komunika rapidamenti é vital. Es vokabuláriu podi salva vida y resolve problema urjenti.'
    },
    vocabulary: [
      { cv: 'emerjênsia', pt: 'emergência' },
      { cv: 'ajuda', pt: 'ajuda' },
      { cv: 'polísia', pt: 'polícia' },
      { cv: 'bomberu', pt: 'bombeiro' },
      { cv: 'ambulânsia', pt: 'ambulância' },
      { cv: 'asidenti', pt: 'acidente' },
      { cv: 'fogu', pt: 'fogo' },
      { cv: 'ladrão', pt: 'ladrão' },
      { cv: 'perdu', pt: 'perdido' },
      { cv: 'urjenti', pt: 'urgente' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Como pedir ajuda em emergência?',
          cv: 'Kuma pidi ajuda na emerjênsia?'
        },
        answer: 'Djuda-m! É emerjênsia!'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Quem chamamos em caso de fogo?',
          cv: 'Ken ki nu ta xama na kazu di fogu?'
        },
        options: ['médiku', 'bomberu', 'profesor', 'garsãu'],
        answer: 'bomberu'
      }
    ]
  },

  // GRAMMAR - LIÇÕES DE GRAMÁTICA (5 leçons supplémentaires - Total: 10)
  {
    id: 40,
    level: 'intermediate',
    category: 'grammar',
    title: {
      pt: 'Adjetivos e Concordância',
      cv: 'Adjetivu y Konkordânsia'
    },
    description: {
      pt: 'Como usar adjetivos e fazer concordância em crioulo.',
      cv: 'Kuma uza adjetivu y faze konkordânsia na kriolu.'
    },
    content: {
      pt: 'Os adjetivos em crioulo são mais simples que no português. Não há concordância de gênero, mas há regras específicas de posição e uso.',
      cv: 'Adjetivu na kriolu é más simpli ki na purtuges. Ka ten konkordânsia di jéneru, mas ten regra ispesífiku di pozison y uzu.'
    },
    vocabulary: [
      { cv: 'bonitu', pt: 'bonito' },
      { cv: 'feu', pt: 'feio' },
      { cv: 'grandi', pt: 'grande' },
      { cv: 'pikininu', pt: 'pequeno' },
      { cv: 'novu', pt: 'novo' },
      { cv: 'bedju', pt: 'velho' },
      { cv: 'altu', pt: 'alto' },
      { cv: 'baxu', pt: 'baixo' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: Kasa _____ (casa bonita)',
          cv: 'Kompleta: Kasa _____'
        },
        answer: 'bonitu'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Como se diz "homem alto"?',
          cv: 'Kuma fala "omi altu"?'
        },
        options: ['omi altu', 'altu omi', 'omi di altu', 'altu di omi'],
        answer: 'omi altu'
      }
    ]
  },
  {
    id: 41,
    level: 'intermediate',
    category: 'grammar',
    title: {
      pt: 'Preposições Essenciais',
      cv: 'Prepozison Esensial'
    },
    description: {
      pt: 'Principais preposições do crioulo cabo-verdiano.',
      cv: 'Prinsipal prepozison di kriolu kabuverdianu.'
    },
    content: {
      pt: 'As preposições conectam palavras e expressam relações espaciais, temporais e outras. São fundamentais para construir frases corretas.',
      cv: 'Prepozison ta konekta palavra y espresa relason ispasial, temporal y otru. É fundamental pa konstrui frazi koretu.'
    },
    vocabulary: [
      { cv: 'na', pt: 'em/na' },
      { cv: 'di', pt: 'de/do' },
      { cv: 'pa', pt: 'para' },
      { cv: 'ku', pt: 'com' },
      { cv: 'sin', pt: 'sem' },
      { cv: 'sobri', pt: 'sobre' },
      { cv: 'baxu di', pt: 'embaixo de' },
      { cv: 'riba di', pt: 'em cima de' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: N ta bai _____ eskola (vou para escola)',
          cv: 'Kompleta: N ta bai _____ eskola'
        },
        answer: 'pa'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Livro em cima da mesa"',
          cv: 'Traduz: "Livru riba di mesa"'
        },
        answer: 'Livru riba di mesa'
      }
    ]
  },
  {
    id: 42,
    level: 'advanced',
    category: 'grammar',
    title: {
      pt: 'Expressões Idiomáticas',
      cv: 'Espresão Idiomátiku'
    },
    description: {
      pt: 'Expressões típicas do crioulo cabo-verdiano.',
      cv: 'Espresão típiku di kriolu kabuverdianu.'
    },
    content: {
      pt: 'As expressões idiomáticas dão cor e autenticidade à linguagem. Conhecê-las ajuda a entender melhor a cultura e falar de forma mais natural.',
      cv: 'Espresão idiomátiku ta da kór y autentisidadi na linguaji. Konxe-s ta djuda komprende médjor kultura y papia di forma más natural.'
    },
    vocabulary: [
      { cv: 'ta dadu', pt: 'está bem/ok' },
      { cv: 'ka ta nada', pt: 'não é nada' },
      { cv: 'modi ki é', pt: 'como é que é' },
      { cv: 'bu ta odja', pt: 'você está vendo' },
      { cv: 'é mesmu', pt: 'é mesmo' },
      { cv: 'ka bu kré', pt: 'se você quiser' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Como responder "obrigado"?',
          cv: 'Kuma risponde "obrigadu"?'
        },
        options: ['ta dadu', 'ka ta nada', 'é mesmu', 'modi ki é'],
        answer: 'ka ta nada'
      },
      {
        type: 'translation',
        question: {
          pt: 'O que significa "ta dadu"?',
          cv: 'Kuze ki "ta dadu" ta kere fala?'
        },
        answer: 'está bem'
      }
    ]
  },
  {
    id: 43,
    level: 'advanced',
    category: 'grammar',
    title: {
      pt: 'Comparativos e Superlativos',
      cv: 'Komparativu y Superlativu'
    },
    description: {
      pt: 'Como fazer comparações em crioulo cabo-verdiano.',
      cv: 'Kuma faze komparason na kriolu kabuverdianu.'
    },
    content: {
      pt: 'As comparações em crioulo usam estruturas específicas com "más ki" (mais que), "menu ki" (menos que) e outras expressões para comparar qualidades e quantidades.',
      cv: 'Komparason na kriolu ta uza strutura ispesífiku ku "más ki" (más ki), "menu ki" (menu ki) y otru espresão pa kompara kualidadi y kuantidadi.'
    },
    vocabulary: [
      { cv: 'más ki', pt: 'mais que' },
      { cv: 'menu ki', pt: 'menos que' },
      { cv: 'igual ku', pt: 'igual a' },
      { cv: 'más bon', pt: 'melhor' },
      { cv: 'más mau', pt: 'pior' },
      { cv: 'más grandi', pt: 'maior' },
      { cv: 'más pikininu', pt: 'menor' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: El é _____ altu ki mi (ele é mais alto que eu)',
          cv: 'Kompleta: El é _____ altu ki mi'
        },
        answer: 'más'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Esta casa é melhor"',
          cv: 'Traduz: "Es kasa é más bon"'
        },
        answer: 'Es kasa é más bon'
      }
    ]
  },
  {
    id: 44,
    level: 'advanced',
    category: 'grammar',
    title: {
      pt: 'Condicionais e Hipóteses',
      cv: 'Kondisional y Ipótezi'
    },
    description: {
      pt: 'Estruturas condicionais e hipotéticas em crioulo.',
      cv: 'Strutura kondisional y ipotetiku na kriolu.'
    },
    content: {
      pt: 'As estruturas condicionais expressam situações hipotéticas usando "si" (se), "ka bu" (se você), e outras formas para criar frases condicionais.',
      cv: 'Strutura kondisional ta espresa situason ipotetiku uzandu "si" (si), "ka bu" (ka bu), y otru forma pa kria frazi kondisional.'
    },
    vocabulary: [
      { cv: 'si', pt: 'se' },
      { cv: 'ka bu', pt: 'se você' },
      { cv: 'intão', pt: 'então' },
      { cv: 'kazu ki', pt: 'caso que' },
      { cv: 'supondo ki', pt: 'supondo que' },
      { cv: 'seria', pt: 'seria' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: _____ txuba, nu ka ta sai (se chover, não saímos)',
          cv: 'Kompleta: _____ txuba, nu ka ta sai'
        },
        answer: 'Si'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Se você quiser, vamos"',
          cv: 'Traduz: "Ka bu kré, nu ba"'
        },
        answer: 'Ka bu kré, nu ba'
      }
    ]
  },

  // MINISTRY - LIÇÕES DE MINISTÉRIO (5 leçons supplémentaires - Total: 10)
  {
    id: 45,
    level: 'intermediate',
    category: 'ministry',
    title: {
      pt: 'Preparação de Discursos',
      cv: 'Preparason di Diskrisu'
    },
    description: {
      pt: 'Como preparar e apresentar discursos na Escola do Ministério.',
      cv: 'Kuma prepara y aprezenta diskrisu na Eskola di Ministériu.'
    },
    content: {
      pt: 'A preparação de discursos é fundamental na Escola do Ministério Teocrático. Saber estruturar, pesquisar e apresentar discursos ajuda no crescimento espiritual.',
      cv: 'Preparason di diskrisu é fundamental na Eskola di Ministériu Teokrátiku. Sabe strutura, peskiza y aprezenta diskrisu ta djuda na kresimentu spiritual.'
    },
    vocabulary: [
      { cv: 'diskrisu', pt: 'discurso' },
      { cv: 'tema', pt: 'tema' },
      { cv: 'introduson', pt: 'introdução' },
      { cv: 'konkluzão', pt: 'conclusão' },
      { cv: 'pontu prinsipal', pt: 'ponto principal' },
      { cv: 'ilustrason', pt: 'ilustração' },
      { cv: 'aplikason', pt: 'aplicação' },
      { cv: 'audiênsia', pt: 'audiência' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'O que vem primeiro no discurso?',
          cv: 'Kuze ki ta ben primeiru na diskrisu?'
        },
        options: ['konkluzão', 'introduson', 'aplikason', 'ilustrason'],
        answer: 'introduson'
      },
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Preciso preparar meu discurso"',
          cv: 'Traduz: "N presis prepara nha diskrisu"'
        },
        answer: 'N presis prepara nha diskrisu'
      }
    ]
  },
  {
    id: 46,
    level: 'intermediate',
    category: 'ministry',
    title: {
      pt: 'Leitura Pública da Bíblia',
      cv: 'Leitura Públiku di Bíblia'
    },
    description: {
      pt: 'Técnicas para leitura pública eficaz das Escrituras.',
      cv: 'Téknika pa leitura públiku efikás di Skritura.'
    },
    content: {
      pt: 'A leitura pública da Bíblia requer preparação, boa dicção e compreensão do texto. É uma honra ler as Escrituras para a congregação.',
      cv: 'Leitura públiku di Bíblia ta presis preparason, bon dikson y komprensão di testu. É un onra le Skritura pa kongregason.'
    },
    vocabulary: [
      { cv: 'leitura', pt: 'leitura' },
      { cv: 'versíkulu', pt: 'versículo' },
      { cv: 'kapítulu', pt: 'capítulo' },
      { cv: 'dikson', pt: 'dicção' },
      { cv: 'entonason', pt: 'entonação' },
      { cv: 'pausa', pt: 'pausa' },
      { cv: 'ênfazi', pt: 'ênfase' },
      { cv: 'klaru', pt: 'claro' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: N ta le _____ 3 (leio capítulo 3)',
          cv: 'Kompleta: N ta le _____ 3'
        },
        answer: 'kapítulu'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'O que é importante na leitura pública?',
          cv: 'Kuze ki é importanti na leitura públiku?'
        },
        options: ['rapidez', 'dikson klaru', 'voz baxu', 'pressa'],
        answer: 'dikson klaru'
      }
    ]
  },
  {
    id: 47,
    level: 'advanced',
    category: 'ministry',
    title: {
      pt: 'Ensino Bíblico Eficaz',
      cv: 'Ensinu Bíbliku Efikás'
    },
    description: {
      pt: 'Técnicas para ensinar a Bíblia de forma eficaz.',
      cv: 'Téknika pa sina Bíblia di forma efikás.'
    },
    content: {
      pt: 'O ensino bíblico eficaz envolve preparação, uso de perguntas, aplicação prática e amor genuíno pelos estudantes.',
      cv: 'Ensinu bíbliku efikás ta involve preparason, uzu di pergunta, aplikason prátiku y amor jenuínu pa studanti.'
    },
    vocabulary: [
      { cv: 'ensinu', pt: 'ensino' },
      { cv: 'métodu', pt: 'método' },
      { cv: 'pergunta', pt: 'pergunta' },
      { cv: 'aplikason', pt: 'aplicação' },
      { cv: 'pasiênsia', pt: 'paciência' },
      { cv: 'amor', pt: 'amor' },
      { cv: 'komprensão', pt: 'compreensão' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Ensinar requer paciência"',
          cv: 'Traduz: "Sina ta presis pasiênsia"'
        },
        answer: 'Sina ta presis pasiênsia'
      }
    ]
  },
  {
    id: 48,
    level: 'advanced',
    category: 'ministry',
    title: {
      pt: 'Visitas Pastorais',
      cv: 'Vizita Pastoral'
    },
    description: {
      pt: 'Como fazer visitas pastorais e encorajar os irmãos.',
      cv: 'Kuma faze vizita pastoral y enkoraja irmãu.'
    },
    content: {
      pt: 'As visitas pastorais fortalecem a congregação através do encorajamento pessoal e cuidado espiritual.',
      cv: 'Vizita pastoral ta fortalese kongregason através di enkorajamentu pesoal y kuidadu spiritual.'
    },
    vocabulary: [
      { cv: 'vizita', pt: 'visita' },
      { cv: 'pastor', pt: 'pastor' },
      { cv: 'enkorajamentu', pt: 'encorajamento' },
      { cv: 'kuidadu', pt: 'cuidado' },
      { cv: 'konselu', pt: 'conselho' },
      { cv: 'apoiu', pt: 'apoio' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: Pastor ta faze _____ pa enkoraja irmãu',
          cv: 'Kompleta: Pastor ta faze _____ pa enkoraja irmãu'
        },
        answer: 'vizita'
      }
    ]
  },
  {
    id: 49,
    level: 'advanced',
    category: 'ministry',
    title: {
      pt: 'Assembleias e Congressos',
      cv: 'Asembléia y Kongrèsu'
    },
    description: {
      pt: 'Vocabulário para assembleias de circuito e congressos regionais.',
      cv: 'Vokabuláriu pa asembléia di sirkuitu y kongrèsu rejional.'
    },
    content: {
      pt: 'As assembleias e congressos são ocasiões especiais de fortalecimento espiritual e confraternização.',
      cv: 'Asembléia y kongrèsu é okazião ispesial di fortalese spiritual y konfraternizason.'
    },
    vocabulary: [
      { cv: 'asembléia', pt: 'assembleia' },
      { cv: 'kongrèsu', pt: 'congresso' },
      { cv: 'sirkuitu', pt: 'circuito' },
      { cv: 'rejional', pt: 'regional' },
      { cv: 'programa', pt: 'programa' },
      { cv: 'batizmu', pt: 'batismo' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Onde acontecem os batismos?',
          cv: 'Undi ki batizmu ta akontese?'
        },
        options: ['na kasa', 'na asembléia', 'na merkadu', 'na eskola'],
        answer: 'na asembléia'
      }
    ]
  },

  // CULTURE - LIÇÕES DE CULTURA (5 leçons supplémentaires - Total: 10)
  {
    id: 50,
    level: 'intermediate',
    category: 'culture',
    title: {
      pt: 'Provérbios e Ditados',
      cv: 'Provérbiu y Ditadu'
    },
    description: {
      pt: 'Provérbios tradicionais cabo-verdianos e seus significados.',
      cv: 'Provérbiu tradisional kabuverdianu y ses signifikadu.'
    },
    content: {
      pt: 'Os provérbios cabo-verdianos transmitem sabedoria ancestral e valores culturais através de expressões concisas e memoráveis.',
      cv: 'Provérbiu kabuverdianu ta transmiti sabedoria ansestral y valór kultural através di espresão konsizu y memorável.'
    },
    vocabulary: [
      { cv: 'provérbiu', pt: 'provérbio' },
      { cv: 'sabedoria', pt: 'sabedoria' },
      { cv: 'tradison', pt: 'tradição' },
      { cv: 'valór', pt: 'valor' },
      { cv: 'signifikadu', pt: 'significado' },
      { cv: 'konselu', pt: 'conselho' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'O que transmitem os provérbios?',
          cv: 'Kuze ki provérbiu ta transmiti?'
        },
        answer: 'sabedoria'
      }
    ]
  },
  {
    id: 51,
    level: 'intermediate',
    category: 'culture',
    title: {
      pt: 'Contos e Lendas',
      cv: 'Kontu y Lenda'
    },
    description: {
      pt: 'Histórias tradicionais e lendas do folclore cabo-verdiano.',
      cv: 'Stória tradisional y lenda di folklóri kabuverdianu.'
    },
    content: {
      pt: 'Os contos e lendas cabo-verdianos preservam a memória coletiva e ensinam valores através de narrativas envolventes.',
      cv: 'Kontu y lenda kabuverdianu ta preserva memória koletivu y sina valór através di narrativa envolenti.'
    },
    vocabulary: [
      { cv: 'kontu', pt: 'conto' },
      { cv: 'lenda', pt: 'lenda' },
      { cv: 'stória', pt: 'história' },
      { cv: 'folklóri', pt: 'folclore' },
      { cv: 'memória', pt: 'memória' },
      { cv: 'narrativa', pt: 'narrativa' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: _____ ta preserva memória di povu',
          cv: 'Kompleta: _____ ta preserva memória di povu'
        },
        answer: 'Kontu'
      }
    ]
  },
  {
    id: 52,
    level: 'advanced',
    category: 'culture',
    title: {
      pt: 'Artesanato Tradicional',
      cv: 'Artezanatu Tradisional'
    },
    description: {
      pt: 'Técnicas e produtos do artesanato cabo-verdiano.',
      cv: 'Téknika y produtu di artezanatu kabuverdianu.'
    },
    content: {
      pt: 'O artesanato cabo-verdiano reflete a criatividade e habilidade dos artesãos locais, usando materiais naturais das ilhas.',
      cv: 'Artezanatu kabuverdianu ta refleti kriatividad y abilidadi di artezãu lokal, uzandu material natural di ilha.'
    },
    vocabulary: [
      { cv: 'artezanatu', pt: 'artesanato' },
      { cv: 'artezãu', pt: 'artesão' },
      { cv: 'kriatividad', pt: 'criatividade' },
      { cv: 'abilidad', pt: 'habilidade' },
      { cv: 'material', pt: 'material' },
      { cv: 'natural', pt: 'natural' }
    ],
    exercises: [
      {
        type: 'multiple_choice',
        question: {
          pt: 'Quem faz artesanato?',
          cv: 'Ken ki ta faze artezanatu?'
        },
        options: ['médiku', 'artezãu', 'profesor', 'pilotu'],
        answer: 'artezãu'
      }
    ]
  },
  {
    id: 53,
    level: 'advanced',
    category: 'culture',
    title: {
      pt: 'Danças Folclóricas',
      cv: 'Dansa Folklóriku'
    },
    description: {
      pt: 'Danças tradicionais de cada ilha de Cabo Verde.',
      cv: 'Dansa tradisional di kada ilha di Kabu Verdi.'
    },
    content: {
      pt: 'Cada ilha cabo-verdiana tem suas danças características que expressam a identidade cultural local e a história do povo.',
      cv: 'Kada ilha kabuverdianu ten ses dansa karakterístiku ki ta espresa identidad kultural lokal y stória di povu.'
    },
    vocabulary: [
      { cv: 'dansa', pt: 'dança' },
      { cv: 'folklóriku', pt: 'folclórico' },
      { cv: 'tradisional', pt: 'tradicional' },
      { cv: 'karakterístiku', pt: 'característico' },
      { cv: 'identidad', pt: 'identidade' },
      { cv: 'kultural', pt: 'cultural' }
    ],
    exercises: [
      {
        type: 'translation',
        question: {
          pt: 'Traduza: "Cada ilha tem sua dança"',
          cv: 'Traduz: "Kada ilha ten si dansa"'
        },
        answer: 'Kada ilha ten si dansa'
      }
    ]
  },
  {
    id: 54,
    level: 'advanced',
    category: 'culture',
    title: {
      pt: 'Geografia das Ilhas',
      cv: 'Jeografia di Ilha'
    },
    description: {
      pt: 'Características geográficas e culturais de cada ilha.',
      cv: 'Karakterístika jeográfiku y kultural di kada ilha.'
    },
    content: {
      pt: 'Cabo Verde é composto por dez ilhas, cada uma com características únicas de geografia, clima e cultura que moldam a identidade local.',
      cv: 'Kabu Verdi é kompoztu pa des ilha, kada un ku karakterístika úniku di jeografia, klima y kultura ki ta molda identidad lokal.'
    },
    vocabulary: [
      { cv: 'jeografia', pt: 'geografia' },
      { cv: 'ilha', pt: 'ilha' },
      { cv: 'karakterístika', pt: 'características' },
      { cv: 'úniku', pt: 'único' },
      { cv: 'klima', pt: 'clima' },
      { cv: 'identidad', pt: 'identidade' }
    ],
    exercises: [
      {
        type: 'completion',
        question: {
          pt: 'Complete: Kabu Verdi ten _____ ilha',
          cv: 'Kompleta: Kabu Verdi ten _____ ilha'
        },
        answer: 'des'
      },
      {
        type: 'multiple_choice',
        question: {
          pt: 'Quantas ilhas tem Cabo Verde?',
          cv: 'Kuantu ilha Kabu Verdi ten?'
        },
        options: ['oitu', 'nóvi', 'des', 'onzi'],
        answer: 'des'
      }
    ]
  }
];

// Função para obter lições por categoria
export const getLessonsByCategory = (category: string) => {
  return lessonsEnriched.filter(lesson => lesson.category === category);
};

// Função para obter lições por nível
export const getLessonsByLevel = (level: string) => {
  return lessonsEnriched.filter(lesson => lesson.level === level);
};

// Contadores por categoria
export const getLessonCategoryCounts = () => {
  return {
    basic: getLessonsByCategory('basic').length,
    conversation: getLessonsByCategory('conversation').length,
    grammar: getLessonsByCategory('grammar').length,
    ministry: getLessonsByCategory('ministry').length,
    culture: getLessonsByCategory('culture').length
  };
};

