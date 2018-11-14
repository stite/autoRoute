/*
 * @Author: XiaoMing 
 * @Date: 2018-10-23 17:20:49 
 * @Last Modified by: Xiao.Ming
 * @Last Modified time: 2018-10-24 16:00:29
 */
import Vue from 'vue'
// 自动路由设置
import router from './router/'
// layout模版设置
import { VueExtendLayout, layout } from '../../public/js/layout';

Vue.config.productionTip = false
Vue.use(VueExtendLayout, {layouts: require.context('./layouts', false, /^\.\/.*\.vue$/)});
new Vue({
  router,
  ...layout
}).$mount('#app');