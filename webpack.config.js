const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'breeze-ui.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'BREEZE',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimize: false
  },
  plugins: [
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
