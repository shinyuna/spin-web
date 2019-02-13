import 'es6-promise/auto' // 구형 IE 도 promise 지원 가능
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: 'https://fkj21yja89.execute-api.ap-northeast-2.amazonaws.com/Stage',
  timeout: 10000
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // router/index.js
  components: { App },
  template: '<App/>'
})
