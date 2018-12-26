export default function(anime) {
  const keys = Object.keys(anime)

  function start(option) {
    const result = {}
    let update, complete,
      total = {start: 0, end: 0},
      stoped = false,
      paused = false,
      finished = false

    option instanceof Function ? update = option : {update, complete} = option

    const actions = keys.map(key => {
      total.start++
      return anime[key].start({
        update: v => {
          result[key] = v
          total.start === keys.length && update(result)
        },

        complete: () => {
          total.end++
          total.end === keys.length && complete && complete()
        }
      })
    })

    return {
      stop() {
        stoped = true
        actions.forEach(action => action.stop())
      },

      pause() {
        if (stoped || finished) return
        paused = true
        actions.forEach(action => action.pause())
        return this
      },

      resume() {
        if (!paused) return this
        paused = false
        actions.forEach(action => action.resume())
        return
      }
    }
  }

  return {start}
}