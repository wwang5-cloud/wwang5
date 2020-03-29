<template>
    <div>
        <Button v-on:click="hideTip">隐藏提示信息</Button>
        <Button v-on:click="showTip">显示提示信息</Button>
        <div v-if="isHide">{{message}}</div>
    </div>
</template>
<script>
    export default {
        name: 'vif',
        data: function() {
           return {
                isHide: true,
                message: 'hello vue'
           };
        },
        methods: {
            hideTip: function() {
                this.isHide = false;
            },
            showTip: function() {
                this.isHide = true;
            }
        }
    }
</script>