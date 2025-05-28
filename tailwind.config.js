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
      boxShadow: {
        dark: "0 0 0 1px rgba(255,255,255,0.10), 0 4px 16px rgba(0,0,0,0.40)",
        "dark-hover":
          "0 0 0 1px rgba(255,255,255,0.15), 0 6px 24px 4px rgba(0,0,0,0.55)",
      },
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
