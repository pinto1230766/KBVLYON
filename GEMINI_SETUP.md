# 🤖 Configuration de l'Agent IA avec Google Gemini

## 📋 Prérequis

1. Une clé API Google Gemini (gratuite)
2. Compte Google

## 🔑 Obtenir votre clé API Gemini

### Étape 1 : Créer une clé API

1. Allez sur **[Google AI Studio](https://makersuite.google.com/app/apikey)**
2. Connectez-vous avec votre compte Google
3. Cliquez sur **"Create API Key"** ou **"Créer une clé API"**
4. Sélectionnez un projet Google Cloud (ou créez-en un nouveau)
5. Copiez votre clé API (elle commence par `AIza...`)

### Étape 2 : Configurer la clé dans l'application

1. Ouvrez le fichier `.env` à la racine du projet
2. Remplacez `your_gemini_api_key_here` par votre vraie clé :

   ```env
   VITE_GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```

3. Sauvegardez le fichier

### Étape 3 : Redémarrer l'application

```bash
# Arrêtez le serveur de développement (Ctrl+C)
# Redémarrez-le
npm run dev
```

## ✅ Test du Chatbot

1. Cliquez sur le bouton de chat (en bas à droite)
2. Tapez "Olá" ou n'importe quelle question
3. L'agent IA Gemini devrait répondre intelligemment

## 🔄 Fonctionnement

- **Avec clé Gemini valide** : L'agent utilise l'IA Google Gemini (réponses intelligentes)
- **Sans clé / clé invalide** : L'agent utilise des réponses pré-programmées (fallback)

## 💡 Caractéristiques de l'Agent IA

- Répond en portugais
- Connaît tout le contexte de l'application KBVLYON
- Adapte ses réponses selon la page actuelle
- Utilise des emojis pour être plus convivial
- Limite de 200 tokens par réponse (concis)

## 🆓 Limites Gratuites de Gemini

- 60 requêtes par minute
- Largement suffisant pour un usage personnel

## 🔒 Sécurité

⚠️ **IMPORTANT** : Ne partagez JAMAIS votre clé API publiquement !

- Le fichier `.env` est déjà dans `.gitignore`
- Votre clé ne sera pas envoyée sur GitHub

## 🐛 Dépannage

### L'agent ne répond pas intelligemment

1. Vérifiez que votre clé API est correcte dans `.env`
2. Vérifiez que vous avez redémarré le serveur
3. Ouvrez la console du navigateur (F12) pour voir les erreurs

### Erreur API

- Vérifiez que votre clé est active sur Google AI Studio
- Vérifiez votre connexion internet
- L'agent basculera automatiquement en mode fallback

## 📱 Contact

Si vous avez des problèmes, contactez le développeur : **Pinto Francisco**

---

**Version** : 1.10.1  
**Dernière mise à jour** : 12 Octobre 2025
