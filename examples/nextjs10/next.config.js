const path = require('path')

// Syntaxx is using Lowlight (and `fault`) that are ESM-only, but NextJS doesn't support ESM.
// => workaround: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#gistcomment-3760583
const withTM = require('next-transpile-modules')([
  'fault', 'lowlight', 'syntaxx-reactjs'
])

/**
 * All this mess is only needed in this example because Syntaxx is imported
 * locally (see
 * https://github.com/martpie/next-transpile-modules#i-have-trouble-with-duplicated-dependencies-or-the-invalid-hook-call-error-in-react)
 * Otherwise it can be summarized by
 *
 * module.exports = withTM({
 *   webpack5: false, // you want to use Webpack 4
 * });
 *
 */
module.exports = withTM({
  // ESM with NextJS workaround doesn't work with webpack5
  webpack5: false,
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', ...config.externals]
    }

    config.resolve.alias['react'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'react'
    )

    return config
  }
})
