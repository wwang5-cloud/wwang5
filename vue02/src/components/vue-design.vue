<template>
    <div>
        <div>
            <Menu :theme="'light'" active-name="1" mode="horizontal">
                <MenuItem name="1" @click.native="menuItemClick('/design/button')">按钮组</MenuItem>
                <MenuItem name="2" @click.native="menuItemClick('/design/table')">table</MenuItem>
                <MenuItem name="3" @click.native="menuItemClick('/design/form')">form表单</MenuItem>
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
        height: 40px;
        line-height: 40px;
    }
</style>
<script>
    export default {
        name: 'vuedesign',
        methods: {
            menuItemClick: function(url) {
                this.$router.push(url);
            }
        },
        created: function() {
            this.menuItemClick('/design/button');
        }
    }
</script>