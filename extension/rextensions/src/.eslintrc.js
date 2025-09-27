module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    chrome: 'readonly',
  },
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Dodaj ovdje svoje pravila ako želiš
    // Na primjer:
    // 'no-console': 'warn',
  },
};
