/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Incluye todos los archivos JavaScript y TypeScript en el directorio src
  ],
  theme: {
    extend: {
      screens:{
        'mob':'320px'
      },
      boxShadow: {
        'white':'0 0 0 2px #ffffff',
        'black':'0 0 0 2px #0000'
      },
      width:{
        '6/10':'width: 60%'
      },
      colors:{
        'principal':'#0F1c30',
        'secundario':'#304A6E',
        'neutro':'#668DC0',
        'claro1':'#c0d0ef',
        'claro2':'#c2c6ce'
      },
      fontFamily : {
        'vibes':'Great Vibes',
        'nunito':'Nunito',
        'raleway':'Raleway'
      }
    },
  },
  plugins: [],
}