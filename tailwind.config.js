/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-cyan': '#00F0FF',
        'neon-magenta': '#FF10F0',
        'coral-pink': '#FF6F61',
        'lemon-yellow': '#FFEE32',
        'deep-blue': '#2A5C8A',
        
        // Extended palette for hierarchical application
        primary: {
          100: '#B3FAFF',
          200: '#80F7FF',
          300: '#4DF4FF',
          400: '#1AF1FF',
          500: '#00F0FF', // Electric Cyan (main)
          600: '#00C1CC',
          700: '#009199',
          800: '#006266',
          900: '#003233',
        },
        secondary: {
          100: '#FFB8FB',
          200: '#FF84F8',
          300: '#FF51F4',
          400: '#FF31F2',
          500: '#FF10F0', // Neon Magenta (main)
          600: '#CC0DC0',
          700: '#990A90',
          800: '#660760',
          900: '#330330',
        },
        accent: {
          100: '#FFD5D0',
          200: '#FFBAB1',
          300: '#FF9F92',
          400: '#FF8773',
          500: '#FF6F61', // Coral Pink (main)
          600: '#CC594E',
          700: '#99433A',
          800: '#662C27',
          900: '#331613',
        },
        highlight: {
          100: '#FFFAC9',
          200: '#FFF8A6',
          300: '#FFF583',
          400: '#FFF15F',
          500: '#FFEE32', // Lemon Yellow (main)
          600: '#CCBE28',
          700: '#998F1E',
          800: '#665F14',
          900: '#33300A',
        },
        brand: {
          100: '#A4C3E0',
          200: '#83AAD3',
          300: '#6291C6',
          400: '#4178B9',
          500: '#2A5C8A', // Deep Blue (main)
          600: '#22496E',
          700: '#193753',
          800: '#112437',
          900: '#08121C',
        },
        success: {
          100: '#D1F5D9',
          500: '#22C55E',
          900: '#14532D',
        },
        warning: {
          100: '#FEF3C7',
          500: '#F59E0B',
          900: '#78350F',
        },
        error: {
          100: '#FEE2E2',
          500: '#EF4444',
          900: '#7F1D1D',
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};