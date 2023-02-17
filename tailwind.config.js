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
        letterSpacing: '-0.1px',
      }],
      'base': ['15px', {
        lineHeight: '120%',
        letterSpacing: '-0.1px',
      }],
      'md': ['17px', {
        lineHeight: '120%',
        letterSpacing: '-0.3px',
      }],
      'lg': ['19px', {
        lineHeight: '120%',
        letterSpacing: '-0.3px',
      }],
      'xl': ['21px', {
        lineHeight: '120%',
        letterSpacing: '-0.3px',
      }],
      'xxl': ['24px', {
        lineHeight: '120%',
        letterSpacing: '-0.3px',
      }],
      'xxxl': ['27px', {
        lineHeight: '120%',
        letterSpacing: '-0.3px',
      }],
      'xxxxl': ['35px', {
        lineHeight: '120%',
        letterSpacing: '-0.3px',
      }],
      'xxxxxl': ['44px', {
        lineHeight: '120%',
        letterSpacing: '-0.3px',
      }],
    },
    extend: {},
  },
  plugins: [],
}
