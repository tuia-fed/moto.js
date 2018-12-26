<template>
  <section class="page h-100 d-flex align-items-center justify-content-center">
    <div class="idle" :class="{target: !compiling}"></div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        compiling: state => state.less.compiling
      })
    },

    mounted() {}
  }
</script>


<style lang="less" scoped>
  .page {
    background-color: var(--light);
    overflow: auto;
  }

  .idle {
    width: 50px;
    height: 50px;
    background-color: var(--orange);
  }
</style>

