import { CSSProperties } from '../helpers/types'
import { getNumber, isInteger, isNumeric } from '../helpers/util'

export const isIntegerOrHalf = (val?: number | string) => {
  if (isNumeric(val)) {
    if (isInteger(val) || (parseFloat(val as string) * 10) % 5 === 0) {
      return true
    }
  }
  return false
}

export const getMax = (count?: number | string) =>
  getNumber(count) > 0 ? Math.round(getNumber(count)) : 5

export const getRateClasses = ({
  disabled,
  readonly
}: {
  disabled?: boolean
  readonly?: boolean
}) => {
  return ['fx-rate', { disabled: !!disabled, readonly: !!readonly }]
}

export const getRateStyles = ({
  color,
  activeColor,
  size
}: {
  color?: string
  activeColor?: string
  size?: number | string
}) => {
  const obj: CSSProperties = {}

  color && (obj['--fx-color'] = color)
  activeColor && (obj['--fx-active-color'] = activeColor)
  size != null &&
    size > 0 &&
    (obj['--fx-size'] = getNumber(size as string) + 'px')

  return obj
}
