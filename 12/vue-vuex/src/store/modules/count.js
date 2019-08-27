//私有模块   for count only

import Type from "../type";
//定义状态属性
var state = {
    count: 0
}

//定义getters -- 读取
var getters = {
    count(state){
        return state.count;
    }
}

//定义actions  --  用户行为
var actions = {
    //状态  增加
    [Type.INCREMENT]({commit, state}){
        //todo  逻辑处理
        commit(Type.INCREMENT);
    },
    [Type.DECREMENT]({commit, state}){
        if (state.count > 5) {
            commit(Type.DECREMENT);
        }
    }
}

//定义mutations, 改变数据状态
var mutations = {
    //改变数据状态
    [Type.INCREMENT](state, data) {
        state.count++;
    },
    [Type.DECREMENT](state){
        state.count--;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}