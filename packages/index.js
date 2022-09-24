/*
 * @Author: your name
 * @Date: 2022-01-14 00:06:55
 * @LastEditTime: 2022-09-24 19:49:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_project/Users/jing/Office/Project/vue_demo/packages/index.js
 */

import ColorButton from './color-button'
import ScaleBox from './scale-box'

// 存储组件列表
const components = [
  ColorButton,
  ScaleBox
] 
/* 
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const install = function (Vue) {
  // 判断是否安装
  if(install.installed){return}
  // 遍历所有组件
  components.map(item => {
    Vue.component(item.name,item)
  })
}
// 判断是否引入文件
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}
export default{
  install,
  ColorButton,
  ScaleBox
}

