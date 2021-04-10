/*
 * @Author: your name
 * @Date: 2020-09-11 16:03:45
 * @LastEditTime: 2021-04-09 22:27:36
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

Vue.use(animate)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
