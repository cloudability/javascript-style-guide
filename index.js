/* eslint-disable global-require */

const guiConfig = require('./linters/cloudability/gui');
const guiTestsConfig = require('./linters/cloudability/guiTests');
const serviceConfig = require('./linters/cloudability/service');

const customCloudyRules = {
  'prefer-callback-set-state': require('./lib/rules/prefer-callback-set-state'),
};

module.exports = {
  rules  : customCloudyRules,
  configs: {
    gui: guiConfig,

    guiTests: guiTestsConfig,

    service: serviceConfig,
  },
};
