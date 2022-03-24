import type { FormProps } from '../Form/types'

export interface SwitchProps extends FormProps {
  value?: boolean
  color?: string
  activeColor?: string
  size?: number | string
}

export interface SwitchEmits {
  onChange?: (checked: boolean) => void
}
