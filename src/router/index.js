import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'AdminLogin',
      component:function () {
        return import('@/components/admin/AdminLogin')
      }
    },
    {
      path:'/index',
      name:'AdminIndex',
      component:function () {
        return import('@/components/admin/AdminIndex')
      }
    },
  ]
})
