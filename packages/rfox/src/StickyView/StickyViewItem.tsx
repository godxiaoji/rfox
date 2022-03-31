import classNames from 'classnames'
import type { StickyViewItemProps } from './types'
import type { FC } from '../helpers/types'

const FxStickyViewItem: FC<StickyViewItemProps> = props => {
  const classes = classNames('fx-sticky-view-item', props.className)

  return (
    <div className={classes} data-name={props.name}>
      <div className="fx-sticky-view-item_header">{props.name}</div>
      <div className="fx-sticky-view-item_body">{props.children}</div>
    </div>
  )
}

FxStickyViewItem.displayName = 'FxStickyViewItem'

export default FxStickyViewItem
