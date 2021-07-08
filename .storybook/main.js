const path = require('path')

module.exports = {
  "stories": [
    "../src/components/**/stories.tsx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
  ],
  // webpackFinal: async config => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
  //   });

  //   return config;
  // }
}