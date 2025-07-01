import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServer() {
  console.log('Démarrage du serveur de développement...');
  
  try {
    const server = await createServer({
      // Configuration minimale pour le développement
      configFile: false,
      root: __dirname,
      server: {
        port: 8080,
        host: '0.0.0.0',
        open: true
      },
      plugins: [
        react()
      ]
    });

    await server.listen();
    server.printUrls();
    
  } catch (error) {
    console.error('Erreur lors du démarrage du serveur:', error);
    process.exit(1);
  }
}

startServer();
