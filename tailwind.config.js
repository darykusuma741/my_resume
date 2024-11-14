const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#222222',
        primary2: '#1e1e1e',
        secondary: '#f36f50',
      },
      fontFamily: {
        AlumniSansPinstripe: ['AlumniSansPinstripe', 'sans-serif'], // Tambahkan font kustom
        PalanquinDark: ['PalanquinDark', 'sans-serif'], // Tambahkan font kustom
      },
    },
  },
  plugins: [],
});
