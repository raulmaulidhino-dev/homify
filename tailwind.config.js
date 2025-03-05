/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          '0%': { opacity: '0', maxHeight: '0px'},
          '100%': { opacity: '1', maxHeight: '500px'},
        },
        shrink: {
          '0%': { opacity: '1', maxHeight: '500px'},
          '100%': { opacity: '0', maxHeight: '0px'},
        }
      },
      animation: {
        'expand': 'expand 0.75s ease-in',
        'shrink':'shrink 0.75s ease-out',
      }
    },
  },
  plugins: [],
}

