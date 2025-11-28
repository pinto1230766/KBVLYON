import fs from 'fs';

// Exemples pour les mots courants en créole cap-verdien
const examples = {
  // Verbes courants
  "abri": { pt: "Abra a porta, por favor", kea: "Abri porta, pur favor" },
  "anda": { pt: "Vamos andar na praia", kea: "Nu bai anda na praia" },
  "bai": { pt: "Eu vou à escola", kea: "N ta bai skola" },
  "come": { pt: "Vamos comer juntos", kea: "Nu bai kume djuntu" },
  "da": { pt: "Dá-me água", kea: "Da-m agu" },
  "fala": { pt: "Ele fala crioulo", kea: "El ta fala kriolu" },
  "kume": { pt: "Eu como peixe", kea: "N ta kume pex" },
  "mora": { pt: "Eu moro em Praia", kea: "N ta mora na Praia" },
  "sabe": { pt: "Você sabe falar crioulo?", kea: "Bu sabe papia kriolu?" },
  "tene": { pt: "Eu tenho um livro", kea: "N ten un livru" },
  
  // Noms courants
  "agu": { pt: "A água está fria", kea: "Agu sta friu" },
  "kasa": { pt: "A casa é bonita", kea: "Kasa e bunitu" },
  "livru": { pt: "O livro está na mesa", kea: "Livru sta na mesa" },
  "mar": { pt: "O mar está calmo", kea: "Mar sta kalmu" },
  "pai": { pt: "Meu pai trabalha muito", kea: "Nha pai ta trabadja bue" },
  "mae": { pt: "Minha mãe cozinha bem", kea: "Nha mai ta kuzinha ben" },
  "fidju": { pt: "Meu filho estuda", kea: "Nha fidju ta studu" },
  "irmon": { pt: "Meu irmão mora longe", kea: "Nha irmon ta mora longi" },
  
  // Adjectifs courants
  "bonitu": { pt: "Que dia bonito!", kea: "Ki dia bunitu!" },
  "grande": { pt: "A casa é grande", kea: "Kasa e grandi" },
  "bon": { pt: "Bom dia!", kea: "Bon dia!" },
  "mau": { pt: "O tempo está mau", kea: "Tenpu sta mau" },
  
  // Adverbes
  "agostu": { pt: "Agosto é um mês quente", kea: "Agostu e un mes kenti" },
  "agora": { pt: "Vou agora", kea: "N ta bai agora" },
  "sempre": { pt: "Ele sempre chega tarde", kea: "El sempre ta txiga atrazadu" },
  "nunka": { pt: "Nunca vi isso", kea: "N nunka odja kes koiza li" },
  
  // Expressions courantes
  "brigadu": { pt: "Muito obrigado!", kea: "Brigadu bue!" },
  "bon dia": { pt: "Bom dia, como está?", kea: "Bon dia, modi ki bu sta?" },
  "ate logu": { pt: "Até logo!", kea: "Ate logu!" },
  
  // Nouveaux mots ajoutés
  "abanu": { pt: "Ela usa um leque para se refrescar", kea: "El ta uza un abanu pa refriska" },
  "abensu": { pt: "Ele é abençoado por Deus", kea: "El e abensu pa Deus" },
  "abili": { pt: "Ele é muito hábil com as mãos", kea: "El e muitu abili ku mon" },
  "abismu": { pt: "Há um abismo profundo", kea: "Ten un abismu fundu" },
  "adapta": { pt: "Precisamos adaptar o plano", kea: "Nu ten ki adapta planu" },
  "adianta": { pt: "Vou adiantar o trabalho", kea: "N ta adianta trabalhu" },
  "afasta": { pt: "Afaste-se do perigo", kea: "Afasta-bu di perigu" },
  "afetuozu": { pt: "Ele é muito afetuoso", kea: "El e muitu afetuozu" },
  "afiadu": { pt: "A faca está afiada", kea: "Faka sta afiadu" },
  "afronta": { pt: "Ele enfrentou uma grande afronta", kea: "El afrontadu un grandi afronta" },
  "Afrika": { pt: "África é um continente grande", kea: "Afrika e un kontinenti grandi" },
  "agia": { pt: "A águia voa alto", kea: "Agia ta vua artu" },
  "agrada": { pt: "Isso me agrada muito", kea: "Kes koiza ta agrada-m bue" },
  "agradavel": { pt: "O clima é agradável", kea: "Klima e agradavel" },
  "agradese": { pt: "Agradeço sua ajuda", kea: "N ta agradese bu djuda" },
  "agresivu": { pt: "Ele é muito agressivo", kea: "El e muitu agresivu" }
};

console.log('📝 Exemples préparés pour', Object.keys(examples).length, 'mots\n');

// Exporter les exemples
fs.writeFileSync(
  'c:\\Users\\FP123\\Downloads\\KBVLYON\\dictionary_examples.json',
  JSON.stringify(examples, null, 2)
);

console.log('✅ Exemples exportés vers: dictionary_examples.json');
