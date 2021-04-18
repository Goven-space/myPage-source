<!--
 * @Author: your name
 * @Date: 2020-09-11 16:03:45
 * @LastEditTime: 2021-04-13 14:45:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testing\src\App.vue
-->
<template>
  <div id="app">
    <!-- <load v-if="!firstLoad" ></load> -->
    <!-- <div v-show="firstLoad" > -->
      <!-- 左边的列表 -->
      <navBar @checkPage="checkPage" :pageNames="pageNames"></navBar>
      <!-- 音乐播放器 -->
      <musicPlayer></musicPlayer>
      <!-- 路由切换动画 -->
      <transition
        name="custom-classes-transition"
        mode="out-in"
        :enter-active-class="inActive"
        :leave-active-class="outActive"
      >
      <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import navBar from "./components/navBar";
import musicPlayer from "./components/musicPlayer";

var pageNames = ["home", "about","a-myProject", "website"];
// 路由切换动画
//进入动画
var inAnis = [
  "animate__bounceInDown",
  "animate__flipInX",
  "animate__lightSpeedInRight",
  "animate__rotateInDownRight",
  "animate__jackInTheBox",
  "animate__lightSpeedInLeft",
  "animate__rollIn",
  "animate__zoomInDown",
  "animate__zoomInRight",
  "animate__zoomInUp",
  "animate__slideInDown",
  "animate__slideInRight",
];
// 离开动画
var outAnis = [
  "animate__bounceOutUp",
  "animate__fadeOutTopRight",
  "animate__rotateOut",
  "animate__flipOutY",
  "animate__lightSpeedOutRight",
  "animate__rotateOutDownLeft",
  "animate__rollOut",
  "animate__zoomOutDown",
  "animate__zoomOutRight",
  "animate__zoomOutUp",
  "animate__slideOutDown",
];

export default {
  data() {
    return {
      // firstLoad: false,
      pageNames,
      showPage: pageNames[0],
      checkActive: {
        inAni: inAnis[0],
        outAni: outAnis[0],
        inLength: inAnis.length,
        outLength: outAnis.length,
        
      },
    };
  },
  computed: {
    inActive() {
      return "animate__animated " + this.checkActive.inAni;
    },
    outActive() {
      return "animate__animated " + this.checkActive.outAni;
    },
  },
  components: {
    navBar,
    musicPlayer
  },
  // mounted:function(){
  //   window.onload = () => {
  //     this.firstLoad = true
 
  //   }
  // },
  methods: {
    checkPage() {
      var index = Math.floor(Math.random() * this.checkActive.inLength);
      this.checkActive.inAni = inAnis[index];
      index = Math.floor(Math.random() * this.checkActive.outLength);
      this.checkActive.outAni = outAnis[index];
      // this.showPage = pushName;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
body,
a,
li,
button {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
html,body,#app{
  height:100%;
}
</style>
