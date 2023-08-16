const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{src,mdx}/**/*.{js,mjs,jsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '2xs': '.6875rem',
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        display: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      colors: {
        'df-black': '#011627',
        'df-white': '#FDFFFC',
        'df-green': '#2EC4B6',
        'df-red': '#E71D36',
        'df-yellow': '#FF9F1C',

      },
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: [
// 	  "./index.html",
// 	  "./src/**/*.{js,ts,jsx,tsx}",
// 	],
// 	theme: {
// 	  extend: {},
// 	},
// 	plugins: [],
//   }