import type { PopupEmits, PopupProps, PopupRef } from '../popup/types'
import type { SelectorOnChange } from '../SelectorField/types'
import type { AnyObject, Noop } from '../helpers/types'
import type {
  SelectorValue,
  SelectorModelValue,
  SelectorDetail,
  SelectorValueParser,
  SelectorValueFormatter
} from '../SelectorField/types'
import type { FocusWithoutEventEmits, FormItemCommonProps } from '../Form/types'

export interface UserFieldNames {
  label?: string
  value?: string
  children?: string
}
export interface FieldNames {
  label: string
  value: string
  children: string
}

export type UserOptionItem = string | number | AnyObject
export interface OptionItem {
  label: string
  value: string | number
  children: OptionItem[]
  disabled: boolean
}

export interface Col {
  key: string
  rows: ColRow[]
}

export interface ColRow {
  label: string
  value: string | number
  hasChildren: boolean
  indexes: number[]
  values?: SelectorValue[]
  disabled?: boolean
  selected?: boolean
}

export interface PickerOptionsHandler {
  (index: number, parent?: ColRow): ColRow[]
}
export interface DefaultValueGetter {
  (): SelectorValue[]
}
export interface PickerLabelFormatter {
  (labelArray: string[]): string
}
export interface PickerHandlers {
  optionsHandler?: PickerOptionsHandler
  defaultValueGetter?: DefaultValueGetter
  formatter: SelectorValueFormatter
  parser: SelectorValueParser
  labelFormatter: PickerLabelFormatter
}

export interface ShowPickerOptions {
  options: UserOptionItem[] | UserOptionItem[][]
  title?: string
  value?: SelectorModelValue
  fieldNames?: UserFieldNames
}

export type OnConfirm = (payload: SelectorDetail) => void

/**
 * PickerCommon
 */
export interface PickerCommonProps {
  value?: SelectorModelValue
  options: UserOptionItem[]
  fieldNames?: UserFieldNames
  formatter?: SelectorValueFormatter
  parser?: SelectorValueParser
}

export interface PickerValueEmits {
  onChange?: SelectorOnChange
}

/**
 * PickerView
 */
export type PickerViewProps = PickerCommonProps

export type PickerViewEmits = PickerValueEmits

export interface PickerViewRef {
  getDetail: () => SelectorDetail
  updateValue: (value: unknown) => SelectorDetail
  resize: Noop
}

export interface PickerViewColProps {
  list: ColRow[]
  listIndex: number
  onListScroll: ($el: HTMLElement, index: number) => void
}

/**
 * PickerPopup
 */
export interface PickerPopupProps extends PopupProps, PickerCommonProps {
  title?: string
}

export interface PickerPopupEmits extends PopupEmits, PickerValueEmits {
  onConfirm?: OnConfirm
}

export interface PickerPopupRef extends PopupRef {
  getDetail: () => SelectorDetail
  updateValue: (value: unknown) => SelectorDetail
}

/**
 * Picker
 */
export interface PickerProps extends FormItemCommonProps, PickerCommonProps {
  placeholder?: string
}

export interface PickerEmits extends FocusWithoutEventEmits, PickerValueEmits {}

export interface ScrollElement extends HTMLElement {
  scrolling?: boolean
  scrollTimer?: number
}

export type PickerViewAfterUpdate = (
  valueArray: readonly SelectorValue[],
  labelArray: readonly string[],
  cols: readonly Col[]
) => void
