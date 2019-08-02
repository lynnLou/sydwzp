import Vue from 'vue'
import Router from 'vue-router'
import frame from '.././components/mainBox'
import allSite from '.././pages/all-site'
import haerbin from '.././pages/haerbin'
import qqhe from '.././pages/qqhe'
import mdj from '.././pages/mdj'
import jms from '.././pages/jms'
import dq from '.././pages/dq'
import jx from '.././pages/jx'
import sys from '.././pages/sys'
import yc from '.././pages/yc'
import qth from '.././pages/qth'
import hg from '.././pages/hg'
import hh from '.././pages/hh'
import sh from '.././pages/sh'
import dxal from '.././pages/dxal'
import allSi from '.././pages/all-s'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allSite',
      component: allSite
    },
    {
      path: '/all',
      name: 'allSi',
      component: allSi
    },
    {
      path: '/haerbin',
      name: 'haerbin',
      component: haerbin
    },
    {
      path: '/qqhe',
      name: 'qqhe',
      component: qqhe
    },
    {
      path: '/mdj',
      name: 'mdj',
      component: mdj
    },
    {
      path: '/jms',
      name: 'jms',
      component: jms
    },
    {
      path: '/dq',
      name: 'dq',
      component: dq
    },
    {
      path: '/jx',
      name: 'jx',
      component: jx
    },
    {
      path: '/sys',
      name: 'sys',
      component: sys
    },
    {
      path: '/yc',
      name: 'yc',
      component: yc
    },
    {
      path: '/qth',
      name: 'qth',
      component: qth
    },
    {
      path: '/hg',
      name: 'hg',
      component: hg
    },
    {
      path: '/hh',
      name: 'hh',
      component: hh
    },
    {
      path: '/sh',
      name: 'sh',
      component: sh
    },
    {
      path: '/dxal',
      name: 'dxal',
      component: dxal
    }
  ]
})
