/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theracom: {
          100: '#8095C5',
          200: '#4973B1',
          300: '#00579F',
          400: '#013966',
        },
      },
    },
  },
  plugins: [],
};
