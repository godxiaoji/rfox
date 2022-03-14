import { OnClick } from './../helpers/types'
import { StateType } from '../helpers/types'
import type { IconData } from '../Icon/types'

export type Mode = 'default' | 'clickable' | 'closable'

export interface NoticeBarProps {
  visible?: boolean
  title?: string
  mode?: Mode
  leftIcon?: IconData
  rightIcon?: IconData
  color?: string
  marquee?: boolean
  type?: StateType
}

export interface NoticeBarEmits {
  onCloseClick?: OnClick
}
