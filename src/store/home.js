export default {

    namespaced:true,

    state:{
        formVisible:false,
    },
    getters:{

    },
    actions:{

    },
    mutations:{
        updateState(state,payload){
            console.log(payload);
            console.log(state);
            Object.assign(state,payload);
        }
    }

}