import classNames from 'classnames'
import type { PickerViewColProps } from './types'
import type { VFC } from '../helpers/types'
import { VirtualList } from '../VirtualList'
import type { UIEventHandler } from 'react'
import { defaultItemHeight } from './util'

const FxPickerViewCol: VFC<PickerViewColProps> = ({
  list,
  listIndex,
  onListScroll
}) => {
  const onScroll: UIEventHandler<HTMLDivElement> = e => {
    onListScroll(e.currentTarget as HTMLElement, listIndex)
  }

  function getItemSize(index: number) {
    if (list.length === 1) {
      return defaultItemHeight * 5
    }

    if (index === 0 || index >= list.length - 1) {
      return defaultItemHeight * 3
    }

    return defaultItemHeight
  }

  return (
    <div className="fx-picker-view_col">
      <VirtualList
        className="fx-picker-view_list"
        ids={list.map(v => v.value)}
        data-index={listIndex}
        itemSize={getItemSize}
        onScroll={onScroll}
        render={({ index }) => {
          const item = list[index]
          const itemClasses = classNames('fx-picker-view_item', {
            selected: item.selected,
            disabled: item.disabled
          })

          return (
            <div className={itemClasses} key={item.value} data-index={index}>
              {item.label}
            </div>
          )
        }}
      ></VirtualList>
    </div>
  )
}

export default FxPickerViewCol
