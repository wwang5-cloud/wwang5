<template>
    <div>
        <transition name="t1">
            <div>路由过度效果 transfer router</div>
        </transition>
    </div>
</template>
<style>
    .t1-enter{// demo元素显示动画 开始状态的效果i的css
        opacity:0;  
        color: red;
    }
    .t1-enter-acitve{//active用于添加过度时间,插入过程
        transition:all  2s;
        color: red;
    }
    .t1-leave-active{//添加过度时间，离开过程
        transition:all 2s;
        color: red;
    }     
    .t1-leave-to {//to 结束动画时，结束状态的效果
        opacity:1 ;
        color: red;
    }
</style>
<script>
    export default {
        name: 'transfer'
    }
</script>