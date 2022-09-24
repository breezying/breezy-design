const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./examples/entry.js']
  },
  output: {
    path: path.resolve(process.cwd(), './examples'),
    // filename: 'main.js',
    filename: '[name].[hash:7].js',
    chunkFilename: '[name].[hash:7].js'
  },
  devServer: {
    port: 9010
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.tpl',
      filename: './index.html',
      // favicon: './examples/favicon.ico'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[ac]ss|\.css$/i,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
