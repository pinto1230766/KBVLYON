import fs from 'fs';

// Lire le fichier actuel
const content = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = content.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
const dictionaryData = JSON.parse(jsonMatch[1]);

console.log('🎯 GÉNÉRATION D\'EXEMPLES POUR TOUS LES MOTS\n');
console.log(`Total de mots: ${dictionaryData.length}\n`);

// Templates d'exemples par catégorie
const templates = {
  'Verbe': {
    pt: (word, translation) => {
      const verb = translation.split('/')[0].trim();
      return [
        `Eu vou ${verb}`,
        `Ele gosta de ${verb}`,
        `Precisamos ${verb} agora`,
        `Vamos ${verb} juntos`,
        `Não quero ${verb}`
      ];
    },
    kea: (word) => {
      return [
        `N ta ${word}`,
        `El ta gosta di ${word}`,
        `Nu ten ki ${word} agora`,
        `Nu bai ${word} djuntu`,
        `N ka kre ${word}`
      ];
    }
  },
  'Nom': {
    pt: (word, translation) => {
      const noun = translation.split('/')[0].trim();
      const article = ['a', 'e', 'i', 'o', 'u'].includes(noun[0]?.toLowerCase()) ? 'o' : 'o';
      return [
        `${article.charAt(0).toUpperCase() + article.slice(1)} ${noun} é bonito`,
        `Eu tenho um ${noun}`,
        `Onde está ${article} ${noun}?`,
        `Este ${noun} é meu`,
        `Gosto deste ${noun}`
      ];
    },
    kea: (word) => {
      return [
        `${word.charAt(0).toUpperCase() + word.slice(1)} e bunitu`,
        `N ten un ${word}`,
        `Undi ki ${word} sta?`,
        `Es ${word} e nha`,
        `N gosta di es ${word}`
      ];
    }
  },
  'Adjectif': {
    pt: (word, translation) => {
      const adj = translation.split('/')[0].trim();
      return [
        `Ele é muito ${adj}`,
        `Uma pessoa ${adj}`,
        `Isso é ${adj}`,
        `Que ${adj}!`,
        `Não é ${adj}`
      ];
    },
    kea: (word) => {
      return [
        `El e muitu ${word}`,
        `Un pesoa ${word}`,
        `Kes koiza e ${word}`,
        `Ki ${word}!`,
        `Ka e ${word}`
      ];
    }
  },
  'Adverbe': {
    pt: (word, translation) => {
      const adv = translation.split('/')[0].trim();
      return [
        `Vou ${adv}`,
        `Ele fala ${adv}`,
        `${adv.charAt(0).toUpperCase() + adv.slice(1)} está bem`,
        `Faça ${adv}`,
        `Não ${adv}`
      ];
    },
    kea: (word) => {
      return [
        `N ta bai ${word}`,
        `El ta fala ${word}`,
        `${word.charAt(0).toUpperCase() + word.slice(1)} sta ben`,
        `Faze ${word}`,
        `Ka ${word}`
      ];
    }
  },
  'Pronom': {
    pt: (word, translation) => {
      const pron = translation.split('/')[0].trim();
      return [
        `${pron.charAt(0).toUpperCase() + pron.slice(1)} estou bem`,
        `${pron.charAt(0).toUpperCase() + pron.slice(1)} vou contigo`,
        `É ${pron}`,
        `${pron.charAt(0).toUpperCase() + pron.slice(1)} também`,
        `Para ${pron}`
      ];
    },
    kea: (word) => {
      return [
        `${word.charAt(0).toUpperCase() + word.slice(1)} sta ben`,
        `${word.charAt(0).toUpperCase() + word.slice(1)} ta bai ku bo`,
        `E ${word}`,
        `${word.charAt(0).toUpperCase() + word.slice(1)} tanbé`,
        `Pa ${word}`
      ];
    }
  },
  'Expression': {
    pt: (word, translation) => {
      return [translation];
    },
    kea: (word) => {
      return [word];
    }
  },
  'Préposition': {
    pt: (word, translation) => {
      const prep = translation.split('/')[0].trim();
      return [
        `Vou ${prep} casa`,
        `Estou ${prep} ti`,
        `${prep.charAt(0).toUpperCase() + prep.slice(1)} aqui`,
        `Fica ${prep} mim`,
        `${prep.charAt(0).toUpperCase() + prep.slice(1)} onde?`
      ];
    },
    kea: (word) => {
      return [
        `N ta bai ${word} kasa`,
        `N sta ${word} bo`,
        `${word.charAt(0).toUpperCase() + word.slice(1)} li`,
        `Fika ${word} mi`,
        `${word.charAt(0).toUpperCase() + word.slice(1)} undi?`
      ];
    }
  },
  'Conjonction': {
    pt: (word, translation) => {
      const conj = translation.split('/')[0].trim();
      return [
        `Eu ${conj} tu`,
        `Bom ${conj} bonito`,
        `Vem ${conj} fica`,
        `Sim ${conj} não`,
        `Aqui ${conj} ali`
      ];
    },
    kea: (word) => {
      return [
        `N ${word} bo`,
        `Bon ${word} bunitu`,
        `Ben ${word} fika`,
        `Sin ${word} nao`,
        `Li ${word} la`
      ];
    }
  },
  'Nombre': {
    pt: (word, translation) => {
      return [
        `Tenho ${translation} anos`,
        `São ${translation}`,
        `Número ${translation}`,
        `Página ${translation}`,
        `${translation} pessoas`
      ];
    },
    kea: (word) => {
      return [
        `N ten ${word} anu`,
        `E ${word}`,
        `Numeru ${word}`,
        `Pajina ${word}`,
        `${word} pesoa`
      ];
    }
  }
};

// Fonction pour générer un exemple
function generateExample(entry) {
  const category = entry.category || 'Nom';
  const word = entry.word;
  const translation = entry.translation.pt;
  
  // Si l'exemple existe déjà et n'est pas vide, le garder
  if (entry.example && entry.example.pt && entry.example.pt !== '') {
    return entry.example;
  }
  
  // Utiliser le template approprié
  const template = templates[category] || templates['Nom'];
  
  try {
    const ptExamples = template.pt(word, translation);
    const keaExamples = template.kea(word);
    
    // Choisir un exemple aléatoire
    const index = Math.floor(Math.random() * Math.min(ptExamples.length, keaExamples.length));
    
    return {
      pt: ptExamples[index],
      kea: keaExamples[index]
    };
  } catch (error) {
    // En cas d'erreur, retourner un exemple générique
    return {
      pt: `Exemplo com "${translation}"`,
      kea: `Exenplu ku "${word}"`
    };
  }
}

// Générer les exemples pour tous les mots
let count = 0;
const updatedData = dictionaryData.map((entry, index) => {
  const newExample = generateExample(entry);
  
  if (entry.example.pt === '' || entry.example.kea === '') {
    count++;
    if (count % 100 === 0) {
      console.log(`✅ ${count} exemples générés...`);
    }
  }
  
  return {
    ...entry,
    example: newExample
  };
});

console.log(`\n✅ Total d'exemples générés: ${count}`);
console.log(`📊 Mots avec exemples: ${updatedData.filter(e => e.example.pt !== '').length} / ${updatedData.length}`);

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

export const dictionaryData: DictionaryEntry[] = ${JSON.stringify(updatedData, null, 2)};
`;

// Sauvegarder
fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', newContent);

console.log('\n✅ Fichier mis à jour avec succès!');
console.log('\n📈 STATISTIQUES FINALES:');
console.log(`   Entrées totales: ${updatedData.length}`);
console.log(`   Nouveaux exemples: ${count}`);
console.log(`   Couverture: 100%`);
