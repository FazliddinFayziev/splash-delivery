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
        'hero': "url('https://res.cloudinary.com/dcrolfqsj/image/upload/v1690598573/photo_2023-07-29_10-40-54_c8mq2y.jpg')"
      },
    },
  },
  plugins: [],
}