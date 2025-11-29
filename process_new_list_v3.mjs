import fs from 'fs';

// 1. Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const dictionaryContent = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = dictionaryContent.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);

if (!jsonMatch) {
  console.error('❌ Impossible de lire dictionaryData.ts');
  process.exit(1);
}

const currentDictionary = JSON.parse(jsonMatch[1]);
console.log(`✅ ${currentDictionary.length} entrées existantes chargées.`);

// Créer un Set des mots existants normalisés (minuscules, sans accents) pour la comparaison
const existingWordsNormalized = new Set();
const existingWordsOriginal = new Map();

currentDictionary.forEach(entry => {
  const normalized = entry.word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  existingWordsNormalized.add(normalized);
  existingWordsOriginal.set(normalized, entry.word);
});

// 2. Lire et combiner les fichiers CSV
console.log('\n📖 Lecture des nouvelles listes...');
let newRawLines = [];

['raw_data_part1.csv', 'raw_data_part2.csv', 'raw_data_part3.csv'].forEach(file => {
  try {
    const content = fs.readFileSync(`c:\\Users\\FP123\\Downloads\\KBVLYON\\${file}`, 'utf8');
    const lines = content.split('\n').filter(line => line.trim() && !line.startsWith('mot_capverdien'));
    newRawLines = [...newRawLines, ...lines];
    console.log(`   - ${file}: ${lines.length} lignes`);
  } catch (e) {
    console.warn(`   ⚠️ Impossible de lire ${file}`);
  }
});

console.log(`✅ Total lignes brutes: ${newRawLines.length}`);

// 3. Analyser et filtrer
const wordsToAdd = [];
const duplicates = [];
const improvements = []; // Cas où le mot existe mais la nouvelle version a des accents

newRawLines.forEach(line => {
  // Format: mot,traduction,categorie
  // Parfois il y a des virgules dans la traduction, donc on prend le premier et le dernier élément
  const parts = line.split(',');
  if (parts.length < 2) return;

  const word = parts[0].trim();
  const category = parts[parts.length - 1].trim();
  // La traduction est tout ce qui est entre le premier et le dernier
  const translation = parts.slice(1, parts.length - 1).join(',').trim();

  if (!word || !translation) return;

  const normalizedWord = word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (existingWordsNormalized.has(normalizedWord)) {
    // Le mot existe déjà (peut-être sans accent)
    const original = existingWordsOriginal.get(normalizedWord);
    
    if (!original) {
        // Ne devrait pas arriver si la logique est correcte, mais par sécurité
        // Cela peut arriver si le mot normalisé est vide ou bizarre
        console.warn(`⚠️ Bizarre : ${word} (norm: ${normalizedWord}) trouvé dans Set mais pas dans Map`);
        return;
    }

    // Si le nouveau mot a des accents et l'ancien non, c'est une amélioration potentielle
    // On vérifie si le mot actuel a des accents (est différent de sa forme normalisée)
    const wordHasAccents = word !== normalizedWord;
    const originalHasAccents = original !== normalizedWord;

    if (word !== original && wordHasAccents && !originalHasAccents) {
        improvements.push({
            current: original,
            new: word,
            translation: translation
        });
    } else {
        duplicates.push({ word, existing: original });
    }
  } else {
    // Vrai nouveau mot
    wordsToAdd.push({
      word: word,
      translation: translation,
      category: category || 'Nom' // Par défaut
    });
    // On l'ajoute au set pour éviter les doublons dans la nouvelle liste elle-même
    existingWordsNormalized.add(normalizedWord);
  }
});

// 4. Sauvegarder les résultats
console.log('\n📊 RÉSULTATS DE L\'ANALYSE :');
console.log(`   🆕 Nouveaux mots à ajouter : ${wordsToAdd.length}`);
console.log(`   ✨ Améliorations potentielles (accents) : ${improvements.length}`);
console.log(`   🔁 Doublons ignorés : ${duplicates.length}`);

fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\words_to_add_v3.json', JSON.stringify(wordsToAdd, null, 2));
fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\improvements_v3.json', JSON.stringify(improvements, null, 2));

console.log('\n💾 Fichiers générés :');
console.log('   - words_to_add_v3.json');
console.log('   - improvements_v3.json');
