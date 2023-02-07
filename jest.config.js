module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.test.json',
      },
    },
    collectCoverage: true,
    collectCoverageFrom: [
      "src/api/*.ts",
      "!src/config.ts",
      "!src/create-server.ts",
      "!src/database-access.ts",
      "!src/index.ts",
      "!src/types.ts",
      "!./node_modules/**",
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    // setupFiles: ['<rootDir>/test-setup.js'],
  };
  