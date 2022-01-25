const color = require("./src/assets/colors");

module.exports = {
  prefix: "tw-",
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  content: [],
  darkMode: false,
  theme: {
    extend: {},
    screens: {
      xs: "376px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1336px",
      "2xl": "1920px",
    },
  },
  variants: {
    extend: {},
    colors: {
      ...color,
    },
  },
  plugins: [],
};
