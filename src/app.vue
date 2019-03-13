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

<style scoped lang="less">
@import "./styles/color.less";
.container{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    color:red;
    box-shadow:5px 5px 5px 5px;
}
</style>