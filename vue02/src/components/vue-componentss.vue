<template>
    <div>
         <Menu :theme="'light'" active-name="1" mode="horizontal">
            <MenuItem name="1" @click.native="tabItem('globalComponent')">全局组件</MenuItem>
            <MenuItem name="2" @click.native="tabItem('innerComponent')">局部组件</MenuItem>
            <MenuItem name="3" @click.native="tabItem('operateChild')">父组件操作子组件</MenuItem>
            <MenuItem name="4" @click.native="tabItem('operateParent')">子组件操作父组件</MenuItem>
        </Menu>
        <div v-if="type === 'globalComponent'">
           <global title="全局组件"></global>
        </div>
        <div v-if="type === 'innerComponent'">
           <inner message="局部组件" v-bind:data="data"></inner>
        </div>
        <div style="padding-top: 10px;" v-if="type === 'operateChild'">
            <Button type="primary" @click.native="change">改变子组件标题</Button>
            <Button type="primary" @click.native="back">还原子组件标题</Button>
            <inner message="局部组件" v-bind:data="data" ref="inner"></inner>
        </div>
        <div style="padding-top: 10px;" v-if="type === 'operateParent'">
            <inner1 @change="change" @back="back" v-bind:fatherChange="change" v-bind:fatherBack="back" message="局部组件" ref="inner"></inner1>
            <div style='font-size: 30px; color: gray;'>{{message}}</div>
        </div>
    </div>
    <!--
        1.组件的创立
        2.组件的引用
        3.组件属性的传递
        4.组件参数的传递
        5.组件的层级关系
     -->
</template>
<style>
    .box {
        height: 300px;
        width: 500px;
        boder: 1px solid #cccccc;
        background: white;
    }
</style>
<script>
import Vue from 'vue';
Vue.component('global', {
    props: ['title'],
    template: "<div style='font-size: 30px; color: blue;'>{{title}}</div>"
})
export default {
    name: 'vue-components',
    data: function() {
        return {
            type: 'globalComponent',
            data: {name: 'jack'},
            message: '局部组件'
        }
    },
    methods: {
        tabItem: function(type) {
            this.type = type;
        },
        change: function() {
            this.message = '内嵌组件';
            this.$refs['inner'].message = '内嵌组件';
        },
        back: function() {
            this.message = '局部组件';
            this.$refs['inner'].message = '局部组件';
        }
    },
    components: {
        'inner': {
            props: {
                message: String,
                data: {}
            },
            template: "<div style='font-size: 30px; color: gray;'>{{message}}{{data.name}}</div>"
        },
        'inner1': {
            props: {
                message: String,
                data: {},
                fatherChange: { type: Function, default: null } ,
                fatherBack: { type: Function, default: null } 
            },
            methods: {
                change: function() {
                   // this.$parent.change();
                  // this.$emit('change');
                  this.fatherChange();
                },
                back: function() {
                   // this.$parent.back();
                   // this.$emit('back');
                   this.fatherBack();
                }
            },
            template: "<div><Button type='primary' @click.native='change'>改变父组件标题</Button><Button type='primary' @click.native='back'>还原父组件标题</Button></div>"
        },
    }
}
</script>