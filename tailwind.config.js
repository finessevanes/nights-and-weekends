/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient_dark: '#060A1F',
        gradient_medium: '#8F2A4B',
        gradient_light: '#E9B6C7'
      },
    },
  },
  plugins: [],
}
