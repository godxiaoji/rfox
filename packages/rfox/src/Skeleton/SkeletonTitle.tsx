import classNames from 'classnames'
import type { SkeletonTitleProps } from './types'
import type { FC } from '../helpers/types'
import { useContext } from 'react'
import { SkeletonContext } from './context'
import { getSkeletonTitleClasses } from './util'
import { skeletonDefaultProps } from './props'

const FxSkeletonTitle: FC<SkeletonTitleProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(
    getSkeletonTitleClasses(props, consumer),
    props.className
  )

  return <div className={classes}></div>
}

FxSkeletonTitle.defaultProps = {
  ...skeletonDefaultProps
}

export default FxSkeletonTitle
