<template>
    <div class="home">
        <van-nav-bar
            title="测试特效功能"
            left-text="返回"
            left-arrow
            right-text="换肤"
            class="change"
        ></van-nav-bar>

        <div class="marquee">
            <div class="marquee_title">
                <span>文字向上滚动</span>
            </div>
            <div class="marquee_box">
                <ul class="marquee_list" :class="{marquee_top:animate}">
                    <li v-for="(item,index) in marqueeList" :key=index>
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>

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
            activeIndex:1,
            animate: false,
            marqueeList: [
                {name: '1吴'},
                {name: '2家'},
                {name: '3宝'},
                {name: '4是'},
                {name: '5男'},
                {name: '6神'}
            ],
        }
    },
    components:{
        CommonTabbar,    
    },
    computed:mapState({
         
    }),
    created:function(){
        setInterval(this.showMarquee,2000);
    },
    methods:{
        handleChangeTabBar(e){
            console.log(e);
            if(e===0){
                this.$router.push({name:'home'})
            }else if(e===2){
                this.$router.push({name:'secord'})
            }
        },
        showMarquee(){
            this.animate=true;
            setTimeout(()=>{
                this.marqueeList.push(this.marqueeList[0]);
                this.marqueeList.shift();
                this.animate=false;
            },500)
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
.marquee{
    width:100%;
    height:50px;
    align-items:center;
    color:#3A3A3A;
    background-color:white;
    display:flex;
    box-sizing: border-box;
    overflow:hidden;

    .marquee_title{

        padding: 0 20px;

        height: 21px;

        font-size: 14px;

        border-right: 1px solid #d8d8d8;

        align-items: center;
    }
    .marquee_box {

        display: block;

        position: relative;

        width: 60%;

        height: 30px;

        overflow: hidden;

        .marquee_list {

            display: block;

            position: absolute;

            top: 0;

            left: 0;

            li {

                height: 30px;

                line-height: 30px;

                font-size: 14px;

                padding-left: 20px;

                span {
                    padding: 0 2px;
                }

            }

        }

        .marquee_top {

            transition: all 0.5s;

            margin-top: -30px;

        }

    }
}
</style>