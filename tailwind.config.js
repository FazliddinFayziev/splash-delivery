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
        'hero': "url('https://res.cloudinary.com/dcrolfqsj/image/upload/v1675408304/wave1-removebg-preview__6_-removebg-preview_bhfl4f.png')",
      },
    },
  },
  plugins: [],
}