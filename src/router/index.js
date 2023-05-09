import Vue from 'vue'
import Router from 'vue-router'

import Directive from '@/components/Directive'
import FuZuJian from '@/components/FuZuJian'
import ShengMingZhouQi from '@/components/shengMingZhouQi'
import HelloWorld from '@/components/HelloWorld'
import JiaoCai103 from '@/components/JiaoCai103'
import JiaoCai106 from '@/components/JiaoCai106'
import JiaoCai108 from '@/components/JiaoCai108'
import HW109 from '@/components/HW109'
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
      path: '/fuZuJian',
      name: 'FuZuJian',
      component: FuZuJian
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
      path: '/JiaoCai103',
      name: 'JiaoCai103',
      component: JiaoCai103
    }
    ,
    {
      path: '/JiaoCai106',
      name: 'JiaoCai106',
      component: JiaoCai106
    }
    ,
    {
      path: '/JiaoCai108',
      name: 'JiaoCai108',
      component: JiaoCai108
    }
    ,
    {
      path: '/HW109',
      name: 'HW109',
      component: HW109
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
