//状态管理器
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义状态属性
var state = {
    count: 0
}

//定义getters -- 读取
var getters = {
    count(state){
        return state.count;
    },
    isEvenOrOdd(state){
        return state.count % 2 == 0 ? '偶数' : '奇数';
    }
}

//定义actions  --  用户行为
var actions = {
    //状态  增加
    increment({commit, state}){
        //todo  逻辑处理
        commit('increment');
    },
    decrement({commit, state}){
        if (state.count > 5) {
            commit('decrement');
        }
    },
    incrementAsync({commit, state}) {
        var p = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve();
            }, 3000)
        })
        p.then(()=>{
            commit('increment');
        }).catch(err => {
            console.log(err);
        })
    }
}

//定义mutations, 改变数据状态
var mutations = {
    //改变数据状态
    increment(state, data) {
        state.count++;
    },
    decrement(state){
        state.count--;
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store