module.exports = {
  plugins: ['cloudability'],
  extends: [
    './base',
    './disable/react-a11y',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
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

    DEBUG     : false,
    cui       : false,
    Highcharts: false,
    cuiLodash : false,
  },

  rules: {

    /*
     *
     * Custom Cloudability created rules
     *
     */

    'cloudability/prefer-callback-set-state': 'error',

    /*
     *
     * Rules related to react and other modules
     *
     */

    // Forcing spacing with braces in jsx
    'react/jsx-curly-spacing': ['error', 'always'],

    // We want to explicitly define boolean values within jsx
    'react/jsx-boolean-value': ['error', 'always'],

    // AirBnB will enable this in future major version, so might as well check for it now. TODO remove when redundant
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    // AirBnB defaults to useless warnings. Devs should just disable this rule line-by-line as needed
    'react/no-danger': 'error',

    // We heavily use array keys as index throught our code. Benefits are too theoretical to be worth the effort
    'react/no-array-index-key': 'error',

    // The checks here are not sophisticated enough to activate. Too many false errors. TODO revisit
    'react/no-unused-prop-types': ['off', { customValidators: [], skipShapeProps: true }],

    // Allow devs to prefer PureComponents when appropriate
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    // Theoretically, we should turn this on so we remind ourselves not to depend on webpack too much, but oh well
    'import/no-webpack-loader-syntax': 'off',

    // Ideally should be active to further cement dev-intention in Components props, but not currently worth effort
    'react/require-default-props': 'off',

    /*
     *
     * Extra ES6-related restrictions and misc AirBnB overrides
     *
     */

    // GUI team has decided against dangling commas
    'comma-dangle': ['error', 'never'],

    // With modules, `use-strict` is superfluous but we have a mixed building system
    strict: 'off',

  },
};
