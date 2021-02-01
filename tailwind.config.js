const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Exo\\ 2", ...defaultTheme.fontFamily.sans],
      header: ["Fira\\ Sans", ...defaultTheme.fontFamily.sans]
    },
    container: {
      center: true,
      padding: "1rem"
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("tailwindcss-debug-screens")]
};
