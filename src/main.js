// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'

//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//路由守卫
router.beforeEach((to, from, next) => {
  store.dispatch('setGlobPathArr', { to: to, from: from })
  next()
})

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//个人一些组件相关
import './libs/anyi-ui.css' //vue扩展全局组件相关
import './libs/vueExtend.js' //vue自定义指令相关
import './libs/Vuecommon.js' //vue自定义全局组件

//筋斗云前端框架相关
//js部分已经在首页引入
import './libs/weui.min.css'
import './libs/mui.css'


//动态计算rem
import './libs/flexible'

//书写全局back方法
Vue.prototype.$back = function () {
  //删除路由
  // store.dispatch('shiftGlobPathArr').then(() => {
  //   // router.push(store.state.routerRecord.globPathArr[0])
  // })
  window.history(-1)
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: create => create(App),
})
