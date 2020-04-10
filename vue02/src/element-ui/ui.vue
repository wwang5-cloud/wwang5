<template>
    <div>
        <el-container>
            <el-aside style="width: 200px;" v-bind:style="style">
                 <el-menu default-active="/ui/button" router>
                     <el-menu-item index="/ui/button">按钮组</el-menu-item>
                     <el-menu-item index="/ui/input">输入输入框</el-menu-item>
                     <el-menu-item index="2">复选框多选框</el-menu-item>
                     <el-menu-item index="3">InputNumber计数器</el-menu-item>
                     <el-menu-item index="4">选择选择器</el-menu-item>
                     <el-menu-item index="5">级联选择器</el-menu-item>
                     <el-menu-item index="6">DatePicker日期选择器</el-menu-item>
                 </el-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    export default {
        name: 'UI',
        data: function() {
            return {style: {height: (document.documentElement.clientHeight - 60) + 'px'}};
        },
        created: function() {
            this.$router.push('/ui/button');
        }
    }
</script>