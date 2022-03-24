import type { PopupProps, PopupEmits } from '../popup/types'
import type { DomSelector } from '../helpers/types'

export interface DropdownProps extends PopupProps {
  selector: DomSelector
}

export type DropdownEmits = PopupEmits
