//公共的

const getters = {
    isEvenOrOdd(state){
        return state.count % 2 == 0 ? '偶数' : '奇数';
    }
}