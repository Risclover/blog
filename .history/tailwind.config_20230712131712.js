/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
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
    extend: {},
  },
  plugins: [],
};
