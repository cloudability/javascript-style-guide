module.exports = {

  plugins: [
    'cypress',
  ],

  globals: {
    renderTools: false,

    describe: false,
    it      : false,
  },

  extends: [
    './gui',
  ].map(require.resolve),

  env: {
    browser: false,

    mocha: true,
    jest : true,

    'cypress/globals': true,
  },

  rules: {
    'import/no-extraneous-dependencies': 'off',

    'react/jsx-filename-extension': 'off',

    'global-require': 'off',
  },
};
