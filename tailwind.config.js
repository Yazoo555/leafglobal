/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ========================================
           BRAND: Blue — Global Consulting & Technology
           Primary brand color — 60% of interface
           ======================================== */
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },

        /* ========================================
           FINANCE: Green — Audit, Finance & Business Growth
           30% of interface — Audit/Finance sections only
           ======================================== */
        finance: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },

        /* ========================================
           EDUCATION: Orange — Learning & Training
           10% of interface — CTA buttons, Education sections
           ======================================== */
        education: {
          DEFAULT: '#F97316',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },

        /* ========================================
           METALLIC: Chrome, Silver & Steel accents
           Decorative lines, icons, dividers, highlights
           ======================================== */
        chrome: {
          DEFAULT: '#C7CDD8',
          light: '#D8DEE9',
          steel: '#9FA8B8',
          white: '#FFFFFF',
        },

        /* ========================================
           DARK: Premium dark sections (Footer, Hero overlays)
           ======================================== */
        dark: {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },

        /* ========================================
           BACKGROUND SYSTEM
           Layered backgrounds — never plain white
           ======================================== */
        background: {
          DEFAULT: '#F8FAFC',
          secondary: '#F1F5F9',
          dark: '#0F172A',
          'dark-alt': '#1E293B',
        },

        /* ========================================
           SURFACE / TEXT
           ======================================== */
        surface: {
          DEFAULT: '#FFFFFF',
          glass: 'rgba(255, 255, 255, 0.18)',
        },
        text: {
          DEFAULT: '#1E293B',
          light: '#64748B',
          dark: '#0F172A',
          white: '#F8FAFC',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },

      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'h1': ['2.5rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'h2': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.25' }],
        'h4': ['1.25rem', { lineHeight: '1.25' }],
        'h5': ['1.125rem', { lineHeight: '1.25' }],
        'h6': ['1rem', { lineHeight: '1.25' }],
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },

      screens: {
        'xs': '475px',
        '3xl': '1792px',
      },

      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },

      /* ========================================
         BACKDROP BLUR — Glassmorphism
         ======================================== */
      backdropBlur: {
        glass: '18px',
        'glass-lg': '24px',
        'glass-sm': '12px',
      },

      /* ========================================
         BORDER RADIUS — Premium rounded corners
         ======================================== */
      borderRadius: {
        'glass': '20px',
        'glass-sm': '12px',
        'glass-lg': '24px',
      },

      /* ========================================
         BOX SHADOW — Premium soft shadows
         ======================================== */
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.08)',
        'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.04)',
        'metallic': '0 4px 24px rgba(37, 99, 235, 0.15)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.08)',
      },

      /* ========================================
         ANIMATIONS
         ======================================== */
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'glass-shimmer': 'glassShimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
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
        glassShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
