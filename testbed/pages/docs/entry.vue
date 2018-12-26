<template>
  <section class="page h-100 d-flex flex-column">
    <nav-bar></nav-bar>
    <section class="view d-flex">
      <side-bar class="h-100 side-bar"></side-bar>
      <section class="content h-100">
        <router-view></router-view>
      </section>
    </section>
  </section>
</template>

<script>
  import {navBar, sideBar} from '../../components'
  import 'highlight.js/styles/github.css'

  export default {
    components: {
      navBar,
      sideBar
    }
  }
</script>

<style lang="less" scoped>
  .view {
    padding-top: 2rem;
    max-width: 1200px;
    width: 90%;
    margin: auto;
    flex: 1;

    .side-bar {
      margin-right: 3rem;
    }

    .content {
      flex: 1;
      overflow: auto;
    }
  }
</style>

<style lang="less">
  .hljs {
    line-height: 1.5;
    font-family: monaco, consolas, monospace;
    font-size: 14px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
  }
</style>
