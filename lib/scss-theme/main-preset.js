module.exports = {
  content: [
    './src/**/*.{html,js}',
    path.join(path.dirname(require.resolve('@ilko/scss-theme')), '**/*.{ts,tsx}'),
  ],
  theme: {
    colors: {},
  },
  plugins: [],
};
