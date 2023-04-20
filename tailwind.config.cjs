/** @type {import("tailwindcss").Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        caveat: ["Caveat", "cursive"]
      },
      colors: {
        "fuel-yellow": {
          "50": "#fdfae8",
          "100": "#faf3c6",
          "200": "#f6e593",
          "300": "#eecd59",
          "400": "#e3b426",
          "500": "#cf9b20",
          "600": "#b07a1c",
          "700": "#8d581b",
          "800": "#734921",
          "900": "#613d23",
          "950": "#371e10"
        },
        "bermuda": {
          "50": "#f1fcf8",
          "100": "#d0f7ea",
          "200": "#a1eed5",
          "300": "#77e0c2",
          "400": "#3cc5a2",
          "500": "#23a989",
          "600": "#198870",
          "700": "#186d5b",
          "800": "#18574b",
          "900": "#18493f",
          "950": "#082b26"
        }


      }
    }
  },
  plugins: []
});

