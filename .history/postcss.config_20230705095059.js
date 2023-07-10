module.exports = {
  plugins: [
    "tailwindcss/nesting",
    "tailw"
    "postcss-flexbugs-fixes",
    "postcss-preset-env",
    [
      "postcss-normalize",
      {
        allowDuplicates: false,
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    "autoprefixer",
  ],
};