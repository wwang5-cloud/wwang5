<template>
    <div> 
        $router.push(location, onComplete?, onAbort?)
        <br/>
        $router.replace(location, onComplete?, onAbort?) 比如用户直接访问了你的页面，但是想重定向到另一个url，又不触发其他请求，这个时候可以使用。
        <br/>
        location: 路由完整路径, 路径形式: /user/id/name {name: '', params: {}}, /user?id=;name={path:　'', query: {}}
        <br/>
        onComplete: 导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由时执行的回调函数
        <br/>
        onAbort: 导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由时执行的回调函数
        <br/>
        $router.path: 当前路径
        <br/>
        $router.fullpath: 当前路由路径
        <br/>
        $router.name: 当前路由命名名称
        <br/>
        $router.params: 当前路由传参, 只显示参数值, 不显示参数名称
        <br/>
        $router.query: 当前路由传参, 显示参数值, 显示参数名称
        <br/>
        $router.meta: 数组形式的传参
        <br/>
        $router.matched: 匹配到的路由
    </div>
</template>
<script>
    export default {
        name: 'program',
        created: function() {
            console.log(this.$route);
        }
    }
</script>