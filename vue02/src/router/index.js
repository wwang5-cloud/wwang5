import Vue from 'vue';
import Router from 'vue-router';
import welcome from './../components/welcome';
import vuefix from './../components/vue-fix';
import vueclass from './../components/vue-classes';
import vuecomponents from './../components/vue-componentss';
import vuecycle from './../components/vue-cycle';
import vuedesign from './../components/vue-design';
import vuedirect from './../components/vue-direct';
import vueevent from './../components/vue-events';
import vueform from './../components/vue-forms';
import vuemethod from './../components/vue-methods';
import vueproject from './../components/vue-project';
import vuebuilder from './../components/vue-builder';
import vuepublish from './../components/vue-publish';
import vuepackage from './../components/vue-package';
import vueplugin from './../components/vue-plugin';
import vuewebpack from './../components/vue-webpack';
import vuedom from './../components/vue-dom';
import vuebom from './../components/vue-bom';
import vuebutton from './../components/vue-design/button';
import vuetable from './../components/vue-design/table';
import vuedesignform from './../components/vue-design/form';
import vueif from './../components/vue-direct/vif';
import vuefor from './../components/vue-direct/vfor';
import baseRouter from './router';
import elementRouter from './element';
import main from './../main/main';
import ui from './../element-ui/ui.js';

Vue.use(Router);
const routes = [
  {path: '/welcome', name: 'welcome', component: welcome, children:[
    {path: 'fix', component: vuefix},
    {path: 'class', component: vueclass},
    {path: 'components', component: vuecomponents},
    {path: 'cycle', component: vuecycle},
    {path: 'design', component: vuedesign, children: [
      {path: 'button', component: vuebutton},
      {path: 'table', component: vuetable},
      {path: 'form', component: vuedesignform}
    ]},
    {path: 'direct', component: vuedirect, children: [
      {path: 'vif', component: vueif},
      {path: 'vfor', component: vuefor}
    ]},
    {path: 'event', component: vueevent},
    {path: 'form', component: vueform},
    {path: 'method', component: vuemethod},
    {path: 'project', component: vueproject},
    {path: 'builder', component: vuebuilder},
    {path: 'publish', component: vuepublish},
    {path: 'package', component: vuepackage},
    {path: 'plugin', component: vueplugin},
    {path: 'webpack', component: vuewebpack},
    {path: 'dom', component: vuedom},
    {path: 'bom', component: vuebom}
  ]}
];
routes[0].children.push(baseRouter);
routes[0].children.push(elementRouter);

const router = new Router({
  mode: 'history',
  routes: [
    ...main,
    ...routes,
    ...ui
  ]
});
router.beforeEach((to, from, next) => {
  console.log('beforeEach..................................');
  next();
});
router.afterEach((to, from) => {
  console.log('afterEach..................................');
});
router.beforeResolve((to, from, next) => {
  console.log("beforeResolve..........................")
  next();
});
export default router;
