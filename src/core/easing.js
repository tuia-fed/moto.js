export function linear(t) {
  return t
}

export function easeOut(t) {
  return t * (2 - t)
}

export function easeIn(t) {
  return t ** 2
}

export function easeInOut(t) {
  t *= 2
  if (t < 1) return .5 * t ** 2
  t--
  return .5 * (1 - t * (t - 2))
}
