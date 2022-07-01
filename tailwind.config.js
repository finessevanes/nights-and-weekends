/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-100': '#E9B6C7',
        'gradient-200': '#8F2A4B',
        'gradient-300': '#060A1F',
        'gradient-350': '#1e2235'
      },
      height: {
        '10': '40rem',
      },
      fontSize: {
        x69: ['7rem', {
          lineHeight: '7rem',
        }],
        xTitle: ['3.125rem', {
          lineHeight: '2.3rem',
        }],
        xTitle: ['3.125rem', {
          lineHeight: '2.3rem',
        }],
      }
    },
  },
  plugins: [],
}
