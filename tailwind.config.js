/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roberto': 'Roboto',
        'chela': 'Chela One',
        'usui': 'Cedarville Cursive'
      }
    },
  },
  plugins: [],
}

