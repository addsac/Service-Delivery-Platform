/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'xs': '3px',
      'sm': '5px',
      'base': '8px',
      'md': '14px',
      'lg': '17px',
      'xl': '23px',
    },
    fontSize: {
      'sm': ['12px', {
        lineHeight: '120%',
        letterSpacing: '-0.01em',
      }],
      'base': ['15px', {
        lineHeight: '120%',
        letterSpacing: '-0.01em',
      }],
      'md': ['17px', {
        lineHeight: '120%',
        letterSpacing: '-0.01em',
      }],
      'lg': ['19px', {
        lineHeight: '120%',
        letterSpacing: '-0.01em',
      }],
      'xl': ['21px', {
        lineHeight: '120%',
        letterSpacing: '-0.01em',
      }],
      'xxl': ['24px', {
        lineHeight: '120%',
        letterSpacing: '-0.01em',
      }],
      'xxxl': ['27px', {
        lineHeight: '120%',
        letterSpacing: '-0.01em',
      }],
      'xxxxl': ['35px', {
        lineHeight: '120%',
        letterSpacing: '-0.01em',
      }],
      'xxxxxl': ['44px', {
        lineHeight: '120%',
        letterSpacing: '-0.01em',
      }],
    },
    extend: {},
  },
  plugins: [],
}
