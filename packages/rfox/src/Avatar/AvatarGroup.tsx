import classNames from 'classnames'
import type { AvatarGroupProps } from './types'
import type { FC } from '../helpers/types'
import {
  getAvatarGroupClasses,
  getAvatarGroupCountClasses,
  getShowCount
} from './util'
import Avatar from './Avatar'
import { toArray } from '../helpers/react'

const FxAvatarGroup: FC<AvatarGroupProps> = props => {
  const childCount = toArray(props.children).length
  const showCount = getShowCount(props.totalCount)
  const classes = classNames(getAvatarGroupClasses(childCount), props.className)
  const countClasses = classNames(getAvatarGroupCountClasses(showCount))

  return (
    <div className={classes}>
      {props.children}
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
