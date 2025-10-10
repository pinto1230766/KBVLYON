# 📄 Script d'extraction de données PDF

Ce script permet d'extraire automatiquement les mots du dictionnaire et les leçons à partir de vos fichiers PDF en cap-verdien.

## 🚀 Installation

1. Installez la dépendance nécessaire :

```bash
npm install pdf-parse
```

## 📁 Structure des fichiers

```text
KBVLYON/
├── scripts/
│   ├── extractPdfData.js    # Script d'extraction
│   └── README.md            # Ce fichier
├── pdfs/                    # Placez vos PDFs ici
│   ├── dicionario-cv.pdf
│   ├── licoes-gramatica.pdf
│   └── ...
└── src/data/               # Fichiers générés
    ├── dictionaryData.ts
    └── lessonsData.ts
```

## 📖 Formats de PDF supportés

### Dictionnaire

Le script reconnaît plusieurs formats :

**Format 1 :** `mot - PT: traduction - CV: traduction - Ex: exemple`

```text
abadu - PT: abade, padre - CV: abadu - Ex: O abade da igreja é muito sábio
```

**Format 2 :** `mot (traduction PT) (traduction CV)`

```text
abanu (abanão, abano) (abanu)
```

**Format 3 :** `mot PT: traduction CV: traduction`

```text
abaxu PT: abaixo CV: abaxu Ex: Assine seu nome abaixo da linha
```

### Leçons

Le script détecte automatiquement les leçons basées sur :

- Titres commençant par "Lição" ou "Lesson"
- Catégories détectées automatiquement (Pronomes, Verbos, Sintaxe, etc.)

## 🎯 Utilisation

### 1. Préparez vos PDFs

Placez vos fichiers PDF dans le dossier `pdfs/` :

- Nommez les fichiers de dictionnaire avec "dicionario" ou "dictionary"
- Nommez les fichiers de leçons avec "licao" ou "lesson" ou "gramatica"

Exemples :

- `dicionario-caboverdiano.pdf`
- `licoes-gramatica-crioulo.pdf`
- `dictionary-kabuverdianu.pdf`

### 2. Exécutez le script

```bash
node scripts/extractPdfData.js
```

### 3. Vérifiez les résultats

Le script génère automatiquement :

- `src/data/dictionaryData.ts` - Toutes les entrées du dictionnaire
- `src/data/lessonsData.ts` - Toutes les leçons extraites

## 📊 Exemple de sortie

```console
🚀 Extraction des données des PDFs...

📚 2 fichier(s) PDF trouvé(s):
   - dicionario-cv.pdf
   - licoes-gramatica.pdf

📖 Traitement de: dicionario-cv.pdf
   ✓ Texte extrait (125430 caractères)
   → Type: Dictionnaire
   ✓ 4794 mots extraits

📖 Traitement de: licoes-gramatica.pdf
   ✓ Texte extrait (45230 caractères)
   → Type: Leçons
   ✓ 18 leçons extraites

📝 Génération des fichiers...

✅ Fichier dictionnaire généré: src/data/dictionaryData.ts
   4794 entrées créées
✅ Fichier leçons généré: src/data/lessonsData.ts
   18 leçons créées

✅ Extraction terminée avec succès!

📊 Résumé:
   - 4794 mots de dictionnaire
   - 18 leçons
```

## 🔧 Personnalisation

### Modifier le format de parsing

Si vos PDFs ont un format différent, modifiez les fonctions dans `extractPdfData.js` :

- `parseDictionaryText()` - Pour le dictionnaire
- `parseLessonsText()` - Pour les leçons
- `detectCategory()` - Pour la catégorie des leçons

### Ajouter des catégories

Dans la fonction `detectCategory()`, ajoutez vos propres mots-clés :

```javascript
if (lowerText.includes('votre-mot-cle')) return 'Votre-Categorie';
```

## ⚠️ Notes importantes

1. **Qualité du PDF** : Les PDFs scannés (images) ne fonctionneront pas. Utilisez des PDFs avec du texte sélectionnable.

2. **Format du texte** : Le script fonctionne mieux avec des PDFs bien formatés. Si l'extraction ne fonctionne pas bien, vous devrez peut-être ajuster les regex dans le script.

3. **Encodage** : Assurez-vous que vos PDFs utilisent l'encodage UTF-8 pour les caractères spéciaux portugais/crioulo.

4. **Sauvegarde** : Le script écrase les fichiers existants. Faites une sauvegarde avant de lancer !

## 🐛 Dépannage

### Aucun mot extrait ?

- Vérifiez que le PDF contient du texte sélectionnable (pas une image scannée)
- Ouvrez le PDF et copiez quelques lignes pour voir le format exact
- Ajustez les regex dans `parseDictionaryText()` pour correspondre à votre format

### Catégories incorrectes ?

- Modifiez la fonction `detectCategory()` avec vos propres mots-clés

### Erreur "Cannot find module 'pdf-parse'" ?

- Installez la dépendance : `npm install pdf-parse`

## 📞 Support

Si vous avez des questions ou des problèmes, vérifiez :

- Le format de vos PDFs
- Les logs du script pour voir où ça bloque
- Testez avec un seul PDF d'abord

## 🎉 Résultat

Une fois le script exécuté avec succès, vos données seront automatiquement disponibles dans l'application KBVLYON !
