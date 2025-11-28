import fs from 'fs';

// Lire le fichier actuel
const content = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = content.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
const dictionaryData = JSON.parse(jsonMatch[1]);

// Lire les exemples
const examples = JSON.parse(fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\dictionary_examples.json', 'utf8'));

console.log('🔧 NETTOYAGE ET AMÉLIORATION DU DICTIONNAIRE\n');
console.log(`Entrées initiales: ${dictionaryData.length}\n`);

// IDs à supprimer (doublons - on garde le premier)
const idsToRemove = [
  'entry-487',   // bo (doublon, garder entry-486 avec note)
  'entry-1920',  // Alemanha (doublon exact)
  'entry-1930',  // Angola (doublon exact)
  'entry-2020',  // bandera (doublon exact)
  'entry-2025',  // abertura (doublon exact)
  'entry-2029',  // abo (doublon exact)
  'entry-2033',  // absolvison (doublon exact)
  'entry-2035',  // absurdu (doublon exact)
  'entry-2037',  // adapta (doublon exact)
  'entry-2043',  // adjetivu (doublon exact)
  'entry-2045',  // advogadu (doublon exact)
  'entry-2046',  // ael (doublon exact)
  'entry-2053',  // Afrika (doublon exact)
  'entry-2055',  // agia (doublon exact)
  'entry-2056',  // ago (doublon exact)
  'entry-2057',  // agora (doublon exact)
  'entry-2058',  // agostu (doublon exact)
  'entry-2059',  // agrada (doublon exact)
  'entry-2060',  // agradavel (doublon exact)
  'entry-2062',  // agresivu (doublon exact)
];

// Cas spéciaux à traiter manuellement
const specialCases = {
  'entry-660': { // e (verbe être) - fusionner avec entry-659
    action: 'merge',
    target: 'entry-659',
    newTranslation: 'e (conjonction) / é (verbo ser)'
  },
  'entry-1928': { // Amerikanu - fusionner
    action: 'merge',
    target: 'entry-183',
    newTranslation: 'americano / Americano'
  },
  'entry-1984': { // Azia vs azia - garder les deux (significations différentes)
    action: 'keep',
    note: 'Différent de entry-370 (azia = brûlure d\'estomac)'
  },
  'entry-2030': { // abordaji - enrichir la traduction
    action: 'merge',
    target: 'entry-22',
    newTranslation: 'abordagem / colisão'
  },
  'entry-2031': { // aborku - DIFFÉRENT de entry-23
    action: 'keep',
    note: 'entry-23 = abrigo, entry-2031 = aborto (significations différentes)'
  },
  'entry-2032': { // abri-odju - enrichir
    action: 'merge',
    target: 'entry-1909',
    category: 'Expression'
  },
  'entry-2042': { // adja - DIFFÉRENT de entry-42
    action: 'keep',
    note: 'entry-42 = machado, entry-2042 = aia (significations différentes)'
  },
  'entry-2054': { // Afrikanu - fusionner
    action: 'merge',
    target: 'entry-65',
    newTranslation: 'africano / Africano'
  }
};

// Filtrer les doublons
let cleanedData = dictionaryData.filter(entry => {
  if (idsToRemove.includes(entry.id)) {
    console.log(`❌ Suppression: ${entry.id} - ${entry.word}`);
    return false;
  }
  if (specialCases[entry.id]?.action === 'merge') {
    console.log(`🔀 Fusion: ${entry.id} - ${entry.word}`);
    return false;
  }
  return true;
});

// Appliquer les fusions et enrichissements
cleanedData = cleanedData.map(entry => {
  // Appliquer les fusions
  for (const [id, spec] of Object.entries(specialCases)) {
    if (spec.target === entry.id && spec.newTranslation) {
      console.log(`✏️  Enrichissement: ${entry.id} - ${entry.word}`);
      entry.translation.pt = spec.newTranslation;
    }
    if (spec.target === entry.id && spec.category) {
      entry.category = spec.category;
    }
  }
  
  // Ajouter les notes pour cas spéciaux
  if (specialCases[entry.id]?.note) {
    entry.note = specialCases[entry.id].note;
  }
  
  // Ajouter note pour "bo" qui a deux sens
  if (entry.id === 'entry-486') {
    entry.note = 'Peut aussi signifier "tu/você" (pronom) selon le contexte';
  }
  
  // Ajouter les exemples disponibles
  if (examples[entry.word]) {
    entry.example = examples[entry.word];
    console.log(`📝 Exemple ajouté: ${entry.word}`);
  }
  
  return entry;
});

console.log(`\n✅ Entrées finales: ${cleanedData.length}`);
console.log(`📉 Doublons supprimés: ${dictionaryData.length - cleanedData.length}`);

// Générer le nouveau fichier
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

export const dictionaryData: DictionaryEntry[] = ${JSON.stringify(cleanedData, null, 2)};
`;

// Sauvegarder
fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', newContent);

console.log('\n✅ Fichier mis à jour avec succès!');
console.log('\n📊 RÉSUMÉ DES AMÉLIORATIONS:');
console.log(`   - Doublons supprimés: ${dictionaryData.length - cleanedData.length}`);
console.log(`   - Exemples ajoutés: ${Object.keys(examples).length}`);
console.log(`   - Notes ajoutées pour cas ambigus`);
console.log(`   - Traductions enrichies pour certains mots`);
