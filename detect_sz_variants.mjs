import fs from 'fs';

// Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const dictionaryContent = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = dictionaryContent.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
const dictionary = JSON.parse(jsonMatch[1]);

console.log(`✅ ${dictionary.length} entrées chargées.\n`);

// Corpus étendu de jw.org (avec plus de texte pour avoir une meilleure référence)
const jwOrgCorpus = `
batiza batizadu batizadu baptismo baptismu
bênson bensu abênsua
jizus kristu
paraízu
realiza realizadu realizason
organiza organizadu organizason
batiza batizadu
utiliza utilizadu
analiza analizadu
civiliza civilizadu
simboliza simbolizadu
`.toLowerCase();

// Extraire tous les mots du corpus jw.org
const jwOrgWords = new Set();
jwOrgCorpus.split(/\s+/).forEach(word => {
  if (word.length > 2) {
    jwOrgWords.add(word.trim());
  }
});

// Détecter les paires s/z dans notre dictionnaire
const sZVariants = new Map(); // forme de base -> [variantes]

dictionary.forEach(entry => {
  const word = entry.word.toLowerCase();
  
  // Créer une version normalisée (remplacer z par s pour comparaison)
  const normalized = word.replace(/z/g, 's');
  
  if (!sZVariants.has(normalized)) {
    sZVariants.set(normalized, []);
  }
  sZVariants.get(normalized).push({
    original: entry.word,
    id: entry.id,
    translation: entry.translation.pt,
    hasZ: word.includes('z'),
    hasS: word.replace(/z/g, '').includes('s')
  });
});

// Identifier les paires avec à la fois s et z
const conflicts = [];
sZVariants.forEach((variants, normalized) => {
  if (variants.length > 1) {
    const hasZVersion = variants.some(v => v.hasZ);
    const hasSVersion = variants.some(v => !v.hasZ && v.original.includes('s'));
    
    if (hasZVersion && hasSVersion) {
      // Vérifier quelle version existe dans jw.org
      const zVersion = variants.find(v => v.hasZ);
      const sVersion = variants.find(v => !v.hasZ);
      
      let correctVersion = null;
      let incorrectVersion = null;
      
      if (zVersion && jwOrgWords.has(zVersion.original.toLowerCase())) {
        correctVersion = zVersion;
        incorrectVersion = sVersion;
      } else if (sVersion && jwOrgWords.has(sVersion.original.toLowerCase())) {
        correctVersion = sVersion;
        incorrectVersion = zVersion;
      }
      
      conflicts.push({
        normalized: normalized,
        variants: variants,
        correctVersion: correctVersion,
        incorrectVersion: incorrectVersion,
        inJwOrg: correctVersion !== null
      });
    }
  }
});

console.log(`🔍 DÉTECTION DES VARIANTES S/Z\n`);
console.log(`Paires s/z trouvées : ${conflicts.length}\n`);

if (conflicts.length > 0) {
  console.log('📋 LISTE DES VARIANTES S/Z :\n');
  
  conflicts.forEach((conflict, index) => {
    console.log(`${(index + 1).toString().padStart(3)}. Forme normalisée: "${conflict.normalized}"`);
    conflict.variants.forEach((variant, i) => {
      const marker = conflict.correctVersion && variant.original === conflict.correctVersion.original ? '✅' : 
                     conflict.incorrectVersion && variant.original === conflict.incorrectVersion.original ? '❌' : '❓';
      console.log(`     ${marker} "${variant.original}" (ID: ${variant.id})`);
    });
    console.log('');
  });
  
  // Sauvegarder le rapport
  const report = {
    totalConflicts: conflicts.length,
    conflicts: conflicts.map(c => ({
      normalized: c.normalized,
      variants: c.variants.map(v => ({
        word: v.original,
        id: v.id,
        translation: v.translation
      })),
      recommendation: c.correctVersion ? {
        keep: c.correctVersion.original,
        remove: c.incorrectVersion?.original
      } : null
    }))
  };
  
  fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\sz_variants_report.json', JSON.stringify(report, null, 2));
  console.log('💾 Rapport détaillé sauvegardé : sz_variants_report.json\n');
  
  console.log('⚠️  ATTENTION : Le corpus jw.org est limité.');
  console.log('   Pour une vérification complète, nous devons extraire plus de texte de jw.org.\n');
  
} else {
  console.log('✅ Aucune variante s/z problématique trouvée !');
}

// Règles générales ALUPEC pour s/z
console.log('📚 RÈGLES GÉNÉRALES ALUPEC (s vs z) :\n');
console.log('   • "z" entre voyelles : realiza, batiza, organiza');
console.log('   • "s" en début de mot : sal, sol, ser');
console.log('   • "s" en fin de mot : mas, tres, nos');
console.log('   • "s" après consonne : pensar, falsa');
console.log('   • "z" pour le son [z] sonore');
console.log('   • "s" pour le son [s] sourd\n');
