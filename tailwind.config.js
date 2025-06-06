// tailwind.config.js
const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('@tailwindcss/typography'),
  ],
}

