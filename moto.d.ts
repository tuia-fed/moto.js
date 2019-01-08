export function tween(TweenOption): Anime
export function composite(option: Map<string, Anime>): Anime
export function chain(...animes: Anime): Anime

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
  duration?: number = 1
  /**
   * 时间函数，默认：t => t
   */
  ease?: (t: number) => number
  /**
   * 回荡次数，默认：0
   */
  yoyo?: number = 0
  /**
   * 循环次数，默认：0
   */
  loop?: number = 0
}

interface Action {
  stop(): void
  pause(): Action
  resume(): Action
}

interface AnimeCB {
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
  start(option: AnimeCB): Action
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
  speed?: number = 10,
  /**
   * 自动闭合路径，默认：false
   */
  loop?: boolean = false
}

interface BezierOption {
  /**
   * 包含起始点和控制点的数组
   */
  points: Point[]
  /**
   * 动画时长，默认：1s
   */
  duration?: number = 1
  /**
   * 时间函数，默认：t => t
   */
  ease?: (t: number) => number
  /**
   * 回荡次数，默认：0
   */
  yoyo?: number = 0
  /**
   * 循环次数，默认：0
   */
  loop?: number = 0
}