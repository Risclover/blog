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
      scale: {
        5: ".1", // 5 % of original height
      },
      boxShadow: {
        dark: "0 0 0 1px rgba(255,255,255,0.10), 0 4px 16px rgba(0,0,0,0.40)",
        "dark-hover":
          "0 0 0 1px rgba(255,255,255,0.15), 0 6px 24px 4px rgba(0,0,0,0.55)",
      },
      animation: {
        "bounce-once": "bounce-once .6s ease-in-out forwards",
        "paper-bounce": "paper-bounce 0.45s ease-out forwards",
        "arrow-wiggle": "arrow-wiggle 0.4s ease-in-out 1",
        "arrow-grow-wiggle": "arrow-grow-wiggle 1.2s ease-in-out 1",
      },
      keyframes: {
        "bounce-once": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "arrow-grow-wiggle": {
          "0%": { transform: "translate(0,0)  scale(1)   rotate(0deg)" },

          /* ➜ enlarge + drift 2px right / -2px up */
          "10%": { transform: "translate(2px,-2px) scale(1.15) rotate(0deg)" },

          /* ➜ three wiggles while still popped + drifted */
          "20%": { transform: "translate(2px,-2px) scale(1.15) rotate(10deg)" },
          "30%": {
            transform: "translate(2px,-2px) scale(1.15) rotate(-10deg)",
          },
          "40%": { transform: "translate(2px,-2px) scale(1.15) rotate(10deg)" },
          "50%": {
            transform: "translate(2px,-2px) scale(1.15) rotate(-10deg)",
          },
          "60%": { transform: "translate(2px,-2px) scale(1.15) rotate(6deg)" },
          "70%": { transform: "translate(2px,-2px) scale(1.15) rotate(-6deg)" },

          /* ➜ ease back toward origin & size */
          "85%": { transform: "translate(1px,-1px) scale(1.05) rotate(0deg)" },
          "100%": { transform: "translate(0,0)  scale(1)   rotate(0deg)" },
        },
        "arrow-wiggle": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(6deg)" },
        },
        "paper-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(3px)" },
          "70%": { transform: "translateY(-3px)" },
        },
      },
    },
  },
  plugins: [],
};
