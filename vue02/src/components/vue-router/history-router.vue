<template>
    <div> 
        哈希模式（hash mode）

　　这是开发中的默认模式，在url中永远带着#号，在浏览器方面其支持度极佳，甚至兼容低版本的ie浏览器。说到这里就不得不说一下前端路由的原理：window是可以监听到哈希值的变化的（onhashchage事件），这就意味着：当url中的哈希值发生了变化，无需发起http请求，window也可以监听到这种变化，并按需加载前端的代码块。哈希模式也是当下单页面应用的标配,所谓前端路由的强大之处也就在这里：路由分发不需要服务器来做，前端自己就可以完成。网易云音乐的首页也是用的哈希模式：
        <br/>
        历史模式（history mode）

　　在url中不带#号，用的是传统的路由分发模式，即当用户输入一个url时，是由服务器在接受用户的这个输入请求，并由服务器解析url的路径然后做相应逻辑处理。如果要做到改变url但又不刷新页面的潮流效果，就需要前端用上pushState和replaceState两个H5的api，来把url替换的同时又不刷新页面，但需要后端人员去配置url重定向的问题，不然在访问二级页面时，做刷新操作会报404的错误。这和哈希天生就不会刷新页面的特性不同，历史模式来做这件事属于一种“障眼法”，或者说是“老技术干新活”，又废又麻烦。
    </div>
</template>
<script>
    export default {
        name: 'history'
    }
</script>