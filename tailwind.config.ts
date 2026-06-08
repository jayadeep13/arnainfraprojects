/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f5ff',
          100: '#dce8fd',
          200: '#b5cef8',
          300: '#88aaef',
          400: '#5a82e8',
          500: '#3662d8',
          600: '#2a4fc0',
          700: '#1e3a99',
          800: '#1a2f7a',
          900: '#0d1b4a',
          950: '#060d24',
        },
        sky: {
          brand: '#29aae1',
          light: '#5cc0ea',
          pale:  '#a8ddf4',
        },
        stone: {
          50:  '#faf8f5',
          100: '#f2ece4',
          200: '#e5dcd0',
          300: '#d0c4b2',
          400: '#b5a292',
          500: '#95816f',
          600: '#78624e',
          700: '#5c4a38',
          800: '#3d3027',
          900: '#271e17',
          950: '#1a1410',
        },
        orange: {
          brand: '#e8941a',
          light: '#f0a93c',
          pale:  '#fad49a',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #060d24 0%, #0d1b4a 50%, #1a2f7a 100%)',
        'hero-gradient': 'linear-gradient(135deg, #060d24 0%, #0d1b4a 40%, #1a2f7a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,245,255,0.5))',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 3s infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
    },
  },
  plugins: [],
};
