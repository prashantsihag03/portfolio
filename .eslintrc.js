// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: ["@babel/eslint-parser", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
