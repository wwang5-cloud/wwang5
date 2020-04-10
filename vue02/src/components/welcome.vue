<template>
    <div>
        <el-container>
            <el-aside v-bind:style="siderStyle" style="width: 250px;overflow: auto;">
                <el-menu style="background: #07111B;" default-active="1" router>
                    <el-menu-item index="/welcome/fix">vue安装配置</el-menu-item>
                    <el-menu-item index="/welcome/design">view-design</el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <span>elementui组件</span>
                        </template>
                        <el-submenu index="1.1">
                            <template slot="title">
                                <span>basic基础</span>
                            </template>
                            <el-menu-item index="/welcome/element/">layout布局</el-menu-item>
                            <el-menu-item index="/welcome/element/">container布局容器</el-menu-item>
                            <el-menu-item index="/welcome/element/">color色彩</el-menu-item>
                            <el-menu-item index="/welcome/element/">border边框</el-menu-item>
                            <el-menu-item index="/welcome/element/">typography字体</el-menu-item>
                            <el-menu-item index="/welcome/element/">icon图标</el-menu-item>
                            <el-menu-item index="/welcome/element/">button按钮组</el-menu-item>
                            <el-menu-item index="/welcome/element/">link文字链接</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1.2">
                            <template slot="title">
                                <span>form表单</span>
                            </template>
                            <el-menu-item index="/welcome/element/">radio单选框</el-menu-item>
                            <el-menu-item index="/welcome/element/">checkbox多选框</el-menu-item>
                            <el-menu-item index="/welcome/element/">input输入框</el-menu-item>
                            <el-menu-item index="/welcome/element/">inputnumber计数器</el-menu-item>
                            <el-menu-item index="/welcome/element/">select选择器</el-menu-item>
                            <el-menu-item index="/welcome/element/">cascader级联选择器</el-menu-item>
                            <el-menu-item index="/welcome/element/">switch开关</el-menu-item>
                            <el-menu-item index="/element/">slider滑块</el-menu-item>
                            <el-menu-item index="/welcome/element/">timepicker时间选择器</el-menu-item>
                            <el-menu-item index="/welcome/element/">datepicker日期选择器</el-menu-item>
                            <el-menu-item index="/welcome/element/">datetimepicker日期时间选择器</el-menu-item>
                            <el-menu-item index="/welcome/element/">upload上传</el-menu-item>
                            <el-menu-item index="/welcome/element/">rate评分</el-menu-item>
                            <el-menu-item index="/welcome/element/">colorpicker颜色选择器</el-menu-item>
                            <el-menu-item index="/welcome/element/">transfer穿梭框</el-menu-item>
                            <el-menu-item index="/welcome/element/">form表单</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1.3">
                            <template slot="title">
                                <span>data数据</span>
                            </template>
                            <el-menu-item index="/welcome/element/">table表格</el-menu-item>
                            <el-menu-item index="/welcome/element/">tag标签</el-menu-item>
                            <el-menu-item index="/welcome/element/">progress进度条</el-menu-item>
                            <el-menu-item index="/welcome/element/">tree树形控件</el-menu-item>
                            <el-menu-item index="/welcome/element/">pagination分页</el-menu-item>
                            <el-menu-item index="/welcome/element/">badge标记</el-menu-item>
                            <el-menu-item index="/welcome/element/">avatar头像</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1.4">
                            <template slot="title">
                                <span>notice提示框</span>
                            </template>
                            <el-menu-item index="/welcome/element/">alert警告</el-menu-item>
                            <el-menu-item index="/welcome/element/">loading加载</el-menu-item>
                            <el-menu-item index="/welcome/element/">message消息提示</el-menu-item>
                            <el-menu-item index="/welcome/element/">messagebox弹框</el-menu-item>
                            <el-menu-item index="/welcome/element/">notification通知</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1.5">
                            <template slot="title">
                                <span>navigation</span>
                            </template>
                            <el-menu-item index="/welcome/element/">navmenu导航菜单</el-menu-item>
                            <el-menu-item index="/welcome/element/">tabs标签页</el-menu-item>
                            <el-menu-item index="/welcome/element/">breadcrumb面包屑</el-menu-item>
                            <el-menu-item index="/welcome/element/">pageheader页头</el-menu-item>
                            <el-menu-item index="/welcome/element/">dropdown下拉菜单</el-menu-item>
                            <el-menu-item index="/welcome/element/">steps步骤条</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1.6">
                            <template slot="title">
                                <span>others</span>
                            </template>
                            <el-menu-item index="/welcome/element/">dialog对话框</el-menu-item>
                            <el-menu-item index="/welcome/element/">tooltip文字提示</el-menu-item>
                            <el-menu-item index="/welcome/element/">popover弹出框</el-menu-item>
                            <el-menu-item index="/welcome/element/">popconfirm气泡确认框</el-menu-item>
                            <el-menu-item index="/welcome/element/">card卡片</el-menu-item>
                            <el-menu-item index="/welcome/element/">carousel走马灯</el-menu-item>
                            <el-menu-item index="/welcome/element/">collapse折叠面板</el-menu-item>
                            <el-menu-item index="/welcome/element/">timeline时间线</el-menu-item>
                            <el-menu-item index="/welcome/element/">divider分割线</el-menu-item>
                            <el-menu-item index="/welcome/element/">calendar日历</el-menu-item>
                            <el-menu-item index="/welcome/element/">image图片</el-menu-item>
                            <el-menu-item index="/welcome/element/">backtop回到顶部</el-menu-item>
                            <el-menu-item index="/welcome/element/">infinitescroll无限滚动</el-menu-item>
                            <el-menu-item index="/welcome/element/">drawer抽屉</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="/welcome/direct">vue指令</el-menu-item>
                    <el-menu-item index="/welcome/cycle">vue生命周期</el-menu-item>
                    <el-menu-item index="/welcome/method">vue数据与方法</el-menu-item>
                    <el-menu-item index="/welcome/class">vue样式</el-menu-item>
                    <el-menu-item index="/welcome/event">vue事件</el-menu-item>
                    <el-menu-item index="/welcome/form">vue表单</el-menu-item>
                    <el-menu-item index="/welcome/components">vue组件</el-menu-item>
                    <el-submenu index="11">
                        <template slot="title">
                            <span>vue路由</span>
                        </template>
                        <el-menu-item index="/welcome/router/active">动态路线匹配</el-menu-item>
                        <el-menu-item index="/welcome/router/inner">嵌套路线</el-menu-item>
                        <el-menu-item index="/welcome/router/program">程序导航</el-menu-item>
                        <el-menu-item index="/welcome/router/named">命名路线</el-menu-item>
                        <el-menu-item index="/welcome/router/view">命名视图</el-menu-item>
                        <el-menu-item index="/welcome/router/redirect">重定向和别名</el-menu-item>
                        <el-menu-item index="/welcome/router/prop/123/jack">将道具传递给零件</el-menu-item>
                        <el-menu-item index="/welcome/router/history">HTML5历史记录模式</el-menu-item>
                        <el-menu-item index="/welcome/router/protected">导航卫士</el-menu-item>
                        <el-menu-item index="/welcome/router/meta">路由元字段</el-menu-item>
                        <el-menu-item index="/welcome/router/transfer">转场</el-menu-item>
                        <el-menu-item index="/welcome/router/get">资料撷取</el-menu-item>
                        <el-menu-item index="/welcome/router/scroll">滚动行为</el-menu-item>
                        <el-menu-item index="/welcome/router/lazy">延迟加载路线</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/welcome/plugin">vue插件</el-menu-item>
                    <el-menu-item index="/welcome/webpack">webpack打包</el-menu-item>
                    <el-menu-item index="/welcome/dom">dom操作</el-menu-item>
                    <el-menu-item index="/welcome/bom">bom操作</el-menu-item>
                </el-menu>
            </el-aside>
            <el-main v-bind:style="siderStyle"  style="padding: 10px 0px 0px 20px; margin: 0px 0px 0px 2px; border: 1px solid #cccccc;">
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>
<style lang="css">
    .el-aside {
  width: 250px;
}
.el-tabs--left .el-tabs__header.is-left {
    float: left;
    margin-bottom: 0;
    width: 250px;
}
.el-tabs--left .el-tabs__item.is-left {
  text-align: left;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active {
    border: 1px solid #E4E7ED;
    border-left: none;
    border-bottom: none;
    background: #fff;
    color: #427def!important;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left:hover {
    border: 1px solid #E4E7ED;
    border-left: none;
    border-bottom: none;
    background: #fff;
    color: #427def!important;
}
.el-main {
  padding: 5px 5px;
}
.el-menu-item {
  height: 40px;
  line-height: 40px;
  color: #717A84;
  background: #07111B;
}
.el-menu-item:hover {
  color: #fff;
   background: #07111B;
}
.el-menu-item:focus {
  background: #07111B;
}
.el-submenu__title {
    color: #717A84;
    background: #07111B;
}
.el-submenu__title:focus {
    background: #07111B;
}
.el-submenu__title:hover {
    background: #07111B;
    color: #fff;
}
.el-menu-item.is-active {
  color: #fff;
}
</style>
<script>
    export default {
        name: 'welcome',
        data: function() {
            return { siderStyle: { height: (document.documentElement.clientHeight - 60) + 'px'}, index: '1' };
        },
        methods: {
            menuItemClick: function(url) {
                console.log(url);
            }
        },
         created: function() {
            this.menuItemClick('/fix');
        },
        mounted: function() {
            this.siderStyle = { height: (document.documentElement.clientHeight - 60) + 'px'};
        },
        // 观察属性绑定值的变化
        watch: {
            'activeName': function(val) {
            }
        }
    }
</script>