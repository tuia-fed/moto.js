<template>
  <section class="page">
    <section class="dropdown" v-if="animes.length"
      @blur="handle('dropdown:blur')"
      tabindex="-1"
    >
      <button class="btn btn-light dropdown-toggle"
        v-text="anime.name"
        @focus="handle('dropdown:focus')"
      ></button>
      <div class="dropdown-menu" v-show="focused">
        <li class="dropdown-item"
          v-for="(x, i) in animes"
          v-text="x.name"
          @click="handle('dropdown:select', i)"
        ></li>
      </div>
    </section>
    <div v-for="x in anime.options" class="d-flex option align-items-center">
      <template v-if="x.range">
        <i v-text="`${x.key}`"></i>
        <input
          type="range"
          class="custom-range flex-fill"
          v-model="x.value"
          @change="handle('option:change')"
          :min="x.range[0]"
          :max="x.range[1]"
          :title="x.value"
          :step="x.step"
        >
      </template>
      <template v-if="x.options">
        <i v-text="`${x.key}`"></i>
        <ul class="flex-fill">
          <li v-for="(item, i) in x.options" class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              class="custom-control-input"
              v-model="x.value"
              :name="x.key"
              :id="`${x.key}-${i}`"
              :value="item"
              @change="handle('option:change')"
            >
            <label :for="`${x.key}-${i}`" v-text="item" class="custom-control-label"></label>
          </li>
        </ul>
      </template>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import animes from '../config.less'

  export default {
    data() {
      return {
        animes,
        focused: false,
        template: [
          '@import "src/less/index.less";',
          '',
          '.target {',
          '\t$mixin;',
          '}'
        ]
      }
    },

    computed: {
      ...mapState({
        index: state => state.less.index
      }),

      anime() {
        return animes[this.index]
      }
    },

    methods: {
      flush() {
        this.$store.commit(
          'less/source',
          this.template.join('\n').replace('$mixin', this.anime.format())
        )
        this.$emit('compile')
      },

      handle(name, ...args) {
        switch (name) {
          case 'dropdown:focus': {
            this.focused = true
            break
          }

          case 'dropdown:blur': {
            this.focused = false
            console.log('blur')
            break
          }

          case 'option:change': {
            this.flush()
            break
          }

          case 'dropdown:select': {
            this.focused = false
            if (this.index === args[0]) return
            this.$store.commit('less/index', args[0])
            this.flush()
            break
          }
        }
      }
    },

    mounted() {
      this.flush()
    }
  }
</script>

<style lang="less" scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .page {
    overflow-y: auto;
  }
  .dropdown {
    margin-bottom: 3rem;
  }
  .option {
    padding-right: 1rem;
    margin-bottom: 1rem;
    i {
      margin-right: 1rem;
      width: 8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-style: normal;
      text-align: left;
      background-color: var(--light);
      border-radius: 0.2rem;
      text-align: center;
      font-weight: bold;
      padding: 0.3rem 0;
      color: #333;
      flex-shrink: 0;
    }
  }

  &.dropdown-menu {
    display: block;
  }

  &.dropdown-item {
    cursor: pointer;
  }
</style>
