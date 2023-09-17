// TODO!!
// eslint-disable-next-line import/no-import-module-exports
import path from "node:path";

module.exports = {
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleDirectories: ["node_modules"],
  modulePaths: [
    "<rootDir>src",
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg": path.resolve(__dirname, "jestSvgTest.tsx"),
  },
};
