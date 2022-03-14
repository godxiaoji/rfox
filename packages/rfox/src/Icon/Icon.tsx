import React, { isValidElement } from 'react'
import classNames from 'classnames'
import type { IconProps } from './types'
import { getIconStyles } from './util'
import { withIcon } from './with'
import FxSpriteSVG from './SpriteSVG'

const FxIcon: React.FC<
  IconProps & {
    className?: string
  }
> = props => {
  const styles = getIconStyles(props)
  const classes = classNames('fx-icon', { spin: props.spin }, props.className)

  const icon =
    typeof props.icon === 'string' ? (
      <FxSpriteSVG className={classes} iconName={props.icon} style={styles} />
    ) : (
      withIcon(props.icon)({
        className: classes,
        style: styles
      })
    )

  return <>{icon}</>
}

FxIcon.defaultProps = {
  spin: false
}

export default FxIcon
