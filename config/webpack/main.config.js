var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);

var path = require('path');
var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var config = module.exports = {
  // the base path which will be used to resolve entry points
  // context: __dirname,
  // the main entry point for our application's frontend JS
  entry: {
    'app': './app/frontend/javascripts/boot.ts',
    'vendor': './app/frontend/javascripts/vendor.ts'
  },

  module: {
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 Duplicate identifier
            2374, // 2374 -> Duplicate number index signature
            2375  // 2375 -> Duplicate string index signature
          ]
        },
        exclude: [ /\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/ ]
      }
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  }
};

config.resolve = {
  // tell webpack which extensions to auto search when it resolves modules. With this,
  // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
  extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
};


config.output = {
  // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
  path: path.join('public', 'javascripts'),
  // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
  filename: '[name].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[id].chunk.js',
  // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
  publicPath: '/assets',
};

config.plugins = [
  new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
  new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor'] })
];
