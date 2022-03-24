import type { CSSProperties } from '../helpers/types'

export const getCheckboxOrRadioStyles = (activeColor?: string) => {
  const obj: CSSProperties = {}

  activeColor && (obj['--fx-active-color'] = activeColor)
  // size != null &&
  //   size > 0 &&
  //   (obj['--fx-size'] = parseFloat(size as string) + 'px')

  return obj
}

export const getCheckboxOrRadioClasses = (disabled: boolean) => [
  'fx-horizontal-hairline',
  { disabled }
]

export const getCheckboxOrRadioGroupClasses = (
  inline?: boolean,
  disabled?: boolean
) => ({ vertical: !inline, disabled: !!disabled })
