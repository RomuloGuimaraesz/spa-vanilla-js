export default {
rootDir: '../../',
clearMocks: true,
collectCoverage: true,
coverageDirectory: "<rootDir>/config/jest/coverage",
projects: ["<rootDir>/config/jest/jest.unit.config.mjs"],
transform: {
  '^.+\\.[tj]sx?$': '@swc/jest',
},
testEnvironment: 'node',
};
