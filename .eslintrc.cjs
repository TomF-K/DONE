module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  overrides: [
    {
      files: ['**test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {},
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'no-console': 0,
  },
};
