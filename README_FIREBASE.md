# Configuration Firebase pour la synchronisation cloud des favoris

## Prérequis

1. Créer un projet Firebase sur <https://console.firebase.google.com/>
2. Activer Firestore Database
3. Activer Authentication avec le fournisseur "Anonymous"

## Installation des dépendances

```bash
npm install firebase
```

## Configuration

1. Copier `.env.example` vers `.env`
2. Remplir les variables Firebase avec les valeurs de votre projet Firebase :

```env
VITE_FIREBASE_API_KEY=votre_api_key
VITE_FIREBASE_AUTH_DOMAIN=votre_projet.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=votre_project_id
VITE_FIREBASE_STORAGE_BUCKET=votre_projet.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

## Structure Firestore

La base de données utilise la structure suivante :

```text
users/{userId}/favorites/dictionary
```

Où :

- `userId` : ID de l'utilisateur Firebase (authentification anonyme)
- `favorites` : collection des favoris
- `dictionary` : document contenant les favoris du dictionnaire

## Fonctionnalités implémentées

- ✅ Synchronisation automatique des favoris entre appareils
- ✅ Authentification anonyme (pas de compte utilisateur requis)
- ✅ Fusion des favoris locaux et cloud au premier chargement
- ✅ Synchronisation en temps réel via Firestore
- ✅ Fallback vers le stockage local si Firebase n'est pas disponible

## Test de la synchronisation

1. Ouvrir l'app sur un premier appareil/navigateur
2. Ajouter quelques favoris dans le dictionnaire
3. Ouvrir l'app sur un deuxième appareil/navigateur (ou onglet incognito)
4. Les favoris devraient apparaître automatiquement

## Sécurité

- Utilise l'authentification anonyme Firebase
- Chaque utilisateur a ses propres favoris isolés
- Les données sont stockées dans Firestore avec les règles de sécurité par défaut

## Dépannage

Si la synchronisation ne fonctionne pas :

1. Vérifier que les variables d'environnement sont correctement configurées
2. Vérifier que Firestore et Authentication sont activés dans Firebase
3. Vérifier la console du navigateur pour les erreurs Firebase
4. Les favoris restent disponibles localement même si le cloud échoue
