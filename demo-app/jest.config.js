module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  testTimeout: 60000,
  testEnvironmentOptions: {
    url: "http://localhost:1234",
  },
};
