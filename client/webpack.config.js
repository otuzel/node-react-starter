const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const isDevelopment = mode === 'development';
const isProduction = mode === 'production';

const config = {
  // the output bundle won't be optimized for production but suitable for development
  mode,
  devServer: {
    hot: true,
    port: 3000,
  },
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, '/src', 'index.js'),
  output: {
    // the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          // For TS, transpiling is done via babel-loader
          // Type checking is done via ForkTsCheckerWebpackPlugin
          loader: 'babel-loader',
          options: {
            plugins: isDevelopment
              ? [require.resolve('react-refresh/babel')]
              : [],
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(png|jpg|webp|gif|woff|woff2|eot|ttf|otf|mp4)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          'svg-react-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  // add a custom index.html as the template
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '/src', 'index.html'),
    }),
    new Dotenv({ path: '../.env' }),
  ],
};

if (isDevelopment) {
  // For Fast Refresh for React components
  // https://github.com/pmmmwh/react-refresh-webpack-plugin
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(
    new ReactRefreshWebpackPlugin({
      overlay: false,
    })
  );
  // For TS type checking
  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        mode: 'write-references',
      },
    })
  );
}

module.exports = config;
