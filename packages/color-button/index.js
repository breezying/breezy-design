/*
 * @Author: your name
 * @Date: 2022-01-14 00:07:45
 * @LastEditTime: 2022-09-24 19:49:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_project/Users/jing/Office/Project/vue_demo/packages/ColorButton/index.js
 */

// 导入组件，组件必须声明 name
import ColorButton from './src/color-button.vue'

// 为组件提供 install 安装方法，供按需引入
ColorButton.install = function (Vue) {
  Vue.component(ColorButton.name, ColorButton)
}

// 默认导出组件
export default ColorButton
