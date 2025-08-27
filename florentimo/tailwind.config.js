/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff0f5',
          100: '#ffe4ed',
          200: '#ffbfd3',
          300: '#ff94b6',
          400: '#ff6c9d',
          500: '#ff4c89',
          600: '#e43178',
          700: '#bd215f',
          800: '#991a4e',
          900: '#7a153f',
        },
      },
    },
  },
  plugins: [],
}

