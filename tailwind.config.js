/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        128: '32rem',
        132: '36rem',
        140: '40rem',
        142: '42rem',
      },
    },
    fontFamily: {
      sora: ['Sora', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      darkVioletLibu: '#260259',
      aquaGreenLibu: '#51FDED',
      whiteLibu: '#FCF7F8',
      blueLibu: '#0090C1',
      blackLibu: '#363732',
    },
  },
  plugins: [],
};
