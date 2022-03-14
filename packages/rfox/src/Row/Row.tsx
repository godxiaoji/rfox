import classNames from 'classnames'
import type { RowProps } from './types'
import { parseGutter, getRowStyles, getRowClasses } from './util'
import { LayoutContext } from './context'
import type { FC } from '../helpers/types'

const FxRow: FC<RowProps> = props => {
  const gutter = parseGutter(props.gutter)
  const classes = classNames(getRowClasses(props), props.className)
  const styles = getRowStyles(gutter)

  return (
    <LayoutContext.Provider value={{ gutter }}>
      <div className={classes} style={styles}>
        {props.children}
      </div>
    </LayoutContext.Provider>
  )
}

FxRow.defaultProps = {
  justify: 'start',
  align: 'top'
}

export default FxRow
