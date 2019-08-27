//状态管理器
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import count from './modules/count'

export default new Vuex.Store({
    getters,
    actions,
    modules:{
        count
    }
})