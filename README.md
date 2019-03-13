>Created By **JishuBao** on **2019-03-11 12:38:22**  
>Recently revised in **2019-03-13 12:38:22**

&nbsp;

　　**欢迎大家来到技术宝的掘金世界,您的star是我写文章最大的动力！[GitHub地址](https://github.com/WJB3/CompanyNeedOfVueDemo)**
　　
&nbsp;
<br />
　　这是一篇使用vue+vant+vuex+vue-router实现公司需求的文章，会详细的介绍每个插件的作用等...
　　<br />
　  　感觉不错的小伙伴，点赞star走一波;
　  <br />
　  　感觉文章有误的小伙伴，评论区、[QQ群](http://qm.qq.com/cgi-bin/qm/qr?k=BhM60jsO8NjCWBAVkUKJmAcjTy6iJLyY)走一波；
　  <br />
　  　虚心求教，不胜感激~

开篇题外话：

&emsp;由于技术宝刚到公司，人生地不熟，正式项目还没有启动，暂时负责修改样式，解决同事遇到的技术小bug...，但是今天我接到了我的直接领导给我安排的任务，心情异常激动，说是让准备以下几个功能：

**开篇点题:**
　　

&emsp;**1.换肤**

&emsp;**2.动效**

&emsp;**3.div换位置(动态换)(手动换)**

&emsp;今天就来带领大家来跟技术宝一起来学习下这些内容！

# 一、项目搭建
&emsp;首先开始页面的开发，了解前端的人都知道，没有项目怎么开始写页面呢？所以我们接下来的任务就是搭建项目！首先将上次我们用webpack4搭建的Vue项目搭建起来，这里我给大家准备了**Github地址[Webpack4OfVue](https://github.com/WJB3/Webpack4OfVueStage)**,大家记得给我点个star哦，不胜感激！

## 1.下载项目
&emsp;和使用Npm一样，我们首先确保自己电脑上安装了**node**,确定可以执行git相关的命令，首先**git clone**项目到本地，如下图：

![](https://user-gold-cdn.xitu.io/2019/3/11/1696aa624215d437?w=653&h=218&f=png&s=23952)

## 2.跑起来
&emsp;和正常的vue/react项目一样，在文件下执行 **yarn install/npm install && yarn start/npm start** 运行项目并打开[http://localhost:10000](http://localhost:10000)即可看到
```js
$ yarn install
yarn install v1.7.0
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.7: The platform "win32" is incompatible with this module.
info "fsevents@1.2.7" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning " > less-loader@4.1.0" has unmet peer dependency "less@^2.3.1 || ^3.0.0".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 123.95s.
```
```js
$ yarn start
yarn run v1.7.0
$ cross-env webpack-dev-server --config build/webpack.dev.conf.js
 98% after emitting DONE  Compiled successfully in 3639ms10:43:15

 I  You application is running here http://localhost:10000

 N  Some additionnal notes to be displayed unpon successful compilation
```

![](https://user-gold-cdn.xitu.io/2019/3/11/1696aad29bd7e0b4?w=1315&h=848&f=png&s=85002)

## 3.安装demo所需依赖
&emsp;由于此次demo的开发需要依赖于**Vant+Vuex+Vue-router+less**,所以我们要安装所需的依赖！

&emsp;执行命令：
```js
yarn add vuex vue-router vant
```
&emsp;安装所需依赖完毕！
```js
yarn add v1.7.0
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.7: The platform "win32" is incompatible with this module.
info "fsevents@1.2.7" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning " > less-loader@4.1.0" has unmet peer dependency "less@^2.3.1 || ^3.0.0".
[4/4] Building fresh packages...

success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.13.0", while you're on "1.7.0".
info To upgrade, run the following command:
$ curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
success Saved 7 new dependencies.
info Direct dependencies
├─ vant@1.5.9
├─ vue-router@3.0.2
└─ vuex@3.1.0
info All dependencies
├─ @babel/runtime@7.3.4
├─ @vant/icons@1.0.8
├─ @vue/babel-helper-vue-jsx-merge-props@1.0.0-beta.2
├─ vant@1.5.9
├─ vue-lazyload@1.2.3
├─ vue-router@3.0.2
└─ vuex@3.1.0
Done in 24.50s.
```


# 二、项目页面编写
&emsp;在上一节中我们搭建好了基本的开发环境，接下来就带大家编写基本的页面，由于样式不在此篇文章的考虑范围之内，所以我们直接采用**vant的ui**框架进行页面的搭建！
## 1.新建模糊页面login、home、secord
&emsp;本文是移动端的一个编写，所以我们采用**有赞的vant**来编写项目，在src文件夹下新建一个views文件夹，再在views文件夹下新建几个基本页面内容如下：
```js
<template>
    <div class="container">login</div>
</template>

<script>
export default{
    
}
</script>

<style>
.container{
    background-color:skyblue;
    font-size:20px;
}
</style>
//login.vue文件内容
```
```js
<template>
    <div class="container">home</div>
</template>

<script>
export default{
    
}
</script>

<style>
.container{
    background-color:skyblue;
    font-size:20px;
}
</style>
//home.vue文件内容
```
```js
<template>
    <div class="container">secord</div>
</template>

<script>
export default{
    
}
</script>

<style>
.container{
    background-color:skyblue;
    font-size:20px;
}
</style>
//secord.vue内容
```
**项目骨架如下图**

![](https://user-gold-cdn.xitu.io/2019/3/11/1696ad50eb0ba2bb?w=215&h=756&f=png&s=37136)

## 2.新建路由配置文件

&emsp;在src文件夹下新建router文件夹,文件夹下新建index.js文件当作路由配置文件
```js
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './../views/home';
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
            }//  /路径下如果持久化存储localStorage下有token并且global.js下的Authentication(是否登陆)为true/false,如果登陆跳转到Home页面，没有的话,就跳转到用户登陆页面。
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
//index.js文件内容如上！
```

## 3.小试牛刀
```js
import Vue from 'vue';//在import Vue的过程中，Vue主要是在原型上完成方法的挂载，并且初始化了全局的API。
import App from './App.vue';//引入主VUE页面
import router from './router/index';

import './styles/reset.css' /**引入样式重置 */

Vue.config.productionTip = false;//阻止启动生产消息，常用作指令

new Vue({
    el:"#root",//将渲染结果挂在这id为root的html上
    router,
    render:h=>h(App),//render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来
});
//index.js文件内容如上！
```
**在src文件夹下的index.js下引入路由配置文件，如上代码所示**

**同时修改app.vue（根vue页面）的template标签**
```js
<template>
    <div id="app">
        <router-view />
    </div>
</template>
```

**运行项目你会发现通过对应路径已经有页面展示出来**

![](https://user-gold-cdn.xitu.io/2019/3/11/1696ae2772ada277?w=719&h=510&f=png&s=37439)

![](https://user-gold-cdn.xitu.io/2019/3/11/1696ae2c0513e0a8?w=939&h=510&f=png&s=42733)

![](https://user-gold-cdn.xitu.io/2019/3/11/1696ae32e7d6c333?w=939&h=510&f=png&s=43998)

## 4.rem实现手机端自适应
&emsp;因为本文是基于手机端的小demo，所以需要实现手机端屏幕大小自适应！

&emsp;**rem布局的本质是等比缩放，rem是根据根font-size的大小设置的**

&emsp;在src文件夹下新建utils，用来存放**工具类函数等...**

&emsp;在utils文件夹下新建**Rem.js**
```js
const baseSize=32;

function setRem(){
    const htmlWidth=document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom=document.getElementsByTagName('html')[0];
    //设置页面根节点字体大小
    htmlDom.style.fontSize=htmlWidth/10+'px';
}

setRem();
//Rem.js内容如上
```
然后在src文件夹的index.js文件中新增rem设置，即引入
```js
import './styles/reset.css' /**引入样式重置 */
```
因为暂时没有在less中发现和scss中类似的写法，故在scss定义一个px转化为rem的方法,在styles文件夹新建common.scss，需要时引入就行
```js
@function pxToRem($px){
    @return $px/20px*1rem;
}
//common.scss内容如下
```

## 5.在项目中引入vuex
&emsp;虽然咱们只有几个页面，完全没必要引入**vuex**，使项目看起来变得很复杂，但是这不是为了让大家熟悉**vuex**嘛，知道如何在项目中使用，首先在src选新建store文件夹，暂且定义三个文件,**global.js**存放与全局相关的状态，**home.js**存放home页面相关的状态,**secord.js**存放secord页面相关的状态。
```js
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
        isAuthentication:false,//是否有权限，是否登陆
    },
    getters:{

    },
    actions:{

    },
    mutations:{
        updateState(state,payload){
            Object.assign(state,payload);
        }
    }
});
//global.js文件内容如上
```
```js
export default {

    namespaced:true,

    state:{

    },
    getters:{

    },
    actions:{

    },
    mutations:{
        updateState(state,paylaod){
            Object.assign(state,payload);
        }
    }

}
//home.js内容如上
```
```js
export default {

    namespaced:true,

    state:{

    },
    getters:{

    },
    actions:{

    },
    mutations:{
        updateState(state,paylaod){
            Object.assign(state,payload);
        }
    }

}
//secord.js内容如上
```

**文件写好后可以在index.js里面引入相关的文件使之初始化**
```js
import store from './store/global';

new Vue({
    el:"#root",//将渲染结果挂在这id为root的html上
    router,
    store,//加载vuex
    render:h=>h(App),//render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来
});
```

**vuex核心概念**

**1.namespaced**：也就是标识符，指明在哪个模块之后，vuex中的store分模块管理，需要在store的index.js中引入各个模块，为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名。

**2.modules**:Modules:将store分割成不同的模块。

**3.state**:包含所有应用级别状态的对象。

**4.getters**： vuex 中的getters 想当于vue中的computed  ，getters是vuex 中的计算属性 ，计算属性写起来是方法，但它是个属性。

**5.actions**:包含异步操作、提交mutaions改变状态。

**6.mutations**:唯一修改状态的事件的回调函数。

**因为我们暂时没有进行业务模块的开发，所以暂时没有定义很多状态等...**

## 6.登陆页面login.vue的布局样式编写
&emsp;在阅读了[Vant](https://youzan.github.io/vant/#/zh-CN/quickstart)的官网后，我们需要现在public文件夹下的index.html文件的head标签内部引入vant样式！
```js
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vant@1.6/lib/index.css">
```
&emsp;在项目中引入**babel-plugin-import**
```js
PS E:\MyProject\Webpack4OfVueStage> yarn add babel-plugin-import -D
yarn add v1.7.0
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.7: The platform "win32" is incompatible with this module.
info "fsevents@1.2.7" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning " > less-loader@4.1.0" has unmet peer dependency "less@^2.3.1 || ^3.0.0".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ babel-plugin-import@1.11.0
info All dependencies
└─ babel-plugin-import@1.11.0
Done in 7.72s.
```
**因为项目中使用的是babel7,所以新建babel.config.js**
```js
//在编译过程中将import的写法自动转换为按需引入的方式
module.exports={
    plugins:[
        [
            'import',{
                libraryName:'vant',
                libraryDirectory:'es',
                style:true
            },'vant'
        ]
    ]
}
```
**在index.js文件里面引入所需的大部分组件**
```js
import {Dialog,Row,Col,Picker,Field,Cell,CellGroup,Button,Toast,NavBar,Tabbar,TabbarItem,List,Panel,NoticeBar,Tag,Popup} from 'vant';

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
Vue.use(CircleButton);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Dialog);
```
```js
<template>
    <div class="change" >
        <div style="width:100%;height:150px;"></div>
        <div style="margin-top:20px">
        <van-row type="flex" justify="center">
            <van-col span="20">
                <van-cell-group style="border-radius:10px;">
                    <van-field 
                        v-model="username"
                        required 
                        clearable
                        label="用户名"
                        icon="question"
                        placeholder="请输入用户名"
                        
                    />

                    <van-field 
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required 
                        v-on:keyup.13="handleLogin"
                    />    
                </van-cell-group>
            </van-col>
        </van-row>
        </div>
        <div style="margin-top:180px">
        <van-row type="flex" justify="center">
            <van-col span="18">
                <van-button type="primary" size="large" @click="handleLogin">确定</van-button>
            </van-col>
        </van-row>
        </div>
         
    </div>
</template>

<script>
    
    import { mapState } from 'vuex';
    export default{
        data(){
            return{
                password:'',
                username:'',
            }
        },
        computed:{
            ...mapState({
                isAuthentication:state=>state.isAuthentication,
            })
        },
        methods:{
            handleLogin(){
                if(!this.username || !this.password){
                    this.$toast({
                        message:'请将信息填写完整'
                    });
                }else{
                    this.$store.dispatch('login',{
                        password:this.password,
                        username:this.username,
                    });
                    this.$router.push({name:'home'})
                }   
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./../styles/color.less";
    .change{
        width:100%;
        height:100%;
        z-index:2;
        position:absolute;
        top:0;
        bottom:0;
    }
    
</style>
//以上为login.vue的内容(只关注样式部分，逻辑部分可以暂时忽略)
```
**效果图如下(很丑，粗略设计)：**
![](https://user-gold-cdn.xitu.io/2019/3/11/1696bd7e76238623?w=413&h=736&f=png&s=13899)

&emsp;接下来我就通过**login.vue**文件带领大家领略vuex的用法
```js
<van-col span="18">
    <van-button type="primary" size="large" @click="handleLogin">确定</van-button>
</van-col>
```
&emsp;通过vue的**@click**绑定一个点击事件**handleLogin**,在**methods**里面定义一个方法**handleLogin**
```js
handleLogin(){
                if(!this.username || !this.password){
                    this.$toast({
                        message:'请将信息填写完整'
                    });
                }else{
                    this.$store.dispatch('login',{
                        password:this.password,
                        username:this.username,
                    });
                    this.$router.push({name:'home'})
                }   
}
```
&emsp;输入框输入账号密码,通过**v-model**指令将输入框的内容与**data**里面定义的**username**和**password**绑定,当账号为空或者密码为空时,调用**vant**的**toast**(弹出框:将信息填写完整),当账号密码都不为空时,通过**this.$store.dispatch**请求**login**方法,值得注意的是**dispatch**触发的是**vuex**模块的**actions(常用于异步操作)**,让我们看看**global**的**actions**中的**login**方法,**localStorage**是一种浏览器存储数据的方式。
```js
 async login({commit},payload){
            if(payload.password && payload.username){
                localStorage.setItem('token','AUTHENTION');
                commit('updateState',{
                    isAuthentication:true
                })
            }else{

            }
}
```
&emsp;当账号密码存在时,**commit**触发**updateState**方法,值得注意的是**commit**提交触发的是**mutations**方法:
```js
updateState(state,payload){
            Object.assign(state,payload);
}
```
&emsp;**Object.assign()方法用于将多个对象合并为一个对象**,上面的updateState方法可以将isAuthentication设置为true。
```js
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
//global.js完整代码
```

## 7.home页面(换肤)的编写
&emsp;由上面的**login.vue**所写,当填写账号密码后：
```js
this.$router.push({name:'home'})
```
&emsp;这是vue-router的方法,目的是**跳转到home页面**,此时url为**home**。

&emsp;话不多说,先把代码展示出来,再展示逻辑部分。
```js
<template>
    <div class="home">
        <van-nav-bar
            title="测试换肤功能"
            left-text="返回"
            left-arrow
            right-text="换肤"
            class="change"
            @click-right="changeSkin"
        ></van-nav-bar>

        <van-card
            num="2"
            price="2.00"
            desc="描述信息"  
            title="商品标题"
            :thumb="imageUrl"
        />
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"  
            title="商品标题"
            :thumb="imageUrl"
        />
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"  
            title="商品标题"
            :thumb="imageUrl"
        />
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"  
            title="商品标题"
            :thumb="imageUrl"
        />
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"  
            title="商品标题"
            :thumb="imageUrl"
        />

        <van-popup v-model="formVisible" position="bottom">
            <van-picker 
                show-toolbar
                title="请选择皮肤"
                @cancel="handleCancelSelect"
                @confirm="handleSubmitSelect"
                :columns="columns"  
            />
        </van-popup>

        <common-tabbar 
            :activeIndex="activeIndex"
            v-on:onChange="handleChangeTabBar" 
        />
    </div>
</template>

<script>

import CommonTabbar from './../components/common/Tabbar.vue';
import SkinTypeEnum from './../enum/SkinTypeEnum';
import { mapState } from 'vuex';

export default{
    data(){
        return{
            show:true,
            activeIndex:0,
            imageUrl:'http://img5.mtime.cn/CMS/News/2019/03/11/091140.35777532_620X620.jpg',
            columns: [`少女粉`,
                    `天空蓝`, 
                    `茄子紫`, 
                    `清新绿`,
                    `警告色`,
                    `危险红`
            ]
        }
    },
    components:{
        CommonTabbar
    },
    computed:mapState({
        formVisible:state=>state.home.formVisible,
    }),
    methods:{
        handleChangeTabBar(e){
            console.log(e);
            if(e===2){
                this.$router.push({name:'secord'})
            }else if(e===1){
                this.$router.push({name:'effects'})
            }
        },
        changeSkin(){//点击换肤弹出皮肤选择框
            this.$store.commit('home/updateState',{
                formVisible:true
            })
        },
        handleCancelSelect(){//点击取消
            this.$store.commit('home/updateState',{
                formVisible:false,
            })
        },
        handleSubmitSelect(value,index){//点击确定
            let colorValue=SkinTypeEnum.getThemeValue(value);
            document.getElementById('app').className=`${colorValue}Theme`;
            this.$store.commit('home/updateState',{
                formVisible:false,
            });
            localStorage.setItem('app_theme',document.getElementById('app').className)
        }
    }
}
</script>

<style scoped lang="less">
@import "./../styles/color.less";
.change{
     /deep/.van-icon .van-icon-arrow-left .van-nav-bar__arrow{
         color:white;
     }
     /deep/.van-nav-bar__text{
         color:white;
     }
     /deep/.van-nav-bar__title{
         color:white;
     }
}
</style>
//home.vue的内容
```
&emsp;**其中我们自定义了一个组件tabbar，因为组件中每个页面都用到了这个组件,所以我们把它抽象成一个组件,这样我们就不需要重复写代码了,每个页面直接引用就可以了,当然页面也不是很多,我们完全可以每个页面都写一个，但是这不是为了让大家都了解组件的用法嘛！！！**

&emsp;新建**components**文件夹,在components文件夹下新建**common**文件夹,在**common**文件夹下新建**Tabbar.vue**文件。
```js
<template>
    <van-tabbar v-model="activeIndexData" class="change" @change="handleChangeTabBar">
        <van-tabbar-item>
                <span>换肤</span>
                <i slot="icon" class="iconfont iconhuanfu" style="{fontSize:'20px',color:'white'}"></i>
        </van-tabbar-item>
        <van-tabbar-item>
                <span>动效</span>
                <i slot="icon" class="iconfont iconxiaoguo" style="{fontSize:'20px'}"></i>
        </van-tabbar-item>
        <van-tabbar-item>
                <span>切换</span>
                <i slot="icon" class="iconfont iconqiehuan" style="{fontSize:'20px'}"></i>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default{
    data(){
        let me=this;
        return{
            activeIndexData:me.activeIndex,
        }
    },
    methods:{
        handleChangeTabBar(e){
            this.$emit('onChange',e)
        }
    },
    props:{
        activeIndex:{
            type:Number,
            default:0,
        },
    },
}
</script>

<style lang="less">
@import "./../../styles/color.less";
.change{
    /deep/.van-tabbar-item{
        color:white;
    }
    /deep/.van-tabbar-item--active{
        color:#1989fa;
    }
}

</style>
//tabbar.vue的内容
```
&emsp;其中**props**定义的是父组件传来的值,类型是**number**，默认值是0。

&emsp;**引入组件并注册组件**

```js
 components:{
        CommonTabbar
},
```

&emsp;**computed**中可以获取vuex **home**模块定义的state
```js
computed:mapState({
        formVisible:state=>state.home.formVisible,
}),
```
&emsp;当点击换肤的时候,触发**changeSkin**方法：
```js
changeSkin(){//点击换肤弹出皮肤选择框
            this.$store.commit('home/updateState',{
                formVisible:true
            })
},
```
&emsp;触发**commit**,即**home**模块里面的**mutations**里面的**updateState**方法,使**formVisible设置为true**,formVisible与**v-model**绑定,通过**true/false**来控制**popup显示/隐藏。**

&emsp;点击换肤让popup弹窗**显示**出来，popup里面有picker的column绑定了columns,即各种皮肤颜色。

```js
<van-popup v-model="formVisible" position="bottom">
            <van-picker 
                show-toolbar
                title="请选择皮肤"
                @cancel="handleCancelSelect"
                @confirm="handleSubmitSelect"
                :columns="columns"  
            />
</van-popup>
```

&emsp;当点击取消时设置**formVisible**为false时,弹框即消失。

&emsp;当点击确定选择颜色时,触发**handleSubmitSelect**方法,此时我再此介绍一个枚举类形式的函数,此函数的目的是通过一个英文值含义或者中文值含义来返回对应的值。
```js
function getThemeValue(value){

    console.log('a');

    if(!value){
        return '';
    }

    if(value === "少女粉"){
        return 'girl';
    }

    if(value === "天空蓝"){
        return 'blue';
    }

    if(value === "茄子紫"){
        return 'purple';
    }

    if(value === '清新绿'){
        return 'green';
    }

    if(value === '警告色'){
        return 'warning';
    }

    if(value === '危险红'){
        return 'danger';
    }

}

export default {
    getThemeValue,
}
//SkinTypeEnum.js定义
```
&emsp;直接引入调用,把中文值转化为对应的英文。
```js
handleSubmitSelect(value,index){//点击确定
            let colorValue=SkinTypeEnum.getThemeValue(value);
            document.getElementById('app').className=`${colorValue}Theme`;
            this.$store.commit('home/updateState',{
                formVisible:false,
            });
            localStorage.setItem('app_theme',document.getElementById('app').className)
}
//改变肤色的重要方法
```
**接下来就是整个功能的重中之重了！！请祥听**

## 8.编写less文件实现换肤

### 1.在styles文件夹下新建theme.less
```js
.theme(@background){
    .change{
        background-color:@background;
    }
}
//theme.less内容
```

### 2.在styles文件夹下新建color.less
```js
@import "./theme.less";

@girlPink:#FC9F9F;//少女粉
@skyBlue:#1890FF;//天空蓝
@eggplantPurple:purple;//茄子紫
@freshGreen:#09C160;//清新绿
@warningColor:#FF976A;
@dangerRed:#FF4D4F;//危险红


.girlTheme{
    .theme(@girlPink);
}
.blueTheme{
    .theme(@skyBlue);
}
.purpleTheme{
    .theme(@eggplantPurple);
}
.greenTheme{
    .theme(@freshGreen);
}
.warningTheme{
    .theme(@warningColor);
}
.dangerTheme{
    .theme(@dangerRed);
}
//color.less内容
```

**熟悉Less的小伙伴们应该看到以后就大致明白了,通过color.less引入theme.less,可以使change类名下的背景颜色改为相对应类目不一样的颜色**

### 3.在需要改变肤色的页面引入color.less，并将需要修改的div类目设置为change
&emsp;因为我们的项目是单页(SPA)应用,所有的vue页面都是在根div下，所以**设置根目录下的class类名就可以改变vue页面class类名**为**change**的div背景色。所以我们把**想要更换div背景色套上change类名**就行了！其实我们之前写的页面都已经套上change了哦！不知道大家有没有发现！

### 4.持久化改变肤色
&emsp;其实这里还是有一个Bug的,就是每当重启服务浏览器的时候，所有的类名初始化,之前的颜色将会消失,所以我们这里将皮肤主题保存进localStorage(如果不手动清楚浏览器缓存，它就始终不会消失!)
```js
localStorage.setItem('app_theme',document.getElementById('app').className)
```
**在根vue app.vue里面的生命周期函数中设置存下来的肤色，一切万事OK!**
```js
<template>
    <div id="app">
 
        <router-view />
   
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'webpack4搭建react环境基本完成，是不是很简单呢'
        }
    },
    mounted:function(){
        let theme=localStorage.getItem('app_theme');
        document.getElementById('app').className=theme;
    }
}
</script>
```
**大致效果就如下图所示,下一个需求是动态更改div位置,希望大家可以期待哦！**

![](https://user-gold-cdn.xitu.io/2019/3/13/1697595d987ae2e5?w=413&h=732&f=gif&s=1422316)

&emsp;**如果你觉得我的文章还不错的话，可以给个star哦~，[GitHub地址](https://github.com/WJB3/CompanyNeedOfVueDemo)**






