import classNames from 'classnames'
import type { GroupProps } from './types'
import { getGroupClasses } from './util'
import type { FC, RenderProp } from '../helpers/types'

const FxGroup: FC<
  GroupProps & {
    renderHeader?: RenderProp
  }
> = props => {
  const classes = classNames(getGroupClasses(props), props.className)

  return (
    <div className={classes}>
      <div className="fx-group_header">
        <div className="fx-group_title">{props.title}</div>
        <div className="fx-group_more">
          {props.renderHeader && props.renderHeader()}
        </div>
      </div>
      <div className="fx-group_body fx-horizontal-hairline hairline-reverse">
        <div className="fx-group_body-inner">{props.children}</div>
      </div>
    </div>
  )
}

export default FxGroup
