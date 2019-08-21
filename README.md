# Cloudability JavaScript Style Guide() {

Based off the [airbnb javascript style guide](https://github.com/airbnb/javascript).

## Installation

First install dependent packages and this package with the correct naming.

```
yarn add -D -E \
  eslint-plugin-cloudability@git://github.com/cloudability/javascript-style-guide.git#v1.0.0 \
  eslint@6 \
  typescript
```

In a `.eslintrc.js` at root or any other relevant location, add a `plugin:cloudability/base` to the `extends` array.

```
module.exports = {
  extends: [
    'plugin:cloudability/base',
  ],
}
```

## Typescript

There is a config that includes additional rules for typescript. The extra rules only trigger in `.ts|.tsx` files. Everywhere else, the base rules apply.

```
module.exports = {
  extends: [
    'plugin:cloudability/typescript',
  ],
}
```
