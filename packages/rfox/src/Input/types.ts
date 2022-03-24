import type { FormProps, FocusEmits } from '../Form/types'

export type Mode = 'search' | 'numeric' | 'decimal' | 'tel' | 'text' | 'none'

export interface InputProps extends FormProps {
  maxlength?: number | string
  placeholder?: string
  type?: string
  value?: string
  focus?: boolean
  readonly?: boolean
  showClear?: boolean
  showLimit?: boolean
}

export interface InputEmits extends FocusEmits {
  onInput?: (value: string) => void
  onChange?: (value: string) => void
}
