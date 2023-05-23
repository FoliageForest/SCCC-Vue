import Vue from 'vue'
import Router from 'vue-router'

import Directive from '@/components/Directive'
import FuZuJian from '@/components/FuZuJian'
import ShengMingZhouQi from '@/components/shengMingZhouQi'
import HelloWorld from '@/components/HelloWorld'
import JiaoCai103 from '@/components/JiaoCai103'
import JiaoCai106 from '@/components/JiaoCai106'
import JiaoCai108 from '@/components/JiaoCai108'
import JiaoCai119 from '@/components/JiaoCai119'
import JiaoCai120 from '@/components/JiaoCai120'
import JiaoCai122ShiLi6 from '@/components/JiaoCai122ShiLi6'
import JiaoCai122ShiLi7 from '@/components/JiaoCai122ShiLi7'
import JiaoCai123ShiLi8 from '@/components/组件通信/兄弟组件通信的处理方式/JiaoCai123ShiLi8'
import JiaoCai124SL9 from '@/components/组件通信/兄弟组件通信的处理方式/JiaoCai124SL9'
import JiaoCai125SL10 from '@/components/组件通信/兄弟组件通信的处理方式/JiaoCai125SL10'
import HW20230523FuZuJian from '@/components/HW20230523FuZuJian'
import HW20230523ZiZuJian from '@/components/HW20230523ZiZuJian'
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
      path: '/JiaoCai119',
      name: 'JiaoCai119',
      component: JiaoCai119
    }
    ,
    {
      path: '/JiaoCai120',
      name: 'JiaoCai120',
      component: JiaoCai120
    }
    ,
    {
      path: '/JiaoCai122ShiLi6',
      name: 'JiaoCai122ShiLi6',
      component: JiaoCai122ShiLi6
    }
    ,
    {
      path: '/JiaoCai122ShiLi7',
      name: 'JiaoCai122ShiLi7',
      component: JiaoCai122ShiLi7
    }
    ,
    {
      path: '/sccc/2023-05-23/JiaoCai123ShiLi8',
      name: 'JiaoCai123ShiLi8',
      component: JiaoCai123ShiLi8
    }
    ,
    {
      path: '/sccc/2023-05-23/JiaoCai124SL9',
      name: 'JiaoCai124SL9',
      component: JiaoCai124SL9
    }
    ,
    {
      path: '/sccc/2023-05-23/JiaoCai125SL10',
      name: 'JiaoCai125SL10',
      component: JiaoCai125SL10
    }
    ,
    {
      path: '/HW20230523FuZuJian',
      name: 'HW20230523FuZuJian',
      component: HW20230523FuZuJian
    }
    ,
    {
      path: '/HW20230523ZiZuJian',
      name: 'HW20230523ZiZuJian',
      component: HW20230523ZiZuJian
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
