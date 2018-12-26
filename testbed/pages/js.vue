<template>
  <section class="page h-100"
    @click="handle('page:click', $event)"
  >
    <div class="btn-group">
      <button v-for="(x, i) in btns" v-text="x"
        class="btn btn-light"
        :class="{active: index === i}"
        @click.stop="index = i"
      ></button>
    </div>

    <!-- <img src="@/static/textures/i.jpg" alt="" style="display: block"> -->

    <div class="btn-group">
      <button class="btn btn-primary" @click.stop="handle('start')">start</button>
      <button class="btn btn-info" @click.stop="handle('pause')">pause</button>
      <button class="btn btn-info" @click.stop="handle('resume')">resume</button>
      <button class="btn btn-info" @click.stop="handle('stop')">stop</button>
    </div>

    <i v-for="dot in dots"
      class="dot"
      :style="{top: `${dot.y}px`, left: `${dot.x}px`}"
    ></i>

    <i class="player"
      :style="{top: `${position.y}px`, left: `${position.x}px`}"
    ></i>
  </section>
</template>

<script>
  import {tween, curve, easing, chain} from 'core'

  export default {
    data() {
      return {
        index: 0,
        action: null,
        dots: [],
        position: {x: 0, y: 0},
        btns: [
          'tween',
          'bezier',
          'cubic-bezier',
          'catmull-rom',
          'chain'
        ]
      }
    },

    methods: {
      handle(name, ...args) {
        switch (name) {
          case 'page:click': {
            const ev = args[0]
            this.dots.push({x: ev.pageX, y: ev.pageY})
            break
          }

          case 'start': {
            this.start()
            break
          }

          case 'pause': {
            this.action && this.action.pause()
            break
          }

          case 'resume': {
            this.action && this.action.resume()
            break
          }

          case 'stop': {
            this.action && this.action.stop()
            this.action = null
            break
          }
        }
      },

      start() {
        switch (this.index) {
          case 0: {
            this.action = tween({
              from: this.dots[0],
              to: this.dots[1],
              duration: 5,
              ease: easing.linear
            }).start({
              update: v => {
                this.position.x = v.x
                this.position.y = v.y
              }
            })
            break
          }

          case 1: {
            this.action = curve.bezier({
              points: this.dots,
              duration: 3,
              ease: easing.easeIn,
              yoyo: 5
            }).start({
              update: v => {
                this.position.x = v.x
                this.position.y = v.y
              }
            })
            break
          }

          case 2: {
            this.action = curve.cubicBezier({
              points: this.dots,
              duration: 3,
              ease: easing.easeIn,
              yoyo: 5
            }).start({
              update: v => {
                this.position.x = v.x
                this.position.y = v.y
              }
            })
            break
          }

          case 3: {
            this.action = curve.catmullRom({
              points: this.dots,
              speed: 5
            }).start({
              update: v => {
                this.position.x = v.x
                this.position.y = v.y
                const dot = document.createElement('i')
                dot.style.top = `${v.y}px`
                dot.style.left = `${v.x}px`
                dot.classList.add('green')
                document.body.appendChild(dot)
              }
            })
            break
          }

          case 4: {
            chain(
              tween({from: 0, to: 5}),
              tween({from: 0, to: 5})
            ).start(v => {
              console.log(v)
            })
            break
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .player {
    @size: 4rem;
    width: @size;
    height: @size;
    border-radius: @size / 2;
    background-color: #338bff8e;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 5;
  }

  .dot {
    @size: 12px;
    width: @size;
    height: @size;
    border-radius: @size / 2;
    background-color: #f3c;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .green {
    @size: 8px;
    width: @size;
    height: @size;
    border-radius: @size / 2;
    background-color: #00ff30;
    position: absolute;
    transform: translate(-50%, -50%);
  }
</style>


<style lang="less" scoped>
  .page {
    position: relative;

    .btn-group {
      &:nth-child(2) {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }

    .player {
      @size: 4rem;
      width: @size;
      height: @size;
      border-radius: @size / 2;
      background-color: #338bff8e;
      transform: translate(-50%, -50%);
      position: absolute;
    }

    .dot {
      @size: 12px;
      width: @size;
      height: @size;
      border-radius: @size / 2;
      background-color: #f3c;
      position: absolute;
      transform: translate(-50%, -50%);
    }
  }
</style>
