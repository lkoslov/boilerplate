// Webpack configuation for development

const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // allows controlling how Webpack generates source map
  devtool: 'eval-source-map',
  // entry file for the bundle
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'client/src/index')
  ],
  devServer: {
    contentBase: '/js',
    hot: true
  },
  // where the bundle will be saved and which filename to use for it
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public', 'js'),
    publicPath: '/js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js(x)?$/,
        use: 'eslint-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-inline-environment-variables']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(s)?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader'
      },
      {
        test: /\.(jpe?g|png|gif|ico|ttf)$/i,
        use: 'file-loader'
      }
    ]
  },
  target: 'web'
}
