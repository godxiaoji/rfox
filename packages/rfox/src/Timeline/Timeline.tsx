import classNames from 'classnames'
import type { TimelineProps } from './types'
import type { FC } from '../helpers/types'

const FxTimeline: FC<TimelineProps> = props => {
  const classes = classNames('fx-timeline', props.className)

  return (
    <div className={classes} style={props.style}>
      {props.children}
    </div>
  )
}

export default FxTimeline
