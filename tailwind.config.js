/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      borderRadius: {
        'none': '0',
        'sm': '12px',
        DEFAULT: '.25rem',
        'lg': '24px',
        'xl':'40px',
      },
      fontFamily: {
        'sans':['"Baloo 2"']
  
      },
      spacing: {
        sm: "10px",
        md: "13px",
        lg: "16px",
        xl: "24px",
      },
      colors: {
        'primary': '#632A7E',
       
        'primary-bg':"#ECD8EA",
        'bg-grey':'#E6E6FA',
        'text-blue':'#3973D4',
        'button-inactive':'#F7F0F7',
        'button-hover':'#280E3B',
        'neutral': '#FFFFFF',
        
        'gray-bg':'#B5B8BB',
        'overlay': '#F2F2F2',
        'warning':'#BDD0F133',
        'gray-four':'#534656',
       
        'type-active':'#B15EA8',
  
      },
      
      screens: {
        
        md:{ min: "360px", max: "767px" },
        lg: { min: "768px" }
      },
    },
    
  },
  plugins: [],
}

