const
  path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
  {VueLoaderPlugin} = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'


const config = {
  entry: [
    'bootstrap/dist/css/bootstrap.min.css',
    './testbed/app.js'
  ],

  output: {
    path: path.resolve('dist'),
    filename: 'game.js'
  },

  resolve: {
    alias: {
      'core': path.resolve('src/core'),
      '@': path.resolve('.')
    }
  },

  devServer: {
    hot: true,
    overlay: true,
    contentBase: '.',
    stats: 'errors-only',
    overlay: true
  },

  stats: 'errors-only',

  devtool: isProd ? false : 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.txt/,
        loader: 'raw-loader'
      },
      {
        test: /\.(jpg|png|ttf|woff|eot|svg|gif)/,
        use: ['url-loader']
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default'],
      Router: ['vue-router', 'default'],
      Vuex: 'vuex',
      less: 'less'
    }),
    new HtmlWebpackPlugin({
      template: './testbed/template.html',
      hash: true,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ],

  mode: isProd ? 'production' : 'development'
}

/* 弃用 eslint */
if (false) {
  config.module.rules.push({
    enforce: 'pre',
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/,
    options: {
      failOnError: true
    }
  })
}

module.exports = config