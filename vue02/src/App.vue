<template>
  <div id="app" v-bind:style="style">
    <div class="header">
      <ul>
        <li><Icon type="md-document" /></li>
        <li>vue学习</li>
      </ul>
    </div>
    <div class="main"><router-view/></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return { style: {height: document.documentElement.clientHeight + 'px'} }; // 设置全屏
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eeeeee;
  font-family: '楷体';
  font-size: 14px;
  color: #2c3e50;
}
.header {
  background: #3c3c40;
  height: 50px;
  width: 100%;
}
.main {
  padding: 0px 0px 0px 2px;
  border: 1px solid #cccccc;
}
.header ul li {
  list-style: none;
  color: white;
  float: left;
  line-height: 50px;
  padding: 0px 0px 0px 15px;
}
</style>
