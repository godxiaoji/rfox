import classNames from 'classnames'
import type { SkeletonImageProps } from './types'
import type { FC } from '../helpers/types'
import { useContext } from 'react'
import { SkeletonContext } from './context'
import { getSkeletonImageClasses } from './util'
import { skeletonDefaultProps } from './props'

const FxSkeletonImage: FC<SkeletonImageProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(
    getSkeletonImageClasses(props, consumer),
    props.className
  )

  return <div className={classes}></div>
}

FxSkeletonImage.defaultProps = {
  ...skeletonDefaultProps
}

export default FxSkeletonImage
