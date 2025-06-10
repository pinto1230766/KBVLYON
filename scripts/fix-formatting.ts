import * as fs from 'fs';
import * as path from 'path';

function fixFormatting(filePath: string) {
  try {
    // Lire le contenu du fichier
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Corriger les erreurs de formatage courantes
    const fixedContent = content
      // Ajouter des virgules manquantes après les accolades fermantes
      .replace(/}\s*\n\s*{/g, '},\n  {')
      // Supprimer les virgules superflues avant les crochets fermants
      .replace(/,\s*\n\s*]/g, '\n]')
      // S'assurer que chaque objet a une virgule à la fin
      .replace(/}\s*\n\s*(?=[^,}])/g, '},\n');

    // Écrire le contenu corrigé dans le fichier
    fs.writeFileSync(filePath, fixedContent, 'utf-8');
    console.log('Formatting fixed successfully!');
  } catch (error) {
    console.error('Error fixing formatting:', error);
  }
}

// Utiliser le chemin relatif au script
const filePath = path.join(__dirname, 'grammarData.ts');
fixFormatting(filePath);
