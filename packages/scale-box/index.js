/*
 * @Author: your name
 * @Date: 2022-01-14 00:07:45
 * @LastEditTime: 2022-09-24 19:13:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_project/Users/jing/Office/Project/vue_demo/packages/ScaleBox/index.js
 */

// 导入组件，组件必须声明 name
import ScaleBox from './src/scale-box.vue'

// 为组件提供 install 安装方法，供按需引入
ScaleBox.install = function (Vue) {
  Vue.component(ScaleBox.name, ScaleBox)
}

// 默认导出组件
export default ScaleBox
