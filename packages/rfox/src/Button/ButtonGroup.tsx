import type { ButtonGroupProps } from './types'
import { GroupContext } from './context'
import { createDefaultProps } from './props'
import { getButtonGroupClasses } from './util'
import classNames from 'classnames'
import { useChildCountProvider } from '../hooks/use-child-count'
import type { FC } from '../helpers/types'

const FxButtonGroup: FC<ButtonGroupProps> = props => {
  const { ChildCountProvider, childCount } = useChildCountProvider()
  const classes = classNames(
    getButtonGroupClasses(props, childCount),
    props.className
  )

  return (
    <GroupContext.Provider
      value={{
        size: props.size,
        pattern: props.pattern,
        shape: props.shape,
        hasGroup: true
      }}
    >
      <ChildCountProvider>
        <div className={classes}>{props.children}</div>
      </ChildCountProvider>
    </GroupContext.Provider>
  )
}

FxButtonGroup.defaultProps = createDefaultProps()

export default FxButtonGroup