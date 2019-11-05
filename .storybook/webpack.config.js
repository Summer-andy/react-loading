// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const getConfig = require('../webpack.config.js');

module.exports = async ({ config, mode }) => {
  const custom = getConfig('development');
  const newConfig = {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        ...custom.module.rules.slice(1),
        {
          test: /\.stories\.jsx?$/,
          loaders: [require.resolve('@storybook/addon-storysource/loader')],
          enforce: 'pre'
        }
      ]
    },
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...custom.resolve.alias
      }
    }
  };
  return newConfig;
};


// module.exports = function({ config }) {
//   config.module.rules.push({
//     test: /\.stories\.jsx?$/,
//     loaders: [require.resolve('@storybook/addon-storysource/loader')],
//     enforce: 'pre',
//   });

//   return config;
// };
