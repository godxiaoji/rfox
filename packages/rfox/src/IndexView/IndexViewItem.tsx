import classNames from 'classnames'
import type { IndexViewItemProps } from './types'
import type { FC } from '../helpers/types'
import { Group } from '../Group'

const FxIndexViewItem: FC<IndexViewItemProps> = ({ name = '', ...props }) => {
  const classes = classNames(
    'fx-sticky-view-item',
    'fx-index-view-item',
    props.className
  )

  return (
    <Group title={name.toString()} className={classes} data-name={name}>
      {props.children}
    </Group>
  )
}

FxIndexViewItem.displayName = 'FxStickyViewItem'

export default FxIndexViewItem
