import Vue from 'vue'
import Router from 'vue-router'

import Directive from '@/components/Directive'
import ShengMingZhouQi from '@/components/shengMingZhouQi'
import HelloWorld from '@/components/HelloWorld'
import Lianxi from '@/components/lianxi'
import Lianxi2 from '@/components/lianxi2'
import Tiaojian from '@/components/tiaojian'
import New from '@/pages/new.vue'
import Bt from '@/pages/bt'
import Att from '@/pages/att'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Directive',
      name: 'Directive',
      component: Directive
    }
    ,
    {
      path: '/ShengMingZhouQi',
      name: 'ShengMingZhouQi',
      component: ShengMingZhouQi
    }
    ,
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,
    {
      path: '/lianxi',
      name: 'Lianxi',
      component: Lianxi
    }
    ,
    {
      path: '/lianxi2',
      name: 'Lianxi2',
      component: Lianxi2
    }
    ,
    {
      path: '/tiaojian',
      name: 'Tiaojian',
      component: Tiaojian
    }
    ,
    {
      path: '/new',
      name: 'new',
      component: New
    }
    ,
    {
      path: '/att',
      name: 'Att',
      component: Att
    }
    ,
    {
      path: '/bt',
      name: 'Bt',
      component:Bt
    }
  ]
})
