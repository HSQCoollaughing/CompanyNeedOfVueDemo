import Vue from 'vue';//在import Vue的过程中，Vue主要是在原型上完成方法的挂载，并且初始化了全局的API。
import App from './App.vue';//引入主VUE页面
import router from './router/index';
import "./utils/Rem";
import store from './store/global';

import './styles/reset.css' /**引入样式重置 */

Vue.config.productionTip = false;//阻止启动生产消息，常用作指令

import {Card,Dialog,Row,Col,Picker,Field,Cell,CellGroup,Button,Toast,NavBar,Tabbar,TabbarItem,List,Panel,NoticeBar,Tag,Popup} from 'vant';

Vue.use(Row).use(Col);
Vue.use(Field);
Vue.use(Cell).use(CellGroup);
Vue.use(Button);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Panel);
Vue.use(List);
Vue.use(NoticeBar);
Vue.use(Tag);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Dialog);
Vue.use(Card);

new Vue({
    el:"#root",//将渲染结果挂在这id为root的html上
    router,
    store,
    render:h=>h(App),//render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来
});