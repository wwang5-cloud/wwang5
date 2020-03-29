<template>
    <div>
        <Menu :theme="'light'" active-name="1" mode="horizontal">
            <MenuItem name="1" @click.native="tabItem('singleStyle')">绑定单一样式style</MenuItem>
            <MenuItem name="2" @click.native="tabItem('attributeStyle')">绑定属性style</MenuItem>
            <MenuItem name="3" @click.native="tabItem('singleClass')">绑定单一class</MenuItem>
            <MenuItem name="4" @click.native="tabItem('moreClass')">绑定多个class</MenuItem>
            <MenuItem name="5" @click.native="tabItem('attributeClass')">绑定属性class</MenuItem>
            <MenuItem name="6" @click.native="tabItem('importClass')">导入样式文件</MenuItem>
        </Menu>
        <div v-if="type === 'singleStyle'" style="font-size: 16px; color: red;">
            绑定单一样式style
        </div>
        <div v-if="type === 'attributeStyle'" v-bind:style="style">
            绑定属性style
        </div>
        <div v-if="type === 'singleClass'" class="singleClass">
            绑定单一class
        </div>
        <div v-if="type === 'moreClass'" v-bind:class="{moreClass: true, moreClassOne: true}">
            绑定多个class
        </div>
        <div v-if="type === 'attributeClass'" v-bind:class="attributeClass">
            绑定属性class
        </div>
        <div v-if="type === 'importClass'" class="importClass">
            绑定属性class
        </div>
    </div>
    <!-- 
        1.动态绑定样式
        2.绑定多个样式
        3.改变底层样式或者view-design组件样式
     -->
</template>
<style>
    .singleClass {
        font-size: 30px;
        color: orange;
    }
    .moreClass {
         font-size: 30px;
    }
    .moreClassOne {
        color: yellow;
    }
    .attributeClass {
        font-size: 50px;
        color: gray;
    }
</style>
<script>
import './../../static/css/importclass.css';
export default {
    name: 'vue-class',
    data: function() {
        return {
            type: 'singleStyle',
            style: {'font-size': '20px', color: 'blue'},
            attributeClass: 'attributeClass'
        }
    },
    methods: {
        tabItem(type) {
            this.type = type;
        }
    }
}
</script>