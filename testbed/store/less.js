export default {
  namespaced: true,

  state: {
    source: '',
    compiling: false,
    css: '',
    index: 0
  },

  mutations: {
    source(state, value) {
      state.source = value
    },

    compiling(state, value) {
      state.compiling = value
    },

    css(state, value) {
      state.css = value
    },

    index(state, value) {
      state.index = value
    }
  }
}