import classNames from 'classnames'
import type { SkeletonProps } from './types'
import { skeletonDefaultProps } from './props'
import type { FC, RenderProp } from '../helpers/types'
import SkeletonAvatar from './SkeletonAvatar'
import SkeletonTitle from './SkeletonTitle'
import SkeletonParagraph from './SkeletonParagraph'
import { getSkeletonClasses } from './util'
import { SkeletonContext } from './context'

const FxSkeleton: FC<
  SkeletonProps & {
    renderLayout?: RenderProp
  }
> = props => {
  const classes = classNames(getSkeletonClasses(props), props.className)

  return (
    <SkeletonContext.Provider value={props}>
      {props.loading ? (
        <div className={classes}>
          <div className="fx-skeleton_layout">
            {props.avatar ? (
              <div className="fx-skeleton_layout-left">
                <SkeletonAvatar />
              </div>
            ) : (
              <></>
            )}
            <div className="fx-skeleton_layout-right">
              <SkeletonTitle />
              <SkeletonParagraph />
            </div>
          </div>
        </div>
      ) : (
        props.children
      )}
    </SkeletonContext.Provider>
  )
}

FxSkeleton.defaultProps = {
  ...skeletonDefaultProps,
  loading: true,
  avatar: false
}

export default FxSkeleton
