/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#191718',
      secondary: '#ecc94b',
    },
    screens: {
      'xxs': '0px',
      // => @media (min-width: 360px) { ... }
      'xs': '360px',
      // => @media (min-width: 360px) { ... }

      'sm': '430px',
      // => @media (min-width: 430px) { ... }

      'md': '834px',
      // => @media (min-width: 834px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    }
    
    
  },
  plugins: [],
}


