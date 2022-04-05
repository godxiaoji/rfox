import classNames from 'classnames'
import type { DividerProps } from './types'
import type { VFC } from '../helpers/types'
import { getClasses } from './util'

const FxDivider: VFC<DividerProps> = props => {
  const classes = classNames(getClasses(props), props.className)

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
