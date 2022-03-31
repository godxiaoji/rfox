import type { FormItemCommonProps, FocusEmits } from '../Form/types'
import { OnClick } from '../helpers/types'

export type Mode = 'search' | 'numeric' | 'decimal' | 'tel' | 'text' | 'none'

export interface InputProps extends FormItemCommonProps {
  maxlength?: number | string
  placeholder?: string
  type?: string
  value?: string
  focus?: boolean
  readOnly?: boolean
  showClear?: boolean
  showLimit?: boolean
}

export interface InputEmits extends FocusEmits {
  onInput?: (value: string) => void
  onChange?: (value: string) => void
  onClick?: OnClick<HTMLLabelElement>
}
