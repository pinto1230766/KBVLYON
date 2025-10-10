const fs = require('fs');

console.log('Extraction du contenu des 18 leçons depuis l\'APK...\n');

try {
  const mapFile = 'C:\\Users\\FP123\\Downloads\\KBVLYON\\assets\\public\\assets\\PreachingLessonsPage-ErgC5eH2.js.map';
  const map = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
  
  console.log(`Total de sources: ${map.sources.length}\n`);
  
  // Trouver le fichier de données
  let dataIndex = -1;
  for (let i = 0; i < map.sources.length; i++) {
    const src = map.sources[i];
    console.log(`${i}: ${src}`);
    
    if (src.includes('preachingLessons') && src.includes('data')) {
      dataIndex = i;
    }
  }
  
  if (dataIndex === -1) {
    console.log('\n⚠️  Fichier de données non trouvé automatiquement');
    console.log('Essayons l\'index 8...');
    dataIndex = 8;
  }
  
  console.log(`\n✓ Extraction depuis l'index ${dataIndex}: ${map.sources[dataIndex]}`);
  
  const content = map.sourcesContent[dataIndex];
  const outputFile = 'd:\\PROJETCS APLICATIONS ANDROIDE\\APLI PRED\\KBVLYON\\extracted_preaching_lessons.ts';
  
  fs.writeFileSync(outputFile, content, 'utf8');
  console.log(`✓ Sauvegardé: ${outputFile}`);
  console.log(`✓ Taille: ${content.length} caractères`);
  
  // Afficher les premières lignes
  console.log('\n📝 Aperçu:');
  const lines = content.split('\n').slice(0, 30);
  lines.forEach((line, i) => console.log(`${i + 1}: ${line}`));
  
} catch (e) {
  console.error('❌ Erreur:', e.message);
}
