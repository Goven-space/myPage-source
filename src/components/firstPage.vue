<template>
  <div class="container" >
    <div class="content">
      <h2>hello</h2>
      <div class="show">
        I am a
        <span>{{nickname}}</span>|
      </div>
      <ul class="skill">
          <li>Vue</li>
          <li></li>
          <li>WebPack</li>
          <li></li>
          <li>Github</li>
          <li></li>
      </ul>
    </div>
    <div class="help"></div>
  </div>
</template>

<script>
var nameList = ["Hiker.", "Baking lover.", "stylist."];

export default {
  data() {
    return {
      //写字特效的数据
      nameList,
      nickname: "",
      length: nameList.length,
      writeLoop: null,
      deleteLoop: null,
      waitTimer:null

    };
  },
  methods: {
    //写字特效的方法
    showName: (function () {
      var index = 0;
      var nameIndex = 0;
      var currentName = "";
      var nameLength = null;
      //写
      //由于闭包函数里的方法没有this指向，所以从外部传入this
      var writeName = function (that) {
        currentName = that.nameList[index];
        nameLength = currentName.length;
        that.writeLoop = setInterval(function () {
          that.nickname = that.nickname + currentName[nameIndex++];
          if (nameIndex > nameLength - 1) {
            clearInterval(that.writeLoop);
            that.waitTimer = setTimeout(function () {
              deleteName(that);
              nameIndex = 0;
            }, 1000);
          }
        }, 200);
      };
      //删除
      function deleteName(that) {
        that.deleteLoop = setInterval(function () {
          that.nickname = that.nickname.slice(0, -1);
          if (that.nickname == "") {
            clearInterval(that.deleteLoop);
            index == that.length - 1 ? (index = 0) : index++;
              writeName(that);                
          }
        }, 100);
      }
      return writeName;
    })(),

  },
  mounted: function () {
    this.showName(this);
  },
  beforeDestroy:function(){
    //在切换组件前
    //删除写字特效的计时器
    clearInterval(this.writeLoop)
    clearInterval(this.deleteLoop)
    clearTimeout(this.waitTimer)
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-width: 800px;
  height: 100vh;
  background-image: url("../assets/firstPage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.content {
  display: inline-block;
  vertical-align: middle;
  color: white;
  .show {
    color: white;
    font-size: 50px;
    span {
      font-weight: bolder;
    }
  }
  .skill{
      font-size:20px;
      li{
          display: inline-block;
          margin: 0 10px;
      }
      li:nth-child(2n){
          vertical-align: middle;
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 5px;
      }
  }
}
.help {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}

</style>