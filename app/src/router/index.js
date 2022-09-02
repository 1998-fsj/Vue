import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/pages/Home/Home.vue";
import Search from "@/pages/Search/Search.vue";
import Login from "@/pages/Login/Login.vue";
import Register from "@/pages/Register/Register.vue";

let originPush = VueRouter.prototype.push;

VueRouter.prototype.push = function(path, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, path, resolve, reject);
  } else {
    originPush.call(
      this,
      path,
      () => {},
      () => {}
    );
  }
};

let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.replace = function(path, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, path, resolve, reject);
  } else {
    originReplace.call(
      this,
      path,
      () => {},
      () => {}
    );
  }
};

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { isShow: true },
    },
    {
      //?表示param参数可传可不传
      path: "/search/:keyword?",
      component: Search,
      meta: { isShow: true },
      name: "search",
    },
    {
      path: "/login",
      component: Login,
      meta: { isShow: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { isShow: false },
    },
    {
      path: "/*",
      redirect: "/home",
    },
  ],
});
