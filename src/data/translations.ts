import { Translations } from '@/types/translations';

// As chaves principais foram traduzidas para o português
// Os comentários também foram traduzidos ou removidos se redundantes
const translations: Translations = {
  // Comum
  carregando: { // loading
    pt: 'Carregando...',
    cv: 'Ta karga...'
  },
  
  // Notas
  notas: {
    pt: 'Notas',
    cv: 'Notas'
  },
  notasGerais: {
    pt: 'Suas notas gerais...',
    cv: 'Notas gerais...'
  },
  
  // Navegação
  navegacao: { // nav
    inicio: { // home
      pt: 'Início',
      cv: 'Inísiu'
    },
    predicacao: { // preaching
      pt: 'Pregação',
      cv: 'Prédika'
    },
    gramaticaDicionario: { // grammarDictionary
      pt: 'Gramática & Dicionário',
      cv: 'Gramátika & Disionáriu'
    },
    gramatica: { // grammar
      pt: 'Gramática',
      cv: 'Gramátika'
    },
    licoesExercicios: { // lessonsExercises
      pt: 'Lições & Exercícios',
      cv: 'Lisons & Izersísiu'
    },
    estudosBiblicos: { // bibleStudies
      pt: 'Estudos Bíblicos',
      cv: 'Studus Bíblikus'
    },
    sobre: { // about
      pt: 'Sobre',
      cv: 'Konsernu'
    },
    notas: { // Nouvelle clé pour la page Notes
      pt: 'Notas',
      cv: 'Apontamentus' // Mis à jour
    },
    notasGerais: {
      pt: 'Notas Gerais',
      cv: 'Apontamentus Jeral'
    },
    alunos: {
      pt: 'Alunos',
      cv: 'Alunus'
    },
    pessoasInteressadas: {
      pt: 'Pessoas Interessadas',
      cv: 'Pesoas Interesadu'
    },
    adicionarPessoaInteressada: {
      pt: 'Adicionar Pessoa Interessada',
      cv: 'Adisiona Pesoa Interesadu'
    },
    territorio: {
      pt: 'Território',
      cv: 'Teritóriu'
    },
    adicionarAluno: {
      pt: 'Adicionar Aluno',
      cv: 'Adisiona Alunu'
    },
    nome: {
      pt: 'Nome',
      cv: 'Nomi'
    },
    telefone: {
      pt: 'Telefone',
      cv: 'Telifoni'
    },
    // email já existe em iu.email ou similar, mas pode ser específico aqui si besoin
    // iu.email: { pt: 'Email', cv: 'Email' }
    email: { // Ajouté pour contexte spécifique si iu.email n'est pas utilisé
      pt: 'Email',
      cv: 'Email'
    },
    mudarParaCrioulo: { // changeToCrioulo
      pt: 'Mudar para Crioulo',
      cv: 'Muda pa Kriolu'
    },
    mudarParaPortugues: { // changeToPortuguese
      pt: 'Mudar para Português',
      cv: 'Muda pa Português'
    },
    menu: {
      abrir: { // open
        pt: 'Abrir menu',
        cv: 'Abre menu'
      },
      fechar: { // close
        pt: 'Fechar menu',
        cv: 'Fecha menu'
      }
    },
    timer: {
      pt: "Cronômetro",
      cv: "Kronometru"
    },
    calendar: {
      pt: "Calendário",
      cv: "Kalendariu"
    },
  },
  
  // Traduções Comuns
  comum: { // common
    favoritos: { // favorites
      pt: 'Favoritos',
      cv: 'Favoritus'
    },
    limparPesquisa: { // clearSearch
      pt: 'Limpar pesquisa',
      cv: 'Limpá busca'
    },
    removerDosFavoritos: { // removeFromFavorites
      pt: 'Remover dos favoritos',
      cv: 'Tira di favoritus'
    },
    adicionarAosFavoritos: { // addToFavorites
      pt: 'Adicionar aos favoritos',
      cv: 'Adisiona na favoritus'
    },
    pesquisarLicoes: { // searchLessons
      pt: 'Pesquisar lições...',
      cv: 'Buska lisons...'
    },
    selecionarLicao: { // selectLesson
      pt: 'Selecione uma lição',
      cv: 'Seklisiona un lison'
    },
    traducao: { // translation
      pt: 'Tradução',
      cv: 'Traduson'
    },
    exemplo: { // example
      pt: 'Exemplo',
      cv: 'Ezemplu'
    },
    sinonimos: { // synonyms
      pt: 'Sinônimos',
      cv: 'Sinônimus'
    }
  },
  
  // Dicionário
  dicionario: { // dictionary
    pesquisarPalavras: { // searchWords
      pt: 'Pesquisar palavras...',
      cv: 'Buska palavras...'
    },
    titulo: { // title
      pt: 'Dicionário',
      cv: 'Disionáriu'
    },
    todos: {
      pt: 'Todos',
      cv: 'Tudu'
    },
    palavrasNoDicionario: {
      pt: 'palavras no dicionário',
      cv: 'palavras na disionáriu'
    },
    nenhumaPalavraEncontrada: {
      pt: 'Nenhuma palavra encontrada.',
      cv: 'Ka ten palavra atxadu.'
    },
    adicionarAosFavoritos: {
      pt: 'Adicionar aos favoritos',
      cv: 'Adisiona na favoritus'
    },
    removerDosFavoritos: {
      pt: 'Remover dos favoritos',
      cv: 'Tira di favoritus'
    },
    procurarNoDicionario: {
      pt: 'Procurar no dicionário',
      cv: 'Buska na disionáriu'
    },
    suggestionsIA: {
      pt: '💡 Suggestions IA pour prédication',
      cv: '💡 Sugestons IA pa prédika'
    }
  },
  
  // Pesquisa
  pesquisa: { // search
    resultados: { // results
      pt: 'resultados para',
      cv: 'rezultadu pa'
    },
    placeholder: {
      pt: 'Digite para pesquisar...',
      cv: 'Skrebe pa buska...'
    },
    pesquisando: { // searching
      pt: 'Pesquisando',
      cv: 'Ta buska'
    },
    semResultados: { // noResults
      pt: 'Nenhum resultado encontrado',
      cv: 'Nada atxadu'
    }
  },
  
  // Página de Gramática e Dicionário (seção específica, diferente de navegacao.gramaticaDicionario)
  paginaGramaticaDicionario: { // grammarDictionary (page specific section)
    titulo: { // title
      pt: 'Gramática & Dicionário',
      cv: 'Gramátika & Disionáriu'
    }
  },
  
  // Favoritos
  favoritos: { // favorites (page specific section)
    tituloVazio: { // emptyTitle
      pt: 'Nenhum favorito',
      cv: 'Nada favoritu'
    },
    descricaoVazia: { // emptyDescription
      pt: 'Adicione palavras aos seus favoritos clicando na estrela ao lado de cada palavra.',
      cv: 'Adisiona palavras na bu lista di favoritu ku klik na strela li' 
    },
    procurarNoDicionario: { // browseDictionary
      pt: 'Procurar no dicionário',
      cv: 'Buska na disionáriu'
    }
  },
  
  // Página Inicial
  paginaInicial: { // home
    titulo: { // title
      pt: 'Aprenda Cabo-verdiano para Pregação',
      cv: 'Prendi Kriolu pa Prédika'
    },
    recurso4Desc: {
      pt: 'Acompanhe suas notas e atividades de pregação',
      cv: 'Kontrola bu notis i atividadis di prédika'
    },
    subtitulo: { // subtitle
      pt: 'Um recurso para Testemunhas de Jeová',
      cv: 'Un rekursu pa Testemunhas di Jeová'
    },
    introducao: { // intro
      pt: 'Este site foi criado para ajudar as Testemunhas de Jeová a aprender o crioulo cabo-verdiano para usar na pregação. Aqui você encontrará apresentações, gramática, vocabulário e exercícios práticos.',
      cv: 'Es site foi kriadu pa djuda Testemunhas di Jeová a prendi kriolu kabuverdianu pa uza na prédika. Li bu ta atxa apresentasons, gramátika, vokabuláriu y izersísiu prátiku.'
    },
    botaoComecar: { // startButton
      pt: 'Começar a Aprender',
      cv: 'Kumesa Prendi'
    },
    tituloRecursos: { // featuresTitle
      pt: 'Recursos Disponíveis',
      cv: 'Rekursus Dispunível'
    },
    recurso1Titulo: { // feature1Title
      pt: 'Apresentações para Pregação',
      cv: 'Apresentasons pa Prédika'
    },
    recurso1Desc: { // feature1Desc
      pt: '10 apresentações baseadas em publicações da jw.org para usar na pregação.',
      cv: '10 apresentason baziadu na publikasons di jw.org pa uza na prédika.'
    },
    recurso2Titulo: { // feature2Title
      pt: 'Gramática & Dicionário',
      cv: 'Gramátika & Disionáriu'
    },
    recurso2Desc: { // feature2Desc
      pt: 'Aprenda a estrutura básica da língua e amplie seu vocabulário.',
      cv: 'Prendi strutura báziku di língua y aumenta bu vokabuláriu.'
    },
    recurso3Titulo: { // feature3Title (agora Estudos Bíblicos)
      pt: 'Estudos Bíblicos', // Atualizado
      cv: 'Studus Bíblikus' // Atualizado
    },
    recurso3Desc: { // feature3Desc (agora Estudos Bíblicos)
      pt: 'Recursos e guias para seus estudos bíblicos pessoais.', // Atualizado
      cv: 'Rekursus y gias pa bus studus bíblikus pesoal.' // Atualizado
    },
    recurso5Desc: {
      pt: 'Aprenda crioulo para pregar de porta em porta',
      cv: 'Prendi kriolu pa prega di porta na porta'
    },
    recurso6Desc: {
      pt: 'Configure notificações e preferências',
      cv: 'Konfigura notifikasons i preferensias'
    },
    textoDia: {
      pt: 'Texto do Dia',
      cv: 'Téstu di Dia'
    },
    descricao: {
      pt: 'Ferramentas, lições e recursos essenciais para servir no ministério em Cabo Verde.',
      cv: 'Ferramentas, lisons i rekursus esensiais pa servi na ministériu na Kabu Verdi.'
    },
    galeriaLegenda: {
      pt: 'Momentos do ministério',
      cv: 'Momentus di ministériu'
    },
    galeriaTitulo: {
      pt: 'Cabo Verde',
      cv: 'Kabu Verdi'
    },
    salmo: {
      pt: 'Salmo 83:18',
      cv: 'Salmu 83:18'
    },
    versiculo: {
      pt: '"Para que as pessoas saibam que tu, cujo nome é Jeová, só tu és o Altíssimo sobre toda a terra."',
      cv: '"Pa ki bu povu konxe ki bo, ku nomi é Jeová, só bo é Altísimu riba tudu térra."'
    }
  },
  
  // Página de Pregação
  predicacao: { // preaching
    titulo: { // title
      pt: 'Apresentações para Pregação',
      cv: 'Apresentasons pa Prédika'
    },
    subtitulo: { // subtitle
      pt: 'Use estas apresentações adaptadas de jw.org para a pregação em cabo-verdiano',
      cv: 'Uza kes apresentason adaptadu di jw.org pa prédika na kriolu'
    },
    tituloApresentacao: { // presentationTitle
      pt: 'Apresentação',
      cv: 'Apresentason'
    },
    introducao: { // introduction
      pt: 'Introdução',
      cv: 'Introduson'
    },
    textoBiblico: { // scripture
      pt: 'Texto Bíblico',
      cv: 'Téstu Bíbliku'
    },
    pergunta: { // question
      pt: 'Pergunta',
      cv: 'Purgunta'
    },
    explicacao: { // explanation
      pt: 'Explicação',
      cv: 'Splikason'
    },
    conclusao: { // conclusion
      pt: 'Conclusão',
      cv: 'Konkluson'
    },
    botaoPraticar: { // practiceButton
      pt: 'Praticar',
      cv: 'Pratika'
    },
    dicasPratica: {
      pt: 'Dicas para prática:',
      cv: 'Dikas pa prátika:'
    },
    praticaIntroducao: {
      pt: 'Pratique a introdução em voz alta várias vezes.',
      cv: 'Pratika introduson en voz alta várias vez.'
    },
    praticaMemorizar: {
      pt: 'Memorize o texto bíblico chave para citá-lo com confiança.',
      cv: 'Memoriza téstu bíbliku chavi pa sita-l ku konfiansa.'
    },
    praticaPergunta: {
      pt: 'Ensaie como fazer a pergunta de forma natural.',
      cv: 'Ensaia modi ki ta faze pergunta di forma natural.'
    },
    praticaExplicacao: {
      pt: 'Adapte a explicação ao seu próprio estilo, mantendo os pontos principais.',
      cv: 'Adapta splikason pa bu própriu stilu, mantendo pontos prinsipais.'
    },
    exemploDialogo: {
      pt: 'Exemplo de diálogo:',
      cv: 'Izemplu di diálogu:'
    },
    voce: {
      pt: 'Você:',
      cv: 'Bo:'
    },
    morador: {
      pt: 'Morador:',
      cv: 'Moradu:'
    },
    olaPossoAjudar: {
      pt: 'Olá, posso ajudar?',
      cv: 'Ola, ka mi djuda?'
    },
    nuncaPensei: {
      pt: 'Nunca pensei nisso. O que a Bíblia diz?',
      cv: 'Nunka pensa na kel-li. Kusa ki Bíblia ta fla?'
    },
    iniciarPratica: {
      pt: 'Iniciar Prática',
      cv: 'Kumisa Prátika'
    }
  },
  
  // Seção de Gramática (dentro da página Gramática & Dicionário)
  gramaticaSecao: { // grammar (section within GrammarDictionaryPage)
    titulo: { // title (já existe em navegacao.gramaticaDicionario, mas pode ser específico aqui)
      pt: 'Gramática & Dicionário',
      cv: 'Gramátika & Disionáriu'
    },
    tituloGramatica: { // grammarTitle
      pt: 'Gramática',
      cv: 'Gramátika'
    },
    tituloDicionario: { // dictionaryTitle
      pt: 'Dicionário',
      cv: 'Disionáriu'
    },
    placeholderPesquisa: { // searchPlaceholder
      pt: 'Pesquisar palavra...',
      cv: 'Piskiza palavra...'
    },
    semResultados: { // noResults
      pt: 'Nenhum resultado encontrado',
      cv: 'Ninhun resultadu atxadu'
    },
    introducaoGramatica: { // grammarIntro
      pt: 'Aprenda as regras básicas da gramática cabo-verdiana. Cada lição inclui exemplos e exercícios práticos.',
      cv: 'Prendi regras báziku di gramátika kabuverdianu. Kada lison ta inklui izemplu y izersísiu prátiku.'
    },
    licao: { // lesson
      pt: 'Lição',
      cv: 'Lison'
    },
    exemplo: { // example (já existe em comum.exemplo, mas pode ser específico aqui)
      pt: 'Exemplo',
      cv: 'Ezemplu'
    }
  },
  
  // Página de Lições e Exercícios

  // Rodapé
  rodape: { // footer
    descricao: { // description
      pt: 'Recursos para aprender crioulo cabo-verdiano e melhorar suas habilidades de pregação.',
      cv: 'Rekursus pa prendi kriolu kabuverdianu y melhora bu abilidadis di prédika.'
    },
    newsletter: {
      pt: 'Inscreva-se para receber atualizações',
      cv: 'Inskrebe-bo pa resebe atualizasons'
    },
    inscrever: { // subscribe
      pt: 'Inscrever',
      cv: 'Inskrebe'
    },
    direitos: { // rights
      pt: 'Todos os direitos reservados',
      cv: 'Tudu dretus rezervadu'
    },
    privacidade: { // privacy
      pt: 'Privacidade',
      cv: 'Privasidadi'
    },
    termos: { // terms
      pt: 'Termos',
      cv: 'Termus'
    },
    cookies: {
      pt: 'Cookies',
      cv: 'Kukis'
    },
    recursosExternos: {
      jwOrg: {
        pt: 'jw.org/kea',
        cv: 'jw.org/kea'
      },
      jwLibrary: {
        pt: 'JW Library',
        cv: 'JW Library'
      },
      jwBroadcasting: {
        pt: 'JW Broadcasting',
        cv: 'JW Broadcasting'
      }
    }
  },
  
  // Página de Estudos Bíblicos
  estudosBiblicosPagina: { // bibleStudies (page specific section)
    titulo: { // title
      pt: 'Estudos Bíblicos',
      cv: 'Studus Bíblikus'
    },
    subtitulo: { // subtitle
      pt: 'Recursos para estudos bíblicos em cabo-verdiano',
      cv: 'Rekursus pa studus bíblikus na kriolu'
    },
    estudo: { // study
      pt: 'Estudo',
      cv: 'Studu'
    },
    duracao: { // duration
      pt: 'Duração',
      cv: 'Durason'
    },
    minutos: {
      pt: 'minutos',
      cv: 'minutu'
    },
    solicitarEstudo: { // requestStudy
      pt: 'Solicitar Estudo',
      cv: 'Sulisita Studu'
    },
    comoComecar: { // howToStart
      pt: 'Como Começar',
      cv: 'Modi ki Kumesa'
    },
    novoNoEstudo: { // newToStudy
      pt: 'Novo nos Estudos Bíblicos?',
      cv: 'Nobu na Studus Bíblikus?'
    },
    horarioEstudos: { // schedule
      pt: 'Horário dos Estudos',
      cv: 'Oráriu di Studus'
    }
  },
  
  // Elementos Comuns da IU
  iu: { // ui
    carregando: { // loading (já existe em comum.carregando, mas pode ser específico para IU)
      pt: 'Carregando...',
      cv: 'Ta karrega...'
    },
    cronometro: {
      pt: 'Cronômetro',
      cv: 'Kronometru'
    },
    calendario: {
      pt: 'Calendário',
      cv: 'Kalendariu'
    },
    estatisticas: {
      pt: 'Estatísticas',
      cv: 'Estatistika'
    },
    pessoasInteressadas: {
      pt: 'Pessoas Interessadas',
      cv: 'Pesoas Interesadas'
    },
    mudarIdioma: { // changeLanguage
      pt: 'Mudar Idioma',
      cv: 'Muda Língua'
    },
    baixar: { // download
      pt: 'Baixar',
      cv: 'Baixa'
    },
    proximo: { // next
      pt: 'Próximo',
      cv: 'Prósimu'
    },
    anterior: { // previous
      pt: 'Anterior',
      cv: 'Anterior'
    },
    fechar: { // close (já existe em navegacao.menu.fechar, mas pode ser genérico aqui)
      pt: 'Fechar',
      cv: 'Fitxa'
    },
    enviar: { // submit
      pt: 'Enviar',
      cv: 'Manda'
    },
    pesquisar: { // search (genérico)
      pt: 'Pesquisar',
      cv: 'Piskiza'
    },
    cancelar: { // cancel
      pt: 'Cancelar',
      cv: 'Kanboka'
    },
    salvar: { // save
      pt: 'Salvar',
      cv: 'Salva'
    },
    excluir: { // delete
      pt: 'Excluir',
      cv: 'Elimina'
    },
    confirmar: { // confirm
      pt: 'Confirmar',
      cv: 'Konfirma'
    },
    voltar: { // back
      pt: 'Voltar',
      cv: 'Volta'
    },
    selecionar: { // select
      pt: 'Selecionar',
      cv: 'Sielesiona'
    },
    visualizar: { // view
      pt: 'Visualizar',
      cv: 'Vizualiza'
    },
    editar: { // edit
      pt: 'Editar',
      cv: 'Edita'
    },
    adicionar: { // add
      pt: 'Adicionar',
      cv: 'Adisiona'
    },
    remover: { // remove
      pt: 'Remover',
      cv: 'Tira'
    },
    imprimir: { // print
      pt: 'Imprimir',
      cv: 'Imprime'
    },
    baixarPdf: { // downloadPdf
      pt: 'Baixar PDF',
      cv: 'Baixa PDF'
    },
    compartilhar: { // share
      pt: 'Compartilhar',
      cv: 'Partilha'
    },
    ajuda: { // help
      pt: 'Ajuda',
      cv: 'Ajuda'
    },
    configuracoes: { // settings
      pt: 'Configurações',
      cv: 'Konfigurason'
    },
    sair: { // logout
      pt: 'Sair',
      cv: 'Sai'
    },
    tema: { // theme
      pt: 'Tema',
      cv: 'Tema',
      // Sous-clés pour ThemeToggle
      mudar: { 
        pt: 'Mudar tema', 
        cv: 'Muda tema' 
      },
      claro: { 
        pt: 'Claro', 
        cv: 'Klaru' 
      },
      sombrio: { 
        pt: 'Escuro', // "Sombrio" est moins courant que "Escuro" pour le thème sombre en PT
        cv: 'Skuru' 
      },
      sistema: { 
        pt: 'Sistema', 
        cv: 'Sistema' 
      }
    },
    idioma: { // language
      pt: 'Idioma',
      cv: 'Língua'
    },
    adicionarPessoaInteressada: {
      pt: 'Adicionar Pessoa Interessada',
      cv: 'Adisiona Pesoa Interesadu'
    },
    territorio: {
      pt: 'Território',
      cv: 'Territoriu'
    },
    digiteNotas: {
      pt: 'Digite suas notas...',
      cv: 'Skrebe bus notas...'
    },
    start: {
      pt: "Iniciar", 
      cv: "Kumisa"
    },
    pause: {
      pt: "Pausar",
      cv: "Para"
    },
    reset: {
      pt: "Zerar",
      cv: "Limpu"
    },
    lap: {
      pt: "Volta",
      cv: "Volta"
    },
    laps: {
      pt: "Voltas",
      cv: "Voltas"
    },
    saveSession: {
      pt: "Salvar Sessão",
      cv: "Salva Sesaun"
    },
    history: {
      pt: "Histórico",
      cv: "Istoriku"
    },
    bestShort: {
      pt: "Melhor tempo (curto)",
      cv: "Tempu mas kurta"
    },
    bestLong: {
      pt: "Melhor tempo (longo)", 
      cv: "Tempu mas longu"
    },
    average: {
      pt: "Média",
      cv: "Mèdia"
    },
    timeline: {
      pt: "Evolução Temporal",
      cv: "Evolusaun Tempu"
    },
    duration: {
      pt: "Duração (HH:MM:SS)", 
      cv: "Durasaun (HH:MM:SS)"
    },
    addHours: {
      pt: "Adicionar Horas",
      cv: "Adisiona Ora"
    },
    preachingHours: {
      pt: "Horas de Pregação",
      cv: "Ora Predikason"
    },
    studyHours: {
      pt: "Horas de Estudo", 
      cv: "Ora Studu"
    },
    notes: {
      pt: "Notas",
      cv: "Notas"
    },
    save: {
      pt: "Salvar",
      cv: "Salva"
    },
    cancel: {
      pt: "Cancelar",
      cv: "Kansela"
    },
    addSession: {
      pt: "Adicionar Sessão",
      cv: "Adisiona Sesaun"
    },
    monthStats: {
      pt: "Estatísticas do Mês",
      cv: "Estatistika Mensal"
    },
    preaching: {
      pt: "Prédicação",
      cv: "Predikason"
    },
    study: {
      pt: "Estudo",
      cv: "Studu"
    },
    totalHours: {
      pt: "Total Horas",
      cv: "Total Ora"
    }
  },

  configuracoes: {
    infoApp: {
      pt: 'Informações da Aplicação',
      cv: 'Informasons di Aplikason'
    },
    versao: {
      pt: 'Versão',
      cv: 'Versan'
    },
    desenvolvidoPor: {
      pt: 'Desenvolvido por',
      cv: 'Dizenvolvidu por'
    }
  },

  licoes: {
    titulo: { pt: 'Lições & Exercícios', cv: 'Lisons & Izersísiu' },
    subtitulo: { pt: 'Aprenda e pratique com exercícios interativos', cv: 'Prendi y pratika ku izersísiu interativu' },
    tituloQuiz: { pt: 'Quiz', cv: 'Quiz' },
    tituloCorrespondencia: { pt: 'Exercício de Correspondência', cv: 'Izersísiu di Korespondensia' },
    tituloSimulacao: { pt: 'Simulação de Conversa', cv: 'Simulason di Konversa' },
    iniciarExercicio: { pt: 'Iniciar Exercício', cv: 'Inisia Izersísiu' },
    correto: { pt: 'Correto!', cv: 'Sertu!' },
    incorreto: { pt: 'Incorreto! Tente novamente.', cv: 'Inkoretu! Tenta di novu.' },
    pontuacao: { pt: 'Pontuação', cv: 'Pontuason' },
    licoes: { pt: 'Lições', cv: 'Lisons' },
    completas: { pt: 'Completas', cv: 'Kompletu' },
    categorias: { pt: 'Categorias', cv: 'Kategorias' },
    nivel: { pt: 'Nível', cv: 'Nível' },
    todas: { pt: 'Todas', cv: 'Tudu' },
    todosNiveis: { pt: 'Todos os Níveis', cv: 'Tudu Nível' },
    iniciante: { pt: 'Iniciante', cv: 'Inisiante' },
    intermediario: { pt: 'Intermediário', cv: 'Intermediáriu' },
    avancado: { pt: 'Avançado', cv: 'Avansadu' },
    nenhumaLicao: { pt: 'Nenhuma lição encontrada com os filtros selecionados.', cv: 'Nenhuma lison atxadu ku es filtru.' },
    continueAprendendo: { pt: 'Continue Aprendendo!', cv: 'Kontinua Prendendu!' },
    cadaLicao: { pt: 'Cada lição o aproxima de pregar eficazmente em crioulo cabo-verdiano', cv: 'Kada lison bu txiga mas serka di prega efikasimenti na kriolu kabuverdianu' },
    conteudo: { pt: 'Conteúdo', cv: 'Kontedu' },
    exemplos: { pt: 'Exemplos', cv: 'Ezemplu' },
    dicasPraticas: { pt: '💡 Dicas Práticas', cv: '💡 Dikas Prátiku' },
    general: { pt: 'Geral', cv: 'Jeral' },
    pronouns: { pt: 'Pronomes', cv: 'Pronomis' },
    verbos: { pt: 'Verbos', cv: 'Berbus' },
    sintaxe: { pt: 'Sintaxe', cv: 'Sintaxi' },
    morfologia: { pt: 'Morfologia', cv: 'Morfolojia' },
    vocabulario: { pt: 'Vocabulário', cv: 'Vokabuláriu' },
    fonologia: { pt: 'Fonologia', cv: 'Fonolojia' },
    frases: { pt: 'Frases', cv: 'Frázi' },
    numeros: { pt: 'Números', cv: 'Númeru' },
    cultura: { pt: 'Cultura', cv: 'Kultura' },
    pratica: { pt: 'Prática', cv: 'Prátika' }
  },

  gramatica: {
    titulo: { pt: 'Gramática', cv: 'Gramátika' },
    pesquisarLicoes: { pt: 'Pesquisar lições...', cv: 'Buska lisons...' },
    todas: { pt: 'Todas', cv: 'Tudu' },
    fonologia: { pt: 'Fonologia', cv: 'Fonolojia' },
    morfologia: { pt: 'Morfologia', cv: 'Morfolojia' },
    sintaxe: { pt: 'Sintaxe', cv: 'Sintaxi' },
    verbos: { pt: 'Verbos', cv: 'Berbus' },
    pronomes: { pt: 'Pronomes', cv: 'Pronomis' },
    geral: { pt: 'Geral', cv: 'Jeral' },
    licacao: { pt: 'Lição', cv: 'Lison' },
    nenhumaLicaoEncontrada: { pt: 'Nenhuma lição encontrada.', cv: 'Ka ten lison atxadu.' },
    adicionarAosFavoritos: { pt: 'Adicionar aos favoritos', cv: 'Adisiona na favoritus' }
  }
};

export { translations };
