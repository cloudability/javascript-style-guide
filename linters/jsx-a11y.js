const a11y = require('eslint-plugin-jsx-a11y');

// Create a rules object that disable all `jsx-a11y` rules
const a11yRuleNames = (a11y && a11y.rules) ?
                        Object.keys(a11y.rules) :
                        [];
const a11yDisableRules = a11yRuleNames.reduce(
  (aggregate, ruleName) => {
    aggregate[`jsx-a11y/${ruleName}`] = 'off';
    return aggregate
  },
  {}
);

module.exports = {
  rules: a11yDisableRules
};
