// vuex 状态管理

//状态 this.$store.state.test.test this=实例 $store=状态对象 state=状态 test=模块 test=值
const state = {
    test: ''
}

//计算状态 用于过滤等操作
const getters = {
    plus: state => state.test,
}

//动作 actions 执行异步操作  
//我们可以将一些数据请求 放在这里 页面执行this.$store.dispatch('actionName', param)
const actions = {
    setTest({ commit, state }, param) {
        return new Promise((resolve, reject) => {
            commit('setTest', param)
            resolve(param)
        })
    },
}

//执行 执行同步操作
const mutations = {
    setTest(state, param) {
        state.test = param
    }
}

//暴露成员 实现模块化
export default {
    state,
    getters,
    actions,
    mutations
}
