module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setup.js'],
  moduleNameMapper: {
    '\\.(styl|css)$': '<rootDir>/src/__mocks__/style.js',
  },
};
