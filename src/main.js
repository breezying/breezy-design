import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import UI from '../packages/index'

// 注册组件库
Vue.use(UI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
