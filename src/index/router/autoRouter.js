/*
 * @Author: XiaoMing
 * @Date: 2018-10-19 15:10:04
 * @Last Modified by: Xiao.Ming
 * @Last Modified time: 2018-10-24 09:20:31
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

let routes = [];
var context = require.context('../', true, /pages\/*.+vue$/);

routes = context.keys().map(key => {
  return {
    path:key.replace(/.\/pages|.vue/g,""),
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
