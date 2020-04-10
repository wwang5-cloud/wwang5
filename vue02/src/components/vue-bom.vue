<template>
    <div>
        在IE中：
        <br/>
        document.body.clientWidth ==> BODY对象宽度
        <br/>
        document.body.clientHeight ==> BODY对象高度
        <br/>
        document.documentElement.clientWidth ==> 可见区域宽度
        <br/>
        document.documentElement.clientHeight ==> 可见区域高度
        <br/>
        document.documentElement.scrollTop =>窗口滚动条滚动高度
        <br/>
        在FireFox中：
        <br/>
        document.body.clientWidth ==> BODY对象宽度
        <br/>
        document.body.clientHeight ==> BODY对象高度
        <br/>
        document.documentElement.clientWidth ==> 可见区域宽度
        <br/>
        document.documentElement.clientHeight ==> 可见区域高度
        <br/>
        document.documentElement.scrollTop =>窗口滚动条滚动高度
        <br/>

        在chrome中：
        document.body.clientWidth ==> BODY对象宽度
        <br/>
        document.body.clientHeight ==> BODY对象高度
        <br/>
        document.documentElement.clientWidth ==> 可见区域宽度
        <br/>
        document.documentElement.clientHeight ==> 可见区域高度
        <br/>
        document.body.scrollTop =>窗口滚动条滚动高度
        <br/>

        在Opera中：
        <br/>
        document.body.clientWidth ==> 可见区域宽度
        <br/>
        document.body.clientHeight ==> 可见区域高度
        <br/>
        document.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽）
        <br/>
        document.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高
        <br/>

        滚动到顶部 window.scrollTo(0,0)
        <br/>
        滚动到尾部 window.scrollTo(0,document.body.clientHeight)
        <br/>
    </div>
</template>
<script>
    export default {
        name: 'vue-bom'
    }
</script>
