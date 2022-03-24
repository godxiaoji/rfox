import type { CSSProperties } from '../helpers/types'

export const getSlideClasses = (disabled?: boolean) => ({
  disabled: !!disabled
})

export const getSlideStyles = (color?: string) => {
  const obj: CSSProperties = {}

  color && (obj['--fx-color'] = color)

  return obj
}
