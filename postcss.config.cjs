module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
        'custom-selectors': true,
      },
    },
  },
};
