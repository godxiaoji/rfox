import type { FocusEmits, FormItemCommonProps } from '../Form/types'
import type { OnClick } from '../helpers/types'

export interface StepperProps extends FormItemCommonProps {
  value?: number | string
  disabledMinus?: boolean
  disabledPlus?: boolean
  disabledInput?: boolean
  allowDecimal?: boolean
  min?: number | string
  max?: number | string
  step?: number | string
  decimalLength?: number | string
}

export interface StepperEmits extends FocusEmits {
  onInput?: (value: string) => void
  onChange?: (value: string) => void
  onMinusClick?: OnClick
  onPlusClick?: OnClick
}
