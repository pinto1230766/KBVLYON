/**
 * Script pour standardiser le format du dictionnaire
 * - Ajoute des catégories aux entrées
 * - Corrige les incohérences de ponctuation
 * - Identifie les doublons potentiels
 * - Ajoute des synonymes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemins des fichiers
const dictionaryPath = path.join(__dirname, '..', 'public', 'dictionary.json');
const outputPath = path.join(__dirname, '..', 'public', 'dictionary-standardized.json');

// Catégories communes
const categories = {
  'família': ['pai', 'mai', 'mãe', 'fidju', 'fidja', 'irmon', 'irman', 'maridu', 'mudjer', 'kunpanheru', 'tiu', 'subrinha', 'subrinhu', 'prima', 'primo', 'primu', 'kunhadu', 'kunbada', 'kumadri', 'kunpadri', 'kretxeu', 'fidjadu', 'fidjada', 'madrinha', 'padrinhu', 'abó'],
  'alimentos': ['kumida', 'aroz', 'fijon', 'pão', 'kafé', 'leti', 'tomati', 'batata', 'laranja', 'manga', 'mangu', 'limon', 'ananas', 'pexi', 'pexe', 'karni', 'galinha', 'porku', 'kume', 'bebi', 'bebe', 'toma', 'djanta', 'almosu', 'adju', 'faba', 'ervilha', 'alfasi', 'asparagu', 'balansia', 'kaju', 'figu', 'améndua', 'fruta', 'pera', 'socladi', 'pudin', 'sobreménza', 'suguru', 'xikra'],
  'corpo': ['kabesa', 'rostu', 'boka', 'uditu', 'odju', 'brasu', 'duedju', 'pe', 'pérna', 'barriga', 'kosta', 'dorsu', 'petu', 'onbru', 'kotubélu', 'koxa', 'kexada', 'knee', 'sobaku', 'kabelu', 'katxu', 'piskos', 'mama'],
  'cores': ['branku', 'pretu', 'diom', 'vermelhu', 'verdi', 'azul', 'rosu', 'kastanhu', 'brumedju', 'doradu', 'kor-di-prata'],
  'tempo': ['ozu', 'oji', 'manhan', 'onti', 'ontem', 'ontonti', 'trizonti', 'dipos di manban', 'ténpu', 'dumingu', 'sigunda-fera', 'janeru', 'fevereru', 'abril'],
  'números': ['un', 'dós', 'tres', 'kuatu', 'uns'],
  'pronomes': ['N (Ami)', 'Bu (bo, abo)', 'El (Ael)', 'Nu (Du)', 'Es', 'nha', 'bu/bo', 'se', 'nos', 'nhos', 'di-bo', 'di-meu', 'di-nhos', 'di-nos', 'di-sel', 'di-ses'],
  'religião': ['Deus', 'Jesus', 'Jeová', 'Bíblia', 'orason', 'oração', 'bentison', 'bautizu', 'fé', 'glória', 'grasas', 'evangeliu', 'santu', 'santifikadu', 'salvason', 'igreja', 'Reino', 'kriason', 'speransa', 'esperança', 'komunhon', 'perduon', 'vida', 'morti'],
  'saudações': ['bon dia', 'bon tardi', 'bon noti', 'kuma ku bu sta?', 'kuma ku sta?', 'módi ki bu sta?', 'n sta bem', 'n ta dretu', 'sta tudu dretu', 'obrigadu', 'txeu obrigadu', 'di nada'],
  'perguntas': ['kuma ki bu mora?', 'undé ki bu mora?', 'kuma ku bu yama?', 'kantu anus bu ten?', 'kantu tempu ten?', 'pode repete?', 'kuze', 'kual'],
  'lugares': ['kaza', 'kuzinha', 'porta', 'tchon', 'mar', 'la', 'li'],
  'objetos': ['kopu', 'padas', 'papel', 'sapatu', 'kamiza', 'kalça', 'porta', 'kadera', 'konputador', 'tilivizon', 'internet', 'lista', 'folheto', 'revista', 'karton di saudi', 'ediffsiu', 'elevador', 'entrada'],
  'clima': ['klima', 'kalor', 'sol', 'txuba', 'ventu'],
  'qualidades': ['bon', 'mau', 'dretu', 'eradu', 'bunitu', 'feiu', 'feliz', 'tristi', 'kansadu', 'abundu', 'abusadu', 'importanti'],
  'verbos': ['bai', 'papia', 'odja', 'obe', 'skrebe', 'kume', 'bebi', 'bebe', 'toma', 'dormi', 'trabadja', 'pasa', 'faze', 'ser', 'ten', 'tene fomi', 'sta', 'kre', 'sabe', 'pode', 'podi', 'pon', 'pô', 'spera', 'txeka', 'txoma', 'traze', 'kai', 'kore', 'abuza', 'abri', 'adika', 'mérka', 'konpo']
};

// Fonction pour déterminer la catégorie d'un mot
function determineCategory(word) {
  for (const [category, words] of Object.entries(categories)) {
    if (words.some(w => word.toLowerCase().includes(w.toLowerCase()))) {
      return category;
    }
  }
  return null;
}

// Fonction pour identifier les synonymes potentiels
function findSynonyms(entries) {
  const synonymMap = new Map();
  
  // Regrouper par traduction
  entries.forEach(entry => {
    const ptTranslation = entry.translation.pt.toLowerCase();
    if (!synonymMap.has(ptTranslation)) {
      synonymMap.set(ptTranslation, []);
    }
    synonymMap.get(ptTranslation).push(entry.word);
  });
  
  // Filtrer pour ne garder que les groupes avec plus d'un mot
  const synonyms = {};
  for (const [translation, words] of synonymMap.entries()) {
    if (words.length > 1) {
      words.forEach(word => {
        synonyms[word] = words.filter(w => w !== word);
      });
    }
  }
  
  return synonyms;
}

// Fonction pour standardiser la ponctuation
function standardizePunctuation(text) {
  // Assurer que les phrases se terminent par un point
  if (text && typeof text === 'string' && text.length > 0) {
    const lastChar = text.trim().slice(-1);
    if (!['.', '!', '?'].includes(lastChar)) {
      return text.trim() + '.';
    }
    return text.trim();
  }
  return text;
}

// Fonction principale
async function standardizeDictionary() {
  try {
    // Lire le dictionnaire
    const data = fs.readFileSync(dictionaryPath, 'utf8');
    const dictionary = JSON.parse(data);
    
    // Trouver les synonymes
    const synonyms = findSynonyms(dictionary);
    
    // Standardiser les entrées
    const standardizedDictionary = dictionary.map(entry => {
      // Ajouter la catégorie
      const category = determineCategory(entry.word) || 'divers';
      
      // Standardiser la ponctuation des exemples
      if (entry.example) {
        entry.example.pt = standardizePunctuation(entry.example.pt);
        entry.example.cv = standardizePunctuation(entry.example.cv);
      }
      
      // Ajouter les synonymes s'ils existent
      if (synonyms[entry.word] && synonyms[entry.word].length > 0) {
        entry.synonyms = synonyms[entry.word];
      }
      
      // Ajouter la catégorie
      entry.category = category;
      
      return entry;
    });
    
    // Écrire le dictionnaire standardisé
    fs.writeFileSync(outputPath, JSON.stringify(standardizedDictionary, null, 2));
    
    console.log(`Dictionnaire standardisé écrit dans ${outputPath}`);
    console.log(`Nombre d'entrées: ${standardizedDictionary.length}`);
    
    // Statistiques des catégories
    const categoryStats = {};
    standardizedDictionary.forEach(entry => {
      if (!categoryStats[entry.category]) {
        categoryStats[entry.category] = 0;
      }
      categoryStats[entry.category]++;
    });
    
    console.log('Statistiques des catégories:');
    Object.entries(categoryStats)
      .sort((a, b) => b[1] - a[1])
      .forEach(([category, count]) => {
        console.log(`${category}: ${count} entrées`);
      });
    
  } catch (error) {
    console.error('Erreur lors de la standardisation du dictionnaire:', error);
  }
}

// Exécuter la fonction principale
standardizeDictionary();