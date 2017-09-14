const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRootPlugin = require('html-webpack-react-root-plugin')

module.exports = env => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin(), new ReactRootPlugin()],
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      ],
    },
  }
}
