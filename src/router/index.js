import Vue from 'vue'
import Router from 'vue-router'
import navi from '@/components/navi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navi',
      component: navi
    }
  ]
})
