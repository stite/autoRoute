/*
 * @Author: XiaoMing
 * @Date: 2018-10-19 15:10:04
 * @Last Modified by: Xiao.Ming
 * @Last Modified time: 2018-10-25 11:00:34
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// const fs = require('fs');

let routes = [];
var context = require.context('../', true, /pages\/*.+vue$/);

routes = context.keys().map(key => {
  return {
    // 提取文件名自动写入路由
    path:key.replace(/.\/pages|.vue/g,""),
    component: context(key).default,
    // laoyut所需信息
    meta:context(key).default.meta || {}
  }
})

Vue.use(VueRouter)

console.log(routes);
var router = new VueRouter({
  mode: 'hash',
  base: '/',
  linkActiveClass: 'v-link-active',
  routes
});

export default router
