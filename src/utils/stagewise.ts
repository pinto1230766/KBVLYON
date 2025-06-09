import { initToolbar } from '@stagewise/toolbar';

// Définition des types pour la configuration
interface StagewiseAction {
  id: string;
  name: string;
  description: string;
  execute: () => void;
}

interface StagewisePlugin {
  id: string;
  displayName: string;
  description: string;
  icon: string;
  getShortInfo: () => { title: string; description: string };
  actions: StagewiseAction[];
}

interface StagewiseConfig {
  plugins: StagewisePlugin[];
  appearance: {
    theme: 'light' | 'dark';
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  };
}
// Configuration pour Stagewise
const examplePlugin: StagewisePlugin = {
  id: 'example-plugin',
  displayName: 'Example Plugin',
  description: 'Adds additional context for your components',
  icon: 'puzzle',
  getShortInfo: () => ({
    title: 'Example Plugin',
    description: 'Context information about the selected element'
  }),
  actions: [
    {
      id: 'example-action',
      name: 'Example Action',
      description: 'Demonstrates a custom action',
      execute: () => {
        window.alert('This is a custom action!');
      },
    },
  ],
};

export const stagewiseConfig: StagewiseConfig = {
  plugins: [examplePlugin],
  appearance: {
    theme: 'light',
    position: 'bottom-right'
  }
};

let isToolbarInitialized = false;

export function setupStagewise() {
  if (import.meta.env.DEV && !isToolbarInitialized) {
    try {
      // On utilise un cast vers any pour éviter les problèmes de typage
      // car les types exacts de Stagewise ne sont pas exposés
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      initToolbar(stagewiseConfig as any);
      isToolbarInitialized = true;
      console.log('Stagewise Toolbar initialisée avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'initialisation de Stagewise Toolbar:', error);
    }
  }
}
