import fs from 'fs';

// Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const content = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = content.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
const dictionary = JSON.parse(jsonMatch[1]);

console.log(`✅ ${dictionary.length} entrées chargées.\n`);

// Détecter les doublons
const wordMap = new Map(); // mot -> [liste des entrées]
const duplicates = [];

dictionary.forEach(entry => {
  const word = entry.word.toLowerCase();
  
  if (!wordMap.has(word)) {
    wordMap.set(word, []);
  }
  wordMap.get(word).push(entry);
});

// Identifier les doublons
wordMap.forEach((entries, word) => {
  if (entries.length > 1) {
    duplicates.push({
      word: word,
      count: entries.length,
      entries: entries
    });
  }
});

console.log(`🔍 DÉTECTION DES DOUBLONS\n`);
console.log(`Mots en double : ${duplicates.length}\n`);

if (duplicates.length > 0) {
  console.log('📋 LISTE DES DOUBLONS :\n');
  
  duplicates.forEach((dup, index) => {
    console.log(`${(index + 1).toString().padStart(3)}. "${dup.entries[0].word}" (${dup.count}x)`);
    dup.entries.forEach((entry, i) => {
      console.log(`     [${i + 1}] ID: ${entry.id} | Traduction: "${entry.translation.pt}" | Catégorie: ${entry.category || 'N/A'}`);
    });
    console.log('');
  });
  
  // Sauvegarder le rapport détaillé
  const report = {
    totalDuplicates: duplicates.length,
    duplicates: duplicates.map(dup => ({
      word: dup.entries[0].word,
      count: dup.count,
      entries: dup.entries.map(e => ({
        id: e.id,
        translation: e.translation.pt,
        category: e.category,
        example: e.example
      }))
    }))
  };
  
  fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\duplicates_report.json', JSON.stringify(report, null, 2));
  console.log('💾 Rapport détaillé sauvegardé : duplicates_report.json\n');
  
  // Proposer la suppression automatique
  console.log('🧹 NETTOYAGE AUTOMATIQUE\n');
  console.log('Stratégie : Garder la première occurrence, supprimer les suivantes.\n');
  
  const idsToRemove = new Set();
  duplicates.forEach(dup => {
    // Garder la première entrée (index 0), supprimer les autres
    for (let i = 1; i < dup.entries.length; i++) {
      idsToRemove.add(dup.entries[i].id);
      console.log(`   ❌ Suppression: ${dup.entries[i].id} - "${dup.entries[i].word}"`);
    }
  });
  
  // Créer le dictionnaire nettoyé
  const cleanedDictionary = dictionary.filter(entry => !idsToRemove.has(entry.id));
  
  console.log(`\n✅ ${idsToRemove.size} doublons supprimés`);
  console.log(`📊 Avant: ${dictionary.length} entrées`);
  console.log(`📊 Après: ${cleanedDictionary.length} entrées\n`);
  
  // Sauvegarder le dictionnaire nettoyé
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
  console.log('💾 Dictionnaire nettoyé sauvegardé !');
  
} else {
  console.log('✅ Aucun doublon trouvé !');
}
