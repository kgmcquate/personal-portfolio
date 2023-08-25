module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '*.html'
  ],
  important: '#root',
  theme: {
    fontFamily : {
      display: ['Open Sans', 'sans-serif']
    },
    colors: {
      // primary: {
      //   bg: "#D9DCD6",
      //   lighter: "#E9ECEF",
      //   accent: "#DD614A",
      //   light: "#81C3D7",
      //   main: "#3A7CA5",
      //   dark: "#16425B",
      //   "text": "#ff5e5b",
      // },
      primary: {
        bg: "#F8F9FA",
        lighter: "#E9ECEF",
        light: "#DEE2E6",
        main: "#CED4DA",
        dark: "#ADB5BD",
        darker: "#6C757D",
        "text": "#212529",
        accent: "#ff5e5b"
      },
      // primary: {
      //   bg: "#F3F3F3",
      //   accent: "#FCBA04",
      //   light: "#A50104",
      //   main: "#590004",
      //   dark: "#250001",
      //   "text": "#F3F3F3",
      // },
    },
  },
  plugins: []
};