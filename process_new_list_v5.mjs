import fs from 'fs';

// 1. Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const dictionaryContent = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = dictionaryContent.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
const currentDictionary = JSON.parse(jsonMatch[1]);
console.log(`✅ ${currentDictionary.length} entrées existantes chargées.`);

// Créer une Map des mots existants pour accès rapide
const existingWordsMap = new Map();
currentDictionary.forEach(entry => {
  existingWordsMap.set(entry.word.toLowerCase(), entry);
});

// 2. Lire la nouvelle liste
console.log('\n📖 Lecture de la nouvelle liste...');
const content = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\raw_data_part4.csv', 'utf8');
const lines = content.split('\n').filter(line => line.trim() && !line.startsWith('mot_capverdien'));
console.log(`✅ ${lines.length} lignes à traiter.`);

// 3. Analyser
const wordsToAdd = [];
const potentialImprovements = [];
const duplicates = [];

lines.forEach(line => {
  const parts = line.split(',');
  if (parts.length < 2) return;

  const word = parts[0].trim();
  const category = parts[parts.length - 1].trim();
  const translation = parts.slice(1, parts.length - 1).join(',').trim();

  if (!word || !translation) return;

  const existingEntry = existingWordsMap.get(word.toLowerCase());

  if (existingEntry) {
    // Le mot existe déjà. Vérifions si la traduction est différente.
    const currentTranslation = existingEntry.translation.pt;
    
    // Normalisation simple pour comparer
    const normCurrent = currentTranslation.toLowerCase().replace(/\s/g, '');
    const normNew = translation.toLowerCase().replace(/\s/g, '');

    if (normCurrent !== normNew) {
        // Traduction différente -> Amélioration potentielle
        potentialImprovements.push({
            id: existingEntry.id,
            word: word,
            currentTranslation: currentTranslation,
            newTranslation: translation,
            category: category
        });
    } else {
        duplicates.push(word);
    }
  } else {
    // Nouveau mot
    wordsToAdd.push({
      word: word,
      translation: translation,
      category: category || 'Nom'
    });
    // On l'ajoute à la map pour éviter les doublons dans la liste elle-même
    existingWordsMap.set(word.toLowerCase(), { word, translation: { pt: translation } });
  }
});

// 4. Sauvegarder les résultats
console.log('\n📊 RÉSULTATS DE L\'ANALYSE V5 :');
console.log(`   🆕 Nouveaux mots à ajouter : ${wordsToAdd.length}`);
console.log(`   ✨ Améliorations potentielles (traductions) : ${potentialImprovements.length}`);
console.log(`   🔁 Doublons exacts ignorés : ${duplicates.length}`);

fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\words_to_add_v5.json', JSON.stringify(wordsToAdd, null, 2));
fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\improvements_v5.json', JSON.stringify(potentialImprovements, null, 2));

console.log('\n💾 Fichiers générés :');
console.log('   - words_to_add_v5.json');
console.log('   - improvements_v5.json');
