const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  return {
    devtool: env === 'development' ? 'source-map' : 'none',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: require('html-webpack-template'),
        title: 'IRCC',
        appMountId: 'app',
      }),
    ],
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      ],
    },
  }
}
