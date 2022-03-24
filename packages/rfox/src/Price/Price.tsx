import classNames from 'classnames'
import type { PriceProps } from './types'
import type { FC } from '../helpers/types'
import { getPrice } from './util'

const FxPrice: FC<PriceProps> = props => {
  const classes = classNames('fx-price', props.className)

  const priceStr = getPrice(props)

  return (
    <div className={classes}>
      {props.children}
      {props.symbol ? (
        <span className="fx-price_symbol">{props.symbol}</span>
      ) : (
        <></>
      )}
      <span className="fx-price_integer">{priceStr.split('.')[0]}</span>
      {props.decimalDigits && props.decimalDigits > 0 ? (
        <span className="fx-price_decimal">.{priceStr.split('.')[1]}</span>
      ) : (
        <></>
      )}
    </div>
  )
}

FxPrice.defaultProps = {
  price: 0,
  thousands: false,
  decimalDigits: 2
}

export default FxPrice
