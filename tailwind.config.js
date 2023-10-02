/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        tcolor: '#FCFCFC',
        backg: '#E4ECF4',
        headercolor: '#02385E',
        editcolor: '#4AABCB',
        edithover: '#306c80',
        navheader: '#4797CE',
        data: '#A9C7DC'

      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4AABCB",
          "secondary": "#02385E",
          "accent": "#e25538",
          "neutral": "#38517C",
          "base-100": "#364a63",
          "info": "#749edc",
          "success": "#7299CA",
          "warning": "#508ABD",
          "error": "#df343a",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}

// test