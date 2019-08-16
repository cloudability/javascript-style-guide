module.exports = {
  plugins: ['cloudability'],
  extends: [
    './base',
    './disable/react-a11y',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,

      // Temporarily allow "@dec() export {{default}} class A {}"
      // TODO - take off band aid and change codebase to "export {{default}} @dec class A{}" as per JS spec
      legacyDecorators: true,
    },
  },
  settings: {
    'import/resolver': 'webpack',
  },
  env: {
    browser: true,
    node   : true,
  },
  globals: {
    $       : false,
    _       : false,
    Backbone: false,
    jQuery  : false,

    DEBUG    : false,
    cui      : false,
    cuiLodash: false,
  },

  rules: {

    /*
     *
     * Custom Cloudability created rules
     *
     */

    // 'cloudability/foo': 'error',

    /*
     *
     * Extra ES6-related restrictions and misc AirBnB overrides
     *
     */

    // GUI team has decided against dangling commas
    'comma-dangle': ['error', 'never'],

    // The rule require changes to large chunk of code and does not aid readability much
    'react/jsx-one-expression-per-line': 'off',

    // With modules, `use-strict` is superfluous but we have a mixed building system
    strict: 'off',

  },
};
