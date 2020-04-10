<template>
    <div>
        <el-button icon="el-icon-circle-plus" type="primary">添加</el-button>
        <el-button round icon="el-icon-edit" type="warning">编辑</el-button>
        <el-button plain icon="el-icon-delete" type="danger">删除</el-button>
        <el-button plain round icon="el-icon-view" type="view">查看</el-button>
        <el-button circle icon="el-icon-share" type="success"></el-button>
    </div>
</template>
<script>
    export default {
        name: 'ui-button'
    }
</script>