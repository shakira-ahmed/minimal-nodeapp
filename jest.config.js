module.exports = {
  testEnvironment: 'node',
  testRegex: './src/tests/.*\\.test\\.[jt]sx?$',
  testPathIgnorePatterns: [
    'end-to-end',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globalSetup: './src/tests/global-setup.ts',
 // setupFilesAfterEnv: ['./src/tests/setup-test-env.js', 'jest-extended'],
  preset: 'ts-jest',
  testMatch: null,
}