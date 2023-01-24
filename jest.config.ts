export default {

  clearMocks: true,

  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageThreshold: {
    global: {
      lines: 2
    }
  },
  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    'dist',
    'logs',
    '/node_modules/',
    '/scripts/',
    '/src/di/',
    '/src/types/',
  ],

  coverageProvider: 'v8',

  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
  ],
  moduleNameMapper: {
    "@Config/(.*)": "<rootDir>/src/config/$1",
    "@DI/(.*)": "<rootDir>/src/di/$1",
    "@Infra/(.*)": "<rootDir>/src/infra/$1",
    "@Module/(.*)": "<rootDir>/src/modules/$1",
    "@Shared/(.*)": "<rootDir>/src/shared/$1",
    "@Type/(.*)": "<rootDir>/src/types/$1",
  },
  preset: 'ts-jest',
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ['**/*.test.[jt]s?(x)'],
  roots: [
    '<rootDir>/src',
  ],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.ts', './src/di/index.ts'],
};