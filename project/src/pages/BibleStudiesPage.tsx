import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

interface BibleStudy {
  id: number;
  title: {
    pt: string;
    cv: string;
  };
  content: {
    pt: string[];
    cv: string[];
  };
  image: string;
}

const bibleStudies: BibleStudy[] = [
  {
    id: 1,
    title: {
      pt: "Lição 1 — Falar de Coisas que Interessam às Pessoas", 
      cv: "Lison 1 — Pâpia di kuzas ki ta interesa otus algen"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'O amor... não procura seus próprios interesses.' — 1 Cor. 13:4, 5",
        "O QUE JESUS FEZ",
        "Jesus está falando com uma mulher no poço.",
        "VÍDEO: Jesus fala com uma mulher em um poço",
        "1. Veja o VÍDEO, ou leia João 4:6-9. Depois pense e responda estas perguntas:",
        "• O que Jesus notou sobre a mulher antes de começar a falar com ela?",
        "• Jesus disse: 'Dê-me um pouco de água.' Por que esta foi uma boa maneira de começar uma conversa?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Se começarmos a falar com alguém sobre um assunto que lhe interessa, teremos mais chances de ter uma boa conversa com ela.",
        "IMITE JESUS",
        "3. Seja equilibrado. Não insista em começar falando sobre um assunto que você já preparou. Comece falando sobre algo que as pessoas estão pensando hoje. Pergunte a si mesmo:",
        "• 'O que as pessoas estão ouvindo nas notícias?'",
        "• 'Sobre o que meus vizinhos, colegas de trabalho ou escola estão falando?'",
        "4. Preste atenção. Pergunte a si mesmo:",
        "• 'O que a pessoa está fazendo? O que ela pode estar pensando agora?'",
        "• 'O que a roupa da pessoa, sua aparência ou sua casa me mostram sobre sua cultura ou crenças?'",
        "• 'Esta é uma boa hora para falar com a pessoa?'",
        "5. Ouça.",
        "• Não fale demais.",
        "• Incentive a pessoa a falar. Sempre que possível, faça perguntas."
      ],
      cv: [
        "Konsedju di Bíblia: 'Amor... ka ta djobe se própi interesi'. — 1 Kor. 13:4, 5",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta pâpia ku un mudjer na posu.",
        "VÍDIU: Jizus ta pâpia ku un mudjer na un posu",
        "1. Odja VÍDIU, ô lé Juan 4:6-9. Dipôs pensa i responde kes pergunta li:",
        "• Kuzê ki Jizus repara sobri kel mudjer antis di el kumesa ta pâpia ku el?",
        "• Jizus fla: 'Da-m un bokadinhu di agu.' Pamodi ki kel-li foi un bon manera di kumesa un konbérsu?",
        "Kuzê ki nu ta prende ku Jizus?",
        "2. Si nu kumesa ta pâpia ku un algen sobri un asuntu ki ta interesa-l, nu ta ten más xansi di ten un bon konbérsu ku el.",
        "IMITA JIZUS",
        "3. Ser ikilibradu. Ka bu insisti na kumesa ta pâpia ku un algen sobri un asuntu ki dja bu priparaba. Kumesa ta pâpia sobri algun asuntu ki pesoas sta ta pensa na el oji. Pergunta bu kabésa:",
        "• 'Kuzê ki pesoas sta obi na notísias?'",
        "• 'Sobri kuzê ki nhas vizinhu, kolégas di trabadju ô di skóla sta ta pâpia?'",
        "4. Presta atenson. Pergunta bu kabésa:",
        "• 'Kuzê ki kel algen sta ta faze? Kuzê ki el pode sta ta pensa na el gósi?'",
        "• 'Kuzê ki ropa di kel algen, se aparénsia ô se kaza ta mostra-m sobri se kultura ô kuzê ki el ta kridita na el?'",
        "• 'Kel-li é un bon óra pa N pâpia ku kel algen?'",
        "5. Obi.",
        "• Ka bu pâpia txeu.",
        "• Insentiva kel algen pa pâpia. Sénpri ki ta da, faze perguntas."
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021215/univ/art/1102021215_univ_lsr_xl.jpg"
  },
  {
    id: 2,
    title: {
      pt: "Lição 2 — Ouvir para Entender o Coração", 
      cv: "Lison 2 — Obi pa intende korason"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Seja rápido em ouvir, lento em falar.' — Tiago 1:19",
        "O QUE JESUS FEZ",
        "Jesus está ouvindo atentamente uma mulher que está falando com ele.",
        "1. Leia Lucas 7:36-50 e responda:",
        "• Como Jesus mostrou que estava realmente ouvindo a mulher?",
        "• O que Jesus aprendeu sobre os sentimentos dela ao ouvi-la?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Quando ouvimos com atenção, podemos entender melhor os sentimentos e as necessidades das pessoas.",
        "IMITE JESUS",
        "3. Mostre que você está ouvindo:",
        "• Mantenha contato visual",
        "• Acene com a cabeça",
        "• Faça perguntas para entender melhor",
        "4. Não interrompa",
        "5. Pense sobre o que a pessoa está dizendo"
      ],
      cv: [
        "Konsedju di Bíblia: 'Ser rápidu pa obi, dévagar pa pâpia.' — Tiagu 1:19",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta obi ku atenson un mudjer ki sta ta pâpia ku el.",
        "1. Lê Lukas 7:36-50 i responde:",
        "• Modi ki Jizus mostra ma el staba realmenti ta obi kel mudjer?",
        "• Kuzê ki Jizus prende sobri sintimentus di kel mudjer kantu el obi-l?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Kantu nu ta obi ku atenson, nu pode intende midjor sintimentus i nesesidadis di pesoas.",
        "IMITA JIZUS",
        "3. Mostra ma bu sta ta obi:",
        "• Manten kontatu visual",
        "• Bati kabésa",
        "• Faze perguntas pa intende midjor",
        "4. Ka bu interonpe",
        "5. Pensa sobri kuzê ki kel pesoa sta ta fla"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021219/univ/art/1102021219_univ_lsr_xl.jpg"
  },
  {
    id: 3,
    title: {
      pt: "Lição 3 — Fazer Boas Perguntas", 
      cv: "Lison 3 — Faze bons perguntas"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'A resposta, quando dada com suavidade, afasta a ira.' — Provérbios 15:1",
        "O QUE JESUS FEZ",
        "Jesus está fazendo perguntas a seus discípulos.",
        "1. Leia Mateus 16:13-17 e responda:",
        "• Que tipo de perguntas Jesus fez?",
        "• Como as perguntas ajudaram os discípulos a expressar sua fé?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Boas perguntas ajudam as pessoas a expressar seus pensamentos e sentimentos.",
        "IMITE JESUS",
        "3. Faça perguntas que incentivem a pessoa a pensar",
        "4. Escute a resposta com atenção",
        "5. Use as respostas para continuar a conversa"
      ],
      cv: [
        "Konsedju di Bíblia: 'Resposta, kantu dadu ku suavidade, ta fasta ira.' — Provérbius 15:1",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta faze perguntas pa ses disiplus.",
        "1. Lê Mateus 16:13-17 i responde:",
        "• Ki tipu di perguntas ki Jizus faze?",
        "• Modi ki kes perguntas djuda disiplus spresa ses fé?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Bons perguntas ta djuda pesoas spresa ses pensamentus i sintimentus.",
        "IMITA JIZUS",
        "3. Faze perguntas ki ta insentiva pesoa pensa",
        "4. Obi resposta ku atenson",
        "5. Uza respostas pa kontinua konversa"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021220/univ/art/1102021220_univ_lsr_xl.jpg"
  },
  {
    id: 4,
    title: {
      pt: "Lição 4 — Explicar Bem as Escrituras", 
      cv: "Lison 4 — Splika ben Skrituras"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Ele lhes explicou as Escrituras.' — Lucas 24:27",
        "O QUE JESUS FEZ",
        "Jesus está explicando as Escrituras para dois discípulos no caminho para Emaús.",
        "1. Leia Lucas 24:25-27, 32 e responda:",
        "• Como Jesus ajudou os discípulos a entender as Escrituras?",
        "• Qual foi o resultado?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Quando explicamos bem as Escrituras, ajudamos as pessoas a entender e amar a Palavra de Deus.",
        "IMITE JESUS",
        "3. Prepare-se bem",
        "4. Use a Bíblia ao explicar",
        "5. Ajude as pessoas a raciocinar sobre os textos"
      ],
      cv: [
        "Konsedju di Bíblia: 'El splika-s Skrituras.' — Lukas 24:27",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta splika Skrituras pa dos disiplus na kaminhu pa Emaús.",
        "1. Lê Lukas 24:25-27, 32 i responde:",
        "• Modi ki Jizus djuda disiplus intende Skrituras?",
        "• Kal ki foi rezultadu?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Kantu nu ta splika ben Skrituras, nu ta djuda pesoas intende i ama Palavra di Deus.",
        "IMITA JIZUS",
        "3. Pripara ben",
        "4. Uza Bíblia kantu bu ta splika",
        "5. Djuda pesoas rasusina sobri téstus"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021221/univ/art/1102021221_univ_lsr_xl.jpg"
  },
  {
    id: 5,
    title: {
      pt: "Lição 5 — Usar Bem a Bíblia", 
      cv: "Lison 5 — Uza ben Bíblia"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Maneje bem a palavra da verdade.' — 2 Tim. 2:15",
        "O QUE JESUS FEZ",
        "Jesus está usando as Escrituras para responder a Satanás.",
        "1. Leia Mateus 4:4-10 e responda:",
        "• Como Jesus usou as Escrituras?",
        "• Por que isso foi eficaz?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. A Bíblia é nossa melhor ferramenta para ensinar a verdade.",
        "IMITE JESUS",
        "3. Conheça bem a Bíblia",
        "4. Use textos apropriados",
        "5. Ajude outros a usar a Bíblia"
      ],
      cv: [
        "Konsedju di Bíblia: 'Maneja ben palavra di verdadi.' — 2 Tim. 2:15",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta uza Skrituras pa responde Satanás.",
        "1. Lê Mateus 4:4-10 i responde:",
        "• Modi ki Jizus uza Skrituras?",
        "• Pamodi ki kel-li foi efikaz?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Bíblia é nos midjor ferramenta pa inxina verdadi.",
        "IMITA JIZUS",
        "3. Konxe ben Bíblia",
        "4. Uza téstus apropriadu",
        "5. Djuda otus uza Bíblia"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021222/univ/art/1102021222_univ_lsr_xl.jpg"
  },
  {
    id: 6,
    title: {
      pt: "Lição 6 — Cultivar o Interesse", 
      cv: "Lison 6 — Kultiva interesi"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'O lavrador que trabalha deve ser o primeiro a receber parte dos frutos.' — 2 Tim. 2:6",
        "O QUE JESUS FEZ",
        "Jesus está conversando com a mulher samaritana no poço.",
        "1. Leia João 4:10-15 e responda:",
        "• Como Jesus cultivou o interesse da mulher?",
        "• O que podemos aprender com seu método?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Devemos cultivar o interesse das pessoas gradualmente.",
        "IMITE JESUS",
        "3. Faça perguntas que despertem interesse",
        "4. Use bem as publicações",
        "5. Acompanhe o interesse"
      ],
      cv: [
        "Konsedju di Bíblia: 'Lavradu ki ta trabadja debe ser primeru a resebe parti di frutus.' — 2 Tim. 2:6",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta konversa ku mudjer samaritana na posu.",
        "1. Lê Juan 4:10-15 i responde:",
        "• Modi ki Jizus kultiva interesi di mudjer?",
        "• Kuzê ki nu pode prende ku se métodu?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Nu debe kultiva interesi di pesoas gradualmente.",
        "IMITA JIZUS",
        "3. Faze perguntas ki ta disperta interesi",
        "4. Uza ben publikasons",
        "5. Akonpanha interesi"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021223/univ/art/1102021223_univ_lsr_xl.jpg"
  },
  {
    id: 7,
    title: {
      pt: "Lição 7 — Fazer Boas Revisitas", 
      cv: "Lison 7 — Faze bons revizitas"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Continue nessas coisas.' — 1 Tim. 4:16",
        "O QUE JESUS FEZ",
        "Jesus está revisitando pessoas que mostraram interesse.",
        "1. Leia João 4:28-30, 39-42 e responda:",
        "• Como Jesus aproveitou a oportunidade para fazer revisitas?",
        "• Qual foi o resultado?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. As revisitas são essenciais para ajudar as pessoas a progredir.",
        "IMITE JESUS",
        "3. Prepare cada revisita",
        "4. Seja regular nas revisitas",
        "5. Ajude as pessoas a progredir"
      ],
      cv: [
        "Konsedju di Bíblia: 'Kontinua na kes kuzas li.' — 1 Tim. 4:16",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta revizita pesoas ki mostra interesi.",
        "1. Lê Juan 4:28-30, 39-42 i responde:",
        "• Modi ki Jizus proveita oportunidadi pa faze revizitas?",
        "• Kal ki foi rezultadu?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Revizitas é esensial pa djuda pesoas progredi.",
        "IMITA JIZUS",
        "3. Pripara kada revizita",
        "4. Ser regular na revizitas",
        "5. Djuda pesoas progredi"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021224/univ/art/1102021224_univ_lsr_xl.jpg"
  },
  {
    id: 8,
    title: {
      pt: "Lição 8 — Ajudar as Pessoas a Estudar a Bíblia", 
      cv: "Lison 8 — Djuda pesoas studa Bíblia"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Ensine com mansidão.' — 2 Tim. 2:25",
        "O QUE JESUS FEZ",
        "Jesus está ensinando seus discípulos.",
        "1. Leia Mateus 13:51, 52 e responda:",
        "• Como Jesus verificava se seus discípulos entendiam?",
        "• Por que isso era importante?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Um bom professor verifica se o aluno está entendendo.",
        "IMITE JESUS",
        "3. Prepare bem cada estudo",
        "4. Faça perguntas para verificar o entendimento",
        "5. Ajude o estudante a fazer progresso"
      ],
      cv: [
        "Konsedju di Bíblia: 'Inxina ku mansidão.' — 2 Tim. 2:25",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta inxina ses disiplus.",
        "1. Lê Mateus 13:51, 52 i responde:",
        "• Modi ki Jizus ta verifikaba si ses disiplus staba ta intende?",
        "• Pamodi ki kel-li éra inportanti?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Un bon prufesor ta verifika si alunu sta ta intende.",
        "IMITA JIZUS",
        "3. Pripara ben kada studu",
        "4. Faze perguntas pa verifika intendimentu",
        "5. Djuda studanti faze prugresu"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021225/univ/art/1102021225_univ_lsr_xl.jpg"
  },
  {
    id: 13,
    title: {
      pt: "Apêndice 1 — Verdades da Bíblia que Gostamos de Ensinar",
      cv: "Apéndisi 1 — Verdadis di Bíblia ki nu gosta di inxina"
    },
    content: {
      pt: [
        "Jesus disse que as pessoas sinceras reconheceriam a verdade quando a ouvissem. (João 10:4, 27) Por isso, sempre que falamos com as pessoas, queremos mostrar-lhes as verdades simples da Bíblia. Para começar a falar sobre uma verdade, experimente fazer perguntas como: 'Você sabia que...?' ou 'Já ouviu falar de...?' Depois use um ou mais textos da Bíblia para explicar a verdade. Falar apenas uma verdade simples da Bíblia pode ser suficiente para plantar uma semente no coração de alguém, e Deus pode fazer essa semente crescer! — 1 Cor. 3:6, 7.",
        "FUTURO",
        "1. As coisas que vemos acontecer e como as pessoas estão se comportando mostram que não vai demorar para as coisas mudarem. — Mat. 24:3, 7, 8; Luc. 21:10, 11; 2 Tim. 3:1-5.",
        "2. A Terra nunca será destruída. — Sal. 104:5; Ecl. 1:4.",
        "3. Não haverá mais poluição e a Terra será um paraíso. — Isa. 35:1, 2; Apo. 11:18.",
        "4. Todas as pessoas terão saúde perfeita. — Isa. 33:24; 35:5, 6.",
        "5. Você pode viver na Terra para sempre. — Sal. 37:29; Mat. 5:5.",
        "FAMÍLIA",
        "6. O marido deve 'amar sua esposa como a si mesmo'. — Efé. 5:33; Col. 3:19.",
        "7. A esposa deve ter muito respeito pelo marido. — Efé. 5:33; Col. 3:18.",
        "8. O marido e a esposa devem ser leais um ao outro. — Mal. 2:16; Mat. 19:4-6, 9; Heb. 13:4.",
        "9. Os filhos que respeitam e obedecem a seus pais têm bons resultados. — Pro. 1:8, 9; Efé. 6:1-3.",
        "DEUS",
        "10. Deus tem um nome. — Sal. 83:18; Jer. 10:10.",
        "11. Deus fala conosco. — 2 Tim. 3:16, 17; 2 Ped. 1:20, 21.",
        "12. Deus é justo e trata todas as pessoas de maneira igual. — Deut. 10:17; Atos 10:34, 35.",
        "13. Deus quer nos ajudar. — Sal. 46:1; 145:18, 19.",
        "ORAÇÃO",
        "14. Deus quer que oremos a ele. — Sal. 62:8; 65:2; 1 Ped. 5:7.",
        "15. A Bíblia nos ensina como devemos orar. — Mat. 6:7-13; Luc. 11:1-4.",
        "16. Devemos orar sempre. — Mat. 7:7, 8; 1 Tes. 5:17.",
        "JESUS",
        "17. Jesus foi um grande instrutor e seus conselhos servem até hoje. — Mat. 6:14, 15, 34; 7:12.",
        "18. Jesus já tinha falado sobre as coisas que vemos acontecer hoje. — Mat. 24:3, 7, 8, 14; Luc. 21:10, 11.",
        "19. Jesus é o Filho de Deus. — Mat. 16:16; João 3:16; 1 João 4:15.",
        "20. Jesus não é Deus Todo-Poderoso. — João 14:28; 1 Cor. 11:3.",
        "REINO DE DEUS",
        "21. O Reino de Deus é um governo que está no céu. — Dan. 2:44; 7:13, 14; Mat. 6:9, 10; Apo. 11:15.",
        "22. O Reino de Deus vai substituir todos os governos humanos. — Sal. 2:7-9; Dan. 2:44.",
        "23. O Reino de Deus é a única solução para nossos problemas. — Sal. 37:10, 11; 46:9; Isa. 65:21-23.",
        "SOFRIMENTO",
        "24. Não é Deus que nos faz sofrer. — Deut. 32:4; Tia. 1:13.",
        "25. É Satanás que está governando o mundo. — Luc. 4:5, 6; 1 João 5:19.",
        "26. Deus se importa com seu sofrimento. — Sal. 34:17-19; Isa. 41:10, 13.",
        "27. Não vai demorar para Deus acabar com o sofrimento. — Isa. 65:17; Apo. 21:3, 4.",
        "MORTE",
        "28. As pessoas que estão mortas não sabem de mais nada e nem estão sofrendo. — Ecl. 9:5; João 11:11-14.",
        "29. As pessoas que estão mortas não podem nos ajudar nem nos prejudicar. — Sal. 146:4; Ecl. 9:6, 10.",
        "30. As pessoas que amamos e que já morreram vão viver de novo. — Jó 14:13-15; João 5:28, 29; Atos 24:15.",
        "31. 'Não haverá mais morte'. — Apo. 21:3, 4; Isa. 25:8.",
        "RELIGIÃO",
        "32. Nem toda religião agrada a Deus. — Jer. 7:11; Mat. 7:13, 14, 21-23.",
        "33. Deus odeia fingimento. — Isa. 29:13; Miq. 3:11; Mar. 7:6-8.",
        "34. O amor verdadeiro identifica a religião verdadeira. — Miq. 4:3; João 13:34, 35."
      ],
      cv: [
        "Jizus fla ma kes algen sinseru ta ben rekonhese verdadi óras ki es obi-l. (Juan 10:4, 27) Nton, sénpri ki nu pâpia ku pesoas, nu krê mostra-s kes verdadi sinplis di Bíblia. Pa bu kumesa ta pâpia sobri un verdadi sprimenta faze perguntas sima: 'Bu sabia ma... ?' ô 'Dja bu obi ta papiadu di... ?' Dipôs uza un ô más testu di Bíblia pa splika kel verdadi. Pâpia sô un verdadi sinplis di Bíblia pode txiga pa planta un simenti na korason di un algen, i Deus pode poi kel simenti ta kria! — 1 Kor. 3:6, 7.",
        "FUTURU",
        "1. Kes kuza ki nu sta odja ta kontise i modi ki pesoas sta konporta, ta mostra ma ka ta dura kuzas ta ben muda. — Mat. 24:3, 7, 8; Luk. 21:10, 11; 2 Tim. 3:1-5.",
        "2. Téra nunka ka ta ben ser distruídu. — Sal. 104:5; Ecl. 1:4.",
        "3. Ka ta ben ten poluison i téra ta ben ser un paraízu. — Isa. 35:1, 2; Apo. 11:18.",
        "4. Tudu algen ta ben ten saúdi perfeitu. — Isa. 33:24; 35:5, 6.",
        "5. Bu pode vive na téra pa tudu ténpu. — Sal. 37:29; Mat. 5:5.",
        "FAMÍLIA",
        "6. Maridu debe 'ama se mudjer sima el ta ama se kabésa'. — Efé. 5:33; Kol. 3:19.",
        
        "7. Mudjer debe ten txeu ruspetu pa se maridu. — Efé. 5:33; Kol. 3:18.",
        "8. Maridu ku mudjer debe ser lial pa kunpanheru. — Mal. 2:16; Mat. 19:4-6, 9; Ebr. 13:4.",
        "9. Fidjus ki ta ruspeta i ta obi ku ses pai i ku ses mai ta ten bons rezultadu. — Pro. 1:8, 9; Efé. 6:1-3.",
        "DEUS",
        "10. Deus ten un nómi. — Sal. 83:18; Jer. 10:10.",
        "11. Deus ta pâpia ku nos. — 2 Tim. 3:16, 17; 2 Ped. 1:20, 21.",
        "12. Deus é justu i el ta trata tudu algen igual. — Deut. 10:17; Atus 10:34, 35.",
        "13. Deus krê djuda-nu. — Sal. 46:1; 145:18, 19.",
        "ORASON",
        "14. Deus krê pa nu ora pa el. — Sal. 62:8; 65:2; 1 Ped. 5:7.",
        "15. Bíblia ta inxina-nu modi ki nu debe ora. — Mat. 6:7-13; Luk. 11:1-4.",
        "16. Nu debe ora manenti. — Mat. 7:7, 8; 1 Tes. 5:17.",
        "JIZUS",
        "17. Jizus foi un grandi instrutor i se konsedjus ta sirbi ti oji. — Mat. 6:14, 15, 34; 7:12.",
        "18. Jizus dja flaba sobri kes kuza ki nu sta odja ta kontise oji. — Mat. 24:3, 7, 8, 14; Luk. 21:10, 11.",
        "19. Jizus é fidju di Deus. — Mat. 16:16; Juan 3:16; 1 Juan 4:15.",
        "20. Jizus é ka Deus Tudu-Poderozu. — Juan 14:28; 1 Kor. 11:3.",
        "REINU DI DEUS",
        "21. Reinu di Deus é un govérnu ki sta na séu. — Dan. 2:44; 7:13, 14; Mat. 6:9, 10; Apo. 11:15.",
        "22. Reinu di Deus ta ben fika na lugar di tudu kes govérnu di ómi. — Sal. 2:7-9; Dan. 2:44.",
        "23. Reinu di Deus é úniku soluson pa nos prublémas. — Sal. 37:10, 11; 46:9; Isa. 65:21-23.",
        "SUFRIMENTU",
        "24. É ka Deus ki ta pô-nu ta sufri. — Deut. 32:4; Tia. 1:13.",
        "25. É satanás ki sta ta governa mundu. — Luk. 4:5, 6; 1 Juan 5:19.",
        "26. Deus ta inporta ku bu sufrimentu. — Sal. 34:17-19; Isa. 41:10, 13.",
        "27. Ka ta dura Deus ta ben kaba ku sufrimentu. — Isa. 65:17; Apo. 21:3, 4.",
        "MÓRTI",
        "28. Kes algen ki sta mortu ka sabe di más nada i nen es ka sta sufri. — Ecl. 9:5; Juan 11:11-14.",
        "29. Kes algen ki sta mortu ka ta pode djuda-nu nen prujudika-nu. — Sal. 146:4; Ecl. 9:6, 10.",
        "30. Kes algen ki nu ta ama ki dja móre ta ben vive otu bês. — Jó 14:13-15; Juan 5:28, 29; Atus 24:15.",
        "31. 'Ka ta ben ten más mórti'. — Apo. 21:3, 4; Isa. 25:8.",
        "RELIJION",
        "32. É ka tudu relijion ki ta agrada Deus. — Jer. 7:11; Mat. 7:13, 14, 21-23.",
        "33. Deus ta ôdia finjimentu. — Isa. 29:13; Miq. 3:11; Mar. 7:6-8.",
        "34. Amor di verdadi ta identifika relijion verdaderu. — Miq. 4:3; Juan 13:34, 35."
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021228/univ/art/1102021228_univ_lsr_xl.jpg"
  },
  {
    id: 14,
    title: {
      pt: "Apêndice 2 — Você Deve Parar a Conversa?",
      cv: "Apéndisi 2 — Bu debe para kel konbérsu?"
    },
    content: {
      pt: [
        "Quando alguém nos faz uma pergunta com sinceridade ou não concorda conosco, ficamos felizes em continuar falando com ele. Queremos falar com as pessoas que podem ter uma 'boa atitude para ganhar vida eterna'. — Atos 13:48",
        "Mas, e se alguém está chateado, quer discutir ou não quer falar naquele momento? Com calma e jeito você pode parar a conversa. (Pro. 17:14) Tente mostrar respeito e bondade, assim para que a pessoa esteja disposta a falar conosco em outro dia. — 1 Ped. 2:12"
      ],
      cv: [
        "Óras ki un algen ta faze-nu un pergunta ku sinseridadi ô el ka ta konkorda ku nos, nu ta fika kontenti di kontinua ta pâpia ku el. Nu krê pâpia ku kes algen ki pode ten un 'bon atitudi pa ganha vida pa tudu ténpu'. — Atus 13:48",
        "Má, i si un algen sta xatiadu, krê diskuti ô el ka krê pâpia na kel óra? Ku kalma i ku jetu bu pode para kel konbérsu. (Pro. 17:14) Tenta mostra ruspetu i bondadi, asi pa kel algen sta dispostu na pâpia ku nos na un otu dia. — 1 Ped. 2:12"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021229/univ/art/1102021229_univ_lsr_xl.jpg"
  },
  {
    id: 15,
    title: {
      pt: "Apêndice 3 — Como Usar 'Viva Feliz Para Sempre!' para Fazer Estudos Bíblicos",
      cv: "Apéndisi 3 — Modi ki uza 'Vive filís pa tudu ténpu!' pa faze studus di Bíblia"
    },
    content: {
      pt: [
        "Os irmãos fizeram muitas orações e examinaram com cuidado que informações colocariam no livro Viva Feliz Para Sempre!. Para usar esta publicação melhor, siga as instruções abaixo ao fazer um estudo bíblico.",
        "ANTES DO ESTUDO",
        "1. Prepare-se bem. Ao se preparar, pense nas necessidades do seu estudante, pense em sua situação e no que ele acredita. Pense nas coisas que podem ser difíceis para ele entender ou aplicar. Veja como as informações da parte 'Veja mais' podem ajudar seu estudante, e esteja pronto para usá-las durante o estudo, se necessário.",
        "DURANTE O ESTUDO",
        "2. Comece e termine o estudo com oração se seu estudante concordar.",
        "3. Tome cuidado para não falar demais. Concentre-se nas informações do livro e deixe seu estudante falar.",
        "4. Quando começar uma parte do livro, leia as informações destacadas no início da parte, e fale sobre o tema de algumas das lições.",
        "5. Quando terminar uma parte, use perguntas de resumo da parte, para ajudar seu estudante a lembrar das verdades que aprendeu.",
        "6. Quando estudar cada lição com seu estudante:",
        "• Leia os parágrafos.",
        "• Leia todos os textos bíblicos que estão escritos 'Leia'.",
        "• Leia outros textos bíblicos se necessário.",
        "• Mostre todos os vídeos que estão escritos 'Veja' (se possível).",
        "• Faça ao estudante todas as perguntas.",
        "• Peça ao seu estudante para ver as imagens na parte 'Saiba mais' e peça-lhe para falar sobre elas.",
        "• Use o quadro 'Experimente fazer isto' para ajudar seu estudante a alcançar suas metas. Você pode encorajá-lo para ele colocar a meta que está lá, para ele escrever outra meta ou para ele usar as duas.",
        "• Pergunte ao seu estudante se quando ele estava se preparando para seu estudo, se ele viu algum artigo ou vídeo da parte 'Veja mais' que ele gostou mais.",
        "• Tente estudar uma lição inteira em cada estudo.",
        "DEPOIS DO ESTUDO",
        "7. Continue pensando em seu estudante. Faça oração pedindo a Jeová para ele abençoar o progresso que seu estudante está fazendo e para ele dar-lhe sabedoria para continuar ajudando-o."
      ],
      cv: [
        "Irmons faze txeu orason i es djobe ku kuidadu ki informasons ki es ta poba na livru Vive filís pa tudu ténpu!. Pa bu uza es publikason midjór, sigi kes instruson ki sta dibaxu óras ki bu ta faze un studu di Bíblia.",
        "ANTIS DI STUDU",
        "1. Pripara dretu. Óras ki bu sta ta pripara, pensa na kuzê ki bu studanti meste, pensa na se situason i na kuzê ki el ta kridita na el. Pensa na kes kuza ki pode ser difísil pa el intende ô pa el aplika. Djobe modi ki kes informason ki sta na párti 'Djobe más' pode djuda bu studanti, i sta prontu pa uza-s duránti studu, si meste.",
        "DURÁNTI STUDU",
        "2. Kumesa i tirmina studu ku orason si bu studanti ta konkorda.",
        "3. Toma kuidadu pa bu ka pâpia dimás. Konsentra na kes informason di livru i dexa bu studanti pâpia.",
        "4. Óras ki bu ta kumesa un párti di livru, lé kes informason ki sta distakadu na komésu di kel párti, i pâpia sobri téma di alguns di kes lison.",
        "5. Óras ki bu ta tirmina un párti, uza perguntas di rezumu di kel párti, pa djuda bu studanti lenbra di kes verdadi ki el prende.",
        "6. Óras ki bu ta studa kada lison ku bu studanti:",
        "• Lé kes parágrafu.",
        "• Lé tudu kes testu di Bíblia ki sta skrebedu 'Lé'.",
        "• Lé otus testu di Bíblia si meste.",
        "• Mostra tudu kes vídiu ki sta skrebedu 'Odja' (si ta da).",
        "• Faze studanti tudu kes pergunta.",
        "• Pidi bu studanti pa odja kes imajen na kel párti 'Sabe más' i pidi-l pa el pâpia sobri es.",
        "• Uza kuadru 'Sprimenta faze kel-li' pa djuda bu studanti alkansa se métas. Bu pode inkoraja-l pa el poi kel méta ki sta la, pa el skrebe otu méta ô pa el uza tudu dôs.",
        "• Pergunta bu studanti si kantu el staba ta pripara se studu, si el odja algun artigu ô vídiu di párti 'Djobe más' ki el gosta más txeu.",
        "• Tenta studa un lison interu na kada studu.",
        "DIPÔS DI STUDU",
        "7. Kontinua ta pensa na bu studanti. Faze orason ta pidi Jeová pa el abênsua prugrésu ki bu studanti sta ta faze i pa el da-u sabedoria pa bu kontinua ta djuda-l."
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021230/univ/art/1102021230_univ_lsr_xl.jpg"
  },
  {
    id: 12,
    title: {
      pt: "Lição 12 — Mostrar Coragem",
      cv: "Lison 12 — Mostra koraji"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Óleo e incenso alegram o coração, assim como a doçura de um amigo que dá um conselho sincero.' — Pro. 27:9",
        "O QUE JESUS FEZ",
        "Jesus está falando com amor com um homem que está ajoelhado diante dele com seus discípulos.",
        "VÍDEO: Jesus dá um conselho para um jovem que era um governante rico",
        "1. Veja o VÍDEO, ou leia Marcos 10:17-22. Depois pense e responda estas perguntas:",
        "• Que boas qualidades talvez Jesus tenha visto no jovem governante?",
        "• Por que Jesus precisava de amor e coragem para dar conselho ao homem?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Quando precisamos explicar ao nosso estudante o que ele deve fazer para continuar se tornando mais amigo de Jeová, devemos fazê-lo com amor, mas também de maneira clara.",
        "IMITE JESUS",
        "3. Ajude seu estudante a estabelecer e alcançar metas.",
        "• Use a parte 'Experimente fazer isto' de cada lição de Viva feliz para sempre!",
        "• Ajude seu estudante a entender o que ele precisa fazer para alcançar metas de curto e longo prazo.",
        "• Elogie seu estudante sempre pelo progresso que já fez.",
        "4. Identifique o que está impedindo seu estudante de progredir e ajude-o a vencer os problemas.",
        "• Pergunte a si mesmo:",
        "  'Se meu estudante não está progredindo para o batismo, o que está impedindo-o?'",
        "  'O que posso fazer para ajudá-lo?'",
        "• Ore pedindo coragem para falar com seu estudante de maneira clara e com amor sobre o que ele precisa fazer.",
        "5. Pare o estudo se o estudante não está fazendo progresso.",
        "• Para saber se seu estudante da Bíblia está fazendo progresso, pergunte a si mesmo:",
        "  'Meu estudante está praticando o que está aprendendo?'",
        "  'Ele assiste às reuniões e fala com outros sobre verdades bíblicas?'",
        "  'Depois de algum tempo estudando, ele quer se tornar uma Testemunha de Jeová?'",
        "• Se um estudante da Bíblia não quer fazer progresso:",
        "  'Peça-lhe para pensar sobre o que pode estar impedindo-o de fazer progresso.'",
        "  'Explique-lhe com jeito por que você está parando seu estudo.'",
        "  'Deixe-o saber o que ele precisa fazer se depois quiser estudar novamente.'"
      ],
      cv: [
        "Konsedju di Bíblia: 'Óliu ku insénsu ta poi korason kontenti, sima un amizadi dósi ki ta nase pamodi un konsedju sinseru.' — Pro. 27:9",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta pâpia ku amor ku un ómi ki sta ku juelhu na txon na frenti di el ku se disiplus.",
        "VÍDIU: Jizus da un konsedju pa un jóven ki éra un governanti riku",
        "1. Odja VÍDIU, ô lé Markus 10:17-22. Dipôs pensa i responde kes pergunta li:",
        "• Ki bons kualidadi talvês Jizus konsigi odja na kel jóven governanti?",
        "• Pamodi ki Jizus mesteba di amor i koraji pa daba kel ómi konsedju?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Óras ki nu meste splika nos studanti kuzê ki el debe faze pa el pode kontinua ta bira más amigu di Jeová, nu debe faze-l ku amor, má tanbê di manera klaru.",
        "IMITA JIZUS",
        "3. Djuda bu studanti poi i alkansa métas.",
        "• Uza kel párti 'Sprimenta faze kel-li' di kada lison di Vive filís pa tudu ténpu!",
        "• Djuda bu studanti intende kuzê ki el meste faze pa el alkansa métas ki ta leba poku ténpu i métas ki ta leba más ténpu.",
        "• Ilojia bu studanti sénpri pa prugrésu ki dja el faze.",
        "4. Djobe kuzê ki sta ta inpidi bu studanti di faze prugrésu i djuda-l vense kes prubléma.",
        "• Pergunta bu kabésa:",
        "  'Si nha studanti ka sta ta prugridi pa batiza, kuzê ki sta ta inpidi-l?'",
        "  'Kuzê ki N pode faze pa N djuda-l?'",
        "• Ora ta pidi koraji pa bu pâpia ku bu studanti di manera klaru i ku amor sobri kuzê ki el meste faze.",
        "5. Para studu si kel studanti ka sta faze prugrésu.",
        "• Pa bu sabe si bu studanti di Bíblia sta ta faze prugrésu, pergunta bu kabésa:",
        "  'Nha studanti sta ta faze sima el sta ta prende?'",
        "  'El sta sisti runions i el sta pâpia ku otus sobri verdadis di Bíblia?'",
        "  'Dipôs di algun ténpu ta studa, dja el krê bira un Tistimunha di Jeová?'",
        "• Si un studanti di Bíblia ka krê faze prugrésu:",
        "  'Pidi-l pa el pensa sobri kuzê ki pode sta ta inpidi-l di faze prugrésu.'",
        "  'Splika-l ku jetu pamodi ki bu sta ta para se studu.'",
        "  'Dexa-l sabe kuzê ki el meste faze si dipôs el krê studa otu bês.'"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021227/univ/art/1102021227_univ_lsr_xl.jpg"
  },
  {
    id: 9,
    title: {
      pt: "Lição 9 — Ajudar as Pessoas a Progredir para o Batismo", 
      cv: "Lison 9 — Djuda pesoas progredi pa batismu"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Façam discípulos... batizando-os.' — Mat. 28:19",
        "O QUE JESUS FEZ",
        "Jesus está ensinando seus discípulos sobre o batismo.",
        "1. Leia Mateus 28:19, 20 e responda:",
        "• O que Jesus ordenou que seus seguidores fizessem?",
        "• Por que o batismo é importante?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. O batismo é um passo importante para a salvação.",
        "IMITE JESUS",
        "3. Ajude as pessoas a entender a importância do batismo",
        "4. Explique os requisitos para o batismo",
        "5. Apoie aqueles que decidem se batizar"
      ],
      cv: [
        "Konsedju di Bíblia: 'Faze disiplus... ta batiza-s.' — Mat. 28:19",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta inxina ses disiplus sobri batismu.",
        "1. Lê Mateus 28:19, 20 i responde:",
        "• Kuzê ki Jizus ordena ses segidoris pa faze?",
        "• Pamodi ki batismu é inportanti?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Batismu é un pasu inportanti pa salvason.",
        "IMITA JIZUS",
        "3. Djuda pesoas intende inportánsia di batismu",
        "4. Splika rekizitus pa batismu",
        "5. Apoia kes ki disidi batiza"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021226/univ/art/1102021226_univ_lsr_xl.jpg"
  },
  {
    id: 10,
    title: {
      pt: "Lição 10 — Ajudar as Pessoas a se Tornarem Discípulos", 
      cv: "Lison 10 — Djuda pesoas bira disiplus"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Estávamos decididos não só a compartilhar com vocês as boas novas de Deus, mas também nossa própria vida.' — 1 Tes. 2:8",
        "O QUE JESUS FEZ",
        "Jesus e Nicodemos estão conversando à noite em um jardim.",
        "VÍDEO: Jesus ensina Nicodemos",
        "1. Veja o VÍDEO, ou leia João 3:1, 2. Depois pense e responda estas perguntas:",
        "• Por que Nicodemos foi encontrar Jesus à noite? — Veja João 12:42, 43.",
        "• Quando Jesus encontrou Nicodemos à noite, como ele mostrou que estava decidido a fazer discípulos?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Mostramos que amamos as pessoas quando estamos decididos a ajudá-las a se tornarem discípulas.",
        "IMITE JESUS",
        "3. Estude em um horário e local que seja melhor para seu estudante da Bíblia. Ele pode pedir para estudar em um dia e horário que seja melhor para ele. Ele pode se sentir mais à vontade estudando em seu local de trabalho, em sua casa ou em um local público. Faça todo o possível para ajustar seu programa para estudar no horário e local que seja melhor para seu estudante.",
        "4. Estude regularmente. Se você não puder ir fazer o estudo, não desmarque. Em vez disso, considere estas opções:",
        "• Você pode fazer o estudo em outro dia durante a semana?",
        "• Você pode fazer o estudo por telefone ou videochamada?",
        "• Você pode pedir para outra pessoa ir fazer o estudo?",
        "5. Ore para ter uma boa atitude. Peça a Jeová para ajudá-lo a não desistir de seu estudante, mesmo que ele não estude toda semana ou se estiver tendo dificuldade em aplicar o que está aprendendo. (Fil. 2:13) Seu estudante pode ter boas qualidades, por isso ore pedindo ajuda para se concentrar em suas qualidades."
      ],
      cv: [
        "Konsedju di Bíblia: 'Nu staba disididu ka sô na pâpia ku nhos di kes notísia sábi di Deus, má tanbê na da nos vida pa pode djuda nhos.' — 1 Tes. 2:8",
        "KUZÊ KI JIZUS FAZE",
        "Jizus ku Nikodemus sta ta pâpia di noti na un kintal.",
        "VÍDIU: Jizus inxina Nikodemus",
        "1. Odja VÍDIU, ô lé Juan 3:1, 2. Dipôs pensa i responde kes pergunta li:",
        "• Pamodi ki Nikodemus ba inkontra ku Jizus di noti? — Odja Juan 12:42, 43.",
        "• Kantu Jizus inkontra ku Nikodemus di noti, modi ki el mostra ma el staba disididu na faze disiplus?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Nu ta mostra ma nu ta ama pesoas óras ki nu sta disididu na djuda-s bira disiplus.",
        "IMITA JIZUS",
        "3. Studa na un óra i na un lugar ki é midjór pa bu studanti di Bíblia. El pode pidi pa studa na un dia i na un óra ki é midjór pa el. El pode xinti midjór si el studa na se lugar di trabadju, na se kaza ô na un lugar públiku. Faze tudu ki bu ta pode pa bu muda bu prugrama pa studa na óra i na lugar ki é midjór pa bu studanti.",
        "4. Studa sénpri. Si bu ka ta konsigi ba faze kel studu, ka bu dismarka. Envês di kel-li, djobe kes opson li:",
        "• Bu ta pode faze kel studu na un otu dia duránti kel simana?",
        "• Bu ta pode faze kel studu pa tilifóni ô pa xamada ku vídiu?",
        "• Bu ta pode pidi otu algen pa ba faze kel studu?",
        "5. Ora pa bu ten un bon atitudi. Pidi Jeová pa djuda-u ka dizisti di bu studanti, mésmu ki el ka sta ta studa tudu simana, ô si el sta ku difikuldadi na aplika kuzê ki el sta ta prende. (Flp. 2:13) Bu studanti pode ten bons kualidadi, pur isu ora ta pidi ajuda pa bu konsentra na se kualidadis."
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021216/univ/art/1102021216_univ_lsr_xl.jpg"
  },
  {
    id: 11,
    title: {
      pt: "Lição 11 — Ensinar de Maneira Simples",
      cv: "Lison 11 — Inxina di un manera sinplis"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Fale algo que seja fácil de entender.' — 1 Cor. 14:9",
        "O QUE JESUS FEZ",
        "Jesus está ensinando um grupo de pessoas perto da água. Pássaros estão voando no céu e também há flores perto deles.",
        "VÍDEO: Jesus faz uma Ilustração para mostrar como nosso Pai cuida de nós",
        "1. Veja o VÍDEO, ou leia Mateus 6:25-27. Depois pense e responda estas perguntas:",
        "• Que ilustração Jesus usou para mostrar como Jeová cuida de nós?",
        "• Embora Jesus soubesse muito sobre pássaros, em que coisa simples ele se concentrou? Por que essa foi uma boa maneira de ensinar?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Quando ensinamos de maneira simples, as pessoas se lembram do que ensinamos e tocamos seu coração.",
        "IMITE JESUS",
        "3. Não fale demais. Em vez de dizer tudo o que sabe sobre um assunto, concentre-se no que a publicação de estudo diz. Depois de fazer uma pergunta, espere com paciência para seu estudante responder. Se ele não sabe a resposta da pergunta ou diz algo que não está de acordo com a Bíblia, faça outras perguntas para ajudá-lo a raciocinar sobre o assunto. Quando seu estudante já entendeu o ponto principal, passe para outro assunto.",
        "4. Ajude seu estudante a ligar o que ele está aprendendo com o que já aprendeu antes. Por exemplo, antes de começar uma lição sobre ressurreição, você pode fazer um resumo com seu estudante para ajudá-lo a lembrar do que já aprendeu na Bíblia sobre os mortos.",
        "5. Use ilustrações com cuidado. Antes de usar uma ilustração, pergunte a si mesmo:",
        "• 'Esta ilustração é simples?'",
        "• 'Será fácil para meu estudante entendê-la?'",
        "• 'Ela vai ajudar meu estudante a lembrar do ponto principal em vez de lembrar só da ilustração?'"
      ],
      cv: [
        "Konsedju di Bíblia: 'Pâpia un kuza ki é fásil di intende'. — 1 Kor. 14:9",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta inxina un grupu di algen pértu di agu.Pasus sta bua na séu i tanbê sta floris la pértu di es.",
        "VÍDIU: Jizus faze un Ilustrason pa mostra modi ki nos Pai ta kuida di nos",
        "1. Odja VÍDIU, ô lé Mateus 6:25-27. Dipôs pensa i responde kes pergunta li:",
        "• Ki ilustrason Jizus uza pa mostra modi ki Jeová ta kuida di nos?",
        "• Enbóra Jizus sabia txeu kuza sobri pasus, na ki kuza sinplis ki el konsentra? Pamodi ki kel-la foi un bon manera di inxina?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Óras ki nu ta inxina di un manera sinplis, kes algen ta lenbra di kuzê ki nu inxina-s i nu ta toka ses korason.",
        "IMITA JIZUS",
        "3. Ka bu pâpia txeu. Envês di fla tudu kel ki bu sabe sobri un asuntu, konsentra na kuzê ki kel publikason di studu ta fla. Dipôs di faze un pergunta, spera ku paxénxa pa bu studanti responde. Si el ka sabe respósta di kel pergunta ô el fla algun kuza ki ka sta di akordu ku Bíblia, faze-l otus pergunta pa djuda-l rasusina sobri kel asuntu. Óras ki bu studanti dja intende kel pontu prinsipal, pasa pa otu asuntu.",
        "4. Djuda bu studanti liga kuzê ki el sta ta prende ku kuzê ki dja el prendeba antis. Pur izénplu, antis di kumesa un lison sobri resureison, bu pode faze un rezumu ku bu studanti pa djuda-l lenbra di kuzê ki dja el prende na Bíblia sobri mortus.",
        "5. Uza ilustrasons ku kuidadu. Antis di uza un ilustrason, pergunta bu kabésa:",
        "• 'Kel ilustrason li é sinplis?'",
        "• 'Ta ba ser fásil pa nha studanti intende-l?'",
        "• 'El ta ba djuda nha studanti lenbra di kel pontu prinsipal envês di lenbra sô di kel ilustrason?'"
      ]
    },
    image: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102021225/univ/art/1102021225_univ_lsr_xl.jpg"
  }
];

// Trier les études par ID pour assurer l'ordre correct
const sortedBibleStudies = [...bibleStudies].sort((a, b) => a.id - b.id);

// Débogage
console.log('Nombre total d\'études:', bibleStudies.length);
console.log('Études triées:', sortedBibleStudies.length);
console.log('IDs présents:', sortedBibleStudies.map(s => s.id));

const BibleStudiesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);
  
  const toggleStudy = (id: number) => {
    if (expandedStudy === id) {
      setExpandedStudy(null);
    } else {
      setExpandedStudy(id);
    }
  };
  
  return (
    <div className="page-transition min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-primary-dark mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              {t('bibleStudies.title')}
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('bibleStudies.subtitle')}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {sortedBibleStudies.map((study) => (
            <div 
              key={study.id} 
              className="mb-8 bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div 
                className="cursor-pointer"
                onClick={() => toggleStudy(study.id)}
              >
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.title[language]} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h2 className="text-2xl font-bold mb-2">
                        {study.title[language]}
                      </h2>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4 flex justify-between items-center">
                  <span className="text-gray-700 font-medium">
                    {expandedStudy === study.id ? t('ui.close') : t('ui.next')}
                  </span>
                  {expandedStudy === study.id ? (
                    <ChevronUp className="text-primary-dark" />
                  ) : (
                    <ChevronDown className="text-primary-dark" />
                  )}
                </div>
              </div>
              
              {expandedStudy === study.id && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 text-primary-dark">
                        {language === 'pt' ? 'Conteúdo do Estudo' : 'Kontéudu di Studu'}
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {study.content[language].map((point, index) => (
                          <li key={index} className="text-gray-700">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-primary-dark mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              {language === 'pt' ? 'Como Estudar a Bíblia' : 'Modi ki Studa Bíblia'}
            </h2>
          </div>
          
          <div className="text-gray-700 space-y-4">
            <p>
              {language === 'pt' 
                ? 'Os estudos bíblicos são gratuitos e podem ser realizados no horário e local de sua preferência. Cada estudo dura aproximadamente 30 minutos e utiliza a Bíblia como fonte principal.'
                : 'Studus bíblikus é gratuitu y pode ser realizadu na oráriu y lugar di bu preferénsia. Kada studu ta dura aproximadamenti 30 minutu y ta utiliza Bíblia sima fonti prinsipal.'}
            </p>
            <p>
              {language === 'pt'
                ? 'Durante o estudo, você terá a oportunidade de fazer perguntas e expressar suas opiniões. O objetivo é ajudá-lo a entender o que a Bíblia realmente ensina sobre diversos assuntos importantes.'
                : 'Duranti studu, bu ta ten oportunidadi di faze perguntas y spresa bu opinions. Objetivu é djuda-bu entendi kuze ki Bíblia realmenti ta ensina sobri diversus asuntus importanti.'}
            </p>
            <p>
              {language === 'pt'
                ? 'Para solicitar um estudo bíblico gratuito ou obter mais informações, entre em contato conosco através do formulário abaixo.'
                : 'Pa sulisita un studu bíbliku gratuitu ou obten más informasons, entra en kontatu ku nós através di formuláriu baxu.'}
            </p>
          </div>
          
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {language === 'pt' ? 'Solicitar um Estudo Bíblico' : 'Sulisita un Studu Bíbliku'}
            </h3>
            <button className="bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary transition-colors">
              {language === 'pt' ? 'Solicitar Agora' : 'Sulisita Gosi'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleStudiesPage;