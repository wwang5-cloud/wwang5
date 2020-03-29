<template>
    <div>
        <div>
            <Menu :theme="'light'" active-name="1" mode="horizontal">
                <MenuItem name="1" @click.native="menuItemClick('/direct/vif')">vif指令</MenuItem>
                <MenuItem name="2" @click.native="menuItemClick('/direct/vfor')">vfor指令</MenuItem>
            </Menu>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>
<style>
    .ivu-menu-item {
        font-size: 12px;
        padding: 6px 6px;
        border: 1px solid #eeeeee;
    }
    .ivu-menu-horizontal {
        height: 32px;
        line-height: 32px;
    }
</style>
<script>
export default {
    name: 'vue-direct',
    methods: {
        menuItemClick: function(url) {
            this.$router.push(url);
        }
    },
    created: function() {
        this.menuItemClick('/direct/vif');
    }
}
</script>