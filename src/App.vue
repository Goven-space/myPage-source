<!--
 * @Author: your name
 * @Date: 2020-09-11 16:03:45
 * @LastEditTime: 2021-04-11 12:12:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testing\src\App.vue
-->
<template>
  <div id="app">
    <!-- <load v-if="!firstLoad" ></load> -->
    <!-- <div v-show="firstLoad" > -->
      <navBar @checkPage="checkPage" :pageNames="pageNames"></navBar>
      <transition
        name="custom-classes-transition"
        mode="out-in"
        :enter-active-class="inActive"
        :leave-active-class="outActive"
      >
      <router-view></router-view>
        <!-- <component :is="showPage" ></component> -->
      </transition>
    <!-- </div> -->
  </div>
</template>

<script>
// import firstPage from "./components/firstPage";
import navBar from "./components/navBar";
// import aboutMe from "./components/aboutMe";
// import website from "./components/website";
// import load from "./components/load";
// import myProject from "./components/myProject"

var pageNames = ["home", "about","a-myProject", "website"];
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
    // home: firstPage,
    navBar,
    // about: aboutMe,
    // website,
    // load,
    // "a-myProject":myProject
  },
  // mounted:function(){
  //   window.onload = () => {
  //     this.firstLoad = true
 
  //   }
  // },
  mounted:function(){
    console.log(1)
  },
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
li {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
</style>
