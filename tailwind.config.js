const plugin = require('tailwindcss/plugin')
const { transform } = require('typescript')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        colors: {
          bm: {
            blue: '#4887C6',
            lightBlue: '#f0f4f8',
            red: '#D32F2F',
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif', 'system-ui'],
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%' : { transform: 'translanteX(-50%)' },
          }
        },
        animation: {
          'scroll': 'scroll 40s linear infinite',
        }
      },
    },
    plugins: [],
}