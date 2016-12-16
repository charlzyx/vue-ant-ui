import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import AntUI from '../src/index';
import './styles/site/theme/static/style'
import './styles/highlight.scss'

Vue.use(Router);
Vue.use(AntUI);

let lazyLoading = (name) => (resolve) => require([`./pages/${name}`], resolve)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: lazyLoading('Index.md')
  },
  {
    name: 'Button',
    path: '/button',
    component: lazyLoading('pageButton')
  },
  {
    name: 'Icon',
    path: '/icon',
    component: lazyLoading('pageIcon')
  },
  {
    name: 'Grid',
    path: '/grid',
    component: lazyLoading('pageGrid')
  },
  {
    name: '404',
    path: '*',
    component: lazyLoading('Index.md')
  }
]
// 路由配置
var router = new Router({
  // mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
