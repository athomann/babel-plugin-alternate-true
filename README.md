# babel-plugin-alternate-true

Eliminate negativity in your code

## Example

In:

```js
true;
alternateTrue;
```

Out:

```js
true;
false;
```

## Installation

```sh
$ npm install babel-plugin-alternate-true
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["alternate-true"]
}
```

### Via CLI

```sh
$ babel --plugins alternate-true script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["alternate-true"]
});
```
