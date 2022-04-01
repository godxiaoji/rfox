import type {
  BadgeOption,
  BadgeProps as HandleBadgeOption
} from '../Badge/types'
import { CSSProperties } from '../helpers/types'
import type { IconData } from '../Icon/types'

export type ActiveValue = number | string

export interface OptionItem {
  label: string
  value: ActiveValue
  icon?: string | IconData
  activeIcon?: string | IconData
  badge?: BadgeOption
  subLabel?: string
}

export type OptionList = (ActiveValue | OptionItem)[]

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
