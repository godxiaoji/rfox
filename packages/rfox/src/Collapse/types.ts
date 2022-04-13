import { GroupContextValue, GroupContextItemRef } from '../hooks/types'
import type { IconData } from '../Icon/types'
import { Noop } from '../helpers/types'

export type ActiveName = string | number

export type OnChange = (activeNames: ActiveName[]) => void

export type ItemOnToggle = (payload: {
  name: ActiveName
  spread: boolean
}) => void

export interface CollapseProps {
  activeNames?: ActiveName | ActiveName[]
  accordion?: boolean
}

export interface CollapseEmits {
  onChange?: OnChange
}

export interface CollapseItemProps {
  icon?: IconData
  title?: string
  name: string | number
  disabled?: boolean
}

export interface CollapseItemEmits {
  onToggle?: ItemOnToggle
}

export interface CollapseContextValue extends GroupContextValue {
  onChange?: (uid: symbol) => void
}

export interface CollapseContextItemRef extends GroupContextItemRef {
  show: Noop
  hide: Noop
  getName: () => ActiveName
  isActive: () => boolean
}
