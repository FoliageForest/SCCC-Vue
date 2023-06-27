import Vue from 'vue'
import Router from 'vue-router'

import Directive from '@/components/Directive'
import FuZuJian from '@/components/FuZuJian'
import ShengMingZhouQi from '@/components/shengMingZhouQi'
import HelloWorld from '@/components/HelloWorld'
import JiaoCai103 from '@/components/JiaoCai103'
import JiaoCai106 from '@/components/JiaoCai106'
import JiaoCai108 from '@/components/JiaoCai108'
import JiaoCai119 from '@/components/组件通信/父组件传值给子组件/JiaoCai119'
import JiaoCai120 from '@/components/组件通信/父组件传值给子组件/JiaoCai120'
import JiaoCai122ShiLi6 from '@/components/组件通信/子组件传值给父组件/JiaoCai122ShiLi6'
import JiaoCai122ShiLi7 from '@/components/组件通信/子组件传值给父组件/JiaoCai122ShiLi7'
import JiaoCai123ShiLi8 from '@/components/组件通信/兄弟组件通信的处理方式/JiaoCai123ShiLi8'
import JiaoCai124SL9 from '@/components/组件通信/兄弟组件通信的处理方式/JiaoCai124SL9'
import JiaoCai125SL10 from '@/components/组件通信/兄弟组件通信的处理方式/JiaoCai125SL10'
import HW20230523FuZuJian from '@/components/组件通信/HW20230523FuZuJian'
import HW20230523ZiZuJian from '@/components/组件通信/HW20230523ZiZuJian'
import HW20230523T02Fu from '@/components/组件通信/HW20230523T02Fu'
import HW20230523T02Zi1 from '@/components/组件通信/HW20230523T02Zi1'
import HW20230523T02Zi2 from '@/components/组件通信/HW20230523T02Zi2'
import HW109 from '@/components/HW109'
import Lianxi from '@/components/lianxi'
import Lianxi2 from '@/components/lianxi2'
import Tiaojian from '@/components/tiaojian'
import New from '@/pages/new.vue'
import Bt from '@/pages/bt'
import Att from '@/pages/att'
import JiaoCai133 from '@/components/计算属性/JiaoCai133'
import JiaoCai134 from '@/components/计算属性/JiaoCai134'
import JiaoCai136ShiLi4 from '@/components/计算属性/JiaoCai136ShiLi4'
import JiaoCai136ShiLi5 from '@/components/计算属性/JiaoCai136ShiLi5'
import JiaoCai139 from '@/components/侦听器/JiaoCai139'
import HW20230615Home from '@/components/HW20230615Home'
import sccc_qimo_v_on from '@/components/SCCC-期末/sccc_qimo_v_on'
import sccc_qimo_v_for from '@/components/SCCC-期末/sccc_qimo_v_for'
import sccc_qimo_zichuanfu from '@/components/SCCC-期末/sccc_qimo_zichuanfu'
import sccc_qimo_ageMap from '@/components/SCCC-期末/sccc_qimo_ageMap'
import sccc_qimo_yangshi from '@/components/SCCC-期末/sccc_qimo_yangshi'

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
      path: '/sccc/2023-05-23/JiaoCai122ShiLi6',
      name: 'JiaoCai122ShiLi6',
      component: JiaoCai122ShiLi6
    }
    ,
    {
      path: '/sccc/2023-05-23/JiaoCai122ShiLi7',
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
      path: '/sccc/2023-05-23/HW20230523FuZuJian',
      name: 'HW20230523FuZuJian',
      component: HW20230523FuZuJian
    }
    ,
    {
      path: '/sccc/2023-05-23/HW20230523ZiZuJian',
      name: 'HW20230523ZiZuJian',
      component: HW20230523ZiZuJian
    }
    ,
    {
      path: '/sccc/2023-05-23/HW20230523T02Fu',
      name: 'HW20230523T02Fu',
      component: HW20230523T02Fu
    }
    ,
    {
      path: '/sccc/2023-05-23/HW20230523T02Zi1',
      name: 'HW20230523T02Zi1',
      component: HW20230523T02Zi1
    }
    ,
    {
      path: '/sccc/2023-05-23/HW20230523T02Zi2',
      name: 'HW20230523T02Zi2',
      component: HW20230523T02Zi2
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
      component: Bt
    }
    ,
    {
      path: '/sccc/2023-06-15/JiaoCai133',
      name: 'JiaoCai133',
      component: JiaoCai133
    }
    ,
    {
      path: '/sccc/2023-06-15/JiaoCai134',
      name: 'JiaoCai134',
      component: JiaoCai134
    }
    ,
    {
      path: '/sccc/2023-06-15/JiaoCai136ShiLi4',
      name: 'JiaoCai136ShiLi4',
      component: JiaoCai136ShiLi4
    }
    ,
    {
      path: '/sccc/2023-06-15/JiaoCai136ShiLi5',
      name: 'JiaoCai136ShiLi5',
      component: JiaoCai136ShiLi5
    }
    ,
    {
      path: '/sccc/2023-06-15/JiaoCai139',
      name: 'JiaoCai139',
      component: JiaoCai139
    }
    ,
    {
      path: '/sccc/2023-06-15/HW20230615Home',
      name: 'HW20230615Home',
      component: HW20230615Home
    }
    ,
    {
      path: '/sccc/qimo/v-on',
      name: 'sccc_qimo_v_on',
      component: sccc_qimo_v_on
    }
    ,
    {
      path: '/sccc/qimo/v-for',
      name: 'sccc_qimo_v_for',
      component: sccc_qimo_v_for
    }
    ,
    {
      path: '/sccc/qimo/zichuanfu',
      name: 'sccc_qimo_zichuanfu',
      component: sccc_qimo_zichuanfu
    }
    ,
    {
      path: '/sccc/qimo/ageMap',
      name: 'sccc_qimo_ageMap',
      component: sccc_qimo_ageMap
    }
    ,
    {
      path: '/sccc/qimo/yangshi',
      name: 'sccc_qimo_yangshi',
      component: sccc_qimo_yangshi
    }
  ]
})
