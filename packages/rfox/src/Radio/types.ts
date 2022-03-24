import type {
  CheckboxCommonEmits,
  CheckboxCommonProps,
  CheckboxGroupCommonProps,
  ModelValue
} from '../Checkbox/types'

export interface RadioGroupProps extends CheckboxGroupCommonProps {
  value?: ModelValue
}

export interface RadioGroupEmits {
  onChange?: (value: ModelValue) => void
}

export type RadioProps = CheckboxCommonProps

export type RadioEmits = CheckboxCommonEmits
