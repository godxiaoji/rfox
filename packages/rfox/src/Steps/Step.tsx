import classNames from 'classnames'
import type { StepProps } from './types'
import type { FC, RenderProp } from '../helpers/types'
import { useListItem } from '../hooks/use-list'
import { StepListContext } from './context'
import { getStepClasses } from './util'

const FxStep: FC<
  StepProps & {
    renderTitle?: RenderProp
    renderStep?: RenderProp<{
      active: boolean
      finish: boolean
    }>
  }
> = props => {
  const { activeIndex, index, root } = useListItem(StepListContext)

  const active = activeIndex === index
  const finish = index < activeIndex

  const classes = classNames(
    getStepClasses({ active, finish }),
    props.className
  )

  return (
    <div className={classes} ref={root}>
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

export default FxStep
