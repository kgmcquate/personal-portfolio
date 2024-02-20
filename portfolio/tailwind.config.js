const colors = {
  // bg: "#F8F9FA",
  // lighter: "#E9ECEF",
  // light: "#DEE2E6",
  // main: "#CED4DA",
  // dark: "#ADB5BD",
  // darker: "#6C757D",
  // "text": "#212529",
  // "accent-1": "#3ff4f4",
  // "accent-2": "#3ff49a",
  // "accent-3": "#2ec4b6",
  // "accent-3": "#caffbf",

  bg: "#F8F9FA",
  lighter: "#E9ECEF",
  light: "#DEE2E6",
  main: "#e9ecef",
  dark: "#e5e5e5",
  darker: "#343a40",
  "text": "#212529",
  "accent-1": "#4a4e69",
  "accent-2": "#4a4e69",
  "accent-3": "#4a4e69",


}

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  important: '#root',
  theme: {
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    fontFamily: {
      display: ['Open Sans', 'sans-serif']
    },
    colors: {
      primary: colors,
    },
    extend: {
      'animation': {
        'gradient-x': 'gradient-x 3s ease infinite',
        'color-animation': 'color-animation 3s ease infinite',
      },
      'keyframes': {
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

        "color-animation": {
          "0%": {
            "color": colors["dark"]
          },
          "25%, 75%": {
            "color": colors["darker"]
          },
          "100%": {
            "color": colors["dark"]
          },
        }
      }
    }
  },
  
};