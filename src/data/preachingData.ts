export interface Presentation {
  id: number;
  title: {
    pt: string;
    kea: string;
    fr?: string;
  };
  introduction: {
    pt: string;
    kea: string;
    fr?: string;
  };
  scripture: {
    reference: string;
    text: {
      pt: string;
      kea: string;
      fr?: string;
    };
  };
  question: {
    pt: string;
    kea: string;
    fr?: string;
  };
  explanation: {
    pt: string;
    kea: string;
    fr?: string;
  };
  conclusion: {
    pt: string;
    kea: string;
    fr?: string;
  };
  image: string;
}

export const preachingPresentations: Presentation[] = [
  {
    id: 1,
    title: {
      pt: 'O que é o Reino de Deus?',
      kea: 'Kuze ki é Reinu di Deus?',
      fr: 'Qu\'est-ce que le Royaume de Dieu?'
    },
    introduction: {
      pt: 'Muitas pessoas oram "Venha o teu Reino" mas não sabem exatamente o que é o Reino de Deus. Será que é apenas um sentimento no coração? Ou algo dentro de nós? A Bíblia nos dá uma resposta clara e emocionante sobre o que é esse Reino e o que ele fará pela humanidade.',
      kea: 'Txeu pésoa ta ora "Ben bu Réinu" mas es ka sabe ezatamenti kuze ki é Réinu di Deus. Será ki é só un sentimentu na kurason? O algu dentu di nós? Bíblia ta da-nu un resposta klaru y emosionanti sobri kuze ki é es Réinu y kuze ki el ta faze pa umanidadi.',
      fr: 'Beaucoup de personnes prient "Que ton royaume vienne" mais ne savent pas exactement ce qu\'est le Royaume de Dieu. Est-ce seulement un sentiment dans le cœur? Ou quelque chose en nous? La Bible nous donne une réponse claire et passionnante sur ce qu\'est ce Royaume et ce qu\'il fera pour l\'humanité.'
    },
    scripture: {
      reference: 'Daniel 2:44',
      text: {
        pt: 'No tempo desses reis, o Deus do céu estabelecerá um reino que nunca será destruído. Esse reino não passará a nenhum outro povo. Ele esmagará e dará fim a todos esses reinos, mas ele mesmo durará para sempre.',
        kea: 'Na tenpu di kes rei, Deus di séu ta stabelese un réinu ki nunka ta ser destruídu. Es réinu ka ta pasa pa ninhun otu povu. El ta esmaga y da fin pa tudu kes réinu, mas el mesmu ta dura pa senpri.',
        fr: 'Au temps de ces rois, le Dieu du ciel établira un royaume qui ne sera jamais détruit. Ce royaume ne passera pas à un autre peuple. Il écrasera et mettra fin à tous ces royaumes, mais lui-même durera éternellement.'
      }
    },
    question: {
      pt: 'O que este texto nos ensina sobre o Reino de Deus? Como ele é diferente dos governos humanos?',
      kea: 'Kuze ki es téstu ta ensina-nu sobri Reinu di Deus? Modi ki el é diferenti di governus umanu?',
      fr: 'Que nous apprend ce texte sur le Royaume de Dieu? En quoi est-il différent des gouvernements humains?'
    },
    explanation: {
      pt: 'O Reino de Deus é um governo real estabelecido por Deus no céu, com Jesus Cristo como Rei. Diferente dos governos humanos que falham, este Reino nunca será corrompido. Ele substituirá todos os governos humanos e trará paz verdadeira e segurança eternas para a Terra. Imagine um mundo sem guerras, sem crime, sem corrupção - isso é o que o Reino de Deus realizará!',
      kea: 'Reinu di Deus é un governu real stabelesidu pa Deus na séu, ku Jesus Kristu sima Rei. Diferenti di governus umanu ki ta falha, es Reinu nunka ta ser korompidu. El ta substitui tudu governus umanu y traze paz verdaderu y seguransa eternu pa Terra. Imajina un mundu sin gera, sin krimi, sin korupson - kel-li é kuze ki Reinu di Deus ta realiza!',
      fr: 'Le Royaume de Dieu est un gouvernement réel établi par Dieu dans les cieux, avec Jésus-Christ comme Roi. Contrairement aux gouvernements humains qui échouent, ce Royaume ne sera jamais corrompu. Il remplacera tous les gouvernements humains et apportera la vraie paix et la sécurité éternelles sur la Terre. Imaginez un monde sans guerres, sans crime, sans corruption - c\'est ce que le Royaume de Dieu accomplira!'
    },
    conclusion: {
      pt: 'Em breve, o Reino de Deus transformará a Terra num paraíso, onde todas as pessoas viverão em paz e harmonia. Não é maravilhoso saber que Deus tem um plano concreto para resolver todos os problemas da humanidade? Gostaria de aprender mais sobre como o Reino afetará sua vida?',
      kea: 'En brevi, Reinu di Deus ta transforma Terra nun paraízu, undi tudu pesoas ta vive na paz y armonia. Ka é maravilhozu sabe ma Deus ten un planu konkretu pa resolve tudu problema di umanidadi? Bu kre prendi más sobri modi ki Reinu ta afeta bu vida?',
      fr: 'Bientôt, le Royaume de Dieu transformera la Terre en un paradis, où toutes les personnes vivront en paix et en harmonie. N\'est-il pas merveilleux de savoir que Dieu a un plan concret pour résoudre tous les problèmes de l\'humanité? Aimeriez-vous en apprendre davantage sur la façon dont le Royaume affectera votre vie?'
    },
    image: '/images/preaching/o que é o reino de deus!.jpg'
  },
  {
    id: 2,
    title: {
      pt: 'Por que estudar a Bíblia?',
      kea: 'Pamodi studa Bíblia?'
    },
    introduction: {
      pt: 'A Bíblia é o livro mais traduzido e distribuído do mundo, disponível em mais de 3.000 idiomas. Mas por que tantas pessoas a valorizam? Ela não é apenas um livro antigo - contém a mensagem de Deus para a humanidade e conselhos práticos para nossa vida diária.',
      kea: 'Bíblia é livru más traduzidu y distribuídu di mundu, disponível na más di 3.000 língua. Mas pamodi tantu pesoa ta valoriza-l? El ka é só un livru antigu - el ten mensaji di Deus pa umanidadi y konselhu prátiku pa nos vida diáriu.'
    },
    scripture: {
      reference: '2 Timóteo 3:16,17',
      text: {
        pt: 'Toda a Escritura é inspirada por Deus e proveitosa para ensinar, para repreender, para endireitar as coisas, para disciplinar em justiça, para que o homem de Deus seja plenamente competente, completamente equipado para toda boa obra.',
        kea: 'Tudu Skritura é inspiradu pa Deus y proveitozu pa ensina, pa repreende, pa indireita kuzas, pa disiplina na justisa, pa ki omi di Deus seja plenamenti kompetenti, kompletamenti ekipadu pa tudu bon obra.'
      }
    },
    question: {
      pt: 'De que maneiras práticas a Bíblia pode nos ajudar no dia a dia?',
      kea: 'Di ki manera prátiku Bíblia pode djuda-nu na dia a dia?'
    },
    explanation: {
      pt: 'A Bíblia nos ajuda de quatro maneiras principais: (1) Ensinar - nos ajuda a conhecer a Deus e seu propósito; (2) Repreender - nos mostra quando estamos errados; (3) Endireitar - nos guia de volta ao caminho certo; (4) Disciplinar - nos treina para viver de modo que agrade a Deus. É como um manual de instruções para a vida!',
      kea: 'Bíblia ta djuda-nu di kuatu manera prinsipal: (1) Ensina - ta djuda-nu konxe Deus y si propózitu; (2) Repreende - ta mostra-nu kantu nu sta eradu; (3) Indireita - ta guia-nu volta pa kaminhu sertu; (4) Disiplina - ta treina-nu pa vive di modu ki ta agrada Deus. É sima un manual di instruson pa vida!'
    },
    conclusion: {
      pt: 'Estudar a Bíblia regularmente pode nos ajudar a encontrar respostas para as questões mais importantes da vida: De onde viemos? Por que estamos aqui? Para onde vamos? Que tal começar um estudo bíblico gratuito para descobrir essas respostas?',
      kea: 'Studa Bíblia regularmenti pode djuda-nu atxa resposta pa kestons más importanti di vida: Di undi nu ben? Pamodi nu sta li? Pa undi nu ta bai? Ki tal kumesa un studu bíbliku grátis pa diskubri es resposta?'
    },
    image: '/images/preaching/por que estudar a bilia.jpg'
  },
  {
    id: 3,
    title: {
      pt: 'Quem é Jesus Cristo?',
      kea: 'Kenha ki é Jesus Kristu?'
    },
    introduction: {
      pt: 'Jesus Cristo é a pessoa mais importante que já viveu na Terra. Mesmo pessoas que não são religiosas reconhecem sua influência na história. Mas quem ele realmente é? E por que conhecê-lo pode mudar nossa vida para sempre?',
      kea: 'Jesus Kristu é pesoa más importanti ki dja vive na Terra. Mesmu pesoa ki ka é relijozu ta rekonxe si influénsia na stória. Mas kenha ki el verdaderamenti é? Y pamodi konxe-l pode muda nos vida pa sempri?'
    },
    scripture: {
      reference: 'João 3:16',
      text: {
        pt: 'Porque Deus amou tanto o mundo, que deu o seu Filho unigênito, para que todo aquele que nele exercer fé não seja destruído, mas tenha vida eterna.',
        kea: 'Pamodi Deus ama mundu tantu, ki El da si Fidju unigénitu, pa ki tudu kel ki izerse fé n-El ka ser destruidu, mas ten vida eternu.'
      }
    },
    question: {
      pt: 'O que este texto nos ensina sobre Jesus e o amor de Deus?',
      kea: 'Kuze ki es téstu ta ensina-nu sobri Jesus y amor di Deus?'
    },
    explanation: {
      pt: 'Jesus é o Filho unigênito de Deus, o que significa que ele é único - nenhum outro foi criado diretamente por Deus. Ele foi enviado à Terra por amor à humanidade, não porque merecíamos, mas porque Deus nos ama. Jesus deu sua vida perfeita como resgate para que possamos ter vida eterna. Isso mostra o quanto Deus valoriza cada um de nós!',
      kea: 'Jesus é Fidju unigénitu di Deus, kuze ki ta signifika ma el é úniku - ninhun otu foi kriadu diretamenti pa Deus. El foi enviadu pa Terra pa amor a umanidadi, ka pamodi nu merese, mas pamodi Deus ta ama-nu. Jesus da si vida perfeitu sima resgati pa ki nu pode ten vida eternu. Kel-li ta mostra kuantu Deus ta valoriza kada un di nós!'
    },
    conclusion: {
      pt: 'Conhecer a Jesus e exercer fé nele é o caminho para a vida eterna. Mas isso não é apenas sobre o futuro - conhecer Jesus pode melhorar nossa vida agora, nos dando esperança, propósito e paz interior. Gostaria de aprender mais sobre os ensinamentos de Jesus?',
      kea: 'Konxe Jesus y izerse fé n-El é kaminhu pa vida eternu. Mas kel-li ka é só sobri futuru - konxe Jesus pode melhora nos vida agora, dándu-nu speransa, propózitu y paz interior. Bu kre prendi más sobri ensinamentu di Jesus?'
    },
    image: '/images/preaching/quem é jesus cristo.jpg'
  },
  {
    id: 4,
    title: {
      pt: 'Como ter uma família feliz',
      kea: 'Modi ki ten un família feliz'
    },
    introduction: {
      pt: 'A família é uma dádiva preciosa de Deus, mas manter a harmonia familiar pode ser desafiador. Conflitos, estresse e pressões externas podem afetar até as melhores famílias. Felizmente, a Bíblia contém princípios práticos e testados pelo tempo que podem ajudar as famílias a serem verdadeiramente felizes.',
      kea: 'Família é un dádiva presiozu di Deus, mas mantén armonia familiar pode ser dizafiador. Konflitu, stresi y preson esternu pode afeta té más bon família. Felizmenti, Bíblia ten prinsípius prátiku y testadu pa tenpu ki pode djuda família ser verdaderamenti feliz.'
    },
    scripture: {
      reference: 'Efésios 5:33',
      text: {
        pt: 'Cada um de vocês deve amar sua esposa como a si mesmo; por sua vez, a esposa deve ter profundo respeito pelo marido.',
        kea: 'Kada un di nhos debe ama nhos mudjer sima nhos mesmu; pa si vez, mudjer debe ten prufundu respetu pa maridu.'
      }
    },
    question: {
      pt: 'Que princípios bíblicos podem fortalecer a família? Como aplicá-los no dia a dia?',
      kea: 'Ki prinsípius bíbliku pode fortifika família? Modi ki aplika-es na dia a dia?'
    },
    explanation: {
      pt: 'O amor e o respeito mútuos são essenciais para a felicidade familiar. O marido deve amar sua esposa de forma abnegada, colocando as necessidades dela em primeiro lugar. A esposa deve respeitar profundamente seu marido, valorizando suas qualidades e decisões. Quando cada membro da família segue esses princípios bíblicos - incluindo pais que criam filhos com amor e disciplina equilibrados - o lar se torna um refúgio de paz e alegria.',
      kea: 'Amor y respetu mútuus é esensial pa felisidadi familiar. Maridu debe ama si mudjer di forma abnegadu, kolokandunesessidadi d-el na priméru logar. Mudjer debe respeta prufundamenti si maridu, valorizandu si kualidadi y dezizon. Kantu kada membru di família ta sigi es prinsípius bíbliku - inkluíndu pai ki ta kria fidju ku amor y disiplina ekilibradu - lar ta torna un refúju di paz y alegria.'
    },
    conclusion: {
      pt: 'Aplicar os princípios bíblicos pode ajudar sua família a ser mais feliz e unida. A Bíblia oferece conselhos práticos para maridos, esposas, pais e filhos. Gostaria de descobrir mais princípios bíblicos que podem fortalecer sua família?',
      kea: 'Aplika prinsípius bíbliku pode djuda bu família ser más feliz y unidu. Bíblia ta oferese konselhu prátiku pa maridu, mudjer, pai y fidju. Bu kre diskubri más prinsípius bíbliku ki pode fortifika bu família?'
    },
    image: '/images/preaching/como ter uma familia feliz.jpg'
  },
  {
    id: 5,
    title: {
      pt: 'O que acontece depois da morte?',
      kea: 'Kuze ki ta kontise dipos di morti?'
    },
    introduction: {
      pt: 'A morte é algo que afeta a todos nós e gera muitas perguntas. Será que os mortos estão sofrendo? Eles podem nos ver? Existe vida após a morte? Muitas religiões dão respostas diferentes, mas o que a Bíblia realmente ensina? A resposta pode surpreendê-lo e trazer grande conforto.',
      kea: 'Morti é algu ki ta afeta tudu nós y ta jera txeu pergunta. Será ki mortu sta sufréndu? Es pode odja-nu? Ezisti vida dipos di morti? Txeu relijon ta da resposta diferenti, mas kuze ki Bíblia verdaderamenti ta ensina? Resposta pode surprende-bu y traze grandi konfortu.'
    },
    scripture: {
      reference: 'João 5:28,29',
      text: {
        pt: 'Não se admirem disso, porque vem a hora em que todos os que estão nos túmulos memoriais ouvirão a sua voz e sairão.',
        kea: 'Ka admira di kel-li, pamodi ta ben ora ki tudu kes ki sta na túmulus memoriais ta obi si voz y ta sai.'
      }
    },
    question: {
      pt: 'Que esperança maravilhosa a Bíblia oferece para os mortos? O que isso significa para nós?',
      kea: 'Ki speransa maravilhozu Bíblia ta oferese pa mortu? Kuze ki kel-li ta signifika pa nós?'
    },
    explanation: {
      pt: 'A Bíblia ensina uma verdade reconfortante: os mortos não estão sofrendo, eles estão simplesmente dormindo na morte, inconscientes. Mas há mais! Deus promete ressuscitá-los para viverem numa Terra paradisíaca, livre de doenças, guerras e sofrimento. Esta não é uma promessa vaga - é uma garantia do Criador do universo. Imagine poder rever seus entes queridos que faleceram!',
      kea: 'Bíblia ta ensina un verdadi rekonfortanti: mortu ka sta sufréndu, es sta simplizementi durmindu na morti, inkonsienti. Mas ten más! Deus ta promete resusita-es pa vive nun Terra paradizíaku, libri di doenssa, gera y sufrimentu. Keli ka é un promesa vagu - é un garantia di Kriador di universu. Imajina pode odja tudu bu enti keridu ki falese!'
    },
    conclusion: {
      pt: 'Em breve, Deus cumprirá sua promessa de ressurreição, reunindo famílias e amigos separados pela morte. Esta esperança não é baseada em sentimentos, mas nas promessas confiáveis de Deus registradas na Bíblia. Gostaria de aprender mais sobre essa esperança maravilhosa?',
      kea: 'En brevi, Deus ta kumpri si promesa di resureison, reunindu família y amigu separadu pa morti. Es speransa ka é bazadu na sentimentu, mas na promesa konfiável di Deus rejistadu na Bíblia. Bu kre prendi más sobri es speransa maravilhozu?'
    },
    image: '/images/preaching/o que acontece depois da morte.jpg'
  },
  {
    id: 6,
    title: {
      pt: 'Como encontrar paz interior',
      kea: 'Modi ki atxa paz interior'
    },
    introduction: {
      pt: 'Num mundo cheio de ansiedade, estresse e incertezas, muitos procuram desesperadamente paz interior. Alguns tentam meditação, outros buscam terapias ou medicamentos. Mas existe uma fonte de paz que muitos desconhecem. A Bíblia mostra como encontrar uma paz profunda e duradoura que vai além das circunstâncias.',
      kea: 'Nun mundu xeiu di ansiedadi, stresi y inserteza, txeu ta buska desesperadamente paz interior. Alguns ta tenta meditason, otus ta buska terapia o medikamentu. Mas ezisti un fonti di paz ki txeu ka konxe. Bíblia ta mostra modi ki atxa un paz profundu y duradoru ki ta bai alen di sirkustánsia.'
    },
    scripture: {
      reference: 'Filipenses 4:6,7',
      text: {
        pt: 'Não se inquietem com nada, mas em tudo, por oração e súplica junto com ação de graças, façam seus pedidos conhecidos a Deus; e a paz de Deus, que está além de toda compreensão, guardará o seu coração e a sua mente.',
        kea: 'Ka preokupa ku nada, mas na tudu, pa orason y súplika djuntu ku ason di grasas, faze nhos pedidu konxedu pa Deus; y paz di Deus, ki sta alen di tudu kompreenson, ta guarda nhos kurason y nhos menti.'
      }
    },
    question: {
      pt: 'Como podemos encontrar verdadeira paz interior mesmo em meio aos problemas?',
      kea: 'Modi ki nu pode atxa verdaderu paz interior mesmu na meiu di problema?'
    },
    explanation: {
      pt: 'A verdadeira paz vem de três coisas: (1) Confiar em Deus - reconhecer que Ele se importa conosco e tem o poder de nos ajudar; (2) Oração sincera - compartilhar nossas preocupações com Deus, não apenas pedindo, mas também agradecendo; (3) Seguir a orientação bíblica - aplicar os princípios sábios da Palavra de Deus. Quando fazemos isso, experimentamos uma paz que vai "além de toda compreensão" - uma tranquilidade que não depende das circunstâncias externas.',
      kea: 'Verdaderu paz ta ben di tres kuza: (1) Konfia na Deus - rekonxe ma El ta importa ku nós y ten poder pa djuda-nu; (2) Orason sinseru - partilha nos preokupason ku Deus, ka só pidindu, mas tanbé agradesendu; (3) Sigi orientason bíbliku - aplika prinsípius sábiu di Palavra di Deus. Kantu nu ta faze kel-li, nu ta isperiénsia un paz ki ta bai "alen di tudu kompreenson" - un trankilidadi ki ka ta depende di sirkustánsia esternu.'
    },
    conclusion: {
      pt: 'Ao aplicar os conselhos bíblicos, podemos encontrar paz duradoura mesmo em tempos difíceis. Esta paz não significa ausência de problemas, mas sim ter tranquilidade interior apesar deles. Gostaria de aprender mais sobre como a Bíblia pode ajudá-lo a ter paz interior?',
      kea: 'Kantu nu ta aplika konselhu bíbliku, nu pode atxa paz duradoru mesmu na tempus difísil. Es paz ka ta signifika ausénsia di problema, mas sim ten trankilidadi interior apezar d-es. Bu kre prendi más sobri modi ki Bíblia pode djuda-bu ten paz interior?'
    },
    image: '/images/preaching/como encontrar paz interior.jpg'
  },
  {
    id: 7,
    title: {
      pt: 'Por que há tanto sofrimento?',
      kea: 'Pamodi ki ten tantu sufrimentu?'
    },
    introduction: {
      pt: 'Esta é uma das perguntas mais difíceis que a humanidade enfrenta. Vemos guerras, doenças, desastres naturais, injustiças. Se Deus existe e é amoroso, por que permite tanto sofrimento? Muitos perderam a fé por causa dessa questão. A Bíblia não apenas explica por que existe o sofrimento, mas também revela quando e como ele acabará.',
      kea: 'Keli é un di pergunta más difísil ki umanidadi ta infrenta. Nu ta odja gera, doenssa, dezastri natural, injustisa. Si Deus ezisti y é amorozu, pamodi ta permite tantu sufrimentu? Txeu perde fé pa kauza di es keston. Bíblia ka só ta splika pamodi sufrimentu ta izisti, mas tanbé ta revela kantu y modi ki el ta kaba.'
    },
    scripture: {
      reference: 'Apocalipse 21:4',
      text: {
        pt: 'E ele enxugará dos seus olhos toda lágrima, e não haverá mais morte, nem haverá mais tristeza, nem clamor, nem dor. As coisas anteriores já passaram.',
        kea: 'Y el ta enxuga di ses odju tudu lágrima, y ka ta ten más morti, nen tristeza, nen gritu, nen dor. Kuzas anterior dja pasa.'
      }
    },
    question: {
      pt: 'O que Deus promete fazer quanto ao sofrimento? Quando isso acontecerá?',
      kea: 'Kuze ki Deus ta promete faze ku sufrimentu? Kantu kel-li ta kontese?'
    },
    explanation: {
      pt: 'Deus não é o causador do sofrimento - ele resulta da rebelião humana contra Deus e da influência de Satanás. Mas Deus promete eliminar todo sofrimento e suas causas raiz. Através de seu Reino, ele: (1) Acabará com a morte - ninguém mais morrerá; (2) Eliminará a tristeza - não haverá mais motivos para chorar; (3) Removerá toda dor - física e emocional. Isso não é apenas um sonho - é uma promessa garantida de Deus!',
      kea: 'Deus ka é kauzador di sufrimentu - el ta rezulta di rebelion umanu kontra Deus y di influénsia di Satanás. Mas Deus ta promete elimina tudu sufrimentu y ses kauza raiz. Através di si Reinu, el: (1) Ta kaba ku morti - ninhun más ta morre; (2) Ta elimina tristeza - ka ta ten más motivu pa txora; (3) Ta remove tudu dor - físiku y emosional. Kel-li ka é só un sonhu - é un promesa garantidu di Deus!'
    },
    conclusion: {
      pt: 'Podemos ter certeza de que Deus cumprirá sua promessa de acabar com todo sofrimento. Ele já estabeleceu um prazo e está agindo para resolver o problema do sofrimento de uma vez por todas. Gostaria de saber mais sobre o plano de Deus para acabar com o sofrimento?',
      kea: 'Nu pode ten serteza ma Deus ta kumpri si promesa di kaba ku tudu sufrimentu. El dja stabelese un prazu y sta aji pa resolve problema di sufrimentu di un vez pa tudu. Bu kre sabe más sobri planu di Deus pa kaba ku sufrimentu?'
    },
    image: '/images/preaching/por que hà tanto sofrimento.jpg'
  },
  {
    id: 8,
    title: {
      pt: 'Como se aproximar de Deus',
      kea: 'Modi ki aproxima di Deus'
    },
    introduction: {
      pt: 'Muitos desejam se aproximar de Deus mas não sabem como. Alguns acham que Deus está distante ou desinteressado. Outros pensam que precisam ser perfeitos primeiro. Mas a verdade é surpreendente: Deus deseja ter um relacionamento próximo com você, e a Bíblia nos mostra passos práticos para nos aproximarmos dele.',
      kea: 'Txeu ta dizeja aproxima di Deus mas ka sabe modi. Alguns ta atxa ma Deus sta distanti o dizinteresadu. Otus ta pensa ma es presis ser perfeitu primeru. Mas verdadi é surprendenti: Deus ta dizeja ten un relacionamentu prósimu ku bo, y Bíblia ta mostra-nu pasu prátiku pa aproxima d-El.'
    },
    scripture: {
      reference: 'Tiago 4:8',
      text: {
        pt: 'Aproximem-se de Deus, e ele se aproximará de vocês.',
        kea: 'Aproxima di Deus, y el ta aproxima di nhos.'
      }
    },
    question: {
      pt: 'Como podemos nos aproximar de Deus? O que Ele fará em resposta?',
      kea: 'Modi ki nu pode aproxima di Deus? Kuze ki El ta faze na resposta?'
    },
    explanation: {
      pt: 'Nos aproximamos de Deus através de quatro passos principais: (1) Aprender sobre Ele - estudando a Bíblia para conhecer sua personalidade e qualidades; (2) Oração sincera - conversando com Deus regularmente, não apenas pedindo, mas também agradecendo e expressando nossos sentimentos; (3) Aplicar seus princípios - vivendo de acordo com os padrões bíblicos; (4) Associar-se com outros que o amam - fazendo amizade com pessoas que também buscam a Deus. A promessa é maravilhosa: quando damos passos para nos aproximar de Deus, Ele se aproxima de nós!',
      kea: 'Nu ta aproxima di Deus através di kuatu pasu prinsipal: (1) Prende sobri El - studándu Bíblia pa konxe si personalidadi y kualidadi; (2) Orason sinseru - konversándu ku Deus regularmenti, ka só pidindu, mas tanbé agradesendu y ispresándu nos sentimentu; (3) Aplika si prinsípius - vivendu di akordu ku padron bíbliku; (4) Asosia-se ku otus ki ta ama-L - fazendu amizadi ku pesoa ki tanbé ta buska Deus. Promesa é maravilhozu: kantu nu ta da pasu pa aproxima di Deus, El ta aproxima di nós!'
    },
    conclusion: {
      pt: 'Deus quer que nos aproximemos dele e promete nos ajudar nesse processo. Ele não espera perfeição, mas sim esforço sincero. Quanto mais conhecemos a Deus, mais o amamos. Gostaria de começar uma jornada para conhecer melhor a Deus através de um estudo bíblico?',
      kea: 'Deus kre pa nu aproxima d-El y ta promete djuda-nu nes procesu. El ka ta spera perfeson, mas sim sforsu sinseru. Kuantu más nu ta konxe Deus, más nu ta ama-L. Bu kre kumesa un jornada pa konxe médjor Deus através di un studu bíbliku?'
    },
    image: '/images/preaching/como se aproximar de deus.jpg'
  },
  {
    id: 9,
    title: {
      pt: 'Como ter uma vida com propósito',
      kea: 'Modi ki ten un vida ku propózitu'
    },
    introduction: {
      pt: 'Muitas pessoas se sentem perdidas, sem direção ou propósito. Trabalham, comem, dormem, mas se perguntam: "É só isso? Qual é o sentido da vida?" Alguns buscam propósito em carreiras, relacionamentos ou conquistas materiais, mas ainda se sentem vazios. A Bíblia nos ajuda a encontrar um verdadeiro sentido para a vida que traz satisfação duradoura.',
      kea: 'Txeu pesoa ta sinti perdidu, sin direson o propózitu. Ta trabadja, ta kume, ta durmi, mas ta pergunta: "É só kel-li? Kal ki é sentidu di vida?" Alguns ta buska propózitu na karéra, relacionamentu o konkista material, mas inda ta sinti vazius. Bíblia ta djuda-nu atxa un verdaderu sentidu pa vida ki ta traze satisfason duradoru.'
    },
    scripture: {
      reference: 'Eclesiastes 12:13',
      text: {
        pt: 'Tema o verdadeiro Deus e guarde os seus mandamentos. Pois esse é todo o dever do homem.',
        kea: 'Teme verdaderu Deus y guarda si mandamentus. Es é tudu dever di omi.'
      }
    },
    question: {
      pt: 'Como podemos encontrar verdadeiro propósito na vida? O que isso envolve?',
      kea: 'Modi ki nu pode atxa verdaderu propózitu na vida? Kuze ki kel-li ta involvi?'
    },
    explanation: {
      pt: 'Encontramos verdadeiro propósito quando entendemos por que fomos criados. Deus nos criou com a capacidade de conhecê-lo e refletir suas qualidades. Nosso propósito principal é: (1) Conhecer a Deus - aprender sobre sua personalidade e propósitos; (2) Viver de acordo com seus padrões - aplicar princípios bíblicos que nos beneficiam; (3) Ajudar outros - compartilhar o que aprendemos. Quando vivemos assim, nossa vida tem significado real, não importa nossa situação ou circunstâncias.',
      kea: 'Nu ta atxa verdaderu propózitu kantu nu ta komprende pamodi nu foi kriadu. Deus kria-nu ku kapasidadi di konxe-L y refleti si kualidadi. Nos propózitu prinsipal é: (1) Konxe Deus - prende sobri si personalidadi y propózitus; (2) Vive di akordu ku si padrons - aplika prinsípius bíbliku ki ta benefisia-nu; (3) Djuda otus - partilha kuze ki nu prende. Kantu nu ta vive asim, nos vida ten signifikadu real, ka importa nos situason o sirkustánsia.'
    },
    conclusion: {
      pt: 'Viver de acordo com o propósito de Deus traz verdadeira felicidade e satisfação. Não é uma vida de restrições, mas de liberdade - liberdade de viver da melhor maneira possível. Gostaria de descobrir mais sobre o propósito que Deus tem para sua vida?',
      kea: 'Vive di akordu ku propózitu di Deus ta traze verdaderu felisidadi y satisfason. Ka é un vida di restrison, mas di liberdadi - liberdadi di vive di médjor manera posível. Bu kre diskubri más sobri propózitu ki Deus ten pa bu vida?'
    },
    image: '/images/preaching/como ter uma vida com proposito.jpg'
  },
  {
    id: 10,
    title: {
      pt: 'Como ter uma boa relação com Deus',
      kea: 'Modi ki ten un bon relason ku Deus'
    },
    introduction: {
      pt: 'Ter uma boa relação com Deus é o mais importante na vida, mais importante que qualquer outra relação. Mas como desenvolver um relacionamento com alguém que não podemos ver? É realmente possível ter uma amizade íntima com o Criador do universo? A Bíblia nos mostra que sim, e nos ensina como.',
      kea: 'Ten un bon relason ku Deus é más importanti na vida, más importanti ki kualker otu relason. Mas modi ki dizevolve un relacionamentu ku algen ki nu ka pode odja? É verdaderamenti posível ten un amizadi íntima ku Kriador di universu? Bíblia ta mostra-nu ma sim, y ta ensina-nu modi.'
    },
    scripture: {
      reference: 'Salmo 145:18',
      text: {
        pt: 'Jeová está perto de todos os que o invocam, de todos os que o invocam com sinceridade.',
        kea: 'Jeová sta pertu di tudu kes ki ta invoka-L, di tudu kes ki ta invoka-L ku sinseridadi.'
      }
    },
    question: {
      pt: 'Como podemos desenvolver uma boa relação com Deus? O que Ele requer de nós?',
      kea: 'Modi ki nu pode dizevolve un bon relason ku Deus? Kuze ki El ta rekere di nós?'
    },
    explanation: {
      pt: 'Desenvolvemos uma boa relação com Deus da mesma forma que com qualquer amigo: (1) Conhecendo-o - estudando a Bíblia regularmente para aprender sobre sua personalidade, gostos e valores; (2) Comunicando-nos - orando com sinceridade, compartilhando nossos pensamentos e sentimentos; (3) Passando tempo juntos - meditando em suas qualidades e obras; (4) Fazendo o que o agrada - aplicando seus princípios em nossa vida. Deus não exige perfeição, mas sinceridade. Ele promete estar perto de todos que o buscam de coração sincero.',
      kea: 'Nu ta dizevolve un bon relason ku Deus di mesmu forma ki ku kualker amigu: (1) Konxéndu-L - studándu Bíblia regularmenti pa prende sobri si personalidadi, gostu y valor; (2) Komunikándu-nu - orándu ku sinseridadi, partilhándu nos pensamentu y sentimentu; (3) Pasándu tenpu djuntu - meditándu na si kualidadi y obra; (4) Fazendu kuze ki ta agrada-L - aplikándu si prinsípius na nos vida. Deus ka ta iziji perfeson, mas sinseridadi. El ta promete sta pertu di tudu kes ki ta buska-L di kurason sinseru.'
    },
    conclusion: {
      pt: 'Quando nos esforçamos para conhecer a Deus, ele nos ajuda a desenvolver uma relação próxima com ele. Esta relação traz benefícios imensuráveis: paz interior, orientação sábia, esperança para o futuro e a certeza de que nunca estamos sozinhos. Gostaria de começar a construir uma amizade com Deus através do estudo da Bíblia?',
      kea: 'Kantu nu ta sforsa pa konxe Deus, el ta djuda-nu dizevolve un relason prósimu ku El. Es relason ta traze benefísiu imensurável: paz interior, orientason sábiu, speransa pa futuru y serteza ma nu nunka sta só. Bu kre kumesa konstrui un amizadi ku Deus através di studu di Bíblia?'
    },
    image: '/images/preaching/como ter uma boa relaçào com deus.jpg'
  }
];
