import type { UnionToIntersection } from '../helpers/types'

export type UseEmitFn<
  Options,
  Event extends keyof Options = keyof Options
> = UnionToIntersection<
  {
    [key in Event]: Options[key] extends (...args: infer Args) => any
      ? (event: key, ...args: Args) => void
      : (event: key, ...args: any[]) => void
  }[Event]
>

export interface ScrollToOffsetOptions {
  offset: number
  animated?: boolean
}

export interface SafeAreaInsets {
  support: boolean
  top: number
  left: number
  right: number
  bottom: number
}
