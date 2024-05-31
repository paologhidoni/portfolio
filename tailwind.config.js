/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: "quicksand",
      },
      colors: {
        primaryColor: "#172554",
        secondaryColor: "#EFC24A",
        burgundy: "#804870",
      },
    },
  },
  plugins: [],
};
