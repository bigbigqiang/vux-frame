import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloFromVux',
      component: function (resolve) {
        require(['@/components/HelloFromVux'], resolve)
      }
    },
    {
      path: '/alert',
      name: 'alert',
      component: function (resolve) {
        require(['@/components/alert'], resolve)
      }
    },
    {
      path: '/xaddress',
      name: 'xaddress',
      component: function (resolve) {
        require(['@/components/xaddress'], resolve)
      }
    }
  ]
})
