import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import ss from '@/pages/ss/ss'
import bd from '@/pages/bd/bd'
import rg from '@/pages/rg/rg'
import yc from '@/pages/yc/yc'

import $ from 'jquery'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/ss',
      name: 'ss',
      component: ss
    },
    {
      path: '/bd',
      name: 'bd',
      component: bd
    },
    {
      path: '/rg',
      name: 'rg',
      component: rg
    },
    {
      path: '/yc',
      name: 'yc',
      component: yc
    },

  ]
})
