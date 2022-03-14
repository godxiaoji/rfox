import React from 'react'
export type { default as TypeException } from './exception'
import type { default as TypeException } from './exception'

interface FxCSS {
  '--fx-color'?: string
  '--fx-dark-color'?: string
  '--fx-light-color'?: string
  '--fx-front-color'?: string
  '--fx-icon-color'?: string
  '--fx-icon-size'?: string
}

export type FC<T = Record<string, unknown>> = React.FC<
  T & {
    className?: string
  }
>

export type RenderProp<T = void> = T extends void
  ? () => React.ReactNode
  : (data: T) => React.ReactNode

export interface CSSProperties extends React.CSSProperties, FxCSS {}

export type AnyObject = Record<string, any>
export type EmptyObject = Record<string, never>

export type ViewPosition = 'start' | 'center' | 'end' | 0 | 0.5 | 1

export interface Validator<T = unknown> {
  (value: T): boolean
}

export type DomSelector = HTMLElement | string | Document

/**
 * 事件
 */
export type FxEventElement = HTMLElement | Document
export interface FxEventCallback {
  (e: Event, $el: HTMLElement): void
}

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

export type OnError = (e: TypeException) => void
export type OnClick = React.MouseEventHandler<HTMLElement>
