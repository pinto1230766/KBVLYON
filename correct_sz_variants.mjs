import fs from 'fs';

// Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const dictionaryContent = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = dictionaryContent.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
let dictionary = JSON.parse(jsonMatch[1]);

console.log(`✅ ${dictionary.length} entrées chargées.\n`);

// Mots vérifiés sur jw.org avec leur orthographe correcte
// Règle ALUPEC : Z entre voyelles (son sonore), S ailleurs
const correctOrthography = {
  // Vérifiés sur jw.org
  'batismu': 'batismu',      // nom (baptême)
  'batiza': 'batiza',        // verbe (baptiser) - Z entre voyelles
  'batizadu': 'batizadu',    // participe
  'batizaba': 'batizaba',    // imparfait
  'kuzê': 'kuzê',            // pronom (o quê)
  'kuza': 'kuza',            // nom (chose) - Z entre voyelles
  'realiza': 'realiza',      // verbe - Z entre voyelles
  'organiza': 'organiza',    // verbe - Z entre voyelles
  'utiliza': 'utiliza',      // verbe - Z entre voyelles
  
  // Règles ALUPEC générales
  'luz': 'luz',              // nom (lumière) - Z final
  'feliz': 'feliz',          // adjectif (heureux) - Z final
  'rapaz': 'rapaz',          // nom (garçon) - Z final
  'arroz': 'arroz',          // nom (riz) - Z final
  'raiz': 'raiz',            // nom (racine) - Z final
  'noz': 'noz',              // nom (noix) - Z final
  'voz': 'voz',              // nom (voix) - Z final
  'paz': 'paz',              // nom (paix) - Z final
  'capaz': 'capaz',          // adjectif - Z final
  
  // S en début ou après consonne
  'sal': 'sal',              // nom (sel) - S initial
  'sol': 'sol',              // nom (soleil) - S initial
  'ser': 'ser',              // verbe (être) - S initial
  'nos': 'nos',              // pronom (nous) - S final après voyelle nasale
  'tres': 'tres',            // nombre (trois) - S final
  'mas': 'mas',              // conjonction (mais) - S final
  'bes': 'bes',              // nom (vez/fois) - S final
  
  // Cas spéciaux vérifiés
  'kasa': 'kasa',            // nom (maison) - S entre voyelles (son sourd)
  'kaza': 'kaza',            // verbe (casar) - Z entre voyelles (son sonore)
  'fase': 'fase',            // nom (phase) - S
  'faze': 'faze',            // verbe (fazer) - Z entre voyelles
  'dose': 'dose',            // nom - S
  'doze': 'doze',            // nombre (douze) - Z
  'basa': 'basa',            // nom (base) - S
  'baza': 'baza',            // verbe (basar) - Z
};

// Corrections à appliquer (supprimer les variantes incorrectes)
const corrections = [];
const idsToRemove = new Set();

// Parcourir le dictionnaire et identifier les corrections
dictionary.forEach(entry => {
  const word = entry.word.toLowerCase();
  
  // Vérifier si c'est une variante incorrecte
  Object.keys(correctOrthography).forEach(correctWord => {
    const correct = correctOrthography[correctWord];
    
    // Créer la variante incorrecte (inverser s/z)
    const incorrect = correct.replace(/z/g, 'S_TEMP')
                             .replace(/s/g, 'z')
                             .replace(/S_TEMP/g, 's');
    
    if (word === incorrect && word !== correct) {
      // C'est une variante incorrecte
      corrections.push({
        incorrect: entry.word,
        correct: correct,
        id: entry.id,
        translation: entry.translation.pt
      });
      idsToRemove.add(entry.id);
    }
  });
});

console.log(`🔧 CORRECTIONS S/Z BASÉES SUR JW.ORG/ALUPEC\n`);
console.log(`Corrections à appliquer : ${corrections.length}\n`);

if (corrections.length > 0) {
  console.log('📋 LISTE DES CORRECTIONS :\n');
  corrections.forEach((corr, index) => {
    console.log(`${(index + 1).toString().padStart(3)}. ❌ "${corr.incorrect}" -> ✅ "${corr.correct}" (ID: ${corr.id})`);
  });
  
  // Appliquer les corrections (supprimer les variantes incorrectes)
  const cleanedDictionary = dictionary.filter(entry => !idsToRemove.has(entry.id));
  
  console.log(`\n✅ ${idsToRemove.size} variantes incorrectes supprimées`);
  console.log(`📊 Avant: ${dictionary.length} entrées`);
  console.log(`📊 Après: ${cleanedDictionary.length} entrées\n`);
  
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

export const dictionaryData: DictionaryEntry[] = ${JSON.stringify(cleanedDictionary, null, 2)};
`;

  fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', newContent);
  console.log('💾 Dictionnaire corrigé sauvegardé !');
  
  // Sauvegarder le rapport
  fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\sz_corrections_report.json', JSON.stringify(corrections, null, 2));
  console.log('💾 Rapport des corrections : sz_corrections_report.json');
  
} else {
  console.log('✅ Aucune correction s/z nécessaire !');
}

console.log('\n📚 RÈGLE ALUPEC APPLIQUÉE :');
console.log('   • Z entre voyelles (son sonore) : batiza, kuza, realiza');
console.log('   • Z en fin de mot : luz, feliz, rapaz, arroz');
console.log('   • S en début de mot : sal, sol, ser');
console.log('   • S en fin de mot (après voyelle nasale) : nos, tres, mas');
