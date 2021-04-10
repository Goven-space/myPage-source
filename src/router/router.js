/*
 * @Author: your name
 * @Date: 2021-04-09 16:58:15
 * @LastEditTime: 2021-04-09 22:37:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myPage\src\router\router.js
 */

import VueRouter from 'vue-router'
import Vue from 'vue'
import home from '../components/firstPage'

Vue.use(VueRouter)

export default  new VueRouter({
        routes : [{
            path:'./home',
            component:home
        }]
    })
