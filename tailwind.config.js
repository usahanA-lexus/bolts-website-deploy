module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        boltsRed: '#dc2626',
        boltsWhite: '#ffffff',
        boltsBlack: '#171717',
      },
    },
  },
  plugins: [],
};