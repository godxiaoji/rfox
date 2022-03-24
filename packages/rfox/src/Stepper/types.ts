import type { OnButtonClick } from '../Button/types'
import type { FocusEmits, FormProps } from '../Form/types'

export interface StepperProps extends FormProps {
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
  onChange?: (checked: string) => void
  onMinusClick?: OnButtonClick
  onPlusClick?: OnButtonClick
}
