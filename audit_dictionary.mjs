import fs from 'fs';

// Lire le dictionnaire actuel
console.log('📖 Lecture du dictionnaire actuel...');
const content = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = content.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
const dictionary = JSON.parse(jsonMatch[1]);

console.log(`✅ ${dictionary.length} entrées chargées.`);

const anomalies = {
  ptInKea: [],
  keaInPt: [],
  identical: [],
  emptyTranslation: []
};

// Suffixes typiquement portugais à éviter en Kriolu (heuristique)
const ptSuffixes = ['ção', 'ções', 'dade', 'dades', 'mente', 'vel', 'veis', 'nh', 'lh'];
// Suffixes/caractères typiquement Kriolu (heuristique)
const keaPatterns = ['k', 'y', 'dj', 'tx', 'bsot'];

dictionary.forEach(entry => {
  const word = entry.word.toLowerCase();
  const translation = entry.translation.pt.toLowerCase();

  // 1. Détection de Portugais dans le mot Kriolu
  // On vérifie si le mot finit par un suffixe portugais non adapté
  // Attention: 'vel' existe en Kriolu mais souvent 'bel'. 'nh' et 'lh' existent en PT mais en Kriolu c'est 'nh' (pareil) et 'dj'/'lj'.
  // En fait, 'nh' est commun aux deux. 'lh' est typiquement PT (Kriolu: 'dj' ou 'lj').
  
  if (word.includes('lh') || word.endsWith('ção') || word.endsWith('dade')) {
    anomalies.ptInKea.push({ id: entry.id, word: entry.word, reason: 'Suffixe/Son Portugais détecté' });
  }

  // 2. Détection de Kriolu dans la traduction Portugaise
  // Le 'k' et 'y' (sauf mots étrangers) sont rares en PT
  // 'tx' et 'dj' sont typiques du Kriolu
  if (translation.includes(' k') || translation.includes('y ') || translation.includes('dj') || translation.includes('tx')) {
     // On exclut les cas où le mot est entre parenthèses ou guillemets (contexte)
     // Mais c'est une heuristique simple
     anomalies.keaInPt.push({ id: entry.id, word: entry.word, translation: entry.translation.pt, reason: 'Caractères Kriolu détectés' });
  }

  // 3. Mots identiques
  if (word === translation) {
    anomalies.identical.push({ id: entry.id, word: entry.word });
  }

  // 4. Traduction vide
  if (!entry.translation.pt || entry.translation.pt.trim() === '') {
    anomalies.emptyTranslation.push({ id: entry.id, word: entry.word });
  }
});

// Générer le rapport
let report = `# 🕵️ Rapport d'Audit du Dictionnaire

**Date :** ${new Date().toLocaleDateString()}
**Entrées analysées :** ${dictionary.length}

## 🚨 Anomalies Potentielles

### 1. Mots Kriolu ressemblant à du Portugais (${anomalies.ptInKea.length})
*Ces mots contiennent 'lh', 'ção', ou 'dade'. Vérifier si l'orthographe est correcte.*

| ID | Mot (Kriolu) | Raison |
|----|--------------|--------|
${anomalies.ptInKea.slice(0, 50).map(a => `| ${a.id} | **${a.word}** | ${a.reason} |`).join('\n')}
${anomalies.ptInKea.length > 50 ? `| ... | ... | (+ ${anomalies.ptInKea.length - 50} autres) |` : ''}

### 2. Traductions Portugaises ressemblant à du Kriolu (${anomalies.keaInPt.length})
*Ces traductions contiennent 'k', 'y', 'dj', ou 'tx'.*

| ID | Mot (Kriolu) | Traduction (PT) |
|----|--------------|-----------------|
${anomalies.keaInPt.slice(0, 50).map(a => `| ${a.id} | ${a.word} | **${a.translation}** |`).join('\n')}
${anomalies.keaInPt.length > 50 ? `| ... | ... | ... |` : ''}

### 3. Mots Identiques (${anomalies.identical.length})
*Le mot et sa traduction sont strictement identiques. C'est normal pour certains mots (ex: 'banana', 'festa'), mais à vérifier.*

| ID | Mot |
|----|-----|
${anomalies.identical.slice(0, 50).map(a => `| ${a.id} | ${a.word} |`).join('\n')}
${anomalies.identical.length > 50 ? `| ... | ... |` : ''}

### 4. Traductions Manquantes (${anomalies.emptyTranslation.length})

${anomalies.emptyTranslation.map(a => `- ${a.word} (${a.id})`).join('\n')}

---
*Ce rapport est généré automatiquement basé sur des heuristiques.*
`;

fs.writeFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\DICTIONARY_AUDIT.md', report);
console.log('✅ Rapport généré : DICTIONARY_AUDIT.md');
