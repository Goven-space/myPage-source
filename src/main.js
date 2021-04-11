/*
 * @Author: your name
 * @Date: 2020-09-11 16:03:45
 * @LastEditTime: 2021-04-11 22:38:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myPage\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './static/icon/iconfont.css';
import animate from "animate.css"
import router from "./router/router"
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(animate)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
