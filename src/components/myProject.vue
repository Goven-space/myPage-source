<!--
 * @Author: your name
 * @Date: 2021-04-09 16:12:29
 * @LastEditTime: 2021-04-11 23:56:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myPage\src\components\project.vue
-->
<template>
    <div class="wrapper" v-on="{mousedown:slideStart,mouseup:slideStop}">
      <div class="container" >
        <ul class="project-list" :style="`transform:rotateY(${rotationAngle}deg)`">
          <li class="project-item"></li>
          <li class="project-item"></li>
          <li class="project-item"></li>
          <li class="project-item"></li>
          <li class="project-item"></li>
          <li class="project-item"></li>
          <li class="project-item"></li>
          <li class="project-item"></li>
          <li class="project-item"></li>
          <li class="project-item"></li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        xStart :null,
        distance:0,
        rotationAngle:0
    };
  },
  methods: {
    slideStart(e) {
      e.currentTarget.addEventListener('mousemove',this.move)
      this.xStart = e.clientX
    },
    move(e){
        let xEnd = e.clientX
        this.distance = xEnd -this.xStart
        this.xStart = e.clientX
        this.rotationAngle += this.distance/2000 *360
        
    },
    slideStop(e){
        e.currentTarget.removeEventListener('mousemove',this.move)
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 900px;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  // width:300px;
  // height:400px;
  margin-top: -150px;
  margin-left: -100px;

  .project-list {
    width: 200px;
    height: 300px;
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
      border: 1px solid black;
      backface-visibility: hidden;
      user-select:none;
      &:nth-child(1) {
        transform: translateZ(-450px);
        background: purple;
      }
      &:nth-child(2) {
        transform: rotateY(-36deg) translateZ(-450px);
        background: blue;
      }
      &:nth-child(3) {
        background: green;
        transform: rotateY(-72deg) translateZ(-450px);
      }
      &:nth-child(4) {
        background: pink;
        transform: rotateY(-108deg) translateZ(-450px);
      }
      &:nth-child(5) {
        background: red;
        transform: rotateY(-144deg) translateZ(-450px);
      }
      &:nth-child(6) {
        background: orange;
        transform: rotateY(-180deg) translateZ(-450px);
      }
      &:nth-child(7) {
        background: darkgray;
        transform: rotateY(-216deg) translateZ(-450px);
      }
      &:nth-child(8) {
        background: gold;
        transform: rotateY(-252deg) translateZ(-450px);
      }
      &:nth-child(9) {
        background: yellow;
        transform: rotateY(-288deg) translateZ(-450px);
      }
      &:nth-child(10) {
        background: yellowgreen;
        transform: rotateY(-324deg) translateZ(-450px);
      }
    }
  }
//   @keyframes run {
//     0% {
//       transform: rotateY(0deg);
//     }
//     100% {
//       transform: rotateY(360deg);
//     }
//   }
}
</style>