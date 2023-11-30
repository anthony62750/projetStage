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


