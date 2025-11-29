import fs from 'fs';

// Texte de référence de jw.org
const jwOrgText = `
Na kuzê ki Tistimunhas di Jeová ta kridita?
Salvason. Nu pode salvadu di pekadu ku mórti pamodi di resgati di Jizus. 
Pa tra pruvetu di resgati, pesoas meste ka sô mostra fé na Jizus má tanbê muda ses manera di vive i batiza.
Manera ki un algen ta vive ta prova si se fé sta bibu.
Má, salvason é ka un kuza ki nu ta ganha. Nu ta dadu el pamodi 'bondadi di Deus ki ka meresedu'.
Séu. Jeová Deus, Jizus Kristu i kes anju fiel ta mora na Séu.
Un grupu pikinoti di 144 mil algen ta ben resusitadu pa bai vive na Séu, pa governa ku Jizus na Reinu di Deus.
Téra. Deus kria Téra pa ser kaza di umanus pa tudu ténpu.
Deus ta ben abênsua kes algen ki ta obi ku el ku saúdi perfetu i vida pa tudu ténpu na paraízu na Téra.
Maldadi ku sufrimentu. Maldadi ku sufrimentu kumesa kantu un anju di Deus rabela kóntra el.
Dipôs ki el rabela el fika ta txomadu di "Satanás" i "Diabu".
El konvense primeru ómi ku mudjer pa rabela djuntu ku el i kel-la traze txeu prubléma gravi pa ses fidjus.
Pa rezolve kes dúvida ki Satanás labanta, Deus sta ta dexa maldadi ku sufrimentu kontise, má El ka ta dexa-s kontinua pa tudu ténpu.
`;

// Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const dictionaryContent = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = dictionaryContent.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
const currentDictionary = JSON.parse(jsonMatch[1]);

// Créer une Map des mots existants (normalisés)
const existingWordsMap = new Map();
currentDictionary.forEach(entry => {
  existingWordsMap.set(entry.word.toLowerCase(), entry.word);
});

// Extraire les mots du texte jw.org
const words = jwOrgText
  .toLowerCase()
  .replace(/[.,;:!?"""''()]/g, ' ') // Supprimer la ponctuation
  .split(/\s+/)
  .filter(w => w.length > 1) // Ignorer les mots d'une lettre
  .filter(w => !/^\d+$/.test(w)); // Ignorer les nombres

// Compter les occurrences
const wordCounts = new Map();
words.forEach(word => {
  wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
});

// Analyser les différences
const differences = [];
const missing = [];

Array.from(wordCounts.keys()).forEach(jwWord => {
  if (!existingWordsMap.has(jwWord)) {
    // Mot pas dans notre dictionnaire
    // Vérifier si c'est une variante orthographique proche
    let found = false;
    for (const [dictWord, original] of existingWordsMap.entries()) {
      // Vérifier similarité (ex: kuse vs kuzê)
      if (dictWord.replace(/[êôâ]/g, match => {
        if (match === 'ê') return 'e';
        if (match === 'ô') return 'o';
        if (match === 'â') return 'a';
        return match;
      }) === jwWord.replace(/[êôâ]/g, match => {
        if (match === 'ê') return 'e';
        if (match === 'ô') return 'o';
        if (match === 'â') return 'a';
        return match;
      })) {
        differences.push({
          jwOrg: jwWord,
          dictionary: dictWord,
          originalDict: original,
          type: 'accent'
        });
        found = true;
        break;
      }
    }
    
    if (!found) {
      missing.push(jwWord);
    }
  }
});

// Rapport
console.log('\n📊 ANALYSE ORTHOGRAPHIQUE (jw.org vs Dictionnaire)\n');
console.log(`Mots uniques dans le texte jw.org : ${wordCounts.size}`);
console.log(`Mots manquants dans notre dictionnaire : ${missing.length}`);
console.log(`Différences d'orthographe (accents) : ${differences.length}\n`);

if (differences.length > 0) {
  console.log('🔤 DIFFÉRENCES D\'ACCENTS :');
  differences.forEach(diff => {
    console.log(`   jw.org: "${diff.jwOrg}" | Dictionnaire: "${diff.originalDict}"`);
  });
}

if (missing.length > 0) {
  console.log('\n❌ MOTS MANQUANTS (top 20) :');
  const sortedMissing = missing
    .map(word => ({ word, count: wordCounts.get(word) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);
  
  sortedMissing.forEach(item => {
    console.log(`   "${item.word}" (${item.count}x)`);
  });
}

// Sauvegarder le rapport complet
const report = {
  totalWordsInSample: wordCounts.size,
  missingWords: missing.sort(),
  accentDifferences: differences
};

fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\jw_org_comparison.json', JSON.stringify(report, null, 2));
console.log('\n💾 Rapport complet sauvegardé : jw_org_comparison.json');
