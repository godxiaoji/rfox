import classNames from 'classnames'
import type { IconProps } from './types'
import { getIconStyles } from './util'
import FxSpriteSVG from './SpriteSVG'
import type { VFC } from '../helpers/types'
import { isString } from '../helpers/util'

const FxIcon: VFC<IconProps> = ({
  icon,
  width,
  height,
  color,
  size,
  style,
  spin = false,
  className,
  ...attrs
}) => {
  const styles = getIconStyles(
    {
      width,
      height,
      size,
      color
    },
    style
  )
  const classes = classNames('fx-icon', { spin }, className)

  return (
    <>
      {isString(icon) ? (
        <FxSpriteSVG
          {...attrs}
          className={classes}
          iconName={icon}
          style={styles}
        />
      ) : (
        icon({ ...attrs, className: classes, style: styles })
      )}
    </>
  )
}

FxIcon.defaultProps = {
  spin: false
}

export default FxIcon
