# 📝 Instructions pour Compléter les 18 Leçons

## Situation Actuelle

- ✅ **LessonsPage.tsx** : 18 leçons avec titres et descriptions (CORRECT)
- ❌ **lessonsData.ts** : Seulement 5 leçons avec contenu détaillé (INCOMPLET)

## Action Requise

Vous devez créer un fichier `lessonsData.ts` avec les **18 leçons complètes** en utilisant:

- Les titres/descriptions de `LessonsPage.tsx`
- Le format de `lessonsData.ts` actuel

## Format de Chaque Leçon

```typescript
{
  "id": 1,
  "category": "Verbos",  // Catégorie de LessonsPage.tsx
  "level": "Iniciante",  // Niveau de LessonsPage.tsx
  "title": {
    "pt": "Titre en portugais",
    "cv": "Titre en créole"
  },
  "description": {
    "pt": "Description en portugais",
    "cv": "Description en créole"
  },
  "content": {
    "pt": "Contenu détaillé de la leçon en portugais...",
    "cv": "Contenu détaillé en créole..."
  },
  "examples": [
    { "pt": "Exemple PT", "cv": "Exemple CV" }
  ],
  "practicalTips": {
    "pt": "Conseil pratique PT",
    "cv": "Conseil pratique CV"
  }
}
```

## Les 18 Leçons à Créer

1. **Formação de Palavras - Verbos** (Iniciante, Verbos)
2. **Derivação Lexical** (Intermediário, Morfologia)
3. **Pluralização** (Iniciante, Morfologia)
4. **Ordem das Palavras - SVO** (Iniciante, Sintaxe)
5. **Negação** (Iniciante, Sintaxe)
6. **Formação de Perguntas** (Intermediário, Sintaxe)
7. **Sistema TAM** (Iniciante, Verbos)
8. **Verbos Essenciais para Pregação** (Intermediário, Verbos)
9. **Verbos Modais e Auxiliares** (Avançado, Verbos)
10. **Pronúncia Básica** (Iniciante, Fonologia)
11. **Acentuação e Ritmo** (Intermediário, Fonologia)
12. **Vocabulário Religioso** (Iniciante, Vocabulário)
13. **Frases Prontas para Pregação** (Intermediário, Prática)
14. **Vocabulário Temático** (Avançado, Vocabulário)
15. **Diálogo 1 - Primeira Abordagem** (Iniciante, Prática)
16. **Diálogo 2 - Apresentando Texto** (Intermediário, Prática)
17. **Diálogo 3 - Oferecendo Estudo** (Avançado, Prática)
18. **Lidando com Objeções** (Intermediário, Prática)

## Prochaine Étape

Pour obtenir le contenu complet de l'APK, nous devons extraire le fichier source correct du source map.
Le fichier est probablement dans `PreachingLessonsPage-ErgC5eH2.js.map` à l'index 8.

Voulez-vous que je continue à chercher le contenu exact dans l'APK ou préférez-vous créer le contenu manuellement?
