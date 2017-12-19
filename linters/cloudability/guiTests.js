module.exports = {
  globals: {
    'renderTools': true
  },
  extends: [
    './gui',
  ].map(require.resolve),
  env: {
    browser: false,

    mocha: true,
    jest : true,
  },

  rules: {
    'import/no-extraneous-dependencies': 'off',

    'react/jsx-filename-extension': 'off',

    'global-require': 'off',
  },
};
