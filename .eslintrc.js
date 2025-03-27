module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    // Added this rule as a control
    'import/no-commonjs': 'error',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          // I want to prevent files under "a" from
          // importing files from under "b". However
          // it doesn't seem to be working.
          { target: './src/a', from: './src/b' },
        ],
      },
    ],
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
};
