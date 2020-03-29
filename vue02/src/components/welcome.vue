<template>
    <div>
        <Layout>
            <Sider hide-trigger v-bind:style="siderStyle" style="flex: 0 0 150px; min-width: 150px; overflow: auto;">
                <Menu :theme="'light'" active-name="1" style="height: 100%; width: 150px; background: '#cccccc'; overflow: auto;">
                    <MenuItem name="1" @click.native="menuItemClick('/fix')">
                        <Icon type="md-document" />
                        vue安装
                    </MenuItem>
                    <MenuItem name="2" @click.native="menuItemClick('/project')">
                        <Icon type="md-document" />
                        vue建立项目
                    </MenuItem>
                    <MenuItem name="3" @click.native="menuItemClick('/design')">
                        <Icon type="md-document" />
                        vue-design
                    </MenuItem>
                    <MenuItem name="4" @click.native="menuItemClick('/direct')">
                        <Icon type="md-document" />
                        vue指令
                    </MenuItem>
                    <MenuItem name="5" @click.native="menuItemClick('/cycle')">
                        <Icon type="md-document" />
                        vue生命周期
                    </MenuItem>
                    <MenuItem name="6" @click.native="menuItemClick('/method')">
                        <Icon type="md-document" />
                        vue数据与方法
                    </MenuItem>
                    <MenuItem name="7" @click.native="menuItemClick('/class')">
                        <Icon type="md-document" />
                        vue样式
                    </MenuItem>
                    <MenuItem name="8" @click.native="menuItemClick('/event')">
                        <Icon type="md-document" />
                        vue事件
                    </MenuItem>
                    <MenuItem name="9" @click.native="menuItemClick('/form')">
                        <Icon type="md-document" />
                        vue表单
                    </MenuItem>
                    <MenuItem name="10" @click.native="menuItemClick('/components')">
                        <Icon type="md-document" />
                        vue组件
                    </MenuItem>
                    <MenuItem name="11" @click.native="menuItemClick('/router')">
                        <Icon type="md-document" />
                        vue路由
                    </MenuItem>
                    <MenuItem name="12" @click.native="menuItemClick('/builder')">
                        <Icon type="md-document" />
                        vue编译
                    </MenuItem>
                    <MenuItem name="13" @click.native="menuItemClick('/publish')">
                        <Icon type="md-document" />
                        vue发布
                    </MenuItem>
                    <MenuItem name="14" @click.native="menuItemClick('/package')">
                        <Icon type="md-document" />
                        vue封装
                    </MenuItem>
                    <MenuItem name="15" @click.native="menuItemClick('/plugin')">
                        <Icon type="md-document" />
                        vue插件
                    </MenuItem>
                    <MenuItem name="16" @click.native="menuItemClick('/webpack')">
                        <Icon type="md-document" />
                        webpack打包
                    </MenuItem>
                    <MenuItem name="17" @click.native="menuItemClick('/dom')">
                        <Icon type="md-document" />
                        dom操作
                    </MenuItem>
                    <MenuItem name="18" @click.native="menuItemClick('/bom')">
                        <Icon type="md-document" />
                        bom操作
                    </MenuItem>
                </Menu>
            </Sider>
            <Content style="margin: 0px 0px 0px 2px; border: 1px solid #cccccc;">
                <router-view/>
            </Content>
        </Layout>
    </div>
</template>
<style lang="css" scoped>
    ul {
        width: 200px;
    }
    .ivu-menu-light {
        background: #cccccc;
    }
    .ivu-menu-item {
            font-size: 12px;
            padding: 6px 6px;
            border: 1px solid #eeeeee;
            font-weight: bolder;
    }
    .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
        background: #484873;
        color: white;
    }
</style>
<script>
    export default {
        name: 'welcome',
        data: function() {
            return { siderStyle: {width: '200px', height: (document.documentElement.clientHeight - 60) + 'px'} };
        },
        methods: {
            menuItemClick: function(url) {
                this.$router.push(url);
            }
        },
         created: function() {
            this.menuItemClick('/fix');
        }
    }
</script>