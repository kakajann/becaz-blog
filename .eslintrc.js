module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb',
    'plugin:import/typescript'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    '@typescript-eslint',
  ],
  rules: {
    'semi': [1, 'never'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': [1, {
        'custom': 'ignore',
    }],
    'import/no-unresolved': 'off'
  },
  settings: {
    'import/resolver': {
      'node': {
        moduleDirectory: ['.', './node_modules'],
        'extensions': ['js', '.jsx', '.ts', '.tsx']
      }
    }
  },
}
