import type { FormProps } from '../Form/types'
import type { IconData } from '../Icon/types'

export interface RateProps extends FormProps {
  value?: number | string
  count?: number | string
  allowHalf?: boolean
  readonly?: boolean
  icon?: IconData
  activeIcon?: IconData
  color?: string
  activeColor?: string
  size?: number | string
}

export interface RateEmits {
  onInput?: (value: number) => void
  onChange?: (value: number) => void
}
