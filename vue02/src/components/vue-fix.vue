<template>
    <div style="font-weight: bolder; overflow: auto;font-family: '楷体';">
        <div class="tail">
            <span>安装vue</span>
            <span>npm install vue -g</span>
            <span>安装vue路由</span>
            <span>npm install vue-router -g</span>
        </div>
        <br/>
         <div class="tail">
            <span>安装vue/cli脚手架工具</span>
            <span>npm install vue-cli -g  </span>
            <span>vue -V看下是否成功</span>
            <span>ue init webpack 项目名称</span>
        </div>
    </div>
</template>
<style>
    .tail {

    }
    .tail span {
        background: #172a34;
        height: 33px;
        width: 200px;
        line-height: 33px;
        padding: 0 18px;
        display: block;
        border-radius: 16.5px;
        font-size: 14px;
        color: #fff;
        font-weight: 700;
        margin-right: 28px;
    }
</style>
<script>
    export default {
        name: 'VueFix',
        data: function() {
            return {};
        }
    }
</script>