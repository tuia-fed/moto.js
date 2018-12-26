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