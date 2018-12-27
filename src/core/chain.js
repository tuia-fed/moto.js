/**
 * 依次执行多个动画。
 *
 * 可以添加多个参数：`chain(animeA, animeB, ...)`
 * @example
 *
 * import {chain, tween} from '@tuia/moto.js'
 *
 * // 放大后在位移
 * chain(
 *   tween({from: 1, to: 2}),
 *   tween({from: 0, to: 100})
 * ).start(v => console.log(v))
 *
 * @memberof moto
 * @func chain
 * @param {...Anime} animes - 多个动画实例
 * @return {Anime}
 */
export default function(...animes) {
  function start(option) {

    let update, complete, action,
      stoped = false,
      finished = false,
      paused = false

    option instanceof Function ? update = option : {update, complete} = option

    run()
    function run() {
      action = animes.shift().start({
        update,
        complete() {
          if (animes.length) run()
          else {
            finished = true
            complete && complete()
          }
        }
      })
    }

    return {
      stop() {
        stoped = true
        action && action.stop()
      },

      pause() {
        if (stoped || finished) return
        paused = true
        action.pause()
        return this
      },

      resume() {
        paused && action && (paused = false, action.resume())
        return this
      }
    }
  }

  return {start}
}