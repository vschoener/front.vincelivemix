import { createRequire } from 'node:module';

import eslintConfigPrettier from 'eslint-config-prettier/flat';

const require = createRequire(import.meta.url);
const next = require('eslint-config-next');

export default [
  {
    ignores: ['**/node_modules/**', 'dist/**', 'coverage/**'],
  },
  ...next,
  {
    files: ['src/**/*.{js,ts,tsx}'],
    rules: {
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/jsx-props-no-spreading': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/anchor-has-content': 'off',
      'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
      'no-param-reassign': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' },
      ],
    },
  },
  eslintConfigPrettier,
];
