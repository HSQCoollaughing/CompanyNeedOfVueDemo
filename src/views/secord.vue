<template>

    <div class="home">
        <van-nav-bar
            title="测试切换功能"
            left-text="返回"
            left-arrow
            right-text="切换"
            class="change"
            @click-right="changeSkin"
        ></van-nav-bar>

        <!--<div class="test" @mousedown="move">
            {{positionX}}
            {{positionY}}
        </div>*-->
         
        <div style='{width:100%;height:300px;border-bottom-style:dotted;}'>拖拽功能</div>
     
        <div  class="xuanfu" id="moveDiv"
            @mousedown="down" @touchstart="down"
            @mousemove="move" @touchmove="move"
            @mouseup="end" @touchend="end"
        >
        <div class="yuanqiu">
            {{ }}
        </div>
        </div>

        <div class="switch">
            <div>组件切换</div>
            <div style="display:flex;justify-content:center;align-items:center;">
                <component v-bind:is="componentLeft"></component>
                <component v-bind:is="componentCenter"></component>
                <component v-bind:is="componentRight"></component>
            </div>
            <div style='display:flex;justify-content:center;align-items:center;height:150px;'>
            <van-button type="primary" style="margin-right:10px;" @click="handleClickOneThree">切换1/3位置</van-button>
            <van-button type="primary" @click="handleClickTwoThree">切换2/3位置</van-button>
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
import { mapState } from 'vuex';

var componentA={
    template:`<div style="background-color:red;width:100px;height:100px;margin-right:20px;">我是 componentA</div>`
}
var componentB={
    template:`<div style="background-color:green;width:100px;height:100px;margin-right:20px;">我是 componentB</div>`
}
var componentC={
    template:`<div style="background-color:purple;width:100px;height:100px;margin-right:20px;">我是 componentC</div>`
}
export default{
    data(){
        return{
            activeIndex:2,
            positionX:0,
            positionY:0,
            flags: false,
            position: { x: 0, y: 0 },
            nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
            componentLeft:'componentA',
            componentCenter:'componentB',
            componentRight:'componentC',
       }
    },
    components:{
        CommonTabbar,
        'componentA':componentA,
        'componentB':componentB,
        'componentC':componentC
    },
    computed:mapState({
        formVisible:state=>state.home.formVisible,
    }),
    methods:{
        handleClickOneThree(){
            if(this.componentLeft === 'componentA' && this.componentRight === 'componentC'){
                this.componentLeft='componentC';
                this.componentRight='componentA';
            }else if(this.componentRight === 'componentA' && this.componentLeft === 'componentC'){
                this.componentRight='componentC';
                this.componentLeft='componentA';
            }else if(this.componentRight === 'componentB' && this.componentLeft === 'componentA'){
                this.componentRight='componentA';
                this.componentLeft='componentB';
            }else if(this.componentRight === 'componentA' && this.componentLeft === 'componentB'){
                this.componentRight='componentB';
                this.componentLeft='componentA';
            }else if(this.componentRight === 'componentB' && this.componentLeft === 'componentC'){
                this.componentRight='componentB';
                this.componentLeft='componentC';
            }
        },
        handleClickTwoThree(){
            if(this.componentCenter === 'componentB' && this.componentRight === 'componentC'){
                this.componentCenter='componentC';
                this.componentRight='componentB';
            }else if(this.componentCenter === 'componentC' && this.componentRight === 'componentB'){
                this.componentCenter='componentB';
                this.componentRight='componentC';
            }else if(this.componentCenter === 'componentB' && this.componentRight === 'componentA'){
                this.componentCenter='componentA';
                this.componentRight='componentB';
            }else if(this.componentCenter === 'componentA' && this.componentRight === 'componentB'){
                this.componentCenter='componentB';
                this.componentRight='componentA';
            }
        },
        // 实现移动端拖拽
        down(){
            this.flags = true;
            var touch;
            console.log(event.touches);
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            console.log(moveDiv);
            this.position.x = touch.clientX;
            this.position.y = touch.clientY;
            this.dx = moveDiv.offsetLeft;
            this.dy = moveDiv.offsetTop;
            console.log(this.position);
            console.log(this.dx);
            console.log(this.dy);
        },
        move(){
            if(this.flags){
                var touch ;
                if(event.touches){
                    touch = event.touches[0];
                }else {
                    touch = event;
                }
                //div移动的距离
                this.nx = touch.clientX - this.position.x;
                this.ny = touch.clientY - this.position.y;
                //元素相对的距离
                this.xPum = this.dx+this.nx;
                this.yPum = this.dy+this.ny;
                moveDiv.style.left = this.xPum+"px";
                moveDiv.style.top = this.yPum +"px";
                //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
                document.addEventListener("touchmove",function(){
                    event.preventDefault();
                },false);
            }
        },
        //鼠标释放时候的函数
        end(){
            this.flags = false;
        },
        handleChangeTabBar(e){
            if(e===0){
                this.$router.push({name:'home'})
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
        },
        movea(e){
            let odiv=e.target;//获取目标元素
            //算出鼠标相对元素的位置;
            let disX=e.clientY-odiv.offsetLeft;
            let disY=e.clientY-odiv.offsetTop;
            document.onmousemove=(e)=>{//鼠标按下并移动的事件
                //用鼠标的位置减去鼠标的相对元素的位置，得到元素的位置
                let left=e.clientX-disX;
                let right=e.clientY-disY;

                //绑定元素位置到positionX和positionY上面
                this.positionX=top;
                this.positionY=left;

                //移动当前元素
                odiv.style.left=left+'px';
                odiv.style.top=top+'px';
            }
            document.onmouseup = (e) => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },
       
    },
    mounted:function(){
            console.log(moveDiv);
            console.log("mounted");
    },
   
}
</script>

<style scoped lang="less">
@import "./../styles/color.less";
.test{
    position: relative;   /*定位*/
    top: 10px;
    left: 10px;
    width: 200px;
    height: 200px;
    background: #666;    /*设置一下背景*/
}
.switch{
    width:100%;
    height:350px;
}
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
.xuanfu {
    height: 4.5rem;
    width: 4.5rem;
    /* 如果碰到滑动问题，1.3 请检查 z-index。z-index需比web大一级*/
    z-index: 999;
    position: fixed;
    top: 2.2rem;
    right: 3.2rem;
    border-radius: 0.8rem;
    background-color: rgba(0, 0, 0, 0.55);
}
.yuanqiu {
    height: 2.7rem;
    width: 2.7rem;
    border: 0.3rem solid rgba(140, 136, 136, 0.5);
    margin: 0.65rem auto;
    color: #000000;
    font-size: 1.6rem;
    line-height: 2.7rem;
    text-align: center;
    border-radius: 100%;
    background-color: #ffffff;
 }
</style>