/**
 * 实现二次贝塞尔曲线运动。
 * @memberof moto.curve
 * @func bezier
 * @param {object} option - 参数对象
 * @param {array<Point>} option.points - 包含起始点(p0)，控制点(p1)和结束点(p2)的数组
 * @param {number} [option.duration=1] - 动画时长，单位 s，默认：1s
 * @param {function} [option.ease=t => t] - 时间函数，默认：t => t
 * @param {number} [option.yoyo=0] - 回荡次数，默认：0
 * @param {number} [option.loop=0] - 循环次数，默认：0
 * @return {Anime}
 *
 * @example
 * // 创建一个二次贝塞尔运动动画
 * import {curve} from '@tuia/moto.js'
 * curve.bezier({
 *   points: [
 *     {x: 0, y: 0},
 *     {x: 100, y: 100},
 *     {x: 200, y: 0}
 *   ]
 * }).start(v => console.log(v))
 */

export default function(option) {
  const
    {
      points = [],
      duration = 1,
      ease = t => t,
      loop = 0,
      yoyo = 0
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

    run()
    function run() {
      t += (1 / 60 / duration) * forward
      t > 1 ? t = 1 : t < 0 ? t = 0 : null

      update(bezier(points, ease(t)))

      if (stoped || paused) return

      if ((forward === 1 && t === 1) ||
        (forward === -1 && t === 0)) {
        if (loop > count.loop) {
          count.loop++
          t = 0
          id = requestAnimationFrame(run)
        } else if (yoyo > count.yoyo) {
          count.yoyo++
          forward *= -1
          id = requestAnimationFrame(run)
        } else {
          finished = true
          complete && complete()
        }
      } else {
        id = requestAnimationFrame(run)
      }
    }

    return {
      stop() {
        stoped = true
        cancelAnimationFrame(id)
      },

      pause() {
        if (stoped || finished) return
        paused = true
        cancelAnimationFrame(id)
        return this
      },

      resume() {
        paused && (paused = false, run())
        return this
      }
    }
  }

  return {start}
}

function bezier(points, t) {
  return {
    x: calc(points[0].x, points[1].x, points[2].x, t),
    y: calc(points[0].y, points[1].y, points[2].y, t)
  }
}

function calc(x, y, z, t) {
  return (1 - t) ** 2 * x + 2 * (1 - t) * t * y + t ** 2 * z
}