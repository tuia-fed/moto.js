/* for node.js */
if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
  global.requestAnimationFrame = global.requestAnimationFrame || setImmediate
  global.cancelAnimationFrame = global.cancelAnimationFrame || clearImmediate
}