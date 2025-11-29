import fs from 'fs';

// Corpus étendu de jw.org
const jwOrgCorpus = `
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

Pamodi ki sakrifisiu di Jizus ta salva un monti di algen?
Kel primeru ómi, Adon, kriadu di manera perfetu ô sen pekadu. El tinha speransa di vive pa tudu ténpu, má el perde kel oportunidadi li pamodi el skodje ka obi ku Deus.
Kantu el tevi fidjus, el pasa-s kel pekadu, ki é sima un defetu.
É pur isu ki Bíblia ta fla ma Adon 'bende' el ku se fidjus pa ser skravu di pekadu i mórti.
Dja ki tudu kes fidju di Adon éra inperfetu, es ka ta podia rekupera kel ki Adon perde.
Deus xinti péna di kes disendenti di Adon ki fika sen speransa.
Má dja ki justisa di Deus é perfetu, el ka podia sô finji ma nada ka kontise ô púrdua pekadu di disendentis di Adon sen un bon motivu.
Deus ta ama-nu, pur isu el ranja un manera justu pa púrdua ô ti pa paga nos pekadu.
Resgati é kel manera justu ki el ranja.

Na Bíblia, palavra 'resgati' ta inklui três kuza:
El é un pagamentu.
El ta traze libertason, ô salvason.
Valor izatu ô igual di kuzê ki algen krê resgata.
Odja modi ki kes três kuza li ta aplika na resgati di Jizus Kristu.
Pagamentu. Bíblia ta fla ma kes ki ta sirbi Deus 'kunpradu pa un présu.'
Kel présu li é sangi di Jizus Kristu ki 'kunpra pesoas pa Deus, di tudu tribu, língua, povu i nason'.
Libertason. Sakrifisiu di resgati di Jizus ta liberta-nu di pekadu.
Mésmu valor. Kel sakrifisiu di Jizus ten kel mésmu valor di vida perfetu ki Adon perde.
Bíblia ta fla: 'Sima txeu algen bira pekador pamodi sô un ómi [Adon] ki dizobidese, tanbê txeu algen ta ben bira justu pamodi sô un [Jizus Kristu] ki obidese.'
Kel testu li ta splika modi ki mórti di un ómi sô paga resgati pa un monti di pekador.
Nton, sakrifisiu di Jizus é 'un resgati di valor izatu'.
Kel sakrifisiu li ta djuda tudu kes algen ki ta faze kuzê ki Deus ta fla.

Kuzê ki é pekadu?
Pekadu é tudu kuza ki nu ta faze, ki nu ta xinti ô ki nu ta pensa ki é kóntra kes lei di Deus.
Pekadu é faze un kuza mariadu ô injustu ki ta bai kóntra kel ki Deus ta fla.
Bíblia tanbê ta fla ma óras ki nu ta dexa di faze un kuza dretu ki nu devia faze, kel-la tanbê é pekadu.
Na kes língua ki Bíblia skrebedu, kes palavra ki traduzidu pa pekadu krê fla 'fadja', sima óras ki un algen ta fadja kel pontu ki el sta ta smira pa el da ku flexa.
Bíblia ta fla ma na ténpu antigu uns trópa di Israel ki tinha txeu spiriénsa ta daba ku pédra i es 'ka ta fadjaba.'
Kes palavra ki traduzidu 'ka ta fadjaba', na kes língua ki Bíblia skrebedu na el, krê fla 'ka ta pekaba.'
Nton, peka é óras ki un algen ta fadja pamodi el ka kunpri ku kes lei perfetu di Deus.
Deus é nos Kriador, pur isu el ten direitu di fla-nu kuzê ki é dretu ô mariadu.
Nu ten ki presta kónta na el pa kel ki nu ta faze.
`;

// Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const dictionaryContent = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = dictionaryContent.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
const currentDictionary = JSON.parse(jsonMatch[1]);

// Créer une Map des mots existants
const existingWordsMap = new Map();
currentDictionary.forEach(entry => {
  existingWordsMap.set(entry.word.toLowerCase(), entry);
});

console.log(`✅ ${currentDictionary.length} entrées chargées.\n`);

// Extraire les mots et leurs contextes (phrases)
const sentences = jwOrgCorpus.split(/[.!?]\s+/).filter(s => s.trim().length > 10);
const wordContexts = new Map(); // mot -> [phrases contenant le mot]

sentences.forEach(sentence => {
  const words = sentence
    .toLowerCase()
    .replace(/[,;:"""''()[\]]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !/^\d+$/.test(w));
  
  words.forEach(word => {
    if (!wordContexts.has(word)) {
      wordContexts.set(word, []);
    }
    if (wordContexts.get(word).length < 3) { // Max 3 exemples par mot
      wordContexts.get(word).push(sentence.trim());
    }
  });
});

// Identifier les mots manquants
const missingWords = [];
wordContexts.forEach((contexts, word) => {
  if (!existingWordsMap.has(word)) {
    missingWords.push({
      word: word,
      contexts: contexts,
      frequency: contexts.length
    });
  }
});

// Trier par fréquence
missingWords.sort((a, b) => b.frequency - a.frequency);

console.log(`📊 ANALYSE DU CORPUS JW.ORG\n`);
console.log(`Mots uniques dans le corpus : ${wordContexts.size}`);
console.log(`Mots manquants dans notre dictionnaire : ${missingWords.length}\n`);

// Afficher les top 30
console.log('🆕 TOP 30 MOTS MANQUANTS (par fréquence) :\n');
missingWords.slice(0, 30).forEach((item, index) => {
  console.log(`${(index + 1).toString().padStart(2)}. "${item.word}" (${item.frequency}x)`);
  if (item.contexts[0]) {
    console.log(`    Exemple: "${item.contexts[0].substring(0, 80)}..."`);
  }
});

// Sauvegarder les mots manquants avec leurs contextes
const report = {
  totalWordsInCorpus: wordContexts.size,
  missingWordsCount: missingWords.length,
  missingWords: missingWords.map(item => ({
    word: item.word,
    frequency: item.frequency,
    exampleSentences: item.contexts
  }))
};

fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\jw_org_missing_words.json', JSON.stringify(report, null, 2));
console.log('\n💾 Rapport complet sauvegardé : jw_org_missing_words.json');
console.log('   Ce fichier contient tous les mots manquants avec leurs phrases d\'exemple.');
