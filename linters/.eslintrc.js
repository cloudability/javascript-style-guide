module.exports = {
  parser : 'babel-eslint',
  extends: [
    '../packages/eslint-config-airbnb',
    './jsx-a11y.js'
  ].map(require.resolve),
  settings: {
    'import/resolver': 'webpack'
  },
  env: {
    browser: true,
    node   : true
  },
  globals: {
    $        : false,
    _        : false,
    Backbone : false,
    jQuery   : false,
    describe : false,
    expect   : false,
    it       : false,

    DEBUG     : false,
    cui       : false,
    Highcharts: false,
    cuiLodash : false
  },

  rules: {

    /*
     *
     * Rules related to react and other modules
     *
     */

    // Forcing spacing with braces in jsx
    'react/jsx-curly-spacing': ['error', 'always'],

    // We want to explicitly define boolean values within jsx
    'react/jsx-boolean-value': ['error', 'always'],

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
    'react/require-default-props': 'error',

    /*
     *
     * Extra ES6-related restrictions and misc AirBnB overrides
     *
     */

    'callback-return': 'error',

    // GUI team has decided against dangling commas
    'comma-dangle': ['error', 'never'],

    // The consistency checks do not match our early-returns + normal callback coding style
    'consistent-return': 'off',

    // Relaxed but consistent usage of braces
    curly: ['error', 'multi-line', 'consistent'],

    // Functions can be anonymous when used as an argument
    'func-names': 'off',

    // Enforces styling similar to how MDN writes their generators
    'generator-star-spacing': ['error', { before: false, after: true }],

    'handle-callback-err'   : ['error', '^(err|.*(e|E)rror)'],

    indent                  : ['error', 2, {
      SwitchCase        : 1,
      VariableDeclarator: { var: 2, let: 2, const: 3 },
      outerIIFEBody: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 }
    }],

    // Align on colon to use auto-fix to prettify large objects
    'key-spacing': [
      2, {
        singleLine: { beforeColon: false, afterColon: true },
        multiLine : { beforeColon: false, afterColon: true, align: 'colon' }
      }
    ],

    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      beforeLineComment : true,
      allowBlockStart   : true,
      allowObjectStart  : true
    }],

    // Devs can choose best style here
    'multiline-ternary': 'off',

    // Should not leak stuff to clientside
    'no-console': 'error',

    // Allow multiple spaces only in certain situations involving aligned white spaces
    'no-multi-spaces': ['error', {
      exceptions: {
        ImportDeclaration : true,
        Property          : true,
        LogicalExpression : true,
        VariableDeclarator: true
      }
    }],

    // Do not allow shadowed functions except in cases of extremely common parameter names
    'no-shadow': ['error', { allow: ['callback', 'cb', 'done', 'err', 'error', 'next', 'req', 'res'] }],

    // We directly modify the `req` parameter in routing middleware
    'no-param-reassign': ['error', { props: false }],

    // Currently a standard usage in GUI js
    'no-underscore-dangle': 'off',

    // Only enforce shorthand on properties because doing so on methods produces weird behavior with anonymous fn
    'object-shorthand': ['error', 'properties'],

    // Aggregate uninitialized declarations into one line. Otherwise, use multiple
    'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],

    // We allow developers to add padded blocks if they aid readability
    'padded-blocks': 'off',

    // Benefit of string templates is not worth all the white noise of current GUI infractions
    'prefer-template': 'off',

    // We do not like space before the first parenthesis in function decl
    'space-before-function-paren': ['error', 'never'],
    'spaced-comment'             : ['error', 'always', {
      line: {
        markers: ['/', 'global']
      },
      block: {
        exceptions: ['*'],
        balanced  : true
      }
    }],

    // With modules, `use-strict` is superfluous but we have a mixed building system
    strict: 'off',

    /*
     *
     * Taken & adapted from Cloudability GUI's eslint
     *
     */
    'brace-style'    : ['error', '1tbs', { allowSingleLine: false }],
    'consistent-this': ['error', 'self'],
    'func-style'     : ['error', 'declaration', { allowArrowFunctions: true }],

    // 'new-cap': ['error', {'capIsNew': false}],
    'operator-linebreak': ['error', 'after'],

    // Stuff taken & adapted from Datahero's unfinished eslint
    'no-alert'             : 'error',
    'no-bitwise'           : 'error',
    'no-constant-condition': 'error',
    'no-unused-vars'       : ['error', {
      vars: 'all',
      args: 'after-used',

      argsIgnorePattern: 'callback|done|next',
      varsIgnorePattern: '_|colors'
    }],
    'no-use-before-define': ['error', 'nofunc'],
    'max-len'             : ['error', {
      code    : 120,
      tabWidth: 2,

      ignoreComments: true,
      ignoreUrls    : true,

      ignoreStrings         : true,
      ignoreTemplateLiterals: true,
    }],
    'use-isnan': 'error'
  }
};
