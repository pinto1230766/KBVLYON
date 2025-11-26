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
  category: 'fonologia' | 'morfologia' | 'sintaxi' | 'verbos' | 'pronomes' | 'geral';
}

export const grammarLessonsEnriched: GrammarLesson[] = [
  // FONOLOGIA (5 leçons)
  {
    id: 1,
    category: 'fonologia',
    title: {
      pt: 'Sistema Fonológico do Crioulo',
      cv: 'Sistema Fonolójiku di Kriolu'
    },
    content: {
      pt: 'O sistema fonológico do crioulo cabo-verdiano é composto por 22 fonemas consonantais e 10 vocálicos. As consoantes incluem oclusivas, fricativas, nasais, líquidas e semiconsoantes. O sistema vocálico distingue entre vogais orais e nasais, sendo fundamental para a compreensão e produção correta do crioulo.',
      cv: 'Sistema fonolójiku di kriolu kabuverdianu é kompoztu pa 22 fonema konsonantal y 10 vokáliku. Konsonanti ta inklui oklusiva, frikativa, nazal, líkida y semikonsonanti. Sistema vokáliku ta distingui entri vogal oral y nazal, sendo fundamental pa komprenson y produson koretu di kriolu.'
    },
    examples: [
      {
        pt: 'Consoantes oclusivas: /p/, /b/, /t/, /d/, /k/, /g/',
        cv: 'Konsonanti oklusiva: /p/, /b/, /t/, /d/, /k/, /g/'
      },
      {
        pt: 'Vogais orais: /i/, /e/, /ɛ/, /a/, /ɔ/, /o/, /u/',
        cv: 'Vogal oral: /i/, /e/, /ɛ/, /a/, /ɔ/, /o/, /u/'
      },
      {
        pt: 'Vogais nasais: /ĩ/, /ẽ/, /ã/, /õ/, /ũ/',
        cv: 'Vogal nazal: /ĩ/, /ẽ/, /ã/, /õ/, /ũ/'
      }
    ]
  },
  {
    id: 2,
    category: 'fonologia',
    title: {
      pt: 'Acentuação e Ritmo',
      cv: 'Asentuason y Ritmu'
    },
    content: {
      pt: 'A acentuação no crioulo cabo-verdiano segue padrões específicos. Geralmente, palavras de duas sílabas são acentuadas na primeira sílaba (paroxítonas), enquanto palavras de três ou mais sílabas tendem a ser acentuadas na penúltima sílaba. O ritmo é silábico, diferente do português que é acentual.',
      cv: 'Asentuason na kriolu kabuverdianu ta sigi padrão ispesífiku. Jeralmenti, palavra di dos sílaba ta ser asentuadu na priméru sílaba (parokítona), enkuantu palavra di tres o más sílaba ta tendi pa ser asentuadu na penúltimu sílaba. Ritmu é silábiku, diferenti di purtuges ki é asentual.'
    },
    examples: [
      {
        pt: 'Paroxítonas: \'kása (casa), \'fíku (fico), \'bóni (bom)',
        cv: 'Parokítona: \'kaza (kaza), \'fíku (fiku), \'bóni (bon)'
      },
      {
        pt: 'Proparoxítonas: mé\'diku (médico), \'últimu (último)',
        cv: 'Proparokítona: mé\'diku (médiku), \'últimu (últimu)'
      }
    ]
  },
  {
    id: 3,
    category: 'fonologia',
    title: {
      pt: 'Processos Fonológicos',
      cv: 'Prosesu Fonolójiku'
    },
    content: {
      pt: 'O crioulo cabo-verdiano apresenta vários processos fonológicos importantes como assimilação, elisão, epêntese e metátese. A assimilação ocorre quando um som se torna similar ao som adjacente. A elisão é a supressão de sons em certas posições. Estes processos são essenciais para compreender a variação na pronúncia.',
      cv: 'Kriolu kabuverdianu ta aprezenta vários prosesu fonolójiku importanti kuma asimilason, elizon, epêntezi y metátezi. Asimilason ta akontese kuandu un som ta torna similar ku som adjasenti. Elizon é supreson di som na serti pozison. Es prosesu é esensial pa komprende variason na pronúnsia.'
    },
    examples: [
      {
        pt: 'Assimilação: "tem pãu" → "tem bãu" (p > b)',
        cv: 'Asimilason: "tem pãu" → "tem bãu" (p > b)'
      },
      {
        pt: 'Elisão: "kasa di" → "kas di" (supressão de -a)',
        cv: 'Elizon: "kaza di" → "kaz di" (supreson di -a)'
      },
      {
        pt: 'Epêntese: "skola" → "sikola" (inserção de -i)',
        cv: 'Epêntezi: "skola" → "sikola" (inserson di -i)'
      }
    ]
  },
  {
    id: 4,
    category: 'fonologia',
    title: {
      pt: 'Variação Dialectal Fonética',
      cv: 'Variason Dialetal Fonétiku'
    },
    content: {
      pt: 'O crioulo cabo-verdiano apresenta variação fonética significativa entre as ilhas. As principais diferenças estão entre Sotavento (Santiago, Fogo, Brava) e Barlavento (São Vicente, Santo Antão, São Nicolau). Estas variações afetam principalmente as vogais e algumas consoantes específicas.',
      cv: 'Kriolu kabuverdianu ta aprezenta variason fonétiku signifikativu entri ilha. Prinsipal diferensa ta sta entri Sotaventu (Santiagu, Fogu, Brava) y Barlaventu (Sãu Visenti, Santu Antãu, Sãu Nikolau). Es variason ta afeta prinsipalmenti vogal y alguns konsonanti ispesífiku.'
    },
    examples: [
      {
        pt: 'Santiago: "djuntu" vs São Vicente: "juntu" (junto)',
        cv: 'Santiagu: "djuntu" vs Sãu Visenti: "juntu" (djuntu)'
      },
      {
        pt: 'Santiago: "txeu" vs São Vicente: "muito" (muito)',
        cv: 'Santiagu: "txeu" vs Sãu Visenti: "muito" (txeu)'
      },
      {
        pt: 'Santiago: "kel" vs São Vicente: "akel" (aquele)',
        cv: 'Santiagu: "kel" vs Sãu Visenti: "akel" (kel)'
      }
    ]
  },
  {
    id: 5,
    category: 'fonologia',
    title: {
      pt: 'Entoação e Prosódia',
      cv: 'Entoason y Prosódia'
    },
    content: {
      pt: 'A entoação no crioulo cabo-verdiano tem padrões específicos que diferem do português. A prosódia inclui aspectos como tom, intensidade e duração. As frases declarativas têm entoação descendente, enquanto as interrogativas têm padrões ascendentes. O ritmo é mais regular que o português.',
      cv: 'Entoason na kriolu kabuverdianu ten padrão ispesífiku ki ta diferi di purtuges. Prosódia ta inklui aspetu kuma tom, intensidadi y durason. Frazi deklarativu ten entoason desendenti, enkuantu interrogativu ten padrão asendenti. Ritmu é más regular ki purtuges.'
    },
    examples: [
      {
        pt: 'Declarativa: "El ta bai" ↘ (Ele vai)',
        cv: 'Deklarativu: "El ta bai" ↘ (El ta bai)'
      },
      {
        pt: 'Interrogativa: "El ta bai?" ↗ (Ele vai?)',
        cv: 'Interrogativu: "El ta bai?" ↗ (El ta bai?)'
      },
      {
        pt: 'Exclamativa: "Kuma el sta bonitu!" (Como ele está bonito!)',
        cv: 'Esklamativu: "Kuma el sta bonitu!" (Kuma el sta bonitu!)'
      }
    ]
  },
  {
    id: 6,
    category: 'fonologia',
    title: {
      pt: 'Adaptação de Empréstimos',
      cv: 'Adaptason di Emprestimu'
    },
    content: {
      pt: 'O crioulo cabo-verdiano adapta palavras emprestadas do português, inglês e outras línguas segundo suas regras fonológicas. Estas adaptações incluem simplificação de grupos consonantais, mudanças vocálicas e ajustes prosódicos para se conformar ao sistema fonológico do crioulo.',
      cv: 'Kriolu kabuverdianu ta adapta palavra prestadu di purtuges, inglês y otru língua sigundu ses regra fonolójiku. Es adaptason ta inklui simplifikason di grupu konsonantal, mudansa vokáliku y ajusti prosódiku pa konforma ku sistema fonolójiku di kriolu.'
    },
    examples: [
      {
        pt: 'Português "escola" → Crioulo "skola"',
        cv: 'Purtuges "escola" → Kriolu "skola"'
      },
      {
        pt: 'Inglês "computer" → Crioulo "komputadó"',
        cv: 'Inglês "computer" → Kriolu "komputadó"'
      },
      {
        pt: 'Português "trabalho" → Crioulo "trabadju"',
        cv: 'Purtuges "trabalho" → Kriolu "trabadju"'
      }
    ]
  },

  // MORFOLOGIA (5 leçons)
  {
    id: 3,
    category: 'morfologia',
    title: {
      pt: 'Formação de Palavras',
      cv: 'Formason di Palavra'
    },
    content: {
      pt: 'A morfologia do crioulo cabo-verdiano é caracterizada por processos de derivação e composição. A derivação ocorre através de prefixos e sufixos, enquanto a composição forma palavras novas pela junção de duas ou mais palavras. O crioulo também apresenta reduplicação como processo morfológico produtivo.',
      cv: 'Morfolojia di kriolu kabuverdianu é karakterizadu pa prosesu di derivason y kompozison. Derivason ta akontese atraves di prefiksu y sufiksu, enkuantu kompozison ta forma palavra novu pa junson di dos o más palavra. Kriolu tanbé ta prezenta reduplikason kuma prosesu morfolójiku produtívu.'
    },
    examples: [
      {
        pt: 'Derivação: kasa → kasinha (casinha), trabadja → trabadjadera (trabalhadora)',
        cv: 'Derivason: kaza → kazinha (kazinha), trabadja → trabadjadera (trabadjadera)'
      },
      {
        pt: 'Composição: kasa + branku → kasabranku (casa branca)',
        cv: 'Kompozison: kaza + branku → kazabranku (kazabranku)'
      },
      {
        pt: 'Reduplicação: kore → korekore (correr muito), fala → falafala (falar muito)',
        cv: 'Reduplikason: kore → korekore (kore txeu), fala → falafala (fala txeu)'
      }
    ]
  },
  {
    id: 4,
    category: 'morfologia',
    title: {
      pt: 'Pluralização e Gênero',
      cv: 'Pluralizason y Jéneru'
    },
    content: {
      pt: 'No crioulo cabo-verdiano, o plural é geralmente marcado pelo contexto ou por quantificadores, não por flexão da palavra. O gênero não é marcado morfologicamente como no português, sendo indicado pelo contexto ou por palavras específicas como "matxu" (macho) e "fémea" (fêmea).',
      cv: 'Na kriolu kabuverdianu, plural jeralmenti ta ser markadu pa kontestu o pa kuantifikadó, ka pa flekson di palavra. Jéneru ka ta ser markadu morfolojikamenti kuma na purtuges, sendo indikadu pa kontestu o pa palavra ispesífiku kuma "matxu" (matxu) y "fémea" (fémea).'
    },
    examples: [
      {
        pt: 'Singular/Plural: kasa (casa/casas), omi (homem/homens)',
        cv: 'Singular/Plural: kaza (kaza/kazas), omi (omi/omis)'
      },
      {
        pt: 'Com quantificador: dos kasa (duas casas), txeu omi (muitos homens)',
        cv: 'Ku kuantifikadó: dos kaza (dos kaza), txeu omi (txeu omi)'
      },
      {
        pt: 'Gênero: kabra matxu (bode), kabra fémea (cabra)',
        cv: 'Jéneru: kabra matxu (kabra matxu), kabra fémea (kabra fémea)'
      }
    ]
  },
  {
    id: 8,
    category: 'morfologia',
    title: {
      pt: 'Sufixação e Prefixação',
      cv: 'Sufiksason y Prefiksason'
    },
    content: {
      pt: 'O crioulo cabo-verdiano utiliza sufixos e prefixos para formar novas palavras. Os sufixos mais comuns incluem -dor/-dera (agente), -mentu (ação), -dadi (qualidade). Os prefixos incluem des- (negação), re- (repetição). Este sistema é menos complexo que o português mas muito produtivo.',
      cv: 'Kriolu kabuverdianu ta utiliza sufiksu y prefiksu pa forma palavra novu. Sufiksu más komun ta inklui -dor/-dera (ajenti), -mentu (ason), -dadi (kualidadi). Prefiksu ta inklui des- (negason), re- (repetison). Es sistema é menu kompleksu ki purtuges mas muitu produtívu.'
    },
    examples: [
      {
        pt: 'Sufixos agentivos: kanta → kantadó (cantor), kozi → kozinhera (cozinheira)',
        cv: 'Sufiksu ajentivu: kanta → kantadó (kantadó), kozi → kozinhera (kozinhera)'
      },
      {
        pt: 'Sufixos de ação: movi → movimentu (movimento), trata → tratamentu (tratamento)',
        cv: 'Sufiksu di ason: movi → movimentu (movimentu), trata → tratamentu (tratamentu)'
      },
      {
        pt: 'Prefixos: faze → desfaze (desfazer), konta → rekonta (recontar)',
        cv: 'Prefiksu: faze → desfaze (desfaze), konta → rekonta (rekonta)'
      }
    ]
  },
  {
    id: 9,
    category: 'morfologia',
    title: {
      pt: 'Diminutivos e Aumentativos',
      cv: 'Diminutivu y Aumentativu'
    },
    content: {
      pt: 'O sistema de diminutivos e aumentativos no crioulo é expresso principalmente através de sufixos. Os diminutivos usam -inha/-inhu e expressam carinho ou pequenez. Os aumentativos usam -ão/-ona e indicam tamanho grande ou intensidade. Também se usa "pikiñinhu" e "grandi" como modificadores.',
      cv: 'Sistema di diminutivu y aumentativu na kriolu ta ser espresu prinsipalmenti atraves di sufiksu. Diminutivu ta uza -inha/-inhu y ta espresa karinhu o pikenez. Aumentativu ta uza -on/-ona y ta indika tamañu grandi o intensidadi. Tanbé ta uza "pikinhinu" y "grandi" kuma modifikadó.'
    },
    examples: [
      {
        pt: 'Diminutivos: kasa → kasinha (casinha), omi → omininhu (homenzinho)',
        cv: 'Diminutivu: kaza → kazinha (kazinha), omi → omininhu (omininhu)'
      },
      {
        pt: 'Aumentativos: kasa → kasão (casarão), omi → omão (homenzarrão)',
        cv: 'Aumentativu: kaza → kazon (kazon), omi → omon (omon)'
      },
      {
        pt: 'Com modificadores: kasa pikiñinhu (casa pequeninha), kasa grandi (casa grande)',
        cv: 'Ku modifikadó: kaza pikinhinu (kaza pikinhinu), kaza grandi (kaza grandi)'
      }
    ]
  },
  {
    id: 10,
    category: 'morfologia',
    title: {
      pt: 'Composição e Palavras Compostas',
      cv: 'Kompozison y Palavra Kompoztu'
    },
    content: {
      pt: 'A composição é um processo muito produtivo no crioulo cabo-verdiano. Forma-se palavras novas juntando duas ou mais palavras existentes. Os tipos incluem: substantivo + substantivo, adjetivo + substantivo, verbo + substantivo. As palavras compostas podem ser escritas juntas ou separadas.',
      cv: 'Kompozison é un prosesu muitu produtívu na kriolu kabuverdianu. Ta forma palavra novu juntandu dos o más palavra ki já ezisti. Tipu ta inklui: sustantivu + sustantivu, adjetivu + sustantivu, verbu + sustantivu. Palavra kompoztu podi ser skritu djuntu o separadu.'
    },
    examples: [
      {
        pt: 'Substantivo + Substantivo: kasa + branku → kasabranku (casa branca)',
        cv: 'Sustantivu + Sustantivu: kaza + branku → kazabranku (kazabranku)'
      },
      {
        pt: 'Verbo + Substantivo: ganha + pãu → ganhapãu (ganha-pão)',
        cv: 'Verbu + Sustantivu: ganha + pãu → ganhapãu (ganhapãu)'
      },
      {
        pt: 'Adjetivo + Substantivo: bon + dia → bondia (bom dia)',
        cv: 'Adjetivu + Sustantivu: bon + dia → bondia (bondia)'
      }
    ]
  },
  {
    id: 11,
    category: 'morfologia',
    title: {
      pt: 'Empréstimos e Adaptação Morfológica',
      cv: 'Emprestimu y Adaptason Morfolójiku'
    },
    content: {
      pt: 'O crioulo cabo-verdiano incorpora palavras de outras línguas, principalmente português, mas também inglês, francês e línguas africanas. Estas palavras são adaptadas morfologicamente para se conformar aos padrões do crioulo, incluindo mudanças na estrutura silábica e adição de morfemas crioulos.',
      cv: 'Kriolu kabuverdianu ta inkorpora palavra di otru língua, prinsipalmenti purtuges, mas tanbé inglês, fransês y língua afrikanu. Es palavra ta ser adaptadu morfolojikamenti pa konforma ku padrão di kriolu, inkluindu mudansa na strutura silábiku y adison di morfema kriolu.'
    },
    examples: [
      {
        pt: 'Do português: televisão → televizãu, computador → komputadó',
        cv: 'Di purtuges: televisão → televizon, komputadó → komputadó'
      },
      {
        pt: 'Do inglês: business → biznis, weekend → wikendi',
        cv: 'Di inglês: business → biznis, weekend → wikendi'
      },
      {
        pt: 'Do francês: bureau → buró, chauffeur → xofé',
        cv: 'Di fransês: bureau → buró, chauffeur → xofé'
      }
    ]
  },

  // SINTAXI (5 leçons)
  {
    id: 5,
    category: 'sintaxi',
    title: {
      pt: 'Ordem das Palavras',
      cv: 'Orden di Palavra'
    },
    content: {
      pt: 'A ordem básica das palavras no crioulo cabo-verdiano é Sujeito-Verbo-Objeto (SVO), similar ao português. No entanto, há flexibilidade para outras ordens em contextos específicos, como topicalização ou focalização. A posição dos elementos na frase pode alterar o significado e a ênfase.',
      cv: 'Orden básiku di palavra na kriolu kabuverdianu é Sujétu-Verbu-Objetu (SVO), similar ku purtuges. Mas, ten fleksibilidadi pa otru orden na kontestu ispesífiku, kuma topikalizason o fokalizason. Pozison di elementu na frazi podi altera signifikadu y ênfazi.'
    },
    examples: [
      {
        pt: 'Ordem básica SVO: N kume pãu (Eu como pão)',
        cv: 'Orden básiku SVO: N kume pãu (N ta kume pãu)'
      },
      {
        pt: 'Topicalização: Pãu, n kume-l (Pão, eu como-o)',
        cv: 'Topikalizason: Pãu, n ta kume-l (Pãu, n ta kume-l)'
      },
      {
        pt: 'Focalização: É pãu ki n kume (É pão que eu como)',
        cv: 'Fokalizason: É pãu ki n ta kume (É pãu ki n ta kume)'
      }
    ]
  },
  {
    id: 6,
    category: 'sintaxi',
    title: {
      pt: 'Estruturas Interrogativas',
      cv: 'Strutura Interrogativu'
    },
    content: {
      pt: 'As perguntas em crioulo cabo-verdiano podem ser formadas de várias maneiras: através de entonação, palavras interrogativas ou partículas. As palavras interrogativas principais são "ken" (quem), "kuze" (o que), "undi" (onde), "kuma" (como), "pamodi" (por que).',
      cv: 'Pergunta na kriolu kabuverdianu podi ser formadu di vária manera: atraves di entonason, palavra interrogativu o partíkula. Palavra interrogativu prinsipal é "ken" (ken), "kuze" (kuze), "undi" (undi), "kuma" (kuma), "pamodi" (pamodi).'
    },
    examples: [
      {
        pt: 'Quem é? - Ken ki é?',
        cv: 'Ken ki é? - Ken ki é?'
      },
      {
        pt: 'O que é isso? - Kuze ki é kel koze li?',
        cv: 'Kuze ki é kel koze li? - Kuze ki é kel koze li?'
      },
      {
        pt: 'Onde está? - Undi ki el sta?',
        cv: 'Undi ki el sta? - Undi ki el sta?'
      }
    ]
  },
  {
    id: 7,
    category: 'sintaxi',
    title: {
      pt: 'Negação e Afirmação',
      cv: 'Negason y Afirmason'
    },
    content: {
      pt: 'A negação em crioulo cabo-verdiano é expressa principalmente pela partícula "ka" que precede o verbo. Para ênfase, pode-se usar "nada" no final da frase. A afirmação pode ser reforçada com "sim" ou "é berdat" (é verdade).',
      cv: 'Negason na kriolu kabuverdianu ta ser espresadu prinsipalmenti pa partíkula "ka" ki ta presede verbu. Pa ênfazi, podi uza "nada" na final di frazi. Afirmason podi ser reforsa ku "sim" o "é berdat" (é berdat).'
    },
    examples: [
      {
        pt: 'Negação simples: N ka ta bai (Eu não vou)',
        cv: 'Negason simpli: N ka ta bai (N ka ta bai)'
      },
      {
        pt: 'Negação enfática: N ka ta bai nada (Eu não vou mesmo)',
        cv: 'Negason enfátiku: N ka ta bai nada (N ka ta bai nada)'
      },
      {
        pt: 'Afirmação: Sim, n ta bai (Sim, eu vou)',
        cv: 'Afirmason: Sim, n ta bai (Sim, n ta bai)'
      }
    ]
  },
  {
    id: 14,
    category: 'sintaxi',
    title: {
      pt: 'Coordenação e Subordinação',
      cv: 'Koordinason y Subordinason'
    },
    content: {
      pt: 'O crioulo cabo-verdiano usa conjunções para ligar orações. A coordenação liga orações independentes com "y" (e), "mas" (mas), "o" (ou). A subordinação usa "ki" (que), "si" (se), "kuandu" (quando), "undi" (onde). As estruturas subordinadas são menos complexas que no português.',
      cv: 'Kriolu kabuverdianu ta uza konjunson pa liga orason. Koordinason ta liga orason independenti ku "y" (y), "mas" (mas), "o" (o). Subordinason ta uza "ki" (ki), "si" (si), "kuandu" (kuandu), "undi" (undi). Strutura subordinadu é menu kompleksu ki na purtuges.'
    },
    examples: [
      {
        pt: 'Coordenação: N ta bai y el ta ben (Eu vou e ele vem)',
        cv: 'Koordinason: N ta bai y el ta ben (N ta bai y el ta ben)'
      },
      {
        pt: 'Subordinação: N sabe ki el ta ben (Eu sei que ele vem)',
        cv: 'Subordinason: N sabe ki el ta ben (N sabe ki el ta ben)'
      },
      {
        pt: 'Condicional: Si el ben, n ba bai (Se ele vier, eu vou)',
        cv: 'Kondisional: Si el ben, n ba bai (Si el ben, n ba bai)'
      }
    ]
  },
  {
    id: 15,
    category: 'sintaxi',
    title: {
      pt: 'Construções Passivas e Reflexivas',
      cv: 'Konstruson Pasivu y Refleksivu'
    },
    content: {
      pt: 'O crioulo cabo-verdiano tem construções passivas e reflexivas diferentes do português. A passiva é expressa com "ser" + particípio ou construções impessoais. As reflexivas usam pronomes reflexivos ou construções com "kabesa" (cabeça). Estas estruturas são menos frequentes que no português.',
      cv: 'Kriolu kabuverdianu ten konstruson pasivu y refleksivu diferenti di purtuges. Pasivu ta ser espresu ku "ser" + partisípiu o konstruson impesonal. Refleksivu ta uza pronomi refleksivu o konstruson ku "kabesa" (kabesa). Es strutura é menu frekuenti ki na purtuges.'
    },
    examples: [
      {
        pt: 'Passiva: Kasa foi konstruídu (A casa foi construída)',
        cv: 'Pasivu: Kaza foi konstruídu (Kaza foi konstruídu)'
      },
      {
        pt: 'Reflexiva: El ta laba si kabesa (Ele se lava)',
        cv: 'Refleksivu: El ta laba si kabesa (El ta laba si kabesa)'
      },
      {
        pt: 'Impessoal: Ta fala ki... (Fala-se que...)',
        cv: 'Impesonal: Ta fala ki... (Ta fala ki...)'
      }
    ]
  },

  // VERBOS (5 leçons)
  {
    id: 8,
    category: 'verbos',
    title: {
      pt: 'Sistema Verbal - Aspecto e Tempo',
      cv: 'Sistema Verbal - Aspetu y Tempu'
    },
    content: {
      pt: 'O sistema verbal do crioulo cabo-verdiano é baseado em aspecto mais do que em tempo. Os marcadores aspectuais "ta" (imperfectivo), "ba" (perfectivo futuro) e ausência de marcador (perfectivo passado) são fundamentais.',
      cv: 'Sistema verbal di kriolu kabuverdianu é bazéadu na aspetu más di ki na tempu. Markadó aspetual "ta" (imperfetívu), "ba" (perfetívu futuru) y ausênsia di markadó (perfetívu pasadu) é fundamental.'
    },
    examples: [
      {
        pt: 'Imperfectivo: N ta kume (Eu como/estou comendo)',
        cv: 'Imperfetívu: N ta kume (N ta kume)'
      },
      {
        pt: 'Perfectivo passado: N kume (Eu comi)',
        cv: 'Perfetívu pasadu: N kume (N kume)'
      },
      {
        pt: 'Perfectivo futuro: N ba kume (Eu vou comer)',
        cv: 'Perfetívu futuru: N ba kume (N ba kume)'
      }
    ]
  },
  {
    id: 9,
    category: 'verbos',
    title: {
      pt: 'Verbos Modais e Auxiliares',
      cv: 'Verbu Modal y Auxiliar'
    },
    content: {
      pt: 'Os verbos modais em crioulo expressam modalidade, possibilidade, necessidade e volição. Os principais são "podi" (poder), "debe" (dever), "kere" (querer), "sabe" (saber).',
      cv: 'Verbu modal na kriolu ta espresa modalidadi, posibilidadi, nesesidadi y volison. Prinsipal é "podi" (podi), "debe" (debe), "kere" (kere), "sabe" (sabe).'
    },
    examples: [
      {
        pt: 'Possibilidade: N podi bai (Eu posso ir)',
        cv: 'Posibilidadi: N podi bai (N podi bai)'
      },
      {
        pt: 'Necessidade: N debe estudá (Eu devo estudar)',
        cv: 'Nesesidadi: N debe studá (N debe studá)'
      },
      {
        pt: 'Volição: N kere kanta (Eu quero cantar)',
        cv: 'Volison: N kere kanta (N kere kanta)'
      }
    ]
  },
  {
    id: 17,
    category: 'verbos',
    title: {
      pt: 'Verbos Irregulares e Defectivos',
      cv: 'Verbu Iregular y Defektivu'
    },
    content: {
      pt: 'O crioulo cabo-verdiano tem poucos verbos irregulares comparado ao português. Os principais são "ser/sta" (ser/estar), "ten" (ter), "bai" (ir), "ben" (vir). Alguns verbos são defectivos, usados apenas em certas formas. A irregularidade é principalmente na forma do radical, não na conjugação.',
      cv: 'Kriolu kabuverdianu ten poku verbu iregular komparadu ku purtuges. Prinsipal é "ser/sta" (ser/sta), "ten" (ten), "bai" (bai), "ben" (ben). Alguns verbu é defektivu, uzadu sómente na serti forma. Iregularidadi é prinsipalmenti na forma di radikal, ka na konjugason.'
    },
    examples: [
      {
        pt: 'Ser/Estar: N é (eu sou), N sta (eu estou)',
        cv: 'Ser/Sta: N é (n é), N sta (n sta)'
      },
      {
        pt: 'Ter: N ten (eu tenho), N tinha (eu tinha)',
        cv: 'Ten: N ten (n ten), N tinha (n tinha)'
      },
      {
        pt: 'Ir/Vir: N bai (eu vou), N ben (eu venho)',
        cv: 'Bai/Ben: N bai (n bai), N ben (n ben)'
      }
    ]
  },
  {
    id: 18,
    category: 'verbos',
    title: {
      pt: 'Construções Seriais',
      cv: 'Konstruson Serial'
    },
    content: {
      pt: 'As construções verbais seriais são características do crioulo cabo-verdiano. Dois ou mais verbos aparecem em sequência sem conjunção, expressando ações relacionadas. Estas construções são influência das línguas africanas e não existem no português da mesma forma.',
      cv: 'Konstruson verbal serial é karakterístiku di kriolu kabuverdianu. Dos o más verbu ta parése na sekuênsia sen konjunson, espresandu ason relacionadu. Es konstruson é influênsia di língua afrikanu y ka ezisti na purtuges di mesmu forma.'
    },
    examples: [
      {
        pt: 'Movimento: N bai kumpra pãu (Eu vou comprar pão)',
        cv: 'Movimentu: N bai kumpra pãu (N bai kumpra pãu)'
      },
      {
        pt: 'Resultado: N kore txiga kasa (Eu corri chegando em casa)',
        cv: 'Rizultadu: N kore txiga kaza (N kore txiga kaza)'
      },
      {
        pt: 'Instrumento: N pega faka korta karne (Eu pego faca corto carne)',
        cv: 'Instrumentu: N pega faka korta karni (N pega faka korta karni)'
      }
    ]
  },
  {
    id: 19,
    category: 'verbos',
    title: {
      pt: 'Aspecto Perfectivo e Imperfectivo',
      cv: 'Aspetu Perfektivu y Imperfektivu'
    },
    content: {
      pt: 'O sistema aspectual do crioulo distingue entre ações completas (perfectivo) e ações em progresso ou habituais (imperfectivo). O perfectivo não tem marcador ou usa "ja" (já). O imperfectivo usa "ta". Esta distinção é fundamental para expressar tempo e ação corretamente.',
      cv: 'Sistema aspetual di kriolu ta distingui entri ason kompletu (perfektivu) y ason na progresu o habitual (imperfektivu). Perfektivu ka ten markadó o ta uza "ja" (ja). Imperfektivu ta uza "ta". Es distinson é fundamental pa espresa tempu y ason koretamenti.'
    },
    examples: [
      {
        pt: 'Perfectivo: N kume (Eu comi - ação completa)',
        cv: 'Perfektivu: N kume (N kume - ason kompletu)'
      },
      {
        pt: 'Imperfectivo: N ta kume (Eu como - habitual/progressivo)',
        cv: 'Imperfektivu: N ta kume (N ta kume - habitual/progresívu)'
      },
      {
        pt: 'Perfectivo com "ja": N ja kume (Eu já comi)',
        cv: 'Perfektivu ku "ja": N ja kume (N ja kume)'
      }
    ]
  },
  {
    id: 20,
    category: 'verbos',
    title: {
      pt: 'Voz Ativa e Construções Causativas',
      cv: 'Voz Ativu y Konstruson Kauzativu'
    },
    content: {
      pt: 'O crioulo cabo-verdiano prefere a voz ativa. As construções causativas expressam que alguém faz com que outra pessoa faça algo. Usa-se "faze" (fazer) + verbo ou "manda" (mandar) + verbo. Estas construções são muito produtivas e expressam diferentes graus de causação.',
      cv: 'Kriolu kabuverdianu ta preferi voz ativu. Konstruson kauzativu ta espresa ki algen ta faze ku otru pesoa faze algun koze. Ta uza "faze" (faze) + verbu o "manda" (manda) + verbu. Es konstruson é muitu produtívu y ta espresa diferenti grau di kauzason.'
    },
    examples: [
      {
        pt: 'Causativo direto: N faze el kume (Eu faço ele comer)',
        cv: 'Kauzativu diretu: N faze el kume (N faze el kume)'
      },
      {
        pt: 'Causativo indireto: N manda el bai (Eu mando ele ir)',
        cv: 'Kauzativu indiretu: N manda el bai (N manda el bai)'
      },
      {
        pt: 'Causativo permissivo: N dexa el brinka (Eu deixo ele brincar)',
        cv: 'Kauzativu permisívu: N dexa el brinka (N dexa el brinka)'
      }
    ]
  },

  // PRONOMES (5 leçons)
  {
    id: 10,
    category: 'pronomes',
    title: {
      pt: 'Pronomes Pessoais',
      cv: 'Pronomi Pesoal'
    },
    content: {
      pt: 'Os pronomes pessoais em cabo-verdiano são fundamentais para a comunicação básica. Eles têm múltiplas formas, dependendo da posição na frase e da ênfase desejada.',
      cv: 'Pronomi pesoal na kriolu é fundamental pa komunikason básiku. Es ten múltiplas forma, dipendendu di pozison na frazi y di ênfazi dizejadu.'
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
      }
    ]
  },
  {
    id: 11,
    category: 'pronomes',
    title: {
      pt: 'Pronomes Demonstrativos',
      cv: 'Pronomi Demostrativu'
    },
    content: {
      pt: 'Os pronomes demonstrativos indicam proximidade ou distância em relação ao falante. O sistema é mais simples que o português, com formas específicas para diferentes graus de distância.',
      cv: 'Pronomi demostrativu ta indika prosimidadi o distânsia na relason ku falanti. Sistema é más simpli ki purtuges, ku forma ispesífiku pa diferenti grau di distânsia.'
    },
    examples: [
      {
        pt: 'Este/Esta (próximo): es, kel (este, esta)',
        cv: 'Es/Kel (prósimu): es, kel (es, kel)'
      },
      {
        pt: 'Esse/Essa (médio): kes, akel (esse, aquele)',
        cv: 'Kes/Akel (médiu): kes, akel (kes, akel)'
      },
      {
        pt: 'Aquele/Aquela (distante): akel li (aquele lá)',
        cv: 'Akel li (distanti): akel li (akel li)'
      }
    ]
  },
  {
    id: 22,
    category: 'pronomes',
    title: {
      pt: 'Pronomes Possessivos',
      cv: 'Pronomi Posesívu'
    },
    content: {
      pt: 'Os pronomes possessivos no crioulo cabo-verdiano são mais simples que no português. Não há concordância de gênero nem número. Usam-se formas como "nha" (meu/minha), "bu" (teu/tua), "si" (seu/sua). Podem aparecer antes ou depois do substantivo, mudando ligeiramente o significado.',
      cv: 'Pronomi posesívu na kriolu kabuverdianu é más simpli ki na purtuges. Ka ten konkordânsia di jéneru nen númeru. Ta uza forma kuma "nha" (nha), "bu" (bu), "si" (si). Podi parese antis o dipois di sustantivu, mudandu lijeramenti signifikadu.'
    },
    examples: [
      {
        pt: 'Primeira pessoa: nha kasa (minha casa), kasa nha (a casa minha)',
        cv: 'Priméru pesoa: nha kaza (nha kaza), kaza nha (kaza nha)'
      },
      {
        pt: 'Segunda pessoa: bu fidju (teu filho), fidju bu (o filho teu)',
        cv: 'Sigundu pesoa: bu fidju (bu fidju), fidju bu (fidju bu)'
      },
      {
        pt: 'Terceira pessoa: si trabadju (seu trabalho), trabadju si (o trabalho seu)',
        cv: 'Terséru pesoa: si trabadju (si trabadju), trabadju si (trabadju si)'
      }
    ]
  },
  {
    id: 23,
    category: 'pronomes',
    title: {
      pt: 'Pronomes Interrogativos e Relativos',
      cv: 'Pronomi Interrogativu y Relativu'
    },
    content: {
      pt: 'Os pronomes interrogativos são usados para fazer perguntas: "ken" (quem), "kuze" (o que), "kal" (qual), "kuantu" (quanto). Os relativos ligam orações: "ki" (que), "undi" (onde), "kuandu" (quando). Estes pronomes são essenciais para formar frases complexas.',
      cv: 'Pronomi interrogativu ta ser uzadu pa faze pergunta: "ken" (ken), "kuze" (kuze), "kal" (kal), "kuantu" (kuantu). Relativu ta liga orason: "ki" (ki), "undi" (undi), "kuandu" (kuandu). Es pronomi é esensial pa forma frazi kompleksu.'
    },
    examples: [
      {
        pt: 'Interrogativos: Ken ki é? (Quem é?), Kuze ki bu kere? (O que você quer?)',
        cv: 'Interrogativu: Ken ki é? (Ken ki é?), Kuze ki bu kere? (Kuze ki bu kere?)'
      },
      {
        pt: 'Relativos: Omi ki ben (O homem que vem), Kasa undi n mora (Casa onde eu moro)',
        cv: 'Relativu: Omi ki ben (Omi ki ben), Kaza undi n mora (Kaza undi n mora)'
      },
      {
        pt: 'Quantitativos: Kuantu ki kusta? (Quanto custa?), Kal ki bu preferi? (Qual preferes?)',
        cv: 'Kuantitativu: Kuantu ki kusta? (Kuantu ki kusta?), Kal ki bu preferi? (Kal ki bu preferi?)'
      }
    ]
  },
  {
    id: 24,
    category: 'pronomes',
    title: {
      pt: 'Pronomes Indefinidos e Numerais',
      cv: 'Pronomi Indefinidu y Numeral'
    },
    content: {
      pt: 'Os pronomes indefinidos expressam quantidade ou identidade imprecisa: "algen" (alguém), "nada" (nada), "tudu" (tudo), "kada" (cada). Os numerais funcionam como pronomes: "un" (um), "alguns" (alguns), "muitu" (muito). Estes pronomes são muito usados na fala cotidiana.',
      cv: 'Pronomi indefinidu ta espresa kuantidadi o identidadi impresizu: "algen" (algen), "nada" (nada), "tudu" (tudu), "kada" (kada). Numeral ta funsiona kuma pronomi: "un" (un), "alguns" (alguns), "muitu" (muitu). Es pronomi ta ser muitu uzadu na fala kotidjanu.'
    },
    examples: [
      {
        pt: 'Indefinidos: Algen ta ben (Alguém vem), Nada ka ta akontese (Nada acontece)',
        cv: 'Indefinidu: Algen ta ben (Algen ta ben), Nada ka ta akontese (Nada ka ta akontese)'
      },
      {
        pt: 'Quantitativos: Tudu sta bon (Tudo está bem), Muitu ta fala (Muitos falam)',
        cv: 'Kuantitativu: Tudu sta bon (Tudu sta bon), Muitu ta fala (Muitu ta fala)'
      },
      {
        pt: 'Distributivos: Kada un ten si manera (Cada um tem sua maneira)',
        cv: 'Distributívu: Kada un ten si manera (Kada un ten si manera)'
      }
    ]
  },
  {
    id: 25,
    category: 'pronomes',
    title: {
      pt: 'Clíticos e Pronomes Átonos',
      cv: 'Klítiku y Pronomi Átonu'
    },
    content: {
      pt: 'Os pronomes clíticos são formas reduzidas que se ligam ao verbo. No crioulo, incluem formas como "-l" (o/a), "-s" (os/as), "-m" (me). Estes pronomes podem aparecer antes ou depois do verbo, dependendo do contexto sintático. São muito frequentes na fala natural.',
      cv: 'Pronomi klítiku é forma reduzidu ki ta liga ku verbu. Na kriolu, ta inklui forma kuma "-l" (l), "-s" (s), "-m" (m). Es pronomi podi parese antis o dipois di verbu, dipendendu di kontestu sintátiku. É muitu frekuenti na fala natural.'
    },
    examples: [
      {
        pt: 'Proclíticos: N l odja (Eu o vejo), Bu m konxe (Tu me conheces)',
        cv: 'Proklítiku: N l odja (N l odja), Bu m konxe (Bu m konxe)'
      },
      {
        pt: 'Enclíticos: Odja-l (Vê-lo), Konxe-m (Conhece-me)',
        cv: 'Enklítiku: Odja-l (Odja-l), Konxe-m (Konxe-m)'
      },
      {
        pt: 'Duplos clíticos: N l da-l (Eu lho dou), Bu m mostra-s (Tu mos mostras)',
        cv: 'Duplu klítiku: N l da-l (N l da-l), Bu m mostra-s (Bu m mostra-s)'
      }
    ]
  },

  // GERAL (5 leçons)
  {
    id: 12,
    category: 'geral',
    title: {
      pt: 'Introdução ao Crioulo Cabo-verdiano',
      cv: 'Introduson pa Kriolu Kabuverdianu'
    },
    content: {
      pt: 'O crioulo cabo-verdiano (Kabuverdianu) é uma língua crioula de base portuguesa falada nas ilhas de Cabo Verde. É a língua materna da maioria da população cabo-verdiana e tem variantes regionais. A variedade de Santiago é considerada a mais influente e é a base para a padronização.',
      cv: 'Kriolu kabuverdianu (Kabuverdianu) é un língua kriolu di bazi purtuges papiadu na ilha di Kabu Verdi. É língua materni di maioria di populason kabuverdianu y ten varianti rejional. Variedadi di Santiagu é konsideradu más influenti y é bazi pa padronizason.'
    },
    examples: [
      {
        pt: 'Saudação: Oi, kuma bu sta? (Oi, como você está?)',
        cv: 'Saudason: Oi, kuma bu sta? (Oi, kuma bu sta?)'
      },
      {
        pt: 'Resposta: N sta bon, obrigadu (Estou bem, obrigado)',
        cv: 'Risposta: N sta bon, obrigadu (N sta bon, obrigadu)'
      },
      {
        pt: 'Despedida: Té logu (Até logo)',
        cv: 'Dispidida: Té logu (Té logu)'
      }
    ]
  },
  {
    id: 26,
    category: 'geral',
    title: {
      pt: 'História e Formação do Crioulo',
      cv: 'Stória y Formason di Kriolu'
    },
    content: {
      pt: 'O crioulo cabo-verdiano formou-se no século XV com o encontro entre portugueses, africanos de várias etnias e outros grupos. Desenvolveu-se como língua de comunicação entre grupos diversos. Influências principais: português (lexical), línguas africanas (estrutural), e contatos posteriores com outras línguas europeias.',
      cv: 'Kriolu kabuverdianu forma na sékulu XV ku enkontru entri purtuges, afrikanu di vária etnia y otru grupu. Dizinvolve kuma língua di komunikason entri grupu diversu. Influênsia prinsipal: purtuges (leksikal), língua afrikanu (struktural), y kontatu posteriór ku otru língua europeu.'
    },
    examples: [
      {
        pt: 'Período de formação: Séculos XV-XVII',
        cv: 'Períodu di formason: Sékulu XV-XVII'
      },
      {
        pt: 'Influências africanas: Estruturas gramaticais, sistema tonal',
        cv: 'Influênsia afrikanu: Strutura gramatikal, sistema tonal'
      },
      {
        pt: 'Base lexical: 90% português, 10% outras línguas',
        cv: 'Bazi leksikal: 90% purtuges, 10% otru língua'
      }
    ]
  },
  {
    id: 27,
    category: 'geral',
    title: {
      pt: 'Variantes Regionais do Crioulo',
      cv: 'Varianti Rejional di Kriolu'
    },
    content: {
      pt: 'Existem duas grandes variedades: Sotavento (Santiago, Fogo, Brava, Maio) e Barlavento (São Vicente, Santo Antão, São Nicolau, Sal, Boa Vista). Cada ilha tem suas particularidades. Santiago é considerado mais conservador, São Vicente mais inovador. As diferenças são principalmente fonéticas e lexicais.',
      cv: 'Ezisti dos grandi variedadi: Sotaventu (Santiagu, Fogu, Brava, Maiu) y Barlaventu (Sãu Visenti, Santu Antãu, Sãu Nikolau, Sal, Boa Vista). Kada ilha ten ses partikularidadi. Santiagu é konsideradu más konservadó, Sãu Visenti más inovadó. Diferensa é prinsipalmenti fonétiku y leksikal.'
    },
    examples: [
      {
        pt: 'Sotavento: "djuntu" (junto), "txeu" (muito), "kel" (aquele)',
        cv: 'Sotaventu: "djuntu" (djuntu), "txeu" (txeu), "kel" (kel)'
      },
      {
        pt: 'Barlavento: "juntu" (junto), "muito" (muito), "akel" (aquele)',
        cv: 'Barlaventu: "juntu" (juntu), "muito" (muito), "akel" (akel)'
      },
      {
        pt: 'Características: Sotavento mais africano, Barlavento mais português',
        cv: 'Karakterístika: Sotaventu más afrikanu, Barlaventu más purtuges'
      }
    ]
  },
  {
    id: 28,
    category: 'geral',
    title: {
      pt: 'Padronização e Escrita do Crioulo',
      cv: 'Padronizason y Skritu di Kriolu'
    },
    content: {
      pt: 'O crioulo cabo-verdiano tem um sistema de escrita oficial desde 1998 (ALUPEC - Alfabeto Unificado para a Escrita do Cabo-verdiano). Baseia-se no princípio fonológico: cada som corresponde a uma letra. Há esforços de padronização para unificar as variantes, principalmente para educação e literatura.',
      cv: 'Kriolu kabuverdianu ten un sistema di skritu ofisial dês di 1998 (ALUPEC - Alfabetu Unifikadu pa Skritu di Kabuverdianu). Ta bazia na prinsípiu fonolójiku: kada som ta koresponde ku un letra. Ten esforsu di padronizason pa unifika varianti, prinsipalmenti pa edukason y literatura.'
    },
    examples: [
      {
        pt: 'ALUPEC: Sistema oficial de escrita desde 1998',
        cv: 'ALUPEC: Sistema ofisial di skritu dês di 1998'
      },
      {
        pt: 'Princípio: Um som = uma letra (fonológico)',
        cv: 'Prinsípiu: Un som = un letra (fonolójiku)'
      },
      {
        pt: 'Uso: Educação, literatura, comunicação oficial',
        cv: 'Uzu: Edukason, literatura, komunikason ofisial'
      }
    ]
  },
  {
    id: 29,
    category: 'geral',
    title: {
      pt: 'Crioulo na Literatura e Mídia',
      cv: 'Kriolu na Literatura y Mídia'
    },
    content: {
      pt: 'O crioulo cabo-verdiano tem rica tradição literária com autores como Eugénio Tavares, B. Léza, e contemporâneos como Corsino Fortes. Na música, é fundamental na morna, coladeira e outros gêneros. Hoje está presente na mídia, internet e redes sociais, mostrando sua vitalidade.',
      cv: 'Kriolu kabuverdianu ten riku tradison literáriu ku autór kuma Eugéniu Tavaris, B. Léza, y kontemporáneu kuma Korsinu Fortis. Na múzika, é fundamental na morna, koladéra y otru jéneru. Oji ta sta prezenti na mídia, internet y redi sosial, mostrandu si vitalidadi.'
    },
    examples: [
      {
        pt: 'Literatura: Eugénio Tavares, B. Léza, Corsino Fortes',
        cv: 'Literatura: Eugéniu Tavaris, B. Léza, Korsinu Fortis'
      },
      {
        pt: 'Música: Morna, coladeira, funaná, batuku',
        cv: 'Múzika: Morna, koladéra, funaná, batuku'
      },
      {
        pt: 'Mídia moderna: Rádio, TV, internet, redes sociais',
        cv: 'Mídia modernu: Rádiu, TV, internet, redi sosial'
      }
    ]
  },
  {
    id: 30,
    category: 'geral',
    title: {
      pt: 'Crioulo e Identidade Cabo-verdiana',
      cv: 'Kriolu y Identidadi Kabuverdianu'
    },
    content: {
      pt: 'O crioulo é fundamental para a identidade cabo-verdiana. Representa a síntese cultural única do arquipélago, unindo influências africanas, europeias e outras. É símbolo de resistência, criatividade e adaptação. Hoje é reconhecido como língua nacional e patrimônio cultural imaterial da humanidade.',
      cv: 'Kriolu é fundamental pa identidadi kabuverdianu. Ta reprezenta síntezi kultural úniku di arkipélagu, uníndu influênsia afrikanu, europeu y otru. É símbolu di rezistênsia, kriatividadi y adaptason. Oji é rekonxedu kuma língua nasional y patrimóniu kultural imaterial di umanidadi.'
    },
    examples: [
      {
        pt: 'Identidade: Língua materna de 95% dos cabo-verdianos',
        cv: 'Identidadi: Língua materni di 95% di kabuverdianu'
      },
      {
        pt: 'Símbolo: Resistência, criatividade, morabeza',
        cv: 'Símbolu: Rezistênsia, kriatividadi, morabeza'
      },
      {
        pt: 'Reconhecimento: Língua nacional, patrimônio da UNESCO',
        cv: 'Rekonximentu: Língua nasional, patrimóniu di UNESCO'
      }
    ]
  }
];

// Função para obter lições por categoria
export const getLessonsByCategory = (category: string) => {
  return grammarLessonsEnriched.filter(lesson => lesson.category === category);
};

// Contadores por categoria
export const getCategoryCounts = () => {
  return {
    fonologia: getLessonsByCategory('fonologia').length,
    morfologia: getLessonsByCategory('morfologia').length,
    sintaxi: getLessonsByCategory('sintaxi').length,
    verbos: getLessonsByCategory('verbos').length,
    pronomes: getLessonsByCategory('pronomes').length,
    geral: getLessonsByCategory('geral').length
  };
};
