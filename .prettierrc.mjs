/** @type {import("prettier").Config} */
const config = {
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: "none",
  jsxBracketSameLine: false,
  endOfLine: "auto",
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
