const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./packages/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    // publicPath: '/',
    filename: 'breezy-design.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'BREEZY',
    libraryTarget: 'commonjs2'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'lib'),
    },
    compress: true,
    port: 8090,
  },
  performance: {
    hints: false
    // hints: 'warning',
    // maxAssetSize: 1000,
    // maxEntrypointSize: 4000,
    // assetFilter: function (assetFilename) {
    //   return assetFilename.endsWith('.js');
    // },
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