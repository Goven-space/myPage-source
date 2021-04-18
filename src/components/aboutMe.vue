<template>
  <div class="container" ref="wapper">
    <!-- about me标题 -->
    <div class="title">
      <span>About Me</span>
      <p>"There are only two creatures," says a proverb, "who can surmount the pyramids the eagle and the snail."</p>
    </div>
    <!-- 具体内容 -->
    <div class="content">
      <!-- 自我描述 -->
      <div class="describe">
        <span>My name is</span>
        <div class="name-box">
          <span class="myName" text-data="Goven Chen">Goven Chen</span>
        </div>
        <span class="iconfont icon-zhuanyerencai">Designer / Developer</span>
        <p>I am 18 years old front-end developer from China</p>
      </div>
      <!-- 照片 -->
      <div class="pic">
        <div class="pic-header"></div>
        <div class="red-boll"></div>
        <div class="green-boll"></div>
        <div class="yellow-boll"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      bgAni:null
    }
  },
  mounted:function(){
    var that = this
    that.bgAni = setTimeout(function(){
      that.$refs.wapper.classList.add("container-ani")
    },2000)
  },
  beforeDestroy:function(){
    clearTimeout(this.bgAni)
    this.$refs.wapper.classList.remove("container-ani")
    
  }
};
</script>

<style lang="scss" scoped>

.container {
  min-height: 100vh;
  background-image: url("../assets/about-bg.png");
  // animation: slide 20s linear infinite; 
  .title {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    span {
      display: block;
      padding-top: 60px;
      font-size: 40px;
      font-family: STHeiti;
      color: #2235dd;
      font-weight: bolder;
    }
    p {
      font-family: "Poppin" ，sans-serif;
      font-size: 16px;
      font-weight: 300;
      color: #85858d;
    }
  }

  // 具体内容
  .content {
    min-height: 350px;
    margin-left: 80px;

    // 自我描述
    .describe {
      display: inline-block;
      vertical-align: top;
      width: 420px;
      height: 350px;
      padding-top: 50px;
      > span:nth-child(1) {
        height: 40px;
        padding: 3px 40px;
        line-height: 40px;
        background-color: #4424db;
        color: white;
        font-size: 20px;
        border-radius: 20px;
      }
      span:nth-child(3) {
        &::before {
          font-size: 27px;
          padding-right: 5px;
          vertical-align: bottom;
        }
        font-size: 20px;
        color: #c2c2c6;
      }
      p {
        font-size: 16px;
        font-family: Raleway;
        color: #85858d;
      }
    }

    // 照片
    .pic {
      display: inline-block;
      position: relative;
      width: 550px;
      height: 350px;
      .pic-header {
        width: 300px;
        height: 300px;
        margin: 0 auto;
        border-radius: 150px;
        background-image: url("../assets/header.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow:20px 20px 30px 10px gray;
        // box-shadow: 4px 4px 5px 8px rgba(20, 20, 20, 0.7);
      }
      .red-boll {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: #f10e45;
        opacity: 0.2;
        animation: red-spin 15s linear infinite;
        transform-origin: 275px -150px;
      }
      .green-boll {
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        background-color: #23dc4a;
        opacity: 0.3;
        animation: green-spin 8s linear infinite;
        transform-origin: 275px -150px;
      }
      .yellow-boll {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: #fdfb02;
        opacity: 0.3;
        animation: yellow-spin 12s linear infinite;
        transform-origin: 275px -150px;
      }
      @keyframes red-spin {
        0% {
          transform: rotate(0deg) translate(110px, -175px);
        }
        100% {
          transform: rotate(360deg) translate(110px, -175px);
        }
      }
      @keyframes green-spin {
        0% {
          transform: rotate(0deg) translate(95px, -190px);
        }
        100% {
          transform: rotate(360deg) translate(95px, -190px);
        }
      }
      @keyframes yellow-spin {
        0% {
          transform: rotate(360deg) translate(100px, -165px);
        }
        100% {
          transform: rotate(0deg) translate(100px, -165px);
        }
      }
    }
  }
}




//背景图移动特效
.container-ani{
    animation: slide 20s linear infinite;
  }
//背景移动
@keyframes slide {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -300px 0;
  }
}



//名字特效

.myName {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 100%;
  font-size: 60px;
  font-weight: bold;
}
.myName::before {
  content: attr(text-data);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 1px;
  text-shadow: -1px 0 #49fc00;
  clip: rect(0px, 950px, 60px, 0);
  animation: myname-anim 2s infinite linear alternate-reverse;
  width: 100%;
  height: 100%;
  background: white;
}
.myName::after {
  content: attr(text-data);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: -1px;
  text-shadow: -1px 0 #b300fc;
  clip: rect(55px, 950px, 60px, 0);
  animation: myname-anim-2 2.5s infinite linear alternate-reverse;
  width: 100%;
  height: 100%;
  background: white;
}

@keyframes myname-anim {
  0% {
    clip: rect(60px, 950px, 60px, 0);
  }
  5% {
    clip: rect(0, 950px, 60px, 0);
  }
  15% {
    clip: rect(60px, 950px, 60px, 0);
  }
  20% {
    clip: rect(0px, 950px, 60px, 0);
  }
  25% {
    clip: rect(60px, 950px, 60px, 0);
  }

  30% {
    clip: rect(30px, 950px, 45px, 0);
  }
  35% {
    clip: rect(0px, 950px, 60px, 0);
  }
  40% {
    clip: rect(15px, 950px, 45px, 0);
  }
  45% {
    clip: rect(30px, 950px, 30px, 0);
  }
  50% {
    clip: rect(15px, 950px, 45px, 0);
  }
  55% {
    clip: rect(30px, 950px, 30px, 0);
  }
  60% {
    clip: rect(15px, 950px, 45px, 0);
  }
  65% {
    clip: rect(60px, 950px, 60px, 0);
  }
  70% {
    clip: rect(17px, 950px, 60px, 0);
  }
  75% {
    clip: rect(48px, 950px, 60px, 0);
  }
  80% {
    clip: rect(20px, 950px, 55px, 0);
  }
  85% {
    clip: rect(35px, 950px, 53px, 0);
  }
  90% {
    clip: rect(0px, 950px, 60px, 0);
  }
  95% {
    clip: rect(45px, 950px, 60px, 0);
  }
  100% {
    clip: rect(60px, 950px, 60px, 0);
  }
}
@keyframes myname-anim-2 {
  0% {
    clip: rect(60px, 950px, 60px, 0);
  }
  10% {
    clip: rect(30px, 950px, 60px, 0);
  }
  20% {
    clip: rect(60px, 950px, 60px, 0);
  }
  25% {
    clip: rect(60px, 950px, 60px, 0);
  }
  35% {
    clip: rect(30px, 950px, 60px, 0);
  }
  45% {
    clip: rect(60px, 950px, 60px, 0);
  }
  46% {
    clip: rect(0px, 950px, 0px, 0);
  }
  50% {
    clip: rect(0px, 950px, 60px, 0);
  }
  55% {
    clip: rect(45px, 950px, 60px, 0);
  }
  60% {
    clip: rect(0px, 950px, 15px, 0);
  }
  65% {
    clip: rect(45px, 950px, 60px, 0);
  }
  70% {
    clip: rect(0px, 950px, 15px, 0);
  }
  75% {
    clip: rect(0px, 950px, 0px, 0);
  }
  70% {
    clip: rect(0px, 950px, 60px, 0);
  }
  75% {
    clip: rect(45px, 950px, 60px, 0);
  }
  80% {
    clip: rect(0px, 950px, 15px, 0);
  }
  85% {
    clip: rect(45px, 950px, 60px, 0);
  }
  90% {
    clip: rect(0px, 950px, 15px, 0);
  }
  95% {
    clip: rect(15px, 950px, 30px, 0);
  }
  100% {
    clip: rect(0px, 950px, 0px, 0);
  }
}




</style>