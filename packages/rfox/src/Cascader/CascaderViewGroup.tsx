import classNames from 'classnames'
import type { CascaderViewGroupProps } from './types'
import type { FC } from '../helpers/types'
import { VirtualList } from '../VirtualList'
import { Icon } from '../Icon'
import CheckOutlined from '../Icon/icons/CheckOutlined'

const FxCascaderViewGroup: FC<CascaderViewGroupProps> = ({
  tabIndex,
  list,
  listIndex,
  onItemClick
}) => {
  return (
    <div
      className="fx-cascader-view_group fx-vertical-hairline"
      style={{ zIndex: tabIndex == listIndex ? 2 : 1 }}
    >
      <VirtualList
        className="fx-cascader-view_list"
        ids={list.map(v => v.value)}
        data-index={listIndex}
        itemSize={44}
        render={({ index }) => {
          const item = list[index]
          const itemClasses = classNames(
            'fx-cascader-view_item',
            'fx-horizontal-hairline',
            {
              selected: item.selected,
              disabled: item.disabled
            }
          )

          return (
            <div
              className={itemClasses}
              key={item.value}
              data-index={index}
              onClick={() => onItemClick(item)}
            >
              <span className="fx-cascader-view_item-text">{item.label}</span>
              {item.selected ? <Icon icon={CheckOutlined} /> : <></>}
            </div>
          )
        }}
      />
    </div>
  )
}

export default FxCascaderViewGroup
