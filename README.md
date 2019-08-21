# Cloudability JavaScript Style Guide() {

Based off the [airbnb javascript style guide](https://github.com/airbnb/javascript).

## Installation

First install dependent packages and this package with the correct naming.

```
yarn add -D -E \
  eslint-plugin-cloudability@git://github.com/cloudability/javascript-style-guide.git#v1.0.0 \
  eslint@6
```

In a `.eslintrc.js` at root or any other relevant location, add a `plugin:cloudability` config to the `extends` array. For example:

```
module.exports = {
  extends: [
    'plugin:cloudability/base',
  ],
}
```

Besides `base`, the other configs are `gui|guitTest|service|typescript`.

#### Use with Typescript

`yarn add -D -E typescript`

Make sure the config being used is the `cloudability/typescript` one.

#### Use in VSCode

In VSCode's settings.json, add

```
{
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "typescript", "autoFix": true },
        { "language": "typescriptreact", "autoFix": true }
    ]
}
```
