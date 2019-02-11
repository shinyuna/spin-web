import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { common } from './common'
import { advertiser } from './advertiser'

Vue.use(Router)

export default new Router({
  mode: 'history', // url 경로 에 # 제거
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    common,
    advertiser
  ]
})
