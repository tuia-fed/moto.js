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