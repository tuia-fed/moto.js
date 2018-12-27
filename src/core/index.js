import './polyfill'

export tween from './tween'
export chain from './chain'
export composite from './composite'
export * as easing from './easing'
export * as curve from './curve'

/**
 * @namespace moto
 */

/**
 * @interface Point
 */
/**
 * @name x
 * @type {number}
 * @memberof Point
 * @instance
 */
/**
 * @name y
 * @type {number}
 * @memberof Point
 * @instance
 */

/**
 * @interface Anime
 */
/**
 * 执行一个动画，返回一个 {@link Action}
 * @func start
 * @memberof Anime
 * @instance
 * @return {Action}
 */

/**
 * @interface Action
 */
/**
 * 暂停当前动画
 * @func pause
 * @memberof Action
 * @instance
 * @return {Action}
 */
/**
 * 恢复当前动画
 * @func resume
 * @memberof Action
 * @instance
 * @return {Action}
 */
/**
 * 停止当前动画，无法恢复
 * @func stop
 * @memberof Action
 * @instance
 */