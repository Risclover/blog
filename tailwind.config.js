const { addScaleCorrector } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      wotfard: ["Wotfard Regular", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
      logo: ["Itim", "cursive"],
    },
    extend: {
      animation: {
        "bounce-once": "bounce-once .6s ease-in-out forwards",
      },
      keyframes: {
        "bounce-once": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
