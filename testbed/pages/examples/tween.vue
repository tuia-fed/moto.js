<template>
  <section class="h-100">
    <div class="target" ref="target"></div>
  </section>
</template>

<script>
  import {tween} from 'core'
  export default {
    mounted() {
      tween({
        from: {x: 0, radius: 0},
        to: {x: 200, radius: 25}
      }).start(v => {
        const target = this.$refs.target
        target.style.transform = `translateX(${v.x}px)`
        target.style.borderRadius = `${v.radius}px`
      })
    }
  }
</script>


<style lang="less" scoped>
  section {
    background-color: #222;
    padding-top: 1px;
  }
  .target {
    @size: 50px;
    width: @size;
    height: @size;
    background-color: #fc3;
    margin-top: 50px;
    margin-left: 50px;
  }
</style>

