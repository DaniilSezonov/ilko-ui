const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'lib/scss-theme/src/test.html',
    'lib/ui-kit/src/**/*.tsx',
    path.join(
      path.dirname(require.resolve('@ilko/scss-theme')),
      './src/**/*.{ts,tsx}'
    ),
    path.join(
      path.dirname(require.resolve('@ilko/ui-kit')),
      './src/**/*.{ts,tsx}'
    ),
  ],
  theme: {
    colors: {
      primary: 'var(--theme-color-primary)',
      secondary: 'var(--theme-color-secondary)',
      "pri-bg": 'var(--theme-color-pri-bg)',
    },
  },
};
