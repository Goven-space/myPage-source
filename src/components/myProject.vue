<!--
 * @Author: your name
 * @Date: 2021-04-09 16:12:29
 * @LastEditTime: 2021-04-13 14:19:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myPage\src\components\project.vue
-->
<template>
  <div
    class="wrapper"
    v-on="{mousedown:slideStart,mouseup:slideStop}"
    @mousemove="mouseDown && move($event)"
  >
    <div class="container">
      <ul class="project-list" :style="{transform}">
        <li
          class="project-item"
          @mouseenter="hightLight = 1"
          @mouseout="hightLight=false"
          :class="{dark:hightLight&&hightLight !=1 }"
        >
          <div :style="`backgroundPositionX:${backgroundMove(1)}px`">
            <a href="http://vip.chanke.xyz/v03017/chanke/myProject/eStudy/index.html" target="_blank"></a>
          </div>
          <span>作业提交系统</span>
        </li>
        <li
          class="project-item"
          @mouseenter="hightLight = 2;"
          @mouseout="hightLight=false"
          :class="{dark:hightLight&&hightLight !=2 }"
        >
          <div :style="`backgroundPositionX:${backgroundMove(2)}px`" >
            <a href="http://vip.chanke.xyz/v03017/chanke/myProject/mi/index.html"  target="_blank"></a>
          </div>
          <span>小米商城</span>
        </li>
        <li
          class="project-item"
          @mouseenter="hightLight = 3;"
          @mouseout="hightLight=false"
          :class="{dark:hightLight&&hightLight !=3 }"
        >
          <div :style="`backgroundPositionX:${backgroundMove(3)}px`">
            <a href="http://vip.chanke.xyz/v03017/chanke/myProject/musicplayer/index.html"  target="_blank"></a>
          </div>
          <span>音乐播放器</span>
        </li>
        <li
          class="project-item"
          @mouseenter="hightLight = 4;"
          @mouseout="hightLight=false"
          :class="{dark:hightLight&&hightLight !=4 }"
        >
          <div :style="`backgroundPositionX:${backgroundMove(4)}px`">
            <a href="http://vip.chanke.xyz/v03017/chanke/myProject/mobileAlbum/index.html"  target="_blank"></a>
          </div>
          <span>移动端相册</span>
        </li>
        <li
          class="project-item"
          @mouseenter="hightLight = 5;"
          @mouseout="hightLight=false"
          :class="{dark:hightLight&&hightLight !=5 }"
        >
          <div :style="`backgroundPositionX:${backgroundMove(5)}px`">
            <a href="http://vip.chanke.xyz/v03017/chanke/myProject/scratch/index.html"  target="_blank"></a>
          </div>
          <span>刮刮乐</span>
        </li>
        <li
          class="project-item"
          @mouseenter="hightLight = 6;"
          @mouseout="hightLight=false"
          :class="{dark:hightLight&&hightLight !=6 }"
        >
          <div :style="`backgroundPositionX:${backgroundMove(6)}px`">
            <a href="http://vip.chanke.xyz/v03017/chanke/myProject/flash/index.html"  target="_blank"></a>
          </div>
          <span>百度图片的动画效果</span>
        </li>
        <li
          class="project-item"
          @mouseenter="hightLight = 7;"
          @mouseout="hightLight=false"
          :class="{dark:hightLight&&hightLight !=7 }"
        >
          <div :style="`backgroundPositionX:${backgroundMove(7)}px`">
            <a href="http://vip.chanke.xyz/v03017/chanke/myProject/bootstrap/index.html"  target="_blank"></a>
          </div>
          <span>Bootstrap首页</span>
        </li>
        <li
          class="project-item"
          @mouseenter="hightLight = 8;"
          @mouseout="hightLight=false"
          :class="{dark:hightLight&&hightLight !=8 }"
        >
        <div :style="`backgroundPositionX:${backgroundMove(8)}px`">
          <a href="http://vip.chanke.xyz/v03017/chanke/myProject/clock/index.html"  target="_blank"></a>
        </div>
        <span>CSS仿生ios时钟</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xStart: null,
      mouseDown: false,
      distance: 0,
      rotationAngle: 0,
      //鼠标移动项目元素上点亮
      hightLight: false,
    };
  },
  methods: {
    slideStart(e) {
      this.mouseDown = true;
      this.xStart = e.clientX;
    },
    move(e) {
      let xEnd = e.clientX;
      this.distance = xEnd - this.xStart;
      this.xStart = e.clientX;
      this.rotationAngle += (this.distance / 2000) * 360;
      
    
    },
    slideStop() {
      this.mouseDown = false;
    }
  },
  computed: {
    transform() {
      // console.log(2)
      return "rotateY(" + this.rotationAngle + "deg)";
    },
    backgroundMove(){
      // let angle = 
      console.log(this.rotationAngle)
      return function(index){
        return Math.abs((this.rotationAngle-90-45*(index-1))%180-20)/180*-200
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  // background-color:lightgreen;
  // background-image:linear-gradient(45deg, #1abc9c, transparent);
  // background-image:linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
  // background-image: linear-gradient(to top, #09203f 0%, #537895 100%)
  background-image:url("../assets/project-bg.jpg");
  background-size:cover;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  // width:300px;
  // height:400px;
  margin-top: -250px;
  margin-left: -140px;

  .project-list {
    width: 250px;
    height: 380px;
    transform-style: preserve-3d;
    // border: 1px solid black;
    // animation: run 4s linear infinite;
    transition: rotate 1s linear;
    .project-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      user-select: none;
      transition: opacity 0.5s linear;
      a{
        display:inline-block;
        width:100%;
        height:100%;
        user-select: none;
          -webkit-user-drag: none;
      }
      span {
        font-size: 20px;
        color: white;
        font-weight: 800;
        user-select: none;
      }
      &:nth-child(1) {
        transform: translateZ(-450px);
        div {
          width: 100%;
          height: 90%;
          user-select: none;
          -webkit-user-drag: none;
          background-size: cover;
          background-image: url("../assets/myProject-1.jpg");
        }
      }
      &:nth-child(2) {
        transform: rotateY(-45deg) translateZ(-450px);
        div {
          width: 100%;
          height: 90%;
          user-select: none;
          -webkit-user-drag: none;
          background-size: cover;
          background-image: url("../assets/myProject-2.jpg");
        }
      }
      &:nth-child(3) {
        transform: rotateY(-90deg) translateZ(-450px);
        div {
          width: 100%;
          height: 90%;
          user-select: none;
          -webkit-user-drag: none;
          background-size: cover;
          background-image: url("../assets/myProject-3.jpg");
        }
      }
      &:nth-child(4) {
        transform: rotateY(-135deg) translateZ(-450px);
        div {
          width: 100%;
          height: 90%;
          user-select: none;
          -webkit-user-drag: none;
          background-size: 600px;
          background-image: url("../assets/myProject-4.jpg");
        }
      }
      &:nth-child(5) {
        
        transform: rotateY(-180deg) translateZ(-450px);
        div {
          width: 100%;
          height: 90%;
          user-select: none;
          -webkit-user-drag: none;
          background-position-y:-100px;
          background-size:600px;
          // background-size: cover;
          background-image: url("../assets/myProject-5.png");
        }
      }
      &:nth-child(6) {
    
        transform: rotateY(-225deg) translateZ(-450px);
        div {
          width: 100%;
          height: 90%;
          user-select: none;
          -webkit-user-drag: none;
          background-size: cover;
          background-image: url("../assets/myProject-6.jpg");
        }
      }
      &:nth-child(7) {
     
        transform: rotateY(-270deg) translateZ(-450px);
        div {
          width: 100%;
          height: 90%;
          user-select: none;
          -webkit-user-drag: none;
          background-size: cover;
          background-image: url("../assets/myProject-7.png");
        }
      }
      &:nth-child(8) {
     
        transform: rotateY(-315deg) translateZ(-450px);
        div {
          width: 100%;
          height: 90%;
          user-select: none;
          -webkit-user-drag: none;
          background-size: cover;
          background-image: url("../assets/myProject-8.jpg");
        }
      }
    }
    .dark {
      opacity: 0.3;
    }
  }
}
</style>