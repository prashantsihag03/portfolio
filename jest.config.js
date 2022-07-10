/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  roots: ["./src"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(svg|png|jpeg|jpg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

module.exports = config;
