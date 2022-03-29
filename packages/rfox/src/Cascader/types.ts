import type { FormItemCommonProps, FocusWithoutEventEmits } from '../Form/types'
import type {
  ColRow,
  PickerCommonProps,
  PickerPopupRef,
  PickerValueEmits,
  UserFieldNames,
  UserOptionItem,
  PickerViewRef
} from '../Picker/types'
import type { SelectorModelValue, SelectorDetail } from '../SelectorField/types'
import type { PopupEmits, PopupProps } from '../popup/types'

export interface ShowCascaderOptions {
  options: UserOptionItem[]
  value?: SelectorModelValue
  fieldNames?: UserFieldNames
}

export type OnSelect = (payload: SelectorDetail) => void
export type OnConfirm = (payload: SelectorDetail) => void

/**
 * CascaderView
 */
export type CascaderViewProps = PickerCommonProps

export interface CascaderViewEmits extends PickerValueEmits {
  onSelect?: OnSelect
}

export type CascaderViewRef = PickerViewRef

export interface CascaderViewGroupProps {
  tabIndex: number
  list: ColRow[]
  listIndex: number
  onItemClick: (item: ColRow) => void
}

/**
 * CascaderPopup
 */
export interface CascaderPopupProps extends PopupProps, PickerCommonProps {}

export interface CascaderPopupEmits extends PopupEmits, PickerValueEmits {
  onConfirm?: OnConfirm
}

export type CascaderPopupRef = PickerPopupRef

/**
 * Cascader
 */
export interface CascaderProps extends FormItemCommonProps, PickerCommonProps {
  placeholder?: string
}

export interface CascaderEmits
  extends FocusWithoutEventEmits,
    PickerValueEmits {}
