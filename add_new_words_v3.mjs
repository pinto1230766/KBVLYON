import fs from 'fs';

// Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const content = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = content.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
let currentDictionary = JSON.parse(jsonMatch[1]);

// Lire les nouveaux mots et améliorations
const newWords = JSON.parse(fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\words_to_add_v3.json', 'utf8'));
const improvements = JSON.parse(fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\improvements_v3.json', 'utf8'));

console.log(`📝 TRAITEMENT DE LA VAGUE 3`);
console.log(`   - Nouveaux mots: ${newWords.length}`);
console.log(`   - Améliorations: ${improvements.length}`);

// 1. Appliquer les améliorations
console.log('\n🔧 Application des améliorations...');
improvements.forEach(imp => {
  const entryIndex = currentDictionary.findIndex(e => e.word === imp.current);
  if (entryIndex !== -1) {
    console.log(`   ✨ ${imp.current} -> ${imp.new}`);
    currentDictionary[entryIndex].word = imp.new;
    // On pourrait aussi mettre à jour la traduction si elle est meilleure, mais gardons l'existante pour l'instant sauf si vide
  }
});

// 2. Générer les nouvelles entrées
console.log('\n🔨 Génération des nouvelles entrées...');

// Trouver le dernier ID
const lastId = Math.max(...currentDictionary.map(e => parseInt(e.id.replace('entry-', ''))));
console.log(`   Dernier ID actuel: entry-${lastId}`);

// Templates d'exemples
const templates = {
  'Verbe': {
    pt: (word, translation) => {
      const verb = translation.split('/')[0].trim();
      return [`Eu vou ${verb}`, `Ele gosta de ${verb}`, `Precisamos ${verb} agora`];
    },
    kea: (word) => [`N ta ${word}`, `El ta gosta di ${word}`, `Nu ten ki ${word} agora`]
  },
  'Nom': {
    pt: (word, translation) => {
      const noun = translation.split('/')[0].trim();
      return [`O ${noun} é interessante`, `Eu vi um ${noun}`, `Onde está o ${noun}?`];
    },
    kea: (word) => [`${word.charAt(0).toUpperCase() + word.slice(1)} e interesanti`, `N odja un ${word}`, `Undi ki ${word} sta?`]
  },
  'Adjectif': {
    pt: (word, translation) => {
      const adj = translation.split('/')[0].trim();
      return [`Ele é muito ${adj}`, `Uma coisa ${adj}`, `Isso parece ${adj}`];
    },
    kea: (word) => [`El e muitu ${word}`, `Un koiza ${word}`, `Kel-la parse ${word}`]
  },
  'Adverbe': {
    pt: (word, translation) => {
      const adv = translation.split('/')[0].trim();
      return [`Vou ${adv}`, `Ele fala ${adv}`, `Faça ${adv}`];
    },
    kea: (word) => [`N ta bai ${word}`, `El ta fala ${word}`, `Faze ${word}`]
  },
  'Pronom': {
    pt: (word, translation) => {
      const pron = translation.split('/')[0].trim();
      return [`${pron.charAt(0).toUpperCase() + pron.slice(1)} está aqui`, `É ${pron}`];
    },
    kea: (word) => [`${word.charAt(0).toUpperCase() + word.slice(1)} sta li`, `E ${word}`]
  },
  'Expression': {
    pt: (word, translation) => [translation],
    kea: (word) => [word]
  }
};

const newEntries = newWords.map((newWord, index) => {
  const entryId = lastId + index + 1;
  // Nettoyer la catégorie (parfois "Nom" est écrit bizarrement ou manquant)
  let category = newWord.category ? newWord.category.trim() : 'Nom';
  if (!templates[category]) category = 'Nom';
  
  const template = templates[category];
  
  let ptExample, keaExample;
  
  try {
    const ptExamples = template.pt(newWord.word, newWord.translation);
    const keaExamples = template.kea(newWord.word);
    const exampleIndex = Math.floor(Math.random() * Math.min(ptExamples.length, keaExamples.length));
    
    ptExample = ptExamples[exampleIndex];
    keaExample = keaExamples[exampleIndex];
  } catch (error) {
    ptExample = `Exemplo com "${newWord.translation}"`;
    keaExample = `Exenplu ku "${newWord.word}"`;
  }

  return {
    id: `entry-${entryId}`,
    word: newWord.word,
    translation: {
      pt: newWord.translation
    },
    example: {
      pt: ptExample,
      kea: keaExample
    },
    category: category
  };
});

// 3. Fusionner et sauvegarder
const updatedDictionary = [...currentDictionary, ...newEntries];

console.log(`\n✅ Nouveaux mots préparés: ${newEntries.length}`);
console.log(`📊 Total futur: ${updatedDictionary.length}`);

const newContent = `export interface DictionaryEntry {
  id: string;
  word: string;
  translation: {
    pt: string;
  };
  example: {
    pt: string;
    kea: string;
  };
  note?: string;
  category?: string;
}

export const dictionaryData: DictionaryEntry[] = ${JSON.stringify(updatedDictionary, null, 2)};
`;

fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', newContent);

console.log('\n✅ Dictionnaire mis à jour avec succès!');
