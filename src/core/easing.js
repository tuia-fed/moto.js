/**
 * 时间函数模块 [gist](https://gist.github.com/gre/1650294)
 * @namespace easing
 * @memberof moto
 */

/**
 * no easing, no acceleration
 * @func linear
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function linear(t) {
  return t
}

/**
 * accelerating from zero velocity
 * @func easeInQuad
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeInQuad(t) {
  return t ** 2
}

/**
 * decelerating to zero velocity
 * @func easeOutQuad
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeOutQuad(t) {
  return t * (2 - t)
}

/**
 * acceleration until halfway, then deceleration
 * @func easeInOutQuad
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeInOutQuad(t) {
  return t < .5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t
}

/**
 * accelerating from zero velocity
 * @func easeInCubic
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeInCubic(t) {
  return t ** 3
}

/**
 * decelerating to zero velocity
 * @func easeOutCubic
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeOutCubic(t) {
  return (--t) * t ** 2 + 1
}

/**
 * acceleration until halfway, then deceleration
 * @func easeInOutCubic
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeInOutCubic(t) {
  return t < .5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

/**
 * accelerating from zero velocity
 * @func easeInQuart
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeInQuart(t) {
  return t ** 4
}

/**
 * decelerating to zero velocity
 * @func easeOutQuart
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeOutQuart(t) {
  return 1 - (--t) * t ** 3
}

/**
 * acceleration until halfway, then deceleration
 * @func easeInOutQuart
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeInOutQuart(t) {
  return t < .5 ? 8 * t ** 4 : 1 - 8 * (--t) * t ** 3
}

/**
 * accelerating from zero velocity
 * @func easeInQuint
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeInQuint(t) {
  return t ** 5
}

/**
 * decelerating to zero velocity
 * @func easeOutQuint
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeOutQuint(t) {
  return 1 + (--t) * t ** 4
}

/**
 * acceleration until halfway, then deceleration
 * @func easeInOutQuint
 * @memberof moto.easing
 * @param {number} t
 * @return {number}
 */
export function easeInOutQuint(t) {
  return t < .5 ? 16 * t ** 5 : 1 + 16 * (--t) * t ** 4
}

/**
 * cubicBezier
 * @func cubicBezier
 * @memberof moto.easing
 * @param {number} y1 - 控制点 p1 的 y 轴坐标
 * @param {number} y2 - 控制点 p2 的 y 轴坐标
 * @return {function} - 时间函数回调
 */
export function cubicBezier(y1, y2) {
  return t => calc(0, y1, y2, 1, t)
}

function calc(w, x, y, z, t) {
  return (1 - t) ** 3 * w +
    3 * (1 - t) ** 2 * t * x +
    3 * (1 - t) * t ** 2 * y +
    t ** 3 * z
}