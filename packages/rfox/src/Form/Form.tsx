import classNames from 'classnames'
import type { CSSProperties, FC, RenderProp } from '../helpers/types'
import FormFooter from './FormFooter'

const FxForm: FC<{
  style?: CSSProperties
  renderFooter?: RenderProp
}> = props => {
  const classes = classNames('fx-form', props.className)

  return (
    <div className={classes} style={props.style}>
      {props.children}
      {props.renderFooter ? (
        <FormFooter>{props.renderFooter()}</FormFooter>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FxForm
