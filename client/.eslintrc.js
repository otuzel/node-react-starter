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
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:testing-library/react',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['babel', 'jsx-a11y', 'react', 'react-hooks', 'import'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
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
    'react/prop-types': 1,
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
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        'react/jsx-filename-extension': 0,
      },
    },
    {
      // eslint-plugin-testing-library rules or preset only for matching files
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
