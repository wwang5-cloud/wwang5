import vuerouter from './../components/vue-router';
import activerouter from './../components/vue-router/active-router';
import getrouter from './../components/vue-router/get-router';
import historyrouter from './../components/vue-router/history-router';
import innerrouter from './../components/vue-router/inner-router';
import lazyrouter from './../components/vue-router/lazy-router';
import metarouter from './../components/vue-router/meta-router';
import namedrouter from './../components/vue-router/named-router';
import programrouter from './../components/vue-router/program-router';
import proprouter from './../components/vue-router/prop-router';
import protectedrouter from './../components/vue-router/protected-router';
import redirectrouter from './../components/vue-router/redirect-router';
import scrollrouter from './../components/vue-router/scroll-router';
import transferrouter from './../components/vue-router/transfer-router';
import viewrouter from './../components/vue-router/view-router';
import dyrouter from './../components/vue-router/active/dyroute';
import levelrouter from './../components/vue-router/active/level';
import notfundrouter from './../components/vue-router/active/notfund';
import primaryrouter from './../components/vue-router/active/primary';

function dynamicPropsFn($route) {
    return {query: '3333', name: 'join'};
}

export default {path: 'router', component: vuerouter, children: [
    {path: 'active', component: activerouter, children: [
        {path: 'dy/:id', name: 'dy', component: dyrouter},
        {path: 'level', name: 'level', component: levelrouter},
        {path: 'primary', name: 'primary', component: primaryrouter},
        {path: '*', component: notfundrouter}
    ]},
    {path: 'get', name: 'get', component: getrouter},
    {path: 'history', component: historyrouter},
    {path: 'inner', component: innerrouter},
    {path: 'lazy', component: lazyrouter},
    {path: 'meta', component: metarouter, meta: {requiresAuth: true}},
    {path: 'named', component: namedrouter},
    {path: 'program', name: 'program', component: programrouter, alias: 'b'},
    {path: 'prop/:id/:name', component: proprouter, props: ($route) => { return {id: '333', name: 'fork'};}},
    {path: 'protected', component: protectedrouter, beforeEnter(to, from, next) {
        console.log('beforeEnter..................');
        next(true);
      }},
    {path: 'redirect', redirect: 'program'},
    {path: 'scroll', component: scrollrouter},
    {path: 'transfer', component: transferrouter},
    {path: 'view', name: 'view', components: {
        default: viewrouter,
        a: programrouter
    }, props: {
        default: true,
        a: false
    }}
]}
