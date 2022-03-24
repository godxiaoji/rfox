import type {
  BadgeOption,
  BadgeProps as HandleBadgeOption
} from '../Badge/types'
import { CSSProperties } from '../helpers/types'
import type { IconData } from '../Icon/types'

export interface OptionItem {
  label: string
  value: number | string
  icon?: IconData
  activeIcon?: IconData
  badge?: BadgeOption
  subLabel?: string
}

export type OptionList = (number | string | OptionItem)[]

export type ActiveValue = number | string

export interface HandleOptionItem extends OptionItem {
  badge?: HandleBadgeOption
  iconLink?: string
  activeIconLink?: string
}

export type OnChange = (value: ActiveValue, index: number) => void

export interface TabCommonProps {
  initialActiveValue?: ActiveValue
  options: OptionList
  color?: string
  activeColor?: string
  style?: CSSProperties
}

export interface TabCommonEmits {
  onChange?: OnChange
}

export interface TabProps extends TabCommonProps {
  scrollThreshold?: number
}

export type TabEmits = TabCommonEmits

export interface TabRef {
  switchTo: (value: ActiveValue) => void
  switchToIndex: (index: number) => void
}
