# Fonctionnalités Mobiles Avancées

## Mode hors-ligne complet
- Service Worker (`sw.js`) pour cache automatique
- Hook `useOfflineStorage.ts` pour gestion des données locales
- Composant `OfflineIndicator.tsx` pour statut réseau
- Synchronisation automatique au retour en ligne

## Notifications push intelligentes
- Hook `useNotifications.ts` avec 4 types de rappels
- Composant `NotificationSettings.tsx` pour configuration
- Études bibliques (30min avant), Réunions (1h avant)
- Pregação (samedi 9h), Texte quotidien (7h)

## Géolocalisation pour Salons du Reino
- Hook `useGeolocation.ts` avec base de données de 4 Salons
- Composant `KingdomHallsList.tsx` pour affichage
- Calcul de distance GPS, directions Google Maps
- Praia, Mindelo, Espargos, Assomada inclus

## Partage social multi-plateforme
- Hook `useSocialShare.ts` pour WhatsApp, Telegram, SMS, Email
- Composant `ShareModal.tsx` pour interface
- Partage de versets, leçons, présentations, mots du dictionnaire

## Intégrations
- Boutons de partage ajoutés dans `PreachingPage.tsx`
- Page de paramètres créée dans `SettingsPage.tsx`
