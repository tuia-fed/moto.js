<template>
  <section class="page">
    <h2>fade-in</h2>
    <p>隐入。</p>
    <i class="placeholder"></i>
    <h3>使用</h3>
    <p>在 less 文件引入 moto.js 的 less 模块。</p>
    <pre><code class="less" v-text="snippets[0]"></code></pre>
    <p>一个从左到右逐渐显示的动画。</p>
    <pre><code class="less" v-text="snippets[4]"></code></pre>
    <i class="placeholder"></i>
    <h3>说明</h3>
    <p>fade-in 函数传入多个参数，选项如下：</p>
    <ul>
      <li><i>name:</i><i>指定 keyframe 值，默认：anime-fade-in</i></li>
      <li><i>duration:</i><i>动画执行时间(同：animation-duration)，默认：1s</i></li>
      <li><i>tx:</i><i>初始 x 轴偏移，默认：-100%</i></li>
      <li><i>ty:</i><i>初始 y 轴偏移，默认：0</i></li>
      <li><i>opacity:</i><i>初始透明度，默认：0</i></li>
      <li><i>anime:</i><i>自定义 keyframes，默认：none</i></li>
    </ul>
    <p>可通过 <strong>animation-*</strong> 属性配置其余项。</p>
    <i class="placeholder"></i>
    <h3>演示</h3>
    <p>fade-in 效果演示。</p>
    <iframe width="100%" height="500" src="//jsfiddle.net/JetLu/c67zqh28/100/embedded/result,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
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