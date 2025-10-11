# 📚 KBVLYON - Aprenda Cabo-verdiano para Pregação

[![Version](https://img.shields.io/badge/version-1.10.1-blue)](https://github.com/pinto1230766/KBVLYON)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-7.4-119EFF?logo=capacitor)](https://capacitorjs.com/)

Application mobile complète pour apprendre le crioulo cabo-verdiano, spécialement conçue pour les Témoins de Jéhovah du Cap-Vert.

## ✨ Fonctionnalités Principales

### 📖 Dictionnaire

- **4794+ mots** en portugais et crioulo
- Recherche rapide avec Fuse.js
- Système de favoris
- Exemples d'utilisation pour chaque mot

### 📚 Gramática

- **7 leçons complètes** de grammaire
- Modales interactives avec navigation multi-pages
- Catégories : Pronomes, Verbos, Sintaxe, Morfologia, Geral
- Contenu détaillé avec exemples

### 🎓 Lições de Crioulo

- **18 leçons** pour la pregação
- Filtres par catégorie et niveau
- 3 niveaux : Iniciante, Intermediário, Avançado
- Dialogues pratiques et vocabulaire religieux

### 🌐 Fonctionnalités Mobiles

- ✅ Mode hors-ligne complet avec Service Worker
- ✅ Notifications push intelligentes
- ✅ Géolocalisation des Salons du Reino
- ✅ Partage social multi-plateforme (WhatsApp, Telegram, SMS, Email)
- ✅ Support PT/CV (Portugais et Crioulo)
- ✅ Thème clair/sombre

## 🚀 Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Cloner le projet

```bash
git clone https://github.com/pinto1230766/KBVLYON.git
cd KBVLYON
```

### Installer les dépendances

```bash
npm install
```

### Lancer en développement

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5174`

## 📱 Build pour Mobile

### Android

```bash
npm run build
npx cap add android
npx cap sync
npx cap open android
```

### iOS

```bash
npm run build
npx cap add ios
npx cap sync
npx cap open ios
```

## 📄 Script d'Extraction PDF

L'application inclut un script pour extraire automatiquement les données de vos PDFs de dictionnaire et leçons.

### Utilisation

1. Placez vos PDFs dans le dossier `pdfs/`
2. Lancez l'extraction :

```bash
npm run extract-pdf
```

Le script génère automatiquement :

- `src/data/dictionaryData.ts` - Entrées du dictionnaire
- `src/data/lessonsData.ts` - Leçons extraites

Voir `scripts/README.md` pour plus de détails.

## 🏗️ Structure du Projet

```text
KBVLYON/
├── src/
│   ├── components/       # Composants React
│   │   ├── LessonModal.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── pages/           # Pages de l'application
│   │   ├── HomePage.tsx
│   │   ├── GrammarPage.tsx
│   │   ├── DictionaryPage.tsx
│   │   ├── LessonsPage.tsx
│   │   └── ...
│   ├── data/            # Données (dictionnaire, leçons)
│   │   ├── dictionaryData.ts
│   │   ├── grammarLessonContent.ts
│   │   └── ...
│   ├── hooks/           # Hooks personnalisés
│   ├── locales/         # Traductions PT/CV
│   └── styles/          # Styles globaux
├── scripts/             # Scripts utilitaires
│   ├── extractPdfData.js
│   └── README.md
├── pdfs/                # PDFs sources (à créer)
└── public/              # Assets statiques
```

## 🎨 Technologies Utilisées

- **React 18.3** - Framework UI
- **TypeScript 5.4** - Typage statique
- **Vite 5.2** - Build tool
- **Capacitor 7.4** - Framework mobile
- **Tailwind CSS 3.4** - Styling
- **Fuse.js 7.1** - Recherche floue
- **i18next 23.11** - Internationalisation
- **Lucide React** - Icônes
- **pdf-parse 1.1** - Extraction PDF

## 📊 Pages de l'Application

| Page | Route | Description |
|------|-------|-------------|
| Início | `/` | Page d'accueil avec ressources |
| Gramática | `/grammar-dictionary` | 7 leçons de grammaire |
| Dicionário | `/dictionary` | 4794+ mots avec recherche |
| Lições | `/lessons` | 18 leçons de crioulo |
| Pregação | `/preaching` | Présentations pour la pregação |
| Estudos Bíblicos | `/bible-studies` | Ressources d'étude |
| Notas | `/notes` | Gestion des notes |
| Configurações | `/settings` | Paramètres de l'app |

## 🌍 Salons du Reino Inclus

- **Praia** - Santiago
- **Mindelo** - São Vicente  
- **Espargos** - Sal
- **Assomada** - Santiago

## 📝 Licence

MIT © 2024 Pinto Francisco

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📧 Contact

**Auteur:** Pinto Francisco  
**GitHub:** [@pinto1230766](https://github.com/pinto1230766)  
**Projet:** [KBVLYON](https://github.com/pinto1230766/KBVLYON)

---

Développé avec ❤️ pour les Témoins de Jéhovah du Cap-Vert
