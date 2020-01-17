const webpack = require('webpack');
const path = require('path');

module.exports = {
  pwa: {
    name: 'Warframe Hub',
    themeColor: '#1a5072',
    msTileColor: '#1a5072',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },

  publicPath: '/',
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 10000,
      }),
    ],
    resolve: {
      alias: {
        lodash: path.resolve('node_modules/lodash-es/'),
      },
    },
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      less: {
        modules: {
          rules: [
            { test: /\.css$/, use: [{ loader: 'css-loader' }] },
            {
              test: /\.less$/,
              use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                {
                  loader: 'less-loader',
                },
              ],
            },
          ],
        },
      },
    },
  },
};
