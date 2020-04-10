<template>
    <div>
        <div>
            <el-tabs v-model="activeName" @tab-click="menuItemClick()">
                <el-tab-pane name="/welcome/direct/vif" label="vif指令"></el-tab-pane>
                <el-tab-pane name="/welcome/direct/vfor" label="vfor指令"></el-tab-pane>
            </el-tabs>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'vue-direct',
    data: function() {
        return {activeName: '/welcome/direct/vif'};
    },
    methods: {
        menuItemClick: function() {
            this.$router.push(this.activeName);
        }
    },
    created: function() {
        this.menuItemClick('/direct/vif');
    }
}
</script>