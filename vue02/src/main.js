// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
// step1: 引入 ViewUI
import ViewUI from 'view-design'
// step2: 引入 css 
import 'view-design/dist/styles/iview.css'
// step3: 引入 ElementUI
import ElementUI from 'element-ui';
// step4: 引入 css
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// step3:声明使用 ViewUI
Vue.use(ViewUI)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

