import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import common from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'

export default {
  input: 'src/core/index.js',
  plugins: [
    babel(),
    common(),
    resolve(),
    minify({comments: false})
  ],
  output: [
    {
      file: 'dist/moto.min.js',
      format: 'umd',
      name: 'moto',
      sourcemap: true
    }
  ]
}
