/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        blue: {
          900: '#02274F',
        },
        yellow: {
          400: '#FDCF00',
        },
        zinc: {
          100: '#F4F4F4',
          500: '#999999',
        },
      },
    },
  },
  plugins: [],
};
