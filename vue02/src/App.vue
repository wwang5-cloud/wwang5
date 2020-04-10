<template>
  <div id="app" v-bind:style="style">
    <div class="header">
      <ul>
        <li><Icon type="md-document" /></li>
        <li>vue学习</li>
        <li id="basic" v-bind:style="colorStyle" @click="menuItemClick('/welcome')">vue基础</li>
        <li id="ui" v-bind:style="colorStyle" @click="menuItemClick('/ui')">vueUI组件</li>
      </ul>
    </div>
    <div class="main"><router-view/></div>
  </div>
</template>

<script>
import mainComponent from './main/main.vue';
import $ from 'jquery';
export default {
  name: 'App',
  data: function() {
    return { 
      colorStyle: {color: 'black'},
      style: {height: document.documentElement.clientHeight + 'px'} 
    }; // 设置全屏
  },
  methods: {
    menuItemClick: function(url) {
      this.$router.push(url);
      if (url.indexOf('welcome') > 0) {
        $('#basic').css({color: 'red'});
        $('#ui').css({color: 'black'});
      } else {
        $('#basic').css({color: 'black'});
        $('#ui').css({color: 'red'});
      }
    }
  },
  components: {
    'maincomponent': mainComponent
  },
  created: function() {
    this.$router.push('/welcome');
  },
  mounted: function() {
    $('#basic').css({color: 'red'});
    $('#ui').css({color: 'black'});
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: '楷体';
  font-size: 14px;
  color: #2c3e50;
}
.header {
  background: #0089ff;
  height: 50px;
  width: 100%;
}
.header ul li {
  list-style: none;
  color: white;
  float: left;
  line-height: 50px;
  padding: 0px 0px 0px 15px;
}
</style>
