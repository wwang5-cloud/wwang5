<template>
    <div>
        <el-container>
            <el-header>
                <el-tabs v-model="activeName" @tab-click="menuItemClick">
                    <el-tab-pane name="/welcome/router/active/dy/123" label="对参数变化做出反应"></el-tab-pane>
                    <el-tab-pane name="/welcome/router/active/dy/456" label="对参数变化做出反应"></el-tab-pane>
                    <el-tab-pane name="/welcome/router/active/fund" label="404未找到路线"></el-tab-pane>
                    <el-tab-pane name="/welcome/router/active/primary" label="高级匹配模式"></el-tab-pane>
                    <el-tab-pane name="/welcome/router/active/level" label="匹配优先级"></el-tab-pane>
                </el-tabs>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    export default {
        name: 'active',
        data: function() {
            return {activeName: '/welcome/router/active/dy/123'};
        },
        methods: {
            menuItemClick: function() {
                this.$router.push(this.activeName);
            }
        }
    }
</script>