// Pour les modules CSS
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Pour les fichiers SVG avec ReactComponent
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Pour les fichiers d'images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';

// Pour les fichiers de police
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.eot';

// Pour les fichiers de données
declare module '*.json';

// Pour les fichiers Markdown
declare module '*.md';
declare module '*.mdx';

// Pour les variables d'environnement
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_APP_URL?: string;
  }
}
