<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-input placeholder="请输入内容" v-model="input" @blur="blur" @focus="focus"></el-input>
                <div v-if="!input" style="color: red;">请输入内容</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-input placeholder="请输入内容"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-input placeholder="请输入内容"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-input placeholder="请输入内容"></el-input>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'input',
        data: function() {
            return {input: ''};
        },
        methods: {
            focus: function() {
                console.log('focus...............');
            },
            blur: function() {
                console.log('blur.........................');
            }
        }
    }
</script>
