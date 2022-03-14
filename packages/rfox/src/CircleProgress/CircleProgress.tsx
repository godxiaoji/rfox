import classNames from 'classnames'
import type { CircleProgressProps } from './types'
import type { FC } from '../helpers/types'
import { LoadingIcon } from '../LoadingIcon'
import { DEFAULT_SIZE, DEFAULT_STROKE_WIDTH } from '../LoadingIcon/util'
import { getNumber, rangeInteger } from '../helpers/util'
import { getFontSize } from './util'

const FxCircleProgress: FC<
  CircleProgressProps & {
    render?: (progress: string) => React.ReactNode
  }
> = props => {
  const classes = classNames('fx-circle-progress', props.className)
  const nSize = getNumber(props.size, DEFAULT_SIZE)
  const progress = rangeInteger(props.percentage, 0, 100) + '%'
  const fontSize = getFontSize(nSize)

  return (
    <div className={classes} style={{ fontSize: fontSize + 'px' }}>
      <LoadingIcon
        className="fx-circle-progress_bar"
        size={nSize}
        rate={rangeInteger(props.percentage, 0, 100) / 100}
        strokeWidth={props.strokeWidth}
        color={props.color}
      />
      <div
        className="fx-circle-progress_text"
        style={{ padding: (props.strokeWidth ?? DEFAULT_STROKE_WIDTH) + 'px' }}
      >
        {props.render ? props.render(progress) : props.children || progress}
      </div>
    </div>
  )
}

FxCircleProgress.defaultProps = {
  size: DEFAULT_SIZE,
  strokeWidth: DEFAULT_STROKE_WIDTH
}

export default FxCircleProgress
