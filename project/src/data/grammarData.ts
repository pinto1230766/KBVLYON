export interface GrammarLesson {
  id: number;
  title: {
    pt: string;
    cv: string;
  };
  content: {
    pt: string;
    cv: string;
  };
  examples: Array<{
    pt: string;
    cv: string;
  }>;
}

export const grammarLessons: GrammarLesson[] = [
  {
    id: 1,
    title: {
      pt: 'Pronomes Pessoais',
      cv: 'Pronomi Pesoal'
    },
    content: {
      pt: 'Os pronomes pessoais em cabo-verdiano são fundamentais para a comunicação básica. Eles são usados para se referir a pessoas e são diferentes do português em alguns aspectos. É importante notar que alguns pronomes têm múltiplas formas, dependendo da posição na frase e da ênfase desejada.',
      cv: 'Pronomi pesoal na kriolu é fundamental pa komunikason básiku. Es ta ser uzadu pa referi a pesoas y es é diferenti di purtuges na alguns aspetu. É importanti nota ma alguns pronomi ten múltiplas forma, dipendendu di pozison na frazi y di ênfazi dizejadu.'
    },
    examples: [
      {
        pt: 'Eu - N (forma curta), Mi (objeto), Ami (ênfase)',
        cv: 'Eu - N (forma kurtu), Mi (objetu), Ami (ênfazi)'
      },
      {
        pt: 'Tu - Bu (forma curta), Bo (objeto), Abo (ênfase)',
        cv: 'Tu - Bu (forma kurtu), Bo (objetu), Abo (ênfazi)'
      },
      {
        pt: 'Ele/Ela - El (forma básica), Ael (ênfase)',
        cv: 'Ele/Ela - El (forma básiku), Ael (ênfazi)'
      },
      {
        pt: 'Nós - Nu (forma curta), Nos (objeto), Anos (ênfase)',
        cv: 'Nós - Nu (forma kurtu), Nos (objetu), Anos (ênfazi)'
      },
      {
        pt: 'Vocês - Nhos (forma básica), Anhos (ênfase)',
        cv: 'Vocês - Nhos (forma básiku), Anhos (ênfazi)'
      },
      {
        pt: 'Eles/Elas - Es (forma básica), Aes (ênfase)',
        cv: 'Eles/Elas - Es (forma básiku), Aes (ênfazi)'
      }
    ]
  },
  {
    id: 2,
    title: {
      pt: 'Verbos no Presente',
      cv: 'Verbu na Prezenti'
    },
    content: {
      pt: 'Os verbos no presente em cabo-verdiano têm uma estrutura diferente do português. Em vez de conjugações complexas, usa-se a partícula "ta" antes do verbo para indicar ações habituais ou repetitivas. Para ações que estão acontecendo no momento, usa-se "sata" ou "sta ta".',
      cv: 'Verbu na prezenti na kriolu ten un strutura diferenti di purtuges. En vez di konjugasons komplexu, ta uza-se partíkula "ta" antis di verbu pa indika asons abitual ou repetitivu. Pa asons ki sta kontise na momentu, ta uza-se "sata" ou "sta ta".'
    },
    examples: [
      {
        pt: 'Eu falo - N ta fala (habitual) / N sata fala (agora)',
        cv: 'Eu falo - N ta fala (abitual) / N sata fala (gosi)'
      },
      {
        pt: 'Tu falas - Bu ta fala (habitual) / Bu sata fala (agora)',
        cv: 'Tu falas - Bu ta fala (abitual) / Bu sata fala (gosi)'
      },
      {
        pt: 'Ele/Ela fala - El ta fala (habitual) / El sata fala (agora)',
        cv: 'Ele/Ela fala - El ta fala (abitual) / El sata fala (gosi)'
      },
      {
        pt: 'Nós falamos - Nu ta fala (habitual) / Nu sata fala (agora)',
        cv: 'Nós falamos - Nu ta fala (abitual) / Nu sata fala (gosi)'
      },
      {
        pt: 'Vocês falam - Nhos ta fala (habitual) / Nhos sata fala (agora)',
        cv: 'Vocês falam - Nhos ta fala (abitual) / Nhos sata fala (gosi)'
      },
      {
        pt: 'Eles/Elas falam - Es ta fala (habitual) / Es sata fala (agora)',
        cv: 'Eles/Elas falam - Es ta fala (abitual) / Es sata fala (gosi)'
      }
    ]
  },
  {
    id: 3,
    title: {
      pt: 'Verbos no Passado',
      cv: 'Verbu na Pasadu'
    },
    content: {
      pt: 'O passado em cabo-verdiano é mais simples que em português. Para ações concluídas, usa-se o verbo sem partícula ou com "dja" para enfatizar que a ação já aconteceu. Para ações habituais no passado, usa-se "ta" + verbo.',
      cv: 'Pasadu na kriolu é más simplis ki na purtuges. Pa asons konkluídu, ta uza-se verbu sen partíkula ou ku "dja" pa enfatiza ma ason dja kontise. Pa asons abitual na pasadu, ta uza-se "ta" + verbu.'
    },
    examples: [
      {
        pt: 'Eu falei - N fala / N dja fala',
        cv: 'Eu falei - N fala / N dja fala'
      },
      {
        pt: 'Tu falaste - Bu fala / Bu dja fala',
        cv: 'Tu falaste - Bu fala / Bu dja fala'
      },
      {
        pt: 'Ele/Ela falou - El fala / El dja fala',
        cv: 'Ele/Ela falou - El fala / El dja fala'
      },
      {
        pt: 'Nós falávamos (habitualmente) - Nu ta falaba',
        cv: 'Nós falávamos (abitualmente) - Nu ta falaba'
      },
      {
        pt: 'Vocês falaram - Nhos fala / Nhos dja fala',
        cv: 'Vocês falaram - Nhos fala / Nhos dja fala'
      },
      {
        pt: 'Eles/Elas falaram - Es fala / Es dja fala',
        cv: 'Eles/Elas falaram - Es fala / Es dja fala'
      }
    ]
  },
  {
    id: 4,
    title: {
      pt: 'Verbos no Futuro',
      cv: 'Verbu na Futuru'
    },
    content: {
      pt: 'O futuro em cabo-verdiano pode ser expresso de várias formas. A mais comum é usar "ta" + verbo ou "ta ba" + verbo. Também se pode usar "al" (contração de "ta" + "ba") antes do verbo.',
      cv: 'Futuru na kriolu pode ser spresu di várias forma. Más komun é uza "ta" + verbu ou "ta ba" + verbu. Tanbe pode uza "al" (kontrason di "ta" + "ba") antis di verbu.'
    },
    examples: [
      {
        pt: 'Eu vou falar - N ta fala / N ta ba fala / N al fala',
        cv: 'Eu vou falar - N ta fala / N ta ba fala / N al fala'
      },
      {
        pt: 'Tu vais falar - Bu ta fala / Bu ta ba fala / Bu al fala',
        cv: 'Tu vais falar - Bu ta fala / Bu ta ba fala / Bu al fala'
      },
      {
        pt: 'Ele/Ela vai falar - El ta fala / El ta ba fala / El al fala',
        cv: 'Ele/Ela vai falar - El ta fala / El ta ba fala / El al fala'
      },
      {
        pt: 'Nós vamos falar - Nu ta fala / Nu ta ba fala / Nu al fala',
        cv: 'Nós vamos falar - Nu ta fala / Nu ta ba fala / Nu al fala'
      },
      {
        pt: 'Vocês vão falar - Nhos ta fala / Nhos ta ba fala / Nhos al fala',
        cv: 'Vocês vão falar - Nhos ta fala / Nhos ta ba fala / Nhos al fala'
      },
      {
        pt: 'Eles/Elas vão falar - Es ta fala / Es ta ba fala / Es al fala',
        cv: 'Eles/Elas vão falar - Es ta fala / Es ta ba fala / Es al fala'
      }
    ]
  },
  {
    id: 5,
    title: {
      pt: 'Negação',
      cv: 'Negason'
    },
    content: {
      pt: 'A negação em cabo-verdiano é feita principalmente com a partícula "ka" antes do verbo. É importante notar que a posição do "ka" pode variar dependendo do tempo verbal e das partículas usadas.',
      cv: 'Negason na kriolu é fetu prinsipalmenti ku partíkula "ka" antis di verbu. É importanti nota ma pozison di "ka" pode varia dipendendu di tempu verbal y di partíkulas uzadu.'
    },
    examples: [
      {
        pt: 'Eu não falo - N ka ta fala',
        cv: 'Eu não falo - N ka ta fala'
      },
      {
        pt: 'Tu não falaste - Bu ka fala',
        cv: 'Tu não falaste - Bu ka fala'
      },
      {
        pt: 'Ele/Ela não vai falar - El ka ta fala',
        cv: 'Ele/Ela não vai falar - El ka ta fala'
      },
      {
        pt: 'Nós não estamos falando - Nu ka sata fala',
        cv: 'Nós não estamos falando - Nu ka sata fala'
      },
      {
        pt: 'Vocês não falaram - Nhos ka fala',
        cv: 'Vocês não falaram - Nhos ka fala'
      },
      {
        pt: 'Eles/Elas não vão falar - Es ka ta fala',
        cv: 'Eles/Elas não vão falar - Es ka ta fala'
      }
    ]
  },
  {
    id: 6,
    title: {
      pt: 'Perguntas',
      cv: 'Perguntas'
    },
    content: {
      pt: 'As perguntas em cabo-verdiano podem ser feitas de várias formas. Pode-se usar palavras interrogativas no início da frase ou simplesmente mudar a entonação. As palavras interrogativas mais comuns são "kuze" (o que), "kenha" (quem), "undi" (onde), "pamodi" (por que), "kantu" (quando) e "modi" (como).',
      cv: 'Perguntas na kriolu pode ser fetu di várias forma. Pode uza palavras interrogativa na inísiu di frazi ou simplesmente muda entonason. Palavras interrogativa más komun é "kuze" (o que), "kenha" (quem), "undi" (onde), "pamodi" (por que), "kantu" (quando) y "modi" (como).'
    },
    examples: [
      {
        pt: 'O que é isso? - Kuze ki é kel-li?',
        cv: 'O que é isso? - Kuze ki é kel-li?'
      },
      {
        pt: 'Quem é você? - Kenha ki é bo?',
        cv: 'Quem é você? - Kenha ki é bo?'
      },
      {
        pt: 'Onde você mora? - Undi ki bu ta mora?',
        cv: 'Onde você mora? - Undi ki bu ta mora?'
      },
      {
        pt: 'Por que você está aqui? - Pamodi ki bu sta li?',
        cv: 'Por que você está aqui? - Pamodi ki bu sta li?'
      },
      {
        pt: 'Quando você vai? - Kantu ki bu ta bai?',
        cv: 'Quando você vai? - Kantu ki bu ta bai?'
      },
      {
        pt: 'Como você está? - Modi ki bu sta?',
        cv: 'Como você está? - Modi ki bu sta?'
      }
    ]
  },
  {
    id: 7,
    title: {
      pt: 'Possessivos',
      cv: 'Posesivu'
    },
    content: {
      pt: 'Os possessivos em cabo-verdiano são diferentes do português. Eles podem vir antes ou depois do substantivo e têm formas diferentes dependendo da posição. Quando vêm depois do substantivo, usam-se formas como "di meu", "di bo", etc.',
      cv: 'Posesivu na kriolu é diferenti di purtuges. Es pode ben antis ou dipos di substantivu y ten formas diferenti dipendendu di pozison. Kantu ta ben dipos di substantivu, ta uza-se formas sima "di meu", "di bo", etc.'
    },
    examples: [
      {
        pt: 'Meu livro / Livro di meu - Nha livru / Livru di meu',
        cv: 'Meu livro / Livro di meu - Nha livru / Livru di meu'
      },
      {
        pt: 'Teu livro / Livro di bo - Bu livru / Livru di bo',
        cv: 'Teu livro / Livro di bo - Bu livru / Livru di bo'
      },
      {
        pt: 'Seu livro (dele/dela) / Livro di sel - Si livru / Livru di sel',
        cv: 'Seu livro (dele/dela) / Livro di sel - Si livru / Livru di sel'
      },
      {
        pt: 'Nosso livro / Livro di nos - Nos livru / Livru di nos',
        cv: 'Nosso livro / Livro di nos - Nos livru / Livru di nos'
      },
      {
        pt: 'Vosso livro / Livro di nhos - Nhos livru / Livru di nhos',
        cv: 'Vosso livro / Livro di nhos - Nhos livru / Livru di nhos'
      },
      {
        pt: 'Livro deles/delas / Livro di ses - Ses livru / Livru di ses',
        cv: 'Livro deles/delas / Livro di ses - Ses livru / Livru di ses'
      }
    ]
  },
  {
    id: 8,
    title: {
      pt: 'Demonstrativos',
      cv: 'Demonstrativu'
    },
    content: {
      pt: 'Os demonstrativos em cabo-verdiano são usados para indicar a posição de objetos ou pessoas em relação ao falante. As formas principais são "kel" (esse/aquele), "kes" (esses/aqueles), "kel-li" (este), "kel-la" (aquele), "kes-li" (estes) e "kes-la" (aqueles).',
      cv: 'Demonstrativu na kriolu é uzadu pa indika pozison di objetus ou pesoas en relason a falanti. Formas prinsipal é "kel" (esse/aquele), "kes" (esses/aqueles), "kel-li" (este), "kel-la" (aquele), "kes-li" (estes) y "kes-la" (aqueles).'
    },
    examples: [
      {
        pt: 'Este livro - Kel-li livru',
        cv: 'Este livro - Kel-li livru'
      },
      {
        pt: 'Esse/Aquele livro - Kel livru / Kel-la livru',
        cv: 'Esse/Aquele livro - Kel livru / Kel-la livru'
      },
      {
        pt: 'Estes livros - Kes-li livru',
        cv: 'Estes livros - Kes-li livru'
      },
      {
        pt: 'Esses/Aqueles livros - Kes livru / Kes-la livru',
        cv: 'Esses/Aqueles livros - Kes livru / Kes-la livru'
      },
      {
        pt: 'Esta pessoa - Kel-li pesoa',
        cv: 'Esta pessoa - Kel-li pesoa'
      },
      {
        pt: 'Aquelas pessoas - Kes-la pesoa',
        cv: 'Aquelas pessoas - Kes-la pesoa'
      }
    ]
  },
  {
    id: 9,
    title: {
      pt: 'Advérbios',
      cv: 'Advérbiu'
    },
    content: {
      pt: 'Os advérbios em cabo-verdiano são palavras que modificam verbos, adjetivos ou outros advérbios. Eles podem indicar tempo, modo, lugar, intensidade, etc. Alguns advérbios comuns são "gosi" (agora), "li" (aqui), "la" (lá), "oxi" (hoje), "manhan" (amanhã).',
      cv: 'Advérbiu na kriolu é palavras ki ta modifika verbus, adjetivu ou otus advérbiu. Es pode indika tempu, modu, lugar, intensidadi, etc. Alguns advérbiu komun é "gosi" (agora), "li" (aqui), "la" (lá), "oxi" (hoje), "manhan" (amanhã).'
    },
    examples: [
      {
        pt: 'Agora - Gosi / Gosi li',
        cv: 'Agora - Gosi / Gosi li'
      },
      {
        pt: 'Aqui - Li',
        cv: 'Aqui - Li'
      },
      {
        pt: 'Lá - La',
        cv: 'Lá - La'
      },
      {
        pt: 'Hoje - Oxi',
        cv: 'Hoje - Oxi'
      },
      {
        pt: 'Amanhã - Manhan',
        cv: 'Amanhã - Manhan'
      },
      {
        pt: 'Ontem - Onti',
        cv: 'Ontem - Onti'
      }
    ]
  },
  {
    id: 10,
    title: {
      pt: 'Preposições',
      cv: 'Prepozison'
    },
    content: {
      pt: 'As preposições em cabo-verdiano são palavras que estabelecem relações entre outras palavras na frase. Algumas preposições comuns são "na" (em), "pa" (para), "ku" (com), "di" (de), "ti" (até).',
      cv: 'Prepozison na kriolu é palavras ki ta stabelese relason entre otus palavras na frazi. Alguns prepozison komun é "na" (em), "pa" (para), "ku" (com), "di" (de), "ti" (até).'
    },
    examples: [
      {
        pt: 'Em casa - Na kaza',
        cv: 'Em casa - Na kaza'
      },
      {
        pt: 'Para a igreja - Pa igreja',
        cv: 'Para a igreja - Pa igreja'
      },
      {
        pt: 'Com amor - Ku amor',
        cv: 'Com amor - Ku amor'
      },
      {
        pt: 'De Deus - Di Deus',
        cv: 'De Deus - Di Deus'
      },
      {
        pt: 'Até amanhã - Ti manhan',
        cv: 'Até amanhã - Ti manhan'
      },
      {
        pt: 'Sobre a Bíblia - Sobri Bíblia',
        cv: 'Sobre a Bíblia - Sobri Bíblia'
      }
    ]
  }
];

export interface DictionaryEntry {
  word: string;
  translation: {
    pt: string;
    cv: string;
  };
  example: {
    pt: string;
    cv: string;
  };
}

export const dictionaryEntries: DictionaryEntry[] = [
  // Termos Religiosos
  {
    word: 'Bíblia',
    translation: {
      pt: 'Bíblia',
      cv: 'Bíblia'
    },
    example: {
      pt: 'A Bíblia é a palavra de Deus.',
      cv: 'Bíblia é palavra di Deus.'
    }
  },
  {
    word: 'Deus',
    translation: {
      pt: 'Deus',
      cv: 'Deus'
    },
    example: {
      pt: 'Deus ama a humanidade.',
      cv: 'Deus ta ama umanidadi.'
    }
  },
  {
    word: 'Jesus',
    translation: {
      pt: 'Jesus',
      cv: 'Jesus'
    },
    example: {
      pt: 'Jesus é o filho de Deus.',
      cv: 'Jesus é fidju di Deus.'
    }
  },
  {
    word: 'Jeová',
    translation: {
      pt: 'Jeová',
      cv: 'Jeová'
    },
    example: {
      pt: 'Jeová é o nome de Deus.',
      cv: 'Jeová é nomi di Deus.'
    }
  },
  {
    word: 'Reino',
    translation: {
      pt: 'Reino',
      cv: 'Reinu'
    },
    example: {
      pt: 'O Reino de Deus governará a Terra.',
      cv: 'Reinu di Deus ta governa Terra.'
    }
  },
  {
    word: 'oração',
    translation: {
      pt: 'oração',
      cv: 'orason'
    },
    example: {
      pt: 'A oração nos aproxima de Deus.',
      cv: 'Orason ta aproxima-nu di Deus.'
    }
  },
  {
    word: 'fé',
    translation: {
      pt: 'fé',
      cv: 'fé'
    },
    example: {
      pt: 'Precisamos ter fé em Deus.',
      cv: 'Nu meste ten fé na Deus.'
    }
  },
  {
    word: 'amor',
    translation: {
      pt: 'amor',
      cv: 'amor'
    },
    example: {
      pt: 'Deus é amor.',
      cv: 'Deus é amor.'
    }
  },
  {
    word: 'esperança',
    translation: {
      pt: 'esperança',
      cv: 'speransa'
    },
    example: {
      pt: 'A Bíblia nos dá esperança.',
      cv: 'Bíblia ta da-nu speransa.'
    }
  },
  {
    word: 'verdade',
    translation: {
      pt: 'verdade',
      cv: 'verdadi'
    },
    example: {
      pt: 'A verdade nos liberta.',
      cv: 'Verdadi ta liberta-nu.'
    }
  },
  // Saudações e Expressões Comuns
  {
    word: 'bon dia',
    translation: {
      pt: 'bom dia',
      cv: 'bon dia'
    },
    example: {
      pt: 'Bom dia, como está?',
      cv: 'Bon dia, modi ki bu sta?'
    }
  },
  {
    word: 'bon tardi',
    translation: {
      pt: 'boa tarde',
      cv: 'bon tardi'
    },
    example: {
      pt: 'Boa tarde, posso falar com você?',
      cv: 'Bon tardi, N pode papia ku bo?'
    }
  },
  {
    word: 'bon noti',
    translation: {
      pt: 'boa noite',
      cv: 'bon noti'
    },
    example: {
      pt: 'Boa noite, durma bem.',
      cv: 'Bon noti, durmi dretu.'
    }
  },
  {
    word: 'obrigadu',
    translation: {
      pt: 'obrigado',
      cv: 'obrigadu'
    },
    example: {
      pt: 'Muito obrigado pela ajuda.',
      cv: 'Txeu obrigadu pa djuda.'
    }
  },
  {
    word: 'di nada',
    translation: {
      pt: 'de nada',
      cv: 'di nada'
    },
    example: {
      pt: 'De nada, estou feliz em ajudar.',
      cv: 'Di nada, N sta feliz di djuda.'
    }
  },
  // Verbos Comuns
  {
    word: 'kre',
    translation: {
      pt: 'querer',
      cv: 'kre'
    },
    example: {
      pt: 'Você quer estudar a Bíblia?',
      cv: 'Bu kre studa Bíblia?'
    }
  },
  {
    word: 'pode',
    translation: {
      pt: 'poder',
      cv: 'pode'
    },
    example: {
      pt: 'Posso visitar você amanhã?',
      cv: 'N pode vizita-bu manhan?'
    }
  },
  {
    word: 'ten',
    translation: {
      pt: 'ter',
      cv: 'ten'
    },
    example: {
      pt: 'Você tem uma Bíblia?',
      cv: 'Bu ten un Bíblia?'
    }
  },
  {
    word: 'sta',
    translation: {
      pt: 'estar',
      cv: 'sta'
    },
    example: {
      pt: 'Como você está?',
      cv: 'Modi ki bu sta?'
    }
  },
  {
    word: 'bai',
    translation: {
      pt: 'ir',
      cv: 'bai'
    },
    example: {
      pt: 'Vamos estudar a Bíblia.',
      cv: 'Nu ta bai studa Bíblia.'
    }
  },
  // Substantivos Comuns
  {
    word: 'kaza',
    translation: {
      pt: 'casa',
      cv: 'kaza'
    },
    example: {
      pt: 'Esta é a minha casa.',
      cv: 'Kel-li é nha kaza.'
    }
  },
  {
    word: 'família',
    translation: {
      pt: 'família',
      cv: 'família'
    },
    example: {
      pt: 'A família é importante.',
      cv: 'Família é importanti.'
    }
  },
  {
    word: 'vida',
    translation: {
      pt: 'vida',
      cv: 'vida'
    },
    example: {
      pt: 'Deus nos dá a vida.',
      cv: 'Deus ta da-nu vida.'
    }
  },
  {
    word: 'morti',
    translation: {
      pt: 'morte',
      cv: 'morti'
    },
    example: {
      pt: 'A morte será eliminada.',
      cv: 'Morti ta ser eliminadu.'
    }
  },
  {
    word: 'tempu',
    translation: {
      pt: 'tempo',
      cv: 'tempu'
    },
    example: {
      pt: 'Você tem tempo para conversar?',
      cv: 'Bu ten tempu pa konversa?'
    }
  },
  // Adjetivos
  {
    word: 'bon',
    translation: {
      pt: 'bom',
      cv: 'bon'
    },
    example: {
      pt: 'Deus é bom.',
      cv: 'Deus é bon.'
    }
  },
  {
    word: 'mau',
    translation: {
      pt: 'mau',
      cv: 'mau'
    },
    example: {
      pt: 'O sofrimento é mau.',
      cv: 'Sufrimentu é mau.'
    }
  },
  {
    word: 'feliz',
    translation: {
      pt: 'feliz',
      cv: 'feliz'
    },
    example: {
      pt: 'Seremos felizes para sempre.',
      cv: 'Nu ta ser feliz pa sempri.'
    }
  },
  {
    word: 'tristi',
    translation: {
      pt: 'triste',
      cv: 'tristi'
    },
    example: {
      pt: 'Não fique triste.',
      cv: 'Ka fika tristi.'
    }
  },
  {
    word: 'importanti',
    translation: {
      pt: 'importante',
      cv: 'importanti'
    },
    example: {
      pt: 'A Bíblia é importante.',
      cv: 'Bíblia é importanti.'
    }
  },
  // Palavras Interrogativas
  {
    word: 'kuze',
    translation: {
      pt: 'o que',
      cv: 'kuze'
    },
    example: {
      pt: 'O que você quer?',
      cv: 'Kuze ki bu kre?'
    }
  }
];