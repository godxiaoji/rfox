import classNames from 'classnames'
import type { DividerProps } from './types'
import type { FC } from '../helpers/types'
import { getDividerClasses } from './util'

const FxDivider: FC<DividerProps> = props => {
  const classes = classNames(getDividerClasses(props), props.className)

  return (
    <div className={classes}>
      {props.title ? <span>{props.title}</span> : <></>}
    </div>
  )
}

FxDivider.defaultProps = {
  dashed: false
}

export default FxDivider
