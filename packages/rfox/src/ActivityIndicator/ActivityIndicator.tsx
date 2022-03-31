import classNames from 'classnames'
import type { ActivityIndicatorProps } from './types'
import type { VFC } from '../helpers/types'
import { getActivityIndicatorClasses } from './util'
import { LoadingIcon } from '../LoadingIcon'
import { getNumber } from '../helpers/util'

const defaultSize = 20

const FxActivityIndicator: VFC<ActivityIndicatorProps> = props => {
  const classes = classNames(
    getActivityIndicatorClasses(props),
    props.className
  )
  const nSize = getNumber(props.size, defaultSize)

  return (
    <LoadingIcon
      className={classes}
      size={nSize}
      rate={0.2}
      strokeWidth={0.0537 * nSize}
      color={props.color}
    />
  )
}

FxActivityIndicator.defaultProps = {
  animated: true,
  size: defaultSize
}

export default FxActivityIndicator
