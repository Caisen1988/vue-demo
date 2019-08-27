//公共的

import Type from './type'

const actions = {
    incrementAsync({commit, state}) {
        var p = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve();
            }, 3000)
        })
        p.then(()=>{
            commit(Type.INCREMENT);
        }).catch(err => {
            console.log(err);
        })
    }
}