import classNames from 'classnames'
import type { CSSProperties, FC } from '../helpers/types'

const FxTimeline: FC<{ style?: CSSProperties }> = props => {
  const classes = classNames('fx-timeline', props.className)

  return (
    <div className={classes} style={props.style}>
      {props.children}
    </div>
  )
}

export default FxTimeline
