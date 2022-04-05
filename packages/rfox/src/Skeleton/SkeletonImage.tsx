import classNames from 'classnames'
import type { SkeletonImageProps } from './types'
import type { VFC } from '../helpers/types'
import { useContext } from 'react'
import { SkeletonContext } from './context'
import { getImageClasses } from './util'
import { skeletonDefaultProps } from './props'

const FxSkeletonImage: VFC<SkeletonImageProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(getImageClasses(props, consumer), props.className)

  return <div className={classes}></div>
}

FxSkeletonImage.defaultProps = {
  ...skeletonDefaultProps
}

export default FxSkeletonImage
