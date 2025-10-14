// vite.config.ts
import { defineConfig } from "file:///D:/PROJETCS%20APLICATIONS%20ANDROIDE/APLI%20PRED/KBVLYON/node_modules/vite/dist/node/index.js";
import react from "file:///D:/PROJETCS%20APLICATIONS%20ANDROIDE/APLI%20PRED/KBVLYON/node_modules/@vitejs/plugin-react/dist/index.js";
import { ViteImageOptimizer } from "file:///D:/PROJETCS%20APLICATIONS%20ANDROIDE/APLI%20PRED/KBVLYON/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "d:\\PROJETCS APLICATIONS ANDROIDE\\APLI PRED\\KBVLYON";
var vite_config_default = defineConfig({
  // Configuration du serveur de développement
  server: {
    port: 5174,
    strictPort: false,
    open: true,
    host: "0.0.0.0",
    // Écoute sur toutes les interfaces réseau
    cors: true,
    hmr: {
      host: "localhost",
      protocol: "ws"
    }
  },
  // Configuration de la résolution des imports
  resolve: {
    alias: [
      { find: "@/", replacement: path.resolve(__vite_injected_original_dirname, "./src/") },
      { find: "@/components", replacement: path.resolve(__vite_injected_original_dirname, "./src/components") },
      { find: "@/hooks", replacement: path.resolve(__vite_injected_original_dirname, "./src/hooks") },
      { find: "@/lib", replacement: path.resolve(__vite_injected_original_dirname, "./src/lib") },
      { find: "@/styles", replacement: path.resolve(__vite_injected_original_dirname, "./src/styles") },
      { find: "@/types", replacement: path.resolve(__vite_injected_original_dirname, "./src/types") },
      { find: "@/data", replacement: path.resolve(__vite_injected_original_dirname, "./src/data") }
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
  },
  plugins: [
    react({
      // Ajouter des options supplémentaires pour le plugin React si nécessaire
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"]
      }
    }),
    ViteImageOptimizer({
      // Désactiver le cache pour éviter les problèmes de chemin
      cache: false,
      // Options de configuration pour l'optimisation des images
      png: {
        // qualité pour les PNG (0-100)
        quality: 80
      },
      jpeg: {
        // qualité pour les JPEG (0-100)
        quality: 80
      },
      jpg: {
        // qualité pour les JPG (0-100)
        quality: 80
      },
      webp: {
        // qualité pour les WebP (0-100)
        quality: 80,
        // activer la compression sans perte
        lossless: false
      }
    })
  ],
  optimizeDeps: {
    exclude: ["lucide-react"]
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
          react: ["react", "react-dom", "react-router-dom"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJkOlxcXFxQUk9KRVRDUyBBUExJQ0FUSU9OUyBBTkRST0lERVxcXFxBUExJIFBSRURcXFxcS0JWTFlPTlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiZDpcXFxcUFJPSkVUQ1MgQVBMSUNBVElPTlMgQU5EUk9JREVcXFxcQVBMSSBQUkVEXFxcXEtCVkxZT05cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2Q6L1BST0pFVENTJTIwQVBMSUNBVElPTlMlMjBBTkRST0lERS9BUExJJTIwUFJFRC9LQlZMWU9OL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplcic7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyBDb25maWd1cmF0aW9uIGR1IHNlcnZldXIgZGUgZFx1MDBFOXZlbG9wcGVtZW50XHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA1MTc0LFxyXG4gICAgc3RyaWN0UG9ydDogZmFsc2UsXHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gICAgaG9zdDogJzAuMC4wLjAnLCAvLyBcdTAwQzljb3V0ZSBzdXIgdG91dGVzIGxlcyBpbnRlcmZhY2VzIHJcdTAwRTlzZWF1XHJcbiAgICBjb3JzOiB0cnVlLFxyXG4gICAgaG1yOiB7XHJcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICBwcm90b2NvbDogJ3dzJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBDb25maWd1cmF0aW9uIGRlIGxhIHJcdTAwRTlzb2x1dGlvbiBkZXMgaW1wb3J0c1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiBbXHJcbiAgICAgIHsgZmluZDogXCJAL1wiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9cIikgfSxcclxuICAgICAgeyBmaW5kOiBcIkAvY29tcG9uZW50c1wiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzXCIpIH0sXHJcbiAgICAgIHsgZmluZDogXCJAL2hvb2tzXCIsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2hvb2tzXCIpIH0sXHJcbiAgICAgIHsgZmluZDogXCJAL2xpYlwiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9saWJcIikgfSxcclxuICAgICAgeyBmaW5kOiBcIkAvc3R5bGVzXCIsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3N0eWxlc1wiKSB9LFxyXG4gICAgICB7IGZpbmQ6IFwiQC90eXBlc1wiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy90eXBlc1wiKSB9LFxyXG4gICAgICB7IGZpbmQ6IFwiQC9kYXRhXCIsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2RhdGFcIikgfSxcclxuICAgIF0sXHJcbiAgICBleHRlbnNpb25zOiBbJy5tanMnLCAnLmpzJywgJy50cycsICcuanN4JywgJy50c3gnLCAnLmpzb24nXSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KHtcclxuICAgICAgLy8gQWpvdXRlciBkZXMgb3B0aW9ucyBzdXBwbFx1MDBFOW1lbnRhaXJlcyBwb3VyIGxlIHBsdWdpbiBSZWFjdCBzaSBuXHUwMEU5Y2Vzc2FpcmVcclxuICAgICAganN4SW1wb3J0U291cmNlOiAnQGVtb3Rpb24vcmVhY3QnLFxyXG4gICAgICBiYWJlbDoge1xyXG4gICAgICAgIHBsdWdpbnM6IFsnQGVtb3Rpb24vYmFiZWwtcGx1Z2luJ10sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIFZpdGVJbWFnZU9wdGltaXplcih7XHJcbiAgICAgIC8vIERcdTAwRTlzYWN0aXZlciBsZSBjYWNoZSBwb3VyIFx1MDBFOXZpdGVyIGxlcyBwcm9ibFx1MDBFOG1lcyBkZSBjaGVtaW5cclxuICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAvLyBPcHRpb25zIGRlIGNvbmZpZ3VyYXRpb24gcG91ciBsJ29wdGltaXNhdGlvbiBkZXMgaW1hZ2VzXHJcbiAgICAgIHBuZzoge1xyXG4gICAgICAgIC8vIHF1YWxpdFx1MDBFOSBwb3VyIGxlcyBQTkcgKDAtMTAwKVxyXG4gICAgICAgIHF1YWxpdHk6IDgwLFxyXG4gICAgICB9LFxyXG4gICAgICBqcGVnOiB7XHJcbiAgICAgICAgLy8gcXVhbGl0XHUwMEU5IHBvdXIgbGVzIEpQRUcgKDAtMTAwKVxyXG4gICAgICAgIHF1YWxpdHk6IDgwLFxyXG4gICAgICB9LFxyXG4gICAgICBqcGc6IHtcclxuICAgICAgICAvLyBxdWFsaXRcdTAwRTkgcG91ciBsZXMgSlBHICgwLTEwMClcclxuICAgICAgICBxdWFsaXR5OiA4MCxcclxuICAgICAgfSxcclxuICAgICAgd2VicDoge1xyXG4gICAgICAgIC8vIHF1YWxpdFx1MDBFOSBwb3VyIGxlcyBXZWJQICgwLTEwMClcclxuICAgICAgICBxdWFsaXR5OiA4MCxcclxuICAgICAgICAvLyBhY3RpdmVyIGxhIGNvbXByZXNzaW9uIHNhbnMgcGVydGVcclxuICAgICAgICBsb3NzbGVzczogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXHJcbiAgfSxcclxuICAvLyBDb25maWd1cmF0aW9uIHBvdXIgbGUgYnVpbGQgZGUgcHJvZHVjdGlvblxyXG4gIGJ1aWxkOiB7XHJcbiAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICAvLyBBY3RpdmVyIGxhIGdcdTAwRTluXHUwMEU5cmF0aW9uIGRlIHJhcHBvcnRzIGRlIGJ1bmRsZVxyXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IHRydWUsXHJcbiAgICAvLyBBY3RpdmVyIGxlIGNodW5raW5nIGRlcyBkXHUwMEU5cGVuZGFuY2VzXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgLy8gQ3JcdTAwRTllciBkZXMgY2h1bmtzIHNcdTAwRTlwYXJcdTAwRTlzIHBvdXIgbGVzIGRcdTAwRTlwZW5kYW5jZXMgdm9sdW1pbmV1c2VzXHJcbiAgICAgICAgICByZWFjdDogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNWLFNBQVMsb0JBQW9CO0FBQ25YLE9BQU8sV0FBVztBQUNsQixTQUFTLDBCQUEwQjtBQUNuQyxPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQSxFQUUxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sTUFBTSxhQUFhLEtBQUssUUFBUSxrQ0FBVyxRQUFRLEVBQUU7QUFBQSxNQUM3RCxFQUFFLE1BQU0sZ0JBQWdCLGFBQWEsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQixFQUFFO0FBQUEsTUFDakYsRUFBRSxNQUFNLFdBQVcsYUFBYSxLQUFLLFFBQVEsa0NBQVcsYUFBYSxFQUFFO0FBQUEsTUFDdkUsRUFBRSxNQUFNLFNBQVMsYUFBYSxLQUFLLFFBQVEsa0NBQVcsV0FBVyxFQUFFO0FBQUEsTUFDbkUsRUFBRSxNQUFNLFlBQVksYUFBYSxLQUFLLFFBQVEsa0NBQVcsY0FBYyxFQUFFO0FBQUEsTUFDekUsRUFBRSxNQUFNLFdBQVcsYUFBYSxLQUFLLFFBQVEsa0NBQVcsYUFBYSxFQUFFO0FBQUEsTUFDdkUsRUFBRSxNQUFNLFVBQVUsYUFBYSxLQUFLLFFBQVEsa0NBQVcsWUFBWSxFQUFFO0FBQUEsSUFDdkU7QUFBQSxJQUNBLFlBQVksQ0FBQyxRQUFRLE9BQU8sT0FBTyxRQUFRLFFBQVEsT0FBTztBQUFBLEVBQzVEO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxNQUVKLGlCQUFpQjtBQUFBLE1BQ2pCLE9BQU87QUFBQSxRQUNMLFNBQVMsQ0FBQyx1QkFBdUI7QUFBQSxNQUNuQztBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsbUJBQW1CO0FBQUE7QUFBQSxNQUVqQixPQUFPO0FBQUE7QUFBQSxNQUVQLEtBQUs7QUFBQTtBQUFBLFFBRUgsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQTtBQUFBLFFBRUosU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLEtBQUs7QUFBQTtBQUFBLFFBRUgsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQTtBQUFBLFFBRUosU0FBUztBQUFBO0FBQUEsUUFFVCxVQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxjQUFjO0FBQUEsRUFDMUI7QUFBQTtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBO0FBQUEsSUFFWCxzQkFBc0I7QUFBQTtBQUFBLElBRXRCLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQTtBQUFBLFVBRVosT0FBTyxDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQSxRQUNsRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
