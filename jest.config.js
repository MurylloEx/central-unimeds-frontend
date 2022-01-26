module.exports = {
  testTimeout: 20000,
  coveragePathIgnorePatterns: [
    "node_modules",
    "<rootDir>/App.tsx",
    "__mocks__",
    ".github",
    ".tmp",
    ".vscode"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  verbose: true,
  testEnvironment: 'jsdom'
}