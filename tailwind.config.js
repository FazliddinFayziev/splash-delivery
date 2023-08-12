/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'dosis': 'Dosis'
      },
      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/dcrolfqsj/image/upload/v1691768100/water-bottle_txlqsx.jpg')"
      },
    },
  },
  plugins: [],
}