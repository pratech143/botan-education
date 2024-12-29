/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      
      colors:{
        customBlue:'#5A6AAE',
        vividCoral:"#FF6F61",
        DarlSlate:"#2E2E2E"

      },
      height:{
        '37':'37rem'
      },
      fontFamily:{
        "poppins":["Poppins", "serif"]
      }
    }
  },
  plugins: [],
}

