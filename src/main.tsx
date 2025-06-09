console.log('Démarrage de l\'application...');

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/components/theme-provider';
import App from './App';
import './index.css';
import './styles/globals.css';
import { setupStagewise } from './utils/stagewise';

// Vérifier que l'élément root existe
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("L'élément avec l'ID 'root' est introuvable dans le DOM");
}

// Initialiser Stagewise Toolbar en développement
if (import.meta.env.DEV) {
  console.log('Mode développement - Initialisation de Stagewise Toolbar');
  setupStagewise();
}

try {
  console.log('Création de la racine React...');
  const root = createRoot(rootElement);
  
  console.log('Rendu de l\'application...');
  root.render(
    <StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
  
  console.log('Application rendue avec succès');
} catch (error) {
  console.error('Erreur lors du rendu de l\'application:', error);
  // Afficher un message d'erreur dans l'interface utilisateur
  rootElement.innerHTML = `
    <div style="padding: 20px; color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px;">
      <h2>Erreur lors du chargement de l'application</h2>
      <p>${error instanceof Error ? error.message : 'Une erreur inconnue est survenue'}</p>
      <p>Veuillez recharger la page ou contacter le support si le problème persiste.</p>
    </div>
  `;
}
