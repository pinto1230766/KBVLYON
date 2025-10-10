const fs = require('fs');
const path = require('path');

// Les 7 premières leçons (grammaire de base) depuis le fichier existant
const grammarLessonsFile = path.join(__dirname, '..', 'assets', 'public', 'grammar_lessons_extracted.json');
const grammarData = JSON.parse(fs.readFileSync(grammarLessonsFile, 'utf8'));

// Leçons 1-7 depuis l'APK
const lessons1to7 = grammarData.lessons.map(lesson => ({
  id: lesson.id,
  category: lesson.category,
  level: "Iniciante",
  title: lesson.title,
  description: lesson.title,
  content: lesson.content,
  examples: lesson.examples || [],
  practicalTips: {
    pt: "Pratique estas estruturas na pregação para melhorar sua comunicação.",
    cv: "Pratika es strutura na pregason pa midjora bu komunikason."
  }
}));

// Leçons 8-18 (à créer avec contenu)
const lessons8to18 = [
  {
    id: 8,
    category: "Verbos",
    level: "Intermediário",
    title: {
      pt: "Verbos Essenciais para Pregação",
      cv: "Berbus Esensial pa Pregason"
    },
    description: {
      pt: "Os verbos mais importantes para usar no ministério de porta em porta",
      cv: "Berbus más inportanti pa uza na ministériu di porta na porta"
    },
    content: {
      pt: "Verbos essenciais para a pregação:\n\n1. Falar/Papia - conversar\n2. Mostrar/Mustra - demonstrar\n3. Ler/Le - ler\n4. Explicar/Splika - explicar\n5. Perguntar/Prgunta - perguntar\n6. Estudar/Studa - estudar\n7. Visitar/Vizita - visitar\n8. Voltar/Volta - retornar",
      cv: "Berbus esensial pa pregason:\n\n1. Papia - papia\n2. Mustra - mustra\n3. Le - le\n4. Splika - splika\n5. Prgunta - prgunta\n6. Studa - studa\n7. Vizita - vizita\n8. Volta - volta"
    },
    examples: [
      { pt: "Posso falar com você?", cv: "N pode papia ku bo?" },
      { pt: "Gostaria de mostrar algo", cv: "N gostaria di mustra un kusa" },
      { pt: "Vou ler um versículo", cv: "N ta bai le un versíkulu" }
    ],
    practicalTips: {
      pt: "Use estes verbos regularmente na pregação para parecer natural.",
      cv: "Uza es berbus regularmenti na pregason pa parése natural."
    }
  },
  {
    id: 9,
    category: "Verbos",
    level: "Avançado",
    title: {
      pt: "Verbos Modais e Auxiliares",
      cv: "Berbus Modal y Auxiliar"
    },
    description: {
      pt: "Verbos que expressam possibilidade, necessidade e desejo",
      cv: "Berbus ki ta exprimi posibilidadi, nesesidadi y dezeju"
    },
    content: {
      pt: "Verbos modais:\n\n1. PODE/Pode - poder, capacidade\n2. DEVE/Debe - dever, obrigação\n3. KERE/Kre - querer, desejo\n4. TEN KI/Ten ki - ter que, necessidade\n5. GOSTA/Gosta - gostar, preferência",
      cv: "Berbus modal:\n\n1. Pode - pode\n2. Debe - debe\n3. Kre - kre\n4. Ten ki - ten ki\n5. Gosta - gosta"
    },
    examples: [
      { pt: "Você pode me ajudar?", cv: "Bu pode djuda-m?" },
      { pt: "Devemos obedecer a Deus", cv: "Nu debe obedese Deus" },
      { pt: "Quer aprender mais?", cv: "Bu kre aprende más?" }
    ],
    practicalTips: {
      pt: "Use modais para ser mais polido e persuasivo.",
      cv: "Uza modal pa ser más polidu y persuazivu."
    }
  },
  {
    id: 10,
    category: "Fonologia",
    level: "Iniciante",
    title: {
      pt: "Pronúncia Básica - Sons do Crioulo",
      cv: "Pronúnsia Báziku - Sons di Kriolu"
    },
    description: {
      pt: "Como pronunciar corretamente os sons característicos do crioulo",
      cv: "Modi pa pronunsia korretamenti sons karaterístiku di kriolu"
    },
    content: {
      pt: "Sons especiais do crioulo:\n\n1. DJ - como 'j' em 'jogo': dja, djuda\n2. TX - como 'tch' em 'tchau': txiga, txuba\n3. NH - como 'nh' em 'nhoque': nha, nhos\n4. LH - como 'lh' em 'filho': fidju (filho)\n5. K - sempre duro como 'c' em 'casa': kaza, kume",
      cv: "Sons spesial di kriolu:\n\n1. DJ - dja, djuda\n2. TX - txiga, txuba\n3. NH - nha, nhos\n4. LH - fidju\n5. K - kaza, kume"
    },
    examples: [
      { pt: "Eu já comi - N dja kume", cv: "N dja kume" },
      { pt: "Ele chegou - El txiga", cv: "El txiga" },
      { pt: "Minha casa - Kaza nha", cv: "Kaza nha" }
    ],
    practicalTips: {
      pt: "Pratique os sons DJ e TX que são muito comuns.",
      cv: "Pratika sons DJ y TX ki é muitu komun."
    }
  },
  {
    id: 11,
    category: "Fonologia",
    level: "Intermediário",
    title: {
      pt: "Acentuação e Ritmo",
      cv: "Asentuason y Ritmu"
    },
    description: {
      pt: "Onde colocar o acento tônico nas palavras",
      cv: "Undi koloka asentu tóniku na palavras"
    },
    content: {
      pt: "Regras de acentuação:\n\n1. Verbos: acento na última sílaba\n   - fa-LÁ, ku-MÉ, dur-MÍ\n\n2. Substantivos: geralmente penúltima\n   - KA-za, LI-vru, PE-soa\n\n3. Palavras com marcadores TMA:\n   - N TA ba-I (Eu vou)\n   - Bu DJA ku-ME (Você já comeu)",
      cv: "Regra di asentuason:\n\n1. Berbus: asentu na última sílaba\n   - fa-LÁ, ku-MÉ, dur-MÍ\n\n2. Substantivus: jeralmenti penúltima\n   - KA-za, LI-vru, PE-soa\n\n3. Palavras ku markador TMA:\n   - N TA ba-I\n   - Bu DJA ku-ME"
    },
    examples: [
      { pt: "Falar - fa-LÁ", cv: "fa-LÁ" },
      { pt: "Casa - KA-za", cv: "KA-za" },
      { pt: "Trabalhar - tra-ba-DJÁ", cv: "tra-ba-DJÁ" }
    ],
    practicalTips: {
      pt: "Ouça nativos falando para pegar o ritmo natural.",
      cv: "Skundja nativu papiandu pa panha ritmu natural."
    }
  },
  {
    id: 12,
    category: "Vocabulário",
    level: "Iniciante",
    title: {
      pt: "Vocabulário Religioso Essencial",
      cv: "Vokabuláriu Relijozu Esensial"
    },
    description: {
      pt: "Palavras-chave para falar sobre temas bíblicos",
      cv: "Palavras-txabi pa papia sobri temas bíblikus"
    },
    content: {
      pt: "Vocabulário religioso básico:\n\n- Deus / Deus\n- Jeová / Jeová\n- Bíblia / Bíblia\n- Jesus / Jesus\n- Espírito Santo / Spíritu Santu\n- Reino / Reinu\n- Fé / Fé\n- Oração / Orason\n- Salvação / Salvason\n- Verdade / Verdadi",
      cv: "Vokabuláriu relijozu báziku:\n\n- Deus\n- Jeová\n- Bíblia\n- Jesus\n- Spíritu Santu\n- Reinu\n- Fé\n- Orason\n- Salvason\n- Verdadi"
    },
    examples: [
      { pt: "Jeová é nosso Deus", cv: "Jeová é Deus nós" },
      { pt: "A Bíblia ensina a verdade", cv: "Bíblia ta nsina verdadi" },
      { pt: "Jesus mostrou o caminho", cv: "Jesus mustra kaminhu" }
    ],
    practicalTips: {
      pt: "Memorize estas palavras-chave primeiro.",
      cv: "Memoriza es palavras-txabi primeru."
    }
  },
  {
    id: 13,
    category: "Prática",
    level: "Intermediário",
    title: {
      pt: "Frases Prontas para Pregação",
      cv: "Frasis Prontu pa Pregason"
    },
    description: {
      pt: "Expressões completas para usar na pregação de porta em porta",
      cv: "Exprisons kompletu pa uza na pregason di porta na porta"
    },
    content: {
      pt: "Frases úteis:\n\n1. Bom dia! - Bon dia!\n2. Como está? - Modi bu sta?\n3. Posso falar com você? - N pode papia ku bo?\n4. Gostaria de mostrar algo - N gostaria di mustra un kusa\n5. É da Bíblia - É di Bíblia\n6. O que você acha? - Kuze ki bu ta atxa?\n7. Posso voltar? - N pode volta?\n8. Muito obrigado - Muitu brigadu",
      cv: "Frasis útil:\n\n1. Bon dia!\n2. Modi bu sta?\n3. N pode papia ku bo?\n4. N gostaria di mustra un kusa\n5. É di Bíblia\n6. Kuze ki bu ta atxa?\n7. N pode volta?\n8. Muitu brigadu"
    },
    examples: [
      { pt: "Bom dia! Como está?", cv: "Bon dia! Modi bu sta?" },
      { pt: "Posso mostrar um versículo?", cv: "N pode mustra un versíkulu?" },
      { pt: "Gostaria de aprender mais?", cv: "Bu gostaria di aprende más?" }
    ],
    practicalTips: {
      pt: "Pratique estas frases até ficarem naturais.",
      cv: "Pratika es frasis té fikadu natural."
    }
  },
  {
    id: 14,
    category: "Vocabulário",
    level: "Avançado",
    title: {
      pt: "Vocabulário Temático - Sofrimento e Esperança",
      cv: "Vokabuláriu Temátiku - Sofrimented y Speransa"
    },
    description: {
      pt: "Palavras para falar sobre problemas atuais e a esperança bíblica",
      cv: "Palavras pa papia sobri problemas atual y speransa bíbliku"
    },
    content: {
      pt: "Vocabulário sobre problemas:\n- Sofrimento / Sofrimented\n- Guerra / Gera\n- Doença / Duensa\n- Morte / Morti\n- Tristeza / Tristeza\n\nVocabulário sobre esperança:\n- Esperança / Speransa\n- Paz / Paz\n- Vida eterna / Vida eternu\n- Paraíso / Paraízu\n- Ressurreição / Resurreison",
      cv: "Vokabuláriu sobri problemas:\n- Sofrimented\n- Gera\n- Duensa\n- Morti\n- Tristeza\n\nVokabuláriu sobri speransa:\n- Speransa\n- Paz\n- Vida eternu\n- Paraízu\n- Resurreison"
    },
    examples: [
      { pt: "Por que há tanto sofrimento?", cv: "Pamodi ten tantu sofrimented?" },
      { pt: "A Bíblia dá esperança", cv: "Bíblia ta da speransa" },
      { pt: "Haverá vida eterna", cv: "Ta ten vida eternu" }
    ],
    practicalTips: {
      pt: "Use estas palavras para tocar o coração das pessoas.",
      cv: "Uza es palavras pa toka korason di pesoas."
    }
  },
  {
    id: 15,
    category: "Prática",
    level: "Iniciante",
    title: {
      pt: "Diálogo 1 - Primeira Abordagem",
      cv: "Diálogu 1 - Primeru Abordaji"
    },
    description: {
      pt: "Como iniciar uma conversa na porta",
      cv: "Modi pa inisia un konversa na porta"
    },
    content: {
      pt: "Diálogo modelo:\n\nVOCÊ: Bon dia! Modi bu sta?\nPESSOA: Bon dia. N sta bon.\nVOCÊ: N ta vizita vizinhos pa papia sobri un tema interesanti.\nPESSOA: Ah sim?\nVOCÊ: É. Bu ka kre sabe pamodi ten tantu sofrimed na mundu?\nPESSOA: Sim, é un bon keston.\nVOCÊ: Bíblia ta da un resposta. N pode mustra?",
      cv: "Diálogu modelu:\n\nBU: Bon dia! Modi bu sta?\nPESOA: Bon dia. N sta bon.\nBU: N ta vizita vizinhus pa papia sobri un tema interesanti.\nPESOA: Ah sim?\nBU: É. Bu ka kre sabe pamodi ten tantu sofrimed na mundu?\nPESOA: Sim, é un bon keston.\nBU: Bíblia ta da un resposta. N pode mustra?"
    },
    examples: [
      { pt: "Bon dia! Modi bu sta?", cv: "Bon dia! Modi bu sta?" },
      { pt: "N ta vizita vizinhos", cv: "N ta vizita vizinhus" },
      { pt: "Bu kre sabe?", cv: "Bu kre sabe?" }
    ],
    practicalTips: {
      pt: "Seja caloroso e amigável no primeiro contato.",
      cv: "Seja kalorozu y amigável na primeru kontaktu."
    }
  },
  {
    id: 16,
    category: "Prática",
    level: "Intermediário",
    title: {
      pt: "Diálogo 2 - Apresentando um Texto Bíblico",
      cv: "Diálogu 2 - Apresentandu un Téstu Bíbliku"
    },
    description: {
      pt: "Como ler e explicar um versículo da Bíblia",
      cv: "Modi pa le y splika un versíkulu di Bíblia"
    },
    content: {
      pt: "Diálogo modelo:\n\nVOCÊ: Bu pode le es versíkulu ku mi?\nPESSOA: Sim.\nVOCÊ: É Salmu 37:10,11. Ta papia sobri futuru.\nPESSOA: [Le] 'Mais um pouco, e os ímpios não existirão...'\nVOCÊ: Kual é promesa li?\nPESSOA: Ki maldadis ta kaba.\nVOCÊ: Ezatu! Y kuandu?\nPESSOA: En brevi.\nVOCÊ: Bu gostaria di sabe más sobri es promesas?",
      cv: "Diálogu modelu:\n\nBU: Bu pode le es versíkulu ku mi?\nPESOA: Sim.\nBU: É Salmu 37:10,11. Ta papia sobri futuru.\nPESOA: [Le] 'Mais un poku, y ímpius ka ta xiste...'\nBU: Kual é promesa li?\nPESOA: Ki maldadis ta kaba.\nBU: Ezatu! Y kuandu?\nPESOA: En brevi.\nBU: Bu gostaria di sabe más sobri es promesas?"
    },
    examples: [
      { pt: "Pode ler comigo?", cv: "Pode le ku mi?" },
      { pt: "Qual é a promessa?", cv: "Kual é promesa?" },
      { pt: "Gostaria de saber mais?", cv: "Gostaria di sabe más?" }
    ],
    practicalTips: {
      pt: "Faça perguntas para envolver a pessoa.",
      cv: "Faze prgunta pa involve pesoa."
    }
  },
  {
    id: 17,
    category: "Prática",
    level: "Avançado",
    title: {
      pt: "Diálogo 3 - Oferecendo um Estudo Bíblico",
      cv: "Diálogu 3 - Ofereséndu un Studu Bíbliku"
    },
    description: {
      pt: "Como propor um estudo bíblico regular",
      cv: "Modi pa propõe un studu bíbliku regular"
    },
    content: {
      pt: "Diálogo modelo:\n\nVOCÊ: Bu gosta di kes informasons?\nPESSOA: Sim, muitu interesanti.\nVOCÊ: Nu ten un livru ki ta xplika más.\nPESSOA: Ah sim?\nVOCÊ: É. Nu pode studa djuntu, 15 minutus, un vez pa simana.\nPESSOA: É gratis?\nVOCÊ: Sim, é totalimenti gratis.\nPESSOA: Bon! Kuandu?\nVOCÊ: Kual dia é bon pa bo? Tersa-fera o Kinta-fera?",
      cv: "Diálogu modelu:\n\nBU: Bu gosta di kes informasons?\nPESOA: Sim, muitu interesanti.\nBU: Nu ten un livru ki ta xplika más.\nPESOA: Ah sim?\nBU: É. Nu pode studa djuntu, 15 minutus, un vez pa simana.\nPESOA: É gratis?\nBU: Sim, é totalimenti gratis.\nPESOA: Bon! Kuandu?\nBU: Kual dia é bon pa bo? Tersa-fera o Kinta-fera?"
    },
    examples: [
      { pt: "Gostou das informações?", cv: "Gosta di informasons?" },
      { pt: "Podemos estudar juntos", cv: "Nu pode studa djuntu" },
      { pt: "É totalmente grátis", cv: "É totalimenti gratis" }
    ],
    practicalTips: {
      pt: "Seja específico sobre dia e hora.",
      cv: "Seja spesífiku sobri dia y ora."
    }
  },
  {
    id: 18,
    category: "Prática",
    level: "Intermediário",
    title: {
      pt: "Lidando com Objeções Comuns",
      cv: "Lida ku Objesons Komun"
    },
    description: {
      pt: "Como responder a objeções frequentes",
      cv: "Modi pa responde objesons frekuenti"
    },
    content: {
      pt: "Objeções comuns e respostas:\n\n1. 'N ka ten tempu'\n   Resposta: N ta intende. Talvez un otu ora? N pode volta?\n\n2. 'N ja ten nha relijon'\n   Resposta: Kel é bon! Kuze ki bu relijon ta nsina sobri futuru?\n\n3. 'N ka kre'\n   Resposta: N ta rspeita. Talvez bu konxe algen ki ta interesa?\n\n4. 'N ka kre Bíblia'\n   Resposta: N ta intende. Mas muita jenti ka sabe kuze ki Bíblia rialmente ta fala.",
      cv: "Objesons komun y resposta:\n\n1. 'N ka ten tempu'\n   Resposta: N ta intende. Talvez un otu ora? N pode volta?\n\n2. 'N ja ten nha relijon'\n   Resposta: Kel é bon! Kuze ki bu relijon ta nsina sobri futuru?\n\n3. 'N ka kre'\n   Resposta: N ta rspeita. Talvez bu konxe algen ki ta interesa?\n\n4. 'N ka kre Bíblia'\n   Resposta: N ta intende. Mas muita jenti ka sabe kuze ki Bíblia rialmente ta fala."
    },
    examples: [
      { pt: "Entendo perfeitamente", cv: "N ta intende perfeitamenti" },
      { pt: "Posso voltar outro dia?", cv: "N pode volta otu dia?" },
      { pt: "Respeito sua opinião", cv: "N ta rspeita bu opinión" }
    ],
    practicalTips: {
      pt: "Sempre seja respeitoso e deixe a porta aberta.",
      cv: "Sempri seja rspeituozu y deixa porta abertu."
    }
  }
];

// Combiner toutes les leçons
const allLessons = [...lessons1to7, ...lessons8to18];

console.log(`Total de leçons créées: ${allLessons.length}`);

// Créer le fichier TypeScript
const tsInterface = `export interface Lesson {
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

`;

const tsData = `export const lessonsData: Lesson[] = ${JSON.stringify(allLessons, null, 2)};\n`;
const tsContent = tsInterface + tsData;

// Sauvegarder
const outputFile = path.join(__dirname, '..', 'src', 'data', 'lessonsData.ts');
fs.writeFileSync(outputFile, tsContent, 'utf8');

console.log(`✅ Fichier créé: ${outputFile}`);
console.log(`📊 ${allLessons.length} leçons complètes avec contenu enrichi!`);
console.log('\n📝 Récapitulatif:');
allLessons.forEach((l, i) => {
  console.log(`${i + 1}. ${l.title.pt} (${l.category}, ${l.level})`);
});
