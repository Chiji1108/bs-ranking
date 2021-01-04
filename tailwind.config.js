module.exports = {
  purge: [
    "./pages/**/*.js",
    "./pages/**/*.tsx",
    "./components/**/*.js",
    "./components/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      screens: {
        xs: "414px",
      },
      fontSize: {
        "2xs": ".625rem",
      },
      colors: {
        primary: {
          light: "#293A5E",
          DEFAULT: "#202B43",
          dark: "#182338",
        },
        secondary: {
          DEFAULT: "rgb(73, 180, 255)",
        },
        body: {
          DEFAULT: "#E5EBEF",
          muted: "#7986A3",
        },
        game: {
          victory: "rgb(36, 232, 204)",
          defeat: "rgb(255, 88, 89)",
          draw: "rgb(244, 200, 116)",
          other: "#7986A3",
        },
        medal: {
          gold: "#D4AF37",
          silver: "#c0c0c0",
          bronze: "#9F7A34",
        },
        grade: {
          god: "#D4AF37",
          great: "rgb(73, 180, 255)",
          good: "#E5EBEF",
          soso: "#7986A3",
          bad: "rgb(255, 88, 89)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
