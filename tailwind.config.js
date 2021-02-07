const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  important: false,
  theme: {
    extend: {
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%"
      }
    },
    fontFamily: {
      sans: ["Exo\\ 2", ...defaultTheme.fontFamily.sans],
      header: ["Fira\\ Sans", ...defaultTheme.fontFamily.sans]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1280px"
      }
    }
  },
  variants: {
    extend: {
      ringWidth: ["hover"]
    }
  },
  plugins: [require("tailwindcss-debug-screens")]
};
