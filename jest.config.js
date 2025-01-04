// jest.config.js
export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Use babel-jest for JSX files
  },
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy", // Mock CSS imports
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
