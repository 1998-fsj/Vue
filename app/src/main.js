import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from '@/router/index'
//  let a = 100;
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
