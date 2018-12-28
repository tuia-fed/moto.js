<template>
  <section class="h-100">
    <div class="target a" ref="a"></div>
    <div class="target b" ref="b"></div>
  </section>
</template>

<script>
  import {tween, chain} from 'core'
  export default {
    data() {
      return {
        points: [
          {x: 50, y: 50},
          {x: 100, y: 150},
          {x: 200, y: 100},
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
      const anime = chain(
        tween({from: {x: 0, radius: 25}, to: {x: 200, radius: 0}}),
        tween({
          from: {x: 0, radius: 0, g: 204, b: 51},
          to: {x: -200, radius: 25, g: 51, b: 204}
        })
      ).start(v => {
        let target = v.g !== undefined ? this.$refs.b : this.$refs.a
        target.css({
          transform: `translateX(${v.x}px)`,
          borderRadius: `${v.radius}px`,
          backgroundColor: v.g ? `rgb(255, ${v.g}, ${v.b})` : '#fc3'
        })
      })

      anime.pause()
      setTimeout(() => anime.resume(), 1e3)
    }
  }
</script>


<style lang="less" scoped>
  section {
    background-color: #222;
    position: relative;
  }

  .target {
    @size: 50px;
    width: @size;
    height: @size;
    border-radius: @size / 2;
    background-color: #fc3;
    position: absolute;

    &.a {
      top: 50px;
      left: 50px;
    }

    &.b {
      top: 100px;
      left: 250px;
      border-radius: 0;
    }
  }
</style>

