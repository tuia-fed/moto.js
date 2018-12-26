/*
* points:包含起始点(p0)，控制点(p1)和结束点(p2)的数组
* duration:动画时长，单位 s，默认：1s
* ease:时间函数，默认：t => t
* yoyo:回荡次数，默认：0
* loop:循环次数，默认：0
*/

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

    run()
    function run() {
      t += (1 / 60 / duration) * forward
      t > 1 ? t = 1 : t < 0 ? t = 0 : 0

      update(bezier(points, ease(t)))

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