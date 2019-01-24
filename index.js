/* eslint-disable global-require */

const guiConfig = require('./configs/gui');
const guiTestsConfig = require('./configs/guiTests');
const serviceConfig = require('./configs/service');

const customCloudyRules = {
  /* foo: require('./foo') */
};

module.exports = {
  rules  : customCloudyRules,
  configs: {
    gui: guiConfig,

    guiTests: guiTestsConfig,

    service: serviceConfig,
  },
};
