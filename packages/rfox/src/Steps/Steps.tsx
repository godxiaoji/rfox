import classNames from 'classnames'
import type { StepsProps } from './types'
import type { CSSProperties, FC } from '../helpers/types'
import { getStepsClasses } from './util'
import { StepListContext } from './context'
import { useList } from '../hooks/use-list'
import { noop } from '../helpers/util'

const FxSteps: FC<
  StepsProps & {
    style?: CSSProperties
  }
> = ({ activeIndex = 0, ...props }) => {
  const classes = classNames(getStepsClasses(props), props.className)

  const { ListProvider, listEl } = useList(
    StepListContext,
    { activeIndex, hasGroup: true },
    {
      itemClassName: 'fx-step',
      updateCallback: noop
    }
  )

  return (
    <div className={classes} style={props.style} ref={listEl}>
      <ListProvider>{props.children}</ListProvider>
    </div>
  )
}

export default FxSteps
