/*
 * @Author: XiaoMing
 * @Date: 2018-10-19 15:10:04
 * @Last Modified by: Xiao.Ming
 * @Last Modified time: 2019-09-25 14:08:43
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import index from '../views/index.vue'

let routes = [];
var context = require.context('../', true, /views\/*.+vue$/);
routes = context.keys().map(key => {
  return {
    // 提取文件名自动写入路由
    path:key.replace(/.\/views|.vue/g,""),
    component: context(key).default,
  }
})

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'hash',
  base: '/',
  linkActiveClass: 'v-link-active',
  routes
});

export default router

