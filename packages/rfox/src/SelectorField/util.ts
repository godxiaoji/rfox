import type { SelectorFieldProps } from './types'

export const getClasses = (props: SelectorFieldProps) => [
  'fx-input',
  { 'has--value': !!props.label, disabled: !!props.disabled }
]

export const getInputClasses = (props: SelectorFieldProps) => [
  'fx-input_input',
  { placeholder: !props.label }
]
