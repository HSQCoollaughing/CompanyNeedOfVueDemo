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