module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  important: '#root',
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
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
        // "accent-1": "#3febf4",
        // "accent-2": "#3ff4a3",
        // "accent-3": "#3f91f4",
        // "accent-1": "#0B4F6C",
        // "accent-2": "#EAE6E5",
        // "accent-3": "#68A691",
        "accent-1": "#3ff4f4",
        "accent-2": "#3ff49a",
        "accent-3": "#3F9AF4",
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
    extend: {
      'animation': {
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-y': 'gradient-y 3s ease infinite',
        'gradient-xy': 'gradient-xy 3s ease infinite',
      },
      'keyframes': {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
    plugins: [require("daisyui")]
  },
  
};