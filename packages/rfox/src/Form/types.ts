import type { OnFocus } from './../helpers/types'

export interface FormProps {
  name?: string
  disabled?: boolean
}

export interface FocusEmits {
  onFocus?: OnFocus
  onBlur?: OnFocus
}
