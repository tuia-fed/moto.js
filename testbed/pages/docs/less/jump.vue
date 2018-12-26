<template>
  <section class="page">
    <h2>jump</h2>
    <p>跳跃动画。</p>
    <i class="placeholder"></i>
    <h3>使用</h3>
    <p>在 less 文件引入 moto.js 的 less 模块。</p>
    <pre><code class="less" v-text="snippets[0]"></code></pre>
    <p>一个跳跃 50px 经过 3 次衰减后停下的动画。</p>
    <pre><code class="less" v-text="snippets[1]"></code></pre>
    <i class="placeholder"></i>
    <h3>说明</h3>
    <p>jump 函数传入多个参数，选项如下：</p>
    <ul>
      <li><i>height:</i><i>跳跃高度</i></li>
      <li><i>duration:</i><i>动画执行时间(同：animation-duration)，默认：1s</i></li>
      <li><i>yoyo:</i><i>弹跳次数，默认：3</i></li>
      <li><i>timing:</i><i>时间函数(同：animation-timing-function)，默认：linear</i></li>
      <li><i>delay:</i><i>延时执行(同：animation-delay)，默认：0</i></li>
      <li><i>count:</i><i>动画执行次数(同：animation-iteration-count)，默认：1</i></li>
      <li><i>direction:</i><i>动画执行顺序(同：animation-direction)，默认：normal</i></li>
      <li><i>mode:</i><i>动画模式(同：animation-fill-mode)，默认：none</i></li>
      <li><i>state:</i><i>动画状态(同：animation-play-state)，默认：running</i></li>
      <li><i>name:</i><i>指定 keyframe 值，默认：anime-jump</i></li>
    </ul>
    <i class="placeholder"></i>
    <h3>演示</h3>
    <p>jump 效果演示。</p>
    <iframe width="100%" height="500" src="//jsfiddle.net/JetLu/c67zqh28/96/embedded/result,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </section>
</template>

<script>
  import hljs from 'highlight.js/lib/highlight'
  import less from 'highlight.js/lib/languages/less'
  import bash from 'highlight.js/lib/languages/bash'
  import html from 'highlight.js/lib/languages/xml'

  hljs.registerLanguage('less', less)

  export default {
    data() {
      return {
        snippets: []
      }
    },

    created() {
      import('../snippets/less.txt').then(res => {
        this.snippets = res.default.split('===').map(item => item.trim())
        this.$nextTick(() => {
          Array.prototype.forEach.call(
            document.querySelectorAll('pre code'),
            item => hljs.highlightBlock(item)
          )
        })
      })
    },

    mounted() {

    }
  }
</script>


<style lang="less" scoped>
  .page {
    color: #5e6d82;
    font-size: .9rem;
    width: 100%;
    padding-bottom: 6rem;

    img {
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1.8rem;
      color: #333;
      margin: 2rem 0;
      border-bottom: 1px solid #eee;
      padding-bottom: 1rem;

      &:first-child {
        margin-top: 0;
      }
    }

    h3 {
      color: #444;
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .placeholder {
      display: block;
      height: 1rem;
    }

    ul {
      list-style-type: disc;
      list-style-position: inside;
      margin: 1rem 0;
      padding-left: 1rem;

      li {
        margin-bottom: .5rem;
        & > i {
          &:first-child {
            font-weight: bold;
            margin-right: 1rem;
          }
        }
      }

      .bold {
        font-weight: bold;
      }
    }
  }
</style>