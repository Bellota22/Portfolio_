/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBorder: '#tuColorOscuro', // Reemplaza '#tuColorOscuro' con el código de color que prefieras
      },
      backgroundImage: {
        'header': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      }
    },
  },
  plugins: [],
}

