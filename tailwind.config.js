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
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".clip-polygon-wave-top": {
            clipPath: "polygon(0 6%, 100% 0, 100% 94%, 0% 100%)",
          },
          ".clip-polygon-wave-end": {
            clipPath: "polygon(0% 0%, 100% 6%, 100% 100%, 0% 94%)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
