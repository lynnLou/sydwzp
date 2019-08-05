import Vue from 'vue'
import Router from 'vue-router'
import maping from './meta.js'
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

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '0',
      component: allSite,
      meta: maping.home,
      index:0
    },
    {
      path: '/haerbin',
      name: '1',
      component: haerbin,
      meta: maping.haerbin,
      index:1
    },
    {
      path: '/qqhe',
      name: '2',
      component: qqhe,
      meta: maping.qqhe,
      index:2
    },
    {
      path: '/mdj',
      name: '3',
      component: mdj,
      meta: maping.mdj,
      index:3
    },
    {
      path: '/jms',
      name: '4',
      component: jms,
      meta: maping.jms,
      index:4
    },
    {
      path: '/dq',
      name: '5',
      component: dq,
      meta: maping.dq,
      index:5
    },
    {
      path: '/jx',
      name: '6',
      component: jx,
      meta: maping.jx,
      index:6
    },
    {
      path: '/sys',
      name: '7',
      component: sys,
      meta: maping.sys,
      index:7
    },
    {
      path: '/yc',
      name: '8',
      component: yc,
      meta: maping.yc,
      index:8
    },
    {
      path: '/qth',
      name: '9',
      component: qth,
      meta: maping.qth,
      index:9
    },
    {
      path: '/hg',
      name: '10',
      component: hg,
      meta: maping.hg,
      index:10
    },
    {
      path: '/hh',
      name: '11',
      component: hh,
      meta: maping.hh,
      index:11
    },
    {
      path: '/sh',
      name: '12',
      component: sh,
      meta: maping.sh,
      index:12
    },
    {
      path: '/dxal',
      name: '13',
      component: dxal,
      meta: maping.dxal,
      index:13
    }
  ],
});
router.beforeEach(
  (to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const areaIndex = to.name
  const isactive = areaIndex
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) {
    return next();
  }
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  }).forEach(tag => document.head.appendChild(tag));
  next();
});
export default router;

