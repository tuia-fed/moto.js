<template>
  <section class="h-100">
    <div class="target" ref="target"></div>
    <i v-for="p in points" class="dot fixed"
      :style="{top: `${p.y}px`, left: `${p.x}px`}"
    ></i>
  </section>
</template>

<script>
  import {curve} from 'core'
  export default {
    data() {
      return {
        points: [
          {x: 50, y: 50},
          {x: 100, y: 150},
          {x: 300, y: 50},
          {x: 350, y: 150}
        ]
      }
    },
    mounted() {
      HTMLElement.prototype.css = function(option) {
        for (const key in option) {
          this.style[key] = option[key]
        }
      }
      const anime = curve.cubicBezier({
        points: this.points,
        duration: .6
      }).start(v => {
        const
          target = this.$refs.target,
          dot = document.createElement('i')
        dot.classList.add('dot')
        dot.css({
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#0f3',
          width: '6px',
          height: '6px',
          borderRadius: '3px',
          display: 'block'
        })
        dot.style.top = target.style.top = `${v.y}px`
        dot.style.left = target.style.left = `${v.x}px`
        target.parentElement.appendChild(dot)
      })
      anime.pause()
      setTimeout(() => anime.resume(), 1e3)
    }
  }
</script>


<style lang="less" scoped>
  section {
    background-color: #222;
    padding-top: 1px;
    position: relative;

    .dot {
      @size: 10px;
      width: @size;
      height: @size;
      border-radius: @size / 2;
      display: block;
      position: absolute;
      background-color: #f3c;
      transform: translate(-50%, -50%);
    }
  }

  .target {
    @size: 50px;
    width: @size;
    height: @size;
    border-radius: @size / 2;
    background-color: #fc3;
    opacity: .5;
    position: absolute;
    transform: translate(-50%, -50%);
  }
</style>

