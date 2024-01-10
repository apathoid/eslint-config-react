# eslint-config-react
Configuration files for eslint.

### How to install
`npm i -D @apathoid/eslint-config-react`

### How to use
The package provides config files for two module systems: `cjs` and `esm`.

For `cjs` fill `eslint.config.js` with this:

```js
const apathyReactConfig = require('@apathoid/eslint-config-react').default;

module.exports = [
    ...apathyReactConfig,
    ...
];
```

For `esm` it is necessary to add `type: module` to project's `package.json` file. Then add this to `eslint.config.js`:

```js
import apathyReactConfig from '@apathoid/eslint-config-react';

export default [
    ...apathyReactConfig,
    ...
];
```
