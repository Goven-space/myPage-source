<template>
  <div :class="{'left-bar':true,show:close }">
    <div class="nav">
      <a href="http://www.github.com" target="_blank">BLOG</a>
      <ul class="nav-items">
        <li :class="{push:pushName == pageNames[0]}" @click="pushBut" index="0">
          <router-link to="/">
            <span>
              <i class="iconfont icon-home"></i>
            </span>
            <span class="describe">Home</span>
          </router-link>
        </li>
        <li :class="{push:pushName == pageNames[1]}" @click="pushBut" index="1">
          <router-link to="/aboutMe">
            <span>
              <i class="iconfont icon-icon31"></i>
            </span>
            <span class="describe">About</span>
          </router-link>
        </li>
        <li :class="{push:pushName == pageNames[2]}" @click="pushBut" index="2">
          <router-link to="/myProject">
            <span>
              <i class="iconfont icon-project"></i>
            </span>
            <span class="describe">Project</span>
          </router-link>
        </li>
        <li :class="{push:pushName == pageNames[3]}" @click="pushBut" index="3">
          <router-link to="/website">
            <span>
              <i class="iconfont icon-link"></i>
            </span>
            <span class="describe">Link</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="show-but" @click="close = !close">
      <span>
        <i :class="{iconfont:true ,'icon-more_1':close,'icon-baseline-close-px':!close}"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pushName: this.pageNames[0],
      close: true
    };
  },
  props: ["pageNames"],
  methods: {
    pushBut(e) {
      var index = e.target.getAttribute("index");
      console.log;
      this.pushName = this.pageNames[index];
      this.$emit("checkPage", this.pushName);
    }
  }
};
</script>

<style lang="scss" scoped>
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  transition: left 0.1s linear;
  &.show {
    left: -80px;
  }
}
.nav {
  float: left;
  height: 100vh;
  width: 80px;
  background-color: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 5px 6px 13px 0 rgba(0, 0, 0, 0.08);
  > a {
    display: block;
    margin: 0 auto;
    padding: 50px 0;
    font-size: 20px;
    color: #5933cc;
    font-weight: bolder;
  }
  .nav-items {
    margin: 40px 0 auto;
    padding: 0;
    li {
      height: 50px;
      width: 50px;
      margin: 60px auto;
      border-radius: 50px;
      box-shadow: 1px 1px 5px #cdcdcd, -3px -7px 3px #fafafa;
      cursor: pointer;
      span {
        display: block;
        pointer-events: none;
        i {
          display: block;
          height: 50px;
          line-height: 50px;
          font-size: 30px;
          pointer-events: none;
        }
      }
      .describe {
        font-size: 14px;
      }

      &:hover {
        box-shadow: inset 1px 1px 5px #cdcdcd, inset -3px -3px 3px #fafafa;
        i {
          color: #1488eb;
          transition: color 0.2s linear 0.2s;
        }
        .describe {
          color: #1488eb;
          font-weight: bolder;
          pointer-events: none;
        }
      }
    }
    .push {
      box-shadow: inset 1px 1px 5px #cdcdcd, inset -3px -3px 3px #fafafa;
      i {
        color: #1488eb;
      }
      .describe {
        color: #1488eb;
        font-weight: bolder;
      }
    }
  }
}
.show-but {
  float: left;
  width: 40px;
  height: 40px;
  margin: 20px;
  background-color: #ff9800;
  border-radius: 5px;
  i {
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    color: white;
    font-weight: bloder;
  }
}
</style>