/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#D9D9D9',
        darkBlue: '#141C28',
        customwhite: '#FFFFFF',
        customorange: '#F95E19',
        customgray: '#5A5E65',
        orangePink: '#F95E1933',
        lightgrey:"#545454",
        lightblack:"#212121",
      },
    },
  },
  plugins: [],
}

