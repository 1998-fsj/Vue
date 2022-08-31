import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)


import Home from '@/pages/Home/Home.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'
import Register from '@/pages/Register/Register.vue'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{isShow:true}
        },
        {
            path:'/search',
            component:Search,
            meta:{isShow:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{isShow:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{isShow:false}
        },
        {
            path:'/*',
            redirect:'/home'
        },
        
    ]
})