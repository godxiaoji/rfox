import classNames from 'classnames'
import type { SkeletonTitleProps } from './types'
import type { VFC } from '../helpers/types'
import { useContext } from 'react'
import { SkeletonContext } from './context'
import { getTitleClasses } from './util'
import { skeletonDefaultProps } from './props'

const FxSkeletonTitle: VFC<SkeletonTitleProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(getTitleClasses(props, consumer), props.className)

  return <div className={classes}></div>
}

FxSkeletonTitle.defaultProps = {
  ...skeletonDefaultProps
}

export default FxSkeletonTitle
