/*
* @param {object} option
* @param {array} option.points - 路径点数组
* @param {number} [option.speed=10] - 移动速度
* @param {boolean} [option.loop] - 是否自动闭合路径
*/
export default function (option) {
  const {points, speed = 10, loop = false} = option

  if (loop) {
    const
      first = points[0],
      last = points[points.length - 1]

    !(first.x === last.x && first.y === last.y) && points.push(first)
  }

  /* catmull rom 不会连接首尾点 */
  points.unshift(points[0])
  points.push(points[points.length - 1])

  function start(option) {
    let id, update, complete, t = 0,
      stoped = false,
      paused = false,
      finished = false

    option instanceof Function ? update = option : {update, complete} = option

    /* function* generate() {
      for (let i = 0; i + 3 < points.length; i++) {
        yield {
          p1: points[i],
          p2: points[i + 1],
          p3: points[i + 2],
          p4: points[i + 3],
          dt: speed / distance(points[i + 1], points[i + 2])
        }
      }
    }

    /* reduce size */
    function generate() {
      let i = 0
      return {
        next() {
          const
            value = {
              p1: points[i],
              p2: points[i + 1],
              p3: points[i + 2],
              p4: points[i + 3],
              dt: speed / distance(points[i + 1], points[i + 2])
            },
            done = i + 3 >= points.length
          i++
          return {value, done}
        }
      }
    }

    const iterator = generate()
    let {p1, p2, p3, p4, dt} = iterator.next().value

    run()
    function run() {
      t += dt
      t > 1 ? t = 1 : null

      update(catmullRom(p1, p2, p3, p4, t))

      if (t === 1) {
        const {value, done} = iterator.next()
        if (done) complete && complete()
        else {
          ({p1, p2, p3, p4, dt} = value)
          t = 0
          id = requestAnimationFrame(run)
        }
      } else id = requestAnimationFrame(run)
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

function distance(p1, p2) {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}

function catmullRom(p1, p2, p3, p4, t) {
  return {
    x: calc(p1.x, p2.x, p3.x, p4.x, t),
    y: calc(p1.y, p2.y, p3.y, p4.y, t)
  }
}

function calc(w, x, y, z, t) {
  return (((-w + 3 * x - 3 * y + z) * t + (2 * w - 5 * x + 4 * y - z)) * t + y - w) * .5 * t + x
}