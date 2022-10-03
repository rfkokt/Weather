/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparan: "rgba(0, 0, 0, 0.6)",
        col_rainy: "#949c9c",
      },
      backgroundImage: {
        rainy: "url('/src/assets/img/rainy.jpg')",
        cloudy: "url('/src/assets/img/cloudy.jpg')",
      },
    },
  },
  plugins: [],
});
