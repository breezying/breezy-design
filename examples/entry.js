import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'

// import {
//   // Button,
//   // Select,
//   Container,
//   Header,
//   Aside,
//   Main
// } from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
// Vue.use(Button)
// Vue.use(Select)
// Vue.use(Container)
// Vue.use(Header)
// Vue.use(Aside)
// Vue.use(Main)


new Vue({
  render: h => h(App),
}).$mount('#app')