/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['"Titillium Web"', 'sans-serif'],
        'pt-sans-caption': ['"PT Sans Caption"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

