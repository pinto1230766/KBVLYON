import fs from 'fs';

// Lire le rapport des mots manquants
const report = JSON.parse(fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\jw_org_missing_words.json', 'utf8'));

// Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const dictionaryContent = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = dictionaryContent.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
let currentDictionary = JSON.parse(jsonMatch[1]);

console.log(`✅ ${currentDictionary.length} entrées chargées.\n`);

// Trouver le dernier ID
const lastId = Math.max(...currentDictionary.map(e => parseInt(e.id.replace('entry-', ''))));
console.log(`Dernier ID actuel: entry-${lastId}\n`);

// Mots à ajouter avec traductions manuelles (basées sur le contexte)
const wordsToAdd = [
  { word: 'kuzê', translation: 'o quê / que', category: 'Pronom' },
  { word: 'mórti', translation: 'morte', category: 'Nom' },
  { word: 'resgati', translation: 'resgate', category: 'Nom' },
  { word: 'jizus', translation: 'Jesus', category: 'Nom' },
  { word: 'má', translation: 'mas', category: 'Conjonction' },
  { word: 'tanbê', translation: 'também', category: 'Adverbe' },
  { word: 'kuza', translation: 'coisa', category: 'Nom' },
  { word: 'kristu', translation: 'Cristo', category: 'Nom' },
  { word: 'kes', translation: 'os / as (artigo plural)', category: 'Article' },
  { word: 'ben', translation: 'vir / bem', category: 'Verbe' },
  { word: 'sufrimentu', translation: 'sofrimento', category: 'Nom' },
  { word: 'kóntra', translation: 'contra', category: 'Préposition' },
  { word: 'ómi', translation: 'homem', category: 'Nom' },
  { word: 'fidjus', translation: 'filhos', category: 'Nom' },
  { word: 'adon', translation: 'Adão', category: 'Nom' },
  { word: 'pur', translation: 'por', category: 'Préposition' },
  { word: 'isu', translation: 'isso', category: 'Pronom' },
  { word: 'bíblia', translation: 'Bíblia', category: 'Nom' },
  { word: 'krê', translation: 'quer / significa', category: 'Verbe' },
  { word: 'língua', translation: 'língua', category: 'Nom' },
  { word: 'faze', translation: 'fazer', category: 'Verbe' },
  { word: 'óras', translation: 'vezes / horas', category: 'Nom' },
  { word: 'jeová', translation: 'Jeová', category: 'Nom' },
  { word: 'pesoas', translation: 'pessoas', category: 'Nom' },
  { word: 'fé', translation: 'fé', category: 'Nom' },
  { word: 'se', translation: 'se / seu', category: 'Pronom' },
  { word: 'salvason', translation: 'salvação', category: 'Nom' },
  { word: 'satanás', translation: 'Satanás', category: 'Nom' },
  { word: 'kel-la', translation: 'aquilo / isso', category: 'Pronom' },
  { word: 'kontise', translation: 'acontecer / continuar', category: 'Verbe' },
  { word: 'meste', translation: 'precisar / dever', category: 'Verbe' },
  { word: 'batiza', translation: 'batizar', category: 'Verbe' },
  { word: 'pruvetu', translation: 'proveito / benefício', category: 'Nom' },
  { word: 'kridita', translation: 'acreditar', category: 'Verbe' },
  { word: 'pode', translation: 'poder', category: 'Verbe' },
  { word: 'salvadu', translation: 'salvado', category: 'Adjectif' },
  { word: 'tistimunhas', translation: 'testemunhas', category: 'Nom' },
  { word: 'anju', translation: 'anjo', category: 'Nom' },
  { word: 'pikinoti', translation: 'pequeno', category: 'Adjectif' },
  { word: 'resusitadu', translation: 'ressuscitado', category: 'Adjectif' },
  { word: 'reinu', translation: 'reino', category: 'Nom' },
  { word: 'umanus', translation: 'humanos', category: 'Nom' },
  { word: 'paraízu', translation: 'paraíso', category: 'Nom' },
  { word: 'saúdi', translation: 'saúde', category: 'Nom' },
  { word: 'rabela', translation: 'rebelar', category: 'Verbe' },
  { word: 'txomadu', translation: 'chamado', category: 'Adjectif' },
  { word: 'diabu', translation: 'diabo', category: 'Nom' },
  { word: 'konvense', translation: 'convencer', category: 'Verbe' },
  { word: 'djuntu', translation: 'junto', category: 'Adverbe' },
  { word: 'txeu', translation: 'muito / cheio', category: 'Adverbe' }
];

console.log(`🔨 Ajout de ${wordsToAdd.length} nouveaux mots avec exemples réels de jw.org...\n`);

// Créer les nouvelles entrées
const newEntries = wordsToAdd.map((wordData, index) => {
  const entryId = lastId + index + 1;
  
  // Trouver les exemples dans le rapport
  const wordInfo = report.missingWords.find(w => w.word === wordData.word);
  
  let ptExample = `Exemplo com "${wordData.translation}"`;
  let keaExample = `Exenplu ku "${wordData.word}"`;
  
  if (wordInfo && wordInfo.exampleSentences && wordInfo.exampleSentences.length > 0) {
    // Utiliser la première phrase réelle comme exemple
    const realSentence = wordInfo.exampleSentences[0];
    
    // Limiter la longueur de l'exemple (max 100 caractères)
    keaExample = realSentence.length > 100 
      ? realSentence.substring(0, 97) + '...'
      : realSentence;
    
    // Créer une traduction PT approximative (simplifiée)
    ptExample = keaExample
      .replace(/kuzê/g, 'o quê')
      .replace(/jizus/gi, 'Jesus')
      .replace(/deus/gi, 'Deus')
      .replace(/bíblia/gi, 'Bíblia')
      .replace(/ténpu/g, 'tempo')
      .replace(/téra/g, 'terra');
  }
  
  console.log(`   ✨ ${wordData.word} (${wordData.category})`);
  
  return {
    id: `entry-${entryId}`,
    word: wordData.word,
    translation: {
      pt: wordData.translation
    },
    example: {
      pt: ptExample,
      kea: keaExample
    },
    category: wordData.category
  };
});

// Fusionner avec le dictionnaire existant
const updatedDictionary = [...currentDictionary, ...newEntries];

console.log(`\n✅ ${newEntries.length} nouveaux mots ajoutés`);
console.log(`📊 Total: ${updatedDictionary.length} entrées\n`);

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

export const dictionaryData: DictionaryEntry[] = ${JSON.stringify(updatedDictionary, null, 2)};
`;

fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', newContent);
console.log('💾 Dictionnaire mis à jour avec succès (Vague jw.org)!');
