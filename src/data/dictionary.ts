export interface DictionaryEntry {
  id: string;
  word: string;
  translation: {
    pt: string;
    cv: string;
  };
  example?: {
    pt: string;
    cv: string;
  };
  note?: string;
}

// Dictionnaire trié par ordre alphabétique
export const dictionaryEntries: DictionaryEntry[] = [
  {
    id: 'entry-1',
    word: 'abelha',
    translation: {
      pt: 'abelha',
      cv: 'abelha'
    },
    example: {
      pt: 'A abelha está voando de flor em flor.',
      cv: 'Abelha sta ta bua di fror pa fror.'
    }
  },
  {
    id: 'entry-2',
    word: 'adju',
    translation: {
      pt: 'alho',
      cv: 'adju'
    },
    example: {
      pt: 'Adicione um dente de alho à receita.',
      cv: 'Junta un denti di adju na rezéita.'
    }
  },
  {
    id: 'entry-3',
    word: 'afinal',
    translation: {
      pt: 'finalmente',
      cv: 'afinal'
    },
    example: {
      pt: 'Finalmente, chegamos ao destino.',
      cv: 'Afinal, nu rixa na destinu.'
    }
  },
  {
    id: 'entry-4',
    word: 'agora',
    translation: {
      pt: 'agora',
      cv: 'agora'
    },
    example: {
      pt: 'Podemos começar agora?',
      cv: 'Nu pode kumesa agora?'
    }
  },
  {
    id: 'entry-5',
    word: 'agu',
    translation: {
      pt: 'água',
      cv: 'agu'
    },
    example: {
      pt: 'Quero beber água.',
      cv: 'N kre bebi agu.'
    }
  },
  {
    id: 'entry-6',
    word: 'agua',
    translation: {
      pt: 'água',
      cv: 'agua'
    },
    example: {
      pt: 'Preciso de água, por favor.',
      cv: 'N meste di agua, pa favor.'
    }
  },
  {
    id: 'entry-7',
    word: 'alegria',
    translation: {
      pt: 'alegria',
      cv: 'alegria'
    },
    example: {
      pt: 'A alegria de Jeová é a nossa força.',
      cv: 'Alegria di Jeová é nos força.'
    }
  },
  {
    id: 'entry-8',
    word: 'alfasi',
    translation: {
      pt: 'alface',
      cv: 'alfasi'
    },
    example: {
      pt: 'Vou fazer uma salada de alface.',
      cv: 'N ta faze un salada di alfasi.'
    }
  },
  {
    id: 'entry-9',
    word: 'algen',
    translation: {
      pt: 'alguém',
      cv: 'algen'
    },
    example: {
      pt: 'Alguém está batendo na porta.',
      cv: 'Algen sta batel na porta.'
    }
  },
  {
    id: 'entry-10',
    word: 'algun',
    translation: {
      pt: 'algum/alguma',
      cv: 'algun'
    },
    example: {
      pt: 'Você tem alguma dúvida?',
      cv: 'Bu ten algun duvida?'
    }
  },
  {
    id: 'entry-11',
    word: 'almosu',
    translation: {
      pt: 'almoço',
      cv: 'almosu'
    },
    example: {
      pt: 'O almoço está pronto.',
      cv: 'Almosu sta prontu.'
    }
  },
  {
    id: 'entry-12',
    word: 'amanhã',
    translation: {
      pt: 'amanhã',
      cv: 'manhan'
    },
    example: {
      pt: 'Voltaremos amanhã.',
      cv: 'Nu ta torna manhan.'
    }
  },
  {
    id: 'entry-13',
    word: 'ambienti',
    translation: {
      pt: 'meio ambiente',
      cv: 'ambienti'
    },
    example: {
      pt: 'Precisamos cuidar do meio ambiente.',
      cv: 'Nu meste kuida di ambienti.'
    }
  },
  {
    id: 'entry-14',
    word: 'améndua',
    translation: {
      pt: 'amêndoa',
      cv: 'améndua'
    },
    example: {
      pt: 'As amêndoas são ricas em nutrientes.',
      cv: 'Améndua é riku em nutrienti.'
    }
  },
  {
    id: 'entry-15',
    word: 'amigu',
    translation: {
      pt: 'amigo',
      cv: 'amigu'
    },
    example: {
      pt: 'Meu amigo vem me visitar amanhã.',
      cv: 'Nha amigu ta ben vizita-m manhan.'
    }
  },
  {
    id: 'entry-16',
    word: 'amor',
    translation: {
      pt: 'amor',
      cv: 'amor'
    },
    example: {
      pt: 'O amor de Deus é eterno.',
      cv: 'Amor di Deus é etérnu.'
    }
  },
  {
    id: 'entry-17',
    word: 'ananas',
    translation: {
      pt: 'abacaxi',
      cv: 'ananas'
    },
    example: {
      pt: 'O suco de abacaxi é refrescante.',
      cv: 'Sumu di ananas é refreskante.'
    }
  },
  {
    id: 'entry-18',
    word: 'aparelhu iletróniku',
    translation: {
      pt: 'aparelho eletrônico',
      cv: 'aparelhu iletróniku'
    },
    example: {
      pt: 'Os aparelhos eletrônicos podem distrair o casal.',
      cv: 'Aparelhu iletróniku pode distrai kazal.'
    }
  },
  {
    id: 'entry-19',
    word: 'aroz',
    translation: {
      pt: 'arroz',
      cv: 'aroz'
    },
    example: {
      pt: 'O arroz está quentinho.',
      cv: 'Aroz sta kenti.'
    }
  },
  {
    id: 'entry-20',
    word: 'arvor',
    translation: {
      pt: 'árvore',
      cv: 'arvor'
    },
    example: {
      pt: 'Esta árvore dá frutas doces.',
      cv: 'Arvor ki da frutas dosis.'
    }
  },
  {
    id: 'entry-21',
    word: 'asistenti sosial',
    translation: {
      pt: 'assistente social',
      cv: 'asistenti sosial'
    },
    example: {
      pt: 'A assistente social vai ajudar com os documentos.',
      cv: 'Asistenti sosial ta djuda ku dokumentus.'
    }
  },
  {
    id: 'entry-22',
    word: 'asparagu',
    translation: {
      pt: 'aspargo',
      cv: 'asparagu'
    },
    example: {
      pt: 'Os aspargos são ricos em vitaminas.',
      cv: 'Asparagu é riku em vitamina.'
    }
  },
  {
    id: 'entry-23',
    word: 'aza',
    translation: {
      pt: 'asa (de frango)',
      cv: 'aza'
    },
    example: {
      pt: 'Vou assar asas de frango.',
      cv: 'N ta asa aza di galinha.'
    }
  },
  {
    id: 'entry-24',
    word: 'azul',
    translation: {
      pt: 'azul',
      cv: 'azul'
    },
    example: {
      pt: 'O céu está azul hoje.',
      cv: 'Seu sta azul ozu.'
    }
  },
  {
    id: 'entry-25',
    word: 'bai',
    translation: {
      pt: 'ir',
      cv: 'bai'
    },
    example: {
      pt: 'Vou para a praia amanhã.',
      cv: 'N ta bai praia manhan.'
    }
  },
  {
    id: 'entry-26',
    word: 'balansia',
    translation: {
      pt: 'berinjela',
      cv: 'balansia'
    },
    example: {
      pt: 'A berinjela é um ótimo ingrediente.',
      cv: 'Balansia é un ótimo ingrediente.'
    }
  },
  {
    id: 'entry-27',
    word: 'barriga',
    translation: {
      pt: 'barriga',
      cv: 'barriga'
    },
    example: {
      pt: 'Estou com dor de barriga.',
      cv: 'N tene dor di barriga.'
    }
  },
  {
    id: 'entry-28',
    word: 'batata',
    translation: {
      pt: 'batata',
      cv: 'batata'
    },
    example: {
      pt: 'Vou cozinhar batatas para o jantar.',
      cv: 'N ta kuzinha batata pa janta.'
    }
  },
  {
    id: 'entry-29',
    word: 'bautizu',
    translation: {
      pt: 'batismo',
      cv: 'bautizu'
    },
    example: {
      pt: 'O batismo é um passo importante.',
      cv: 'Bautizu é un pasu importante.'
    }
  },
  {
    id: 'entry-30',
    word: 'baxu',
    translation: {
      pt: 'baixo/parte inferior',
      cv: 'baxu'
    },
    example: {
      pt: 'A dor está na parte inferior das costas.',
      cv: 'Dor sta na baxu di kosta.'
    }
  },
  {
    id: 'entry-31',
    word: 'bebe',
    translation: {
      pt: 'beber',
      cv: 'bebe'
    },
    example: {
      pt: 'Vou beber água.',
      cv: 'N bai bebe agu.'
    }
  },
  {
    id: 'entry-32',
    word: 'bebi',
    translation: {
      pt: 'beber',
      cv: 'bebi'
    },
    example: {
      pt: 'Quero beber água.',
      cv: 'N kre bebi agua.'
    }
  },
  {
    id: 'entry-33',
    word: 'bédju',
    translation: {
      pt: 'velho',
      cv: 'bédju'
    },
    example: {
      pt: 'Aquele homem é muito velho.',
      cv: 'Kelu ómi é bédju txeu.'
    }
  },
  {
    id: 'entry-1',
    word: 'beneffsiu sosial',
    translation: {
      pt: 'benefício social',
      cv: 'beneffsiu sosial'
    },
    example: {
      pt: 'Você tem direito a benefícios sociais.',
      cv: 'Bu ten direitu na beneffsiu sosial.'
    }
  },
  {
    id: 'entry-2',
    word: 'bentison',
    translation: {
      pt: 'bênção',
      cv: 'bentison'
    },
    example: {
      pt: 'A família é uma bênção de Deus.',
      cv: 'Família é un bentison di Deus.'
    }
  },
  {
    id: 'entry-3',
    word: 'Bíblia',
    translation: {
      pt: 'Bíblia',
      cv: 'Bíblia'
    },
    example: {
      pt: 'A Bíblia é a Palavra de Deus.',
      cv: 'Bíblia é Palavra di Deus.'
    }
  },
  {
    id: 'entry-4',
    word: 'bifada',
    translation: {
      pt: 'bife',
      cv: 'bifada'
    },
    example: {
      pt: 'O bife está no ponto.',
      cv: 'Bifada sta no pontu.'
    }
  },
  {
    id: 'entry-5',
    word: 'bobeira',
    translation: {
      pt: 'bobó',
      cv: 'bobeira'
    },
    example: {
      pt: 'O bobó de camarão é uma iguaria.',
      cv: 'Bobeira di kamaron é un pratu especial.'
    }
  },
  {
    id: 'entry-6',
    word: 'boka',
    translation: {
      pt: 'boca',
      cv: 'boka'
    },
    example: {
      pt: 'Abra a boca, por favor.',
      cv: 'Abri boka, pa favor.'
    }
  },
  {
    id: 'entry-7',
    word: 'bolonbolu',
    translation: {
      pt: 'bolo',
      cv: 'bolonbolu'
    },
    example: {
      pt: 'Fiz um bolo de aniversário.',
      cv: 'N faze un bolonbolu di aniversariu.'
    }
  },
  {
    id: 'entry-8',
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
    id: 'entry-9',
    word: 'bon dia',
    translation: {
      pt: 'bom dia',
      cv: 'bon dia'
    },
    example: {
      pt: 'Bom dia, como está?',
      cv: 'Bon dia, modi bu sta?'
    }
  },
  {
    id: 'entry-10',
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
    id: 'entry-11',
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
    id: 'entry-12',
    word: 'branku',
    translation: {
      pt: 'branco',
      cv: 'branku'
    },
    example: {
      pt: 'A camisa é branca.',
      cv: 'Kamiza é branku.'
    }
  },
  {
    id: 'entry-13',
    word: 'brasu',
    translation: {
      pt: 'braço',
      cv: 'brasu'
    },
    example: {
      pt: 'Quebrei o braço jogando futebol.',
      cv: 'N kebra brasu jugando futibol.'
    }
  },
  {
    id: 'entry-14',
    word: 'brumedju',
    translation: {
      pt: 'marrom',
      cv: 'brumedju'
    },
    example: {
      pt: 'A mesa é de madeira marrom.',
      cv: 'Mesa é di madeira brumedju.'
    }
  },
  {
    id: 'entry-15',
    word: 'Bu (bo, abo)',
    translation: {
      pt: 'Tu/Você',
      cv: 'Bu (bo, abo)'
    },
    example: {
      pt: 'Você gostaria de estudar a Bíblia?',
      cv: 'Bu gostaria di studa Bíblia?'
    }
  },
  {
    id: 'entry-16',
    word: 'bu/bo',
    translation: {
      pt: 'teu/tua',
      cv: 'bu/bo'
    },
    example: {
      pt: 'Onde está o teu caderno?',
      cv: 'Undi ki bu kadernu sta?'
    }
  },
  {
    id: 'entry-3',
    word: 'cachupa',
    translation: {
      pt: 'prato típico à base de milho',
      cv: 'katchupa'
    },
    example: {
      pt: 'A cachupa é o prato nacional de Cabo Verde.',
      cv: 'Katchupa é pratu nasionál di Kabu Verdi.'
    }
  },
  {
    id: 'entry-17',
    word: 'congregação',
    translation: {
      pt: 'congregação',
      cv: 'kongregason'
    },
    example: {
      pt: 'Vamos à reunião da congregação.',
      cv: 'Nu ta bai na runion di kongregason.'
    }
  },
  {
    id: 'entry-18',
    word: 'dansa',
    translation: {
      pt: 'dançar',
      cv: 'dansa'
    },
    example: {
      pt: 'Vamos dançar?',
      cv: 'Nu bai dansa?'
    }
  },
  {
    id: 'entry-19',
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
    id: 'entry-20',
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
  {
    id: 'entry-21',
    word: 'di-bo',
    translation: {
      pt: 'teu/tua (de ti)',
      cv: 'di-bo'
    },
    example: {
      pt: 'Este caderno é teu.',
      cv: 'Kel kadernu é di-bo.'
    }
  },
  {
    id: 'entry-22',
    word: 'di-meu',
    translation: {
      pt: 'meu/minha (de mim)',
      cv: 'di-meu'
    },
    example: {
      pt: 'Este livro é meu.',
      cv: 'Kel livru é di-meu.'
    }
  },
  {
    id: 'entry-23',
    word: 'di-nhos',
    translation: {
      pt: 'vosso/vossa (de vocês)',
      cv: 'di-nhos'
    },
    example: {
      pt: 'Este carro é de vocês.',
      cv: 'Kel karu é di-nhos.'
    }
  },
  {
    id: 'entry-24',
    word: 'di-nos',
    translation: {
      pt: 'nosso/nossa (de nós)',
      cv: 'di-nos'
    },
    example: {
      pt: 'Esta casa é nossa.',
      cv: 'Kel kaza é di-nos.'
    }
  },
  {
    id: 'entry-25',
    word: 'di-sel',
    translation: {
      pt: 'seu/sua (dele/dela)',
      cv: 'di-sel'
    },
    example: {
      pt: 'Este livro é dele/dela.',
      cv: 'Kel livru é di-sel.'
    }
  },
  {
    id: 'entry-26',
    word: 'di-ses',
    translation: {
      pt: 'deles/delas (dele/dela)',
      cv: 'di-ses'
    },
    example: {
      pt: 'Estes livros são deles.',
      cv: 'Kes livru é di-ses.'
    }
  },
  {
    id: 'entry-27',
    word: 'diom',
    translation: {
      pt: 'preto',
      cv: 'diom'
    },
    example: {
      pt: 'Ele está usando uma camisa preta.',
      cv: 'El sta uza un kamiza diom.'
    }
  },
  {
    id: 'entry-28',
    word: 'dipos di manban',
    translation: {
      pt: 'depois de amanhã',
      cv: 'dipos di manban'
    },
    example: {
      pt: 'A reunião será depois de amanhã.',
      cv: 'Runion ser dipos di manban.'
    }
  },
  {
    id: 'entry-29',
    word: 'dizabilidadi',
    translation: {
      pt: 'deficiência',
      cv: 'dizabilidadi'
    },
    example: {
      pt: 'O centro oferece apoio para pessoas com deficiência.',
      cv: 'Sentru ta oferese apoiu pa pessoa ku dizabilidadi.'
    }
  },
  {
    id: 'entry-30',
    word: 'djanta',
    translation: {
      pt: 'jantar',
      cv: 'djanta'
    },
    example: {
      pt: 'O jantar está servido.',
      cv: 'Djanta sta servidu.'
    }
  },
  {
    id: 'entry-31',
    word: 'dona',
    translation: {
      pt: 'senhora',
      cv: 'dona'
    },
    example: {
      pt: 'A dona Maria é muito simpática.',
      cv: 'Dona Maria é simpatiku.'
    }
  },
  {
    id: 'entry-32',
    word: 'donu',
    translation: {
      pt: 'dono/senhor',
      cv: 'donu'
    },
    example: {
      pt: 'O dono da loja está chegando.',
      cv: 'Donu di butiku sta txiga.'
    }
  },
  {
    id: 'entry-33',
    word: 'doradu',
    translation: {
      pt: 'dourado',
      cv: 'doradu'
    },
    example: {
      pt: 'O anel é de cor dourada.',
      cv: 'Anel é di kor doradu.'
    }
  },
  {
    id: 'entry-34',
    word: 'dormi',
    translation: {
      pt: 'dormir',
      cv: 'dormi'
    },
    example: {
      pt: 'Preciso dormir cedo hoje.',
      cv: 'N meste dormi sedu ozu.'
    }
  },
  {
    id: 'entry-35',
    word: 'dorsu',
    translation: {
      pt: 'costas',
      cv: 'dorsu'
    },
    example: {
      pt: 'Estou com dor nas costas.',
      cv: 'N ten dor na dorsu.'
    }
  },
  {
    id: 'entry-36',
    word: 'dós',
    translation: {
      pt: 'dois/duas',
      cv: 'dós'
    },
    example: {
      pt: 'São duas horas.',
      cv: 'É dós ora.'
    }
  },
  {
    id: 'entry-37',
    word: 'dragonera',
    translation: {
      pt: 'dragonera (planta endêmica)',
      cv: 'dragonera'
    },
    example: {
      pt: 'A dragonera é uma planta rara.',
      cv: 'Dragonera é un planda raru.'
    },
    note: 'Planta endêmica de Cabo Verde, também conhecida como Dracaena draco.'
  },
  {
    id: 'entry-38',
    word: 'dretu',
    translation: {
      pt: 'certo/direito',
      cv: 'dretu'
    },
    example: {
      pt: 'A resposta está certa.',
      cv: 'Resposta sta dretu.'
    }
  },
  {
    id: 'entry-39',
    word: 'duedju',
    translation: {
      pt: 'dedo',
      cv: 'duedju'
    },
    example: {
      pt: 'Cortei o dedo com a faca.',
      cv: 'N korta duedju ku faka.'
    }
  },
  {
    id: 'entry-4',
    word: 'dumingu',
    translation: {
      pt: 'domingo',
      cv: 'dumingu'
    },
    example: {
      pt: 'Domingo é dia de descanso.',
      cv: 'Dumingu é dia di deskansu.'
    }
  },
  {
    id: 'entry-40',
    word: 'ediffsiu',
    translation: {
      pt: 'edifício',
      cv: 'ediffsiu'
    },
    example: {
      pt: 'O edifício tem acesso para cadeirantes.',
      cv: 'Ediffsiu ten asesu pa kadeirantis.'
    }
  },
  {
    id: 'entry-41',
    word: 'El (Ael)',
    translation: {
      pt: 'Ele/Ela',
      cv: 'El (Ael)'
    },
    example: {
      pt: 'Ela estuda a Bíblia conosco.',
      cv: 'El ta studa Bíblia ku nu.'
    }
  },
  {
    id: 'entry-42',
    word: 'elevador',
    translation: {
      pt: 'elevador',
      cv: 'elevador'
    },
    example: {
      pt: 'Use o elevador para chegar ao terceiro andar.',
      cv: 'Uza elevador pa chega na terseru andar.'
    }
  },
  {
    id: 'entry-43',
    word: 'entrada',
    translation: {
      pt: 'entrada',
      cv: 'entrada'
    },
    example: {
      pt: 'A entrada principal tem rampa de acesso.',
      cv: 'Entrada prinsipal ten rampa di asesu.'
    }
  },
  {
    id: 'entry-44',
    word: 'eradu',
    translation: {
      pt: 'errado',
      cv: 'eradu'
    },
    example: {
      pt: 'Isso não está errado.',
      cv: 'Kel ka ta eradu.'
    }
  },
  {
    id: 'entry-45',
    word: 'érba',
    translation: {
      pt: 'erva',
      cv: 'érba'
    },
    example: {
      pt: 'Esta erva é medicinal.',
      cv: 'Kel érba é medicinal.'
    }
  },
  {
    id: 'entry-46',
    word: 'ervilha',
    translation: {
      pt: 'ervilha',
      cv: 'ervilha'
    },
    example: {
      pt: 'Adicione ervilhas ao arroz.',
      cv: 'Junta ervilha no aroz.'
    }
  },
  {
    id: 'entry-47',
    word: 'Es',
    translation: {
      pt: 'Eles/Elas',
      cv: 'Es'
    },
    example: {
      pt: 'Eles estão aprendendo sobre a Bíblia.',
      cv: 'Es ta aprende sobri Bíblia.'
    }
  },
  {
    id: 'entry-48',
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
    id: 'entry-49',
    word: 'estudo bíblico',
    translation: {
      pt: 'estudo bíblico',
      cv: 'studu bíbliku'
    },
    example: {
      pt: 'Você gostaria de ter um estudo bíblico?',
      cv: 'Bu gostaria di ten un studu bíbliku?'
    }
  },
  {
    id: 'entry-50',
    word: 'evangeliu',
    translation: {
      pt: 'evangelho',
      cv: 'evangeliu'
    },
    example: {
      pt: 'O evangelho é uma boa notícia.',
      cv: 'Evangeliu é un notísia di alégria.'
    }
  },
  {
    id: 'entry-51',
    word: 'faba',
    translation: {
      pt: 'fava',
      cv: 'faba'
    },
    example: {
      pt: 'As favas são ricas em proteínas.',
      cv: 'Faba é riku em proteina.'
    }
  },
  {
    id: 'entry-52',
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
    id: 'entry-53',
    word: 'fatia di laranja',
    translation: {
      pt: 'fatia de laranja',
      cv: 'fatia di laranja'
    },
    example: {
      pt: 'Coloque uma fatia de laranja no suco.',
      cv: 'Pon un fatia di laranja no sumu.'
    }
  },
  {
    id: 'entry-54',
    word: 'faze',
    translation: {
      pt: 'fazer',
      cv: 'faze'
    },
    example: {
      pt: 'O que você vai fazer hoje?',
      cv: 'Kusa ki bu bai faze oji?'
    }
  },
  {
    id: 'entry-55',
    word: 'fé',
    translation: {
      pt: 'fé',
      cv: 'fé'
    },
    example: {
      pt: 'A fé move montanhas.',
      cv: 'Fé ta move montanhas.'
    }
  },
  {
    id: 'entry-56',
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
    id: 'entry-57',
    word: 'fépu',
    translation: {
      pt: 'pouco/pouca',
      cv: 'fépu'
    },
    example: {
      pt: 'Coloque um pouco de sal.',
      cv: 'Pon un fépu di sal.'
    }
  },
  {
    id: 'entry-58',
    word: 'fevereru',
    translation: {
      pt: 'fevereiro',
      cv: 'fevereru'
    },
    example: {
      pt: 'O carnaval é em fevereiro.',
      cv: 'Karnaval é na fevereru.'
    }
  },
  {
    id: 'entry-59',
    word: 'fidja',
    translation: {
      pt: 'filha',
      cv: 'fidja'
    },
    example: {
      pt: 'Minha filha está na escola.',
      cv: 'Nha fidja sta na skola.'
    }
  },
  {
    id: 'entry-60',
    word: 'fidjada',
    translation: {
      pt: 'filhada (todos os filhos)',
      cv: 'fidjada'
    },
    example: {
      pt: 'A filhada toda veio visitar.',
      cv: 'Fidjada tudu ben vizita.'
    }
  },
  {
    id: 'entry-61',
    word: 'fidjadu',
    translation: {
      pt: 'filhado (enteado)',
      cv: 'fidjadu'
    },
    example: {
      pt: 'Meu filhado vem nos visitar.',
      cv: 'Nha fidjadu ta ben vizita-nu.'
    }
  },
  {
    id: 'entry-62',
    word: 'fidju',
    translation: {
      pt: 'filho',
      cv: 'fidju'
    },
    example: {
      pt: 'Jesus é o Filho de Deus.',
      cv: 'Jizus é Fidju di Deus.'
    }
  },
  {
    id: 'entry-5',
    word: 'figu',
    translation: {
      pt: 'figo',
      cv: 'figu'
    },
    example: {
      pt: 'O figo é uma fruta doce.',
      cv: 'Figu é un fruta doci.'
    }
  },
  {
    id: 'entry-63',
    word: 'fijon',
    translation: {
      pt: 'feijão',
      cv: 'fijon'
    },
    example: {
      pt: 'O feijão é um alimento básico.',
      cv: 'Fijon é un alimento básiku.'
    }
  },
  {
    id: 'entry-64',
    word: 'fika ku boka aberta',
    translation: {
      pt: 'ficar de boca aberta (estar admirado)',
      cv: 'fika ku boka aberta'
    },
    example: {
      pt: 'Fiquei de boca aberta com a notícia.',
      cv: 'N fika ku boka aberta ku notísia.'
    },
    note: 'Expressão usada quando alguém fica muito surpreso com algo.'
  },
  {
    id: 'entry-65',
    word: 'filéti',
    translation: {
      pt: 'filé',
      cv: 'filéti'
    },
    example: {
      pt: 'Vou grelhar um filé de peixe.',
      cv: 'N ta grelha un filéti di pexi.'
    }
  },
  {
    id: 'entry-66',
    word: 'filho',
    translation: {
      pt: 'filho',
      cv: 'fidju'
    },
    example: {
      pt: 'Ela tem dois filhos.',
      cv: 'El ten dôs fidju.'
    }
  },
  {
    id: 'entry-67',
    word: 'foga-foga',
    translation: {
      pt: 'fogão',
      cv: 'foga-foga'
    },
    example: {
      pt: 'O arroz está no fogão.',
      cv: 'Aroz sta na foga-foga.'
    }
  },
  {
    id: 'entry-68',
    word: 'folheto',
    translation: {
      pt: 'folheto',
      cv: 'folhetu'
    },
    example: {
      pt: 'Gostaria de receber este folheto?',
      cv: 'Bu gosta di kaba ku kel folhetu?'
    }
  },
  {
    id: 'entry-69',
    word: 'fruta',
    translation: {
      pt: 'fruta',
      cv: 'fruta'
    },
    example: {
      pt: 'Como fruta todos os dias.',
      cv: 'N kume fruta tudu dia.'
    }
  },
  {
    id: 'entry-70',
    word: 'funaná',
    translation: {
      pt: 'funaná (ritmo musical tradicional)',
      cv: 'funaná'
    },
    example: {
      pt: 'O funaná é muito animado.',
      cv: 'Funaná é txeu animadu.'
    }
  },
  {
    id: 'entry-71',
    word: 'galinha',
    translation: {
      pt: 'galinha',
      cv: 'galinha'
    },
    example: {
      pt: 'A galinha está assando no forno.',
      cv: 'Galinha sta assa na fornu.'
    }
  },
  {
    id: 'entry-72',
    word: 'gizadu',
    translation: {
      pt: 'grelhado',
      cv: 'gizadu'
    },
    example: {
      pt: 'Peixe grelhado é minha especialidade.',
      cv: 'Pexi gizadu é nha espesialidadi.'
    }
  },
  {
    id: 'entry-73',
    word: 'glória',
    translation: {
      pt: 'glória',
      cv: 'glória'
    },
    example: {
      pt: 'Demos glória a Deus pelo que Ele fez.',
      cv: 'Nu da glória pa Deus pa tudu ki el faze.'
    }
  },
  {
    id: 'entry-74',
    word: 'grasas',
    translation: {
      pt: 'graças',
      cv: 'grasas'
    },
    example: {
      pt: 'Damos graças a Deus por tudo.',
      cv: 'Nu da grasas pa Deus pa tudu.'
    }
  },
  {
    id: 'entry-75',
    word: 'gufongu',
    translation: {
      pt: 'peixe-espada',
      cv: 'gufongu'
    },
    example: {
      pt: 'Gosto de peixe-espada grelhado.',
      cv: 'N gosta di gufongu gizadu.'
    }
  },
  {
    id: 'entry-76',
    word: 'hoje',
    translation: {
      pt: 'hoje',
      cv: 'oji'
    },
    example: {
      pt: 'Hoje é dia de pregação.',
      cv: 'Oji é dia di prédika.'
    }
  },
  {
    id: 'entry-77',
    word: 'igreja',
    translation: {
      pt: 'igreja',
      cv: 'igreja'
    },
    example: {
      pt: 'Vamos à igreja no domingo.',
      cv: 'Nu bai igreja na dumingu.'
    }
  },
  {
    id: 'entry-78',
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
  {
    id: 'entry-79',
    word: 'internet',
    translation: {
      pt: 'internet',
      cv: 'internet'
    },
    example: {
      pt: 'A internet pode consumir muito tempo.',
      cv: 'Internet pode gasta txeu ténpu.'
    }
  },
  {
    id: 'entry-80',
    word: 'intérpreti',
    translation: {
      pt: 'intérprete',
      cv: 'intérpreti'
    },
    example: {
      pt: 'Precisamos de um intérprete de língua de sinais.',
      cv: 'Nu meste di un intérpreti di lingua di sinhal.'
    }
  },
  {
    id: 'entry-81',
    word: 'irman',
    translation: {
      pt: 'irmã',
      cv: 'irman'
    },
    example: {
      pt: 'Minha irmã é mais nova que eu.',
      cv: 'Nha irman é más novu ki N.'
    }
  },
  {
    id: 'entry-82',
    word: 'irmon',
    translation: {
      pt: 'irmão/irmã',
      cv: 'irmon'
    },
    example: {
      pt: 'Meu irmão é mais velho.',
      cv: 'Nha irmon é más grandi.'
    }
  },
  {
    id: 'entry-83',
    word: 'janeru',
    translation: {
      pt: 'janeiro',
      cv: 'janeru'
    },
    example: {
      pt: 'O ano começa em janeiro.',
      cv: 'Anu kumesa na janeru.'
    }
  },
  {
    id: 'entry-84',
    word: 'Jeová',
    translation: {
      pt: 'Jeová',
      cv: 'Jeová'
    },
    example: {
      pt: 'Jeová é o nome de Deus na Bíblia.',
      cv: 'Jeová é nómi di Deus na Bíblia.'
    }
  },
  {
    id: 'entry-6',
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
    id: 'entry-85',
    word: 'ka ta faze mau',
    translation: {
      pt: 'não faz mal',
      cv: 'ka ta faze mau'
    },
    example: {
      pt: 'Não faz mal, podemos tentar de novo amanhã.',
      cv: 'Ka ta faze mau, nu pode tenta otru bes manhan.'
    }
  },
  {
    id: 'entry-86',
    word: 'ka ta fika na moda',
    translation: {
      pt: 'não ficar atrás',
      cv: 'ka ta fika na moda'
    },
    example: {
      pt: 'Vamos lá, não fique atrás!',
      cv: 'Bora, ka fika na moda!'
    }
  },
  {
    id: 'entry-87',
    word: 'kabelu',
    translation: {
      pt: 'cabelo',
      cv: 'kabelu'
    },
    example: {
      pt: 'Ela tem cabelo cacheado.',
      cv: 'Nha kabelu é krespu.'
    }
  },
  {
    id: 'entry-88',
    word: 'kabesa',
    translation: {
      pt: 'cabeça',
      cv: 'kabesa'
    },
    example: {
      pt: 'Estou com dor de cabeça.',
      cv: 'N ten dor di kabesa.'
    }
  },
  {
    id: 'entry-89',
    word: 'kada',
    translation: {
      pt: 'cada',
      cv: 'kada'
    },
    example: {
      pt: 'Cada um tem sua vez.',
      cv: 'Kada un ten se ves.'
    }
  },
  {
    id: 'entry-90',
    word: 'kadera',
    translation: {
      pt: 'cadeira',
      cv: 'kadera'
    },
    example: {
      pt: 'Sente-se na cadeira.',
      cv: 'Senta na kadera.'
    }
  },
  {
    id: 'entry-91',
    word: 'kafé',
    translation: {
      pt: 'café',
      cv: 'kafé'
    },
    example: {
      pt: 'Vou tomar café da manhã.',
      cv: 'N bai toma kafé di manhan.'
    }
  },
  {
    id: 'entry-92',
    word: 'kai',
    translation: {
      pt: 'cair',
      cv: 'kai'
    },
    example: {
      pt: 'Cuidado para não deixar cair.',
      cv: 'Kuidadu pa ka dexa kai.'
    }
  },
  {
    id: 'entry-93',
    word: 'kaju',
    translation: {
      pt: 'caju',
      cv: 'kaju'
    },
    example: {
      pt: 'O suco de caju é delicioso.',
      cv: 'Sumu di kaju é deliziosu.'
    }
  },
  {
    id: 'entry-94',
    word: 'kalça',
    translation: {
      pt: 'calça',
      cv: 'kalça'
    },
    example: {
      pt: 'Esta calça está apertada.',
      cv: 'Kalza ki sta txeu preta.'
    }
  },
  {
    id: 'entry-95',
    word: 'kalor',
    translation: {
      pt: 'calor',
      cv: 'kalor'
    },
    example: {
      pt: 'Hoje está muito calor.',
      cv: 'Ozu sta txeu kalor.'
    }
  },
  {
    id: 'entry-96',
    word: 'kamaron',
    translation: {
      pt: 'camarão',
      cv: 'kamaron'
    },
    example: {
      pt: 'Vamos fazer um moqueca de camarão.',
      cv: 'Nu bai faze un mukeka di kamaron.'
    }
  },
  {
    id: 'entry-97',
    word: 'kamiza',
    translation: {
      pt: 'camisa',
      cv: 'kamiza'
    },
    example: {
      pt: 'Comprei uma camisa nova.',
      cv: 'N kumpra un kamiza nobu.'
    }
  },
  {
    id: 'entry-98',
    word: 'kanéla',
    translation: {
      pt: 'canela',
      cv: 'kanéla'
    },
    example: {
      pt: 'Bati a canela na mesa.',
      cv: 'N bati kanéla na meza.'
    }
  },
  {
    id: 'entry-99',
    word: 'kansadu',
    translation: {
      pt: 'cansado',
      cv: 'kansadu'
    },
    example: {
      pt: 'Estou muito cansado para conversar agora.',
      cv: 'N sta txeu kansadu pa pâpia gosi.'
    }
  },
  {
    id: 'entry-100',
    word: 'kantu anus bu ten?',
    translation: {
      pt: 'quantos anos você tem?',
      cv: 'kantu anus bu ten?'
    },
    example: {
      pt: 'Quantos anos você tem?',
      cv: 'Kantu anus bu ten?'
    }
  },
  {
    id: 'entry-101',
    word: 'kantu tempu ten?',
    translation: {
      pt: 'que horas são?',
      cv: 'kantu tempu ten?'
    },
    example: {
      pt: 'Por favor, que horas são?',
      cv: 'Pa favor, kantu tempu ten?'
    }
  },
  {
    id: 'entry-102',
    word: 'karkel',
    translation: {
      pt: 'qualquer',
      cv: 'karkel'
    },
    example: {
      pt: 'Qualquer um pode ajudar.',
      cv: 'Karkel un pode djuda.'
    }
  },
  {
    id: 'entry-103',
    word: 'karni',
    translation: {
      pt: 'carne',
      cv: 'karni'
    },
    example: {
      pt: 'Gosto de carne bem passada.',
      cv: 'N gosta di karni ben pasadu.'
    }
  },
  {
    id: 'entry-104',
    word: 'karton di saudi',
    translation: {
      pt: 'cartão de saúde',
      cv: 'karton di saudi'
    },
    example: {
      pt: 'Não esqueça de trazer seu cartão de saúde.',
      cv: 'Ka eskesi di traze bu karton di saudi.'
    }
  },
  {
    id: 'entry-105',
    word: 'kastanhu',
    translation: {
      pt: 'castanho',
      cv: 'kastanhu'
    },
    example: {
      pt: 'Os olhos castanhos são comuns.',
      cv: 'Odju kastanhu é komun.'
    }
  },
  {
    id: 'entry-106',
    word: 'katchor',
    translation: {
      pt: 'cachorro',
      cv: 'katchor'
    },
    example: {
      pt: 'O cachorro está latindo.',
      cv: 'Katchor sta ta ladra.'
    }
  },
  {
    id: 'entry-107',
    word: 'katxu',
    translation: {
      pt: 'pele',
      cv: 'katxu'
    },
    example: {
      pt: 'Minha pele está seca.',
      cv: 'Nha katxu sta seku.'
    }
  },
  {
    id: 'entry-7',
    word: 'kaza',
    translation: {
      pt: 'casa',
      cv: 'kaza'
    },
    example: {
      pt: 'Vou para casa agora.',
      cv: 'N ta bai kaza gosi.'
    }
  },
  {
    id: 'entry-108',
    word: 'kazamentu',
    translation: {
      pt: 'casamento',
      cv: 'kazamentu'
    },
    example: {
      pt: 'O casamento requer esforço de ambos.',
      cv: 'Kazamentu meste esforsu di dôs.'
    }
  },
  {
    id: 'entry-109',
    word: 'kazu',
    translation: {
      pt: 'caso/processo',
      cv: 'kazu'
    },
    example: {
      pt: 'Vamos analisar o seu caso amanhã.',
      cv: 'Nu ta analiza bu kazu manhan.'
    }
  },
  {
    id: 'entry-110',
    word: 'kexada',
    translation: {
      pt: 'coxa (parte de trás da perna)',
      cv: 'kexada'
    },
    example: {
      pt: 'Sinto cãibra na coxa.',
      cv: 'N senti krampa na kexada.'
    }
  },
  {
    id: 'entry-111',
    word: 'klima',
    translation: {
      pt: 'clima',
      cv: 'klima'
    },
    example: {
      pt: 'O clima está mudando rapidamente.',
      cv: 'Klima sta muda rapidu.'
    }
  },
  {
    id: 'entry-112',
    word: 'knee',
    translation: {
      pt: 'joelho',
      cv: 'knee'
    },
    example: {
      pt: 'Doeu quando caí no joelho.',
      cv: 'Doeu ora ki N kai na knee.'
    }
  },
  {
    id: 'entry-113',
    word: 'komunhon',
    translation: {
      pt: 'comunhão',
      cv: 'komunhon'
    },
    example: {
      pt: 'A comunhão entre os irmãos é importante.',
      cv: 'Komunhon entre irmons é importante.'
    }
  },
  {
    id: 'entry-114',
    word: 'konpo',
    translation: {
      pt: 'compor',
      cv: 'konpo'
    },
    example: {
      pt: 'Ele sabe compor músicas.',
      cv: 'El sabe konpo muzika.'
    }
  },
  {
    id: 'entry-115',
    word: 'konputador',
    translation: {
      pt: 'computador',
      cv: 'konputador'
    },
    example: {
      pt: 'Preciso usar o computador para trabalhar.',
      cv: 'N meste di uza konputador pa trabadja.'
    }
  },
  {
    id: 'entry-116',
    word: 'kopu',
    translation: {
      pt: 'copo',
      cv: 'kopu'
    },
    example: {
      pt: 'Pode me trazer um copo de suco?',
      cv: 'Pode traze-m un kopu di sumu?'
    }
  },
  {
    id: 'entry-117',
    word: 'kor-di-prata',
    translation: {
      pt: 'cor de prata',
      cv: 'kor-di-prata'
    },
    example: {
      pt: 'O carro prateado é bonito.',
      cv: 'Karu kor-di-prata é bonitu.'
    }
  },
  {
    id: 'entry-118',
    word: 'koraji',
    translation: {
      pt: 'coragem',
      cv: 'koraji'
    },
    example: {
      pt: 'Precisamos de coragem para enfrentar os desafios.',
      cv: 'Nu meste koraji pa enfrenta disafius.'
    }
  },
  {
    id: 'entry-119',
    word: 'kore',
    translation: {
      pt: 'correr',
      cv: 'kore'
    },
    example: {
      pt: 'Gosto de correr de manhã.',
      cv: 'N gosta di kore di manhan.'
    }
  },
  {
    id: 'entry-120',
    word: 'kosta',
    translation: {
      pt: 'costas',
      cv: 'kosta'
    },
    example: {
      pt: 'Estou com dor nas costas.',
      cv: 'N tene dor na kosta.'
    }
  },
  {
    id: 'entry-121',
    word: 'kotubélu',
    translation: {
      pt: 'cotovelo',
      cv: 'kotubélu'
    },
    example: {
      pt: 'Machuquei o cotovelo.',
      cv: 'N magoa kotubélu.'
    }
  },
  {
    id: 'entry-122',
    word: 'koxa',
    translation: {
      pt: 'coxa',
      cv: 'koxa'
    },
    example: {
      pt: 'Ela tem coxas fortes.',
      cv: 'El tene koxa forti.'
    }
  },
  {
    id: 'entry-123',
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
    id: 'entry-124',
    word: 'kretxeu',
    translation: {
      pt: 'afilhado',
      cv: 'kretxeu'
    },
    example: {
      pt: 'Meu afilhado fará aniversário amanhã.',
      cv: 'Nha kretxeu ta faze aniversariu manhan.'
    }
  },
  {
    id: 'entry-125',
    word: 'kriansa',
    translation: {
      pt: 'criança',
      cv: 'kriansa'
    },
    example: {
      pt: 'As crianças estão brincando.',
      cv: 'Kriansas ta brinka.'
    }
  },
  {
    id: 'entry-126',
    word: 'kriason',
    translation: {
      pt: 'criação',
      cv: 'kriason'
    },
    example: {
      pt: 'A criação mostra a sabedoria de Deus.',
      cv: 'Kriason ta mostra sabiduria di Deus.'
    }
  },
  {
    id: 'entry-127',
    word: 'kual',
    translation: {
      pt: 'qual',
      cv: 'kual'
    },
    example: {
      pt: 'Qual você prefere?',
      cv: 'Kual ki bu prefere?'
    }
  },
  {
    id: 'entry-128',
    word: 'kuatu',
    translation: {
      pt: 'quatro',
      cv: 'kuatu'
    },
    example: {
      pt: 'Tenho quatro irmãos.',
      cv: 'N ten kuatu irmon.'
    }
  },
  {
    id: 'entry-129',
    word: 'kuma ki bu mora?',
    translation: {
      pt: 'onde você mora?',
      cv: 'kuma ki bu mora?'
    },
    example: {
      pt: 'Oi, onde você mora?',
      cv: 'Oi, kuma ki bu mora?'
    }
  },
  {
    id: 'entry-130',
    word: 'kuma ku bu sta?',
    translation: {
      pt: 'como você está?',
      cv: 'kuma ku bu sta?'
    },
    example: {
      pt: 'Olá, como você está?',
      cv: 'Ola, kuma ku bu sta?'
    }
  },
  {
    id: 'entry-8',
    word: 'kuma ku bu yama?',
    translation: {
      pt: 'como você se chama?',
      cv: 'kuma ku bu yama?'
    },
    example: {
      pt: 'Olá, como você se chama?',
      cv: 'Ola, kuma ku bu yama?'
    }
  },
  {
    id: 'entry-131',
    word: 'kuma ku sta?',
    translation: {
      pt: 'como está?',
      cv: 'kuma ku sta?'
    },
    example: {
      pt: 'Olá, como está?',
      cv: 'Ola, kuma ku sta?'
    }
  },
  {
    id: 'entry-132',
    word: 'kumadri',
    translation: {
      pt: 'comadre',
      cv: 'kumadri'
    },
    example: {
      pt: 'Minha comadre é muito prestativa.',
      cv: 'Nha kumadri é prestativa.'
    }
  },
  {
    id: 'entry-133',
    word: 'kume',
    translation: {
      pt: 'comer',
      cv: 'kume'
    },
    example: {
      pt: 'Vamos comer agora?',
      cv: 'Nu bai kume gosi?'
    }
  },
  {
    id: 'entry-134',
    word: 'kumida',
    translation: {
      pt: 'comida',
      cv: 'kumida'
    },
    example: {
      pt: 'A comida está pronta.',
      cv: 'Kumida sta pronta.'
    }
  },
  {
    id: 'entry-135',
    word: 'kumunikason',
    translation: {
      pt: 'comunicação',
      cv: 'kumunikason'
    },
    example: {
      pt: 'A comunicação é importante no casamento.',
      cv: 'Kumunikason é inportanti na kazamentu.'
    }
  },
  {
    id: 'entry-136',
    word: 'kunbada',
    translation: {
      pt: 'cunhada',
      cv: 'kunbada'
    },
    example: {
      pt: 'Minha cunhada é muito simpática.',
      cv: 'Nha kunbada é simpatika.'
    }
  },
  {
    id: 'entry-137',
    word: 'kunhadu',
    translation: {
      pt: 'cunhado',
      cv: 'kunhadu'
    },
    example: {
      pt: 'Meu cunhado é engenheiro.',
      cv: 'Nha kunhadu é engenheru.'
    }
  },
  {
    id: 'entry-138',
    word: 'kunpadri',
    translation: {
      pt: 'compadre',
      cv: 'kunpadri'
    },
    example: {
      pt: 'Meu compadre é um grande amigo.',
      cv: 'Nha kunpadri é un amigu grandi.'
    }
  },
  {
    id: 'entry-139',
    word: 'kunpanheru',
    translation: {
      pt: 'cônjuge',
      cv: 'kunpanheru'
    },
    example: {
      pt: 'Preciso passar mais tempo com meu cônjuge.',
      cv: 'N meste pasa más ténpu ku nha kunpanheru.'
    }
  },
  {
    id: 'entry-140',
    word: 'kuze',
    translation: {
      pt: 'o que',
      cv: 'kuze'
    },
    example: {
      pt: 'O que você quer?',
      cv: 'Kuze ki bu kre?'
    }
  },
  {
    id: 'entry-141',
    word: 'kuzinha',
    translation: {
      pt: 'cozinha',
      cv: 'kuzinha'
    },
    example: {
      pt: 'A comida está na cozinha.',
      cv: 'Komida sta na kuzinha.'
    }
  },
  {
    id: 'entry-142',
    word: 'la',
    translation: {
      pt: 'lá',
      cv: 'la'
    },
    example: {
      pt: 'Vou lá amanhã.',
      cv: 'N bai la manhan.'
    }
  },
  {
    id: 'entry-143',
    word: 'laranja',
    translation: {
      pt: 'laranja',
      cv: 'laranja'
    },
    example: {
      pt: 'O suco de laranja está fresco.',
      cv: 'Sumu di laranja sta fresku.'
    }
  },
  {
    id: 'entry-144',
    word: 'leti',
    translation: {
      pt: 'leite',
      cv: 'leti'
    },
    example: {
      pt: 'Quero café com leite.',
      cv: 'N kere kafé ku leti.'
    }
  },
  {
    id: 'entry-145',
    word: 'li',
    translation: {
      pt: 'aqui',
      cv: 'li'
    },
    example: {
      pt: 'Venha aqui!',
      cv: 'Bem li!'
    }
  },
  {
    id: 'entry-146',
    word: 'limon',
    translation: {
      pt: 'limão',
      cv: 'limon'
    },
    example: {
      pt: 'Adicione um pouco de limão.',
      cv: 'Junta un poku di limon.'
    }
  },
  {
    id: 'entry-147',
    word: 'lista',
    translation: {
      pt: 'lista',
      cv: 'lista'
    },
    example: {
      pt: 'Fiz uma lista de compras.',
      cv: 'N faze un lista di kompra.'
    }
  },
  {
    id: 'entry-148',
    word: 'madrinha',
    translation: {
      pt: 'madrinha',
      cv: 'madrinha'
    },
    example: {
      pt: 'Minha madrinha me deu um presente.',
      cv: 'Nha madrinha da-m un prenda.'
    }
  },
  {
    id: 'entry-149',
    word: 'mãe',
    translation: {
      pt: 'mãe',
      cv: 'mai'
    },
    example: {
      pt: 'Minha mãe cozinha muito bem.',
      cv: 'Nha mai ta kuzinha dretu.'
    }
  },
  {
    id: 'entry-150',
    word: 'mai',
    translation: {
      pt: 'mãe',
      cv: 'mai'
    },
    example: {
      pt: 'Minha mãe cozinha bem.',
      cv: 'Nha mai ta kuzinha dretu.'
    }
  },
  {
    id: 'entry-151',
    word: 'mama',
    translation: {
      pt: 'seio/mama',
      cv: 'mama'
    },
    example: {
      pt: 'O bebê está mamando.',
      cv: 'Bebi sta mama.'
    }
  },
  {
    id: 'entry-152',
    word: 'manga',
    translation: {
      pt: 'manga',
      cv: 'manga'
    },
    example: {
      pt: 'As mangas estão doces.',
      cv: 'Manga sta doce.'
    }
  },
  {
    id: 'entry-153',
    word: 'mangu',
    translation: {
      pt: 'manga',
      cv: 'mangu'
    },
    example: {
      pt: 'A manga está madura.',
      cv: 'Mangu sta maduru.'
    }
  },
  {
    id: 'entry-154',
    word: 'manhan',
    translation: {
      pt: 'amanhã',
      cv: 'manhan'
    },
    example: {
      pt: 'Até amanhã!',
      cv: 'Te manhan!'
    }
  },
  {
    id: 'entry-9',
    word: 'mar',
    translation: {
      pt: 'mar',
      cv: 'mar'
    },
    example: {
      pt: 'O mar está calmo hoje.',
      cv: 'Mar sta kalmu ozu.'
    }
  },
  {
    id: 'entry-155',
    word: 'maridu',
    translation: {
      pt: 'marido',
      cv: 'maridu'
    },
    example: {
      pt: 'Meu marido trabalha muito.',
      cv: 'Nha maridu ta trabadja txeu.'
    }
  },
  {
    id: 'entry-156',
    word: 'mas ki mas',
    translation: {
      pt: 'cada vez mais',
      cv: 'mas ki mas'
    },
    example: {
      pt: 'Ela fica cada vez mais bonita.',
      cv: 'El ta fika mas ki mas bunita.'
    }
  },
  {
    id: 'entry-157',
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
    id: 'entry-158',
    word: 'mérka',
    translation: {
      pt: 'marcar',
      cv: 'mérka'
    },
    example: {
      pt: 'Vou marcar uma consulta.',
      cv: 'N ta mérka un konsulta.'
    }
  },
  {
    id: 'entry-159',
    word: 'minis',
    translation: {
      pt: 'menos',
      cv: 'minis'
    },
    example: {
      pt: 'Preciso de menos açúcar.',
      cv: 'N meste di minis asukar.'
    }
  },
  {
    id: 'entry-160',
    word: 'módi ki bu sta?',
    translation: {
      pt: 'como você está?',
      cv: 'módi ki bu sta?'
    },
    example: {
      pt: 'Olá! Como você está?',
      cv: 'Ola! Módi ki bu sta?'
    }
  },
  {
    id: 'entry-161',
    word: 'morabeza',
    translation: {
      pt: 'hospitalidade cabo-verdiana',
      cv: 'morabeza'
    },
    example: {
      pt: 'A morabeza é uma característica marcante do povo.',
      cv: 'Morabeza é un karaterístika markanti di povu.'
    },
    note: 'Termo que descreve a hospitalidade e simpatia típicas de Cabo Verde.'
  },
  {
    id: 'entry-162',
    word: 'morna',
    translation: {
      pt: 'morna (gênero musical tradicional)',
      cv: 'morna'
    },
    example: {
      pt: 'A morna é patrimônio da humanidade.',
      cv: 'Morna é patrimoniu di umanidadi.'
    }
  },
  {
    id: 'entry-163',
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
    id: 'entry-164',
    word: 'mudjer',
    translation: {
      pt: 'mulher',
      cv: 'mudjer'
    },
    example: {
      pt: 'A mulher está cozinhando.',
      cv: 'Mudjer sta kuzinha.'
    }
  },
  {
    id: 'entry-165',
    word: 'mutu',
    translation: {
      pt: 'muito/muita',
      cv: 'mutu'
    },
    example: {
      pt: 'Ela é muito bonita.',
      cv: 'El é mutu bonita.'
    }
  },
  {
    id: 'entry-166',
    word: 'N (Ami)',
    translation: {
      pt: 'Eu',
      cv: 'N (Ami)'
    },
    example: {
      pt: 'Eu gosto de ler a Bíblia.',
      cv: 'N gosta di le Bíblia.'
    }
  },
  {
    id: 'entry-167',
    word: 'n sta bem',
    translation: {
      pt: 'estou bem',
      cv: 'n sta bem'
    },
    example: {
      pt: 'Como você está? Estou bem, obrigado!',
      cv: 'Kuma ku bu sta? N sta bem, obrigadu!'
    }
  },
  {
    id: 'entry-168',
    word: 'n ta dretu',
    translation: {
      pt: 'estou bem',
      cv: 'n ta dretu'
    },
    example: {
      pt: 'Estou bem, obrigado!',
      cv: 'N ta dretu, obrigadu!'
    }
  },
  {
    id: 'entry-169',
    word: 'na',
    translation: {
      pt: 'em',
      cv: 'na'
    },
    example: {
      pt: 'Estou em casa.',
      cv: 'N sta na kaza.'
    }
  },
  {
    id: 'entry-170',
    word: 'nada',
    translation: {
      pt: 'nada',
      cv: 'nada'
    },
    example: {
      pt: 'Não há nada aqui.',
      cv: 'Ka ten nada li.'
    }
  },
  {
    id: 'entry-171',
    word: 'namorada',
    translation: {
      pt: 'namorada',
      cv: 'namorada'
    },
    example: {
      pt: 'Minha namorada é muito bonita.',
      cv: 'Nha namorada é bunita.'
    }
  },
  {
    id: 'entry-172',
    word: 'namoradu',
    translation: {
      pt: 'namorado',
      cv: 'namoradu'
    },
    example: {
      pt: 'Meu namorado vem buscar-me às seis.',
      cv: 'Nha namoradu ta ben buska-m seix ora.'
    }
  },
  {
    id: 'entry-173',
    word: 'naturéza',
    translation: {
      pt: 'natureza',
      cv: 'naturéza'
    },
    example: {
      pt: 'A natureza está cheia de beleza e mistério.',
      cv: 'Naturéza sta txeu di beleza i mistériu.'
    }
  },
  {
    id: 'entry-174',
    word: 'nha',
    translation: {
      pt: 'meu/minha',
      cv: 'nha'
    },
    example: {
      pt: 'Este é o meu livro.',
      cv: 'Es é nha livru.'
    }
  },
  {
    id: 'entry-175',
    word: 'nha tarbadju',
    translation: {
      pt: 'meu trabalho',
      cv: 'nha tarbadju'
    },
    example: {
      pt: 'Meu trabalho é falar sobre a Bíblia.',
      cv: 'Nha tarbadju é papia sobri Bíblia.'
    }
  },
  {
    id: 'entry-176',
    word: 'Nho',
    translation: {
      pt: 'Senhor (tratamento respeitoso)',
      cv: 'Nho'
    },
    example: {
      pt: 'O senhor gostaria de sentar?',
      cv: 'Nho gostaria di senta?'
    }
  },
  {
    id: 'entry-177',
    word: 'nhos',
    translation: {
      pt: 'vosso/vossa',
      cv: 'nhos'
    },
    example: {
      pt: 'Onde está o vosso carro?',
      cv: 'Undi ki nhos karu sta?'
    }
  },
  {
    id: 'entry-10',
    word: 'ningen',
    translation: {
      pt: 'ninguém',
      cv: 'ningen'
    },
    example: {
      pt: 'Ninguém veio à reunião.',
      cv: 'Ningen ben na runion.'
    }
  },
  {
    id: 'entry-178',
    word: 'ninhun',
    translation: {
      pt: 'nenhum/nenhuma',
      cv: 'ninhun'
    },
    example: {
      pt: 'Não há nenhum problema.',
      cv: 'Ka ten ninun problema.'
    }
  },
  {
    id: 'entry-179',
    word: 'nos',
    translation: {
      pt: 'nosso/nossa',
      cv: 'nos'
    },
    example: {
      pt: 'Nossa casa é bonita.',
      cv: 'Nos kaza é bonita.'
    }
  },
  {
    id: 'entry-180',
    word: 'Nu (Du)',
    translation: {
      pt: 'Nós',
      cv: 'Nu (Du)'
    },
    example: {
      pt: 'Nós amamos a Jeová.',
      cv: 'Nu ta ama Jeová.'
    }
  },
  {
    id: 'entry-181',
    word: 'obe',
    translation: {
      pt: 'ouvir',
      cv: 'obe'
    },
    example: {
      pt: 'Estou ouvindo música.',
      cv: 'N sta ta obe música.'
    }
  },
  {
    id: 'entry-182',
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
    id: 'entry-183',
    word: 'odja',
    translation: {
      pt: 'ver',
      cv: 'odja'
    },
    example: {
      pt: 'Você viu meu livro?',
      cv: 'Bu odja nha livru?'
    }
  },
  {
    id: 'entry-184',
    word: 'onbru',
    translation: {
      pt: 'ombro',
      cv: 'onbru'
    },
    example: {
      pt: 'Estou com dor no ombro.',
      cv: 'N tene dor na onbru.'
    }
  },
  {
    id: 'entry-185',
    word: 'ontem',
    translation: {
      pt: 'ontem',
      cv: 'onte'
    },
    example: {
      pt: 'Eu te vi ontem na reunião.',
      cv: 'N odja-bu onte na runion.'
    }
  },
  {
    id: 'entry-186',
    word: 'onti',
    translation: {
      pt: 'ontem',
      cv: 'onti'
    },
    example: {
      pt: 'Cheguei ontem à noite.',
      cv: 'N txega onti noti.'
    }
  },
  {
    id: 'entry-187',
    word: 'ontonti',
    translation: {
      pt: 'anteontem',
      cv: 'ontonti'
    },
    example: {
      pt: 'Ele viajou anteontem.',
      cv: 'El viaja ontonti.'
    }
  },
  {
    id: 'entry-188',
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
    id: 'entry-189',
    word: 'orason',
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
    id: 'entry-190',
    word: 'otu',
    translation: {
      pt: 'outro/outra',
      cv: 'otu'
    },
    example: {
      pt: 'Quero outro copo, por favor.',
      cv: 'N kere otu kopa, pa favor.'
    }
  },
  {
    id: 'entry-191',
    word: 'ozu',
    translation: {
      pt: 'hoje',
      cv: 'ozu'
    },
    example: {
      pt: 'O que vamos fazer hoje?',
      cv: 'Kuzê ki nu bai faze ozu?'
    }
  },
  {
    id: 'entry-192',
    word: 'padas',
    translation: {
      pt: 'pratos',
      cv: 'padas'
    },
    example: {
      pt: 'Lave os pratos, por favor.',
      cv: 'Laba padas, pa favor.'
    }
  },
  {
    id: 'entry-193',
    word: 'padrinhu',
    translation: {
      pt: 'padrinho',
      cv: 'padrinhu'
    },
    example: {
      pt: 'Meu padrinho me deu um presente.',
      cv: 'Nha padrinhu da-m un prenda.'
    }
  },
  {
    id: 'entry-194',
    word: 'pai',
    translation: {
      pt: 'pai',
      cv: 'pai'
    },
    example: {
      pt: 'Meu pai trabalha muito.',
      cv: 'Nha pai ta trabadja txeu.'
    }
  },
  {
    id: 'entry-195',
    word: 'pamodi',
    translation: {
      pt: 'porque',
      cv: 'pamodi'
    },
    example: {
      pt: 'Estou atrasado porque o ônibus atrasou.',
      cv: 'N ta atrasadu pamodi txon atrasa.'
    }
  },
  {
    id: 'entry-196',
    word: 'pão',
    translation: {
      pt: 'pão',
      cv: 'pão'
    },
    example: {
      pt: 'Comprei pão fresco.',
      cv: 'N kumpra pão fresku.'
    }
  },
  {
    id: 'entry-197',
    word: 'papel',
    translation: {
      pt: 'papel',
      cv: 'papel'
    },
    example: {
      pt: 'Preciso de um pedaço de papel.',
      cv: 'N meste di un pedasu di papel.'
    }
  },
  {
    id: 'entry-198',
    word: 'papia',
    translation: {
      pt: 'falar',
      cv: 'papia'
    },
    example: {
      pt: 'Posso falar com você?',
      cv: 'N pode papia ku bo?'
    }
  },
  {
    id: 'entry-199',
    word: 'pasa',
    translation: {
      pt: 'passar',
      cv: 'pasa'
    },
    example: {
      pt: 'Pode passar o sal, por favor?',
      cv: 'Pode pasa sal, pa favor?'
    }
  },
  {
    id: 'entry-200',
    word: 'paz',
    translation: {
      pt: 'paz',
      cv: 'paz'
    },
    example: {
      pt: 'Que a paz esteja com vocês.',
      cv: 'Ki paz fika ku nhos.'
    }
  },
  {
    id: 'entry-201',
    word: 'pe',
    translation: {
      pt: 'pé',
      cv: 'pe'
    },
    example: {
      pt: 'Meu pé está doendo.',
      cv: 'Nha pe ta doé.'
    }
  },
  {
    id: 'entry-202',
    word: 'pera',
    translation: {
      pt: 'pêra',
      cv: 'pera'
    },
    example: {
      pt: 'A pêra está doce.',
      cv: 'Pera sta doci.'
    }
  },
  {
    id: 'entry-11',
    word: 'perduon',
    translation: {
      pt: 'perdão',
      cv: 'perduon'
    },
    example: {
      pt: 'Peço perdão pelo meu erro.',
      cv: 'N ta pidi perduon pa nha erru.'
    }
  },
  {
    id: 'entry-203',
    word: 'pérna',
    translation: {
      pt: 'perna',
      cv: 'pérna'
    },
    example: {
      pt: 'Minha perna está doendo.',
      cv: 'Nha pérna sta doendo.'
    }
  },
  {
    id: 'entry-204',
    word: 'peskador',
    translation: {
      pt: 'pescador',
      cv: 'peskador'
    },
    example: {
      pt: 'O pescador saiu cedo hoje.',
      cv: 'Peskador sai sedu ozu.'
    },
    note: 'A pesca é uma atividade econômica importante em Cabo Verde.'
  },
  {
    id: 'entry-205',
    word: 'peskiza',
    translation: {
      pt: 'pesquisa',
      cv: 'peskiza'
    },
    example: {
      pt: 'A pesquisa científica é importante.',
      cv: 'Peskiza siéntifika é importante.'
    }
  },
  {
    id: 'entry-206',
    word: 'petu',
    translation: {
      pt: 'peito',
      cv: 'petu'
    },
    example: {
      pt: 'Sinto dor no peito quando respiro fundo.',
      cv: 'N senti dor na petu ora ki N respira fundu.'
    }
  },
  {
    id: 'entry-207',
    word: 'pexe',
    translation: {
      pt: 'peixe',
      cv: 'pexe'
    },
    example: {
      pt: 'Gosto de peixe grelhado.',
      cv: 'N gosta di pexe gridjadu.'
    }
  },
  {
    id: 'entry-208',
    word: 'pexi',
    translation: {
      pt: 'peixe',
      cv: 'pexi'
    },
    example: {
      pt: 'Vamos comer peixe assado.',
      cv: 'Nu bai kume pexi asadu.'
    }
  },
  {
    id: 'entry-209',
    word: 'piskos',
    translation: {
      pt: 'pêlos',
      cv: 'piskos'
    },
    example: {
      pt: 'Ele tem muitos pêlos no braço.',
      cv: 'El tene piskos txeu na brasu.'
    }
  },
  {
    id: 'entry-210',
    word: 'pô',
    translation: {
      pt: 'pôr',
      cv: 'pô'
    },
    example: {
      pt: 'Vou pôr a mesa para o jantar.',
      cv: 'N ta pô mesa pa janta.'
    }
  },
  {
    id: 'entry-211',
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
    id: 'entry-212',
    word: 'pode repete?',
    translation: {
      pt: 'pode repetir?',
      cv: 'pode repete?'
    },
    example: {
      pt: 'Desculpe, pode repetir por favor?',
      cv: 'Diskulpa, pode repete pa favor?'
    }
  },
  {
    id: 'entry-213',
    word: 'podi',
    translation: {
      pt: 'pode (formal)',
      cv: 'podi'
    },
    example: {
      pt: 'O senhor pode me ajudar?',
      cv: 'Podi djuda-m?'
    }
  },
  {
    id: 'entry-214',
    word: 'poku',
    translation: {
      pt: 'pouco/pouca',
      cv: 'poku'
    },
    example: {
      pt: 'Espere um pouco.',
      cv: 'Spera un poku.'
    }
  },
  {
    id: 'entry-215',
    word: 'pon',
    translation: {
      pt: 'pôr/colocar',
      cv: 'pon'
    },
    example: {
      pt: 'Ponha o prato na mesa.',
      cv: 'Pon padja na meza.'
    }
  },
  {
    id: 'entry-216',
    word: 'porku',
    translation: {
      pt: 'porco',
      cv: 'porku'
    },
    example: {
      pt: 'O assado de porco está pronto.',
      cv: 'Asadu di porku sta prontu.'
    }
  },
  {
    id: 'entry-217',
    word: 'porta',
    translation: {
      pt: 'porta',
      cv: 'porta'
    },
    example: {
      pt: 'Feche a porta, por favor.',
      cv: 'Fecha porta, pa favor.'
    }
  },
  {
    id: 'entry-218',
    word: 'pretu',
    translation: {
      pt: 'preto',
      cv: 'pretu'
    },
    example: {
      pt: 'O carro é preto.',
      cv: 'Karu é pretu.'
    }
  },
  {
    id: 'entry-219',
    word: 'prima',
    translation: {
      pt: 'prima',
      cv: 'prima'
    },
    example: {
      pt: 'Minha prima vem nos visitar.',
      cv: 'Nha prima ta ben vizita-nu.'
    }
  },
  {
    id: 'entry-220',
    word: 'primo',
    translation: {
      pt: 'primo/prima',
      cv: 'primo'
    },
    example: {
      pt: 'Meu primo veio me visitar.',
      cv: 'Nha primo ben vizita-m.'
    }
  },
  {
    id: 'entry-221',
    word: 'primu',
    translation: {
      pt: 'primo',
      cv: 'primu'
    },
    example: {
      pt: 'Meu primo mora em Portugal.',
      cv: 'Nha primu mora na Portugal.'
    }
  },
  {
    id: 'entry-222',
    word: 'publicação',
    translation: {
      pt: 'publicação',
      cv: 'publikason'
    },
    example: {
      pt: 'Esta publicação nos ajuda a entender a Bíblia.',
      cv: 'Kel publikason ta djuda-nu entendi Bíblia.'
    }
  },
  {
    id: 'entry-223',
    word: 'pudin',
    translation: {
      pt: 'pudim',
      cv: 'pudin'
    },
    example: {
      pt: 'Vou fazer pudim de leite.',
      cv: 'N bai faze pudin di leti.'
    }
  },
  {
    id: 'entry-224',
    word: 'ramédi',
    translation: {
      pt: 'remédio',
      cv: 'ramédi'
    },
    example: {
      pt: 'Preciso comprar remédio na farmácia.',
      cv: 'N meste di kumpra ramédi na farmásia.'
    }
  },
  {
    id: 'entry-225',
    word: 'rapariga',
    translation: {
      pt: 'menina',
      cv: 'rapariga'
    },
    example: {
      pt: 'A menina está estudando.',
      cv: 'Rapariga sta studa.'
    }
  },
  {
    id: 'entry-12',
    word: 'ratorku',
    translation: {
      pt: 'rábano',
      cv: 'ratorku'
    },
    example: {
      pt: 'O rábano é picante.',
      cv: 'Ratorku é pikanti.'
    }
  },
  {
    id: 'entry-226',
    word: 'redi sosial',
    translation: {
      pt: 'rede social',
      cv: 'redi sosial'
    },
    example: {
      pt: 'Ela passa muito tempo nas redes sociais.',
      cv: 'El ta gasta txeu ténpu na redi sosial.'
    }
  },
  {
    id: 'entry-227',
    word: 'refeison',
    translation: {
      pt: 'refeição',
      cv: 'refeison'
    },
    example: {
      pt: 'A refeição estava deliciosa.',
      cv: 'Refeison stava saboroza.'
    }
  },
  {
    id: 'entry-228',
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
    id: 'entry-229',
    word: 'revista',
    translation: {
      pt: 'revista',
      cv: 'revista'
    },
    example: {
      pt: 'Temos uma revista que fala sobre a esperança.',
      cv: 'Nu ten un revista ki ta papia sobri speransa.'
    }
  },
  {
    id: 'entry-230',
    word: 'roskon',
    translation: {
      pt: 'pão doce',
      cv: 'roskon'
    },
    example: {
      pt: 'O pão doce está quentinho.',
      cv: 'Roskon sta kentinho.'
    }
  },
  {
    id: 'entry-231',
    word: 'rostu',
    translation: {
      pt: 'rosto',
      cv: 'rostu'
    },
    example: {
      pt: 'Lave bem o rosto.',
      cv: 'Laba bonitu rostu.'
    }
  },
  {
    id: 'entry-232',
    word: 'rosu',
    translation: {
      pt: 'rosa',
      cv: 'rosu'
    },
    example: {
      pt: 'O céu ao pôr do sol fica rosa.',
      cv: 'Seu ta fika rosu na hora di sol-pô.'
    }
  },
  {
    id: 'entry-233',
    word: 'sabe',
    translation: {
      pt: 'saber',
      cv: 'sabe'
    },
    example: {
      pt: 'Você sabe a resposta?',
      cv: 'Bu sabe resposta?'
    }
  },
  {
    id: 'entry-234',
    word: 'sabidu',
    translation: {
      pt: 'sabido/conhecido',
      cv: 'sabidu'
    },
    example: {
      pt: 'Ele é muito sabido.',
      cv: 'El é mutu sabidu.'
    }
  },
  {
    id: 'entry-235',
    word: 'sabiduria',
    translation: {
      pt: 'sabedoria',
      cv: 'sabiduria'
    },
    example: {
      pt: 'A sabedoria de Deus é infinita.',
      cv: 'Sabiduria di Deus é infinitu.'
    }
  },
  {
    id: 'entry-236',
    word: 'salvason',
    translation: {
      pt: 'salvação',
      cv: 'salvason'
    },
    example: {
      pt: 'A salvação vem por meio de Jesus Cristo.',
      cv: 'Salvason ta ben pa meiu di Jizus Kristu.'
    }
  },
  {
    id: 'entry-237',
    word: 'santifikadu',
    translation: {
      pt: 'santificado',
      cv: 'santifikadu'
    },
    example: {
      pt: 'Santificado seja o teu nome.',
      cv: 'Bu nómi santifikadu.'
    }
  },
  {
    id: 'entry-238',
    word: 'santu',
    translation: {
      pt: 'santo',
      cv: 'santu'
    },
    example: {
      pt: 'O Espírito Santo nos guia.',
      cv: 'Spiritu Santu ta guia-nu.'
    }
  },
  {
    id: 'entry-239',
    word: 'sapatu',
    translation: {
      pt: 'sapato',
      cv: 'sapatu'
    },
    example: {
      pt: 'Meus sapatos estão gastos.',
      cv: 'Nha sapatu sta gastadu.'
    }
  },
  {
    id: 'entry-240',
    word: 'se',
    translation: {
      pt: 'seu/sua (dele/dela)',
      cv: 'se'
    },
    example: {
      pt: 'O livro dele está na mesa.',
      cv: 'Se livru sta na meza.'
    }
  },
  {
    id: 'entry-241',
    word: 'sekretaria',
    translation: {
      pt: 'secretaria',
      cv: 'sekretaria'
    },
    example: {
      pt: 'A secretaria fica no primeiro andar.',
      cv: 'Sekretaria fika na primeru andar.'
    }
  },
  {
    id: 'entry-242',
    word: 'senha di kumida',
    translation: {
      pt: 'vale-refeição',
      cv: 'senha di kumida'
    },
    example: {
      pt: 'Os funcionários recebem vale-refeição.',
      cv: 'Trabadjaduris ta resebe senha di kumida.'
    }
  },
  {
    id: 'entry-243',
    word: 'ser',
    translation: {
      pt: 'ser',
      cv: 'ser'
    },
    example: {
      pt: 'Deus é amor.',
      cv: 'Deus é amor.'
    }
  },
  {
    id: 'entry-244',
    word: 'serveja',
    translation: {
      pt: 'cerveja',
      cv: 'serveja'
    },
    example: {
      pt: 'Quer uma cerveja gelada?',
      cv: 'Bu kere un serveja fria?'
    }
  },
  {
    id: 'entry-245',
    word: 'ses',
    translation: {
      pt: 'deles/delas',
      cv: 'ses'
    },
    example: {
      pt: 'Os livros deles estão na estante.',
      cv: 'Ses livru sta na pratileira.'
    }
  },
  {
    id: 'entry-246',
    word: 'siénsia',
    translation: {
      pt: 'ciência',
      cv: 'siénsia'
    },
    example: {
      pt: 'A ciência avança rapidamente.',
      cv: 'Siénsia ta avansa rapidu.'
    }
  },
  {
    id: 'entry-247',
    word: 'sigunda-fera',
    translation: {
      pt: 'segunda-feira',
      cv: 'sigunda-fera'
    },
    example: {
      pt: 'Volto ao trabalho na segunda.',
      cv: 'N ta torna trabadju na sigunda.'
    }
  },
  {
    id: 'entry-248',
    word: 'skese/diskese',
    translation: {
      pt: 'disquete (sobremesa típica)',
      cv: 'skese/diskese'
    },
    example: {
      pt: 'Vou fazer doce de leite em pó.',
      cv: 'N bai faze diskese.'
    }
  },
  {
    id: 'entry-13',
    word: 'skola',
    translation: {
      pt: 'estudar',
      cv: 'skola'
    },
    example: {
      pt: 'Preciso estudar para a prova.',
      cv: 'N meste skola pa prova.'
    }
  },
  {
    id: 'entry-249',
    word: 'skrebe',
    translation: {
      pt: 'escrever',
      cv: 'skrebe'
    },
    example: {
      pt: 'Preciso escrever uma carta.',
      cv: 'N meste skrebe un karta.'
    }
  },
  {
    id: 'entry-250',
    word: 'sobaku',
    translation: {
      pt: 'sovaco',
      cv: 'sobaku'
    },
    example: {
      pt: 'Passe desodorante no sovaco.',
      cv: 'Pasa desodorante na sobaku.'
    }
  },
  {
    id: 'entry-251',
    word: 'sobreménza',
    translation: {
      pt: 'sobremesa',
      cv: 'sobreménza'
    },
    example: {
      pt: 'Qual a sobremesa do dia?',
      cv: 'Kual é sobreménza di oji?'
    }
  },
  {
    id: 'entry-252',
    word: 'socladi',
    translation: {
      pt: 'chocolate',
      cv: 'socladi'
    },
    example: {
      pt: 'As crianças gostam de chocolate.',
      cv: 'Kriansa gosta di socladi.'
    }
  },
  {
    id: 'entry-253',
    word: 'sol',
    translation: {
      pt: 'sol',
      cv: 'sol'
    },
    example: {
      pt: 'O sol está forte hoje.',
      cv: 'Sol sta forti ozu.'
    }
  },
  {
    id: 'entry-254',
    word: 'spera',
    translation: {
      pt: 'esperar',
      cv: 'spera'
    },
    example: {
      pt: 'Espere um momento, por favor.',
      cv: 'Spera un momentu, pa favor.'
    }
  },
  {
    id: 'entry-255',
    word: 'speransa',
    translation: {
      pt: 'esperança',
      cv: 'speransa'
    },
    example: {
      pt: 'A esperança nos mantém fortes.',
      cv: 'Speransa ta mantén-nu forti.'
    }
  },
  {
    id: 'entry-256',
    word: 'sta',
    translation: {
      pt: 'está/estou',
      cv: 'sta'
    },
    example: {
      pt: 'Como você está?',
      cv: 'Módi ki bu sta?'
    }
  },
  {
    id: 'entry-257',
    word: 'sta tudu dretu',
    translation: {
      pt: 'está tudo bem',
      cv: 'sta tudu dretu'
    },
    example: {
      pt: 'Não se preocupe, está tudo bem.',
      cv: 'Ka preokupa, sta tudu dretu.'
    }
  },
  {
    id: 'entry-258',
    word: 'subrinha',
    translation: {
      pt: 'sobrinha',
      cv: 'subrinha'
    },
    example: {
      pt: 'Minha sobrinha está crescendo rápido.',
      cv: 'Nha subrinha sta krese lihéu.'
    }
  },
  {
    id: 'entry-259',
    word: 'subrinhu',
    translation: {
      pt: 'sobrinho',
      cv: 'subrinhu'
    },
    example: {
      pt: 'Meu sobrinho gosta de futebol.',
      cv: 'Nha subrinu gosta di futibol.'
    }
  },
  {
    id: 'entry-260',
    word: 'suguru',
    translation: {
      pt: 'açúcar',
      cv: 'suguru'
    },
    example: {
      pt: 'Coloque pouco açúcar no café.',
      cv: 'Pon poku suguru na kafé.'
    }
  },
  {
    id: 'entry-261',
    word: 'tchon',
    translation: {
      pt: 'chão/terra',
      cv: 'tchon'
    },
    example: {
      pt: 'A água caiu no chão.',
      cv: 'Agu kaia na tchon.'
    }
  },
  {
    id: 'entry-262',
    word: 'tchuc',
    translation: {
      pt: 'bebida alcoólica tradicional',
      cv: 'tchuc'
    },
    example: {
      pt: 'Vamos tomar um tchuc?',
      cv: 'Nu bai bebe un tchuc?'
    },
    note: 'Bebida alcoólica caseira feita de cana-de-açúcar, comum em festas tradicionais.'
  },
  {
    id: 'entry-263',
    word: 'teknolojia',
    translation: {
      pt: 'tecnologia',
      cv: 'teknolojia'
    },
    example: {
      pt: 'A tecnologia está em todo lugar.',
      cv: 'Teknolojia sta na tudu luga.'
    }
  },
  {
    id: 'entry-264',
    word: 'telefoni publiku',
    translation: {
      pt: 'telefone público',
      cv: 'telefoni publiku'
    },
    example: {
      pt: 'Há um telefone público na esquina.',
      cv: 'Tem un telefoni publiku na eskinha.'
    }
  },
  {
    id: 'entry-265',
    word: 'temo',
    translation: {
      pt: 'ter medo',
      cv: 'temo'
    },
    example: {
      pt: 'Não tenha medo, estou aqui.',
      cv: 'Ka temo, N sta li.'
    }
  },
  {
    id: 'entry-266',
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
  {
    id: 'entry-267',
    word: 'ten',
    translation: {
      pt: 'ter',
      cv: 'ten'
    },
    example: {
      pt: 'Eu tenho um livro novo.',
      cv: 'N ten un livru novu.'
    }
  },
  {
    id: 'entry-268',
    word: 'tene fomi',
    translation: {
      pt: 'ter fome',
      cv: 'tene fomi'
    },
    example: {
      pt: 'Estou com fome, vamos comer?',
      cv: 'N tene fomi, nu bai kume?'
    }
  },
  {
    id: 'entry-269',
    word: 'tenha pacienci ku nha',
    translation: {
      pt: 'tenha paciência comigo',
      cv: 'tenha pacienci ku nha'
    },
    example: {
      pt: 'Espere, tenha paciência comigo.',
      cv: 'Spera, tenha pacienci ku nha.'
    },
    note: 'Expressão educada para pedir paciência.'
  },
  {
    id: 'entry-270',
    word: 'ténpu',
    translation: {
      pt: 'tempo',
      cv: 'ténpu'
    },
    example: {
      pt: 'Nós precisamos passar mais tempo juntos.',
      cv: 'Nu meste pasa más ténpu djuntu.'
    }
  },
  {
    id: 'entry-14',
    word: 'tia',
    translation: {
      pt: 'tia',
      cv: 'tia'
    },
    example: {
      pt: 'Minha tia faz bolos gostosos.',
      cv: 'Nha tia ta faze bolu saborozu.'
    }
  },
  {
    id: 'entry-271',
    word: 'tilivizon',
    translation: {
      pt: 'televisão',
      cv: 'tilivizon'
    },
    example: {
      pt: 'Vamos assistir televisão juntos.',
      cv: 'Nu bai odja tilivizon djuntu.'
    }
  },
  {
    id: 'entry-272',
    word: 'tio',
    translation: {
      pt: 'tio',
      cv: 'tio'
    },
    example: {
      pt: 'Meu tio mora na ilha do Fogo.',
      cv: 'Nha tio ta mora na ilha di Fogo.'
    }
  },
  {
    id: 'entry-273',
    word: 'tiu',
    translation: {
      pt: 'tio',
      cv: 'tiu'
    },
    example: {
      pt: 'Meu tio conta histórias interessantes.',
      cv: 'Nha tu ta konta história interesanti.'
    }
  },
  {
    id: 'entry-274',
    word: 'toma',
    translation: {
      pt: 'tomar/beber',
      cv: 'toma'
    },
    example: {
      pt: 'Vou tomar um suco.',
      cv: 'N bai toma un sumu.'
    }
  },
  {
    id: 'entry-275',
    word: 'tomati',
    translation: {
      pt: 'tomate',
      cv: 'tomati'
    },
    example: {
      pt: 'O molho de tomate está azedo.',
      cv: 'Molu di tomati sta azedu.'
    }
  },
  {
    id: 'entry-276',
    word: 'trabadja',
    translation: {
      pt: 'trabalhar',
      cv: 'trabadja'
    },
    example: {
      pt: 'Preciso trabalhar amanhã.',
      cv: 'N mesti trabadja manhan.'
    }
  },
  {
    id: 'entry-277',
    word: 'trabadju',
    translation: {
      pt: 'trabalho',
      cv: 'trabadju'
    },
    example: {
      pt: 'Meu trabalho começa às oito.',
      cv: 'Nha trabaddu kumesa na oitu ora.'
    }
  },
  {
    id: 'entry-278',
    word: 'traze',
    translation: {
      pt: 'trazer',
      cv: 'traze'
    },
    example: {
      pt: 'Pode trazer a conta, por favor?',
      cv: 'Pode traze konta, pa favor?'
    }
  },
  {
    id: 'entry-279',
    word: 'tres',
    translation: {
      pt: 'três',
      cv: 'tres'
    },
    example: {
      pt: 'São três horas.',
      cv: 'É tres ora.'
    }
  },
  {
    id: 'entry-280',
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
    id: 'entry-281',
    word: 'trizonti',
    translation: {
      pt: 'três dias atrás',
      cv: 'trizonti'
    },
    example: {
      pt: 'Ele viajou três dias atrás.',
      cv: 'El viaja trizonti.'
    }
  },
  {
    id: 'entry-282',
    word: 'tudu',
    translation: {
      pt: 'tudo/todos',
      cv: 'tudu'
    },
    example: {
      pt: 'Todos estão convidados.',
      cv: 'Tudu é konvidadu.'
    }
  },
  {
    id: 'entry-283',
    word: 'txeka',
    translation: {
      pt: 'checar/verificar',
      cv: 'txeka'
    },
    example: {
      pt: 'Vou verificar o horário.',
      cv: 'N bai txeka orariu.'
    }
  },
  {
    id: 'entry-284',
    word: 'txeu',
    translation: {
      pt: 'muito',
      cv: 'txeu'
    },
    example: {
      pt: 'Gosto muito de ti.',
      cv: 'N gosta txeu di bo.'
    }
  },
  {
    id: 'entry-285',
    word: 'txeu di paciensia',
    translation: {
      pt: 'muita paciência',
      cv: 'txeu di paciensia'
    },
    example: {
      pt: 'É preciso ter muita paciência.',
      cv: 'Meste ten txeu di paciensia.'
    }
  },
  {
    id: 'entry-286',
    word: 'txeu obrigadu',
    translation: {
      pt: 'muito obrigado',
      cv: 'txeu obrigadu'
    },
    example: {
      pt: 'Muito obrigado pela sua ajuda!',
      cv: 'Txeu obrigadu pa bu djuda!'
    }
  },
  {
    id: 'entry-287',
    word: 'txoma',
    translation: {
      pt: 'chamar',
      cv: 'txoma'
    },
    example: {
      pt: 'Me chame mais tarde.',
      cv: 'Txoma-m mas tarde.'
    }
  },
  {
    id: 'entry-288',
    word: 'txuba',
    translation: {
      pt: 'chuva',
      cv: 'txuba'
    },
    example: {
      pt: 'Vai chover amanhã.',
      cv: 'Ta txoba manhan.'
    }
  },
  {
    id: 'entry-289',
    word: 'uditu',
    translation: {
      pt: 'ouvido',
      cv: 'uditu'
    },
    example: {
      pt: 'Preciso limpar o ouvido.',
      cv: 'N meste limpa uditu.'
    }
  },
  {
    id: 'entry-290',
    word: 'un',
    translation: {
      pt: 'um/uma',
      cv: 'un'
    },
    example: {
      pt: 'Preciso de um lápis.',
      cv: 'N meste un lapis.'
    }
  },
  {
    id: 'entry-291',
    word: 'un monti',
    translation: {
      pt: 'muitos/muitas',
      cv: 'un monti'
    },
    example: {
      pt: 'Tem muitas pessoas lá.',
      cv: 'Ten un monti di djenti li.'
    }
  },
  {
    id: 'entry-292',
    word: 'undé ki bu mora?',
    translation: {
      pt: 'onde você mora?',
      cv: 'undé ki bu mora?'
    },
    example: {
      pt: 'Posso saber onde você mora?',
      cv: 'N pode sabe undé ki bu mora?'
    }
  },
  {
    id: 'entry-293',
    word: 'uns',
    translation: {
      pt: 'uns/umas',
      cv: 'uns'
    },
    example: {
      pt: 'Comprei uns livros novos.',
      cv: 'N kumpra uns livru novu.'
    }
  },
  {
    id: 'entry-294',
    word: 'uva séku',
    translation: {
      pt: 'uva-passa',
      cv: 'uva séku'
    },
    example: {
      pt: 'Adicione uvas-passas ao arroz-doce.',
      cv: 'Junta uva séku no aroz doci.'
    }
  },
  {
    id: 'entry-15',
    word: 'ventu',
    translation: {
      pt: 'vento',
      cv: 'ventu'
    },
    example: {
      pt: 'Está ventando muito hoje.',
      cv: 'Sta txeu ventu ozu.'
    }
  },
  {
    id: 'entry-295',
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
  {
    id: 'entry-296',
    word: 'verdi',
    translation: {
      pt: 'verde',
      cv: 'verdi'
    },
    example: {
      pt: 'As plantas são verdes.',
      cv: 'Planta ta verdi.'
    }
  },
  {
    id: 'entry-297',
    word: 'vermelhu',
    translation: {
      pt: 'vermelho',
      cv: 'vermelhu'
    },
    example: {
      pt: 'A rosa é vermelha.',
      cv: 'Rosa é vermelhu.'
    }
  },
  {
    id: 'entry-298',
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
    id: 'entry-299',
    word: 'xéfi',
    translation: {
      pt: 'chefe',
      cv: 'xéfi'
    },
    example: {
      pt: 'Preciso falar com o chefe.',
      cv: 'N mesti papia ku xéfi.'
    }
  },
  {
    id: 'entry-300',
    word: 'xikra',
    translation: {
      pt: 'açúcar',
      cv: 'xikra'
    },
    example: {
      pt: 'Coloque um pouco de açúcar no café.',
      cv: 'Pon un poku xikra na kafé.'
    }
  },
  {
    id: 'entry-301',
    word: 'abadu',
    translation: {
      pt: 'abade, padre',
      cv: 'abadu'
    },
    example: {
      pt: 'O abade da igreja é muito sábio.',
      cv: 'Abadu di igreja é sabi duce.'
    },
    note: "classeGramatical: s., transcricaoFonetica: [ɐbɐ'du]"
  },
  {
    id: 'entry-302',
    word: 'abafadu',
    translation: {
      pt: 'abafado, abafadiço',
      cv: 'abafadu'
    },
    example: {
      pt: 'O quarto está muito abafado, vamos abrir a janela.',
      cv: 'Kuartu sta abafadu d+ , bamu abri janela.'
    },
    note: "classeGramatical: adj., transcricaoFonetica: [ɐbɐfɐ'du]"
  },
  {
    id: 'entry-303',
    word: 'abanu',
    translation: {
      pt: 'abanão, abano',
      cv: 'abanu'
    },
    example: {
      pt: 'Usei um abano para me refrescar do calor.',
      cv: 'N uza un abanu pa refreska di kalor.'
    },
    note: "classeGramatical: s., transcricaoFonetica: [ɐ'bɐnu]"
  },
  {
    id: 'entry-304',
    word: 'abaxu',
    translation: {
      pt: 'abaixo',
      cv: 'abaxu'
    },
    example: {
      pt: 'Assine seu nome abaixo da linha.',
      cv: 'Asina bo nómi abaxu di linha.'
    },
    note: "classeGramatical: adv., transcricaoFonetica: [abaʃu]"
  },
  {
    id: 'entry-305',
    word: 'abesu',
    translation: {
      pt: 'abcesso',
      cv: 'abesu'
    },
    example: {
      pt: 'Ele está com um abcesso no dente e precisa ir ao dentista.',
      cv: 'E ten un abesu na denti i meste bai dentista.'
    },
    note: "classeGramatical: s., transcricaoFonetica: [ɐ'bezu]"
  },
  {
    id: 'entry-306',
    word: 'abitu',
    translation: {
      pt: 'hábito, costume',
      cv: 'abitu'
    },
    example: {
      pt: 'Ler antes de dormir é um bom hábito.',
      cv: 'Le antes di durmi é un bon abitu.'
    },
    note: "classeGramatical: s., transcricaoFonetica: [ɐ'βitu]"
  },
  {
    id: 'entry-307',
    word: 'abri',
    translation: {
      pt: 'abrir',
      cv: 'abri'
    },
    example: {
      pt: 'Por favor, pode abrir a porta?',
      cv: 'Pur favor, pode abri porta?'
    },
    note: "classeGramatical: v., transcricaoFonetica: [ɐ'bɾi]"
  },
  {
    id: 'entry-308',
    word: 'abril',
    translation: {
      pt: 'abril',
      cv: 'abril'
    },
    example: {
      pt: 'Em abril, chove muito em Cabo Verde.',
      cv: 'Na abril, txobi txeu na Kabu Verdi.'
    },
    note: "classeGramatical: s., transcricaoFonetica: [ɐ'bɾil]"
  },
  {
    id: 'entry-309',
    word: 'abundu',
    translation: {
      pt: 'abundante',
      cv: 'abundu'
    },
    example: {
      pt: 'A chuva trouxe uma colheita abundante este ano.',
      cv: 'Txuba txiga ku koltura abundu na anu ki pasa.'
    },
    note: "classeGramatical: adj., transcricaoFonetica: [ɐ'bundu]"
  },
  {
    id: 'entry-310',
    word: 'abusadu',
    translation: {
      pt: 'abusado, atrevido',
      cv: 'abusadu'
    },
    example: {
      pt: 'Esse menino é muito abusado, não respeita ninguém.',
      cv: 'Kenha rapaz li é abusadu duce, ka ta rispeita ningen.'
    },
    note: "classeGramatical: adj., transcricaoFonetica: [ɐbu'zadu]"
  },
  {
    id: 'entry-311',
    word: 'abuza',
    translation: {
      pt: 'abusar',
      cv: 'abuza'
    },
    example: {
      pt: 'Não abuse da paciência dos outros.',
      cv: 'Ka abuza di paciensia di otus.'
    },
    note: "classeGramatical: v., transcricaoFonetica: [abuza]"
  },
  {
    id: 'entry-312',
    word: 'abó',
    translation: {
      pt: 'avó',
      cv: 'abó'
    },
    example: {
      pt: 'Minha avó faz os melhores bolos.',
      cv: 'Nha abó faze mel bolo.'
    },
    note: "classeGramatical: s., transcricaoFonetica: [ɐ'bɔ]"
  },
  {
    id: 'entry-313',
    word: 'abóka',
    translation: {
      pt: 'abóbora',
      cv: 'abóka'
    },
    example: {
      pt: 'Vamos fazer sopa de abóbora para o jantar.',
      cv: 'Bamu faze sopa di abóka pa janta.'
    },
    note: "classeGramatical: s., transcricaoFonetica: [ɐ'bɔkɐ]"
  },
  {
    id: 'entry-314',
    word: 'adibi',
    translation: {
      pt: 'adivinho',
      cv: 'adibi'
    },
    example: {
      pt: 'O adivinho previu que choveria amanhã.',
      cv: 'Adibi adivinha ma amanhá ta txoba.'
    },
    note: "classeGramatical: s., transcricaoFonetica: [ɐ'dibi]"
  },
  {
    id: 'entry-315',
    word: 'adika',
    translation: {
      pt: 'dedicar',
      cv: 'adika'
    },
    example: {
      pt: 'Vou me dedicar mais aos estudos este ano.',
      cv: 'N ta adika mas pa estudo na anu ki ta bai.'
    },
    note: "classeGramatical: v., transcricaoFonetica: [adika]"
  },
  {
    id: 'entry-316',
    word: 'adimi',
    translation: {
      pt: 'admitir',
      cv: 'adimi'
    },
    example: {
      pt: 'Ele não quis admitir que estava errado.',
      cv: 'E ka kize adimi ma el staba enganadu.'
    },
    note: "classeGramatical: v., transcricaoFonetica: [ɐ'dimi]"
  },
  {
    id: 'entry-317',
    word: 'adjetivu',
    translation: {
      pt: 'adjetivo',
      cv: 'adjetivu'
    },
    example: {
      pt: '"Bom" e "ruim" são exemplos de adjetivos.',
      cv: '"Bon" y "mau" é exemplu di adjetivu.'
    },
    note: "classeGramatical: s., transcricaoFonetica: [adʒɛtivu]"
  },
  {
    id: 'entry-318',
    word: 'adjetivu pusesivu',
    translation: {
      pt: 'adjetivo possessivo',
      cv: 'adjetivu pusesivu'
    },
    example: {
      pt: '"Meu", "tua", "nosso" são adjetivos possessivos.',
      cv: '"Nha", "bo", "nos" é adjetivu pusesivu.'
    },
    note: "classeGramatical: loc.adj., transcricaoFonetica: [adʒɛtivu pusɛsivu]"
  },
  {
    id: 'entry-319',
    word: 'adora',
    translation: {
      pt: 'adorar',
      cv: 'adora'
    },
    example: {
      pt: 'As crianças adoram brincar no parque.',
      cv: 'Kriansa ta adora brinka na parki.'
    },
    note: "classeGramatical: v., transcricaoFonetica: [adɔɾa]"
  },
  {
    id: 'entry-320',
    word: 'admirason',
    translation: {
      pt: 'admiração',
      cv: 'admirason'
    },
    example: {
      pt: 'Ela olhou para o quadro com admiração.',
      cv: 'E olha pa kuadru ku admirason.'
    }
  },
  {
    id: 'entry-321',
    word: 'adolesente',
    translation: {
      pt: 'adolescente',
      cv: 'adolesente'
    },
    example: {
      pt: 'Meu filho está na fase da adolescência.',
      cv: 'Nha fidju sta na faze di adolesensia.'
    }
  },
  {
    id: 'entry-322',
    word: 'adotadu',
    translation: {
      pt: 'adotado',
      cv: 'adotadu'
    },
    example: {
      pt: 'A criança foi adotada por um casal amoroso.',
      cv: 'Kriansa foi adotadu pa un kazal amorozu.'
    }
  },
  {
    id: 'entry-323',
    word: 'adotivu',
    translation: {
      pt: 'adotivo',
      cv: 'adotivu'
    },
    example: {
      pt: 'Ele tem um irmão adotivo que ama muito.',
      cv: 'E ten un irmon adotivu ki e ta ama dretu.'
    }
  },
  {
    id: 'entry-324',
    word: 'adultu',
    translation: {
      pt: 'adulto',
      cv: 'adultu'
    },
    example: {
      pt: 'Quando você for adulto, vai entender melhor.',
      cv: 'Kantu bo ser adultu, bo ta komprende mas.'
    }
  },
  {
    id: 'entry-325',
    word: 'adversariu',
    translation: {
      pt: 'adversário',
      cv: 'adversariu'
    },
    example: {
      pt: 'O time enfrentará seu principal adversário no domingo.',
      cv: 'Time ta joga kontra se prinsipal adversariu na dumingu.'
    }
  },
  {
    id: 'entry-326',
    word: 'advogadu',
    translation: {
      pt: 'advogado',
      cv: 'advogadu'
    },
    example: {
      pt: 'Preciso falar com meu advogado antes de assinar.',
      cv: 'N meste papia ku nha advogadu antis di asina.'
    }
  },
  {
    id: 'entry-327',
    word: 'aeroportu',
    translation: {
      pt: 'aeroporto',
      cv: 'aeroportu'
    },
    example: {
      pt: 'Vamos chegar ao aeroporto com duas horas de antecedência.',
      cv: 'Bamu txega na aeroportu ku dos oras di ates.'
    }
  },
  {
    id: 'entry-328',
    word: 'afetu',
    translation: {
      pt: 'afeto',
      cv: 'afetu'
    },
    example: {
      pt: 'A avó demonstrava muito afeto pelos netos.',
      cv: 'Avó mostrava dretu afetu pa nétu.'
    }
  },
  {
    id: 'entry-329',
    word: 'afetuozu',
    translation: {
      pt: 'afetuoso',
      cv: 'afetuozu'
    },
    example: {
      pt: 'Ele é um homem muito afetuoso com a família.',
      cv: 'E é un ómi afetuozu dretu ku família.'
    }
  },
  {
    id: 'entry-330',
    word: 'afetuozamenti',
    translation: {
      pt: 'afetuosamente',
      cv: 'afetuozamenti'
    },
    example: {
      pt: 'Assinei a carta com "afetuosamente".',
      cv: 'N asina karta ku "afetuozamente".'
    }
  },
  {
    id: 'entry-331',
    word: 'afiançon',
    translation: {
      pt: 'afianção, garantia',
      cv: 'afiançon'
    },
    example: {
      pt: 'Preciso de uma carta de afianção para o aluguel.',
      cv: 'N meste un karta di afiançon pa alugel.'
    }
  },
  {
    id: 'entry-332',
    word: 'afiançadu',
    translation: {
      pt: 'afiançado, garantido',
      cv: 'afiançadu'
    },
    example: {
      pt: 'O empréstimo está afiançado pelo banco.',
      cv: 'Emprestimu sta afiançadu pelu banku.'
    }
  },
  {
    id: 'entry-333',
    word: 'afiançamentu',
    translation: {
      pt: 'afiançamento, garantia',
      cv: 'afiançamentu'
    },
    example: {
      pt: 'O contrato exige afiançamento de três meses.',
      cv: 'Kontratu meste afiançamentu di tres mes.'
    }
  },
  {
    id: 'entry-334',
    word: 'afiança',
    translation: {
      pt: 'afiançar, garantir',
      cv: 'afiança'
    },
    example: {
      pt: 'Posso te afiançar que ele é de confiança.',
      cv: 'N pode ta afiança bo ma e é di fiansa.'
    }
  },
  {
    id: 'entry-335',
    word: 'afiançador',
    translation: {
      pt: 'afiançador, fiador',
      cv: 'afiançador'
    },
    example: {
      pt: 'Preciso de um afiançador para o contrato de arrendamento.',
      cv: 'N meste un afiançador pa kontratu di alugel.'
    }
  },
  {
    id: 'entry-336',
    word: 'afiançamentu di fidelidadi',
    translation: {
      pt: 'fiança de fidelidade',
      cv: 'afiançamentu di fidelidadi'
    },
    example: {
      pt: 'O funcionário assinou a fiança de fidelidade.',
      cv: 'Trabadjor asina afiançamentu di fidelidadi.'
    }
  },
  {
    id: 'entry-337',
    word: 'afiançamentu provizoriu',
    translation: {
      pt: 'fiança provisória',
      cv: 'afiançamentu provizoriu'
    },
    example: {
      pt: 'O juiz concedeu uma fiança provisória.',
      cv: 'Juis da un afiançamentu provizoriu.'
    }
  },
  {
    id: 'entry-338',
    word: 'afiançamentu judisial',
    translation: {
      pt: 'fiança judicial',
      cv: 'afiançamentu judisial'
    },
    example: {
      pt: 'O réu pagou a fiança judicial e aguarda julgamento em liberdade.',
      cv: 'Reu paga afiançamentu judisial i ta spera julgamentu na rua.'
    }
  },
  {
    id: 'entry-1001',
    word: 'bautismu',
    translation: {
      pt: 'batismo',
      cv: 'bautismu'
    },
    example: {
      pt: 'O batismo é um passo importante na vida de um cristão.',
      cv: 'Bautismu é un pasu importante na vida di un kriston.'
    }
  },
  {
    id: 'entry-1002',
    word: 'biblia',
    translation: {
      pt: 'bíblia',
      cv: 'biblia'
    },
    example: {
      pt: 'A Bíblia é a Palavra de Deus.',
      cv: 'Biblia é Palavra di Deus.'
    }
  },
  {
    id: 'entry-1003',
    word: 'irmon',
    translation: {
      pt: 'irmão',
      cv: 'irmon'
    },
    example: {
      pt: 'Meu irmão está no ministério de tempo integral.',
      cv: 'Nha irmon sta na obra di tempu intregu.'
    }
  },
  {
    id: 'entry-1004',
    word: 'irmon di kongregason',
    translation: {
      pt: 'irmão da congregação',
      cv: 'irmon di kongregason'
    },
    example: {
      pt: 'O irmão Silva é um ancião na congregação.',
      cv: 'Irmon Silva é un ansion na kongregason.'
    }
  },
  {
    id: 'entry-1005',
    word: 'testemunha di Jeová',
    translation: {
      pt: 'Testemunha de Jeová',
      cv: 'Testemunha di Jeová'
    },
    example: {
      pt: 'As Testemunhas de Jeová pregam em todo o mundo.',
      cv: 'Testemunhas di Jeová ta prega na tudu tera.'
    }
  },
  {
    id: 'entry-1006',
    word: 'reunion',
    translation: {
      pt: 'reunião',
      cv: 'reunion'
    },
    example: {
      pt: 'Temos reunião hoje à noite no Salão do Reino.',
      cv: 'Nu ten reunion oji à noiti na Salon di Reino.'
    }
  },
  {
    id: 'entry-1007',
    word: 'pregaçon',
    translation: {
      pt: 'pregação',
      cv: 'pregaçon'
    },
    example: {
      pt: 'A pregação é uma obra importante para os cristãos.',
      cv: 'Pregaçon é un trabadju importante pa kriston.'
    }
  },
  {
    id: 'entry-1008',
    word: 'biblia di estudio',
    translation: {
      pt: 'bíblia de estudo',
      cv: 'biblia di estudio'
    },
    example: {
      pt: 'Uso minha Bíblia de Estudo para fazer pesquisas.',
      cv: 'N uza nha Biblia di Estudo pa faze pesquisa.'
    }
  },
  {
    id: 'entry-1009',
    word: 'ministériu',
    translation: {
      pt: 'ministério',
      cv: 'ministériu'
    },
    example: {
      pt: 'Ele está no ministério de tempo integral há cinco anos.',
      cv: 'E sta na obra di tempu intregu ja ta kinka sinku anu.'
    }
  },
  {
    id: 'entry-1010',
    word: 'kongregason',
    translation: {
      pt: 'congregação',
      cv: 'kongregason'
    },
    example: {
      pt: 'Nossa congregação está crescendo muito.',
      cv: 'Nha kongregason sta krese txeu.'
    }
  },
  {
    id: 'entry-1011',
    word: 'estudo bibliku',
    translation: {
      pt: 'estudo bíblico',
      cv: 'estudo bibliku'
    },
    example: {
      pt: 'Tenho um estudo bíblico todas as semanas.',
      cv: 'N ten un estudio bibliku kada simana.'
    }
  },
  {
    id: 'entry-1012',
    word: 'reino di Deus',
    translation: {
      pt: 'Reino de Deus',
      cv: 'Reino di Deus'
    },
    example: {
      pt: 'O Reino de Deus é um governo celestial.',
      cv: 'Reino di Deus é un governu selestial.'
    }
  },
  {
    id: 'entry-1013',
    word: 'paraísu',
    translation: {
      pt: 'paraíso',
      cv: 'paraísu'
    },
    example: {
      pt: 'Esperamos viver no paraíso na Terra.',
      cv: 'Nu ta spera vive na paraísu na Tera.'
    }
  },
  {
    id: 'entry-1014',
    word: 'resurreison',
    translation: {
      pt: 'ressurreição',
      cv: 'resurreison'
    },
    example: {
      pt: 'A ressurreição é uma esperança bíblica.',
      cv: 'Resurreison é un speransa bibliku.'
    }
  },
  {
    id: 'entry-1015',
    word: 'armagedon',
    translation: {
      pt: 'Armagedom',
      cv: 'armagedon'
    },
    example: {
      pt: 'O Armagedom é a guerra de Deus contra a maldade.',
      cv: 'Armagedon é gerra di Deus kontra maldad.'
    }
  },
  {
    id: 'entry-1016',
    word: 'bautizadu',
    translation: {
      pt: 'batizado',
      cv: 'bautizadu'
    },
    example: {
      pt: 'Ele foi batizado no rio no mês passado.',
      cv: 'E foi bautizadu na ribeira no més passadu.'
    }
  },
  {
    id: 'entry-1017',
    word: 'bautizu',
    translation: {
      pt: 'batismo',
      cv: 'bautizu'
    },
    example: {
      pt: 'O batismo é um símbolo de dedicação a Deus.',
      cv: 'Bautizu é un símbulu di dedikason na Deus.'
    }
  },
  {
    id: 'entry-1018',
    word: 'bíblia',
    translation: {
      pt: 'Bíblia',
      cv: 'bíblia'
    },
    example: {
      pt: 'A Bíblia é o livro mais traduzido do mundo.',
      cv: 'Bíblia é livru mas tradusidu di mundu.'
    }
  },
  {
    id: 'entry-1019',
    word: 'bíblia sagrada',
    translation: {
      pt: 'Bíblia Sagrada',
      cv: 'bíblia sagrada'
    },
    example: {
      pt: 'A Bíblia Sagrada contém 66 livros inspirados.',
      cv: 'Bíblia Sagrada ten 66 livru inspiradus.'
    }
  },
  {
    id: 'entry-1020',
    word: 'bíbliku',
    translation: {
      pt: 'bíblico',
      cv: 'bíbliku'
    },
    example: {
      pt: 'Este é um ensinamento bíblico importante.',
      cv: 'Es é un ensinamentu bíbliku importante.'
    }
  },
  {
    id: 'entry-1021',
    word: 'bispo',
    translation: {
      pt: 'bispo',
      cv: 'bispo'
    },
    example: {
      pt: 'O bispo visita as congregações regularmente.',
      cv: 'Bispo ta vizita kongregasons regularmente.'
    }
  },
  {
    id: 'entry-1022',
    word: 'bom pastor',
    translation: {
      pt: 'bom pastor',
      cv: 'bon pastor'
    },
    example: {
      pt: 'Jesus se descreveu como o bom pastor.',
      cv: 'Jezus diskuze si mesmu kuza di bon pastor.'
    }
  },
  {
    id: 'entry-1023',
    word: 'bondadi',
    translation: {
      pt: 'bondade',
      cv: 'bondadi'
    },
    example: {
      pt: 'A bondade é um fruto do espírito santo.',
      cv: 'Bondadi é un frutu di spirito santu.'
    }
  },
  {
    id: 'entry-1024',
    word: 'bonu',
    translation: {
      pt: 'bom',
      cv: 'bonu'
    },
    example: {
      pt: 'Ele é um bom exemplo a ser seguido.',
      cv: 'E é un bonu exemplu pa ser sigidu.'
    }
  },
  {
    id: 'entry-1025',
    word: 'caminhu',
    translation: {
      pt: 'caminho',
      cv: 'caminhu'
    },
    example: {
      pt: 'Jesus é o caminho, a verdade e a vida.',
      cv: 'Jezus é caminhu, verdadi i vida.'
    }
  },
  {
    id: 'entry-1026',
    word: 'caminhu di vida',
    translation: {
      pt: 'caminho da vida',
      cv: 'caminhu di vida'
    },
    example: {
      pt: 'A Bíblia nos guia no caminho da vida.',
      cv: 'Bíblia ta guia-nu na caminhu di vida.'
    }
  },
  {
    id: 'entry-1027',
    word: 'caminhu streitu',
    translation: {
      pt: 'caminho estreito',
      cv: 'caminhu streitu'
    },
    example: {
      pt: 'O caminho para a vida é estreito, mas vale a pena.',
      cv: 'Caminhu pa vida é streitu, ma vale pena.'
    }
  },
  {
    id: 'entry-1028',
    word: 'campu',
    translation: {
      pt: 'campo',
      cv: 'campu'
    },
    example: {
      pt: 'O campo está pronto para a colheita.',
      cv: 'Campu sta prontu pa koltura.'
    }
  },
  {
    id: 'entry-1029',
    word: 'cana di mel',
    translation: {
      pt: 'cana de mel',
      cv: 'kana di mel'
    },
    example: {
      pt: 'As palavras doces são como favo de mel.',
      cv: 'Palavra doce é manera kana di mel.'
    }
  },
  {
    id: 'entry-1030',
    word: 'caminhu di fogo',
    translation: {
      pt: 'caminho de fogo',
      cv: 'caminhu di fogo'
    },
    example: {
      pt: 'Deus guiou o povo com uma coluna de fogo.',
      cv: 'Deus guia povo ku un koluna di fogo.'
    }
  },
  {
    id: 'entry-1031',
    word: 'caminhu di salvaçon',
    translation: {
      pt: 'caminho de salvação',
      cv: 'caminhu di salvaçon'
    },
    example: {
      pt: 'Jesus é o único caminho de salvação.',
      cv: 'Jezus é úniku caminhu di salvaçon.'
    }
  },
  {
    id: 'entry-1032',
    word: 'caminhu largu',
    translation: {
      pt: 'caminho largo',
      cv: 'caminhu largu'
    },
    example: {
      pt: 'O caminho largo leva à destruição.',
      cv: 'Caminhu largu ta leba pa destruison.'
    }
  },
  {
    id: 'entry-1033',
    word: 'caminhu di santidadi',
    translation: {
      pt: 'caminho de santidade',
      cv: 'caminhu di santidadi'
    },
    example: {
      pt: 'Devemos seguir o caminho da santidade.',
      cv: 'Nu meste sigi caminhu di santidadi.'
    }
  },
  {
    id: 'entry-1034',
    word: 'caminhu di verdade',
    translation: {
      pt: 'caminho da verdade',
      cv: 'caminhu di verdadi'
    },
    example: {
      pt: 'A Bíblia nos ensina o caminho da verdade.',
      cv: 'Bíblia ta ensina-nu caminhu di verdadi.'
    }
  },
  {
    id: 'entry-1035',
    word: 'caminhu di justisa',
    translation: {
      pt: 'caminho de justiça',
      cv: 'caminhu di justisa'
    },
    example: {
      pt: 'O Senhor conhece o caminho da justiça.',
      cv: 'Senhor konxe caminhu di justisa.'
    }
  },
  {
    id: 'entry-1036',
    word: 'caminhu di paz',
    translation: {
      pt: 'caminho de paz',
      cv: 'caminhu di pas'
    },
    example: {
      pt: 'Os passos do justo são dirigidos pelo Senhor no caminho de paz.',
      cv: 'Passu di justu é dirijidu pa Senhor na caminhu di pas.'
    }
  },
  {
    id: 'entry-1037',
    word: 'caminhu di sabedoria',
    translation: {
      pt: 'caminho da sabedoria',
      cv: 'caminhu di sabiduria'
    },
    example: {
      pt: 'A sabedoria clama nas ruas, no caminho da sabedoria há vida.',
      cv: 'Sabiduria ta txoma na rua, na caminhu di sabiduria tem vida.'
    }
  },
  {
    id: 'entry-1038',
    word: 'caminhu di luz',
    translation: {
      pt: 'caminho de luz',
      cv: 'caminhu di luz'
    },
    example: {
      pt: 'Andemos no caminho da luz, como filhos da luz.',
      cv: 'Nu meste anda na caminhu di luz, manera fidju di luz.'
    }
  },
  {
    id: 'entry-1039',
    word: 'caminhu di amor',
    translation: {
      pt: 'caminho de amor',
      cv: 'caminhu di amor'
    },
    example: {
      pt: 'O amor é o caminho mais excelente que podemos seguir.',
      cv: 'Amor é caminhu mas eselenti ki nu pode sigi.'
    }
  },
  {
    id: 'entry-1040',
    word: 'caminhu di fé',
    translation: {
      pt: 'caminho de fé',
      cv: 'caminhu di fé'
    },
    example: {
      pt: 'Andamos por fé, e não pelo que vemos.',
      cv: 'Nu ta anda pa fé, ka pa kel ki nu ta odja.'
    }
  },
  {
    id: 'entry-1041',
    word: 'caminhu di orason',
    translation: {
      pt: 'caminho de oração',
      cv: 'caminhu di orason'
    },
    example: {
      pt: 'A oração é o caminho que nos liga a Deus.',
      cv: 'Orason é caminhu ki ta liga-nu ku Deus.'
    }
  },
  {
    id: 'entry-1042',
    word: 'caminhu di arrependimentu',
    translation: {
      pt: 'caminho de arrependimento',
      cv: 'caminhu di arrependimentu'
    },
    example: {
      pt: 'O arrependimento é o primeiro passo no caminho da salvação.',
      cv: 'Arrependimentu é primeru pasu na caminhu di salvaçon.'
    }
  },
  {
    id: 'entry-1043',
    word: 'caminhu di perdon',
    translation: {
      pt: 'caminho do perdão',
      cv: 'caminhu di perdon'
    },
    example: {
      pt: 'Andai no caminho do perdão, assim como Deus vos perdoou.',
      cv: 'Nu meste anda na caminhu di perdon, manera Deus perdoa-nu.'
    }
  },
  {
    id: 'entry-1044',
    word: 'caminhu di humildadi',
    translation: {
      pt: 'caminho da humildade',
      cv: 'caminhu di umildadi'
    },
    example: {
      pt: 'Deus dá graça aos humildes, e o caminho da humildade conduz à honra.',
      cv: 'Deus da graça pa umildi, i caminhu di umildadi ta leba pa onra.'
    }
  },
  {
    id: 'entry-1045',
    word: 'caminhu di obediensia',
    translation: {
      pt: 'caminho da obediência',
      cv: 'caminhu di obediensia'
    },
    example: {
      pt: 'A obediência é melhor do que o sacrifício, siga o caminho da obediência.',
      cv: 'Obediensia é mas bon ki sakrifisiu, sigi caminhu di obediensia.'
    }
  },
  {
    id: 'entry-1046',
    word: 'caminhu di fidelidadi',
    translation: {
      pt: 'caminho da fidelidade',
      cv: 'caminhu di fidelidadi'
    },
    example: {
      pt: 'Seja fiel até a morte, e eu te darei a coroa da vida, diz o Senhor.',
      cv: 'Seja fiel te mórti, i N ta da-bo koroa di vida, ta fla Senhor.'
    }
  },
  {
    id: 'entry-1047',
    word: 'caminhu di paciencia',
    translation: {
      pt: 'caminho da paciência',
      cv: 'caminhu di paciensia'
    },
    example: {
      pt: 'A paciência é uma virtude que se desenvolve no caminho da fé.',
      cv: 'Paciensia é un virtudi ki ta disinvolve na caminhu di fé.'
    }
  },
  {
    id: 'entry-1048',
    word: 'caminhu di esperansa',
    translation: {
      pt: 'caminho da esperança',
      cv: 'caminhu di esperansa'
    },
    example: {
      pt: 'A esperança não desaponta, porque o amor de Deus está derramado em nossos corações.',
      cv: 'Esperansa ka ta disilude, pamodi amor di Deus sta derrama na nos korason.'
    }
  },
  {
    id: 'entry-1049',
    word: 'caminhu di alegria',
    translation: {
      pt: 'caminho da alegria',
      cv: 'caminhu di alegria'
    },
    example: {
      pt: 'Na presença do Senhor há plenitude de alegria.',
      cv: 'Na prezensa di Senhor tem alegria completa.'
    }
  },
  {
    id: 'entry-1050',
    word: 'caminhu di paz interior',
    translation: {
      pt: 'caminho da paz interior',
      cv: 'caminhu di pas interior'
    },
    example: {
      pt: 'Deixe que a paz de Cristo domine em seu coração.',
      cv: 'Deixa pas di Kristu domina bo korason.'
    }
  },
  {
    id: 'entry-1051',
    word: 'caminhu di confiansa',
    translation: {
      pt: 'caminho da confiança',
      cv: 'caminhu di konfiansa'
    },
    example: {
      pt: 'Confie no Senhor de todo o seu coração e não se apoie no seu próprio entendimento.',
      cv: 'Konfia na Senhor ku bo tudu korason, ka ta apoia na bo propriu kompreenson.'
    }
  },
  {
    id: 'entry-1052',
    word: 'caminhu di gratidon',
    translation: {
      pt: 'caminho da gratidão',
      cv: 'caminhu di gratidon'
    },
    example: {
      pt: 'Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.',
      cv: 'Na tudu da graças, pamodi es é vontadi di Deus na Kristu Jezus pa nos.'
    }
  },
  {
    id: 'entry-1053',
    word: 'caminhu di bençon',
    translation: {
      pt: 'caminho da bênção',
      cv: 'caminhu di benson'
    },
    example: {
      pt: 'O Senhor te abençoe e te guarde, o Senhor faça resplandecer o seu rosto sobre ti.',
      cv: 'Senhor abençoa bo i proteje-bo, Senhor faze se roxu brilha riba di bo.'
    }
  },
  {
    id: 'entry-1054',
    word: 'caminhu di vitoria',
    translation: {
      pt: 'caminho da vitória',
      cv: 'caminhu di vitoria'
    },
    example: {
      pt: 'Graças a Deus que nos dá a vitória por meio de nosso Senhor Jesus Cristo.',
      cv: 'Grasas a Deus ki da-nu vitoria pa nosu Senhor Jezus Kristu.'
    }
  },
  {
    id: 'entry-1055',
    word: 'caminhu di eternidadi',
    translation: {
      pt: 'caminho da eternidade',
      cv: 'caminhu di eternidadi'
    },
    example: {
      pt: 'Deus pôs a eternidade no coração do homem, e este anseia pelo caminho da vida eterna.',
      cv: 'Deus ponhe eternidadi na korason di ómi, i el ta anseia pa caminhu di vida eterna.'
    }
  },
  {
    id: 'entry-1056',
    word: 'caminhu di sabi',
    translation: {
      pt: 'caminho do conhecimento',
      cv: 'caminhu di sabi'
    },
    example: {
      pt: 'O temor do Senhor é o princípio do conhecimento.',
      cv: 'Medu di Senhor é prinsípiu di sabi.'
    }
  },
  {
    id: 'entry-1057',
    word: 'caminhu di korason limpu',
    translation: {
      pt: 'caminho do coração puro',
      cv: 'caminhu di korason limpu'
    },
    example: {
      pt: 'Bem-aventurados os puros de coração, porque eles verão a Deus.',
      cv: 'Benditu é kes di korason limpu, pamodi es ta oja Deus.'
    }
  },
  {
    id: 'entry-1058',
    word: 'caminhu di konsolason',
    translation: {
      pt: 'caminho do consolo',
      cv: 'caminhu di konsolason'
    },
    example: {
      pt: 'Bendito seja o Deus de toda consolação, que nos consola em toda a nossa tribulação.',
      cv: 'Benditu seia Deus di tudu konsolu, ki ta konsola-nu na nos tudu aflison.'
    }
  },
  {
    id: 'entry-1059',
    word: 'caminhu di koragem',
    translation: {
      pt: 'caminho da coragem',
      cv: 'caminhu di koragem'
    },
    example: {
      pt: 'Sê forte e corajoso, não temas, porque o Senhor teu Deus é contigo por onde quer que andares.',
      cv: 'Se forti i korajozu, ka ten medu, pamodi Senhor bo Deus ta ku bo na tudu lugar ki bo ba.'
    }
  },
  {
    id: 'entry-1060',
    word: 'caminhu di unson',
    translation: {
      pt: 'caminho da unidade',
      cv: 'caminhu di unson'
    },
    example: {
      pt: 'Rogo-vos, irmãos, pelo nome de nosso Senhor Jesus Cristo, que faleis todos a mesma coisa.',
      cv: 'N ta roga-nu, irmon, pa nomi di nos Senhor Jezus Kristu, ki tudu ki nhos fala seia mesmu koisa.'
    }
  },
  {
    id: 'entry-1061',
    word: 'caminhu di sabura',
    translation: {
      pt: 'caminho da paciência',
      cv: 'caminhu di sabura'
    },
    example: {
      pt: 'A paciência é a chave que resolve todas as dificuldades.',
      cv: 'Sabura é xavi ki ta resolve tudu difikuldadi.'
    }
  },
  {
    id: 'entry-1062',
    word: 'caminhu di fiansa',
    translation: {
      pt: 'caminho da confiança',
      cv: 'caminhu di fiansa'
    },
    example: {
      pt: 'Entrega o teu caminho ao Senhor, confia nele, e o mais ele fará.',
      cv: 'Entrega bo caminhu na man di Senhor, fia na el, i el ta faze o resto.'
    }
  },
  {
    id: 'entry-1063',
    word: 'caminhu di sabixonsa',
    translation: {
      pt: 'caminho da sabedoria',
      cv: 'caminhu di sabixonsa'
    },
    example: {
      pt: 'A sabedoria é a coisa principal; adquire pois a sabedoria.',
      cv: 'Sabixonsa é kuzina prinsipal; ta kumpra enton sabixonsa.'
    }
  },
  {
    id: 'entry-1064',
    word: 'caminhu di amor di Deus',
    translation: {
      pt: 'caminho do amor de Deus',
      cv: 'caminhu di amor di Deus'
    },
    example: {
      pt: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.',
      cv: 'Pamodi Deus ama mundu tantu ki da se Úniku Fidju.'
    }
  },
  {
    id: 'entry-1065',
    word: 'caminhu di perdu',
    translation: {
      pt: 'caminho da salvação',
      cv: 'caminhu di perdu'
    },
    example: {
      pt: 'Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.',
      cv: 'Kre na Senhor Jezus Kristu i bo ta salva, bo i bo kaza.'
    }
  },
  {
    id: 'entry-1066',
    word: 'caminhu di bençon divinu',
    translation: {
      pt: 'caminho da bênção divina',
      cv: 'caminhu di benson divina'
    },
    example: {
      pt: 'O Senhor te abençoe e te guarde; o Senhor faça resplandecer o rosto sobre ti.',
      cv: 'Senhor abençoa bo i proteje-bo; Senhor faze se roxu brilha riba di bo.'
    }
  },
  {
    id: 'entry-1067',
    word: 'caminhu di santidadi',
    translation: {
      pt: 'caminho da santidade',
      cv: 'caminhu di santidadi'
    },
    example: {
      pt: 'Segui a paz com todos, e a santificação, sem a qual ninguém verá o Senhor.',
      cv: 'Sigi pas ku tudu genti, i santidadi, sin ki ningen ka ta oja Senhor.'
    }
  },
  {
    id: 'entry-1068',
    word: 'caminhu di orason i jejum',
    translation: {
      pt: 'caminho da oração e jejum',
      cv: 'caminhu di orason i jejum'
    },
    example: {
      pt: 'Esta casta não sai senão por meio de oração e jejum.',
      cv: 'Es raça ka sai si ka é pa orason i jejum.'
    }
  },
  {
    id: 'entry-1069',
    word: 'caminhu di humildadi',
    translation: {
      pt: 'caminho da humildade',
      cv: 'caminhu di umildadi'
    },
    example: {
      pt: 'Deus resiste aos soberbos, mas dá graça aos humildes.',
      cv: 'Deus ta kontra kes ki é orgulhozu, ma da graça pa umildi.'
    }
  },
  {
    id: 'entry-1070',
    word: 'caminhu di perdao',
    translation: {
      pt: 'caminho do perdão',
      cv: 'caminhu di perdon'
    },
    example: {
      pt: 'Perdoa-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores.',
      cv: 'Perdona-nos nos divida, manera nos ta perdoa kes ki deve-nos.'
    }
  },
  {
    id: 'entry-1071',
    word: 'caminhu di fidelidadi',
    translation: {
      pt: 'caminho da fidelidade',
      cv: 'caminhu di fidelidadi'
    },
    example: {
      pt: 'Sê fiel até à morte, e dar-te-ei a coroa da vida.',
      cv: 'Se fiel te mórti, i N ta da-bo koroa di vida.'
    }
  },
  {
    id: 'entry-1072',
    word: 'caminhu di amor ao proksimu',
    translation: {
      pt: 'caminho do amor ao próximo',
      cv: 'caminhu di amor pa proksimu'
    },
    example: {
      pt: 'Amarás o teu próximo como a ti mesmo.',
      cv: 'Ama bo proksimu manera bo mesmu.'
    }
  },
  {
    id: 'entry-1073',
    word: 'caminhu di paciencia',
    translation: {
      pt: 'caminho da paciência',
      cv: 'caminhu di paciensia'
    },
    example: {
      pt: 'A paciência é uma virtude que se desenvolve com o tempo.',
      cv: 'Paciensia é un virtudi ki ta disinvolve ku tempu.'
    }
  },
  {
    id: 'entry-1074',
    word: 'caminhu di esperansa',
    translation: {
      pt: 'caminho da esperança',
      cv: 'caminhu di esperansa'
    },
    example: {
      pt: 'A esperança não traz confusão, porque o amor de Deus está derramado em nossos corações.',
      cv: 'Esperansa ka ta traze konfuzon, pamodi amor di Deus sta derrama na nos korason.'
    }
  },
  {
    id: 'entry-1075',
    word: 'caminhu di alegria no Senhor',
    translation: {
      pt: 'caminho da alegria no Senhor',
      cv: 'caminhu di alegria na Senhor'
    },
    example: {
      pt: 'Alegrai-vos sempre no Senhor; outra vez digo, alegrai-vos.',
      cv: 'Fika kontenti sempri na Senhor; ta fla-odja, fika kontenti.'
    }
  },
  {
    id: 'entry-1076',
    word: 'caminhu di fogo di Deus',
    translation: {
      pt: 'caminho do fogo de Deus',
      cv: 'caminhu di fogo di Deus'
    },
    example: {
      pt: 'O nosso Deus é fogo consumidor.',
      cv: 'Nosu Deus é fogo ta konsumi tudu.'
    }
  },
  {
    id: 'entry-1077',
    word: 'caminhu di gloria di Deus',
    translation: {
      pt: 'caminho da glória de Deus',
      cv: 'caminhu di gloria di Deus'
    },
    example: {
      pt: 'A glória do Senhor se manifestou sobre ti.',
      cv: 'Gloria di Senhor se manifesta riba di bo.'
    }
  },
  {
    id: 'entry-1078',
    word: 'caminhu di graca di Deus',
    translation: {
      pt: 'caminho da graça de Deus',
      cv: 'caminhu di graca di Deus'
    },
    example: {
      pt: 'A graça do Senhor Jesus Cristo seja com o vosso espírito.',
      cv: 'Graca di Senhor Jezus Kristu seia ku nhos spirito.'
    }
  },
  {
    id: 'entry-1079',
    word: 'caminhu di amor fraternal',
    translation: {
      pt: 'caminho do amor fraternal',
      cv: 'caminhu di amor fraternal'
    },
    example: {
      pt: 'Amai-vos uns aos outros com amor fraternal.',
      cv: 'Ama-nu un otru ku amor fraternal.'
    }
  },
  {
    id: 'entry-1080',
    word: 'caminhu di paz com todos',
    translation: {
      pt: 'caminho de paz com todos',
      cv: 'caminhu di pas ku tudu genti'
    },
    example: {
      pt: 'Se for possível, quanto depender de vós, tende paz com todos os homens.',
      cv: 'Si for posivel, dependendu di nhos, ten pas ku tudu genti.'
    }
  },
  {
    id: 'entry-1081',
    word: 'caminhu di santificason',
    translation: {
      pt: 'caminho da santificação',
      cv: 'caminhu di santifikason'
    },
    example: {
      pt: 'Esta é a vontade de Deus: a vossa santificação.',
      cv: 'Es é vontadi di Deus: nhos santifikason.'
    }
  },
  {
    id: 'entry-1082',
    word: 'caminhu di palavra di Deus',
    translation: {
      pt: 'caminho da palavra de Deus',
      cv: 'caminhu di palavra di Deus'
    },
    example: {
      pt: 'A palavra de Deus é viva e eficaz, e mais penetrante do que qualquer espada de dois gumes.',
      cv: 'Palavra di Deus é bibu i eficaz, i ta penetra mas ki tudu espada di dudus kurtelu.'
    }
  },
  {
    id: 'entry-1083',
    word: 'caminhu di fe em Deus',
    translation: {
      pt: 'caminho de fé em Deus',
      cv: 'caminhu di fe na Deus'
    },
    example: {
      pt: 'Sem fé é impossível agradar a Deus.',
      cv: 'Sem fe é imposivel agrada Deus.'
    }
  },
  {
    id: 'entry-1084',
    word: 'caminhu di obediencia a Deus',
    translation: {
      pt: 'caminho da obediência a Deus',
      cv: 'caminhu di obediensia na Deus'
    },
    example: {
      pt: 'Melhor é obedecer do que sacrificar.',
      cv: 'Mas bonitu é obedece ki oferese sakrifisiu.'
    }
  },
  {
    id: 'entry-1085',
    word: 'caminhu di adorason verdadeira',
    translation: {
      pt: 'caminho da adoração verdadeira',
      cv: 'caminhu di adorason verdadi'
    },
    example: {
      pt: 'Deus é Espírito, e é necessário que os que o adoram o adorem em espírito e em verdade.',
      cv: 'Deus é Spirito, i é nesesariu kes ki ta adora el ta adora el na espiritu i na verdadi.'
    }
  },
  {
    id: 'entry-1086',
    word: 'caminhu di servico a Deus',
    translation: {
      pt: 'caminho do serviço a Deus',
      cv: 'caminhu di servisu na Deus'
    },
    example: {
      pt: 'Servi uns aos outros, cada um conforme o dom que recebeu.',
      cv: 'Sirbi-nu un otru, kadhunu segundu don ki N da-nu.'
    }
  },
  {
    id: 'entry-1087',
    word: 'caminhu di testemunho cristao',
    translation: {
      pt: 'caminho do testemunho cristão',
      cv: 'caminhu di testemunhu kriston'
    },
    example: {
      pt: 'Sereis minhas testemunhas em Jerusalém, em toda a Judeia e Samaria, e até aos confins da terra.',
      cv: 'Nhos ta ser minhas testemunha na Jerusalém, na Judeia tudu, i Samaria, i te na fim di mundo.'
    }
  },
  {
    id: 'entry-1088',
    word: 'caminhu di evangelizason',
    translation: {
      pt: 'caminho da evangelização',
      cv: 'caminhu di evangelizason'
    },
    example: {
      pt: 'Ide por todo o mundo, pregai o evangelho a toda criatura.',
      cv: 'Bai pa mundu tudu, prega evangelhu pa tudu kriatura.'
    }
  },
  {
    id: 'entry-1089',
    word: 'caminhu di discipulado',
    translation: {
      pt: 'caminho do discipulado',
      cv: 'caminhu di discipuladu'
    },
    example: {
      pt: 'Ide, portanto, fazei discípulos de todas as nações.',
      cv: 'Bai enton, faze discipulu di tudu nasons.'
    }
  },
  {
    id: 'entry-1090',
    word: 'caminhu di crescimento espiritual',
    translation: {
      pt: 'caminho do crescimento espiritual',
      cv: 'caminhu di kresimentu spiritual'
    },
    example: {
      pt: 'Crescei na graça e no conhecimento de nosso Senhor e Salvador Jesus Cristo.',
      cv: 'Krese na graca i na konhesimentu di nos Senhor i Salvador Jezus Kristu.'
    }
  },
  {
    id: 'entry-1091',
    word: 'caminhu di oracao continua',
    translation: {
      pt: 'caminho da oração contínua',
      cv: 'caminhu di orason kontinua'
    },
    example: {
      pt: 'Orai sem cessar.',
      cv: 'Ora sem para.'
    }
  },
  {
    id: 'entry-1092',
    word: 'caminhu di gratidao',
    translation: {
      pt: 'caminho da gratidão',
      cv: 'caminhu di gratidon'
    },
    example: {
      pt: 'Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.',
      cv: 'Na tudu da graças, pamodi es é vontadi di Deus na Kristu Jezus pa nhos.'
    }
  },
  {
    id: 'entry-1093',
    word: 'caminhu di humildade',
    translation: {
      pt: 'caminho da humildade',
      cv: 'caminhu di umildadi'
    },
    example: {
      pt: 'Deus resiste aos soberbos, mas dá graça aos humildes.',
      cv: 'Deus ta kontra kes ki é orgulhozu, ma da graça pa umildi.'
    }
  },
  {
    id: 'entry-1094',
    word: 'caminhu de perdao',
    translation: {
      pt: 'caminho do perdão',
      cv: 'caminhu di perdon'
    },
    example: {
      pt: 'Perdoa-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores.',
      cv: 'Perdona-nos nos divida, manera nos ta perdoa kes ki deve-nos.'
    }
  },
  {
    id: 'entry-1095',
    word: 'caminhu de fe',
    translation: {
      pt: 'caminho da fé',
      cv: 'caminhu di fe'
    },
    example: {
      pt: 'O justo viverá pela fé.',
      cv: 'Justu ta bibu pa fe.'
    }
  },
  {
    id: 'entry-339',
    word: 'uva séku',
    translation: {
      pt: 'uva-passa',
      cv: 'uva séku'
    }
  },
  {
    id: 'entry-340',
    word: 'ventu',
    translation: {
      pt: 'vento',
      cv: 'ventu'
    }
  },
  {
    id: 'entry-341',
    word: 'verdade',
    translation: {
      pt: 'verdade',
      cv: 'verdadi'
    }
  },
  {
    id: 'entry-342',
    word: 'verdi',
    translation: {
      pt: 'verde',
      cv: 'verdi'
    }
  },
  {
    id: 'entry-343',
    word: 'vermelhu',
    translation: {
      pt: 'vermelho',
      cv: 'vermelhu'
    }
  },
  {
    id: 'entry-344',
    word: 'vida',
    translation: {
      pt: 'vida',
      cv: 'vida'
    }
  },
  {
    id: 'entry-345',
    word: 'xéfi',
    translation: {
      pt: 'chefe',
      cv: 'xéfi'
    }
  },
  {
    id: 'entry-346',
    word: 'xikra',
    translation: {
      pt: 'açúcar',
      cv: 'xikra'
    }
  },
  {
    id: 'entry-347',
    word: 'abadu',
    translation: {
      pt: 'abade, padre',
      cv: 'abadu'
    }
  },
  {
    id: 'entry-348',
    word: 'abanu',
    translation: {
      pt: 'abanão, abano',
      cv: 'abanu'
    }
  },
  {
    id: 'entry-349',
    word: 'abitu',
    translation: {
      pt: 'hábito, costume',
      cv: 'abitu'
    }
  },
  {
    id: 'entry-350',
    word: 'abril',
    translation: {
      pt: 'abril',
      cv: 'abril'
    }
  },
  {
    id: 'entry-351',
    word: 'abusadu',
    translation: {
      pt: 'abusado, atrevido',
      cv: 'abusadu'
    }
  },
  {
    id: 'entry-352',
    word: 'abóka',
    translation: {
      pt: 'abóbora',
      cv: 'abóka'
    }
  },
  {
    id: 'entry-353',
    word: 'adika',
    translation: {
      pt: 'dedicar',
      cv: 'adika'
    }
  }
];
 // Fin du tableau dictionaryEntries
