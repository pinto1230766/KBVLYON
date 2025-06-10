import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  try {
    // Chemin vers le fichier de données source
    const sourcePath = path.join(__dirname, '../src/data/grammarData.ts');
    // Chemin vers le fichier de sortie (création d'une copie de sauvegarde)
    const backupPath = path.join(__dirname, '../src/data/grammarData.backup.ts');
    
    // 1. Faire une copie de sauvegarde du fichier original
    await fs.copyFile(sourcePath, backupPath);
    console.log('✅ Copie de sauvegarde créée :', backupPath);
    
    // 2. Lire le contenu du fichier source
    let content = await fs.readFile(sourcePath, 'utf8');
    
    // 3. Compter le nombre d'entrées
    const entries = content.match(/\{\s*word:/g) || [];
    const entryCount = entries.length;
    console.log(`🔍 ${entryCount} entrées trouvées dans le fichier.`);
    
    if (entryCount === 0) {
      console.log('❌ Aucune entrée trouvée. Vérifiez le format du fichier.');
      return;
    }
    
    // 4. Ajouter un ID à chaque entrée
    let modifiedContent = content;
    let entryId = 1;
    
    console.log('🔄 Ajout des IDs aux entrées...');
    modifiedContent = modifiedContent.replace(
      /\{\s*word:/g, 
      () => `{\n    id: 'entry-${entryId++}',\n    word:`
    );

    // 5. Écrire le contenu modifié dans le fichier source
    await fs.writeFile(sourcePath, modifiedContent, 'utf8');
    
    console.log(`✅ ${entryCount} entrées mises à jour avec des IDs uniques.`);
    console.log(`📁 Fichier principal mis à jour : ${sourcePath}`);
    console.log('\n📝 Note : Une copie de sauvegarde a été créée au cas où :', backupPath);
    
  } catch (error) {
    console.error('❌ Une erreur est survenue :', error);
    process.exit(1);
  }
}

// Exécuter la fonction principale
main().catch(error => {
  console.error('❌ Erreur non gérée :', error);
  process.exit(1);
});
