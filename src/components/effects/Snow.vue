<template>
<div class="snow_wrap">
    <div class="snow snow_1"></div>
    <div class="snow snow_2"></div>
    <div class="snow snow_3"></div>
    <div class="snow snow_4"></div>
    <div class="snow snow_5"></div>
    <div class="snow snow_6"></div>
    <div class="snow snow_7"></div>
    <div class="snow snow_8"></div>
    <div class="snow snow_9"></div>
    <div class="snow snow_10"></div>
    <div class="snow snow_11"></div>
    <div class="snow snow_12"></div>
    <div class="snow snow_13"></div>
    <div class="snow snow_14"></div>
    <div class="snow snow_15"></div>
</div>
</template>

<script>
export default{

}
</script>

<style lang="less" scoped>
* {
    padding: 0;
    margin: 0;
}
html, body {
    height: 100%;
}

/*浏览器窗口宽度*/
@windowWidth: 750;
/*雪花*/
.snow {
    &_wrap{
        position: relative;
        width: ~"@{windowWidth}px";
        height: 100%;
        overflow: hidden;
        background: rgba(14,99,69,1);
        margin: 0 auto;
    }
    /*雪花初始化大小*/
    position: absolute;
    width:20px;
    height: 20px;
    &:after{
        content: '';
        position: absolute;
        left:0;
        top:0;
        width:20px;
        height: 20px;
        background-color:#fff;
        opacity:1;
        border-radius: 100%;
        filter:blur(5px);/*此处使用css3滤镜来画雪花*/
    }
}
/*随机雪花函数*/
.snow(@n) when (@n > 0) {
    .snow_@{n}{
        /*水平方向上的位移*/
        left: ~"`Math.round(Math.random() * @{windowWidth})`px";
        /*动画运行时间8~12秒，保证雪花有不同的移动速度*/
        animation: ~"snowani_@{n} `(-Math.random() * 4 + 8).toFixed(2)`s linear infinite";
        /*动画提前出场时间，也就是垂直方向上位移*/
        animation-delay: ~"`(-Math.random() * 8 + 0.2).toFixed(2)`s";
        &:after{
        /*雪花大小随机，0.5~1.2*/
           transform: ~"scale(`(Math.random() * 0.7 + 0.5).toFixed(2)`)";
        }
    }
    @keyframes ~"snowani_@{n}" {
        0%{
            transform: translateY(0);
        }
        100%{
            /*垂直方向上高度，保证雪花有不同的移动速度*/
            transform: ~"translateY(`Math.round(Math.random() * 200 + 1600)`px)";
        }
    }
    .snow((@n - 1));
}
.snow(60);/*生成雪花的数量*/
</style>