/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006B4C',
          50: '#E8F5F0',
          100: '#C5E6D9',
          200: '#9ED1BE',
          300: '#6EB8A0',
          400: '#46A385',
          500: '#006B4C',
          600: '#005B3F',
          700: '#004B33',
          800: '#003B27',
          900: '#002B1C',
        },
        secondary: {
          DEFAULT: '#18B790',
          50: '#E8FBF5',
          100: '#C5F4E5',
          200: '#9EECD3',
          300: '#6EE2BF',
          400: '#46D9AE',
          500: '#18B790',
          600: '#149E7C',
          700: '#108568',
          800: '#0C6C54',
          900: '#085340',
        },
        dark: {
          DEFAULT: '#124036',
          50: '#E8F0EE',
          100: '#C5D8D3',
          200: '#9EBDB4',
          300: '#6E9F92',
          400: '#468575',
          500: '#124036',
          600: '#0E362D',
          700: '#0A2C24',
          800: '#06221B',
          900: '#021812',
        },
        background: {
          DEFAULT: '#F8F9FA',
          dark: '#E9ECEF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#F0EDE8',
        },
        text: {
          DEFAULT: '#333333',
          light: '#6B7280',
          dark: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      screens: {
        'xs': '475px',
        '3xl': '1792px',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
