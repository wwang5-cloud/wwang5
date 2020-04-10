<template>
    <div>
        全局警戒: 
        <br/>
        beforeEach: 全球警卫队
        <br/>
        afterEach: 全球决心守卫
        <br/>
        beforeEnter: 按路线防护
        <br/>
        组建内防护:
        <br/>
        beforeRouteEnter
        <br/>
        beforeRouteUpdate
        <br/>
        beforeRouteLeave  
        <br/>
        完整的导航分辨率流程
        <br/>
        导航已触发。
        <br/>
        beforeRouteLeave停用的组件中的呼叫警卫。
        <br/>
        打电话给全球beforeEach警卫队。
        <br/>
        beforeRouteUpdate重用组件中的呼叫警卫。
        <br/>
        调用beforeEnter路由配置。
        <br/>
        解决异步路由组件。
        <br/>
        调用已beforeRouteEnter激活的组件。
        <br/>
        打电话给全球beforeResolve警卫队。
        <br/>
        导航已确认。
        <br/>
        调用全局afterEach挂钩。
        <br/>
        触发DOM更新。
        <br/>
        调用回调函数传递给next在beforeRouteEnter与实例化的警卫。
        <br/>
    </div>
</template>
<script>
    export default {
        name: 'protected',
        beforeRouteEnter: (to, from, next) => {
            console.log('beforeRouteEnter.......................');
            next();
        },
        beforeRouteUpdate: (to, from, next) => {
            console.log('beforeRouteUpdate.......................');
            next();
        },
        beforeRouteLeave: (to, from, next) => {
            console.log('beforeRouteLeave........................');
            next();
        }
    }
</script>