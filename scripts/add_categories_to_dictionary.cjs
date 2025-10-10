const fs = require('fs');
const path = require('path');

// Chemins
const dictPath = path.join(__dirname, '../src/data/dictionaryData.ts');

// Mappings de catégories basés sur mots-clés
const categoryMappings = {
  'Pregação': [
    'anunciar', 'proclamar', 'pregar', 'mensagem', 'boa nova', 'testemunhar', 'evangelizar',
    'anúncio', 'proclamação', 'pregador', 'testemunha', 'evangelho'
  ],
  'Bíblia': [
    'biblia', 'escritura', 'livro sagrado', 'palavra de deus', 'sagrada escritura',
    'escrituras', 'texto bíblico', 'versículo', 'capítulo', 'livro'
  ],
  'Religião': [
    'deus', 'jesus', 'cristo', 'espirito santo', 'santo', 'divino', 'religião',
    'fé', 'crente', 'cristão', 'igreja', 'congregação', 'reunião'
  ],
  'Esperança': [
    'esperança', 'futuro', 'vida eterna', 'paraíso', 'ressurreição', 'salvação',
    'promessa', 'confiança', 'otimismo'
  ],
  'Sofrimento': [
    'sofrimento', 'dor', 'problema', 'tristeza', 'angústia', 'dificuldade',
    'provação', 'tribulação', 'dor física', 'dor emocional'
  ],
  'Família': [
    'família', 'pai', 'mãe', 'filho', 'filha', 'irmão', 'irmã', 'marido', 'esposa',
    'pai de família', 'mãe de família', 'parentes'
  ],
  'Vida': [
    'vida', 'morte', 'nascimento', 'existência', 'vivência', 'sobrevivência'
  ],
  'Pecado': [
    'pecado', 'mal', 'errado', 'transgressão', 'culpa', 'arrependimento'
  ],
  'Perdão': [
    'perdoar', 'perdão', 'misericórdia', 'graça', 'clemência', 'absolvição'
  ],
  'Oração': [
    'orar', 'rezar', 'oração', 'prece', 'súplica', 'agradecimento'
  ],
  'Reino de Deus': [
    'reino', 'governo', 'soberania', 'reinado', 'domínio divino'
  ]
};

// Fonction pour déterminer la catégorie
function getCategory(entry) {
  const text = `${entry.word} ${entry.translation.pt} ${entry.translation.cv}`.toLowerCase();

  for (const [category, keywords] of Object.entries(categoryMappings)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }

  return 'Geral'; // Catégorie par défaut
}

// Lire le fichier
console.log('Lecture du fichier dictionaryData.ts...');
const content = fs.readFileSync(dictPath, 'utf8');

// Trouver la partie données (après le =)
const startIndex = content.indexOf('= [') + 2;
const endIndex = content.lastIndexOf('];');

if (startIndex === -1 || endIndex === -1) {
  console.error('Format du fichier non reconnu');
  process.exit(1);
}

const dataPart = content.substring(startIndex, endIndex + 1);
let dictionaryData;

try {
  // Évaluer le tableau (risqué mais nécessaire pour gros fichiers)
  dictionaryData = eval(dataPart);
} catch (e) {
  console.error('Erreur lors du parsing des données:', e);
  process.exit(1);
}

console.log(`Traitement de ${dictionaryData.length} entrées...`);

// Ajouter les catégories
dictionaryData.forEach(entry => {
  entry.category = getCategory(entry);
});

// Générer le nouveau contenu
const newDataPart = JSON.stringify(dictionaryData, null, 2);
const newContent = content.substring(0, startIndex) + newDataPart + content.substring(endIndex + 1);

// Écrire le fichier
fs.writeFileSync(dictPath, newContent, 'utf8');

console.log('✅ Catégories ajoutées avec succès!');
console.log('📊 Résumé des catégories:');

const categoryCount = {};
dictionaryData.forEach(entry => {
  categoryCount[entry.category] = (categoryCount[entry.category] || 0) + 1;
});

Object.entries(categoryCount).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count} mots`);
});