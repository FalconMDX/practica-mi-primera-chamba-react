/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9000',
        secondary: '#212E41',
        textlight: '#656565'
      }
    },
  },
  plugins: [],
}