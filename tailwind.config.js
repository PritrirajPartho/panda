/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        orange: {
          300: '#fdba74',
          500: '#FB923C',
          800: '#FA760A',
        },
        black: '#020617',
        white: '#fafafa',
    },
    screens: {
      'mobile': '400px',
      // => @media (min-width: 400px) { ... }
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }
      'desktop': '992px',
      // => @media (min-width: 992px) { ... }
    },
  },
  plugins: [],
}
}