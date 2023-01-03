// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["*.config.js", "__mocks__/*"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
