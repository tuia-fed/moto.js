<template>
  <section class="page">
    <section class="view d-flex">
      <panel v-if="visual"
        v-bind:index="index"
        v-on:compile="handle('compile')"
      ></panel>
      <editor v-else v-on:compile="handle('compile')"></editor>
      <preview></preview>
      <button class="btn btn-light toggle"
        v-text="visual ? 'code' : 'gui'"
        @click="handle('btn:toggle')"
      ></button>
    </section>

    <transition name="alert"><div
      class="alert alert-danger"
      v-show="error.show"
      v-text="error.message"
    ></div></transition>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import {preview, panel, editor} from '../components'

  export default {
    data() {
      return {
        visual: true,
        index: 0,
        error: {
          show: false,
          message: ''
        }
      }
    },

    computed: {
      ...mapState({
        compiling: state => state.less.compiling,
        source: state => state.less.source
      })
    },

    components: {
      preview,
      editor,
      panel
    },

    methods: {
      delay(t=0) {
        return new Promise(resolve => setTimeout(resolve, t * 1e3))
      },

      async compile() {
        if (this.compiling) return
        this.$store.commit('less/compiling', true)

        await this.delay(0.1)

        less
          .render(this.source, {
            javascriptEnabled : true
          })
          .then(res => {
            document.querySelector('style.runtime').innerHTML = res.css
          })
          .catch(async err => {
            this.error = {
              show: true,
              message: err.message || ''
            }

            this.delay(3).then(() => {
              this.error.show = false
            })

            console.error(err)
          })
          .then(() => {
            this.$store.commit('less/compiling', false)
          })
      },

      handle(name, ...args) {
        switch (name) {
          case 'compile': {
            this.compile()
            break
          }

          case 'btn:toggle': {
            this.visual ^= 1
            break
          }
        }
      }
    },

    mounted() {}
  }
</script>


<style lang="less" scoped>
  .page {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .view {
    height: 50%;
    width: 90%;
    margin: auto;
    position: relative;

    & > * {
      flex: 1;
    }

    .btn.toggle {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 6;
    }
  }

  .alert {
    max-width: 40rem;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .alert-enter-active, .alert-leave-active {
    transition: all 0.5s;
  }

  .alert-enter {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  .alert-enter-to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  .alert-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
</style>


