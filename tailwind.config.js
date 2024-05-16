/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 10px 0 rgba(0, 0, 0, .10)',
        lg: '0 0 64px 0 rgba(0, 0, 0, .25)',
      },
      colors: {
        blue: {
          900: '#02274F',
        },
        yellow: {
          400: '#FDCF00',
        },
        zinc: {
          0: '#FDFDFD',
          50: '#FAFAFA',
          100: '#F4F4F4',
          500: '#999999',
        },
        slate: {
          100: '#F1F5F9',
        },
        neutral: {
          800: '#262626',
        },
      },
    },
  },
  plugins: [],
};
