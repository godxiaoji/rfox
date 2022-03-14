import React, { useContext } from 'react'
import classNames from 'classnames'
import type { ColProps } from './types'
import { getColClasses, getColStyles } from './util'
import { LayoutContext } from '../Row/context'

const FxCol: React.FC<
  ColProps & {
    className?: string
  }
> = props => {
  const consumer = useContext(LayoutContext)
  const classes = classNames(getColClasses(props), props.className)
  const styles = getColStyles(consumer.gutter)

  return (
    <div className={classes} style={styles}>
      {props.children}
    </div>
  )
}

FxCol.defaultProps = {
  span: 24,
  offset: 0,
  push: 0,
  pull: 0
}

export default FxCol
