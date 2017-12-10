'use strict'
const merge = require('webpack-merge')
const libWebpackConfig = require('./webpack.lib.conf')

const myMerge = merge.smartStrategy({
  externals: 'replace',
});
const standaloneWebpackConfig = myMerge(libWebpackConfig, {
  output: {
    filename: 'jumbogrove.js',
  },
  externals: [],
});

module.exports = standaloneWebpackConfig;
