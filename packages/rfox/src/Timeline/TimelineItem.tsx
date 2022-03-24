import classNames from 'classnames'
import type { TimelineItemProps } from './types'
import type { FC, RenderProp } from '../helpers/types'

const FxTimelineItem: FC<
  TimelineItemProps & {
    renderTitle?: RenderProp
    renderDot?: RenderProp
  }
> = props => {
  const classes = classNames(
    'fx-timeline-item',
    'fx-horizontal-hairline',
    props.className
  )

  return (
    <div className={classes}>
      <div className="fx-timeline-item_line"></div>
      <div className="fx-timeline-item_index">
        {props.renderDot ? (
          props.renderDot()
        ) : (
          <i
            className="fx-timeline-item_dot"
            style={{ borderColor: props.dotColor }}
          ></i>
        )}
      </div>
      <div className="fx-timeline-item_inner">
        {props.title || props.renderTitle ? (
          <div className="fx-timeline-item_title">
            {props.renderTitle ? props.renderTitle() : props.title}
          </div>
        ) : (
          <></>
        )}
        <div className="fx-timeline-item_content">{props.children}</div>
      </div>
    </div>
  )
}

export default FxTimelineItem
