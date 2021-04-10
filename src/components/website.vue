<template>
  <div class="wapper">
    <div class="container">
      <div class="item">
        <div class="item-content">
          <a href="https://www.webpackjs.com/" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/webpack.png"
              alt
            />
          </a>
          <div>
            <h3>
              <a href="https://www.webpackjs.com/" target="_blank">
                Webpack
                <br />
                <small>是前端资源模块化管理和打包工具</small>
              </a>
            </h3>
            <p>Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <a href="https://vuejs.bootcss.com/guide/" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/vuejs.png"
              alt
            />
          </a>
          <div>
            <h3>
              <a href="https://vuejs.bootcss.com/guide/" target="_blank">
                Vue.js
                <br />
                <small>中文文档。</small>
              </a>
            </h3>
            <p>Vue.js - 是一套构建用户界面的渐进式框架。</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <a href="https://www.nodeapp.cn/" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/nodejs.png"
              alt
            />
          </a>
          <div>
            <h3>
              <a href="https://www.nodeapp.cn/" target="_blank">
                Node.js
                <br />
                <small>中文文档 / 手册</small>
              </a>
            </h3>
            <p>Webpack Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <a href="https://www.npmjs.cn/" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/npm.png"
              alt
            />
          </a>
          <div>
            <h3>
              <a href="https://www.npmjs.cn/" target="_blank">
                NPM
                <br />
                <small>中文文档</small>
              </a>
            </h3>
            <p>Webpack NPM（node package manager）是 Node.js 世界的包管理器。NPM 可以让 JavaScript 开发者在共享代码、复用代码以及更新共享的代码上更加方便。</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <a href="https://www.quanzhanketang.com/" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/w3schools.png"
              alt
            />
          </a>
          <div>
            <h3>
              <a href="https://www.quanzhanketang.com/" target="_blank">
                w3schools
                <br />
                <small>原版国内镜像</small>
              </a>
            </h3>
            <p>Webpack w3schools.com 是最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧！</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <a href="https://www.sasscss.com" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/sass.png"
              alt
            />
          </a>
          <div>
            <h3>
              <a href="https://www.sasscss.com" target="_blank">
                Sass
                <br />
                <small>最流行的 CSS 扩展语言解析器</small>
              </a>
            </h3>
            <p>Webpack Sass 是一个成熟、稳定、强大的 CSS 扩展语言解析器。</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <a href="https://cn.eslint.org/" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/eslint.png"
              alt
            />
          </a>
          <div>
            <h3>
              <a href="https://cn.eslint.org/" target="_blank">
                ESLint
                <br />
                <small>JavaScript 代码检查工具</small>
              </a>
            </h3>
            <p>Webpack ESLint 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具。ESLint 能够帮你轻松写出高质量的 JavaScript 代码。</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <a href="https://www.babeljs.cn/" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/babeljs.png"
              alt
            />
          </a>
          <div>
            <h3>
              <a href="https://www.babeljs.cn/" target="_blank">
                Babel
                <br />
                <small>是一个 JavaScript 编译器。</small>
              </a>
            </h3>
            <p>Webpack Babel 是一个 JavaScript 编译器。Babel 通过语法转换器支持最新版本的 JavaScript 语法。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.wapper {
  width: 100%;
  height: 100%;
  .container {
    margin: 100px;
    margin-right: 20px;
    .item {
      float: left;
      width: 23%;
      padding: 0 10px;
      margin-bottom: 15px;

      .item-content {
        border: 0.5px solid #959898;
        padding: 4px;
        margin: 2px;
        height: 290px;
        overflow: hidden;
        img {
          width: 100%;
        }
        h3 {
          a {
            color: #2f87d0;
          }
          small {
            font-size: 14px;
            color: #7b8978;
          }
        }
        p {
          font-size: 12px;
          text-overflow: ellipsis;
        }
      }
    }
    @media only screen and (max-width: 1220px) {
      .item {
        width: 300px ;
        .item-content {
          height: 350px;
        }
      }
    }
  }
}
</style>