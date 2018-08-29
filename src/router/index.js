import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/pages/homepage'
import login from '@/pages/login'
import enterLoan from '@/pages/enterLoan'
import checkMyLoan from '@/pages/checkMyLoan'
import loan from '@/pages/loan'
import repay from '@/pages/repay'
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
import EnterVerify from '@/pages/EnterVerify'
import userverify from '@/pages/userverify'
import targetverify from '@/pages/targetverify'
import smalltargetcheck from '@/pages/smalltargetcheck'
import largetargetcheck from '@/pages/largetargetcheck'
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
      path: '/enterLoan',
      name: 'enterLoan',
      component: enterLoan
    },
    {
      path: '/checkMyLoan',
      name: '/checkMyloan',
      component: checkMyLoan
    },
    {
      path: '/loan',
      name: 'loan',
      component: loan
    },
    {
      path: '/repay',
      name: 'repay',
      component: repay
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
      path:'/EnterVerify',
      name:'EnterVerify',
      component:EnterVerify
    },
    {
      path:'/userverify',
      name:'userverify',
      component:userverify
    },
    {
      path:'/targetverify',
      name:'tergetverify',
      component:targetverify
    },{
      path:'/smalltargetcheck',
      name:'smalltargetcheck',
      component:smalltargetcheck
    },
    {
      path:'/largetargetcheck',
      name:'largetargetcheck',
      component:largetargetcheck
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
