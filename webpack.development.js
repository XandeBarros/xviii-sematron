const path = require('path');
const HtmlWebpackPuglin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public/landing-page/'),
    filename: '[name]-[hash].js',
    assetModuleFilename: 'assets/images/[hash].png'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.html$/,
        use: {
          loader: 'html-loader',
        }
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPuglin({
      filename: 'landing-page.html',
      template: 'src/landing.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'USER': JSON.stringify(process.env.USER),
        'TEMPLATE': JSON.stringify(process.env.TEMPLATE),
        'SERVICE': JSON.stringify(process.env.SERVICE)
      },
    })
  ]
};