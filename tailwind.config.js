/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F0F6F2',
          100: '#DCE8DF',
          200: '#BAD2C1',
          300: '#8FB79A',
          400: '#5C966D',
          500: '#3D774F',
          600: '#2E5F3E',
          700: '#234C32',
          800: '#1A3926',
          900: '#142E1F',
          950: '#0B1C13',
          DEFAULT: '#142E1F',
        },
        cream: {
          50: '#FDFCF9',
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#EBDDC9',
          400: '#DEC9AA',
          500: '#CFB48A',
          DEFAULT: '#FAF6EE',
        },
        gold: {
          100: '#FBF5E5',
          200: '#F5E6BF',
          300: '#ECCF8C',
          400: '#DEB55C',
          500: '#C59A3F',
          600: '#A67D2B',
          700: '#825F20',
          DEFAULT: '#DEB55C',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(20, 46, 31, 0.15)',
        'luxury-gold': '0 12px 30px -10px rgba(197, 154, 63, 0.25)',
      },
    },
  },
  plugins: [],
}
