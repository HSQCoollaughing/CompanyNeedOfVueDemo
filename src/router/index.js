import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './../views/home';
import Effects from './../views/effects'
import Secord from './../views/secord';
import UserLogin from './../views/login';

import globalStore from './../store/global';

Vue.use(VueRouter);

const router=new VueRouter({
    routes:[
        {
            path:'/',
            redirect:to=>{
                if(localStorage.getItem('token') && globalStore.state.isAuthentication){
                    return {path:'/home'}
                }else{
                    return {path:'/user/login'}
                }
            }
        },
        {
            path:'/user/login',
            name:'userlogin',
            component:UserLogin
        },
        {
            path:'/effects',
            name:'effects',
            component:Effects,
        },
        {
            path:'/home',
            name:'home',
            component:Home,
        },
        {
            path:'/secord',
            name:'secord',
            component:Secord
        }
    ]
});

export default router;