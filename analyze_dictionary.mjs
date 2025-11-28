import fs from 'fs';

// Lire le fichier
const content = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');

// Extraire les données JSON
const jsonMatch = content.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
if (!jsonMatch) {
  console.error('Impossible de trouver les données du dictionnaire');
  process.exit(1);
}

const dictionaryData = JSON.parse(jsonMatch[1]);

console.log('=== ANALYSE DU DICTIONNAIRE CAP-VERDIEN ===\n');
console.log(`📊 Nombre total d'entrées: ${dictionaryData.length}\n`);

// 1. Vérifier les doublons
console.log('🔍 VÉRIFICATION DES DOUBLONS:\n');
const wordMap = new Map();
const duplicates = [];

dictionaryData.forEach((entry, index) => {
  const word = entry.word.toLowerCase();
  if (wordMap.has(word)) {
    duplicates.push({
      word: entry.word,
      indices: [wordMap.get(word), index],
      ids: [dictionaryData[wordMap.get(word)].id, entry.id]
    });
  } else {
    wordMap.set(word, index);
  }
});

if (duplicates.length > 0) {
  console.log(`⚠️  ${duplicates.length} doublons trouvés:\n`);
  duplicates.forEach(dup => {
    console.log(`   - "${dup.word}" (IDs: ${dup.ids.join(', ')})`);
  });
} else {
  console.log('✅ Aucun doublon trouvé\n');
}

// 2. Vérifier les catégories
console.log('\n📚 CATÉGORIES GRAMMATICALES:\n');
const categories = new Map();
dictionaryData.forEach(entry => {
  const cat = entry.category || 'Non définie';
  categories.set(cat, (categories.get(cat) || 0) + 1);
});

const sortedCategories = Array.from(categories.entries()).sort((a, b) => b[1] - a[1]);
sortedCategories.forEach(([cat, count]) => {
  console.log(`   ${cat}: ${count} entrées`);
});

// 3. Vérifier les exemples vides
console.log('\n📝 EXEMPLES:\n');
const emptyExamples = dictionaryData.filter(entry => 
  !entry.example || !entry.example.pt || !entry.example.kea || 
  entry.example.pt === '' || entry.example.kea === ''
);
console.log(`   Entrées sans exemples: ${emptyExamples.length} / ${dictionaryData.length}`);
console.log(`   Pourcentage: ${((emptyExamples.length / dictionaryData.length) * 100).toFixed(1)}%`);

// 4. Vérifier les traductions
console.log('\n🌐 TRADUCTIONS:\n');
const emptyTranslations = dictionaryData.filter(entry => 
  !entry.translation || !entry.translation.pt || entry.translation.pt === ''
);
console.log(`   Entrées sans traduction: ${emptyTranslations.length}`);

// 5. Vérifier les notes
console.log('\n📌 NOTES:\n');
const withNotes = dictionaryData.filter(entry => entry.note && entry.note !== '');
console.log(`   Entrées avec notes: ${withNotes.length} / ${dictionaryData.length}`);

// 6. Statistiques par lettre
console.log('\n🔤 DISTRIBUTION PAR LETTRE:\n');
const letterMap = new Map();
dictionaryData.forEach(entry => {
  const firstLetter = entry.word[0].toUpperCase();
  letterMap.set(firstLetter, (letterMap.get(firstLetter) || 0) + 1);
});

const sortedLetters = Array.from(letterMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));
sortedLetters.forEach(([letter, count]) => {
  const bar = '█'.repeat(Math.ceil(count / 10));
  console.log(`   ${letter}: ${count.toString().padStart(4)} ${bar}`);
});

// 7. Exporter la liste des doublons pour correction
if (duplicates.length > 0) {
  const duplicatesReport = duplicates.map(dup => ({
    word: dup.word,
    entries: dup.ids.map(id => {
      const entry = dictionaryData.find(e => e.id === id);
      return {
        id: entry.id,
        translation: entry.translation.pt,
        category: entry.category
      };
    })
  }));
  
  fs.writeFileSync(
    'c:\\Users\\FP123\\Downloads\\KBVLYON\\dictionary_duplicates.json',
    JSON.stringify(duplicatesReport, null, 2)
  );
  console.log('\n📄 Rapport des doublons exporté vers: dictionary_duplicates.json');
}

console.log('\n=== FIN DE L\'ANALYSE ===');
