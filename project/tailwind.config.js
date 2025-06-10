/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#5EA1FF',
          DEFAULT: '#1A73E8',
          dark: '#0049B5',
        },
        'secondary': {
          light: '#62E7FF',
          DEFAULT: '#00B4D8',
          dark: '#0084A6',
        },
        'accent': {
          light: '#FFD99B',
          DEFAULT: '#D4A76A',
          dark: '#8B5A2B',
        },
        'success': '#2E7D32',
        'warning': '#F57C00',
        'error': '#D32F2F',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};