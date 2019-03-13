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