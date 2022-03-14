import type { StateType, ToastProps } from './types'

const STATE_TYPES: StateType[] = ['default', 'success', 'loading', 'fail']

export const hasIcon = (props: ToastProps) =>
  !!(props.icon || (props.type && STATE_TYPES.indexOf(props.type) > 0))
