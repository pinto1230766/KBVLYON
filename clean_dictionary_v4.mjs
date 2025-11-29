import fs from 'fs';

// Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const content = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = content.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
let dictionary = JSON.parse(jsonMatch[1]);

console.log(`✅ ${dictionary.length} entrées chargées.`);

let modifications = 0;

// Règles de transformation pour les mots identiques
// Ces règles ne s'appliquent QUE si le mot Kriolu est IDENTIQUE au mot Portugais
dictionary = dictionary.map(entry => {
  if (entry.word === entry.translation.pt) {
    let newWord = entry.word;
    let original = entry.word;

    // 1. Suffixe -dade -> -dadi
    if (newWord.endsWith('dade')) {
      newWord = newWord.replace(/dade$/, 'dadi');
    }
    
    // 2. Suffixe -ão -> -on
    if (newWord.endsWith('ão')) {
      newWord = newWord.replace(/ão$/, 'on');
    }
    
    // 3. Suffixe -o -> -u (si précédé d'une consonne et pas 'ão')
    // Ex: gato -> gatu, livro -> livru
    if (newWord.endsWith('o') && !newWord.endsWith('ão') && !newWord.endsWith('ao')) {
        // Vérifier si la lettre avant 'o' est une consonne
        const beforeO = newWord.charAt(newWord.length - 2);
        if (/[bcdfghjklmnpqrstvwxyz]/.test(beforeO)) {
            newWord = newWord.substring(0, newWord.length - 1) + 'u';
        }
    }

    // 4. ç -> s
    if (newWord.includes('ç')) {
      newWord = newWord.replace(/ç/g, 's');
    }

    // 5. c -> k (devant a, o, u ou consonne)
    // Ex: casa -> kasa, cultura -> kultura
    // Attention: 'ce', 'ci' -> 'se', 'si' (règle plus complexe)
    if (newWord.includes('c')) {
        // Remplacer 'ca' -> 'ka', 'co' -> 'ko', 'cu' -> 'ku'
        newWord = newWord.replace(/ca/g, 'ka');
        newWord = newWord.replace(/co/g, 'ko');
        newWord = newWord.replace(/cu/g, 'ku');
        // Remplacer 'c' en début de mot suivi de consonne (ex: cr)
        if (newWord.startsWith('c') && /[rnl]/.test(newWord.charAt(1))) {
             newWord = 'k' + newWord.substring(1);
        }
    }
    
    // 6. lh -> dj (très courant mais risqué ?)
    // Ex: filho -> fidju, coelho -> kodju
    // Si on remplace 'lh' par 'dj', c'est souvent bon pour Santiago
    if (newWord.includes('lh')) {
        newWord = newWord.replace(/lh/g, 'dj');
    }
    
    // 7. nh -> nh (pas de changement)

    // Si le mot a changé, on met à jour
    if (newWord !== original) {
      console.log(`   ✨ Correction: ${original} -> ${newWord}`);
      modifications++;
      
      // Mettre à jour l'exemple Kriolu aussi s'il contient l'ancien mot
      let keaExample = entry.example.kea;
      if (keaExample.includes(original)) {
          // Remplacement simple (attention à la casse et aux sous-chaînes)
          // On utilise une regex avec word boundaries
          const regex = new RegExp(`\\b${original}\\b`, 'gi');
          keaExample = keaExample.replace(regex, newWord);
      }
      
      return {
        ...entry,
        word: newWord,
        example: {
            ...entry.example,
            kea: keaExample
        }
      };
    }
  }
  return entry;
});

console.log(`\n✅ Total modifications: ${modifications}`);

// Sauvegarder
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

export const dictionaryData: DictionaryEntry[] = ${JSON.stringify(dictionary, null, 2)};
`;

fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', newContent);
console.log('💾 Dictionnaire mis à jour.');
