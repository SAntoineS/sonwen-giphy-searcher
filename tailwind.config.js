module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        poppins: ['Poppins'],
        RobotoMono: ['Roboto Mono']
      },
      colors: {
        darkGrayPalette: '#121212',
        lightGrayPalette: '#3c3541',
        darkPurplePalette: '#ac5fdb',
        lightPurplePalette: '#e3a2ee',
      },
      screens: {
        '2xlMax': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'xlm': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'lgMax': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'mdMax': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'smMax': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}
