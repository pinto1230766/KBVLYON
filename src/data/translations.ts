// As chaves principais foram traduzidas para o português
// Os comentários também foram traduzidos ou removidos se redundantes
export const translations = {
  // Comum
  carregando: { // loading
    pt: 'Carregando...',
    cv: 'Ta karga...'
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
    }
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
  licoes: { // lessons
    titulo: { // title
      pt: 'Lições & Exercícios',
      cv: 'Lisons & Izersísiu'
    },
    subtitulo: { // subtitle
      pt: 'Aprenda e pratique com exercícios interativos',
      cv: 'Prendi y pratika ku izersísiu interativu'
    },
    tituloQuiz: { // quizTitle
      pt: 'Quiz',
      cv: 'Quiz'
    },
    tituloCorrespondencia: { // matchingTitle
      pt: 'Exercício de Correspondência',
      cv: 'Izersísiu di Korespondensia'
    },
    tituloSimulacao: { // roleplayTitle
      pt: 'Simulação de Conversa',
      cv: 'Simulason di Konversa'
    },
    iniciarExercicio: { // startExercise
      pt: 'Iniciar Exercício',
      cv: 'Inisia Izersísiu'
    },
    correto: { // correct
      pt: 'Correto!',
      cv: 'Sertu!'
    },
    incorreto: { // incorrect
      pt: 'Incorreto! Tente novamente.',
      cv: 'Inkoretu! Tenta di novu.'
    },
    pontuacao: { // score
      pt: 'Pontuação',
      cv: 'Pontuason'
    }
  },
  
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
    }
  }
};
