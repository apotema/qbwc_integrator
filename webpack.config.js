var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var config = module.exports = {
  // the base path which will be used to resolve entry points
  // context: __dirname,
  // the main entry point for our application's frontend JS
  entry: {
    'polyfills': './app/assets/javascripts/polyfills.ts',
    'vendor': './app/assets/javascripts/vendor.ts',
    'app': './app/assets/javascripts/boot.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  output: {
    path: path.join('public', 'javascripts'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    preLoaders: [
      // { test: /\.ts$/, loader: 'tslint-loader', exclude: [ root('node_modules') ] },
      // TODO(gdi2290): `exclude: [ root('node_modules/rxjs') ]` fixed with rxjs 5 beta.2 release
      { test: /\.js$/, loader: "source-map-loader", exclude: [ root('node_modules/rxjs') ] }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
       // Optionally extract less files
            // or any other compile-to-css language
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.png/, loader: "url-loader?limit=100000&minetype=image/png" },
      { test: /\.html$/,  loader: 'raw-loader' },
      // Support for .ts files.
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] }
    ]
  },

  plugins: [
    new ForkCheckerPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'], minChunks: Infinity }),
    // static assets
    // new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ]),
    // generating html
    // new HtmlWebpackPlugin({ template: 'src/index.html', chunksSortMode: 'none' }),
    // Environment helpers (when adding more properties make sure you include them in custom-typings.d.ts)
    // new webpack.DefinePlugin({
    //   'ENV': JSON.stringify(metadata.ENV),
    //   'HMR': HMR
    // })
    new ExtractTextPlugin("../stylesheets/app.css")
  ],

};

config.resolve = {
  // tell webpack which extensions to auto search when it resolves modules. With this,
  // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
  extensions: prepend(['.ts','.js','.json','.css','.html'], '.async')
};


// config.output = {
//   // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
//   path: path.join('public', 'javascripts'),
//   // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
//   filename: '[name].bundle.js',
//   sourceMapFilename: '[name].map',
//   chunkFilename: '[id].chunk.js',
//   // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
//   publicPath: '/assets',
// };

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function prepend(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) { args = [args] }
  return extensions.reduce(function(memo, val) {
    return memo.concat(val, args.map(function(prefix) {
      return prefix + val
    }));
  }, ['']);
}
