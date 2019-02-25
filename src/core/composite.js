/**
 * 同时执行多个动画。
 * @example
 *
 * import {composite, tween} from '@tuia/moto.js'
 *
 * // 放大后在位移
 * composite({
 *   scale: tween({from: 1, to: 2}),
 *   x: tween({from: 0, to: 100})
 * }).start(v => {
 *   console.log(v.scale, v.x)
 * })
 *
 * @memberof moto
 * @func composite
 * @param {object<string, Anime>} anime - 多个动画实例
 * @return {Anime}
 */

export default function(anime) {
  const keys = []

  for (const key in anime) keys.push(key)

  function start(option) {
    const result = {}

    let update, complete,
      total = {start: 0, end: 0},
      stoped = false,
      paused = false,
      finished = false

    option instanceof Function ? update = option : {update, complete} = option

    const actions = []

    for (let i = 0, key; i < keys.length; i++) {
      total.start++
      key = keys[i]
      actions.push(anime[key].start({
        update: v => {
          result[key] = v
          total.start === keys.length && update(result)
        },

        complete: () => {
          total.end++
          total.end === keys.length && complete && complete()
        }
      }))
    }

    return {
      stop() {
        stoped = true
        for (let i = 0; i < actions.length; i++) actions[i].stop()
      },

      pause() {
        if (stoped || finished) return
        paused = true
        for (let i = 0; i < actions.length; i++) actions[i].pause()
        return this
      },

      resume() {
        if (!paused) return this
        paused = false
        for (let i = 0; i < actions.length; i++) actions[i].resume()
        return
      }
    }
  }

  return {start}
}