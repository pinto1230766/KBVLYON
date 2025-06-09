/// <reference types="vite/client" />

// Déclaration pour les modules CSS
interface CSSModuleClasses {
  [key: string]: string;
}

declare module '*.module.css' {
  const classes: CSSModuleClasses;
  export default classes;
}

// Déclaration pour @emotion/react
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  }
}
