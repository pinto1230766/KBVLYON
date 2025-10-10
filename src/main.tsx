import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import './styles/globals.css'; // Import du fichier CSS principal avec variables Tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
