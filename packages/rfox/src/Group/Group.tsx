import classNames from 'classnames'
import type { HTMLAttributes } from 'react'
import type { GroupProps } from './types'
import { getClasses } from './util'
import type { FC, RenderProp } from '../helpers/types'

const FxGroup: FC<
  HTMLAttributes<HTMLDivElement> &
    GroupProps & {
      renderHeader?: RenderProp
    }
> = ({
  renderHeader,
  children,
  title,
  strongHeader = false,
  className,
  ...attrs
}) => {
  const classes = classNames(getClasses(strongHeader), className)

  return (
    <div {...attrs} className={classes}>
      <div className="fx-group_header">
        <div className="fx-group_title">{title}</div>
        <div className="fx-group_more">{renderHeader && renderHeader()}</div>
      </div>
      <div className="fx-group_body fx-horizontal-hairline hairline-reverse">
        <div className="fx-group_body-inner">{children}</div>
      </div>
    </div>
  )
}

export default FxGroup
