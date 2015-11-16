'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var buildPath = 'build';
var publicPath = 'assets';
var port = process.env.PORT || 3000;
var webpackPort = process.env.WEBPACK_PORT || 3001;

function createWebpackConfig(options) {
  if (!options) { options = {}; }

  var devtool = options.dev ? 'eval-source-map' : 'sourcemap';

  var entry = options.entry || [
    './app/index.js'
  ];

  if (options.dev) {
    entry = entry.concat(
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:' + webpackPort
    )
  }

  var output = {
    path: path.resolve(__dirname, '..', buildPath),
    filename: options.outputFilename || (options.dev ? 'bundle.js' : 'bundle.[hash].js'),
    publicPath: options.dev ?
      'http://localhost:' + webpackPort + '/' + publicPath + '/' :
      '/' + publicPath + '/',
    libraryTarget: options.outputLibraryTarget
  };

  var plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ];

  if (options.dev) {
    plugins = plugins.concat(new webpack.HotModuleReplacementPlugin());
  } else {
    // plugins = plugins.concat(new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }));
  }

  if (options.target === 'node') {
    // plugins = plugins.concat(
    //   new webpack.BannerPlugin('require("source-map-support").install();',
    //     {raw: true, entryOnly: false}));
  } else {
    plugins = plugins.concat([
      new ExtractTextPlugin('style.[hash].css', {allChunks: true}),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.DedupePlugin(),
      function() {
        this.plugin('done', function(stats) {
          fs.writeFileSync(
            path.resolve(__dirname, '..', 'stats.json'),
            JSON.stringify(stats.toJson())
          );
        });
      }
    ]);
  }

  if (options.target) {
    plugins = plugins.concat([
      new webpack.DefinePlugin({
        'process.env': {
          WEBPACK_TARGET: JSON.stringify(options.target)
        }
      }),
    ]);
  }

  var resolve = {
    alias: {
      assets: path.resolve(__dirname, '..', 'assets')
    },
    extensions: ['', '.js']
  };

  var cssLoaders = [
    'css?root=..',
    'sass?outputStyle=expanded&' +
    'includePaths[]=' + path.resolve(__dirname, 'bower_components')
  ].join('!');

  var loaders = [
    {
      exclude: /node_modules/,
      test: /\.js$/,
      loaders: options.dev ?
        ['react-hot', 'babel'] :
        ['babel']
    },
    {
      test: /\.scss$/,
      loader: options.dev ?
        'style!' + cssLoaders
        :
        ExtractTextPlugin.extract(cssLoaders)
    },
    {
      test: /\.(jpg|png|svg)$/,
      loader: 'url?limit=8192'
    },
    {
      test: /\.json$/,
      loader: 'json'
    }
  ];

  return {
    bail: !options.dev,
    devtool: devtool,
    entry: entry,
    output: output,
    plugins: plugins,
    resolve: resolve,
    module: {loaders: loaders},
    target: options.target,

    port: port,
    webpackPort: webpackPort,
    buildPath: buildPath,
    publicPath: publicPath
  };
}

module.exports = createWebpackConfig;
