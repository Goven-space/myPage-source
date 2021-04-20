<!--
 * @Author: your name
 * @Date: 2021-04-13 14:22:36
 * @LastEditTime: 2021-04-16 10:10:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myPage\src\components\musicPlayer.vue
-->
<template>
  <!-- 鼠标移动显示和隐藏播放器 -->
  <div
    :class="{'player-slide':playerShow,'wrapper':true}"
    @mouseenter.stop="playerAction(true)"
    @mouseleave.stop="playerAction(false)"
  >
    <audio ref="musicPlayer" :src="`http://music.163.com/song/media/outer/url?id=${musicList[musicNum].id}.mp3`" @ended="autoPlay"></audio>
    <div class="tool">
        <div class="container">
            <a href="javascript:;" @click="lastMusic">
                <i class="iconfont icon-shangyishou"></i>
            </a>
            <a href="javascript:;" @click="playMusic">
                <i :class="{'iconfont':true, 'icon-bofang':!musicStatus,'icon-zanting':musicStatus}"></i>
            </a>
            <a href="javascript:;" @click="nextMusic">
                <i class="iconfont icon-xiayishou"></i>
            </a>
        </div>
        
    </div>
    <div class="player-show">
      <span>{{musicList[musicNum].name}}</span>
    </div>
  </div>
</template>
<script>
// 音乐列表
var musicList = [{id:'28907016',name:'Illusionary Daytime-Shirfine'},{id:'410518453',name:'The Truth That You Leave-Pianoboy高至豪'},{id:'1328045658',name:'洪荒之力'},{id:'1372402767',name:'DJ OKAWARI'},{id:'1427515199',name:'Melancholy Galaxy-CMJ'},{id:'443242',name:'Summer-久石譲'}]
export default {
  data() {
    return {
      playerShow: false,
      showTimmer : null,
      musicNum : 0,
      musicList,
      musicStatus : false
    };
  },
  methods: {
    //延时0.5秒隐藏
    playerAction(flag) {
      if (flag) {
        this.playerShow = true;
        this.showTimmer&&clearTimeout(this.showTimmer)
      } else {
        this.showTimmer = setTimeout(this.hidePlayer, 500);
      }
    },
    //播放器显示隐藏
    hidePlayer() {
      this.playerShow = false;
    },
    //上一首音乐
    lastMusic(){
        var player = this.$refs.musicPlayer
        if(!player.ended){
          player.pause()
        }
        this.musicNum -=1 
        if(this.musicNum<0){
            this.musicNum = this.musicList.length-1
        }
        this.$nextTick(function(){
            player.play()
            this.musicStatus = true
        })
        
    },
    //播放音乐
    playMusic(){
        var player = this.$refs.musicPlayer
        player.play()
        if(!this.musicStatus){
            player.play()
            
        }else{
            player.pause()
        }
        this.musicStatus = !this.musicStatus
    },
    //下一首音乐
    nextMusic(){
        var player = this.$refs.musicPlayer
        if(!player.ended){
          player.pause()
        }
        this.musicNum +=1 
        if(this.musicNum>this.musicList.length-1){
            this.musicNum = 0
        }
        this.$nextTick(function(){
            player.play()
            this.musicStatus = true
        })
        
    },
    //自动播放下一首
    autoPlay(){
      this.nextMusic()
      this.playMusic()
    }
  },
  //页面刷新时，随机跟新第一首音乐
  mounted:function(){
      this.musicNum = Math.floor(Math.random()*this.musicList.length)
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  z-index: 100;
  top: -40px;
  right: 50px;
  //   width: 250px;
  background:rgba(0,0,0,0.7);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.8);
  transition: top 0.3s linear;
  .tool {
    width: 200px;
    height: 40px;
    .container{    
        a{
            display:inline-block;
            margin:0 10px;
            width:40px;
            height:40px;
            line-height:40px;
            font-size:30px;
            color:white;

        }
    }
  }
  .player-show {
    width: 200px;
    height: 35px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    span{
      color:white;
      font-size:14px;
      
    }
  }
}
.player-slide {
  top: 0;
}
</style>