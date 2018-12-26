<template>
  <section class="page">
    <h2>安装</h2>
    <h3>npm 安装</h3>
    <p>推荐使用 npm 的方式安装，更好的与 webpack 打包方便开发。</p>
    <pre><code class="bash" v-text="snippets[0]"></code></pre>
    <i class="placeholder"></i>
    <h3>CDN</h3>
    <p>当然通过 CDN 引入 moto.js，也是一个不错的选择。</p>
    <pre><code class="html" v-text="snippets[1]"></code></pre>
    <i class="placeholder"></i>
    <h3>快速上手</h3>
    <p>通过 CDN 的方式引入，我们可以轻松创建一个线上示例。</p>
    <iframe width="100%" height="500" src="//jsfiddle.net/JetLu/c67zqh28/26/embedded/result,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </section>
</template>

<script>
  import hljs from 'highlight.js/lib/highlight'
  import javascript from 'highlight.js/lib/languages/javascript'
  import bash from 'highlight.js/lib/languages/bash'
  import html from 'highlight.js/lib/languages/xml'

  hljs.registerLanguage('js', javascript)
  hljs.registerLanguage('bash', bash)
  hljs.registerLanguage('html', html)

  export default {
    data() {
      return {
        snippets: []
      }
    },

    created() {
      import('./snippets/install.txt').then(res => {
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
  }
</style>

