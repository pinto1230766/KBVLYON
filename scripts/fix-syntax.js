import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function fixFile(inputPath, outputPath) {
    try {
        // Lire le contenu du fichier
        let content = readFileSync(inputPath, 'utf-8');
        
        // Corriger les erreurs de syntaxe courantes
        // 1. Ajouter les accolades fermantes manquantes pour les objets translation
        content = content.replace(/(\s+pt: '[^']*',\s+cv: '[^']*')(\s*[,\n])/g, '$1\n    }$2');
        
        // 2. Supprimer les virgules superflues avant les accolades fermantes
        content = content.replace(/,(\s*\n\s*})/g, '$1');
        
        // 3. S'assurer qu'il y a une virgule entre les entrées
        content = content.replace(/}(\s*\n\s*{)/g, '},$1');
        
        // 4. Corriger les exemples mal formatés
        content = content.replace(/examples: \[(\s*{)/g, 'examples: [\n      $1');
        
        // 5. Corriger l'indentation des exemples
        content = content.replace(/\{([^}]*)\}/g, (match) => {
            return match.replace(/\n\s+/g, '\n        ');
        });
        
        // Écrire le contenu corrigé dans le fichier de sortie
        writeFileSync(outputPath, content, 'utf-8');
        
        console.log(`Fichier corrigé enregistré sous : ${outputPath}`);
        return true;
    } catch (error) {
        console.error('Erreur lors de la correction du fichier :', error);
        return false;
    }
}

// Chemins des fichiers
const inputFile = join(__dirname, 'grammarData.ts');
const outputFile = join(__dirname, 'grammarData.fixed2.ts');

// Exécuter la correction
if (fixFile(inputFile, outputFile)) {
    console.log('Correction terminée avec succès !');
    console.log('Veuillez vérifier le fichier corrigé avant de le renommer pour remplacer l\'original.');
} else {
    console.log('Des erreurs sont survenues lors de la correction.');
}
