<template>
    <div>
        <el-container>
            <el-header>
                <el-tabs v-model="activeName" @tab-click="menuItemClick">
                    <el-tab-pane name="0" label="vue基础"></el-tab-pane>
                    <el-tab-pane name="1" label="vueUI组件"></el-tab-pane>
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
        name: 'main',
        data: function() {
            return {activeName: '/welcome'};
        },
        methods: {
            menuItemClick: function() {
                this.$router.push('/welcome');
            }
        }
    }
</script>