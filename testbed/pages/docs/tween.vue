<template>
  <section class="page">
    <h2>tween</h2>
    <p>给定初始状态，结束状态和过渡时间来实现一个补间动画。</p>
    <p>还可以通过 ease 函数来控制动画效果。</p>
    <i class="placeholder"></i>
    <h3>使用</h3>
    <p>从 moto.js 里导入 tween。</p>
    <pre><code class="js" v-text="snippets[0]"></code></pre>
    <p>创建一个从 0 到 10 的过渡，默认过渡时间是 1s。</p>
    <pre><code class="js" v-text="snippets[1]"></code></pre>
    <p>如果有多个状态需要过渡，tween 也是支持的。</p>
    <pre><code class="js" v-text="snippets[2]"></code></pre>
    <i class="placeholder"></i>
    <h3>说明</h3>
    <p>tween 函数传入一个参数对象。选项如下：</p>
    <ul>
      <li><i>from:</i><i>初始状态值，number 类型或值为 number 的 object</i></li>
      <li><i>to:</i><i>结束状态值，number 类型或值为 number 的 object</i></li>
      <li><i>duration:</i><i>动画时长，单位 s，默认：1s</i></li>
      <li><i>ease:</i><i>时间函数，默认：t => t</i></li>
      <li><i>yoyo:</i><i>回荡次数，默认：0</i></li>
      <li><i>loop:</i><i>循环次数，默认：0</i></li>
    </ul>
    <p>执行 tween 函数会返回一个 tween&lt;object&gt;，包含如下方法：</p>
    <ul>
      <li><i>start:</i><i>开始执行动画</i></li>
      <ul>
        <p>start 接受一个 object 或 function 参数。</p>
        <li><i>{update: (value: number|object) => void, complete: () => void}:</i><i>update: 每帧调用，参数为当前状态值，complete: 动画结束调用</i></li>
        <li><i>update: (value: number|object) => void:</i><i>同上</i></li>
      </ul>
    </ul>
    <p>执行 start 函数会返回一个 action&lt;object&gt;，包含如下方法：</p>
    <ul>
      <li><i>stop:</i>停止动画，stop 后调用 resume 无效</li>
      <li><i>pause:</i>暂停动画，返回 action</li>
      <li><i>resume:</i>恢复动画，返回 action</li>
    </ul>
    <i class="placeholder"></i>
    <h3>演示</h3>
    <p>tween 效果演示。</p>
    <iframe width="100%" height="500" src="//jsfiddle.net/JetLu/c67zqh28/49/embedded/result,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </section>
</template>

<script>
  import hljs from 'highlight.js/lib/highlight'
  import javascript from 'highlight.js/lib/languages/javascript'
  import bash from 'highlight.js/lib/languages/bash'
  import html from 'highlight.js/lib/languages/xml'

  hljs.registerLanguage('js', javascript)

  export default {
    data() {
      return {
        snippets: []
      }
    },

    created() {
      import('./snippets/tween.txt').then(res => {
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