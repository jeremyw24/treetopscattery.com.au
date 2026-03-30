/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: '#7C9070',
        forest: '#4E6C50',
        earth: '#9E7676',
        cream: '#FDFBF7',
        moss: '#A4BC92',
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
