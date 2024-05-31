/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: "quicksand",
      },
      colors: {
        burgundy: "#804870",
        ocra: "#EFC24A",
      },
    },
  },
  plugins: [],
};
