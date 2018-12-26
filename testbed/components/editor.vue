<template>
  <section ref="editor"></section>
</template>


<script>
  import ace from 'ace-builds'
  import 'ace-builds/webpack-resolver'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        editor: null
      }
    },

    computed: {
      ...mapState({
        source: state => state.less.source
      })
    },

    methods: {
      async flush() {
        this.$store.commit('less/source', this.editor.getValue())
        this.$emit('compile')
      }
    },

    mounted() {
      this.editor = ace.edit(this.$refs.editor, {
        fontSize: 16,
        mode: 'ace/mode/less',
        theme: 'ace/theme/monokai',
        value: this.source,
        wrap: true,
        highlightGutterLine: false,
        highlightActiveLine: false,
        showPrintMargin: false,
        showLineNumbers: false,
        showFoldWidgets: false,
        showGutter: false
      })

      this.flush()

      this.editor.on('change', () => {
        this.flush()
      })
    }
  }
</script>
