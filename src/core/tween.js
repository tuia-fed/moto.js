/**
 * 通过给定初始状态、结束状态和过度时间来实现一个补间动画。
 *
 * @memberof moto
 * @func tween
 * @param {object} option - tween 函数参数
 * @param {object|number} option.from - 初始状态：{x: 0, y: 0} 或者 0
 * @param {object|number} option.to - 结束状态：{x: 10, y: 10} 或者 10
 * @param {number} [option.duration=1] - 动画时长：单位s
 * @param {function} [option.ease=t=>t] - 时间函数：t => t 或者 t => t ** 2
 * @param {number} [option.yoyo=0] - 回荡次数：默认 0
 * @param {number} [option.loop=0] - 循环次数：默认 0
 * @return {Anime}
 *
 * @example
 *
 * import {tween} from '@tuia/moto.js'
 *
 * // 创建一个补间动画
 * tween({
 *   from: 0,
 *   to: 1,
 *   duration: .5
 * }).start(v => {
 *   console.log(v)
 * })
 */

import {ticker} from './ticker'


export default function(option) {
  const
    {
      duration = 1,
      ease = t => t,
      yoyo = 0,
      loop = 0
    } = option,
    complex = isNaN(option.from)

    let delta, from, to, result

    if (complex) {
      from = {}
      to = {}
      delta = {}
      result = {}
      for (let key in option.from) {
        from[key] = option.from[key]
        to[key] = option.to[key]
        delta[key] = to[key] - from[key]
      }
    } else {
      ({from, to} = option)
      delta = to - from
    }

  function start(option) {
    const count = {
      yoyo: 0,
      loop: 0
    }

    let
      update, complete, id,
      t = 0,
      forward = 1,
      stoped = false,
      paused = false,
      finished = false

    option instanceof Function ? update = option : {update, complete} = option

    function run(dt) {
      t += (dt / 1e3 / duration) * forward
      t > 1 ? t = 1 : t < 0 ? t = 0 : null

      if (complex) for (const key in delta) {
        result[key] = from[key] + delta[key] * ease(t)
      } else result = from + delta * ease(t)

      update(result)

      if (stoped || paused) return

      if ((forward === 1 && t === 1) ||
        (forward === -1 && t === 0)) {
        if (loop > count.loop) {
          count.loop++
          t = 0
        } else if (yoyo > count.yoyo) {
          count.yoyo++
          forward *= -1
        } else {
          finished = true
          ticker.remove(run)
          complete && complete()
        }
      }
    }

    ticker.add(run)

    return {
      stop() {
        stoped = true
        ticker.remove(run)
      },

      pause() {
        if (stoped || finished) return this
        paused = true
        ticker.remove(run)
        return this
      },

      resume() {
        paused && (paused = false, ticker.add(run))
        return this
      }
    }
  }

  return {start}
}