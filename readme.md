# moto.js
### A light motion library with curvilinear support, inspired by Popmotion.
[![npm version](https://img.shields.io/npm/v/@tuia/moto.js.svg?style=flat-square)](https://www.npmjs.com/package/@tuia/moto.js)
[![npm downloads](https://img.shields.io/npm/dm/@tuia/moto.js.svg?style=flat-square)](https://www.npmjs.com/package/@tuia/moto.js)

## 文档
```js

import {curve, tween, easing, composite} from '@tuia/moto.js'

// 二次贝塞尔曲线
curve.bezier({
  points: [
    {x: 0, y: 0},
    {x: 50, y: 50},
    {x: 100, y: 0}
  ],
  duration: 3, // 可选
  ease: easing.easeInOut // 时间函数，可选
}).start(v => {
  console.log(v)
})

// 三次贝塞尔曲线
curve.cubicBezier({
  points: [
    {x: 0, y: 0},
    {x: 30, y: 30},
    {x: 70, y: -30},
    {x: 100, y: 0}
  ],
  duration: 3, // 可选
  ease: easing.easeInOut // 时间函数，可选
}).start(v => {
  console.log(v)
})

curve.catmullRom({
  points: [
    {x: 0, y: 0},
    {x: 50, y: 50},
    {x: 100, y: 0}
  ],
  speed: 8 // 可选
).start({
  update: v => console.log(v)
  complete: () => {}
})

const anime = tween({
  from: {x: 0, scale: 1},
  to: {x: 100, scale: 2},
  duration: 5, // 可选
  ease: easing.linear // 可选
}).start({
  update: v => console.log(v),
  complete: () => {}
})

setTimeout(() => anime.stop(), 2e3)

// 组合模式
composite({
  position: curve.bezier({
    points: [
      {x: 0, y: 0},
      {x: 50, y: 50},
      {x: 100, y: 0}
    ],
    duration: 1,
    ease: easing.easeInOut
  }),
  scale: tween({from: 1, to: 2})
}).start(v => {
  const {position, scale} = v
  //...
})
```
