const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 3s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-80%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        archivo: ["var(--font-archivo)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      const colorObj = theme("colors");
      const extractColors = (obj, prefix = "") =>
        Object.entries(obj).flatMap(([key, val]) => {
          if (typeof val === "string") {
            return [[`--${prefix}${key}`, val]];
          }
          return extractColors(val, `${prefix}${key}-`);
        });

      const cssVars = Object.fromEntries(extractColors(colorObj));

      addBase({
        ":root": cssVars,
      });
    },
  ],
};
