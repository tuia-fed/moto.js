/**
 * 创建一个补间动画
 * @param option - 补间动画参数
 */
export function tween(option: TweenOption): Anime
/**
 * 创建一个复合动画
 * @param option - 复合动画参数
 */
export function composite(option: Map<string, Anime>): Anime

/**
 * 创建一个链式动画
 * @param animes - 一个或多个动画实例
 */
export function chain(...animes: Anime[]): Anime

export namespace easing {
  export function linear(t: number): number
  export function easeInQuad(t: number): number
  export function easeOutQuad(t: number): number
  export function easeInOutQuad(t: number): number
  export function easeInCubic(t: number): number
  export function easeOutCubic(t: number): number
  export function easeInOutCubic(t: number): number
  export function easeInQuint(t: number): number
  export function easeOutQuint(t: number): number
  export function easeInOutQuint(t: number): number
  /**
   * 三次贝塞尔的两个控制点
   * @param y1 - 范围: 0 - 1
   * @param y2 - 范围: 0 - 1
   */
  export function cubicBezier(y1: number, y2: number): (t: number) => number
}

export namespace curve {
  /**
   *
   * @param option - 参数对象
   * @param option.points - 包含起始点和控制点的数组
   * @param option.duration - 动画时长
   * @param option.ease - 时间函数
   * @param option.yoyo - 回荡次数
   * @param option.loop - 循环次数
   */
  export function bezier(option: BezierOption): Anime;
  /**
   *
   * @param option - 参数对象
   * @param option.points - 包含起始点和控制点的数组
   * @param option.duration - 动画时长
   * @param option.ease - 时间函数
   * @param option.yoyo - 回荡次数
   * @param option.loop - 循环次数
   */
  export function cubicBezier(option: BezierOption): Anime;
  /**
   *
   * @param option - 参数对象
   * @param option.points - 路径点数组
   * @param option.speed - 移动速度
   * @param option.loop - 自动闭合路径
   */
  export function catmullRom(option: CatmullRomOption): Anime;
}

interface TweenOption {
  /**
   * 初始状态
   */
  from: object | number
  /**
   * 结束状态
   */
  to: object | number
  /**
   * 动画时长，默认：1s
   */
  duration?: number
  /**
   * 时间函数，默认：t => t
   */
  ease?: (t: number) => number
  /**
   * 回荡次数，默认：0
   */
  yoyo?: number
  /**
   * 循环次数，默认：0
   */
  loop?: number
}

interface Action {
  /**
   * 停止动画，无法恢复
   */
  stop(): void
  /**
   * 暂停动画，返回 Action
   */
  pause(): Action
  /**
   * 恢复动画，返回 Action
   */
  resume(): Action
}

interface AnimeCallback {
  /**
   * 每帧回调
   * @param v - 当前动画状态
   */
  update(v: any): any
  /**
   * 动画完成时回调
   */
  complete?(): any
}

interface Anime {
  /**
   * 执行动画，返回一个 Action
   * @param update
   */
  start(update: (v: any) => void): Action
  /**
   * 执行动画，返回一个 Action
   * @param option - 对象参数
   * @param option.update
   * @param option.complete
   */
  start(option: AnimeCallback): Action
}

interface Point {
  x: number
  y: number
}

interface CatmullRomOption {
  /**
   * 路径点数组
   */
  points: Point[],
  /**
   * 移动速度，默认：10
   */
  speed?: number
  /**
   * 自动闭合路径，默认：false
   */
  loop?: boolean
}

interface BezierOption {
  /**
   * 包含起始点和控制点的数组
   */
  points: Point[]
  /**
   * 动画时长，默认：1s
   */
  duration?: number
  /**
   * 时间函数，默认：t => t
   */
  ease?: (t: number) => number
  /**
   * 回荡次数，默认：0
   */
  yoyo?: number
  /**
   * 循环次数，默认：0
   */
  loop?: number
}