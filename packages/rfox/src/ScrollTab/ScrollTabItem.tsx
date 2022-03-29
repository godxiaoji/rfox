import classNames from 'classnames'
import type { ScrollTabItemProps } from './types'
import type { FC } from '../helpers/types'
import { useListItem } from '../hooks/use-list'
import { StickyViewListContext } from '../StickyView/context'

const FxScrollTabItem: FC<ScrollTabItemProps> = props => {
  const classes = classNames(
    'fx-sticky-view-item',
    'fx-scroll-tab-item',
    props.className
  )

  const { root } = useListItem(StickyViewListContext)

  return (
    <div className={classes} data-name={props.name} ref={root}>
      <div className="fx-sticky-view-item_header">{props.name}</div>
      <div className="fx-sticky-view-item_body">{props.children}</div>
    </div>
  )
}

export default FxScrollTabItem
