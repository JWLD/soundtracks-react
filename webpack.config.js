var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.(css)$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.(otf)$/, use: {
        loader: 'url-loader',
        options: { limit: 8192 }
      } }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000/',
      }
    }
  }
};
