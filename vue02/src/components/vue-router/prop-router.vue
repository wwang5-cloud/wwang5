<template>
    <div> {{id}} {{name}}   <br/> boolean模式 true/false
    <br/>
    对象模式 函数自定义逻辑模式
    <br/>
    功能模式  属性模式</div>
</template>
<script>
    export default {
        props: {
            id: String,
            name: String
        },
        name: 'prop'
    }
</script>