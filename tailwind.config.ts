import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: '#A7CBB6', 
        lightBlue: '#9CC8FC',  
        gray: {
          100: '#F0F0F0',
        },
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      width: {
        'custom-787': '776px',
        'custom-600': '600px',
        'custom-592': '592px',
        'custom-504': '504px', 
        'custom-566': '566px', 
        'custom-458': '458px', 
        'custom-420': '420px', 
        'custom-270': '270px', 
        'custom-62': '62px'
      },
      height: {
        'custom-600': '600px',
        'custom-504': '504px',
        'custom-566': '566px', 
        'custom-592': '592px',
        'custom-400': '400px',
        'custom-350': '350px',
        'custom-270': '270px',
        'custom-227': '227px',
        'custom-45': '45px'
      },
      gap: {
        'custom-105': '105px',
      },
      padding: {
        'custom-90': '90px',
        'custom-20': '20px',
        'custom-6': '6px', 
        'custom-8': '8px', 
      },
      margin: {
        'custom-90': '90px', 
        'custom-10': '10px',
        'custom-12': '12px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/hero_bg.png')",
        "info-bg": "url('/info_bg.png')",
      },
    },
  },
  plugins: [],
};

export default config;
