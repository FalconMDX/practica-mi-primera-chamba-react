// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
    'orange-500': '#FF9000',
    'gray-111': '#656565'
  },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}