// Webpack configuration for production

import path from 'path'
import webpack from 'webpack'

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(process.cwd(), 'client/src/index'),
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public', 'js'),
    publicPath: '/js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true)
  ],
  module: {
    rules: [
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
