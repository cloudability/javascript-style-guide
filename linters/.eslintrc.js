module.exports = {
  parser : 'babel-eslint',
  extends: 'airbnb',
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

    cui       : false,
    Highcharts: false
  },

  rules: {

    /*
     *
     * React-related rules
     *
     */

    // Forcing spacing with braces in jsx
    'react/jsx-curly-spacing': [2, 'always'],

    // we want to explicitly define boolean values within jsx
    'react/jsx-boolean-value': [2, 'always'],

    /*
     *
     * Extra ES6-related restrictions and misc AirBnB overrides
     *
     */
    // GUI team has decided against dangling commas
    'comma-dangle'   : [2, 'never'],
    'callback-return': 2,

    // The consistency checks do not match our early-returns + normal callback coding style
    'consistent-return': 0,

    // Relaxed but consistent usage of braces
    curly: [2, 'multi-line', 'consistent'],

    // Functions can be anonymous when used as an argument
    'func-names': 0,

    // Enforces how MDN writes their generators
    'generator-star-spacing': [2, { before: false, after: true }],
    'handle-callback-err'   : [2, '^(err|.*(e|E)rror)'],
    indent                  : [2, 2, {
      SwitchCase        : 1,
      VariableDeclarator: { var: 2, let: 2, const: 3 }
    }],

    // Align on colon to use auto-fix to prettify large objects
    'key-spacing': [
      2, {
        singleLine: { beforeColon: false, afterColon: true },
        multiLine : { beforeColon: false, afterColon: true, align: 'colon' }
      }
    ],
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      beforeLineComment : true,
      allowBlockStart   : true,
      allowObjectStart  : true
    }],

    // Should not leak stuff to clientside
    'no-console': 2,

    // Allow multiple spaces only in certain situations involving aligned white spaces
    'no-multi-spaces': [2, {
      exceptions: {
        ImportDeclaration : true,
        Property          : true,
        LogicalExpression : true,
        VariableDeclarator: true
      }
    }],

    // Do not allow shadowed functions except in cases of extremely common parameter names
    'no-shadow': [2, { allow: ['callback', 'cb', 'done', 'err', 'error', 'next', 'req', 'res'] }],

    // We directly modify the `req` parameter in routing middleware
    'no-param-reassign': [2, { props: false }],

    // Currently a standard usage in GUI js
    'no-underscore-dangle': 0,

    // Only enforce shorthand on properties because doing so on methods produces weird behavior with anonymous fn
    'object-shorthand': [2, 'properties'],

    // Aggregate uninitialized declarations into one line. Otherwise, use multiple
    'one-var': [2, { uninitialized: 'always', initialized: 'never' }],

    // We allow developers to add padded blocks if they aid readability
    'padded-blocks': 0,

    // We do not gain anything from forcing multiline arrow functions
    'prefer-arrow-callback': 0,

    // Benefit of string templates is not worth all the white noise of current GUI infractions
    'prefer-template': 0,

    // We do not like space before the first parenthesis in function decl
    'space-before-function-paren': [2, 'never'],
    'spaced-comment'             : [2, 'always', {
      line: {
        markers: ['/', 'global']
      },
      block: {
        exceptions: ['*'],
        balanced  : true
      }
    }],

    // With modules, `use-strict` is superfluous but we have a mixed building system
    strict: 0,

    /*
     *
     * Taken & adapted from Cloudability GUI's eslint
     *
     */
    'brace-style'    : [2, '1tbs', { allowSingleLine: false }],
    'consistent-this': [2, 'self'],
    'func-style'     : [2, 'declaration', { allowArrowFunctions: true }],

    // 'new-cap': [2, {'capIsNew': false}],
    'operator-linebreak': [2, 'after'],

    // Stuff taken & adapted from Datahero's unfinished eslint
    'no-alert'             : 2,
    'no-bitwise'           : 2,
    'no-constant-condition': 2,
    'no-unused-vars'       : [2, {
      vars: 'all',
      args: 'after-used',

      argsIgnorePattern: 'callback|done|next',
      varsIgnorePattern: '_|colors'
    }],
    'no-use-before-define': [2, 'nofunc'],
    'max-len'             : [2, {
      code    : 120,
      tabWidth: 2,

      ignoreTrailingComments: true,
      ignoreUrls            : true
    }],
    'use-isnan': 2
  }
};
