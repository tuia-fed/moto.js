<template>
  <section class="page">
    <h3>开发指南</h3>
    <ul>
      <li><router-link to="/docs/install">安装</router-link></li>
    </ul>
    <h3>JS</h3>
    <ul>
      <li><router-link to="/docs/tween">tween</router-link></li>
      <li><router-link to="/docs/chain">chain</router-link></li>
      <li><router-link to="/docs/composite">composite</router-link></li>
      <li>
        <h4>curve</h4>
        <ul>
          <li><router-link to="/docs/curve/bezier">bezier</router-link></li>
          <li><router-link to="/docs/curve/cubic-bezier">cubicBezier</router-link></li>
          <li><router-link to="/docs/curve/catmull-rom">catmullRom</router-link></li>
        </ul>
      </li>
    </ul>
    <h3>Less</h3>
    <ul>
      <li><router-link to="/docs/less/breathe">breathe</router-link></li>
      <li><router-link to="/docs/less/fade-in">fade-in</router-link></li>
      <li><router-link to="/docs/less/fade-out">fade-out</router-link></li>
      <li><router-link to="/docs/less/jump">jump</router-link></li>
      <li><router-link to="/docs/less/tada">tada </router-link></li>
    </ul>
  </section>
</template>

<style lang="less" scoped>
  .page {
    h3 {
      color: #333;
      margin: 1rem 0;
      &:first-child {
        margin-top: 0;
      }
    }

    h4 {
      color: #444;
      margin: .5rem 0 1rem;
    }

    h3, h4 {
      font-size: 1rem;
      font-weight: bold;
      padding: 0;
    }
    ul {
      padding: 0 1rem;
      color: #444;

      li {
        margin-bottom: .5rem;
        padding: .2rem 0;
        font-size: .9rem;

        a {
          color: inherit;
          text-decoration: none;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>

