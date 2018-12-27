<template>
  <section class="h-100">
    <div class="target" ref="target"></div>
    <i v-for="p in points" class="dot fixed"
      :style="{top: `${p.y}px`, left: `${p.x}px`}"
    ></i>
  </section>
</template>

<script>
  import {tween, curve, composite} from 'core'
  export default {
    data() {
      return {
        points: [
          {x: 50, y: 50},
          {x: 150, y: 150},
          {x: 250, y: 50}
        ]
      }
    },
    mounted() {
      const anime = curve.bezier({
        points: [
          {x: 50, y: 50},
          {x: 150, y: 150},
          {x: 250, y: 50}
        ],
        duration: .5
      }).start(v => {
        const dot = document.createElement('i')
        dot.classList.add('dot')
        dot.style.top = this.$refs.target.style.top = `${v.y}px`
        dot.style.left = this.$refs.target.style.left = `${v.x}px`
        this.$refs.target.parentElement.appendChild(dot)
      })
      anime.pause()
      setTimeout(() => anime.resume(), 1e3)
    }
  }
</script>



<style lang="less">
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
    opacity: .5;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .dot {
    @size: 6px;
    width: @size;
    height: @size;
    border-radius: @size / 2;
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #0a9426;

    &.fixed {
      @size: 10px;
      width: @size;
      height: @size;
      border-radius: @size / 2;
      background-color: #f3c;
    }
  }
</style>


