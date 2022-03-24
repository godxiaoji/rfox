import classNames from 'classnames'
import type { SkeletonButtonProps } from './types'
import type { FC } from '../helpers/types'
import { useContext } from 'react'
import { SkeletonContext } from './context'
import { getSkeletonButtonClasses } from './util'
import { skeletonDefaultProps } from './props'

const FxSkeletonButton: FC<SkeletonButtonProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(
    getSkeletonButtonClasses(props, consumer),
    props.className
  )

  return <div className={classes}></div>
}

FxSkeletonButton.defaultProps = {
  ...skeletonDefaultProps
}

export default FxSkeletonButton