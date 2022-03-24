import { thousands } from '../helpers/digital-conversion'
import { getNumber, isNumeric } from '../helpers/util'
import type { PriceProps } from './types'

export const getPrice = (props: PriceProps) => {
  const decimalDigits = getNumber(props.decimalDigits)
  let priceStr = Number(0).toFixed(decimalDigits)

  if (isNumeric(props.price)) {
    priceStr = parseFloat(props.price as string).toFixed(decimalDigits)
  }

  if (props.thousands) {
    priceStr = thousands(priceStr)
  }

  return priceStr
}
