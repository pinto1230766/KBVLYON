export interface Lesson {
  id: number;
  category: string;
  level: string;
  title: {
    pt: string;
    cv: string;
  };
  description: {
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
  exercises?: Array<{
    type: string;
    question: {
      pt: string;
      cv: string;
    };
    answer: {
      pt: string;
      cv: string;
    };
  }>;
  practicalTips?: {
    pt: string;
    cv: string;
  };
}

export const lessonsData: Lesson[] = [
  {
    "id": 1,
    "category": "general",
    "level": "débutant",
    "title": {
      "pt": "Introdução ao Crioulo Cabo-verdiano",
      "cv": "Introduson pa Kriolu Kabuverdianu"
    },
    "description": {
      "pt": "Introdução ao Crioulo Cabo-verdiano",
      "cv": "Introduson pa Kriolu Kabuverdianu"
    },
    "content": {
      "pt": "O crioulo cabo-verdiano (Kabuverdianu) é uma língua crioula de base portuguesa falada nas ilhas de Cabo Verde. É a língua materna da maioria dos cabo-verdianos e tem várias variantes regionais, sendo as principais: Sotavento (Santiago, Fogo, Brava, Maio) e Barlavento (São Vicente, Santo Antão, São Nicolau, Sal, Boa Vista).\n\nCaracterísticas principais:\n- Não tem conjugação verbal tradicional\n- Usa marcadores de tempo (ta, dja, ba, ata)\n- Ordem das palavras: Sujeito-Verbo-Objeto\n- Sem concordância de gênero ou número\n- Vocabulário principalmente português com influências africanas",
      "cv": "Kriolu kabuverdianu (Kabuverdianu) é un lingua kriolu di bazi purtugés papiadu na ilha di Kabu Verdi. É lingua materni di maioria di kabuverdianu y ten vária varianti rejional, séndu prinsipal: Sotaventu (Santiagu, Fogu, Brava, Maiu) y Barlaventu (Son Visenti, Santu Antaon, Son Nikolau, Sal, Boa Vista).\n\nKaraterístika prinsipal:\n- Ka ten konjugason verbal tradisional\n- Ta uza markador di tenpu (ta, dja, ba, ata)\n- Orden di parabra: Sujetu-Berbu-Objetu\n- Sin konkordánsia di jéneru o númeru\n- Vokabuláriu prinsipalmenti purtugés ku influénsia afrikanu"
    },
    "examples": [
      {
        "pt": "Santiago: N ka ta papia (Eu não falo)",
        "cv": "Santiagu: N ka ta papia"
      },
      {
        "pt": "São Vicente: M ka ta fala (Eu não falo)",
        "cv": "Son Visenti: M ka ta fala"
      },
      {
        "pt": "Diferenças regionais são significativas",
        "cv": "Diferénsia rejional é sinifikativu"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "cv": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 2,
    "category": "pronouns",
    "level": "débutant",
    "title": {
      "pt": "Sistema de Pronomes Pessoais",
      "cv": "Sistema di Pronomi Pesual"
    },
    "description": {
      "pt": "Sistema de Pronomes Pessoais",
      "cv": "Sistema di Pronomi Pesual"
    },
    "content": {
      "pt": "O sistema pronominal do crioulo cabo-verdiano é mais simples que o português:\n\nPronomes Sujeito:\n- N / Mi (eu) - forma curta e longa\n- Bu / Bo (tu/você)\n- El / E (ele/ela) - sem distinção de gênero\n- Nos / Nu (nós)\n- Nhos / Nhós (vocês/vós)\n- Es / Ês (eles/elas)\n\nPronomes Objeto:\n- M / Mi (me/mim)\n- Bu / Bo (te/ti)\n- L / El (o/a, lhe)\n- Nos (nos)\n- Nhos (vos)\n- Es (os/as, lhes)\n\nCaracterísticas:\n- Não há distinção formal/informal (tu/você)\n- Sem distinção de gênero na 3ª pessoa\n- Formas curtas usadas antes de verbos\n- Formas longas usadas em ênfase ou isoladamente",
      "cv": "Sistema pronominal di kriolu kabuverdianu é más sinplis ki purtugés:\n\nPronomi Sujetu:\n- N / Mi (ami) - forma kurtu y longu\n- Bu / Bo (bo)\n- El / E (e) - sin distinson di jéneru\n- Nos / Nu (nu)\n- Nhos / Nhós (nhós)\n- Es / Ês (és)\n\nPronomi Objetu:\n- M / Mi (mi)\n- Bu / Bo (bu)\n- L / El (el)\n- Nos (nos)\n- Nhos (nhos)\n- Es (es)\n\nKaraterístika:\n- Ka ten distinson formal/informal\n- Sin distinson di jéneru na 3ª pesua\n- Forma kurtu uzadu antis di berbu\n- Forma longu uzadu in énfazi o izoladamente"
    },
    "examples": [
      {
        "pt": "N ta bai (Eu vou) - forma curta",
        "cv": "N ta bai - forma kurtu"
      },
      {
        "pt": "Mi ta bai (EU vou) - forma longa, ênfase",
        "cv": "Mi ta bai - forma longu, énfazi"
      },
      {
        "pt": "Bu odja-m? (Você me viu?)",
        "cv": "Bu odja-m?"
      },
      {
        "pt": "El da-l livru (Ele deu-lhe o livro)",
        "cv": "El da-l livru"
      },
      {
        "pt": "Nos ta papia ku nhos (Nós falamos com vocês)",
        "cv": "Nos ta papia ku nhos"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "cv": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 3,
    "category": "verbs",
    "level": "débutant",
    "title": {
      "pt": "Marcadores de Tempo, Modo e Aspecto (TMA)",
      "cv": "Markador di Tenpu, Modu y Aspetu (TMA)"
    },
    "description": {
      "pt": "Marcadores de Tempo, Modo e Aspecto (TMA)",
      "cv": "Markador di Tenpu, Modu y Aspetu (TMA)"
    },
    "content": {
      "pt": "O crioulo cabo-verdiano não conjuga verbos. Em vez disso, usa marcadores TMA antes do verbo:\n\n1. TA - Presente habitual/progressivo\n   - Ações habituais: N ta trabadja (Eu trabalho)\n   - Ações em progresso: N ta trabadja (Estou trabalhando)\n\n2. DJA/JA - Perfectivo (ação completada)\n   - N dja kume (Eu já comi)\n   - El dja bai (Ele já foi)\n\n3. BA - Passado\n   - N ba bai (Eu fui)\n   - Es ba faze (Eles fizeram)\n\n4. ATA/TA BAI - Futuro\n   - N ata faze (Eu vou fazer)\n   - Bu ta bai kume (Você vai comer)\n\n5. STABA/TAVA - Passado progressivo\n   - N staba trabadja (Eu estava trabalhando)\n\n6. KA - Negação\n   - N ka ta bai (Eu não vou)\n   - El ka kume (Ele não come)\n\nCombinações possíveis:\n- Ka + ta: negação do habitual\n- Ka + dja: negação do perfectivo\n- Ta + ka: progressivo negativo",
      "cv": "Kriolu kabuverdianu ka ta konjuga berbu. In vez dissu, ta uza markador TMA antis di berbu:\n\n1. TA - Prezenti abitual/progresivu\n   - Ason abitual: N ta trabadja (N ta trabadja)\n   - Ason in progresu: N ta trabadja (N sta trabadja)\n\n2. DJA/JA - Perfetivu (ason konpletadu)\n   - N dja kume (N dja kume)\n   - El dja bai (El dja bai)\n\n3. BA - Pasadu\n   - N ba bai (N ba bai)\n   - Es ba faze (Es ba faze)\n\n4. ATA/TA BAI - Futuru\n   - N ata faze (N ata faze)\n   - Bu ta bai kume (Bu ta bai kume)\n\n5. STABA/TAVA - Pasadu progresivu\n   - N staba trabadja (N staba trabadja)\n\n6. KA - Negason\n   - N ka ta bai (N ka ta bai)\n   - El ka kume (El ka kume)\n\nKombinason posível:\n- Ka + ta: negason di abitual\n- Ka + dja: negason di perfetivu\n- Ta + ka: progresivu negativu"
    },
    "examples": [
      {
        "pt": "N ta kume pan kada dia (Como pão todo dia)",
        "cv": "N ta kume pan kada dia"
      },
      {
        "pt": "N dja kume (Já comi)",
        "cv": "N dja kume"
      },
      {
        "pt": "N ba kume onti (Comi ontem)",
        "cv": "N ba kume onti"
      },
      {
        "pt": "N ata kume manha (Vou comer amanhã)",
        "cv": "N ata kume manha"
      },
      {
        "pt": "N staba kume kuandu bu txiga (Estava comendo quando você chegou)",
        "cv": "N staba kume kuandu bu txiga"
      },
      {
        "pt": "N ka ta kume karne (Não como carne)",
        "cv": "N ka ta kume karni"
      },
      {
        "pt": "N ka dja kume (Ainda não comi)",
        "cv": "N ka dja kume"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "cv": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 4,
    "category": "verbs",
    "level": "débutant",
    "title": {
      "pt": "Verbos Copulativos: É e STA",
      "cv": "Berbu Kopulativu: É y STA"
    },
    "description": {
      "pt": "Verbos Copulativos: É e STA",
      "cv": "Berbu Kopulativu: É y STA"
    },
    "content": {
      "pt": "O crioulo tem dois verbos copulativos principais:\n\n1. É - Ser (estados permanentes, identidade)\n   - Não varia com pessoa ou tempo\n   - Usado para: identidade, profissão, características permanentes, origem\n   - Exemplos:\n     * N é kabuverdianu (Sou cabo-verdiano)\n     * Bu é profesor (És professor)\n     * El é altu (Ele é alto)\n     * Kaza é grandi (A casa é grande)\n\n2. STA - Estar (estados temporários, localização)\n   - Também não varia\n   - Usado para: localização, estados temporários, progressivo\n   - Exemplos:\n     * N sta na kaza (Estou em casa)\n     * Bu sta doenti (Estás doente)\n     * El sta trabadja (Ele está trabalhando)\n     * Livru sta riba meza (O livro está sobre a mesa)\n\nDiferenças importantes:\n- É: permanente, essencial\n- STA: temporário, circunstancial\n- STA + verbo: forma progressiva\n\nCom negação:\n- Ka + é: N ka é profesor (Não sou professor)\n- Ka + sta: N ka sta li (Não estou aqui)",
      "cv": "Kriolu ten dos berbu kopulativu prinsipal:\n\n1. É - Ser (stadu permanenti, identidadi)\n   - Ka ta varia ku pesua o tenpu\n   - Uzadu pa: identidadi, profeson, karaterístika permanenti, orijen\n   - Ezenplu:\n     * N é kabuverdianu (N é kabuverdianu)\n     * Bu é profesor (Bu é profesor)\n     * El é altu (El é altu)\n     * Kaza é grandi (Kaza é grandi)\n\n2. STA - Sta (stadu temporáriu, lokalizason)\n   - Tanbén ka ta varia\n   - Uzadu pa: lokalizason, stadu temporáriu, progresivu\n   - Ezenplu:\n     * N sta na kaza (N sta na kaza)\n     * Bu sta doenti (Bu sta doenti)\n     * El sta trabadja (El sta trabadja)\n     * Livru sta riba meza (Livru sta riba meza)\n\nDiferénsia inportanti:\n- É: permanenti, esensial\n- STA: temporáriu, sirkustansial\n- STA + berbu: forma progresivu\n\nKu negason:\n- Ka + é: N ka é profesor (N ka é profesor)\n- Ka + sta: N ka sta li (N ka sta li)"
    },
    "examples": [
      {
        "pt": "N é studanti, mas oji N ka sta na skola (Sou estudante, mas hoje não estou na escola)",
        "cv": "N é studanti, ma oji N ka sta na skola"
      },
      {
        "pt": "El é bedju, ma el sta bon (Ele é velho, mas está bem)",
        "cv": "El é bedju, ma el sta bon"
      },
      {
        "pt": "Kaza é novu, ma sta suju (A casa é nova, mas está suja)",
        "cv": "Kaza é novu, ma sta suju"
      },
      {
        "pt": "N é di Praia, ma agora N sta na Mindelo (Sou da Praia, mas agora estou no Mindelo)",
        "cv": "N é di Praia, ma agora N sta na Mindelu"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "cv": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 5,
    "category": "syntax",
    "level": "débutant",
    "title": {
      "pt": "Ordem das Palavras e Estrutura da Frase",
      "cv": "Orden di Parabra y Strutura di Frazi"
    },
    "description": {
      "pt": "Ordem das Palavras e Estrutura da Frase",
      "cv": "Orden di Parabra y Strutura di Frazi"
    },
    "content": {
      "pt": "A ordem básica das palavras em crioulo é SVO (Sujeito-Verbo-Objeto), similar ao português:\n\n1. Frases Declarativas:\n   - Sujeito + (TMA) + Verbo + Objeto\n   - N ta kume pan (Eu como pão)\n   - Maria dja konpra livru (Maria comprou livro)\n\n2. Frases Interrogativas:\n   - Mantém ordem SVO, muda apenas entonação\n   - Bu ta bai? (Você vai?)\n   - Com palavras interrogativas no início:\n     * Ki bu ta faze? (O que você faz?)\n     * Undi bu sta bai? (Onde você vai?)\n     * Kuandu el ta txiga? (Quando ele chega?)\n     * Ken é es? (Quem são eles?)\n     * Pamodi bu ka bai? (Por que você não vai?)\n\n3. Frases Negativas:\n   - Ka antes do verbo/TMA\n   - N ka ta bai (Não vou)\n   - El ka kume (Ele não come)\n   - Pode ter 'n' no final para ênfase:\n     * N ka bai n (Não vou mesmo)\n\n4. Posição dos Adjuntos:\n   - Tempo: geralmente no final\n     * N ta bai skola kada dia (Vou à escola todo dia)\n   - Lugar: após o verbo\n     * N sta na kaza (Estou em casa)\n   - Modo: após o verbo\n     * El ta papia devagar (Ele fala devagar)\n\n5. Pronomes Objeto:\n   - Após o verbo, ligados por hífen\n   - N odja-bu (Eu te vi)\n   - El da-m livru (Ele me deu livro)",
      "cv": "Orden báziku di parabra in kriolu é SVO (Sujetu-Berbu-Objetu), similar a purtugés:\n\n1. Frazi Deklarativu:\n   - Sujetu + (TMA) + Berbu + Objetu\n   - N ta kume pan (N ta kume pan)\n   - Maria dja konpra livru (Maria dja konpra livru)\n\n2. Frazi Interogativu:\n   - Ta mantén orden SVO, ta muda só intonason\n   - Bu ta bai? (Bu ta bai?)\n   - Ku parabra interogativu na inísiu:\n     * Ki bu ta faze? (Ki bu ta faze?)\n     * Undi bu sta bai? (Undi bu sta bai?)\n     * Kuandu el ta txiga? (Kuandu el ta txiga?)\n     * Ken é es? (Ken é es?)\n     * Pamodi bu ka bai? (Pamodi bu ka bai?)\n\n3. Frazi Negativu:\n   - Ka antis di berbu/TMA\n   - N ka ta bai (N ka ta bai)\n   - El ka kume (El ka kume)\n   - Podi ten 'n' na final pa énfazi:\n     * N ka bai n (N ka bai n)\n\n4. Pozison di Adjuntu:\n   - Tenpu: jeralimenti na final\n     * N ta bai skola kada dia (N ta bai skola kada dia)\n   - Lugar: dipois di berbu\n     * N sta na kaza (N sta na kaza)\n   - Modu: dipois di berbu\n     * El ta papia devagar (El ta papia devagar)\n\n5. Pronomi Objetu:\n   - Dipois di berbu, ligadu pur ífen\n   - N odja-bu (N odja-bu)\n   - El da-m livru (El da-m livru)"
    },
    "examples": [
      {
        "pt": "N ta kume pan na padaria kada manha (Como pão na padaria toda manhã)",
        "cv": "N ta kume pan na padaria kada manha"
      },
      {
        "pt": "Ki bu ta faze li? (O que você faz aqui?)",
        "cv": "Ki bu ta faze li?"
      },
      {
        "pt": "Maria ka ta bai merkadu oji n (Maria não vai ao mercado hoje)",
        "cv": "Maria ka ta bai merkadu oji n"
      },
      {
        "pt": "Undi nhos sta mora? (Onde vocês moram?)",
        "cv": "Undi nhos sta mora?"
      },
      {
        "pt": "El da-m un livru bonitu (Ele me deu um livro bonito)",
        "cv": "El da-m un livru bonitu"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "cv": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 6,
    "category": "pronouns",
    "level": "débutant",
    "title": {
      "pt": "Possessivos e Demonstrativos",
      "cv": "Posesivu y Demonstrativu"
    },
    "description": {
      "pt": "Possessivos e Demonstrativos",
      "cv": "Posesivu y Demonstrativu"
    },
    "content": {
      "pt": "Possessivos:\nEm crioulo, os possessivos vêm DEPOIS do substantivo:\n- Kaza nha (minha casa)\n- Livru bu (teu livro)\n- Fidju se (filho dele/dela)\n- Karu nos (nosso carro)\n- Ami nhos (amigo de vocês)\n- Kaza es (casa deles)\n\nDemonstrativos:\n- Es/Kel (este/esse/aquele) - não varia\n- Es kaza (esta casa)\n- Es omi (este homem)\n- Kel dia (aquele dia)\n\nCom 'li' (aqui) e 'la' (lá):\n- Es kaza li (esta casa aqui)\n- Kel omi la (aquele homem lá)",
      "cv": "Posesivu:\nIn kriolu, posesivu ta ben DIPOIS di substantivu:\n- Kaza nha (kaza nha)\n- Livru bu (livru bu)\n- Fidju se (fidju se)\n- Karu nos (karu nos)\n- Ami nhos (ami nhos)\n- Kaza es (kaza es)\n\nDemonstrativu:\n- Es/Kel (es/kel) - ka ta varia\n- Es kaza (es kaza)\n- Es omi (es omi)\n- Kel dia (kel dia)\n\nKu 'li' (li) y 'la' (la):\n- Es kaza li (es kaza li)\n- Kel omi la (kel omi la)"
    },
    "examples": [
      {
        "pt": "Kaza nha é grandi (Minha casa é grande)",
        "cv": "Kaza nha é grandi"
      },
      {
        "pt": "Fidju bu sta na skola? (Teu filho está na escola?)",
        "cv": "Fidju bu sta na skola?"
      },
      {
        "pt": "Es livru li é di N (Este livro aqui é meu)",
        "cv": "Es livru li é di N"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "cv": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 7,
    "category": "morphology",
    "level": "débutant",
    "title": {
      "pt": "Formação do Plural",
      "cv": "Formason di Plural"
    },
    "description": {
      "pt": "Formação do Plural",
      "cv": "Formason di Plural"
    },
    "content": {
      "pt": "O crioulo geralmente NÃO marca plural no substantivo:\n\n1. Plural indicado por contexto:\n   - Un mudjer (uma mulher) / Dus mudjer (duas mulheres)\n   - Un omi (um homem) / Muitu omi (muitos homens)\n\n2. Marcadores de plural:\n   - Números: un, dos, tres, muitu\n   - Quantificadores: algun (alguns), tudu (todos)\n   - Demonstrativos: es (estes/esses)\n\n3. Exceções (plural marcado):\n   - Alguns empréstimos do português mantêm -s\n   - Palavras terminadas em vogal podem adicionar -s\n   - Exemplo: omi → omis (raro)\n\n4. Concordância:\n   - Adjetivos NÃO concordam em número\n   - Mudjer bonitu (mulher bonita)\n   - Mudjer bonitu (mulheres bonitas)",
      "cv": "Kriolu jeralimenti KA ta marka plural na substantivu:\n\n1. Plural indikadu pur kontestu:\n   - Un mudjer / Dus mudjer\n   - Un omi / Muitu omi\n\n2. Markador di plural:\n   - Númeru: un, dos, tres, muitu\n   - Kuantifikador: algun, tudu\n   - Demonstrativu: es\n\n3. Sesonis (plural markadu):\n   - Algun inpréstimus di purtugés ta mantén -s\n   - Parabra terminadu in vogal podi adisiona -s\n   - Ezenplu: omi → omis (raru)\n\n4. Konkordánsia:\n   - Adjetivu KA ta konkorda in númeru\n   - Mudjer bonitu\n   - Mudjer bonitu"
    },
    "examples": [
      {
        "pt": "Un kaza / Tres kaza (uma casa / três casas)",
        "cv": "Un kaza / Tres kaza"
      },
      {
        "pt": "Algun mudjer ta bai merkadu (Algumas mulheres vão ao mercado)",
        "cv": "Algun mudjer ta bai merkadu"
      },
      {
        "pt": "Tudu omi sta trabadja (Todos os homens estão trabalhando)",
        "cv": "Tudu omi sta trabadja"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas estruturas na pregação para melhorar sua comunicação.",
      "cv": "Pratika es strutura na pregason pa midjora bu komunikason."
    }
  },
  {
    "id": 8,
    "category": "Verbos",
    "level": "intermédiaire",
    "title": {
      "pt": "Verbos Essenciais para Pregação",
      "cv": "Berbus Esensial pa Pregason"
    },
    "description": {
      "pt": "Os verbos mais importantes para usar no ministério de porta em porta",
      "cv": "Berbus más inportanti pa uza na ministériu di porta na porta"
    },
    "content": {
      "pt": "Verbos essenciais para a pregação:\n\n1. Falar/Papia - conversar\n2. Mostrar/Mustra - demonstrar\n3. Ler/Le - ler\n4. Explicar/Splika - explicar\n5. Perguntar/Prgunta - perguntar\n6. Estudar/Studa - estudar\n7. Visitar/Vizita - visitar\n8. Voltar/Volta - retornar",
      "cv": "Berbus esensial pa pregason:\n\n1. Papia - papia\n2. Mustra - mustra\n3. Le - le\n4. Splika - splika\n5. Prgunta - prgunta\n6. Studa - studa\n7. Vizita - vizita\n8. Volta - volta"
    },
    "examples": [
      {
        "pt": "Posso falar com você?",
        "cv": "N pode papia ku bo?"
      },
      {
        "pt": "Gostaria de mostrar algo",
        "cv": "N gostaria di mustra un kusa"
      },
      {
        "pt": "Vou ler um versículo",
        "cv": "N ta bai le un versíkulu"
      }
    ],
    "practicalTips": {
      "pt": "Use estes verbos regularmente na pregação para parecer natural.",
      "cv": "Uza es berbus regularmenti na pregason pa parése natural."
    }
  },
  {
    "id": 9,
    "category": "Verbos",
    "level": "avancé",
    "title": {
      "pt": "Verbos Modais e Auxiliares",
      "cv": "Berbus Modal y Auxiliar"
    },
    "description": {
      "pt": "Verbos que expressam possibilidade, necessidade e desejo",
      "cv": "Berbus ki ta exprimi posibilidadi, nesesidadi y dezeju"
    },
    "content": {
      "pt": "Verbos modais:\n\n1. PODE/Pode - poder, capacidade\n2. DEVE/Debe - dever, obrigação\n3. KERE/Kre - querer, desejo\n4. TEN KI/Ten ki - ter que, necessidade\n5. GOSTA/Gosta - gostar, preferência",
      "cv": "Berbus modal:\n\n1. Pode - pode\n2. Debe - debe\n3. Kre - kre\n4. Ten ki - ten ki\n5. Gosta - gosta"
    },
    "examples": [
      {
        "pt": "Você pode me ajudar?",
        "cv": "Bu pode djuda-m?"
      },
      {
        "pt": "Devemos obedecer a Deus",
        "cv": "Nu debe obedese Deus"
      },
      {
        "pt": "Quer aprender mais?",
        "cv": "Bu kre aprende más?"
      }
    ],
    "practicalTips": {
      "pt": "Use modais para ser mais polido e persuasivo.",
      "cv": "Uza modal pa ser más polidu y persuazivu."
    }
  },
  {
    "id": 10,
    "category": "Fonologia",
    "level": "débutant",
    "title": {
      "pt": "Pronúncia Básica - Sons do Crioulo",
      "cv": "Pronúnsia Báziku - Sons di Kriolu"
    },
    "description": {
      "pt": "Como pronunciar corretamente os sons característicos do crioulo",
      "cv": "Modi pa pronunsia korretamenti sons karaterístiku di kriolu"
    },
    "content": {
      "pt": "Sons especiais do crioulo:\n\n1. DJ - como 'j' em 'jogo': dja, djuda\n2. TX - como 'tch' em 'tchau': txiga, txuba\n3. NH - como 'nh' em 'nhoque': nha, nhos\n4. LH - como 'lh' em 'filho': fidju (filho)\n5. K - sempre duro como 'c' em 'casa': kaza, kume",
      "cv": "Sons spesial di kriolu:\n\n1. DJ - dja, djuda\n2. TX - txiga, txuba\n3. NH - nha, nhos\n4. LH - fidju\n5. K - kaza, kume"
    },
    "examples": [
      {
        "pt": "Eu já comi - N dja kume",
        "cv": "N dja kume"
      },
      {
        "pt": "Ele chegou - El txiga",
        "cv": "El txiga"
      },
      {
        "pt": "Minha casa - Kaza nha",
        "cv": "Kaza nha"
      }
    ],
    "practicalTips": {
      "pt": "Pratique os sons DJ e TX que são muito comuns.",
      "cv": "Pratika sons DJ y TX ki é muitu komun."
    }
  },
  {
    "id": 11,
    "category": "Fonologia",
    "level": "intermédiaire",
    "title": {
      "pt": "Acentuação e Ritmo",
      "cv": "Asentuason y Ritmu"
    },
    "description": {
      "pt": "Onde colocar o acento tônico nas palavras",
      "cv": "Undi koloka asentu tóniku na palavras"
    },
    "content": {
      "pt": "Regras de acentuação:\n\n1. Verbos: acento na última sílaba\n   - fa-LÁ, ku-MÉ, dur-MÍ\n\n2. Substantivos: geralmente penúltima\n   - KA-za, LI-vru, PE-soa\n\n3. Palavras com marcadores TMA:\n   - N TA ba-I (Eu vou)\n   - Bu DJA ku-ME (Você já comeu)",
      "cv": "Regra di asentuason:\n\n1. Berbus: asentu na última sílaba\n   - fa-LÁ, ku-MÉ, dur-MÍ\n\n2. Substantivus: jeralmenti penúltima\n   - KA-za, LI-vru, PE-soa\n\n3. Palavras ku markador TMA:\n   - N TA ba-I\n   - Bu DJA ku-ME"
    },
    "examples": [
      {
        "pt": "Falar - fa-LÁ",
        "cv": "fa-LÁ"
      },
      {
        "pt": "Casa - KA-za",
        "cv": "KA-za"
      },
      {
        "pt": "Trabalhar - tra-ba-DJÁ",
        "cv": "tra-ba-DJÁ"
      }
    ],
    "practicalTips": {
      "pt": "Ouça nativos falando para pegar o ritmo natural.",
      "cv": "Skundja nativu papiandu pa panha ritmu natural."
    }
  },
  {
    "id": 12,
    "category": "Vocabulário",
    "level": "débutant",
    "title": {
      "pt": "Vocabulário Religioso Essencial",
      "cv": "Vokabuláriu Relijozu Esensial"
    },
    "description": {
      "pt": "Palavras-chave para falar sobre temas bíblicos",
      "cv": "Palavras-txabi pa papia sobri temas bíblikus"
    },
    "content": {
      "pt": "Vocabulário religioso básico:\n\n- Deus / Deus\n- Jeová / Jeová\n- Bíblia / Bíblia\n- Jesus / Jesus\n- Espírito Santo / Spíritu Santu\n- Reino / Reinu\n- Fé / Fé\n- Oração / Orason\n- Salvação / Salvason\n- Verdade / Verdadi",
      "cv": "Vokabuláriu relijozu báziku:\n\n- Deus\n- Jeová\n- Bíblia\n- Jesus\n- Spíritu Santu\n- Reinu\n- Fé\n- Orason\n- Salvason\n- Verdadi"
    },
    "examples": [
      {
        "pt": "Jeová é nosso Deus",
        "cv": "Jeová é Deus nós"
      },
      {
        "pt": "A Bíblia ensina a verdade",
        "cv": "Bíblia ta nsina verdadi"
      },
      {
        "pt": "Jesus mostrou o caminho",
        "cv": "Jesus mustra kaminhu"
      }
    ],
    "practicalTips": {
      "pt": "Memorize estas palavras-chave primeiro.",
      "cv": "Memoriza es palavras-txabi primeru."
    }
  },
  {
    "id": 13,
    "category": "Prática",
    "level": "intermédiaire",
    "title": {
      "pt": "Frases Prontas para Pregação",
      "cv": "Frasis Prontu pa Pregason"
    },
    "description": {
      "pt": "Expressões completas para usar na pregação de porta em porta",
      "cv": "Exprisons kompletu pa uza na pregason di porta na porta"
    },
    "content": {
      "pt": "Frases úteis:\n\n1. Bom dia! - Bon dia!\n2. Como está? - Modi bu sta?\n3. Posso falar com você? - N pode papia ku bo?\n4. Gostaria de mostrar algo - N gostaria di mustra un kusa\n5. É da Bíblia - É di Bíblia\n6. O que você acha? - Kuze ki bu ta atxa?\n7. Posso voltar? - N pode volta?\n8. Muito obrigado - Muitu brigadu",
      "cv": "Frasis útil:\n\n1. Bon dia!\n2. Modi bu sta?\n3. N pode papia ku bo?\n4. N gostaria di mustra un kusa\n5. É di Bíblia\n6. Kuze ki bu ta atxa?\n7. N pode volta?\n8. Muitu brigadu"
    },
    "examples": [
      {
        "pt": "Bom dia! Como está?",
        "cv": "Bon dia! Modi bu sta?"
      },
      {
        "pt": "Posso mostrar um versículo?",
        "cv": "N pode mustra un versíkulu?"
      },
      {
        "pt": "Gostaria de aprender mais?",
        "cv": "Bu gostaria di aprende más?"
      }
    ],
    "practicalTips": {
      "pt": "Pratique estas frases até ficarem naturais.",
      "cv": "Pratika es frasis té fikadu natural."
    }
  },
  {
    "id": 14,
    "category": "Vocabulário",
    "level": "avancé",
    "title": {
      "pt": "Vocabulário Temático - Sofrimento e Esperança",
      "cv": "Vokabuláriu Temátiku - Sofrimented y Speransa"
    },
    "description": {
      "pt": "Palavras para falar sobre problemas atuais e a esperança bíblica",
      "cv": "Palavras pa papia sobri problemas atual y speransa bíbliku"
    },
    "content": {
      "pt": "Vocabulário sobre problemas:\n- Sofrimento / Sofrimented\n- Guerra / Gera\n- Doença / Duensa\n- Morte / Morti\n- Tristeza / Tristeza\n\nVocabulário sobre esperança:\n- Esperança / Speransa\n- Paz / Paz\n- Vida eterna / Vida eternu\n- Paraíso / Paraízu\n- Ressurreição / Resurreison",
      "cv": "Vokabuláriu sobri problemas:\n- Sofrimented\n- Gera\n- Duensa\n- Morti\n- Tristeza\n\nVokabuláriu sobri speransa:\n- Speransa\n- Paz\n- Vida eternu\n- Paraízu\n- Resurreison"
    },
    "examples": [
      {
        "pt": "Por que há tanto sofrimento?",
        "cv": "Pamodi ten tantu sofrimented?"
      },
      {
        "pt": "A Bíblia dá esperança",
        "cv": "Bíblia ta da speransa"
      },
      {
        "pt": "Haverá vida eterna",
        "cv": "Ta ten vida eternu"
      }
    ],
    "practicalTips": {
      "pt": "Use estas palavras para tocar o coração das pessoas.",
      "cv": "Uza es palavras pa toka korason di pesoas."
    }
  },
  {
    "id": 15,
    "category": "Prática",
    "level": "débutant",
    "title": {
      "pt": "Diálogo 1 - Primeira Abordagem",
      "cv": "Diálogu 1 - Primeru Abordaji"
    },
    "description": {
      "pt": "Como iniciar uma conversa na porta",
      "cv": "Modi pa inisia un konversa na porta"
    },
    "content": {
      "pt": "Diálogo modelo:\n\nVOCÊ: Bon dia! Modi bu sta?\nPESSOA: Bon dia. N sta bon.\nVOCÊ: N ta vizita vizinhos pa papia sobri un tema interesanti.\nPESSOA: Ah sim?\nVOCÊ: É. Bu ka kre sabe pamodi ten tantu sofrimed na mundu?\nPESSOA: Sim, é un bon keston.\nVOCÊ: Bíblia ta da un resposta. N pode mustra?",
      "cv": "Diálogu modelu:\n\nBU: Bon dia! Modi bu sta?\nPESOA: Bon dia. N sta bon.\nBU: N ta vizita vizinhus pa papia sobri un tema interesanti.\nPESOA: Ah sim?\nBU: É. Bu ka kre sabe pamodi ten tantu sofrimed na mundu?\nPESOA: Sim, é un bon keston.\nBU: Bíblia ta da un resposta. N pode mustra?"
    },
    "examples": [
      {
        "pt": "Bon dia! Modi bu sta?",
        "cv": "Bon dia! Modi bu sta?"
      },
      {
        "pt": "N ta vizita vizinhos",
        "cv": "N ta vizita vizinhus"
      },
      {
        "pt": "Bu kre sabe?",
        "cv": "Bu kre sabe?"
      }
    ],
    "practicalTips": {
      "pt": "Seja caloroso e amigável no primeiro contato.",
      "cv": "Seja kalorozu y amigável na primeru kontaktu."
    }
  },
  {
    "id": 16,
    "category": "Prática",
    "level": "intermédiaire",
    "title": {
      "pt": "Diálogo 2 - Apresentando um Texto Bíblico",
      "cv": "Diálogu 2 - Apresentandu un Téstu Bíbliku"
    },
    "description": {
      "pt": "Como ler e explicar um versículo da Bíblia",
      "cv": "Modi pa le y splika un versíkulu di Bíblia"
    },
    "content": {
      "pt": "Diálogo modelo:\n\nVOCÊ: Bu pode le es versíkulu ku mi?\nPESSOA: Sim.\nVOCÊ: É Salmu 37:10,11. Ta papia sobri futuru.\nPESSOA: [Le] 'Mais um pouco, e os ímpios não existirão...'\nVOCÊ: Kual é promesa li?\nPESSOA: Ki maldadis ta kaba.\nVOCÊ: Ezatu! Y kuandu?\nPESSOA: En brevi.\nVOCÊ: Bu gostaria di sabe más sobri es promesas?",
      "cv": "Diálogu modelu:\n\nBU: Bu pode le es versíkulu ku mi?\nPESOA: Sim.\nBU: É Salmu 37:10,11. Ta papia sobri futuru.\nPESOA: [Le] 'Mais un poku, y ímpius ka ta xiste...'\nBU: Kual é promesa li?\nPESOA: Ki maldadis ta kaba.\nBU: Ezatu! Y kuandu?\nPESOA: En brevi.\nBU: Bu gostaria di sabe más sobri es promesas?"
    },
    "examples": [
      {
        "pt": "Pode ler comigo?",
        "cv": "Pode le ku mi?"
      },
      {
        "pt": "Qual é a promessa?",
        "cv": "Kual é promesa?"
      },
      {
        "pt": "Gostaria de saber mais?",
        "cv": "Gostaria di sabe más?"
      }
    ],
    "practicalTips": {
      "pt": "Faça perguntas para envolver a pessoa.",
      "cv": "Faze prgunta pa involve pesoa."
    }
  },
  {
    "id": 17,
    "category": "Prática",
    "level": "avancé",
    "title": {
      "pt": "Diálogo 3 - Oferecendo um Estudo Bíblico",
      "cv": "Diálogu 3 - Ofereséndu un Studu Bíbliku"
    },
    "description": {
      "pt": "Como propor um estudo bíblico regular",
      "cv": "Modi pa propõe un studu bíbliku regular"
    },
    "content": {
      "pt": "Diálogo modelo:\n\nVOCÊ: Bu gosta di kes informasons?\nPESSOA: Sim, muitu interesanti.\nVOCÊ: Nu ten un livru ki ta xplika más.\nPESSOA: Ah sim?\nVOCÊ: É. Nu pode studa djuntu, 15 minutus, un vez pa simana.\nPESSOA: É gratis?\nVOCÊ: Sim, é totalimenti gratis.\nPESSOA: Bon! Kuandu?\nVOCÊ: Kual dia é bon pa bo? Tersa-fera o Kinta-fera?",
      "cv": "Diálogu modelu:\n\nBU: Bu gosta di kes informasons?\nPESOA: Sim, muitu interesanti.\nBU: Nu ten un livru ki ta xplika más.\nPESOA: Ah sim?\nBU: É. Nu pode studa djuntu, 15 minutus, un vez pa simana.\nPESOA: É gratis?\nBU: Sim, é totalimenti gratis.\nPESOA: Bon! Kuandu?\nBU: Kual dia é bon pa bo? Tersa-fera o Kinta-fera?"
    },
    "examples": [
      {
        "pt": "Gostou das informações?",
        "cv": "Gosta di informasons?"
      },
      {
        "pt": "Podemos estudar juntos",
        "cv": "Nu pode studa djuntu"
      },
      {
        "pt": "É totalmente grátis",
        "cv": "É totalimenti gratis"
      }
    ],
    "practicalTips": {
      "pt": "Seja específico sobre dia e hora.",
      "cv": "Seja spesífiku sobri dia y ora."
    }
  },
  {
    "id": 18,
    "category": "Prática",
    "level": "intermédiaire",
    "title": {
      "pt": "Lidando com Objeções Comuns",
      "cv": "Lida ku Objesons Komun"
    },
    "description": {
      "pt": "Como responder a objeções frequentes",
      "cv": "Modi pa responde objesons frekuenti"
    },
    "content": {
      "pt": "Objeções comuns e respostas:\n\n1. 'N ka ten tempu'\n   Resposta: N ta intende. Talvez un otu ora? N pode volta?\n\n2. 'N ja ten nha relijon'\n   Resposta: Kel é bon! Kuze ki bu relijon ta nsina sobri futuru?\n\n3. 'N ka kre'\n   Resposta: N ta rspeita. Talvez bu konxe algen ki ta interesa?\n\n4. 'N ka kre Bíblia'\n   Resposta: N ta intende. Mas muita jenti ka sabe kuze ki Bíblia rialmente ta fala.",
      "cv": "Objesons komun y resposta:\n\n1. 'N ka ten tempu'\n   Resposta: N ta intende. Talvez un otu ora? N pode volta?\n\n2. 'N ja ten nha relijon'\n   Resposta: Kel é bon! Kuze ki bu relijon ta nsina sobri futuru?\n\n3. 'N ka kre'\n   Resposta: N ta rspeita. Talvez bu konxe algen ki ta interesa?\n\n4. 'N ka kre Bíblia'\n   Resposta: N ta intende. Mas muita jenti ka sabe kuze ki Bíblia rialmente ta fala."
    },
    "examples": [
      {
        "pt": "Entendo perfeitamente",
        "cv": "N ta intende perfeitamenti"
      },
      {
        "pt": "Posso voltar outro dia?",
        "cv": "N pode volta otu dia?"
      },
      {
        "pt": "Respeito sua opinião",
        "cv": "N ta rspeita bu opinión"
      }
    ],
    "practicalTips": {
      "pt": "Sempre seja respeitoso e deixe a porta aberta.",
      "cv": "Sempri seja rspeituozu y deixa porta abertu."
    }
  }
];
