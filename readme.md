# moto.js
### A light motion library with curvilinear support, inspired by Popmotion.
[![npm version](https://img.shields.io/npm/v/@tuia/moto.js.svg?style=flat-square)](https://www.npmjs.com/package/@tuia/moto.js)
[![npm downloads](https://img.shields.io/npm/dm/@tuia/moto.js.svg?style=flat-square)](https://www.npmjs.com/package/@tuia/moto.js)

## Documents
[API](//tuia-fed.github.io/moto.js/index.html)

## Examples

### tween
![tween](https://yun.duiba.com.cn/moto/tween.gif)

```js
import {tween} from '@tuia/moto.js'

tween({
  from: {x: 0, radius: 0, opacity: 1},
  to: {x: 200, radius: 25, opacity: .5},
  duration: 3,
  yoyo: Infinity
}).start(v => {
  target.style.transform = `translateX(${v.x}px)`
  target.style.borderRadius = `${v.radius}px`
  target.style.opacity = `${v.opacity}`
})
```

### bezier
![bezier](https://yun.duiba.com.cn/moto/bezier.1.gif)
```js
import {curve} from '@tuia/moto.js'

curve.bezier({
  points: [
    {x: 50, y: 50},
    {x: 150, y: 150},
    {x: 250, y: 50}
  ],
  duration: 3
}).start(v => {
  const dot = document.createElement('i')
  dot.classList.add('dot')
  dot.style.top = target.style.top = `${v.y}px`
  dot.style.left = target.style.left = `${v.x}px`
  target.parentElement.appendChild(dot)
})
```

### cubicBezier
![cubicBezier](https://yun.duiba.com.cn/moto/bezier.cubic.gif)
```js
import {curve} from '@tuia/moto.js'

curve.cubicBezier({
  points: [
    {x: 50, y: 50},
    {x: 100, y: 150},
    {x: 300, y: 50},
    {x: 350, y: 150}
  ]
}).start(v => {
  const dot = document.createElement('i')
  dot.classList.add('dot')
  dot.style.top = target.style.top = `${v.y}px`
  dot.style.left = target.style.left = `${v.x}px`
  target.parentElement.appendChild(dot)
})
```

### catmullRom
![catmullRom](https://yun.duiba.com.cn/moto/catmull-rom.gif)
```js
import {curve} from '@tuia/moto.js'

curve.catmullRom({
  points: [
    {x: 50, y: 50},
    {x: 100, y: 150},
    {x: 200, y: 100},
    {x: 300, y: 50},
    {x: 350, y: 150}
  ]
}).start(v => {
  const dot = document.createElement('i')
  dot.classList.add('dot')
  dot.style.top = target.style.top = `${v.y}px`
  dot.style.left = target.style.left = `${v.x}px`
  target.parentElement.appendChild(dot)
})
```
