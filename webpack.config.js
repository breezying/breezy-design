const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/main.js']
  },
  output: {
    filename: 'main.js',
    // template: 'public/index.html',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  devServer: {
    static: './public',
  },
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[ac]ss|\.css$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader'
        ]
      }
    ]
  }
};
