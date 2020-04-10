<template>
    <div>
        <div>
            <Menu :theme="'light'" active-name="1" mode="horizontal">
                <MenuItem name="1" @click.native="menuItemClick('/welcome/design/button')">按钮组</MenuItem>
                <MenuItem name="2" @click.native="menuItemClick('/welcome/design/table')">table</MenuItem>
                <MenuItem name="3" @click.native="menuItemClick('/welcome/design/form')">form表单</MenuItem>
            </Menu>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'vuedesign',
        methods: {
            menuItemClick: function(url) {
                this.$router.push(url);
            }
        },
        created: function() {
            this.menuItemClick('/welcome/design/button');
        }
    }
</script>