import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Configuration du serveur de développement
  server: {
    port: 8080,
    strictPort: true,
    open: true,
    host: '0.0.0.0', // Écoute sur toutes les interfaces réseau
    cors: true,
    hmr: {
      host: 'localhost',
      port: 8080,
      protocol: 'ws',
    },
  },
  // Configuration de la résolution des imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@lib': path.resolve(__dirname, './src/lib')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  // Configuration pour le chargement des modules
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.tsx?$/,
    exclude: [],
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
    // Activer la génération de rapports de bundle
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dropdown-menu', 'class-variance-authority']
        }
      }
    }
  },
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  }
});
