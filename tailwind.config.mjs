/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand tokens — indigo → cyan gradient family.
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        ink: {
          950: '#07080d',
          900: '#0a0a0f',
          850: '#0f1018',
          800: '#15161f',
          700: '#1c1d28',
          600: '#262833',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'grid-subtle':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'gradient-brand': 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
        'radial-glow': 'radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.25) 0%, rgba(7,8,13,0) 70%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        glow: 'glow 4s ease-in-out infinite',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.300'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.accent.400'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-quotes': theme('colors.slate.300'),
            '--tw-prose-code': theme('colors.accent.400'),
            '--tw-prose-bullets': theme('colors.brand.400'),
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
