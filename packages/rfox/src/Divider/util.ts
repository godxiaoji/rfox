import type { DividerProps } from './types'

export const getDividerClasses = (props: DividerProps) => {
  return [
    'fx-divider',
    'fx-horizontal-hairline',
    {
      'has--title': !!props.title,
      'border--dashed': !!props.dashed
    }
  ]
}
