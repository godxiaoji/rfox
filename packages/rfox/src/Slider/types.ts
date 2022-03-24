import type { FormProps } from '../Form/types'

export interface SlideCommonProps extends FormProps {
  showValue?: boolean
  color?: string
  min?: number | string
  max?: number | string
  step?: number | string
}

export interface SliderProps extends SlideCommonProps {
  value?: number
}

export interface SliderEmits {
  onInput?: (value: number) => void
  onChange?: (value: number) => void
}
