'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const prodWebpackConfig = require('./webpack.prod.conf')
const ConcatPlugin = require('webpack-concat-plugin');

// Plugin stuff is to avoid generating images + vendor JS
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

const myMerge = merge.smartStrategy({
  entry: 'replace',
  plugins: 'replace',
});
const libWebpackConfig = myMerge(prodWebpackConfig, {
  entry: {
    app: './src/main.js',
    vendor: ['vue', 'markdown-it', 'markdown-it-attrs', 'lodash', 'animated-scroll-to'],
  },
  output: {
    // path: resolve('lib'),
    path: config.build.assetsRoot,
    library: 'jumbogrove',
    libraryTarget: 'umd',
    filename: '[name].js',
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // UglifyJs do not support ES6+, you can also use babel-minify for better treeshaking: https://github.com/babel/minify
    /*
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    */
    // extract css into its own file
    new ExtractTextPlugin({
      // CHANGE: no hash
      filename: utils.assetsPath('css/[name].css'),
      // set the following option to `true` if you want to extract CSS from
      // codesplit chunks into this main css file as well.
      // This will result in *all* of your app's CSS being loaded upfront.
      // CHANGE: true
      allChunks: true,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
      ? { safe: true, map: { inline: false } }
      : { safe: true }
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*', '*.png']
      }
    ]),

    new ConcatPlugin({
      fileName: 'jumbogrove.js',
      filesToConcat: ['./dist/manifest.js', './dist/app.js']
    }),
  ]
});

module.exports = libWebpackConfig;
