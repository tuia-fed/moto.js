<template>
  <section class="page h-100">
    <nav-bar></nav-bar>
    <section class="intro d-flex flex-wrap">
      <div class="d-flex order-1 align-items-center justify-content-center">
        <img src="@/static/textures/logo.512.png" alt="">
      </div>
      <section>
        <p>Moto.js</p>
        <p>帮助开发者快速构建高效、有趣的动画。</p>
        <p>Moto.js 是一款开源的动画库。助力开发者快速实现各种动画效果而无需了解背后的复杂运算。JavaScript 核心运算库可以与各种场景无缝结合。同时，专为 Web 开发者准备了基于 Less 的常用动画合集。一键引入，轻松开发。</p>
        <p>灵感来自于 popmotion。</p>
        <div class="btn-box d-flex flex-wrap justify-content-center">
          <button class="btn btn-outline-primary">Get Started</button>
          <button class="btn btn-outline-secondary">Download</button>
        </div>
      </section>
    </section>
    <!-- features -->
    <section class="features">
      <p><i>简单易用</i><i>曲线运动</i><i>预设动画</i></p>
      <ul>
        <li><i>贝塞尔曲线：</i><i>支持二次、三次贝塞尔曲线路径绘制。动态绘制，自由终止。</i></li>
        <li><i>Catmull Rom：</i><i>样条曲线，完美的路径贯穿，动态描边随心所欲。</i></li>
        <li><i>补间动画：</i><i>tween 完美实现补间动画。</i></li>
        <li><i>复合运动：</i><i>composite 多种属性复合运动。</i></li>
        <li><i>Less 动画库：</i><i>预设多种常见动画效果，一键引入，无赘余代码。</i></li>
      </ul>
    </section>
  </section>
</template>

<script>
  import {navBar} from '../components'
  export default {
    data() {
      return {
        logo: null
      }
    },

    components: {
      navBar
    },

    methods: {
      handle(name) {

      }
    },

    created() {
      import('@/static/textures/logo.64.png')
        .then(res => this.logo = res.default)
    },

    mounted() {

    }
  }
</script>


<style lang="less" scoped>
  .page {
    background-color: #fff;
    padding-bottom: 1rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .intro {
    width: 80%;
    max-width: 60rem;
    margin: auto;
    padding-top: 1rem;

    & > * {
      flex: 1;
    }

    p {
      font-size: 1.25rem;
      font-weight: 300;
      white-space: wrap;

      &:first-child {
        font-size: 4rem;
        color: #00acfc;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .btn-box {
      margin: 1rem -.5rem 0;
      .btn {
        flex: 1;
        margin: .5rem;
      }
    }

    img {
      max-width: 70%;
    }
  }

  .features {
    width: 80%;
    max-width: 60rem;
    margin: 6rem auto 0;

    & > p:nth-child(1) {
      padding-bottom: .8rem;
      border-bottom: 1px solid #ccc;
      color: #2196F3;
      font-size: 1.5rem;
      font-weight: 300;

      i:nth-child(2) {
        margin: 0 1rem;
      }
    }

    ul {
      text-align: left;
      list-style-type: disc;
      list-style-position: inside;
      padding: .5rem 0 0 1rem;

      li {
        margin-bottom: 1rem;
        i {
          color: #555;
          &:first-child {
            font-weight: bold;
            color: #333;
          }
        }

      }
    }
  }

  @media (max-width: 768px) {
    .intro {
      text-align: center;
      flex-direction: column;

      .order-1 {
        order: 0;
        width: 100%;
        flex-basis: 100%;

        img {
          width: 50%;
        }
      }

      p {
        font-size: 1rem;
        &:first-child {
          font-size: 3rem;
        }
      }
    }
  }
</style>

