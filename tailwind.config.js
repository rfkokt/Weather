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
      animation: {
        slides: "slide 1s ease 0s 1 normal forwards;",
      },
      keyframes: {
        slide: {
          "0%": {
            opacity: 0,
            transform: "translateX(-250px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
      backgroundImage: {
        rainy: "url('/src/assets/img/rainy.webp')",
        cloudy: "url('/src/assets/img/cloudy.webp')",
        mist: "url('/src/assets/img/mist.webp')",
      },
    },
  },
  plugins: [],
});
