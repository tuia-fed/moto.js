export default [
  {
    name: 'breathe',
    options: [
      {key: 'duration', value: 1, range: [0.5, 1], step: .1},
      {key: 'min', value: .5, range: [.5, 1], step: .1},
      {key: 'max', value: 1.5, range: [1, 1.5], step: .1}
    ],
    format() {
      const [duration, min, max] = this.options
      return `.breathe(anime-breathe, ${duration.value}s, ${min.value}, ${max.value})`
    }
  },

  {
    name: 'fade-in',
    options: [
      {key: 'duration', value: 1, range: [0, 5], step: .5},
      {key: 'tx', value: -50, range: [-50, 50]},
      {key: 'ty', value: 0, range: [-50, 50]},
      {key: 'opacity', value: 0, range: [0, 1], step: .1}
    ],
    format() {
      const [duration, tx, ty, opacity] = this.options
      return `.fade-in(anime-fade-in, ${duration.value}s, ${tx.value}px, ${ty.value}px, ${opacity.value})`
    }
  },

  {
    name: 'fade-out',
    options: [
      {key: 'duration', value: 1, range: [0, 5], step: .5},
      {key: 'tx', value: 50, range: [-50, 50]},
      {key: 'ty', value: 0, range: [-50, 50]},
      {key: 'opacity', value: 0, range: [0, 1], step: .1}
    ],
    format() {
      const [duration, tx, ty, opacity] = this.options
      return `.fade-out(anime-fade-out, ${duration.value}s, ${tx.value}px, ${ty.value}px, ${opacity.value})`
    }
  },

  {
    name: 'jump',
    options: [
      {key: 'duration', value: 1, range: [0, 3], step: .1},
      {key: 'height', value: 100, range: [0, 100], step: 1},
      {key: 'yoyo', value: 3, range: [0, 10]}
    ],
    format() {
      const [duration, height, yoyo] = this.options
      return `.jump(anime-jump, ${duration.value}s, ${height.value}px, ${yoyo.value})`
    }
  },

  {
    name: 'tada',
    options: [
      {key: 'duration', value: 1, range: [0, 5], step: .5},
      {key: 'min-angle', value: -3, range: [-15, 15]},
      {key: 'max-angle', value: 3, range: [-15, 15]},
      {key: 'min-scale', value: .9, range: [0, 1], step: .1},
      {key: 'max-scale', value: 1.1, range: [1, 2], step: .1}
    ],
    format() {
      const [duration, minAngle, maxAngle, minScale, maxScale] = this.options
      return `.tada(anime-tada, ${duration.value}s, ${minAngle.value}deg, ${maxAngle.value}deg, ${minScale.value}, ${maxScale.value})`
    }
  }
]
