# moto.js
### A light motion library with curvilinear support.
[![npm version](https://img.shields.io/npm/v/@tuia/moto.js.svg?style=flat-square)](https://www.npmjs.com/package/@tuia/moto.js)
[![npm downloads](https://img.shields.io/npm/dm/@tuia/moto.js.svg?style=flat-square)](https://www.npmjs.com/package/@tuia/moto.js)

## 文档
```js

import {curve, tween, easing, composite} from '@tuia/moto.js'

// 二次贝塞尔曲线
curve.bezier({
  p1: {x: 0, y: 0},
  p2: {x: 50, y: 50},
  p3: {x: 100, y: 0},
  duration: 3, // 可选
  ease: easing.easeInOut // 时间函数，可选
}).start(v => {
  console.log(v)
})

// 三次贝塞尔曲线
curve.cubicBezier({
  p1: {x: 0, y: 0},
  p2: {x: 30, y: 30},
  p3: {x: 70, y: -30},
  p4: {x: 100, y: 0},
  duration: 3, // 可选
  ease: easing.easeInOut // 时间函数，可选
}).start(v => {
  console.log(v)
})

curve.catmullRom(
  [{x: 0, y: 0}, {x: 50, y: 50}, {x: 100, y: 0}],
  8 // 运动速度，可选
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
    p1: {x: 0, y: 0},
    p2: {x: 50, y: 50},
    p3: {x: 100, y: 0},
    duration: 1,
    ease: easing.easeInOut
  }),
  scale: tween({from: 1, to: 2})
}).start(v => {
  const {position, scale} = v
  //...
})
```

**`curve.bezier(options)`**

options`{object}`:
  - p1: 起始点 `{x, y}`
  - p2: 控制点 `{x, y}`
  - p3: 结束点 `{x, y}`
  - duration: 动画持续时间(单位：`s`)，默认 `1`
  - ease: 时间函数，默认 `easing.linear`

**`curve.cubicBezier(options)`**

options`{object}`:
  - p1: 起始点 `{x, y}`
  - p2: 控制点 `{x, y}`
  - p3: 控制点 `{x, y}`
  - p4: 结束点 `{x, y}`
  - duration: 动画持续时间(单位：`s`)，默认 `1`
  - ease: 时间函数，默认 `easing.linear`

**`curve.catmullRom(points, [v])`**

- points: 路径点数组 `[{x, y}...]`
- v: 运动速度，默认 `10`


**`tween(options)`**

options`{object}`:
  - from: 初始值`{number||object}`
  - to: 结束值`{number||object}`
  - duration: 动画持续时间(单位：`s`)，默认 `1`
  - ease: 时间函数，默认 `easing.linear`

**`composite(options)`**

options`{object}`:
  - 键值`{string}`: 动画`{tween || curve}`


以上函数都返回一个`object`:

**`start({function} || {object})`**
  - `update(v)`:
    - `v`: 当前值
  - `complete()`: 结束回调


**`start()`** 返回一个`object`:
  - `stop()`: 结束动画

