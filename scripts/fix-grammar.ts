import * as fs from 'fs';
import * as path from 'path';

function fixGrammarFile(filePath: string) {
  try {
    // Lire le contenu du fichier
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Corriger les erreurs de syntaxe courantes
    const fixedContent = content
      // Corriger les objets translation sans accolade fermante
      .replace(/\s+pt: '[^']*',\s+cv: '[^']*'\s+,/g, match => match + '\n    }')
      // Supprimer les virgules superflues avant les accolades fermantes
      .replace(/,\s*\n\s*}/g, '\n  }')
      // S'assurer qu'il y a une virgule entre les entrées
      .replace(/}\s*\n\s*{/g, '\n  },\n  {')
      // Corriger les objets translation mal fermés
      .replace(/translation: \{\s*pt: '[^']*',\s*cv: '[^']*'\s*,\s*\n/g, match => 
        match.replace(/,\s*\n$/, '\n    }\n')
      );

    // Écrire le contenu corrigé dans un nouveau fichier
    const fixedFilePath = path.join(path.dirname(filePath), 'grammarData.fixed.ts');
    fs.writeFileSync(fixedFilePath, fixedContent, 'utf-8');
    
    console.log(`Fichier corrigé enregistré sous : ${fixedFilePath}`);
    console.log('Veuillez vérifier le fichier corrigé avant de le renommer pour remplacer l\'original.');
    
  } catch (error) {
    console.error('Erreur lors de la correction du fichier :', error);
  }
}

// Chemin vers le fichier à corriger
const filePath = path.join(__dirname, 'grammarData.ts');
fixGrammarFile(filePath);
