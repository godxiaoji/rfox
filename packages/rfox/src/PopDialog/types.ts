import type { IconData } from '../Icon/types'
import type { PopoverProps } from '../Popover/types'
import type { PopupEmits } from '../popup/types'

export interface Option {
  name: string
  icon?: IconData
  disabled?: boolean
}

export interface Detail {
  item: {
    name: string
  }
  index: number
}

export type OnConfirm = (payload: Detail) => void

export interface PopDialogProps extends PopoverProps {
  showCancel?: boolean
  cancelText?: string
  confirmText?: string
}

export interface PopDialogEmits extends PopupEmits {
  onConfirm?: (payload: Detail) => void
}
