<template>
  <section class="header d-flex align-items-center justify-content-between">
    <div class="h-100 d-flex align-items-center">
      <img :src="logo" class="logo" alt="logo">
      <i class="title">Moto.js</i>
    </div>
    <ul class="d-flex h-100 align-items-center">
      <li><a href="#/docs/install">文档</a></li>
      <li><a href="#/showcase">示例</a></li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        logo: null
      }
    },

    created() {
      import('@/static/textures/logo.white.64.png')
        .then(res => this.logo = res.default)
    },
  }
</script>

<style lang="less" scoped>
  .header {
    padding: .5rem 4%;
    box-shadow: 0 0 8px 0 #aaa;
    background-color: rgba(0, 174, 255, 0.6);

    .logo {
      width: 3rem;
      height: 3rem;
    }

    .title {
      font-size: 1.5rem;
      color: #fff;
      margin-left: 1rem;
    }

    ul {
      color: #fff;

      li {
        margin-right: 1.5rem;
        a {
          color: inherit;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .header {
      .logo {
        width: 1.8rem;
        height: 1.8rem;
      }
      .title {
        font-size: 1.2rem;
        margin-left: .5rem;
      }
    }
  }
</style>

