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
          v-for="(value,index) in projectList"
          class="project-item"
          :key="`project_${index}`"
          @mouseenter="hightLight = index+1"
          @mouseout="hightLight=false"
          :class="{dark:hightLight&&hightLight != index+1 }"
        >
          <div :style="`backgroundPosition:${bgPosition(index)}%`">
            <a
              :href="`http://goven-space.github.io/myProject/${value.urlName}/index.html`"
              target="_blank"
            ></a>
          </div>
          <span>{{value.name}}</span>
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
      //每个项目间隔的角度
      eachAngle: 40,
      //鼠标移动项目元素上点亮
      hightLight: false,
      //项目信息列表
      projectList: [
        {
          name: "作业管理系统",
          urlName: "estudy"
        },
        {
          name: "小米商城",
          urlName: "mi"
        },
        {
          name: "音乐播放器",
          urlName: "musicPlayer"
        },
        {
          name: "移动端相册",
          urlName: "mobileAlbum"
        },
        {
          name: "刮刮乐",
          urlName: "scratch"
        },
        {
          name: "百度图片的动画效果",
          urlName: "flash"
        },
        {
          name: "Bootstrap首页",
          urlName: "bootstrap"
        },
        {
          name: "CSS仿生ios时钟",
          urlName: "clock"
        },
        {
          name: "扫雷游戏(原生JS)",
          urlName: "gameMine"
        }
      ]
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
      return "rotateY(" + this.rotationAngle + "deg)";
    },

    //项目背景图位置 ，随鼠标转动变化
    bgPosition() {
      //在dom上传值
      return function(index) {
        var deg = Math.abs(
          (90 - this.eachAngle * index + this.rotationAngle) % 360
        );
        deg = deg > 180 ? 360 - deg : deg;
        return (deg / 180) * 100;
      };
    }
  }
};
</script>
<style lang="scss" scoped>
$turningRadius: -420px;
$rotationAngle: -40deg;
@mixin projectText($num) {
  width: 100%;
  height: 90%;
  user-select: none;
  -webkit-user-drag: none;
  background-size: cover;
  background-image: url("../assets/myProject-#{$num}.jpg");
}

.wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -140px;
  perspective: 1300px;

  .project-list {
    width: 250px;
    height: 380px;
    transform-style: preserve-3d;
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
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        user-select: none;
        -webkit-user-drag: none;
      }
      span {
        font-size: 20px;
        color: white;
        font-weight: 800;
        user-select: none;
      }
      //项目展示样式
      @for $i from 1 through 9 {
        &:nth-child(#{$i}) {
          @if ($i ==1) {
            transform: translateZ($turningRadius);
          } @else {
            transform: rotateY($rotationAngle * ($i - 1))
              translateZ($turningRadius);
          }
          div {
            @include projectText($i);
          }
        }
      }
    }
    .dark {
      opacity: 0.3;
    }
  }
}
</style>