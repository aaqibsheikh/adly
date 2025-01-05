/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xss: ['11px', { letterSpacing: '-1px' }],
      xs: ['12px', { letterSpacing: '-0.5px' }],
      sm: ['14px', { letterSpacing: '0px' }],
      base: ['16px', { letterSpacing: '0px' }],
      lg: ['18px', { letterSpacing: '0px' }],
    },
    extend: {
      screens: {
        '3xl': '1850px',
        '4xl': '1950px',
      },
      boxShadow: {
        'ad': '0px 42px 34px 0px rgba(82, 67, 194, 0.15)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        helv: ['Helvetica'],
      },
      colors: {
        brand: {
          'primary': '#B73FFF',
          'primary-light': '#EEE0F9',
          'primary-dark': '#EEE0F9',
          'secondary': '#FFBD3D',
        },
        rarity: {
          'uncommon-light': '#25EF52',
          'uncommon-dark': '#0B4823',
          'rare-light': '#8A88FF',
          'rare-dark': '#1D1C55',
          'epic-light': '#FF3FF7',
          'epic-dark': '#570554',
          'legendary-light': '#33F1FD',
          'legendary-dark': '#044044',
          'mythical-light': '#FFD747',
          'mythical-dark': '#4C3D06',
        },
        grayscale: {
          900: '#000000',
          800: '#1C1C1C',
          700: '#3E3E3E',
          600: '#666666',
          500: '#878787',
          400: '#ADADAD',
          300: '#C7C7C7',
          200: '#E6E6E6',
          100: '#FFFFFF',
        },
        system: {
          'success': '#17FA80',
          'success-dark': '#003619',
          'success-light': '#D4FFE8',
          'error': '#EE1A5A',
          'error-dark': '#3E0315',
          'error-light': '#FBBFD1',
          'warning': '#EDA926',
          'warning-dark': '#402B03',
          'warning-light': '#FFEBB4',
        },
      },
    },
  },
  plugins: [],
};
