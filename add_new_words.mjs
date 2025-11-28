import fs from 'fs';

// Lire le dictionnaire actuel
const content = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = content.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
const currentDictionary = JSON.parse(jsonMatch[1]);

// Lire les nouveaux mots
const newWords = JSON.parse(fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\new_words_to_add.json', 'utf8'));

console.log('📝 AJOUT DE', newWords.length, 'NOUVEAUX MOTS AU DICTIONNAIRE\n');

// Trouver le dernier ID
const lastId = Math.max(...currentDictionary.map(e => parseInt(e.id.replace('entry-', ''))));
console.log(`Dernier ID actuel: entry-${lastId}`);

// Templates d'exemples (réutilisation du code précédent)
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
      return [`O ${noun} é bonito`, `Eu tenho um ${noun}`, `Onde está o ${noun}?`];
    },
    kea: (word) => [`${word.charAt(0).toUpperCase() + word.slice(1)} e bunitu`, `N ten un ${word}`, `Undi ki ${word} sta?`]
  },
  'Adjectif': {
    pt: (word, translation) => {
      const adj = translation.split('/')[0].trim();
      return [`Ele é muito ${adj}`, `Uma pessoa ${adj}`, `Isso é ${adj}`];
    },
    kea: (word) => [`El e muitu ${word}`, `Un pesoa ${word}`, `Kes koiza e ${word}`]
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
      return [`${pron.charAt(0).toUpperCase() + pron.slice(1)} estou bem`, `É ${pron}`];
    },
    kea: (word) => [`${word.charAt(0).toUpperCase() + word.slice(1)} sta ben`, `E ${word}`]
  },
  'Expression': {
    pt: (word, translation) => [translation],
    kea: (word) => [word]
  }
};

// Générer les nouvelles entrées
const newEntries = newWords.map((newWord, index) => {
  const entryId = lastId + index + 1;
  const category = newWord.category || 'Nom';
  const template = templates[category] || templates['Nom'];
  
  try {
    const ptExamples = template.pt(newWord.word, newWord.translation);
    const keaExamples = template.kea(newWord.word);
    const exampleIndex = Math.floor(Math.random() * Math.min(ptExamples.length, keaExamples.length));
    
    return {
      id: `entry-${entryId}`,
      word: newWord.word,
      translation: {
        pt: newWord.translation
      },
      example: {
        pt: ptExamples[exampleIndex],
        kea: keaExamples[exampleIndex]
      },
      category: category
    };
  } catch (error) {
    return {
      id: `entry-${entryId}`,
      word: newWord.word,
      translation: {
        pt: newWord.translation
      },
      example: {
        pt: `Exemplo com "${newWord.translation}"`,
        kea: `Exenplu ku "${newWord.word}"`
      },
      category: category
    };
  }
});

// Fusionner avec le dictionnaire existant
const updatedDictionary = [...currentDictionary, ...newEntries];

console.log(`\n✅ Nouveaux mots ajoutés: ${newEntries.length}`);
console.log(`📊 Total de mots dans le dictionnaire: ${updatedDictionary.length}`);

// Générer le nouveau fichier
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

// Sauvegarder
fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', newContent);

console.log('\n✅ Dictionnaire mis à jour avec succès!');
console.log('\n📈 RÉSUMÉ:');
console.log(`   Entrées avant: ${currentDictionary.length}`);
console.log(`   Entrées ajoutées: ${newEntries.length}`);
console.log(`   Entrées après: ${updatedDictionary.length}`);
console.log(`   Couverture exemples: 100%`);
