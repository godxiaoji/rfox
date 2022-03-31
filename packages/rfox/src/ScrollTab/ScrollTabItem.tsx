import classNames from 'classnames'
import type { ScrollTabItemProps } from './types'
import type { FC } from '../helpers/types'

const FxScrollTabItem: FC<ScrollTabItemProps> = props => {
  const classes = classNames(
    'fx-sticky-view-item',
    'fx-scroll-tab-item',
    props.className
  )

  return (
    <div className={classes} data-name={props.name}>
      <div className="fx-sticky-view-item_header">{props.name}</div>
      <div className="fx-sticky-view-item_body">{props.children}</div>
    </div>
  )
}

FxScrollTabItem.displayName = 'FxStickyViewItem'

export default FxScrollTabItem
