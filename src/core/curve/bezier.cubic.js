/**
 * 实现一个三次贝塞尔曲线运动。
 * @memberof moto.curve
 * @func cubicBezier
 * @param {object} option - 参数对象
 * @param {array<Point>} option.points - 包含起始点(p0)，控制点(p1,p2)和结束点(p3)的数组
 * @param {number} [option.duration=1] - 动画时长，单位 s，默认：1s
 * @param {function} [option.ease=t => t] - 时间函数，默认：t => t
 * @param {number} [option.yoyo=0] - 回荡次数，默认：0
 * @param {number} [option.loop=0] - 循环次数，默认：0
 * @return {Anime}
 *
 * @example
 * import {curve} from '@tuia/moto.js'
 *
 * // 创建一个三次贝塞尔运动动画
 *
 * curve.cubicBezier({
 *   points: [
 *     {x: 0, y: 0},
 *     {x: 100, y: 100},
 *     {x: 200, y: 0},
 *     {x: 300, y: 100}
 *   ]
 * }).start(v => console.log(v))
 */

import {ticker} from '../ticker'

export default function(option) {
  const
    {
      points = [],
      duration = 1,
      ease = t => t,
      yoyo = 0,
      loop = 0
    } = option,

    count = {
      yoyo: 0,
      loop: 0
    }

  function start(option) {
    let id, update, complete,
      t = 0, forward = 1,
      stoped = false,
      paused = false,
      finished = false

    option instanceof Function ? update = option : {update, complete} = option

    function run(dt) {
      t += (dt / 1e3 / duration) * forward
      t > 1 ? t = 1 : t < 0 ? t = 0 : 0

      update(bezier(points, ease(t)))

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
        if (stoped || finished) return
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

function bezier(points, t) {
  return {
    x: calc(points[0].x, points[1].x, points[2].x, points[3].x, t),
    y: calc(points[0].y, points[1].y, points[2].y, points[3].y, t)
  }
}

function calc(w, x, y, z, t) {
  return (1 - t) ** 3 * w +
    3 * (1 - t) ** 2 * t * x +
    3 * (1 - t) * t ** 2 * y +
    t ** 3 * z
}