import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Configuration du serveur de développement
  server: {
    port: 5174,
    strictPort: false,
    open: true,
    host: '0.0.0.0', // Écoute sur toutes les interfaces réseau
    cors: true,
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
    headers: {
      'Content-Security-Policy': "default-src 'self'; img-src 'self' data: http://localhost:3001; script-src 'self' 'unsafe-inline' http://localhost:3001; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://rsms.me; font-src 'self' https://fonts.gstatic.com https://rsms.me https://r2cdn.perplexity.ai; connect-src 'self' http://localhost:3001 http://localhost:5746 http://localhost:5747 http://localhost:5748 https://generativelanguage.googleapis.com https://texttospeech.googleapis.com;",
    },
  },
  // Configuration de la résolution des imports
  resolve: {
    alias: [
      { find: "@/", replacement: path.resolve(__dirname, "./src/") },
      { find: "@/components", replacement: path.resolve(__dirname, "./src/components") },
      { find: "@/hooks", replacement: path.resolve(__dirname, "./src/hooks") },
      { find: "@/lib", replacement: path.resolve(__dirname, "./src/lib") },
      { find: "@/styles", replacement: path.resolve(__dirname, "./src/styles") },
      { find: "@/types", replacement: path.resolve(__dirname, "./src/types") },
      { find: "@/data", replacement: path.resolve(__dirname, "./src/data") },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  plugins: [
    react({
      // Ajouter des options supplémentaires pour le plugin React si nécessaire
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    ViteImageOptimizer({
      // Désactiver le cache pour éviter les problèmes de chemin
      cache: false,
      // Options de configuration pour l'optimisation des images
      png: {
        // qualité pour les PNG (0-100)
        quality: 80,
      },
      jpeg: {
        // qualité pour les JPEG (0-100)
        quality: 80,
      },
      jpg: {
        // qualité pour les JPG (0-100)
        quality: 80,
      },
      webp: {
        // qualité pour les WebP (0-100)
        quality: 80,
        // activer la compression sans perte
        lossless: false,
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Configuration pour le build de production
  build: {
    sourcemap: true,
    // Activer la génération de rapports de bundle
    reportCompressedSize: true,
    // Activer le chunking des dépendances
    rollupOptions: {
      output: {
        manualChunks: {
          // Créer des chunks séparés pour les dépendances volumineuses
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
