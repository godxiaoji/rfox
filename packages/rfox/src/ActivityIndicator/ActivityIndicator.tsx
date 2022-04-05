import classNames from 'classnames'
import type { ActivityIndicatorProps } from './types'
import type { VFC } from '../helpers/types'
import { getActivityIndicatorClasses } from './util'
import { LoadingIcon } from '../LoadingIcon'
import { getNumber } from '../helpers/util'

const DEFAULT_SIZE = 20

const FxActivityIndicator: VFC<ActivityIndicatorProps> = ({
  animated = true,
  ...props
}) => {
  const classes = classNames(
    getActivityIndicatorClasses(animated),
    props.className
  )
  const nSize = getNumber(props.size, DEFAULT_SIZE)

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

export default FxActivityIndicator
