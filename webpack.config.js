var production = process.env.NODE_ENV == 'production'
if (!production) { require('dotenv').config(); }

var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');

// Webpack Config
var webpackConfig = {
  entry: {
    'main': './src/main.browser.ts',
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      path.resolve(__dirname, './src'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),
    new webpack.EnvironmentPlugin([
      'CONFIG_VAR', 'NODE_ENV'
      ])
  ],

  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  }

};

// Our Webpack Defaults
var defaultConfig = {
  devtool: 'source-map',

  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, 'node_modules') ]
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: true,
    crypto: 'empty',
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false
  }
};

if (production) {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    output: {
      comments: false
    },
    compress: {
      warnings: false
    }}));
}

module.exports = webpackMerge(defaultConfig, webpackConfig);
