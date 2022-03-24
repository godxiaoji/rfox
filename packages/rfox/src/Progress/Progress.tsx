import classNames from 'classnames'
import type { ProgressProps } from './types'
import type { FC, RenderProp } from '../helpers/types'
import {
  getProgress,
  getProgressClasses,
  getProgressStyles,
  getProgressTrackClasses,
  getProgressTrackStyles
} from './util'

const FxProgress: FC<
  ProgressProps & {
    render?: RenderProp<{
      progress: string
    }>
  }
> = props => {
  const progress = getProgress(props.percentage)

  const classes = classNames(getProgressClasses(props), props.className)
  const trackClasses = classNames(getProgressTrackClasses(props))
  const styles = getProgressStyles(props)
  const trackStyles = getProgressTrackStyles(progress)

  return (
    <div className={classes} style={styles}>
      <div className="fx-progress_bar">
        <div className={trackClasses} style={trackStyles}></div>
      </div>
      {props.render || props.showText ? (
        <div className="fx-progress_text">
          {props.render
            ? props.render({
                progress
              })
            : progress}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

FxProgress.defaultProps = {
  percentage: 0,
  showText: false,
  animated: false,
  fixedBar: false
}

export default FxProgress
