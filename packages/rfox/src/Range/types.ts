import type { SlideCommonProps } from '../Slider/types'

export interface RangeProps extends SlideCommonProps {
  value?: number[]
  allowSameValue?: boolean
}

export interface RangeEmits {
  onInput?: (value: number[]) => void
  onChange?: (value: number[]) => void
}
