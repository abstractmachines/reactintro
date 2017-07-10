const ExtractTextPlugin = require('extract-text-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');

module.exports  = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module:{
    rules:
    [
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        // include: __dirname + '/src/',
        use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0','react']
          }
        }
        ],
      },

      // more loaders
      {
        test: /\.html$/,
        exclude: /index\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: true,
              localIdentName: '[name]__[local]__[bash:base64:5]',
              // Use csso to speed up minification.
              minimize: false,
              modules: false,
              sourceMap: true,
            },
          }],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  }
}
