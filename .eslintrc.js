// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "@babel/eslint-parser",
  settings: {
    react: {
      version: "detect",
    },
  },
};
