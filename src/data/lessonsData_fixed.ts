export interface Lesson {
  id: number;
  category: string;
  level: string;
  title: {
    pt: string;
    kea: string;
  };
  description: {
    pt: string;
    kea: string;
  };
  content: {
    pt: string;
    kea: string;
  };
  examples: Array<{
    pt: string;
    kea: string;
  }>;
  exercises?: Array<{
    type: string;
    question: {
      pt: string;
      kea: string;
    };
    answer: {
      pt: string;
      kea: string;
    };
  }>;
  practicalTips?: {
    pt: string;
    kea: string;
  };
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface MatchingExercise {
  leftItems: string[];
  rightItems: string[];
  correctMatches: number[];
}

export interface Roleplay {
  scenario: string;
  roles: string[];
  dialogue: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Qual é a ordem básica das palavras em crioulo?",
    options: ["Verbo-Sujeito-Objeto", "Sujeito-Verbo-Objeto", "Objeto-Sujeito-Verbo"],
    correctAnswer: 1,
    explanation: "O crioulo usa a ordem Sujeito-Verbo-Objeto, similar ao português."
  },
  {
    question: "Como se diz 'eu como' em crioulo?",
    options: ["N ta kume", "N kume", "N ka kume"],
    correctAnswer: 0,
    explanation: "'N ta kume' usa o marcador 'ta' para o presente habitual."
  },
  {
    question: "Qual marcador indica passado em crioulo?",
    options: ["ta", "dja", "ba"],
    correctAnswer: 2,
    explanation: "'ba' indica ações passadas completadas."
  }
];

export const matchingExercises: MatchingExercise[] = [
  {
    leftItems: ["eu", "tu", "ele", "nós"],
    rightItems: ["N", "Bu", "El", "Nu"],
    correctMatches: [0, 1, 2, 3]
  }
];

export const roleplays: Roleplay[] = [
  {
    scenario: "Cumprimentar um amigo na rua",
    roles: ["Pessoa A", "Pessoa B"],
    dialogue: [
      "Bon dia! Modi bu sta?",
      "Bon dia! N sta bon, obrigadu. Y bo?",
      "N sta bon tanbe. Undi bu ta bai?",
      "N ta bai merkadu. Y bo?"
    ]
  }
];

export const lessonsData: Lesson[] = [
  {
    "id": 1,
    "category": "general",
    "level": "Iniciante",
    "title": {
      "pt": "Introdução ao Crioulo Cabo-verdiano",
      "kea": "Introduson pa Kriolu Kabuverdianu"
    },
    "description": {
      "pt": "Introdução ao Crioulo Cabo-verdiano",
      "kea": "Introduson pa Kriolu Kabuverdianu"
    },
    "content": {
      "pt": "O crioulo cabo-verdiano (Kabuverdianu) é uma língua crioula de base portuguesa falada nas ilhas de Cabo Verde. É a língua materna da maioria dos cabo-verdianos e tem várias variantes regionais, sendo as principais: Sotavento (Santiago, Fogo, Brava, Maio) e Barlavento (São Vicente, Santo Antão, São Nicolau, Sal, Boa Vista).\n\nCaracterísticas principais:\n- Não tem conjugação verbal tradicional\n- Usa marcadores de tempo (ta, dja, ba, ata)\n- Ordem das palavras: Sujeito-Verbo-Objeto\n- Sem concordância de gênero ou número\n- Vocabulário principalmente português com influências africanas",
      "kea": "Kriolu kabuverdianu (Kabuverdianu) é un lingua kriolu di bazi purtugés papiadu na ilha di Kabu Verdi. É lingua materni di maioria di kabuverdianu y ten vária varianti rejional, séndu prinsipal: Sotaventu (Santiagu, Fogu, Brava, Maiu) y Barlaventu (Son Visenti, Santu Antaon, Son Nikolau, Sal, Boa Vista).\n\nKaraterístika prinsipal:\n- Ka ten konjugason verbal tradisional\n- Ta uza markador di tenpu (ta, dja, ba, ata)\n- Orden di parabra: Sujetu-Berbu-Objetu\n- Sin konkordánsia di jéneru o númeru\n- Vokabuláriu prinsipalmenti purtugés ku influénsia afrikanu"
    },
    "examples": [
      {
        "pt": "Santiago: N ka ta papia (Eu não falo)",
        "kea": "Santiagu: N ka ta papia"
      },
      {
        "pt": "São Vicente: M ka ta fala (Eu não falo)",
        "kea": "Son Visenti: M ka ta fala"
      },
      {
        "pt": "Diferenças regionais são significativas",
        "kea": "Diferénsia rejional é sinifikativu"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "kea": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 2,
    "category": "pronouns",
    "level": "Iniciante",
    "title": {
      "pt": "Sistema de Pronomes Pessoais",
      "kea": "Sistema di Pronomi Pesual"
    },
    "description": {
      "pt": "Sistema de Pronomes Pessoais",
      "kea": "Sistema di Pronomi Pesual"
    },
    "content": {
      "pt": "O sistema pronominal do crioulo cabo-verdiano é mais simples que o português:\n\nPronomes Sujeito:\n- N / Mi (eu) - forma curta e longa\n- Bu / Bo (tu/você)\n- El / E (ele/ela) - sem distinção de gênero\n- Nos / Nu (nós)\n- Nhos / Nhós (vocês/vós)\n- Es / Ês (eles/elas)\n\nPronomes Objeto:\n- M / Mi (me/mim)\n- Bu / Bo (te/ti)\n- L / El (o/a, lhe)\n- Nos (nos)\n- Nhos (vos)\n- Es (os/as, lhes)\n\nCaracterísticas:\n- Não há distinção formal/informal (tu/você)\n- Sem distinção de gênero na 3ª pessoa\n- Formas curtas usadas antes de verbos\n- Formas longas usadas em ênfase ou isoladamente",
      "kea": "Sistema pronominal di kriolu kabuverdianu é más sinplis ki purtugés:\n\nPronomi Sujetu:\n- N / Mi (ami) - forma kurtu y longu\n- Bu / Bo (bo)\n- El / E (e) - sin distinson di jéneru\n- Nos / Nu (nu)\n- Nhos / Nhós (nhós)\n- Es / Ês (és)\n\nPronomi Objetu:\n- M / Mi (mi)\n- Bu / Bo (bu)\n- L / El (el)\n- Nos (nos)\n- Nhos (nhos)\n- Es (es)\n\nKaraterístika:\n- Ka ten distinson formal/informal\n- Sin distinson di jéneru na 3ª pesua\n- Forma kurtu uzadu antis di berbu\n- Forma longu uzadu in énfazi o izoladamente"
    },
    "examples": [
      {
        "pt": "N ta bai (Eu vou) - forma curta",
        "kea": "N ta bai - forma kurtu"
      },
      {
        "pt": "Mi ta bai (EU vou) - forma longa, ênfase",
        "kea": "Mi ta bai - forma longu, énfazi"
      },
      {
        "pt": "Bu odja-m? (Você me viu?)",
        "kea": "Bu odja-m?"
      },
      {
        "pt": "El da-l livru (Ele deu-lhe o livro)",
        "kea": "El da-l livru"
      },
      {
        "pt": "Nos ta papia ku nhos (Nós falamos com vocês)",
        "kea": "Nos ta papia ku nhos"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "kea": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 3,
    "category": "verbs",
    "level": "Iniciante",
    "title": {
      "pt": "Marcadores de Tempo, Modo e Aspecto (TMA)",
      "kea": "Markador di Tenpu, Modu y Aspetu (TMA)"
    },
    "description": {
      "pt": "Marcadores de Tempo, Modo e Aspecto (TMA)",
      "kea": "Markador di Tenpu, Modu y Aspetu (TMA)"
    },
    "content": {
      "pt": "O crioulo cabo-verdiano não conjuga verbos. Em vez disso, usa marcadores TMA antes do verbo:\n\n1. TA - Presente habitual/progressivo\n   - Ações habituais: N ta trabadja (Eu trabalho)\n   - Ações em progresso: N ta trabadja (Estou trabalhando)\n\n2. DJA/JA - Perfectivo (ação completada)\n   - N dja kume (Eu já comi)\n   - El dja bai (Ele já foi)\n\n3. BA - Passado\n   - N ba bai (Eu fui)\n   - Es ba faze (Eles fizeram)\n\n4. ATA/TA BAI - Futuro\n   - N ata faze (Eu vou fazer)\n   - Bu ta bai kume (Você vai comer)\n\n5. STABA/TAVA - Passado progressivo\n   - N staba trabadja (Eu estava trabalhando)\n\n6. KA - Negação\n   - N ka ta bai (Eu não vou)\n   - El ka kume (Ele não come)\n\nCombinações possíveis:\n- Ka + ta: negação do habitual\n- Ka + dja: negação do perfectivo\n- Ta + ka: progressivo negativo",
      "kea": "Kriolu kabuverdianu ka ta konjuga berbu. In vez dissu, ta uza markador TMA antis di berbu:\n\n1. TA - Prezenti abitual/progresivu\n   - Ason abitual: N ta trabadja (N ta trabadja)\n   - Ason in progresu: N ta trabadja (N sta trabadja)\n\n2. DJA/JA - Perfetivu (ason konpletadu)\n   - N dja kume (N dja kume)\n   - El dja bai (El dja bai)\n\n3. BA - Pasadu\n   - N ba bai (N ba bai)\n   - Es ba faze (Es ba faze)\n\n4. ATA/TA BAI - Futuru\n   - N ata faze (N ata faze)\n   - Bu ta bai kume (Bu ta bai kume)\n\n5. STABA/TAVA - Pasadu progresivu\n   - N staba trabadja (N staba trabadja)\n\n6. KA - Negason\n   - N ka ta bai (N ka ta bai)\n   - El ka kume (El ka kume)\n\nKombinason posível:\n- Ka + ta: negason di abitual\n- Ka + dja: negason di perfetivu\n- Ta + ka: progresivu negativu"
    },
    "examples": [
      {
        "pt": "N ta kume pan kada dia (Como pão todo dia)",
        "kea": "N ta kume pan kada dia"
      },
      {
        "pt": "N dja kume (Já comi)",
        "kea": "N dja kume"
      },
      {
        "pt": "N ba kume onti (Comi ontem)",
        "kea": "N ba kume onti"
      },
      {
        "pt": "N ata kume manha (Vou comer amanhã)",
        "kea": "N ata kume manha"
      },
      {
        "pt": "N staba kume kuandu bu txiga (Estava comendo quando você chegou)",
        "kea": "N staba kume kuandu bu txiga"
      },
      {
        "pt": "N ka ta kume karne (Não como carne)",
        "kea": "N ka ta kume karni"
      },
      {
        "pt": "N ka dja kume (Ainda não comi)",
        "kea": "N ka dja kume"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "kea": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 4,
    "category": "verbs",
    "level": "Iniciante",
    "title": {
      "pt": "Verbos Copulativos: É e STA",
      "kea": "Berbu Kopulativu: É y STA"
    },
    "description": {
      "pt": "Verbos Copulativos: É e STA",
      "kea": "Berbu Kopulativu: É y STA"
    },
    "content": {
      "pt": "O crioulo tem dois verbos copulativos principais:\n\n1. É - Ser (estados permanentes, identidade)\n   - Não varia com pessoa ou tempo\n   - Usado para: identidade, profissão, características permanentes, origem\n   - Exemplos:\n     * N é kabuverdianu (Sou cabo-verdiano)\n     * Bu é profesor (És professor)\n     * El é altu (Ele é alto)\n     * Kaza é grandi (A casa é grande)\n\n2. STA - Estar (estados temporários, localização)\n   - Também não varia\n   - Usado para: localização, estados temporários, progressivo\n   - Exemplos:\n     * N sta na kaza (Estou em casa)\n     * Bu sta doenti (Estás doente)\n     * El sta trabadja (Ele está trabalhando)\n     * Livru sta riba meza (O livro está sobre a mesa)\n\nDiferenças importantes:\n- É: permanente, essencial\n- STA: temporário, circunstancial\n- STA + verbo: forma progressiva\n\nCom negação:\n- Ka + é: N ka é profesor (Não sou professor)\n- Ka + sta: N ka sta li (Não estou aqui)",
      "kea": "Kriolu ten dos berbu kopulativu prinsipal:\n\n1. É - Ser (stadu permanenti, identidadi)\n   - Ka ta varia ku pesua o tenpu\n   - Uzadu pa: identidadi, profeson, karaterístika permanenti, orijen\n   - Ezenplu:\n     * N é kabuverdianu (N é kabuverdianu)\n     * Bu é profesor (Bu é profesor)\n     * El é altu (El é altu)\n     * Kaza é grandi (Kaza é grandi)\n\n2. STA - Sta (stadu temporáriu, lokalizason)\n   - Tanbén ka ta varia\n   - Uzadu pa: lokalizason, stadu temporáriu, progresivu\n   - Ezenplu:\n     * N sta na kaza (N sta na kaza)\n     * Bu sta doenti (Bu sta doenti)\n     * El sta trabadja (El sta trabadja)\n     * Livru sta riba meza (Livru sta riba meza)\n\nDiferénsia inportanti:\n- É: permanenti, esensial\n- STA: temporáriu, sirkustansial\n- STA + berbu: forma progresivu\n\nKu negason:\n- Ka + é: N ka é profesor (N ka é profesor)\n- Ka + sta: N ka sta li (N ka sta li)"
    },
    "examples": [
      {
        "pt": "N é studanti, mas oji N ka sta na skola (Sou estudante, mas hoje não estou na escola)",
        "kea": "N é studanti, ma oji N ka sta na skola"
      },
      {
        "pt": "El é bedju, ma el sta bon (Ele é velho, mas está bem)",
        "kea": "El é bedju, ma el sta bon"
      },
      {
        "pt": "Kaza é novu, ma sta suju (A casa é nova, mas está suja)",
        "kea": "Kaza é novu, ma sta suju"
      },
      {
        "pt": "N é di Praia, ma agora N sta na Mindelo (Sou da Praia, mas agora estou no Mindelo)",
        "kea": "N é di Praia, ma agora N sta na Mindelu"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "kea": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 5,
    "category": "syntax",
    "level": "Iniciante",
    "title": {
      "pt": "Ordem das Palavras e Estrutura da Frase",
      "kea": "Orden di Parabra y Strutura di Frazi"
    },
    "description": {
      "pt": "Ordem das Palavras e Estrutura da Frase",
      "kea": "Orden di Parabra y Strutura di Frazi"
    },
    "content": {
      "pt": "A ordem básica das palavras em crioulo é SVO (Sujeito-Verbo-Objeto), similar ao português:\n\n1. Frases Declarativas:\n   - Sujeito + (TMA) + Verbo + Objeto\n   - N ta kume pan (Eu como pão)\n   - Maria dja konpra livru (Maria comprou livro)\n\n2. Frases Interrogativas:\n   - Mantém ordem SVO, muda apenas entonação\n   - Bu ta bai? (Você vai?)\n   - Com palavras interrogativas no início:\n     * Ki bu ta faze? (O que você faz?)\n     * Undi bu sta bai? (Onde você vai?)\n     * Kuandu el ta txiga? (Quando ele chega?)\n     * Ken é es? (Quem são eles?)\n     * Pamodi bu ka bai? (Por que você não vai?)\n\n3. Frases Negativas:\n   - Ka antes do verbo/TMA\n   - N ka ta bai (Não vou)\n   - El ka kume (Ele não come)\n   - Pode ter 'n' no final para ênfase:\n     * N ka bai n (Não vou mesmo)\n\n4. Posição dos Adjuntos:\n   - Tempo: geralmente no final\n     * N ta bai skola kada dia (Vou à escola todo dia)\n   - Lugar: após o verbo\n     * N sta na kaza (Estou em casa)\n   - Modo: após o verbo\n     * El ta papia devagar (Ele fala devagar)\n\n5. Pronomes Objeto:\n   - Após o verbo, ligados por hífen\n   - N odja-bu (Eu te vi)\n   - El da-m livru (Ele me deu livro)",
      "kea": "Orden báziku di parabra in kriolu é SVO (Sujetu-Berbu-Objetu), similar a purtugés:\n\n1. Frazi Deklarativu:\n   - Sujetu + (TMA) + Berbu + Objetu\n   - N ta kume pan (N ta kume pan)\n   - Maria dja konpra livru (Maria dja konpra livru)\n\n2. Frazi Interogativu:\n   - Ta mantén orden SVO, ta muda só intonason\n   - Bu ta bai? (Bu ta bai?)\n   - Ku parabra interogativu na inísiu:\n     * Ki bu ta faze? (Ki bu ta faze?)\n     * Undi bu sta bai? (Undi bu sta bai?)\n     * Kuandu el ta txiga? (Kuandu el ta txiga?)\n     * Ken é es? (Ken é es?)\n     * Pamodi bu ka bai? (Pamodi bu ka bai?)\n\n3. Frazi Negativu:\n   - Ka antis di berbu/TMA\n   - N ka ta bai (N ka ta bai)\n   - El ka kume (El ka kume)\n   - Podi ten 'n' na final pa énfazi:\n     * N ka bai n (N ka bai n)\n\n4. Pozison di Adjuntu:\n   - Tenpu: jeralimenti na final\n     * N ta bai skola kada dia (N ta bai skola kada dia)\n   - Lugar: dipois di berbu\n     * N sta na kaza (N sta na kaza)\n   - Modu: dipois di berbu\n     * El ta papia devagar (El ta papia devagar)\n\n5. Pronomi Objetu:\n   - Dipois di berbu, ligadu pur ífen\n   - N odja-bu (N odja-bu)\n   - El da-m livru (El da-m livru)"
    },
    "examples": [
      {
        "pt": "N ta kume pan na padaria kada manha (Como pão na padaria toda manhã)",
        "kea": "N ta kume pan na padaria kada manha"
      },
      {
        "pt": "Ki bu ta faze li? (O que você faz aqui?)",
        "kea": "Ki bu ta faze li?"
      },
      {
        "pt": "Maria ka ta bai merkadu oji n (Maria não vai ao mercado hoje)",
        "kea": "Maria ka ta bai merkadu oji n"
      },
      {
        "pt": "Undi nhos sta mora? (Onde vocês moram?)",
        "kea": "Undi nhos sta mora?"
      },
      {
        "pt": "El da-m un livru bonitu (Ele me deu um livro bonito)",
        "kea": "El da-m un livru bonitu"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "kea": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 6,
    "category": "pronouns",
    "level": "Iniciante",
    "title": {
      "pt": "Possessivos e Demonstrativos",
      "kea": "Posesivu y Demonstrativu"
    },
    "description": {
      "pt": "Possessivos e Demonstrativos",
      "kea": "Posesivu y Demonstrativu"
    },
    "content": {
      "pt": "Possessivos:\nEm crioulo, os possessivos vêm DEPOIS do substantivo:\n- Kaza nha (minha casa)\n- Livru bu (teu livro)\n- Fidju se (filho dele/dela)\n- Karu nos (nosso carro)\n- Ami nhos (amigo de vocês)\n- Kaza es (casa deles)\n\nDemonstrativos:\n- Es/Kel (este/esse/aquele) - não varia\n- Es kaza (esta casa)\n- Es omi (este homem)\n- Kel dia (aquele dia)\n\nCom 'li' (aqui) e 'la' (lá):\n- Es kaza li (esta casa aqui)\n- Kel omi la (aquele homem lá)",
      "kea": "Posesivu:\nIn kriolu, posesivu ta ben DIPOIS di substantivu:\n- Kaza nha (kaza nha)\n- Livru bu (livru bu)\n- Fidju se (fidju se)\n- Karu nos (karu nos)\n- Ami nhos (ami nhos)\n- Kaza es (kaza es)\n\nDemonstrativu:\n- Es/Kel (es/kel) - ka ta varia\n- Es kaza (es kaza)\n- Es omi (es omi)\n- Kel dia (kel dia)\n\nKu 'li' (li) y 'la' (la):\n- Es kaza li (es kaza li)\n- Kel omi la (kel omi la)"
    },
    "examples": [
      {
        "pt": "Kaza nha é grandi (Minha casa é grande)",
        "kea": "Kaza nha é grandi"
      },
      {
        "pt": "Fidju bu sta na skola? (Teu filho está na escola?)",
        "kea": "Fidju bu sta na skola?"
      },
      {
        "pt": "Es livru li é di N (Este livro aqui é meu)",
        "kea": "Es livru li é di N"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "kea": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 7,
    "category": "morphology",
    "level": "Iniciante",
    "title": {
      "pt": "Formação do Plural",
      "kea": "Formason di Plural"
    },
    "description": {
      "pt": "Formação do Plural",
      "kea": "Formason di Plural"
    },
    "content": {
      "pt": "O crioulo geralmente NÃO marca plural no substantivo:\n\n1. Plural indicado por contexto:\n   - Un mudjer (uma mulher) / Dus mudjer (duas mulheres)\n   - Un omi (um homem) / Muitu omi (muitos homens)\n\n2. Marcadores de plural:\n   - Números: un, dos, tres, muitu\n   - Quantificadores: algun (alguns), tudu (todos)\n   - Demonstrativos: es (estes/esses)\n\n3. Exceções (plural marcado):\n   - Alguns empréstimos do português mantêm -s\n   - Palavras terminadas em vogal podem adicionar -s\n   - Exemplo: omi → omis (raro)\n\n4. Concordância:\n   - Adjetivos NÃO concordam em número\n   - Mudjer bonitu (mulher bonita)\n   - Mudjer bonitu (mulheres bonitas)",
      "kea": "Kriolu jeralimenti KA ta marka plural na substantivu:\n\n1. Plural indikadu pur kontestu:\n   - Un mudjer / Dus mudjer\n   - Un omi / Muitu omi\n\n2. Markador di plural:\n   - Númeru: un, dos, tres, muitu\n   - Kuantifikador: algun, tudu\n   - Demonstrativu: es\n\n3. Sesonis (plural markadu):\n   - Algun inpréstimus di purtugés ta mantén -s\n   - Parabra terminadu in vogal podi adisiona -s\n   - Ezenplu: omi → omis (raru)\n\n4. Konkordánsia:\n   - Adjetivu KA ta konkorda in númeru\n   - Mudjer bonitu\n   - Mudjer bonitu"
    },
    "examples": [
      {
        "pt": "Un kaza / Tres kaza (uma casa / três casas)",
        "kea": "Un kaza / Tres kaza"
      },
      {
        "pt": "Algun mudjer ta bai merkadu (Algumas mulheres vão ao mercado)",
        "kea": "Algun mudjer ta bai merkadu"
      },
      {
        "pt": "Tudu omi sta trabadja (Todos os homens estão trabalhando)",
        "kea": "Tudu omi sta trabadja"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "kea": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 8,
    "category": "vocabulary",
    "level": "débutant",
    "title": {
      "pt": "Saudações e Apresentações",
      "kea": "Saudaçon y Apresentason"
    },
    "description": {
      "pt": "Saudações e Apresentações",
      "kea": "Saudaçon y Apresentason"
    },
    "content": {
      "pt": "Aprenda as saudações básicas em crioulo cabo-verdiano. As saudações variam ao longo do dia: 'Bon dia' (bom dia), 'Bo tardi' (boa tarde), 'Bo noti' (boa noite). Para apresentações, use 'Nha nômi é ___' (meu nome é ___) e 'Kumô k'é bu nômi?' (qual é o seu nome?). Também aprenda cores: azul (azul), branku (branco), pretu (preto), verdi (verde), etc.",
      "kea": "Aprende saudaçon báziku in kriolu kabuverdianu. Saudaçon varia ku dia: 'Bon dia', 'Bo tardi', 'Bo noti'. Pa apresentason, uza 'Nha nômi é ___' y 'Kumô k'é bu nômi?'. Tanbe aprende kôr: azul, branku, pretu, verdi, etc."
    },
    "examples": [
      {
        "pt": "Bom dia! Meu nome é João.",
        "kea": "Bon dia! Nha nômi é João."
      },
      {
        "pt": "Qual é o seu nome?",
        "kea": "Kumô k'é bu nômi?"
      },
      {
        "pt": "Esta casa é azul.",
        "kea": "Es kaza é azul."
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas saudações diariamente para se familiarizar.",
      "kea": "Pratika es saudaçon kada dia pa familjariza."
    }
  },
  {
    "id": 9,
    "category": "phrases",
    "level": "débutant",
    "title": {
      "pt": "Como Você Está?",
      "kea": "Kumô Bu Sta?"
    },
    "description": {
      "pt": "Como Você Está?",
      "kea": "Kumô Bu Sta?"
    },
    "content": {
      "pt": "Expressões para perguntar e responder como alguém está. Use 'Kumô bu sta?' (como você está?). Respostas: 'N sta bon' (estou bem), 'N sta kansadu' (estou cansado), 'N sta kontenti' (estou contente). Estados de saúde: 'dretu' (bem), 'duenti' (doente), 'tristi' (triste).",
      "kea": "Espreson pa pergunta y responde kumô algen sta. Uza 'Kumô bu sta?'. Resposta: 'N sta bon', 'N sta kansadu', 'N sta kontenti'. Stadus di saúde: 'dretu', 'duenti', 'tristi'."
    },
    "examples": [
      {
        "pt": "Como você está?",
        "kea": "Kumô bu sta?"
      },
      {
        "pt": "Estou bem, obrigado.",
        "kea": "N sta bon, obrigadu."
      },
      {
        "pt": "Estou cansado hoje.",
        "kea": "N sta kansadu oji."
      }
    ],
    "practicalTips": {
      "pt": "Use estas expressões em conversas diárias.",
      "kea": "Uza es espeson in konversa diaria."
    }
  },
  {
    "id": 10,
    "category": "vocabulary",
    "level": "débutant",
    "title": {
      "pt": "Família e Relacionamentos",
      "kea": "Familia y Relasyonamentu"
    },
    "description": {
      "pt": "Família e Relacionamentos",
      "kea": "Familia y Relasyonamentu"
    },
    "content": {
      "pt": "Vocabulário para família: pai (pai), mai (mãe), fidju (filho), fidja (filha), irmon (irmão), irma (irmã), avô (avô), avó (avó). Relacionamentos: maridu (marido), mudjer (mulher), namoradu (namorado), namorada (namorada).",
      "kea": "Vokabuláriu pa familia: pai, mai, fidju, fidja, irmon, irma, vovô, vovó. Relasyonamentu: maridu, mudjer, namoradu, namorada."
    },
    "examples": [
      {
        "pt": "Meu pai é cabo-verdiano.",
        "kea": "Nha pai é kabuverdianu."
      },
      {
        "pt": "Ela é minha namorada.",
        "kea": "El é nha namorada."
      },
      {
        "pt": "Temos três filhos.",
        "kea": "Nu ten tres fidju."
      }
    ],
    "practicalTips": {
      "pt": "Aprenda os termos familiares para conversas pessoais.",
      "kea": "Aprende terminu familiari pa konversa pessoal."
    }
  },
  {
    "id": 11,
    "category": "vocabulary",
    "level": "intermédiaire",
    "title": {
      "pt": "Compras e Alimentação",
      "kea": "Kônpra y Alimentason"
    },
    "description": {
      "pt": "Compras e Alimentação",
      "kea": "Kônpra y Alimentason"
    },
    "content": {
      "pt": "Vocabulário para compras: loja (loja), dinheiro (dinheiro), preço (preço), barato (barato), caro (caro). Alimentos: pão (pão), leite (leite), carne (carne), peixe (peixe), frutas (frutas), legumes (legumes).",
      "kea": "Vokabuláriu pa kônpra: loja, dinheru, preçu, baratu, karu. Alimentu: pão, leti, karni, pexi, fruta, legumi."
    },
    "examples": [
      {
        "pt": "Quanto custa este pão?",
        "kea": "Kantu kusta es pão?"
      },
      {
        "pt": "Quero comprar leite.",
        "kea": "N kre kunpra leti."
      },
      {
        "pt": "Esta fruta é cara.",
        "kea": "Es fruta é kara."
      }
    ],
    "practicalTips": {
      "pt": "Pratique no mercado local.",
      "kea": "Pratika na merkadu lokal."
    }
  },
  {
    "id": 12,
    "category": "vocabulary",
    "level": "intermédiaire",
    "title": {
      "pt": "Saúde e Corpo Humano",
      "kea": "Saúde y Korpu Umanu"
    },
    "description": {
      "pt": "Saúde e Corpo Humano",
      "kea": "Saúde y Korpu Umanu"
    },
    "content": {
      "pt": "Partes do corpo: cabeça (cabeça), olho (olho), nariz (nariz), boca (boca), braço (braço), mão (mão), perna (perna), pé (pé). Saúde: doente (doente), dor de cabeça (dor de cabeça), médico (médico), remédio (remédio).",
      "kea": "Parti di korpu: kabésa, odju, naris, bôka, brasu, mon, perna, pé. Saúde: duenti, dor di kabésa, dotor, ramédi."
    },
    "examples": [
      {
        "pt": "Tenho dor de cabeça.",
        "kea": "N tene dor di kabésa."
      },
      {
        "pt": "Vou ao médico.",
        "kea": "N ta bai dotor."
      },
      {
        "pt": "Meus olhos doem.",
        "kea": "Nha odju ta doi."
      }
    ],
    "practicalTips": {
      "pt": "Aprenda para situações de emergência.",
      "kea": "Aprende pa sitwason di emergénsia."
    }
  },
  {
    "id": 13,
    "category": "numbers",
    "level": "intermédiaire",
    "title": {
      "pt": "Números e Expressões de Tempo",
      "kea": "Númeru y Espreson di Tenpu"
    },
    "description": {
      "pt": "Números e Expressões de Tempo",
      "kea": "Númeru y Espreson di Tenpu"
    },
    "content": {
      "pt": "Números cardinais: 1 un, 2 dos, 3 tres, 4 kuatu, 5 sinku, 10 dés, 20 vinti, 100 sen. Ordinais: primeiro purmeru, segundo segundu. Tempo: hoje oji, ontem onti, amanhã manhan, hora 6ra, dia dia, mês mês, ano anu.",
      "kea": "Númeru kardinal: 1 un, 2 dos, 3 tres, 4 kuatu, 5 sinku, 10 dés, 20 vinti, 100 sen. Ordinal: purmeru, segundu. Tenpu: oji, onti, manhan, 6ra, dia, mês, anu."
    },
    "examples": [
      {
        "pt": "São duas horas.",
        "kea": "É duas 6ra."
      },
      {
        "pt": "Hoje é segunda-feira.",
        "kea": "Oji é segunda-fera."
      },
      {
        "pt": "Tenho vinte anos.",
        "kea": "N ten vinti anu."
      }
    ],
    "practicalTips": {
      "pt": "Pratique contar e dizer as horas.",
      "kea": "Pratika konta y dise 6ra."
    }
  },
  {
    "id": 14,
    "category": "phrases",
    "level": "intermédiaire",
    "title": {
      "pt": "Aluguel e Moradia",
      "kea": "Aluguel y Moradia"
    },
    "description": {
      "pt": "Aluguel e Moradia",
      "kea": "Aluguel y Moradia"
    },
    "content": {
      "pt": "Expressões para aluguel: quero alugar um apartamento (N kre aluga un apartamentu), quanto custa? (kantu kusta?), casa (kaza), quarto (kuartu), banheiro (banheru). Moradia: morar (mora), vizinho (vizinhu), rua (rua).",
      "kea": "Espreson pa aluguel: N kre aluga un apartamentu, kantu kusta?, kaza, kuartu, banheru. Moradia: mora, vizinhu, rua."
    },
    "examples": [
      {
        "pt": "Onde você mora?",
        "kea": "Undi bu ta mora?"
      },
      {
        "pt": "Quero alugar uma casa.",
        "kea": "N kre aluga un kaza."
      },
      {
        "pt": "O apartamento custa 200 dólares.",
        "kea": "Apartamentu kusta 200 d6lar."
      }
    ],
    "practicalTips": {
      "pt": "Útil para conversas sobre habitação.",
      "kea": "Útil pa konversa sobri abitason."
    }
  },
  {
    "id": 15,
    "category": "vocabulary",
    "level": "intermédiaire",
    "title": {
      "pt": "Presentes e Festas",
      "kea": "Prizenti y Festas"
    },
    "description": {
      "pt": "Presentes e Festas",
      "kea": "Prizenti y Festas"
    },
    "content": {
      "pt": "Presentes: presente (prizenti), aniversário (anuversariu), Natal (Natal), casamento (kazamentu). Festas: festa (festa), música (múzika), dança (dansa), comida (kumida).",
      "kea": "Prizenti: prizenti, anuversariu, Natal, kazamentu. Festas: festa, múzika, dansa, kumida."
    },
    "examples": [
      {
        "pt": "Feliz aniversário!",
        "kea": "Felis anuversariu!"
      },
      {
        "pt": "Este é meu presente.",
        "kea": "Es é nha prizenti."
      },
      {
        "pt": "Vamos dançar na festa.",
        "kea": "Nu ta bai dansa na festa."
      }
    ],
    "practicalTips": {
      "pt": "Aprenda para celebrar com a comunidade.",
      "kea": "Aprende pa selebra ku komunidadi."
    }
  },
  {
    "id": 16,
    "category": "verbs",
    "level": "avancé",
    "title": {
      "pt": "Verbos no Progressivo",
      "kea": "Berbu na Progresivu"
    },
    "description": {
      "pt": "Verbos no Progressivo",
      "kea": "Berbu na Progresivu"
    },
    "content": {
      "pt": "Formas progressivas: estou falando (N sa ta papia), estava comendo (N staba ta kume). Uso: ações em andamento. Diferenças entre ilhas: sa, sta, ti ta.",
      "kea": "Forma progresiva: N sa ta papia, N staba ta kume. Uzu: ason in andamento. Diferénsia entre ilha: sa, sta, ti ta."
    },
    "examples": [
      {
        "pt": "Estou comendo agora.",
        "kea": "N sa ta kume agora."
      },
      {
        "pt": "Ela estava dormindo.",
        "kea": "El staba ta durmi."
      },
      {
        "pt": "Estamos falando.",
        "kea": "Nu sa ta papia."
      }
    ],
    "practicalTips": {
      "pt": "Pratique para descrever ações atuais.",
      "kea": "Pratika pa deskreve ason atual."
    }
  },
  {
    "id": 17,
    "category": "verbs",
    "level": "avancé",
    "title": {
      "pt": "Passado e Imperativo",
      "kea": "Pasadu y Imperativu"
    },
    "description": {
      "pt": "Passado e Imperativo",
      "kea": "Pasadu y Imperativu"
    },
    "content": {
      "pt": "Passado simples: comi (N kume), fui (N ba). Imperativo: fala! (papia!), não fales (ka papia!). Uso em comandos e narrativas.",
      "kea": "Pasadu sinplis: N kume, N ba. Imperativu: papia!, ka papia!. Uzu in komandu y narrativa."
    },
    "examples": [
      {
        "pt": "Comi pão ontem.",
        "kea": "N kume pão onti."
      },
      {
        "pt": "Fala devagar!",
        "kea": "Papia devagar!"
      },
      {
        "pt": "Não vá agora.",
        "kea": "Ka bai agora."
      }
    ],
    "practicalTips": {
      "pt": "Útil para contar histórias e dar ordens.",
      "kea": "Útil pa konta stória y da orden."
    }
  },
  {
    "id": 18,
    "category": "culture",
    "level": "avancé",
    "title": {
      "pt": "Cultura e Tradições Cabo-Verdianas",
      "kea": "Kultura y Tradison Kabuverdianu"
    },
    "description": {
      "pt": "Cultura e Tradições Cabo-Verdianas",
      "kea": "Kultura y Tradison Kabuverdianu"
    },
    "content": {
      "pt": "Feriados: Ano Novo (Anu Nôbu), Dia da Independência (Dia di Independénsia), Natal (Natal). Tradições: música (múzika), dança (dansa), culinária (kulinária). Figuras históricas: Amílcar Cabral.",
      "kea": "Feriadu: Anu Nôbu, Dia di Independénsia, Natal. Tradison: múzika, dansa, kulinária. Figura istóriku: Amílcar Cabral."
    },
    "examples": [
      {
        "pt": "Celebramos a independência em 5 de julho.",
        "kea": "Nu selebra independénsia na 5 di Julhu."
      },
      {
        "pt": "A música cabo-verdiana é rica.",
        "kea": "Múzika kabuverdiana é riku."
      },
      {
        "pt": "Comemos cachupa no Natal.",
        "kea": "Nu ta kume katxupa na Natal."
      }
    ],
    "practicalTips": {
      "pt": "Aprenda sobre a cultura para se integrar.",
      "kea": "Aprende sobri kultura pa integra."
    }
  }
];
