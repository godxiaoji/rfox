import type { FormProps } from '../Form/types'
import { GroupContextItemRef, GroupContextValue } from '../hooks/types'

export type ModelValue = number | string

export type OptionItem = {
  label: string
  value: ModelValue
}

export type UserOptionItem = ModelValue | OptionItem

export interface CheckboxGroupCommonProps extends FormProps {
  options?: UserOptionItem[]
  inline?: boolean
  activeColor?: string
  value?: ModelValue | ModelValue[]
}

export interface CheckboxGroupProps extends CheckboxGroupCommonProps {
  value?: ModelValue[]
}

export interface CheckboxGroupEmits {
  onChange?: (value: ModelValue[]) => void
}

export interface CheckboxCommonProps extends FormProps {
  value?: ModelValue
  checked?: boolean
  activeColor?: string
}

export interface CheckboxProps extends CheckboxCommonProps {
  circle?: boolean
}

export interface CheckboxCommonEmits {
  onChange?: (checked: boolean) => void
}

export type CheckboxEmits = CheckboxCommonEmits

export interface CheckboxContextValue extends GroupContextValue {
  value?: ModelValue | ModelValue[]
  activeColor?: string
  name?: string
  disabled?: boolean
  onChange?: (uid: symbol) => void
}

export interface CheckboxContextRef extends GroupContextItemRef {
  getInputChecked: () => boolean
  getValue: () => ModelValue | undefined
  setChecked: (checked: boolean) => void
}
