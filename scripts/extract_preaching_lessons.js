const fs = require('fs');
const path = require('path');

console.log('================================================');
console.log('EXTRACTION DES 18 LEÇONS DE PREGAÇÃO');
console.log('================================================\n');

const mapFile = 'C:\\Users\\FP123\\Downloads\\KBVLYON\\assets\\public\\assets\\PreachingLessonsPage-ErgC5eH2.js.map';

console.log('📖 Lecture du source map...');
const mapContent = fs.readFileSync(mapFile, 'utf8');
const map = JSON.parse(mapContent);

console.log(`✓ Source map chargé: ${map.sources.length} fichiers\n`);

// Trouver le fichier preachingLessons.ts
let lessonsIdx = -1;
for (let i = 0; i < map.sources.length; i++) {
  const src = map.sources[i];
  if (src.includes('preachingLessons') && !src.includes('Page')) {
    lessonsIdx = i;
    console.log(`✓ Trouvé: ${src} (index ${i})`);
    break;
  }
}

if (lessonsIdx === -1) {
  console.log('\n❌ preachingLessons.ts non trouvé!');
  console.log('\nFichiers disponibles:');
  map.sources.forEach((s, i) => {
    if (s.includes('data') || s.includes('lessons') || s.includes('Lessons')) {
      console.log(`  ${i}: ${s}`);
    }
  });
  process.exit(1);
}

// Extraire le contenu
const lessonsContent = map.sourcesContent[lessonsIdx];
console.log(`✓ Contenu extrait: ${lessonsContent.length.toLocaleString()} caractères\n`);

// Sauvegarder le fichier TypeScript brut
const rawFile = 'src/data/preachingLessons_from_apk.ts';
fs.writeFileSync(rawFile, lessonsContent, 'utf8');
console.log(`✓ Fichier brut sauvegardé: ${rawFile}`);

// Afficher les premières lignes
console.log('\n📝 Aperçu (50 premières lignes):');
const lines = lessonsContent.split('\n');
for (let i = 0; i < Math.min(50, lines.length); i++) {
  console.log(`${(i + 1).toString().padStart(3)}: ${lines[i]}`);
}

// Compter les leçons
const lessonMatches = lessonsContent.match(/\{\s*id:\s*\d+/g);
if (lessonMatches) {
  console.log(`\n📊 Nombre de leçons détectées: ${lessonMatches.length}`);
}

console.log('\n✅ EXTRACTION TERMINÉE!');
console.log('================================================\n');
console.log('📌 Prochaines étapes:');
console.log('   1. Ouvrir: src/data/preachingLessons_from_apk.ts');
console.log('   2. Vérifier le contenu des 18 leçons');
console.log('   3. Adapter si nécessaire pour lessonsData.ts\n');
