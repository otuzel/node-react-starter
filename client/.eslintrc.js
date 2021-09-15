module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'import', 'jsx-a11y', 'react-hooks', '@babel'],
  env: {
    browser: true,
    es6: true,
    node: true,
    // jest: true,
  },
  root: true,
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    react: {
      version: 'detect',
    },
  },

  rules: {
    'no-debugger': 2,
    'no-unused-vars': 2,
    'react/function-component-definition': 0,
    'react/boolean-prop-naming': 0,
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 1,
    'react/display-name': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      env: {
        browser: true,
        es2021: true,
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'react/jsx-filename-extension': 0,
      },
    },
  ],
};
