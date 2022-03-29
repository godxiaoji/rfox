import classNames from 'classnames'
import type { CSSProperties, FC } from '../helpers/types'

const FxFormFooter: FC<{ style?: CSSProperties }> = props => {
  const classes = classNames('fx-form-footer', props.className)

  return (
    <div className={classes} style={props.style}>
      {props.children}
    </div>
  )
}

export default FxFormFooter
