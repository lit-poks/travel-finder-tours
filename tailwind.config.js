/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'roberto': 'Roboto',
        'chela': 'Chela One',
        'usui': 'Cedarville Cursive'
      },
      colors: {
        'gre': '#abcb13',
        'ora': '#f28704',
        'yel': '#fbca04',
        'tra': '#fcd536'
      },
      backgroundImage: {
        'bridge': "url('/src/assets/bridge_photo.jpeg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

