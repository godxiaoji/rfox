export type UniqueID = number | string

/**
 * Style
 */
interface FxCSS {
  '--fx-color'?: string
  '--fx-dark-color'?: string
  '--fx-light-color'?: string
  '--fx-front-color'?: string
  '--fx-icon-color'?: string
  '--fx-icon-size'?: string
  '--fx-white-color'?: string
  '--fx-black-color'?: string
  '--fx-active-color'?: string
  '--fx-size'?: string
}

export type { default as TypeException } from './exception'
import type { default as TypeException } from './exception'

export type { Dayjs } from 'dayjs'

export type AnyObject = Record<string, any>
export type EmptyObject = Record<string, never>

export type ViewPosition = 'start' | 'center' | 'end' | 0 | 0.5 | 1

export type Selector = HTMLElement | string

export interface LongPressEventCallback {
  (res: { type: 'long-press' | 'click' }): void
}

export type EasingType = 'linear' | 'swing'

export interface Noop {
  (): void
}

export type PlacementType = 'bottom' | 'top' | 'left' | 'right'
export type StateType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
export type SizeType = 'large' | 'middle' | 'small'

export type UnionToIntersection<T> = (
  T extends any ? (x: T) => any : never
) extends (x: infer R) => any
  ? R
  : never

export type VoidFnToBooleanFn<VoidFn> = VoidFn extends (
  ...args: infer Args
) => void
  ? (...args: Args) => boolean
  : never

export type FnArgs<Fn> = Fn extends (...any: infer Args) => any ? Args : never

/**
 * React
 */
import * as React from 'react'

export interface CSSProperties extends React.CSSProperties, FxCSS {}

export type FC<T = Record<string, unknown>> = React.FC<
  T & {
    className?: string
  }
>
export type VFC<T = Record<string, unknown>> = React.VFC<
  T & {
    className?: string
  }
>
export type FRFC<
  T,
  P = Record<string, unknown>
> = React.ForwardRefRenderFunction<
  T,
  P & {
    className?: string
    children?: React.ReactNode | undefined
  }
>
export type FRVFC<
  T,
  P = Record<string, unknown>
> = React.ForwardRefRenderFunction<
  T,
  P & {
    className?: string
  }
>

export type RenderProp<T = void> = T extends void
  ? () => React.ReactNode
  : (data: T) => React.ReactNode
export type RenderChildren<T> =
  | ((payload: T) => React.ReactNode)
  | React.ReactNode

export type OnError = (e: TypeException) => void
export type OnClick<T extends HTMLElement = HTMLElement> =
  React.MouseEventHandler<T>
export type OnSVGClick = React.MouseEventHandler<SVGSVGElement>
export type OnFocus = React.FocusEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>
export type OnChange = React.ChangeEventHandler<HTMLInputElement>
