/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      darkBlue: "#0A1D41",
      purple: "#681575",
      turquoise: "#00DBEE",
      lightBlue: "#54BBE3",
      blue: "#1B3BCE",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        bebas: ["var(--fontBebas)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
