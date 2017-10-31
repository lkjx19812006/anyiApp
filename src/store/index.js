import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test'
import routerRecord from './modules/routerRecord'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test,
    routerRecord
  }
})
