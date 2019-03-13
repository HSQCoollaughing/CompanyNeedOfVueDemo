import Vue from 'vue';
import Vuex from 'vuex';

import home from './home';
import secord from './secord';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced:true,

    modules:{
        home,
        secord
    },

    state:{
        isAuthentication:false,
    },
    getters:{

    },
    actions:{
        async login({commit},payload){
            if(payload.password && payload.username){
                localStorage.setItem('token','AUTHENTION');
                commit('updateState',{
                    isAuthentication:true
                })
            }else{

            }
        }
    },
    mutations:{
        updateState(state,payload){
            Object.assign(state,payload);
        }
    }
});