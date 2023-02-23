/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'custom-purple': "#23015e"
      }
    },
  },
  plugins: [],
}
