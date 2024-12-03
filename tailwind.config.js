/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home': 'url("./Assets/Home.png")',
      },
    },
  },
  plugins: [],
}

