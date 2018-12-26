/**
 * 依次执行多个动画。
 * @example
 * // 放大后在位移
 * moto.chain(
 *   moto.tween({from: 1, to: 2}),
 *   moto.tween({from: 0, to: 100})
 * }).start(v => console.log(v))
 *
 * @memberof moto
 * @func chain
 * @param {...animes} animes - 多个动画实例，不支持 curve.catmullRom
 * @return {Chain}
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
  /**
   * @interface Chain
   */
  return {
    /**
     * 开始 chain 动画，传入回调函数
     * @func start
     * @memberof Chain
     * @instance
     * @param {object|function} [option] - 传入一个函数或对象，为函数时同下面的 update
     * @param {function} [option.update] - 每次更新状态时调用，参数为当前状态
     * @param {function} [option.complete] - 动画执行完成时调用
     * @return {Action}
     */
    start
  }
}