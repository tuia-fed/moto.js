let _requestAnimationFrame, _cancelAnimationFrame

if (typeof module !== 'undefined' &&
  typeof exports !== 'undefined') {
  /* for node.js */
  _requestAnimationFrame = requestAnimationFrame || setImmediate
  _cancelAnimationFrame = cancelAnimationFrame || clearImmediate
} else {
  _requestAnimationFrame = requestAnimationFrame || setTimeout
  _cancelAnimationFrame = cancelAnimationFrame || clearTimeout
}

function Ticker() {
  this.list = []
  this.last = null
  this.started = false
  this.id = null

  this.loop = function() {
    const
      stamp = performance.now(),
      last = this.last === null ? stamp : this.last,
      dt = stamp - last

    this.last = stamp

    for (let i = 0; i < this.list.length; i++) this.list[i](dt)

    this.id = _requestAnimationFrame(this.loop.bind(this))
  }

  this.add = function(fn) {
    this.list.push(fn)
    if (!this.started) {
      this.started = true
      this.loop()
    }
  }

  this.remove = function(fn) {
    for (let i = this.list.length - 1; i > -1; i--) {
      if (this.list[i] === fn) {
        this.list.splice(i, 1)
        break
      }
    }

    if (this.started && !this.list.length) {
      this.started = false
      _cancelAnimationFrame(this.id)
    }
  }
}

const ticker = new Ticker()

export {
  Ticker,
  ticker
}