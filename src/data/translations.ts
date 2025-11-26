import { Translations } from '@/types/translations';

// As chaves principais foram traduzidas para o português
// Os comentários também foram traduzidos ou removidos se redundantes
const translations: Translations = {
  // Comum
  carregando: { // loading
    pt: 'Carregando...',
    kea: 'Ta karga...'
  },
  
  // Notas
  notas: {
    pt: 'Notas',
    kea: 'Notas'
  },
  notasGerais: {
    pt: 'Suas notas gerais...',
    kea: 'Notas gerais...'
  },
  
  // Navegação
  navegacao: { // nav
    inicio: { // home
      pt: 'Início',
      kea: 'Inísiu'
    },
    predicacao: { // preaching
      pt: 'Pregação',
      kea: 'Pregason'
    },
    gramaticaDicionario: { // grammarDictionary
      pt: 'Gramática & Dicionário',
      kea: 'Gramátika & Disionáriu'
    },
    gramatica: { // grammar
      pt: 'Gramática',
      kea: 'Gramátika'
    },
    licoesExercicios: { // lessonsExercises
      pt: 'Lições & Exercícios',
      kea: 'Lisons & Ezersísiu'
    },
    estudosBiblicos: { // bibleStudies
      pt: 'Estudos Bíblicos',
      kea: 'Studu di Bíblia'
    },
    sobre: { // about
      pt: 'Sobre',
      kea: 'Konsernu'
    },
    notas: { // Nouvelle clé pour la page Notes
      pt: 'Notas',
      kea: 'Apontamentus' // Mis à jour
    },
    notasGerais: {
      pt: 'Notas Gerais',
      kea: 'Apontamentus Jeral'
    },
    alunos: {
      pt: 'Alunos',
      kea: 'Alunus'
    },
    pessoasInteressadas: {
      pt: 'Pessoas Interessadas',
      kea: 'Pesoas Interesadu'
    },
    adicionarPessoaInteressada: {
      pt: 'Adicionar Pessoa Interessada',
      kea: 'Adisiona Pesoa Interesadu'
    },
    territorio: {
      pt: 'Território',
      kea: 'Teritóriu'
    },
    adicionarAluno: {
      pt: 'Adicionar Aluno',
      kea: 'Adisiona Alunu'
    },
    nome: {
      pt: 'Nome',
      kea: 'Nomi'
    },
    telefone: {
      pt: 'Telefone',
      kea: 'Telifoni'
    },
    // email já existe em iu.email ou similar, mas pode ser específico aqui si besoin
    // iu.email: { pt: 'Email', kea: 'Email' }
    email: { // Ajouté pour contexte spécifique si iu.email n'est pas utilisé
      pt: 'Email',
      kea: 'Email'
    },
    mudarParaCrioulo: { // changeToCrioulo
      pt: 'Mudar para Crioulo',
      kea: 'Muda pa Kriolu'
    },
    mudarParaPortugues: { // changeToPortuguese
      pt: 'Mudar para Português',
      kea: 'Muda pa Português'
    },
    menu: {
      abrir: { // open
        pt: 'Abrir menu',
        kea: 'Abre menu'
      },
      fechar: { // close
        pt: 'Fechar menu',
        kea: 'Fecha menu'
      }
    },
    timer: {
      pt: "Cronômetro",
      kea: "Kronometru"
    },
    calendar: {
      pt: "Calendário",
      kea: "Kalendariu"
    },
    progress: {
      pt: "Progresso",
      kea: "Progresu"
    },
    learningPaths: {
      pt: "Percursos",
      kea: "Perkursu"
    },
    scenarios: {
      pt: "Cenários",
      kea: "Senáriu"
    },
    flashcards: {
      pt: "Flashcards",
      kea: "Flashcards"
    },
    practice: {
      pt: "Prática",
      kea: "Prátika"
    },
  },
  
  // Traduções Comuns
  comum: { // common
    favoritos: { // favorites
      pt: 'Favoritos',
      kea: 'Favoritus'
    },
    limparPesquisa: { // clearSearch
      pt: 'Limpar pesquisa',
      kea: 'Limpá busca'
    },
    removerDosFavoritos: { // removeFromFavorites
      pt: 'Remover dos favoritos',
      kea: 'Tira di favoritus'
    },
    adicionarAosFavoritos: { // addToFavorites
      pt: 'Adicionar aos favoritos',
      kea: 'Adisiona na favoritus'
    },
    pesquisarLicoes: { // searchLessons
      pt: 'Pesquisar lições...',
      kea: 'Buska lisons...'
    },
    selecionarLicao: { // selectLesson
      pt: 'Selecione uma lição',
      kea: 'Seklisiona un lison'
    },
    traducao: { // translation
      pt: 'Tradução',
      kea: 'Traduson'
    },
    exemplo: { // example
      pt: 'Exemplo',
      kea: 'Ezemplu'
    },
    sinonimos: { // synonyms
      pt: 'Sinônimos',
      kea: 'Sinônimus'
    }
  },
  
  // Dicionário
  dicionario: { // dictionary
    pesquisarPalavras: { // searchWords
      pt: 'Pesquisar palavras...',
      kea: 'Buska palavras...'
    },
    titulo: { // title
      pt: 'Dicionário',
      kea: 'Disionáriu'
    },
    todos: {
      pt: 'Todos',
      kea: 'Tudu'
    },
    palavrasNoDicionario: {
      pt: 'palavras no dicionário',
      kea: 'palavras na disionáriu'
    },
    nenhumaPalavraEncontrada: {
      pt: 'Nenhuma palavra encontrada.',
      kea: 'Ka ten palavra atxadu.'
    },
    adicionarAosFavoritos: {
      pt: 'Adicionar aos favoritos',
      kea: 'Adisiona na favoritus'
    },
    removerDosFavoritos: {
      pt: 'Remover dos favoritos',
      kea: 'Tira di favoritus'
    },
    procurarNoDicionario: {
      pt: 'Procurar no dicionário',
      kea: 'Buska na disionáriu'
    },
    suggestionsIA: {
      pt: '💡 Sugestões IA para pregação',
      kea: '💡 Sugestons IA pa prédika'
    },
    triTematico: {
      pt: 'Tri temático',
      kea: 'Tri temátiku'
    },
    triAlfabetico: {
      pt: 'Tri alfabético',
      kea: 'Tri alfabétiku'
    },
    pesquisasRecentes: {
      pt: 'Pesquisas recentes',
      kea: 'Buskas resenti'
    },
    limparTudo: {
      pt: 'Limpar tudo',
      kea: 'Limpá tudu'
    },
    exemploPT: {
      pt: 'Exemplo (PT):',
      kea: 'Ezemplu (PT):'
    },
    exemploCV: {
      pt: 'Exemplo (CV):',
      kea: 'Ezemplu (CV):'
    }
  },
  
  // Pesquisa
  pesquisa: { // search
    resultados: { // results
      pt: 'resultados para',
      kea: 'rezultadu pa'
    },
    placeholder: {
      pt: 'Digite para pesquisar...',
      kea: 'Skrebe pa buska...'
    },
    pesquisando: { // searching
      pt: 'Pesquisando',
      kea: 'Ta buska'
    },
    semResultados: { // noResults
      pt: 'Nenhum resultado encontrado',
      kea: 'Nada atxadu'
    }
  },
  
  // Página de Gramática e Dicionário (seção específica, diferente de navegacao.gramaticaDicionario)
  paginaGramaticaDicionario: { // grammarDictionary (page specific section)
    titulo: { // title
      pt: 'Gramática & Dicionário',
      kea: 'Gramátika & Disionáriu'
    }
  },
  
  // Favoritos
  favoritos: { // favorites (page specific section)
    tituloVazio: { // emptyTitle
      pt: 'Nenhum favorito',
      kea: 'Nada favoritu'
    },
    descricaoVazia: { // emptyDescription
      pt: 'Adicione palavras aos seus favoritos clicando na estrela ao lado de cada palavra.',
      kea: 'Adisiona palavras na bu lista di favoritu ku klik na strela li' 
    },
    procurarNoDicionario: { // browseDictionary
      pt: 'Procurar no dicionário',
      kea: 'Buska na disionáriu'
    }
  },
  
  // Página Inicial
  paginaInicial: { // home
    titulo: { // title
      pt: 'Aprenda Cabo-verdiano para Pregação',
      kea: 'Prendi Kriolu pa Prédika'
    },
    recurso4Desc: {
      pt: 'Acompanhe suas notas e atividades de pregação',
      kea: 'Kontrola bu notis i atividadis di prédika'
    },
    subtitulo: { // subtitle
      pt: 'Um recurso para Testemunhas de Jeová',
      kea: 'Un rekursu pa Testemunhas di Jeová'
    },
    introducao: { // intro
      pt: 'Este site foi criado para ajudar as Testemunhas de Jeová a aprender o crioulo cabo-verdiano para usar na pregação. Aqui você encontrará apresentações, gramática, vocabulário e exercícios práticos.',
      kea: 'Es site foi kriadu pa djuda Testemunhas di Jeová a prendi kriolu kabuverdianu pa uza na prédika. Li bu ta atxa apresentasons, gramátika, vokabuláriu y izersísiu prátiku.'
    },
    botaoComecar: { // startButton
      pt: 'Começar a Aprender',
      kea: 'Kumesa Prendi'
    },
    tituloRecursos: { // featuresTitle
      pt: 'Recursos Disponíveis',
      kea: 'Rekursus Dispunível'
    },
    recurso1Titulo: { // feature1Title
      pt: 'Apresentações para Pregação',
      kea: 'Apresentasons pa Prédika'
    },
    recurso1Desc: { // feature1Desc
      pt: '10 apresentações baseadas em publicações da jw.org para usar na pregação.',
      kea: '10 apresentason baziadu na publikasons di jw.org pa uza na prédika.'
    },
    recurso2Titulo: { // feature2Title
      pt: 'Gramática & Dicionário',
      kea: 'Gramátika & Disionáriu'
    },
    recurso2Desc: { // feature2Desc
      pt: 'Aprenda a estrutura básica da língua e amplie seu vocabulário.',
      kea: 'Prendi strutura báziku di língua y aumenta bu vokabuláriu.'
    },
    recurso3Titulo: { // feature3Title (agora Estudos Bíblicos)
      pt: 'Estudos Bíblicos', // Atualizado
      kea: 'Studus Bíblikus' // Atualizado
    },
    recurso3Desc: { // feature3Desc (agora Estudos Bíblicos)
      pt: 'Recursos e guias para seus estudos bíblicos pessoais.', // Atualizado
      kea: 'Rekursus y gias pa bus studus bíblikus pesoal.' // Atualizado
    },
    recurso5Desc: {
      pt: 'Aprenda crioulo para pregar de porta em porta',
      kea: 'Prendi kriolu pa prega di porta na porta'
    },
    recurso6Desc: {
      pt: 'Configure notificações e preferências',
      kea: 'Konfigura notifikasons i preferensias'
    },
    textoDia: {
      pt: 'Texto do Dia',
      kea: 'Téstu di Dia'
    },
    descricao: {
      pt: 'Ferramentas, lições e recursos essenciais para servir no ministério em Cabo Verde.',
      kea: 'Ferramentas, lisons i rekursus esensiais pa servi na ministériu na Kabu Verdi.'
    },
    galeriaLegenda: {
      pt: 'Momentos do ministério',
      kea: 'Momentus di ministériu'
    },
    galeriaTitulo: {
      pt: 'Cabo Verde',
      kea: 'Kabu Verdi'
    },
    salmo: {
      pt: 'Salmo 83:18',
      kea: 'Salmu 83:18'
    },
    versiculo: {
      pt: '"Para que as pessoas saibam que tu, cujo nome é Jeová, só tu és o Altíssimo sobre toda a terra."',
      kea: '"Pa ki bu povu konxe ki bo, ku nomi é Jeová, só bo é Altísimu riba tudu térra."'
    }
  },
  
  // Página de Pregação
  predicacao: { // preaching
    titulo: { // title
      pt: 'Apresentações para Pregação',
      kea: 'Apresentasons pa Prédika'
    },
    subtitulo: { // subtitle
      pt: 'Use estas apresentações adaptadas de jw.org para a pregação em cabo-verdiano',
      kea: 'Uza kes apresentason adaptadu di jw.org pa prédika na kriolu'
    },
    tituloApresentacao: { // presentationTitle
      pt: 'Apresentação',
      kea: 'Apresentason'
    },
    introducao: { // introduction
      pt: 'Introdução',
      kea: 'Introduson'
    },
    textoBiblico: { // scripture
      pt: 'Texto Bíblico',
      kea: 'Téstu Bíbliku'
    },
    pergunta: { // question
      pt: 'Pergunta',
      kea: 'Purgunta'
    },
    explicacao: { // explanation
      pt: 'Explicação',
      kea: 'Splikason'
    },
    conclusao: { // conclusion
      pt: 'Conclusão',
      kea: 'Konkluson'
    },
    botaoPraticar: { // practiceButton
      pt: 'Praticar',
      kea: 'Pratika'
    },
    dicasPratica: {
      pt: 'Dicas para prática:',
      kea: 'Dikas pa prátika:'
    },
    praticaIntroducao: {
      pt: 'Pratique a introdução em voz alta várias vezes.',
      kea: 'Pratika introduson en voz alta várias vez.'
    },
    praticaMemorizar: {
      pt: 'Memorize o texto bíblico chave para citá-lo com confiança.',
      kea: 'Memoriza téstu bíbliku chavi pa sita-l ku konfiansa.'
    },
    praticaPergunta: {
      pt: 'Ensaie como fazer a pergunta de forma natural.',
      kea: 'Ensaia modi ki ta faze pergunta di forma natural.'
    },
    praticaExplicacao: {
      pt: 'Adapte a explicação ao seu próprio estilo, mantendo os pontos principais.',
      kea: 'Adapta splikason pa bu própriu stilu, mantendo pontos prinsipais.'
    },
    exemploDialogo: {
      pt: 'Exemplo de diálogo:',
      kea: 'Izemplu di diálogu:'
    },
    voce: {
      pt: 'Você:',
      kea: 'Bo:'
    },
    morador: {
      pt: 'Morador:',
      kea: 'Moradu:'
    },
    olaPossoAjudar: {
      pt: 'Olá, posso ajudar?',
      kea: 'Ola, ka mi djuda?'
    },
    nuncaPensei: {
      pt: 'Nunca pensei nisso. O que a Bíblia diz?',
      kea: 'Nunka pensa na kel-li. Kusa ki Bíblia ta fla?'
    },
    iniciarPratica: {
      pt: 'Iniciar Prática',
      kea: 'Kumisa Prátika'
    }
  },
  
  // Seção de Gramática (dentro da página Gramática & Dicionário)
  gramaticaSecao: { // grammar (section within GrammarDictionaryPage)
    titulo: { // title (já existe em navegacao.gramaticaDicionario, mas pode ser específico aqui)
      pt: 'Gramática & Dicionário',
      kea: 'Gramátika & Disionáriu'
    },
    tituloGramatica: { // grammarTitle
      pt: 'Gramática',
      kea: 'Gramátika'
    },
    tituloDicionario: { // dictionaryTitle
      pt: 'Dicionário',
      kea: 'Disionáriu'
    },
    placeholderPesquisa: { // searchPlaceholder
      pt: 'Pesquisar palavra...',
      kea: 'Piskiza palavra...'
    },
    semResultados: { // noResults
      pt: 'Nenhum resultado encontrado',
      kea: 'Ninhun resultadu atxadu'
    },
    introducaoGramatica: { // grammarIntro
      pt: 'Aprenda as regras básicas da gramática cabo-verdiana. Cada lição inclui exemplos e exercícios práticos.',
      kea: 'Prendi regras báziku di gramátika kabuverdianu. Kada lison ta inklui izemplu y izersísiu prátiku.'
    },
    licao: { // lesson
      pt: 'Lição',
      kea: 'Lison'
    },
    exemplo: { // example (já existe em comum.exemplo, mas pode ser específico aqui)
      pt: 'Exemplo',
      kea: 'Ezemplu'
    }
  },
  
  // Página de Lições e Exercícios

  // Rodapé
  rodape: { // footer
    descricao: { // description
      pt: 'Recursos para aprender crioulo cabo-verdiano e melhorar suas habilidades de pregação.',
      kea: 'Rekursus pa prendi kriolu kabuverdianu y melhora bu abilidadis di prédika.'
    },
    newsletter: {
      pt: 'Inscreva-se para receber atualizações',
      kea: 'Inskrebe-bo pa resebe atualizasons'
    },
    inscrever: { // subscribe
      pt: 'Inscrever',
      kea: 'Inskrebe'
    },
    direitos: { // rights
      pt: 'Todos os direitos reservados',
      kea: 'Tudu dretus rezervadu'
    },
    privacidade: { // privacy
      pt: 'Privacidade',
      kea: 'Privasidadi'
    },
    termos: { // terms
      pt: 'Termos',
      kea: 'Termus'
    },
    cookies: {
      pt: 'Cookies',
      kea: 'Kukis'
    },
    recursosExternos: {
      jwOrg: {
        pt: 'jw.org/kea',
        kea: 'jw.org/kea'
      },
      jwLibrary: {
        pt: 'JW Library',
        kea: 'JW Library'
      },
    }
  },
  
  // Página de Estudos Bíblicos
  estudosBiblicosPagina: { // bibleStudies (page specific section)
    titulo: { // title
      pt: 'Estudos Bíblicos',
      kea: 'Studus Bíblikus'
    },
    subtitulo: { // subtitle
      pt: 'Recursos para estudos bíblicos em cabo-verdiano',
      kea: 'Rekursus pa studus bíblikus na kriolu'
    },
    estudo: { // study
      pt: 'Estudo',
      kea: 'Studu'
    },
    duracao: { // duration
      pt: 'Duração',
      kea: 'Durason'
    },
    minutos: {
      pt: 'minutos',
      kea: 'minutu'
    },
    solicitarEstudo: { // requestStudy
      pt: 'Solicitar Estudo',
      kea: 'Sulisita Studu'
    },
    comoComecar: { // howToStart
      pt: 'Como Começar',
      kea: 'Modi ki Kumesa'
    },
    novoNoEstudo: { // newToStudy
      pt: 'Novo nos Estudos Bíblicos?',
      kea: 'Nobu na Studus Bíblikus?'
    },
    horarioEstudos: { // schedule
      pt: 'Horário dos Estudos',
      kea: 'Oráriu di Studus'
    },
    conteudoDoEstudo: {
      pt: 'Conteúdo do Estudo',
      kea: 'Kontéudu di Studu'
    }
  },
  
  // Elementos Comuns da IU
  paginaNaoEncontrada: {
    pt: 'Página não encontrada',
    kea: 'Pájina ka atxadu'
  },

  iu: { // ui
    carregando: { // loading (já existe em comum.carregando, mas pode ser específico para IU)
      pt: 'Carregando...',
      kea: 'Ta karrega...'
    },
    cronometro: {
      pt: 'Cronômetro',
      kea: 'Kronometru'
    },
    calendario: {
      pt: 'Calendário',
      kea: 'Kalendariu'
    },
    estatisticas: {
      pt: 'Estatísticas',
      kea: 'Estatistika'
    },
    pessoasInteressadas: {
      pt: 'Pessoas Interessadas',
      kea: 'Pesoas Interesadas'
    },
    mudarIdioma: { // changeLanguage
      pt: 'Mudar Idioma',
      kea: 'Muda Língua'
    },
    baixar: { // download
      pt: 'Baixar',
      kea: 'Baixa'
    },
    proximo: { // next
      pt: 'Próximo',
      kea: 'Prósimu'
    },
    anterior: { // previous
      pt: 'Anterior',
      kea: 'Anterior'
    },
    fechar: { // close (já existe em navegacao.menu.fechar, mas pode ser genérico aqui)
      pt: 'Fechar',
      kea: 'Fitxa'
    },
    enviar: { // submit
      pt: 'Enviar',
      kea: 'Manda'
    },
    pesquisar: { // search (genérico)
      pt: 'Pesquisar',
      kea: 'Piskiza'
    },
    cancelar: { // cancel
      pt: 'Cancelar',
      kea: 'Kanboka'
    },
    salvar: { // save
      pt: 'Salvar',
      kea: 'Salva'
    },
    excluir: { // delete
      pt: 'Excluir',
      kea: 'Elimina'
    },
    confirmar: { // confirm
      pt: 'Confirmar',
      kea: 'Konfirma'
    },
    voltar: { // back
      pt: 'Voltar',
      kea: 'Volta'
    },
    selecionar: { // select
      pt: 'Selecionar',
      kea: 'Sielesiona'
    },
    visualizar: { // view
      pt: 'Visualizar',
      kea: 'Vizualiza'
    },
    editar: { // edit
      pt: 'Editar',
      kea: 'Edita'
    },
    adicionar: { // add
      pt: 'Adicionar',
      kea: 'Adisiona'
    },
    remover: { // remove
      pt: 'Remover',
      kea: 'Tira'
    },
    imprimir: { // print
      pt: 'Imprimir',
      kea: 'Imprime'
    },
    baixarPdf: { // downloadPdf
      pt: 'Baixar PDF',
      kea: 'Baixa PDF'
    },
    compartilhar: { // share
      pt: 'Compartilhar',
      kea: 'Partilha'
    },
    ajuda: { // help
      pt: 'Ajuda',
      kea: 'Ajuda'
    },
    configuracoes: { // settings
      pt: 'Configurações',
      kea: 'Konfigurason'
    },
    sair: { // logout
      pt: 'Sair',
      kea: 'Sai'
    },
    tema: { // theme
      pt: 'Tema',
      cv: 'Tema',
      kea: 'Tema',
      // Sous-clés pour ThemeToggle
      mudar: { 
        pt: 'Mudar tema', 
        kea: 'Muda tema' 
      },
      claro: { 
        pt: 'Claro', 
        kea: 'Klaru' 
      },
      sombrio: { 
        pt: 'Escuro', // "Sombrio" est moins courant que "Escuro" pour le thème sombre en PT
        kea: 'Skuru' 
      },
      sistema: { 
        pt: 'Sistema', 
        kea: 'Sistema' 
      }
    },
    idioma: { // language
      pt: 'Idioma',
      kea: 'Língua'
    },
    adicionarPessoaInteressada: {
      pt: 'Adicionar Pessoa Interessada',
      kea: 'Adisiona Pesoa Interesadu'
    },
    territorio: {
      pt: 'Território',
      kea: 'Territoriu'
    },
    digiteNotas: {
      pt: 'Digite suas notas...',
      kea: 'Skrebe bus notas...'
    },
    start: {
      pt: "Iniciar", 
      kea: "Kumisa"
    },
    pause: {
      pt: "Pausar",
      kea: "Para"
    },
    reset: {
      pt: "Zerar",
      kea: "Limpu"
    },
    lap: {
      pt: "Volta",
      kea: "Volta"
    },
    laps: {
      pt: "Voltas",
      kea: "Voltas"
    },
    saveSession: {
      pt: "Salvar Sessão",
      kea: "Salva Sesaun"
    },
    history: {
      pt: "Histórico",
      kea: "Istoriku"
    },
    bestShort: {
      pt: "Melhor tempo (curto)",
      kea: "Tempu mas kurta"
    },
    bestLong: {
      pt: "Melhor tempo (longo)", 
      kea: "Tempu mas longu"
    },
    average: {
      pt: "Média",
      kea: "Mèdia"
    },
    timeline: {
      pt: "Evolução Temporal",
      kea: "Evolusaun Tempu"
    },
    duration: {
      pt: "Duração (HH:MM:SS)", 
      kea: "Durasaun (HH:MM:SS)"
    },
    addHours: {
      pt: "Adicionar Horas",
      kea: "Adisiona Ora"
    },
    preachingHours: {
      pt: "Horas de Pregação",
      kea: "Ora Predikason"
    },
    studyHours: {
      pt: "Horas de Estudo", 
      kea: "Ora Studu"
    },
    notes: {
      pt: "Notas",
      kea: "Notas"
    },
    save: {
      pt: "Salvar",
      kea: "Salva"
    },
    cancel: {
      pt: "Cancelar",
      kea: "Kansela"
    },
    addSession: {
      pt: "Adicionar Sessão",
      kea: "Adisiona Sesaun"
    },
    monthStats: {
      pt: "Estatísticas do Mês",
      kea: "Estatistika Mensal"
    },
    preaching: {
      pt: "Prédicação",
      kea: "Predikason"
    },
    study: {
      pt: "Estudo",
      kea: "Studu"
    },
    totalHours: {
      pt: "Total Horas",
      kea: "Total Ora"
    },
    online: {
      pt: "Online",
      kea: "Na linha"
    },
    offline: {
      pt: "Offline",
      kea: "Fóra di linha"
    }
  },

  configuracoes: {
    infoApp: {
      pt: 'Informações da Aplicação',
      kea: 'Informasons di Aplikason'
    },
    versao: {
      pt: 'Versão',
      kea: 'Versan'
    },
    desenvolvidoPor: {
      pt: 'Desenvolvido por',
      kea: 'Dizenvolvidu por'
    }
  },

  licoes: {
    titulo: { pt: 'Lições & Exercícios', kea: 'Lisons & Izersísiu' },
    subtitulo: { pt: 'Aprenda e pratique com exercícios interativos', kea: 'Prendi y pratika ku izersísiu interativu' },
    tituloQuiz: { pt: 'Quiz', kea: 'Quiz' },
    tituloCorrespondencia: { pt: 'Exercício de Correspondência', kea: 'Izersísiu di Korespondensia' },
    tituloSimulacao: { pt: 'Simulação de Conversa', kea: 'Simulason di Konversa' },
    iniciarExercicio: { pt: 'Iniciar Exercício', kea: 'Inisia Izersísiu' },
    correto: { pt: 'Correto!', kea: 'Sertu!' },
    incorreto: { pt: 'Incorreto! Tente novamente.', kea: 'Inkoretu! Tenta di novu.' },
    pontuacao: { pt: 'Pontuação', kea: 'Pontuason' },
    licoes: { pt: 'Lições', kea: 'Lisons' },
    completas: { pt: 'Completas', kea: 'Kompletu' },
    categorias: { pt: 'Categorias', kea: 'Kategorias' },
    nivel: { pt: 'Nível', kea: 'Nível' },
    todas: { pt: 'Todas', kea: 'Tudu' },
    todosNiveis: { pt: 'Todos os Níveis', kea: 'Tudu Nível' },
    iniciante: { pt: 'Iniciante', kea: 'Inisiante' },
    intermediario: { pt: 'Intermediário', kea: 'Intermediáriu' },
    avancado: { pt: 'Avançado', kea: 'Avansadu' },
    nenhumaLicao: { pt: 'Nenhuma lição encontrada com os filtros selecionados.', kea: 'Nenhuma lison atxadu ku es filtru.' },
    continueAprendendo: { pt: 'Continue Aprendendo!', kea: 'Kontinua Prendendu!' },
    cadaLicao: { pt: 'Cada lição o aproxima de pregar eficazmente em crioulo cabo-verdiano', kea: 'Kada lison bu txiga mas serka di prega efikasimenti na kriolu kabuverdianu' },
    conteudo: { pt: 'Conteúdo', kea: 'Kontedu' },
    exemplos: { pt: 'Exemplos', kea: 'Ezemplu' },
    dicasPraticas: { pt: '💡 Dicas Práticas', kea: '💡 Dikas Prátiku' },
    general: { pt: 'Geral', kea: 'Jeral' },
    pronouns: { pt: 'Pronomes', kea: 'Pronomis' },
    verbos: { pt: 'Verbos', kea: 'Berbus' },
    sintaxe: { pt: 'Sintaxe', kea: 'Sintaxi' },
    morfologia: { pt: 'Morfologia', kea: 'Morfolojia' },
    vocabulario: { pt: 'Vocabulário', kea: 'Vokabuláriu' },
    fonologia: { pt: 'Fonologia', kea: 'Fonolojia' },
    frases: { pt: 'Frases', kea: 'Frázi' },
    numeros: { pt: 'Números', kea: 'Númeru' },
    cultura: { pt: 'Cultura', kea: 'Kultura' },
    pratica: { pt: 'Prática', kea: 'Prátika' }
  },

  gramatica: {
    titulo: { pt: 'Gramática', kea: 'Gramátika' },
    pesquisarLicoes: { pt: 'Pesquisar lições...', kea: 'Buska lisons...' },
    todas: { pt: 'Todas', kea: 'Tudu' },
    fonologia: { pt: 'Fonologia', kea: 'Fonolojia' },
    morfologia: { pt: 'Morfologia', kea: 'Morfolojia' },
    sintaxe: { pt: 'Sintaxe', kea: 'Sintaxi' },
    verbos: { pt: 'Verbos', kea: 'Berbus' },
    pronomes: { pt: 'Pronomes', kea: 'Pronomis' },
    geral: { pt: 'Geral', kea: 'Jeral' },
    licacao: { pt: 'Lição', kea: 'Lison' },
    nenhumaLicaoEncontrada: { pt: 'Nenhuma lição encontrada.', kea: 'Ka ten lison atxadu.' },
    adicionarAosFavoritos: { pt: 'Adicionar aos favoritos', kea: 'Adisiona na favoritus' },
    etiquetaPT: { pt: 'PT:', kea: 'PT:' },
    etiquetaKEA: { pt: 'KEA:', kea: 'KEA:' }
  }
};

export { translations };
