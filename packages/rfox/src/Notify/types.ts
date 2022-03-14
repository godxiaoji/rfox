import type { IconData } from '../Icon/types'
import type { PopupProps, PopupEmits } from '../popup/types'
import type { Noop, StateType } from '../helpers/types'

export interface NotifyProps extends PopupProps {
  title: string
  type?: StateType
  icon?: IconData
  closable?: boolean
  duration?: number
  color?: string
}

export type NotifyEmits = PopupEmits
