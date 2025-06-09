export interface Presentation {
  id: number;
  title: {
    pt: string;
    cv: string;
  };
  introduction: {
    pt: string;
    cv: string;
  };
  scripture: {
    reference: string;
    text: {
      pt: string;
      cv: string;
    };
  };
  question: {
    pt: string;
    cv: string;
  };
  explanation: {
    pt: string;
    cv: string;
  };
  conclusion: {
    pt: string;
    cv: string;
  };
  image: string;
}

export const preachingPresentations: Presentation[] = [
  {
    id: 1,
    title: {
      pt: 'O que é o Reino de Deus?',
      cv: 'Kuze ki é Reinu di Deus?'
    },
    introduction: {
      pt: 'Muitas pessoas oram "Venha o teu Reino" mas não sabem exatamente o que é o Reino de Deus. A Bíblia nos ajuda a entender o que é esse Reino e o que ele fará.',
      cv: 'Txeu pesoas ta ora "Ben bu Reinu" mas es ka sabe ezatamenti kuze ki é Reinu di Deus. Bíblia ta djuda-nu entendi kuze ki é es Reinu y kuze ki el ta faze.'
    },
    scripture: {
      reference: 'Daniel 2:44',
      text: {
        pt: 'No tempo desses reis, o Deus do céu estabelecerá um reino que nunca será destruído. Esse reino não passará a nenhum outro povo. Ele esmagará e dará fim a todos esses reinos, mas ele mesmo durará para sempre.',
        cv: 'Na tempu di kes rei, Deus di séu ta stabelese un reinu ki nunka ta ser destruidu. Es reinu ka ta pasa pa ninhun otu povu. El ta smaga y da fin pa tudu kes reinu, mas el mesmu ta dura pa sempri.'
      }
    },
    question: {
      pt: 'O que este texto nos ensina sobre o Reino de Deus?',
      cv: 'Kuze ki es téstu ta ensina-nu sobri Reinu di Deus?'
    },
    explanation: {
      pt: 'O Reino de Deus é um governo real estabelecido por Deus no céu. Ele substituirá todos os governos humanos e trará paz e segurança eternas para a Terra.',
      cv: 'Reinu di Deus é un governu real stabelesidu pa Deus na séu. El ta substitui tudu governus umanu y traze paz y seguransa eternu pa Terra.'
    },
    conclusion: {
      pt: 'Em breve, o Reino de Deus transformará a Terra num paraíso, onde todas as pessoas viverão em paz e harmonia.',
      cv: 'En brevi, Reinu di Deus ta transforma Terra nun paraízu, undi tudu pesoas ta vive na paz y armonia.'
    },
    image: '/images/preaching/o que é o reino de deus!.jpg'
  },
  {
    id: 2,
    title: {
      pt: 'Por que estudar a Bíblia?',
      cv: 'Pamodi studa Bíblia?'
    },
    introduction: {
      pt: 'A Bíblia é o livro mais traduzido e distribuído do mundo. Ela contém a mensagem de Deus para a humanidade.',
      cv: 'Bíblia é livru más traduzidu y distribuídu di mundu. El ten mensaji di Deus pa umanidadi.'
    },
    scripture: {
      reference: '2 Timóteo 3:16,17',
      text: {
        pt: 'Toda a Escritura é inspirada por Deus e proveitosa para ensinar, para repreender, para endireitar as coisas, para disciplinar em justiça, para que o homem de Deus seja plenamente competente, completamente equipado para toda boa obra.',
        cv: 'Tudu Skritura é inspiradu pa Deus y proveitozu pa ensina, pa repreende, pa indireita kuzas, pa disiplina na justisa, pa ki omi di Deus seja plenamenti kompetenti, kompletamenti ekipadu pa tudu bon obra.'
      }
    },
    question: {
      pt: 'De que maneiras a Bíblia pode nos ajudar?',
      cv: 'Di ki manera Bíblia pode djuda-nu?'
    },
    explanation: {
      pt: 'A Bíblia nos ajuda a conhecer a Deus, a entender seu propósito para nós e a viver uma vida que o agrade.',
      cv: 'Bíblia ta djuda-nu konxe Deus, entendi si propózitu pa nós y vive un vida ki ta agrada-L.'
    },
    conclusion: {
      pt: 'Estudar a Bíblia regularmente pode nos ajudar a encontrar respostas para as questões mais importantes da vida.',
      cv: 'Studa Bíblia regularmenti pode djuda-nu atxa resposta pa kestons más importanti di vida.'
    },
    image: '/images/preaching/por que estudar a bilia.jpg'
  },
  {
    id: 3,
    title: {
      pt: 'Quem é Jesus Cristo?',
      cv: 'Kenha ki é Jesus Kristu?'
    },
    introduction: {
      pt: 'Jesus Cristo é a pessoa mais importante que já viveu na Terra. Conhecê-lo pode mudar nossa vida para sempre.',
      cv: 'Jesus Kristu é pesoa más importanti ki dja vive na Terra. Konxe-l pode muda nos vida pa sempri.'
    },
    scripture: {
      reference: 'João 3:16',
      text: {
        pt: 'Porque Deus amou tanto o mundo, que deu o seu Filho unigênito, para que todo aquele que nele exercer fé não seja destruído, mas tenha vida eterna.',
        cv: 'Pamodi Deus ama mundu tantu, ki El da si Fidju unigénitu, pa ki tudu kel ki izerse fé n-El ka ser destruidu, mas ten vida eternu.'
      }
    },
    question: {
      pt: 'O que este texto nos ensina sobre Jesus?',
      cv: 'Kuze ki es téstu ta ensina-nu sobri Jesus?'
    },
    explanation: {
      pt: 'Jesus é o Filho de Deus, enviado à Terra por amor à humanidade. Ele deu sua vida para que possamos ter vida eterna.',
      cv: 'Jesus é Fidju di Deus, enviadu pa Terra pa amor a umanidadi. El da si vida pa ki nu pode ten vida eternu.'
    },
    conclusion: {
      pt: 'Conhecer a Jesus e exercer fé nele é o caminho para a vida eterna.',
      cv: 'Konxe Jesus y izerse fé n-El é kaminhu pa vida eternu.'
    },
    image: '/images/preaching/quem é jesus cristo.jpg'
  },
  {
    id: 4,
    title: {
      pt: 'Como ter uma família feliz',
      cv: 'Modi ki ten un família feliz'
    },
    introduction: {
      pt: 'A família é uma dádiva de Deus. A Bíblia contém princípios que podem ajudar as famílias a serem felizes.',
      cv: 'Família é un dádiva di Deus. Bíblia ten prinsípius ki pode djuda famílias ser feliz.'
    },
    scripture: {
      reference: 'Efésios 5:33',
      text: {
        pt: 'Cada um de vocês deve amar sua esposa como a si mesmo; por sua vez, a esposa deve ter profundo respeito pelo marido.',
        cv: 'Kada un di nhos debe ama nhos mudjer sima nhos mesmu; pa si vez, mudjer debe ten prufundu respetu pa maridu.'
      }
    },
    question: {
      pt: 'Que princípios bíblicos podem fortalecer a família?',
      cv: 'Ki prinsípius bíbliku pode fortifika família?'
    },
    explanation: {
      pt: 'O amor e o respeito mútuos são essenciais para a felicidade familiar. Quando cada membro da família segue os princípios bíblicos, o lar se torna um lugar de paz e alegria.',
      cv: 'Amor y respetu mútuus é esensial pa felisidadi familiar. Kantu kada membru di família ta sigi prinsípius bíbliku, lar ta torna un lugar di paz y alegria.'
    },
    conclusion: {
      pt: 'Aplicar os princípios bíblicos pode ajudar sua família a ser mais feliz.',
      cv: 'Aplika prinsípius bíbliku pode djuda bu família ser más feliz.'
    },
    image: '/images/preaching/como ter uma familia feliz.jpg'
  },
  {
    id: 5,
    title: {
      pt: 'O que acontece depois da morte?',
      cv: 'Kuze ki ta kontise dipos di morti?'
    },
    introduction: {
      pt: 'A morte é algo que afeta a todos nós. A Bíblia nos dá uma esperança reconfortante para os que morreram.',
      cv: 'Morti é algu ki ta afeta tudu nós. Bíblia ta da-nu un speransa rekonfortanti pa kes ki more.'
    },
    scripture: {
      reference: 'João 5:28,29',
      text: {
        pt: 'Não se admirem disso, porque vem a hora em que todos os que estão nos túmulos memoriais ouvirão a sua voz e sairão.',
        cv: 'Ka admira di kel-li, pamodi ta ben ora ki tudu kes ki sta na túmulus memoriais ta obi si voz y ta sai.'
      }
    },
    question: {
      pt: 'Que esperança a Bíblia oferece para os mortos?',
      cv: 'Ki speransa Bíblia ta oferese pa mortu?'
    },
    explanation: {
      pt: 'A Bíblia ensina que Deus ressuscitará os mortos para viverem numa Terra paradisíaca. Esta é uma promessa segura que nos dá conforto e esperança.',
      cv: 'Bíblia ta ensina ma Deus ta resusita mortu pa vive nun Terra paradizíaka. Keli é un promesa seguru ki ta da-nu konfortu y speransa.'
    },
    conclusion: {
      pt: 'Em breve, Deus cumprirá sua promessa de ressurreição, reunindo famílias e amigos.',
      cv: 'En brevi, Deus ta kumpri si promesa di resureison, reunindu famílias y amigus.'
    },
    image: '/images/preaching/o que acontece depois da morte.jpg'
  },
  {
    id: 6,
    title: {
      pt: 'Como encontrar paz interior',
      cv: 'Modi ki atxa paz interior'
    },
    introduction: {
      pt: 'Num mundo cheio de ansiedade e estresse, muitos procuram paz interior. A Bíblia mostra como encontrá-la.',
      cv: 'Nun mundu xeiu di ansiedadi y stresi, txeu ta buska paz interior. Bíblia ta mostra modi ki ta atxa-l.'
    },
    scripture: {
      reference: 'Filipenses 4:6,7',
      text: {
        pt: 'Não se inquietem com nada, mas em tudo, por oração e súplica junto com ação de graças, façam seus pedidos conhecidos a Deus; e a paz de Deus, que está além de toda compreensão, guardará o seu coração e a sua mente.',
        cv: 'Ka preokupa ku nada, mas na tudu, pa orason y súplika djuntu ku ason di grasas, faze nhos pedidu konxedu pa Deus; y paz di Deus, ki sta alen di tudu kompreenson, ta guarda nhos kurason y nhos menti.'
      }
    },
    question: {
      pt: 'Como podemos encontrar verdadeira paz interior?',
      cv: 'Modi ki nu pode atxa verdaderu paz interior?'
    },
    explanation: {
      pt: 'A verdadeira paz vem de confiar em Deus e seguir sua orientação. A oração e a meditação na Palavra de Deus nos ajudam a ter paz interior.',
      cv: 'Verdaderu paz ta ben di konfia na Deus y sigi si orientason. Orason y meditason na Palavra di Deus ta djuda-nu ten paz interior.'
    },
    conclusion: {
      pt: 'Ao aplicar os conselhos bíblicos, podemos encontrar paz duradoura mesmo em tempos difíceis.',
      cv: 'Kantu nu ta aplika konselhu bíbliku, nu pode atxa paz duradoru mesmu na tempus difísil.'
    },
    image: '/images/preaching/como encontrar paz interior.jpg'
  },
  {
    id: 7,
    title: {
      pt: 'Por que há tanto sofrimento?',
      cv: 'Pamodi ki ten tantu sufrimentu?'
    },
    introduction: {
      pt: 'O sofrimento afeta pessoas em todo o mundo. A Bíblia explica por que existe o sofrimento e como ele acabará.',
      cv: 'Sufrimentu ta afeta pesoas na tudu mundu. Bíblia ta splika pamodi ki sufrimentu ta izisti y modi ki el ta kaba.'
    },
    scripture: {
      reference: 'Apocalipse 21:4',
      text: {
        pt: 'E ele enxugará dos seus olhos toda lágrima, e não haverá mais morte, nem haverá mais tristeza, nem clamor, nem dor. As coisas anteriores já passaram.',
        cv: 'Y el ta enxuga di ses odju tudu lágrima, y ka ta ten más morti, nen tristeza, nen gritu, nen dor. Kuzas anterior dja pasa.'
      }
    },
    question: {
      pt: 'O que Deus promete fazer quanto ao sofrimento?',
      cv: 'Kuze ki Deus ta promete faze ku sufrimentu?'
    },
    explanation: {
      pt: 'Deus promete eliminar todo sofrimento e suas causas. Ele usará seu Reino para trazer paz e felicidade duradouras para a Terra.',
      cv: 'Deus ta promete elimina tudu sufrimentu y ses kausas. El ta uza si Reinu pa traze paz y felisidadi duradoru pa Terra.'
    },
    conclusion: {
      pt: 'Podemos ter certeza de que Deus cumprirá sua promessa de acabar com todo sofrimento.',
      cv: 'Nu pode ten serteza ma Deus ta kumpri si promesa di kaba ku tudu sufrimentu.'
    },
    image: '/images/preaching/por que hà tanto sofrimento.jpg'
  },
  {
    id: 8,
    title: {
      pt: 'Como se aproximar de Deus',
      cv: 'Modi ki aproxima di Deus'
    },
    introduction: {
      pt: 'Muitos desejam se aproximar de Deus mas não sabem como. A Bíblia nos mostra o caminho.',
      cv: 'Txeu ta dizeja aproxima di Deus mas ka sabe modi. Bíblia ta mostra-nu kaminhu.'
    },
    scripture: {
      reference: 'Tiago 4:8',
      text: {
        pt: 'Aproximem-se de Deus, e ele se aproximará de vocês.',
        cv: 'Aproxima di Deus, y el ta aproxima di nhos.'
      }
    },
    question: {
      pt: 'Como podemos nos aproximar de Deus?',
      cv: 'Modi ki nu pode aproxima di Deus?'
    },
    explanation: {
      pt: 'Nos aproximamos de Deus através da oração sincera, do estudo da Bíblia e da aplicação de seus princípios em nossa vida.',
      cv: 'Nu ta aproxima di Deus através di orason sinseru, studu di Bíblia y aplikason di si prinsípius na nos vida.'
    },
    conclusion: {
      pt: 'Deus quer que nos aproximemos dele e promete nos ajudar nesse processo.',
      cv: 'Deus kre pa nu aproxima d-El y ta promete djuda-nu nes procesu.'
    },
    image: '/images/preaching/como se aproximar de deus.jpg'
  },
  {
    id: 9,
    title: {
      pt: 'Como ter uma vida com propósito',
      cv: 'Modi ki ten un vida ku propózitu'
    },
    introduction: {
      pt: 'Muitas pessoas se perguntam qual é o propósito da vida. A Bíblia nos ajuda a encontrar um verdadeiro sentido para a vida.',
      cv: 'Txeu pesoas ta pergunta kal ki é propózitu di vida. Bíblia ta djuda-nu atxa un verdaderu sentidu pa vida.'
    },
    scripture: {
      reference: 'Eclesiastes 12:13',
      text: {
        pt: 'Tema o verdadeiro Deus e guarde os seus mandamentos. Pois esse é todo o dever do homem.',
        cv: 'Teme verdaderu Deus y guarda si mandamentus. Es é tudu dever di omi.'
      }
    },
    question: {
      pt: 'Como podemos encontrar verdadeiro propósito na vida?',
      cv: 'Modi ki nu pode atxa verdaderu propózitu na vida?'
    },
    explanation: {
      pt: 'Encontramos verdadeiro propósito quando conhecemos a Deus e vivemos de acordo com seus padrões. Isso traz satisfação duradoura.',
      cv: 'Nu ta atxa verdaderu propózitu kantu nu konxe Deus y vive di akordu ku si padrons. Kel-li ta traze satisfason duradoru.'
    },
    conclusion: {
      pt: 'Viver de acordo com o propósito de Deus traz verdadeira felicidade e satisfação.',
      cv: 'Vive di akordu ku propózitu di Deus ta traze verdaderu felisidadi y satisfason.'
    },
    image: '/images/preaching/como ter uma vida com proposito.jpg'
  },
  {
    id: 10,
    title: {
      pt: 'Como ter uma boa relação com Deus',
      cv: 'Modi ki ten un bon relason ku Deus'
    },
    introduction: {
      pt: 'Ter uma boa relação com Deus é o mais importante na vida. A Bíblia nos mostra como desenvolver essa relação.',
      cv: 'Ten un bon relason ku Deus é más importanti na vida. Bíblia ta mostra-nu modi ki dizevolve es relason.'
    },
    scripture: {
      reference: 'Salmo 145:18',
      text: {
        pt: 'Jeová está perto de todos os que o invocam, de todos os que o invocam com sinceridade.',
        cv: 'Jeová sta pertu di tudu kes ki ta invoka-L, di tudu kes ki ta invoka-L ku sinseridadi.'
      }
    },
    question: {
      pt: 'Como podemos desenvolver uma boa relação com Deus?',
      cv: 'Modi ki nu pode dizevolve un bon relason ku Deus?'
    },
    explanation: {
      pt: 'Desenvolvemos uma boa relação com Deus através da oração regular, do estudo da Bíblia e da aplicação do que aprendemos.',
      cv: 'Nu ta dizevolve un bon relason ku Deus através di orason regular, studu di Bíblia y aplikason di kuze ki nu ta prendi.'
    },
    conclusion: {
      pt: 'Quando nos esforçamos para conhecer a Deus, ele nos ajuda a desenvolver uma relação próxima com ele.',
      cv: 'Kantu nu ta sforsa pa konxe Deus, el ta djuda-nu dizevolve un relason prósimu ku El.'
    },
    image: '/images/preaching/como ter uma boa relaçào com deus.jpg'
  }
];