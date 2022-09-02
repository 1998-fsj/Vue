import Vue from "vue";
import App from "./App.vue";

//三级联动组件  注册为全局组件
// import TypeNav from '@/pages/Home/TypeNav/index.vue';
//注册为全局组件，a:组件名 b:哪个组件
// Vue.component(TypeNav.name, TypeNav)
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false;

import store from "@/store/";
import router from "@/router/index";



new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
