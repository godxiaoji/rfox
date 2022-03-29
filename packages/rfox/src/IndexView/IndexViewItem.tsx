import classNames from 'classnames'
import type { IndexViewItemProps } from './types'
import type { FC } from '../helpers/types'
import { useListItem } from '../hooks/use-list'
import { StickyViewListContext } from '../StickyView/context'
import { Group } from '../Group'

const FxIndexViewItem: FC<IndexViewItemProps> = ({ name = '', ...props }) => {
  const classes = classNames(
    'fx-sticky-view-item',
    'fx-index-view-item',
    props.className
  )

  useListItem(StickyViewListContext)

  return (
    <Group title={name.toString()} className={classes} data-name={name}>
      {props.children}
    </Group>
  )
}

export default FxIndexViewItem
