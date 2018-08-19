import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/pages/homepage'
import login from '@/pages/login'
import loan from '@/pages/loan'
import signup from '@/pages/signup'
import userspace from '@/pages/userspace'
import usermanage from '@/pages/usermanage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: homepage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/loan',
      name: 'loan',
      component: loan
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/userspace',
      name: 'userspace',
      component: userspace
    },
    {
      path: '/usermanage',
      name: 'usermanage',
      component: usermanage
    }
  ],
  mode:"history"
})
