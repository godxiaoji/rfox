import classNames from 'classnames'
import type { StepProps } from './types'
import type { FC, RenderProp } from '../helpers/types'
import { getStepClasses } from './util'

const FxStep: FC<
  StepProps & {
    renderTitle?: RenderProp
    renderStep?: RenderProp<{
      active: boolean
      finish: boolean
    }>
  }
> = ({ index = -1, active = false, finish = false, ...props }) => {
  const classes = classNames(
    getStepClasses({ active, finish }),
    props.className
  )

  return (
    <div className={classes}>
      <div className="fx-step_line"></div>
      <div className="fx-step_index">
        {props.renderStep ? (
          props.renderStep({
            active,
            finish
          })
        ) : (
          <>{index + 1}</>
        )}
      </div>
      <div className="fx-step_inner">
        {props.title || props.renderTitle ? (
          <div className="fx-step_title">
            {props.renderTitle ? props.renderTitle() : props.title}
          </div>
        ) : (
          <></>
        )}
        <div className="fx-step_content">{props.children}</div>
      </div>
    </div>
  )
}

FxStep.displayName = 'FxStep'

export default FxStep
