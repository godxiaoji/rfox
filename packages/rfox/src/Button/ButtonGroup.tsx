import React, { useState } from 'react'
import type { ButtonGroupProps } from './types'
import { createDefaultProps, GroupContext } from './common'
import { getButtonGroupClasses, getCommonClasses } from './util'
import classNames from 'classnames'
import { useChildCountProvider } from '../hooks/use-child-count'

const FxButtonGroup: React.FC<
  ButtonGroupProps & {
    className?: string
  }
> = props => {
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
