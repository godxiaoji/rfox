import classNames from 'classnames'
import type { AvatarGroupProps } from './types'
import type { FC } from '../helpers/types'
import {
  getAvatarGroupClasses,
  getAvatarGroupCountClasses,
  getShowCount
} from './util'
import { useChildCountProvider } from '../hooks/use-child-count'
import Avatar from './Avatar'

const FxAvatarGroup: FC<AvatarGroupProps> = props => {
  const { ChildCountProvider, childCount } = useChildCountProvider()

  const showCount = getShowCount(props.totalCount)
  const classes = classNames(getAvatarGroupClasses(childCount), props.className)
  const countClasses = classNames(getAvatarGroupCountClasses(showCount))

  return (
    <div className={classes}>
      <ChildCountProvider>{props.children}</ChildCountProvider>
      {props.totalCount != null ? (
        <Avatar className="fx-avatar-group_count" color={props.countColor}>
          <span className={countClasses}>{showCount}</span>
        </Avatar>
      ) : (
        <></>
      )}
    </div>
  )
}

FxAvatarGroup.defaultProps = {}

export default FxAvatarGroup
