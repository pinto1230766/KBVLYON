import fs from 'fs';

// Lire le rapport de comparaison
const report = JSON.parse(fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\jw_org_comparison.json', 'utf8'));

// Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const dictionaryContent = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = dictionaryContent.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
let currentDictionary = JSON.parse(jsonMatch[1]);

console.log(`✅ ${currentDictionary.length} entrées chargées.\n`);

// Corrections d'accents basées sur jw.org
const accentCorrections = {
  // Mots identifiés dans le texte jw.org
  'seu': 'séu',           // ciel
  'tera': 'téra',         // terre
  'tempu': 'ténpu',       // temps
  'so': 'sô',             // seulement
  'abensua': 'abênsua',   // bénir
  
  // Autres corrections probables basées sur ALUPEC
  'pe': 'pê',             // pied (si fermé)
  'mes': 'mês',           // mois (si fermé)
  'tres': 'três',         // trois (si fermé)
  'fe': 'fê',             // foi (si fermé)
  'se': 'sê',             // être (si fermé)
};

let modificationsCount = 0;

// Appliquer les corrections
currentDictionary = currentDictionary.map(entry => {
  const correction = accentCorrections[entry.word.toLowerCase()];
  
  if (correction && correction !== entry.word) {
    console.log(`   ✨ ${entry.word} -> ${correction}`);
    modificationsCount++;
    
    // Mettre à jour aussi les exemples si le mot y apparaît
    let keaExample = entry.example.kea;
    const regex = new RegExp(`\\b${entry.word}\\b`, 'gi');
    keaExample = keaExample.replace(regex, correction);
    
    return {
      ...entry,
      word: correction,
      example: {
        ...entry.example,
        kea: keaExample
      }
    };
  }
  
  return entry;
});

console.log(`\n✅ Total de corrections d'accents : ${modificationsCount}`);

if (modificationsCount > 0) {
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

export const dictionaryData: DictionaryEntry[] = ${JSON.stringify(currentDictionary, null, 2)};
`;

  fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', newContent);
  console.log('💾 Dictionnaire mis à jour avec les accents ALUPEC.');
} else {
  console.log('ℹ️  Aucune correction à appliquer.');
}
