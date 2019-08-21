const typescriptEslint = require('@typescript-eslint/eslint-plugin');

module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parserOptions: {
    project     : './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser : true,
    commonjs: true,
    es6     : true,
    jest    : true,
    node    : true,
  },

  overrides: [
    {
      files        : ['*.ts', '*.tsx'],
      parser       : '@typescript-eslint/parser',
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],

      rules: {
        ...typescriptEslint.configs.recommended.rules,
        ...typescriptEslint.configs['recommended-requiring-type-checking'].rules,

        // Also allow react in .tsx files
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

        // TypeScript's `noFallthroughCasesInSwitch` option is more robust
        'default-case': 'off',

        // Allow rest siblings to be ignored
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars              : 'all',
            args              : 'after-used',
            ignoreRestSiblings: true,
          },
        ],

        // Match airBnB's stricter rule on the useless constructor
        'no-useless-constructor'                   : 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
      },
    },
  ],
};
