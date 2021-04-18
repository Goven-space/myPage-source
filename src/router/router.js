/*
 * @Author: your name
 * @Date: 2021-04-09 16:58:15
 * @LastEditTime: 2021-04-13 14:32:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myPage\src\router\router.js
 */

import VueRouter from 'vue-router'
import Vue from 'vue'
import home from '../components/firstPage'
import aboutMe from '../components/aboutMe'
import myProject from '../components/myProject'
import website from '../components/website'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
        path: '/',
        component: home
    },{
        path: '/aboutMe',
        component:aboutMe
    },{
        path:'/myProject',
        component:myProject
    },{
        path:'/website',
        component:website
    }
    ]
})
