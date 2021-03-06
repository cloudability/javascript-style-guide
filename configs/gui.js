module.exports = {
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

    // A very large chunk of our code base puts operator at end
    'operator-linebreak': ['error', 'after'],

    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['/', 'global'],
      },
      block: {
        exceptions: ['*'],
        balanced  : true,
      },
    }],

  },
};
