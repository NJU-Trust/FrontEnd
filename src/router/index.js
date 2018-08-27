import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/pages/homepage'
import login from '@/pages/login'
import loan from '@/pages/loan'
import signup from '@/pages/signup'
import UserSpace from '@/pages/UserSpace'
import NormalCheck from '@/pages/NormalCheck'
import FinancialStanding from '@/pages/FinancialStanding'
import usermanage from '@/pages/usermanage'
import userdetail from '@/pages/userdetail'
import invest from '@/pages/invest'
import DoInvesting from '@/pages/DoInvesting'
import AlumniCheck from '@/pages/AlumniCheck'
import ProjectRencently from '@/pages/ProjectRencently'
import ProjectFavorite from '@/pages/ProjectFavorite'
import InvestHistory from '@/pages/InvestHistory'
import LoanHistory from '@/pages/LoanHistory'
import enterInvest from '@/pages/enterInvest'
import largeInvest from '@/pages/largeInvest'



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
      path: '/UserSpace',
      name: 'UserSpace',
      component: UserSpace
    },
    {
      path: '/UserSpace/NormalCheck',
      name: 'NormalCheck',
      component: NormalCheck
    },
    {
      path: '/UserSpace/FinancialStanding',
      name: 'FinancialStanding',
      component: FinancialStanding
    },
    {
      path: '/UserSpace/AlumniCheck',
      name: 'AlumniCheck',
      component: AlumniCheck
    },
    {
      path: '/UserSpace/ProjectRencently',
      name: 'ProjectRencently',
      component: ProjectRencently
    },
    {
      path: '/UserSpace/ProjectFavorite',
      name: 'ProjectFavorite',
      component: ProjectFavorite
    },
    {
      path: '/UserSpace/InvestHistory',
      name: 'InvestHistory',
      component: InvestHistory
    },
    {
      path: '/UserSpace/LoanHistory',
      name: 'LoanHistory',
      component: LoanHistory
    },
    {
      path: '/usermanage',
      name: 'usermanage',
      component: usermanage
    },
    {
      path: '/userdetail',
      name: 'userdetail',
      component: userdetail
    },
    {
      path:'/invest',
      name:'invest',
      component:invest
    },
    {
      path:'/DoInvesting',
      name:'DoInvesting',
      component:DoInvesting
    },
    {
      path:'/enterInvest',
      name:'enterInvest',
      component:enterInvest
    },
    {
      path:'/largeInvest',
      name:'largeInvest',
      component:largeInvest
    },
  ],
  mode:"history"
})
