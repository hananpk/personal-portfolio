const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // 1. Added custom elegant serif font
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
      },
      // 2. Added organic fluid blob animation
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
          },
          "33%": {
            transform: "translate(4px, -6px) scale(1.12)",
            borderRadius: "70% 30% 52% 48% / 60% 40% 60% 40%",
          },
          "66%": {
            transform: "translate(-6px, 4px) scale(0.95)",
            borderRadius: "28% 72% 37% 63% / 40% 50% 50% 60%",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
            borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
