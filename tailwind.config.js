/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        'customBlue' :'#4144BD',
        'deepBlue' : '#0C092A',
        'darkBlue' : '#14213D',
        'graybg' : '#F0F0F7',
       'accbg' : '#F9F9FC',
       'blueShade' :'#1A1B4B',
       'warning' : '#F4C790',
       'bYellow' : '#F7A400',
       'bgreen' : '#0FEFFD',
       'darkGray':'#E7EBEF'
      },
      fontFamily: {
        'euclid': ['Euclid Circular A', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'pacifico': ['pacifico', 'sans-serif'],
        'raleway': ['raleway', 'sans-serif'],
        'montserrat': ['montserrat', 'sans-serif'],

      },
    },
  },
  plugins: [],
  darkMode: "class"
}

