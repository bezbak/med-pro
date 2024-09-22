import type { Config } from 'tailwindcss';



const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        Green: '#A7CBB6',
        lightBlue: '#9CC8FC',
        gray: {
          100: '#F0F0F0',
        },
        pink: '#FFAEAD',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      width: {
        'custom-1300': '1300px',
        'custom-1236': '1236px',
        'custom-787': '776px',
        'custom-600': '600px',
        'custom-592': '592px',
        'custom-504': '504px',
        'custom-566': '566px',
        'custom-458': '458px',
        'custom-420': '420px',
        'custom-299': '299px',
        'custom-294': '294px',
        'custom-270': '270px',
        'custom-229': '229px',
        'custom-192': '192px',
        'custom-145': '145px',
        'custom-100': '100px',
        'custom-62': '62px',
      },
      height: {
        'custom-600': '600px',
        'custom-504': '504px',
        'custom-566': '566px',
        'custom-592': '592px',
        'custom-400': '400px',
        'custom-341': '341px',
        'custom-350': '350px',
        'custom-270': '270px',
        'custom-227': '227px',
        'custom-204': '204px',
        'custom-92': '92px',
        'custom-72': '72px',
        'custom-62': '62px',
        'custom-45': '45px',
        'custom-25': '25px',
      },
      gap: {
        'custom-2': '27px',
      },
      padding: {
        'custom-90': '90px',
        'custom-85': '85px',
        'custom-56': '56px',
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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-bg': "url('../assets/images/home/card-bg/hero_bg.png')",
        'info-bg': "url('../assets/images/home/card-bg/info_bg.png')",
        'feedback-bg': "url('../assets/images/home/card-bg/feedback_bg.png')",
        'questions-bg': "url('../assets/images/home/card-bg/questions_bg.png')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
