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
    <div ref="firstLoad" class="loading">
      <h2>玩命加载中...</h2>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <img src="./assets/dancingkitty.gif" />
    </div>
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

var pageNames = ["home", "about", "a-myProject", "website"];
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
  "animate__slideInRight"
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
  "animate__slideOutDown"
];

export default {
  data() {
    return {
      pageNames,
      showPage: pageNames[0],
      checkActive: {
        inAni: inAnis[0],
        outAni: outAnis[0],
        inLength: inAnis.length,
        outLength: outAnis.length
      }
    };
  },
  computed: {
    inActive() {
      return "animate__animated " + this.checkActive.inAni;
    },
    outActive() {
      return "animate__animated " + this.checkActive.outAni;
    }
  },
  components: {
    navBar,
    musicPlayer
  },
  created: function() {
    window.onload = () => {
      this.$refs.firstLoad.style.display = "none";
    };
  },
  methods: {
    checkPage() {
      var index = Math.floor(Math.random() * this.checkActive.inLength);
      this.checkActive.inAni = inAnis[index];
      index = Math.floor(Math.random() * this.checkActive.outLength);
      this.checkActive.outAni = outAnis[index];
    }
  }
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
html,
body,
#app {
  min-height: 100vh;
}



//页面加载动画
.loading {
  position: absolute;
  z-index: 1000;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 10%;
  background: white;
  h2 {
    margin-top: 30px;
  }
  img {
    display: block;
    margin: 30px auto;
  }

  /*
 * Loading Dots
 * Can we use pseudo elements here instead :after?
 */
  span {
    display: inline-block;
    vertical-align: middle;
    width: 0.6em;
    height: 0.6em;
    margin: 0.19em;
    background: #007db6;
    border-radius: 0.6em;
    -webkit-animation: loading 1s infinite alternate;
    -moz-animation: loading 1s infinite alternate;
    -o-animation: loading 1s infinite alternate;
    -ms-animation: loading 1s infinite alternate;
    animation: loading 1s infinite alternate;
  }

  /*
 * Dots Colors
 * Smarter targeting vs nth-of-type?
 */
  span:nth-of-type(2) {
    background: #008fb2;
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -o-animation-delay: 0.2s;
    -ms-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  span:nth-of-type(3) {
    background: #009b9e;
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    -o-animation-delay: 0.4s;
    -ms-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  span:nth-of-type(4) {
    background: #00a77d;
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    -ms-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  span:nth-of-type(5) {
    background: #00b247;
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    -o-animation-delay: 0.8s;
    -ms-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  span:nth-of-type(6) {
    background: #5ab027;
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -o-animation-delay: 1s;
    -ms-animation-delay: 1s;
    animation-delay: 1s;
  }
  span:nth-of-type(7) {
    background: #a0b61e;
    -webkit-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
    -o-animation-delay: 1.2s;
    -ms-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }

  /*
 * Animation keyframes
 * Use transition opacity instead of keyframes?
 */
  @-webkit-keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-ms-keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
