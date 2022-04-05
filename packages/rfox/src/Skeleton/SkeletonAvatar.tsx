import classNames from 'classnames'
import type { SkeletonAvatarProps } from './types'
import type { VFC } from '../helpers/types'
import { useContext } from 'react'
import { SkeletonContext } from './context'
import { getAvatarClasses } from './util'
import { skeletonDefaultProps } from './props'

const FxSkeletonAvatar: VFC<SkeletonAvatarProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(getAvatarClasses(props, consumer), props.className)

  return <div className={classes}></div>
}

FxSkeletonAvatar.defaultProps = {
  ...skeletonDefaultProps
}

export default FxSkeletonAvatar
