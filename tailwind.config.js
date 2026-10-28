/** @type {import('tailwindcss').Config} */

// Comma-separated RGB channels so rgba(var(--x), a) works everywhere
const withOpacity = (variable) => {
  return ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgba(var(${variable}), ${opacityValue})`;
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: "quicksand",
      },
      colors: {
        canvas: withOpacity("--color-canvas"),
        primaryColor: withOpacity("--color-primary"),
        secondaryColor: withOpacity("--color-secondary"),
        ink: withOpacity("--color-ink"),
        muted: withOpacity("--color-muted"),
        surface: withOpacity("--color-surface"),
        surfaceRaised: withOpacity("--color-surface-raised"),
        burgundy: "#804870",
      },
      boxShadow: {
        card: "0 1px 2px rgba(23, 37, 84, 0.04), 0 18px 40px rgba(23, 37, 84, 0.08)",
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
