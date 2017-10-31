//记录全局路由跳转记录
const state = {
    globPathArr: []
}

//计算状态 用于过滤等操作
const getters = {
    globPathArr: state => state.globPathArr,
}

//动作 actions 执行异步操作  
//我们可以将一些数据请求 放在这里 页面执行this.$store.dispatch('actionName', param)
const actions = {
    setGlobPathArr({ commit, state }, param) {
        return new Promise((resolve, reject) => {
            commit('setGlobPathArr', param)
            resolve(param)
        })
    },
    shiftGlobPathArr({ commit, state }, param) {
        return new Promise((resolve, reject) => {
            commit('shiftGlobPathArr', param)
            resolve(param)
        })
    },
}

//执行 执行同步操作
const mutations = {
    setGlobPathArr(state, param) {
        //ES6 去重以及转换成数组
        var globPathArr = state.globPathArr
        console.log(globPathArr)
        if (state.globPathArr.length > 1) {
            globPathArr = Array.from(new Set(state.globPathArr));
        }
        var arr = [];
        var flag = false;
        for (var i = 0; i < globPathArr.length; i++) {
            if (param.to.path !== globPathArr[i] && globPathArr[i] !== '/login') {
                arr.unshift(globPathArr[i])
            } else if (param.to.path === '/login') {
                flag = true;
            } else if (param.to.path === '/') {
                //跳转到首页 清空路由
                state.globPathArr = [param.to.path];
                return;
            }
        }
        if (!flag) {
            // 添加目的路由 
            arr.unshift(param.to.path);
        }
        state.globPathArr = arr
    },
    //从头开始删除
    shiftGlobPathArr(state) {
        if (state.globPathArr.length > 1) {
            state.globPathArr.shift(0);
        }
    }
}

//暴露成员 实现模块化
export default {
    state,
    getters,
    actions,
    mutations
}
