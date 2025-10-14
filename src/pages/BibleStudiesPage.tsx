import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react'; // X et BookOpen supprimés
import OptimizedImage from '../components/OptimizedImage';

// Les interfaces BibleStudyRequestFormData, StudyRequest et le composant BibleStudyRequestModal ont été supprimés.

interface BibleStudy {
  id: number;
  title: {
    pt: string;
    kea: string;
  };
  content: {
    pt: string[];
    kea: string[];
  };
  image: string;
}

const bibleStudies: BibleStudy[] = [
  {
    id: 1,
    title: {
      pt: "Lição 1 — Falar de Coisas que Interessam às Pessoas", 
      kea: "Lison 1 — Pâpia di kuzas ki ta interesa otus algen"
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
      kea: [
        "Konsedju di Bíblia: 'Amor... ka ta djobe se própi interesi'. — 1 Kor. 13:4, 5",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta pâpia ku un mudjer na posu.",
        "VÍDIU: Jizus ta pâpia ku un mudjer na un posu",
        "1. Odja VÍDIU, ô lé Juan 4:6-9. Dipôs pensa i responde kes pergunta li:",
        "• Kuzê ki Jizus repara sobri kel mudjer antis di el kumesa ta pâpia ku el?",
        "• Jizus fla: 'Da-m un bokadinhu di agu.' Pamodi ki kel-li foi un bon manera di kumesa un konbérsu?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Si nu kumesa ta pâpia ku un algen sobri un asuntu ki ta interesa-l, nu ta ten más xansi di ten un bon konbérsu ku el.",
        "IMITA JIZUS",
        "3. Ser ikilibradu. Ka bu insisti na kumesa ta pâpia ku un algen sobri un asuntu ki dja bu priparaba. Kumesa ta pâpia sobri algun asuntu ki pesoas sta ta pensa na el oji. Pergunta bu kabésa:",
        "• 'Kuzê ki pesoas sta obi na notísias?'",
        "• 'Sobri kuzê ki nhas vizinhu, kolégas di trabadju ô di skóla sta ta pâpia?'",
        "4. Presta atenson. Pergunta bu kabésa:",
        "• 'Kuzê ki kel algen sta ta faze? Kuzê ki el pode sta ta pensa na el gósi?'",
        "• 'Kuzê ki ropa di kel algen, se aparénsia ô se kaza ta mostra-m sobri se kultura ô kuzê ki el ta kridita na el?'",
        "5. Obi.",
        "• Ka bu pâpia txeu.",
        "• Insentiva kel algen pa pâpia. Sénpri ki ta da, faze perguntas."
      ]
    },
    image: "/images/bible-studies/lesson 1.jpg"
  },
  {
    id: 2,
    title: {
      pt: "Lição 2 — Escutar com Atenção", 
      kea: "Lison 2 — Obí ku atenson"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Sejam rápidos para ouvir, mas lentos para falar.' — Tiago 1:19",
        "O QUE JESUS FEZ",
        "Jesus está conversando com uma mulher samaritana.",
        "1. Leia João 4:7-10, 15-19 e responda:",
        "• Como Jesus mostrou que estava realmente interessado na mulher?",
        "• O que Jesus aprendeu ao ouvir a mulher com atenção?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Quando ouvimos com atenção, mostramos que nos importamos com os outros.",
        "IMITE JESUS",
        "3. Faça perguntas que mostrem interesse genuíno.",
        "4. Evite interromper quando a pessoa estiver falando.",
        "5. Mostre que está prestando atenção com sinais verbais e não verbais."
      ],
      kea: [
        "Konsedju di Bíblia: 'Séu sklubidu pa obi, má ka skis di pâpia.' — Tiagu 1:19",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta pâpia ku un mudjer samaritanu.",
        "1. Lé Juan 4:7-10, 15-19 i responde:",
        "• Modi ki Jizus mostra ma el staba interesa na kel mudjer?",
        "• Kuzê ki Jizus prende óras ki el obi kel mudjer ku atenson?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Óras ki nu obi ku atenson, nu ta mostra ma nu ta importa-nos ku otus.",
        "IMITA JIZUS",
        "3. Faze perguntas ki ta mostra ma bu ta interesa di verdadi.",
        "4. Evita interrompe óras ki algen sta ta pâpia.",
        "5. Mostra ma bu sta ta obi ku sinas verbais i ka verbais."
      ]
    },
    image: "/images/bible-studies/lesson 2.jpg"
  },
  {
    id: 3,
    title: {
      pt: "Lição 3 — Usar a Bíblia de Maneira Eficaz", 
      kea: "Lison 3 — Uza Bíblia di manera efikas"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'A palavra de Deus é viva e exerce poder.' — Heb. 4:12",
        "O QUE JESUS FEZ",
        "Jesus está ensinando as pessoas na sinagoga.",
        "1. Leia Lucas 4:16-21 e responda:",
        "• Como Jesus mostrou que valorizava as Escrituras?",
        "• Como ele aplicou a passagem bíblica às necessidades das pessoas?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. A Bíblia tem poder para mudar vidas quando bem aplicada.",
        "IMITE JESUS",
        "3. Use versículos bíblicos relevantes durante o estudo.",
        "4. Mostre como os princípios bíblicos se aplicam à vida diária.",
        "5. Incentive a leitura pessoal da Bíblia."
      ],
      kea: [
        "Konsedju di Bíblia: 'Palavra di Deus é bibu i ta ten forsa.' — Heb. 4:12",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta inxina pesoas na sinagoga.",
        "1. Lé Lukas 4:16-21 i responde:",
        "• Modi ki Jizus mostra ma el ta daba balor na Skrituras?",
        "• Modi ki el aplikou kel pasajen di Bíblia na nesesidadis di kes algen?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Bíblia ta ten forsa pa muda bida óras ki é uza dretu.",
        "IMITA JIZUS",
        "3. Uza versíkulus di Bíblia ki ta ten a ver ku asuntu.",
        "4. Mostra modi ki prinsípius di Bíblia ta aplika na bida di tudu dia.",
        "5. Enkoraja leitura pessual di Bíblia."
      ]
    },
    image: "/images/bible-studies/lesson 3.jpg"
  },
  {
    id: 4,
    title: {
      pt: "Lição 4 — Fazer Perguntas que Estimulam o Raciocínio", 
      kea: "Lison 4 — Faze perguntas ki ta stimula pensamentu"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'O coração do sábio o faz agir com entendimento.' — Pro. 16:23",
        "O QUE JESUS FEZ",
        "Jesus está ensinando na sinagoga.",
        "1. Leia Marcos 3:1-5 e responda:",
        "• Que perguntas Jesus fez para ajudar as pessoas a raciocinarem?",
        "• Como essas perguntas ajudaram as pessoas a pensar?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Boas perguntas ajudam as pessoas a chegar às suas próprias conclusões.",
        "IMITE JESUS",
        "3. Faça perguntas abertas que não possam ser respondidas com 'sim' ou 'não'.",
        "4. Dê tempo para a pessoa pensar antes de responder.",
        "5. Use perguntas para guiar a pessoa a entender princípios bíblicos."
      ],
      kea: [
        "Konsedju di Bíblia: 'Korason di sabiu ta faze-l pâpia ku sabixensa.' — Pro. 16:23",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta inxina na sinagoga.",
        "1. Lé Markus 3:1-5 i responde:",
        "• Ki perguntas Jizus faze pa djuda pesoas pensa?",
        "• Modi ki kes pergunta li djuda pesoas pensa?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Bon pergunta ta djuda pesoas chega na ses própia konkluzon.",
        "IMITA JIZUS",
        "3. Faze perguntas ki ka ta podé ser respondidu ku 'sin' ô 'não'.",
        "4. Da ténpu pa kel algen pensa antis di responde.",
        "5. Uza perguntas pa orienta kel algen pa intende prinsípius di Bíblia."
      ]
    },
    image: "/images/bible-studies/lesson 4.jpg"
  },
  {
    id: 5,
    title: {
      pt: "Lição 5 — Ser Paciente com os Outros", 
      kea: "Lison 5 — Ten paxénxia ku otus"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Sejam pacientes uns com os outros, com amor.' — Efé. 4:2",
        "O QUE JESUS FEZ",
        "Jesus está falando com Pedro sobre o perdão.",
        "1. Leia Mateus 18:21, 22 e responda:",
        "• O que a pergunta de Pedro revela sobre seu pensamento?",
        "• Como a resposta de Jesus mostrou paciência?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. A paciência ajuda as pessoas a se sentirem amadas e aceitas.",
        "IMITE JESUS",
        "3. Lembre-se que cada pessoa aprende em seu próprio ritmo.",
        "4. Não espere perfeição imediata.",
        "5. Celebre pequenos progressos."
      ],
      kea: [
        "Konsedju di Bíblia: 'Ten paxénxia uns ku otus, ku amor.' — Efé. 4:2",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta pâpia ku Pedru sobri pirdon.",
        "1. Lé Mateus 18:21, 22 i responde:",
        "• Kuzê ki pergunta di Pedru ta mostra sobri se pensamentu?",
        "• Modi ki resposta di Jizus mostra paxénxia?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Paxénxia ta djuda pesoas senti-s amadu i aseitadu.",
        "IMITA JIZUS",
        "3. Lembra ma kada algen ta prende no se própi ritmu.",
        "4. Ka spéra perfeison imediata.",
        "5. Selebra pikinotu prugrésu."
      ]
    },
    image: "/images/bible-studies/lesson 5.jpg"
  },
  {
    id: 6,
    title: {
      pt: "Lição 6 — Ajudar os Outros a Ver o Valor da Bíblia", 
      kea: "Lison 6 — Djuda otus odja balor di Bíblia"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Toda a Escritura é inspirada por Deus e proveitosa.' — 2 Tim. 3:16",
        "O QUE JESUS FEZ",
        "Jesus está explicando as Escrituras para dois discípulos.",
        "1. Leia Lucas 24:25-27, 32 e responda:",
        "• Como Jesus ajudou os discípulos a entenderem as Escrituras?",
        "• Como eles se sentiram depois de entenderem?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Quando as pessoas entendem a Bíblia, seus corações se aquecem.",
        "IMITE JESUS",
        "3. Explique como as profecias se cumpriram.",
        "4. Mostre como a Bíblia se aplica à vida delas.",
        "5. Aponte como os princípios bíblicos trazem benefícios."
      ],
      kea: [
        "Konsedju di Bíblia: 'Tudu Skritura é inspirada pa Deus i ta útil.' — 2 Tim. 3:16",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta splika Skrituras pa dôs disipulu.",
        "1. Lé Lukas 24:25-27, 32 i responde:",
        "• Modi ki Jizus djuda kes disipulu intende Skrituras?",
        "• Modi ki es sintiu dipôs ki es intende?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Óras ki pesoas ta intende Bíblia, ses korason ta fika kenti.",
        "IMITA JIZUS",
        "3. Splika modi ki profésias kumpridu-s.",
        "4. Mostra modi ki Bíblia ta aplika na vida di es.",
        "5. Mostra ki prinsípius di Bíblia ta trás benefísius."
      ]
    },
    image: "/images/bible-studies/lesson 6.jpg"
  },
  {
    id: 7,
    title: {
      pt: "Lição 7 — Ajudar as Pessoas a Tomar Decisões Sábias", 
      kea: "Lison 7 — Djuda pesoas toma disizon sabiu"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'O prudente age com conhecimento.' — Pro. 13:16",
        "O QUE JESUS FEZ",
        "Jesus está aconselhando um jovem rico.",
        "1. Leia Mateus 19:16-22 e responda:",
        "• Como Jesus ajudou o jovem a ver as consequências de suas escolhas?",
        "• Por que essa abordagem foi sábia?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. Boas decisões vêm de se considerar as consequências à luz dos princípios bíblicos.",
        "IMITE JESUS",
        "3. Ajude a pessoa a identificar suas prioridades.",
        "4. Mostre como os princípios bíblicos se aplicam à situação.",
        "5. Incentive a oração por orientação divina."
      ],
      kea: [
        "Konsedju di Bíblia: 'Pesoadu sabiu ta asaia ku sabixensa.' — Pro. 13:16",
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta da konselhu na un jóven riku.",
        "1. Lé Mateus 19:16-22 i responde:",
        "• Modi ki Jizus djuda kel jóven odja konsekuénsia di se eskolhas?",
        "• Pamodi ki kel abordajen foi sabia?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Bon disizon ta ben di konsidera konsekuénsia na lu di prinsípius di Bíblia.",
        "IMITA JIZUS",
        "3. Djuda kel algen identifika se prioridadis.",
        "4. Mostra modi ki prinsípius di Bíblia ta aplika na situason.",
        "5. Enkoraja orason pa orientason divina."
      ]
    },
    image: "/images/bible-studies/lesson 7.jpg"
  },
  {
    id: 8,
    title: {
      pt: "Lição 8 — Mostrar Amor aos Outros", 
      kea: "Lison 8 — Mostra amor pa otus"
    },
    content: {
      pt: [
        "Conselho Bíblico: 'Por meio do amor, sirvam uns aos outros.' — Gál. 5:13",
        "O QUE JESUS FEZ",
        "Jesus está lavando os pés dos discípulos.",
        "1. Leia João 13:12-15 e responda:",
        "• O que Jesus fez para mostrar amor aos seus discípulos?",
        "• Como esse ato demonstrou humildade?",
        "O QUE APRENDEMOS COM JESUS?",
        "2. O amor se mostra por meio de ações, não apenas palavras.",
        "IMITE JESUS",
        "3. Esteja disposto a fazer tarefas humildes para ajudar os outros.",
        "4. Sirva sem esperar nada em troca.",
        "5. Seja sensível às necessidades dos outros."
      ],
      kea: [
        'Konsedju di Bíblia: "Pamodi ki tudu lei ta kumpri-dja na un só palavra: \'Ama bu prósimi sima bu mes.\'" — Gál. 5:14',
        "KUZÊ KI JIZUS FAZE",
        "Jizus sta ta laba pés di disiplus.",
        "1. Lé Juan 13:12-15 i responde:",
        "• Kuzê ki Jizus faze pa mostra amor pa ses disipulus?",
        "• Modi ki kel atu mostra umildadi?",
        "KUZÊ KI NU TA PRENDE KU JIZUS?",
        "2. Amor ta mostra-s pa meio di ason, ka sô pa meio di palavras.",
        "IMITA JIZUS",
        "3. Sta dispostu pa faze tarifa umilde pa djuda otus.",
        "4. Sirvi ka spera nada di troku.",
        "5. Sibi nesesidadis di otus."
      ]
    },
    image: "/images/bible-studies/lesson 8.jpg"
  },
  {
    id: 9,
    title: {
      pt: "Lição 9 — Ajudar as Pessoas a Progredir para o Batismo", 
      kea: "Lison 9 — Djuda pesoas progredi pa batismu"
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
      kea: [
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
    image: "/images/bible-studies/lesson 9.jpg"
  },
  {
    id: 10,
    title: {
      pt: "Lição 10 — Ajudar as Pessoas a se Tornarem Discípulos", 
      kea: "Lison 10 — Djuda pesoas bira disiplus"
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
      kea: [
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
        "5. Ora pa bu ten un bon atitudi. Pidi Jeová pa djuda-u ka dizisti di bu studanti, mésmu ki el ka sta ta studa tudu simana, ô si el sta ku difikuldadi na aplika kuzê ki el sta ta prende. (Flp. 2:13) Seu studanti pode ter boas kualidadi, pur isu ora ta pidi ajuda pa bu konsentra na se kualidadis."
      ]
    },
    image: "/images/bible-studies/lesson 10.jpg"
  },
  {
    id: 11,
    title: {
      pt: "Lição 11 — Ensinar de Maneira Simples",
      kea: "Lison 11 — Inxina di un manera sinplis"
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
      kea: [
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
    image: "/images/bible-studies/lesson 11.jpg"
  },
  {
    id: 12,
    title: {
      pt: "Lição 12 — Mostrar Coragem",
      kea: "Lison 12 — Mostra koraji"
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
      kea: [
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
    image: "/images/bible-studies/lesson 12.jpg"
  },
  {
    id: 13,
    title: {
      pt: "Apêndice 1 — Verdades da Bíblia que Gostamos de Ensinar",
      kea: "Apéndisi 1 — Verdadis di Bíblia ki nu gosta di inxina"
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
      kea: [
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
        "8. Maridu ku mudjer debe ser lial pa kunpanheru. — Mal. 2:16; Mat. 19:4-6, 9; Heb. 13:4.",
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
    image: "/images/bible-studies/appendice 1.jpg"
  },
  {
    id: 14,
    title: {
      pt: "Apêndice 2 — Você Deve Parar a Conversa?",
      kea: "Apéndisi 2 — Bu debe para kel konbérsu?"
    },
    content: {
      pt: [
        "Quando alguém nos faz uma pergunta com sinceridade ou não concorda conosco, ficamos felizes em continuar falando com ele. Queremos falar com as pessoas que podem ter uma 'boa atitude para ganhar vida eterna'. — Atos 13:48",
        "Mas, e se alguém está chateado, quer discutir ou não quer falar naquele momento? Com calma e jeito você pode parar a conversa. (Pro. 17:14) Tente mostrar respeito e bondade, assim para que a pessoa esteja disposta a falar conosco em outro dia. — 1 Ped. 2:12"
      ],
      kea: [
        "Óras ki un algen ta faze-nu un pergunta ku sinseridadi ô el ka ta konkorda ku nos, nu ta fika kontenti di kontinua ta pâpia ku el. Nu krê pâpia ku kes algen ki pode ten un 'bon atitudi pa ganha vida pa tudu ténpu'. — Atus 13:48",
        "Má, i si un algen sta xatiadu, krê diskuti ô el ka krê pâpia na kel óra? Ku kalma i ku jetu bu pode para kel konbérsu. (Pro. 17:14) Tenta mostra ruspetu i bondadi, asi pa kel algen sta dispostu na pâpia ku nos na un otu dia. — 1 Ped. 2:12"
      ]
    },
    image: "/images/bible-studies/appendice 2.jpg"
  },
  {
    id: 15,
    title: {
      pt: "Apêndice 3 — Como Usar 'Viva Feliz Para Sempre!' para Fazer Estudos Bíblicos",
      kea: "Apéndisi 3 — Modi ki uza 'Vive filís pa tudu ténpu!' pa faze studus di Bíblia"
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
      kea: [
        "Irmons faze txeu orason i es djobe ku kuidadu ki informasons ki es ta poba na livru Vive filís pa tudu ténpu!. Pa bu uza es publikason midjór, sigi kes instruson ki sta dibaxu óras ki bu ta faze un studu di Bíblia.",
        "ANTIS DI STUDU",
        "1. Pripara dretu. Óras ki bu sta ta pripara, pensa na kuzê ki bu studanti meste, pensa na se situason i na kuzê ki el ta kridita na el. Pensa na kes kuza ki pode ser difísil pa el intende ô pa el aplika. Djobe modi ki kes informason ki sta na párti 'Djobe más' pode djuda bu studanti, i sta prontu pa uza-s duránti studu, si meste.",
        "DURÁNTI STUDU",
        "2. Kumesa i tirmina studu ku orason si bu studanti ta konkorda.",
        "3. Toma kuidadu pa bu ka pâpia dimás. Konsentra na kes informason di livru i dexa bu studanti pâpia.",
        "4. Óras ki bu ta kumesa un párti di livru, lé kes informason ki sta distakadu na komésu di kel párti, i pâpia sobri téma di algumas di kes lison.",
        "5. Óras ki bu ta tirmina un párti, uza perguntas di rezumu di kel párti, pa djuda bu studanti lenbra di kes verdadi ki el prende.",
        "6. Óras ki bu ta studa kada lison ku bu studanti:",
        "• Lé kes parágrafu.",
        "• Lé tudu kes testu di Bíblia ki sta skrebedu 'Lé'.",
        "• Lé otus testu di Bíblia si meste.",
        "• Mostra tudu kes vídiu ki sta skrebedu 'Odja' (si ta da).",
        "• Faze studanti tudu kes pergunta.",
        "• Pidi bu studanti pa odja kes imajen na kel párti 'Sabe más' i pidi-l pa el pâpia sobri es.",
        "• Uza kuadru 'Experimente fazer isto' pa djuda bu studanti alkansa se métas. Bu pode inkoraja-l pa el poi kel méta ki sta la, pa el skrebe otu méta ô pa el uza tudu dôs.",
        "• Pergunta bu studanti si kantu el staba ta pripara se studu, si el odja algun artigu ô vídiu di párti 'Djobe más' ki el gosta más txeu.",
        "• Tenta studa un lison interu na kada studu.",
        "DIPÔS DI STUDU",
        "7. Kontinua ta pensa na bu studanti. Faze orason ta pidi Jeová pa el abênsua prugrésu ki bu studanti sta ta faze i pa el da-u sabedoria pa bu kontinua ta djuda-l."
      ]
    },
    image: "/images/bible-studies/appendice 3.jpg"
  }
];


const BibleStudiesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);
  // isModalOpen et setIsModalOpen supprimés
  
  const toggleStudy = (id: number) => {
    if (expandedStudy === id) {
      setExpandedStudy(null);
    } else {
      setExpandedStudy(id);
    }
  };
  
  return (
    <div className="page-transition min-h-screen bg-gradient-to-b from-muted to-background py-4"> {/* Ajout de py-4 */}
      <div className="container mx-auto px-3 sm:px-4"> {/* px-0.5 à px-3 sm:px-4 */}
        <div className="text-center mb-4 sm:mb-6"> {/* mb-2 à mb-4 sm:mb-6 */}
          <div className="flex items-center justify-center mb-1"> {/* mb-0.5 à mb-1 */}
            <Heart className="w-5 h-5 text-primary-dark mr-1.5" /> {/* w-2.5 h-2.5 à w-5 h-5, mr-0.5 à mr-1.5 */}
            <h1 className="text-xl sm:text-2xl font-bold text-foreground"> {/* text-xs à text-xl sm:text-2xl */}
              {t('bibleStudies.titulo')}
            </h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto"> {/* text-xs à text-sm sm:text-base, mt-0 enlevé */}
            {t('bibleStudies.subtitulo')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto"> {/* max-w-6xl à max-w-3xl, mt-0 enlevé */}
          {[...bibleStudies].sort((a, b) => a.id - b.id).map((study: BibleStudy) => (
            <div 
              key={study.id} 
              className="mb-3 sm:mb-4 bg-card rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg" // rounded-xl à rounded-lg, shadow-lg à shadow-md, hover:shadow-xl à hover:shadow-lg
            >
              <div className="cursor-pointer"
                onClick={() => toggleStudy(study.id)}
              >
                <div className="relative">
                  <div className="w-full aspect-video sm:aspect-[2.5/1] overflow-hidden"> {/* h-28 remplacé par aspect-video sm:aspect-[2.5/1] */}
                    <OptimizedImage 
                      src={study.image} 
                      alt={study.title[language]} 
                      className="w-full h-full object-cover"
                      width={800} // Ces valeurs sont pour l'optimisation
                      height={320} // (Ratio 2.5:1 pour 800px de large)
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 sm:p-4"> {/* p-2 à p-3 sm:p-4 */}
                    <div className="text-white">
                      <h2 className="text-base sm:text-lg font-bold text-white [text-shadow:_0_1px_0_rgb(0,0,0,0.8),_1px_0_0_rgb(0,0,0,0.8),_-1px_0_0_rgb(0,0,0,0.8),0_-1px_0_rgb(0,0,0,0.8)] leading-tight"> {/* text-[16px] à text-base sm:text-lg, font-extrabold à font-bold */}
                        {study.title[language]}
                      </h2>
                    </div>
                  </div>
                </div>
                
                <div className="px-3 py-2 sm:px-4 sm:py-3 flex justify-between items-center text-sm"> {/* text-[13px] à text-sm, padding ajusté */}
                  <span className="text-card-foreground font-medium">
                    {expandedStudy === study.id ? t('common.close') : t('common.next')}
                  </span>
                  {expandedStudy === study.id ? (
                    <ChevronUp size={20} className="text-primary-dark" /> /* Taille icône augmentée */
                  ) : (
                    <ChevronDown size={20} className="text-primary-dark" /> /* Taille icône augmentée */
                  )}
                </div>
              </div>
              
              {expandedStudy === study.id && (
                <div className="px-3 sm:px-4 pb-3 sm:pb-4"> {/* px-1 pb-0.5 à px-3 sm:px-4 pb-3 sm:pb-4 */}
                  <div className="border-t border-gray-200 pt-3 sm:pt-4"> {/* pt-0.5 à pt-3 sm:pt-4 */}
                    <div className="mb-3">
                      <h3 className="text-sm sm:text-base font-bold mb-2 text-primary-dark"> {/* text-[14px] à text-sm sm:text-base */}
                        {t('bibleStudies.conteudoDoEstudo')}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed"> {/* text-[13px] à text-sm, space-y-2 à space-y-1.5 */}
                        {study.content[language].map((point: string, index: number) => (
                          <li key={index} className="text-card-foreground">
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
        {/* La section "Como Estudar a Bíblia" et "Solicitar um Estudo Bíblico" a été supprimée. */}
      </div>
    </div>
  );
};

export default BibleStudiesPage;
