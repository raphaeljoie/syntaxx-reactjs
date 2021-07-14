# Use of Syntaxx with NextJS
This package is using Lowlight that is provided as [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
as well as one of its dependency (`fault`)
Node 12+ is needed to use it, and it must be `import`ed instead of `require`d.
**Unfortunately NextJS doesn't support ESM yet**.


Hopefully [there is a workaround](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#gistcomment-3760583)
to transpile Syntaxx.

All is needed is to install `next-transpile-modules` and update NextJS configuration
accordingly
```js
// next.config.js

// Syntaxx is using Lowlight (and `fault`) that are ESM-only but NextJS doesn't support ESM.
// => workaround: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#gistcomment-3760583
const withTM = require('next-transpile-modules')([
  'fault', 'lowlight', 'syntaxx-reactjs'
])

module.exports = withTM({
  webpack5: false, // Workaround doesn't work with webpack 5
});
```

## Run the example
In this folder
```
npm install
npm run dev
```
and browse `http://localhost:3000`

NB: this example even makes it more complex because Syntaxx is imported locally
it therefore requires [another workaround](https://github.com/martpie/next-transpile-modules#i-have-trouble-with-duplicated-dependencies-or-the-invalid-hook-call-error-in-react)
to be implemented.
