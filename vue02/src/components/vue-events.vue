<template>
    <div class="body">
        vue事件绑定方式: 1.@click="事件名称" &nbsp;&nbsp; 2.v-on:click="事件名称"
        <br/>
        事件分为捕获型和冒泡型
        <br/>
        &nbsp;&nbsp;捕获型: 事件从根元素向子元素捕获
        <br/>
        &nbsp;&nbsp;冒泡型: 事件从子元素向父元素冒泡
        <br/>
        .stop: 阻止事件冒泡或者捕获
        <br/>
        <div @click.native="openParent()">
            <Button @click.native="openChild()">未运用stop的子元素</Button>
        </div>
        <div @click="openParent()">
            <Button @click.native.stop="openChild()">运用stop的子元素</Button>
        </div>
        .once: 只执行一次点击
        <div>
            <Button @click.native.once="openChild()">执行一次点击</Button>
        </div>
    </div>
</template>
<style>
    .body {
        word-wrap: break-word;
        word-break: break-all;
        font-size: 13px;
        line-height: 2em;
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif;
    }
</style>
<script>
export default {
    name: 'vue-event',
    methods: {
        openParent: function() {
            alert('父元素');
        },
        openChild: function() {
            alert('子元素');
        }
    }
}
</script>