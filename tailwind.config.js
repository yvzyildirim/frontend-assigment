/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0381FF',
          50: '#E6F1FF',
          100: '#C0D9FF',
          200: '#94C0FF',
          300: '#68A7FF',
          400: '#3C8EFF',
          500: '#1F76FF',
          600: '#1A65DB',
          700: '#144EB7',
          800: '#0E3A92',
          900: '#09296E',
        },
      },
    },
  },
  plugins: [],
};
