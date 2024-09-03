/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#282828',
      },
      
    },
  },
  plugins: [],
}
