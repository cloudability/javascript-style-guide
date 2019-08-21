/* eslint-disable global-require */

const customCloudyRules = {
  /* foo: require('./foo') */
};

module.exports = {
  rules  : customCloudyRules,
  configs: {
    gui     : require('./configs/gui'),
    guiTests: require('./configs/guiTests'),

    service: require('./configs/service'),

    typescript: require('./configs/typescript'),
  },
};
