import type { HTMLAttributes } from 'react'
import type { OnClick, SizeType, StateType } from '../helpers/types'
import type { IconData } from '../Icon/types'

export type ShapeType = 'rectangle' | 'round' | 'circle' | 'square'

export type PatternType =
  | 'default'
  | 'solid'
  | 'dashed'
  | 'borderless'
  | 'gradient'

export type FormType = 'button' | 'submit' | 'reset'

export interface ButtonGroupProps {
  shape?: ShapeType
  size?: SizeType
  pattern?: PatternType
}

export interface ButtonProps
  extends ButtonGroupProps,
    HTMLAttributes<HTMLButtonElement> {
  type?: StateType
  icon?: IconData
  loading?: boolean
  ghost?: boolean
  disabled?: boolean
  transparent?: boolean
  color?: string
  formType?: FormType
}

export type OnButtonClick = OnClick<HTMLButtonElement>

export interface ButtonEmits {
  onClick?: OnButtonClick
}
