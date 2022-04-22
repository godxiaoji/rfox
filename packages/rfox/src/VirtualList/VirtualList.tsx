import type { HTMLAttributes } from 'react'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import type {
  ScrollTo,
  ScrollToEnd,
  ScrollToIndex,
  VirtualListEmits,
  VirtualListProps,
  VirtualListRef
} from './types'
import type { FRFC, RenderProp, UniqueID } from '../helpers/types'
import {
  cloneData,
  getSameValueArray,
  isNumber,
  rangeNumber
} from '../helpers/util'
import Exception from '../helpers/exception'
import { getViewPosition } from '../helpers/dom'
import type { ViewPosition } from '../helpers/types'
import type { OnVisibleItemsChangePayload, ListItem, RenderItem } from './types'
import { useScroll, useScrollTo } from '../hooks/use-scroll'
import { useResizeObserver } from '../hooks/use-resize-observer'
import { getClasses, getItemStyles, getListStyles } from './util'
import type { ScrollToOffsetOptions } from '../hooks/types'

// 对数据进行分割，以50个为一组
const calcGroupCount = 50

const FxVirtualList: FRFC<
  VirtualListRef,
  HTMLAttributes<HTMLDivElement> &
    VirtualListProps &
    VirtualListEmits & {
      render: RenderProp<{
        index: number
        id: UniqueID
      }>
      renderSeparator?: RenderProp<{
        index: number
      }>
    }
> = (
  {
    render,
    renderSeparator,
    preLoad = 1.5,
    initialWaterfallCount = 1,
    approvedItemVisibleScale = 0.5,
    initialHorizontal = false,
    className,
    itemSize,
    onVisibleItemsChange,
    onResize,
    ids = [],
    ...attrs
  },
  ref
) => {
  const root = useRef<HTMLDivElement>(null)
  const listEl = useRef<HTMLUListElement>(null)
  const poolEl = useRef<HTMLUListElement>(null)
  const scrollEl = useRef<HTMLElement>()

  const [horizontal] = useState(
    !(initialWaterfallCount > 1 || !initialHorizontal)
  )
  const cols = useRef(
    initialWaterfallCount > 1
      ? getSameValueArray(0, initialWaterfallCount)
      : [0]
  )
  const [colsSizeMax, setColsSizeMax] = useState(0)

  const list = useRef<ListItem[]>([])
  const [renderList, setRenderList] = useState<RenderItem[]>([])
  const [renderPoolList, setRenderPoolList] = useState<RenderItem[]>([])

  const classes = classNames(getClasses(horizontal), className)

  function getFixedSize(index: number) {
    if (typeof itemSize === 'function') {
      try {
        const size = itemSize(index)

        if (isNumber(size)) {
          return size
        }
      } catch (error) {
        console.error(
          new Exception(
            'The object.size value returned by getItemSize should be a Number type.',
            Exception.TYPE.PROP_ERROR,
            'FlatList'
          )
        )
      }
    } else if (isNumber(itemSize)) {
      return itemSize
    }

    return -1
  }

  const [isDataChange, setIsDataChange] = useState(false)

  function dataToList(_ids: UniqueID[]) {
    const newList: ListItem[] = []

    let isChange = _ids.length !== list.current.length

    _ids.forEach((id, index) => {
      const oldItem = list.current[index]
      // 如果没有固定高度（或宽度），默认不回收，因为需要展示以获取当前高度
      let newItem: ListItem = {
        id,
        index,
        size: -1
      }

      if (oldItem && newItem.id === oldItem.id) {
        newItem = oldItem
      } else {
        newItem.size = getFixedSize(newItem.index)
        isChange = true
      }

      newList.push(newItem)
    })

    list.current = newList
    updatePoolList(newList)

    if (isChange) {
      resetCalc()

      setIsDataChange(true)
    } else {
      updateItems('dataChange')
    }
  }

  const updatePoolList = useCallback(
    (allList: ListItem[]) => {
      const newList: RenderItem[] = []

      allList.forEach(item => {
        if (item.size === -1 && !renderList.some(v => v.id === item.id)) {
          newList.push(item)
        }
      })

      setRenderPoolList(newList)
    },
    [renderList]
  )

  useEffect(() => {
    // 有死循环风险
    if (isDataChange) {
      updateItemsSize()
      updateItems('dataChange')
      setIsDataChange(false)
    }
  }, [isDataChange])

  function getElSize($el?: HTMLElement) {
    return $el ? $el[horizontal ? 'offsetWidth' : 'offsetHeight'] : 0
  }

  function getScrollSize() {
    return scrollEl.current
      ? scrollEl.current[horizontal ? 'scrollLeft' : 'scrollTop']
      : 0
  }

  // 是否计算完列表
  const isCalcEnd = useRef(false)
  const calcGroups = useRef<
    {
      index: number
      offset: number
      cols: number[]
    }[]
  >([])
  /**
   * 重置计算列表位置结果
   */
  function resetCalc() {
    isCalcEnd.current = false
    calcGroups.current = [
      {
        index: 0,
        offset: 0,
        cols: cols.current.map(() => 0)
      }
    ]
  }

  useLayoutEffect(resetCalc, [])

  /**
   * 二分算法计算起最近的index
   * @param num 定位值
   * @param key 比较的key
   */
  function getNearsetIndex(num: number, key: 'index' | 'offset' = 'offset') {
    let index = -1
    let left = 0
    let right = calcGroups.current.length - 1

    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2)

      if (calcGroups.current[mid][key] > num) {
        right = mid - 1
        if (calcGroups.current[right][key] <= num) {
          index = right
          break
        }
      } else if (calcGroups.current[mid][key] < num) {
        left = mid + 1
        if (!calcGroups.current[left] || calcGroups.current[left][key] >= num) {
          index = mid
          break
        }
      } else {
        index = mid
        break
      }
    }

    return index
  }

  function getStartCols(scrollSize: number) {
    // 先利用二分法获取所在分割区间
    let index = getNearsetIndex(scrollSize)

    // 获取最近一个不在渲染范围分割点作为起始计算点
    if (index === -1) {
      return calcGroups.current[0]
    } else {
      while (
        index !== 0 &&
        !isRecycled(calcGroups.current[index].offset, scrollSize)
      ) {
        index--
      }
      return calcGroups.current[index]
    }
  }

  // 缓存可见列表
  const visibleIndexList = useRef<number[]>([])

  /**
   * 重新计算列表元素
   * @param source 调用来源
   */
  function updateItems(source?: string) {
    // console.log(source, list.current)
    const scrollSize = getScrollSize()
    const aivs = rangeNumber(approvedItemVisibleScale, 0, 1)

    const newList: RenderItem[] = []
    const newVisibleIndexList: number[] = []

    const startCols = getStartCols(scrollSize)
    let renderEntered = false // 是否已经进入渲染列表的计算
    const newCols = cloneData(startCols.cols)

    for (let i = startCols.index, len = list.current.length; i < len; i++) {
      const item = list.current[i]
      const _itemSize = item.size

      if (_itemSize === -1) {
        return
      }

      let offset = 0
      let colMinIndex = 0
      if (newCols.length > 1) {
        // 瀑布流
        offset = Math.min(...newCols)
        colMinIndex = newCols.indexOf(offset)
      } else {
        colMinIndex = 0
        offset = newCols[colMinIndex]
      }

      if (!isRecycled(offset, scrollSize)) {
        newList.push({
          id: item.id,
          index: item.index,
          style: getItemStyles(
            {
              offset,
              otherOffset: `${colMinIndex * 100}%`,
              itemSize: _itemSize,
              otherSizePx:
                newCols.length > 1 ? `calc(100% / ${newCols.length})` : '100%'
            },
            cols.current,
            horizontal
          ),
          size: _itemSize
        })

        if (isVisible(offset, _itemSize, scrollSize, aivs)) {
          newVisibleIndexList.push(item.index)
        }

        renderEntered = true
      } else {
        if (renderEntered && isCalcEnd.current) {
          break
        }
      }

      if (!isCalcEnd.current) {
        if (i !== 0 && i % calcGroupCount === 0) {
          // 存储分割点
          calcGroups.current.push({
            index: i,
            offset,
            cols: cloneData(newCols)
          })
        }
      }

      newCols[colMinIndex] += _itemSize
    }

    if (!isCalcEnd.current) {
      cols.current = newCols
      setColsSizeMax(Math.max(...newCols))
      isCalcEnd.current = true
    }

    setRenderList(newList)

    // items change
    const payload: OnVisibleItemsChangePayload = {
      items: []
    }
    newVisibleIndexList.forEach(index => {
      if (!visibleIndexList.current.includes(index)) {
        payload.items.push({
          index,
          visible: true
        })
      }
    })
    visibleIndexList.current.forEach(index => {
      if (!newVisibleIndexList.includes(index)) {
        payload.items.push({
          index,
          visible: false
        })
      }
    })
    visibleIndexList.current = newVisibleIndexList

    if (payload.items.length > 0) {
      payload.items.sort((a, b) => a.index - b.index)

      onVisibleItemsChange && onVisibleItemsChange(payload)
    }
  }

  const wrapperSize = useRef(0)

  function isRecycled(offset: number, scrollSize: number) {
    return !(
      offset >= scrollSize - wrapperSize.current * preLoad &&
      offset <= scrollSize + wrapperSize.current * (preLoad + 1)
    )
  }

  function isVisible(
    offset: number,
    _itemSize: number,
    scrollSize: number,
    aivs: number
  ) {
    return (
      scrollSize <= offset + _itemSize - _itemSize * aivs &&
      scrollSize >= offset - wrapperSize.current + _itemSize * aivs
    )
  }

  /**
   * 更新未固定高度的item
   */
  function updateItemsSize() {
    if (poolEl.current) {
      const $items = poolEl.current.children

      if ($items.length > 0) {
        const newList = list.current

        for (let i = 0; i < $items.length; i++) {
          const $item = $items[i] as HTMLElement
          const index = parseInt($item.dataset.index as string)

          newList[index].size = getElSize($item)
        }

        list.current = newList
        updatePoolList(newList)
      }
    }
  }

  /**
   * 主动通知列表发生了一个事件，以使列表重新计算可视区域
   */
  function recordInteraction() {
    updateItems('recordInteraction')
  }

  const scrollTimer = useRef<number>()
  const scrollCount = useRef(0)

  const handleScroll = () => {
    if (scrollCount.current > 10) {
      // 每轮询10次更新一次
      scrollCount.current = 0
      clearTimeout(scrollTimer.current)
      updateItems('scroll')
    } else {
      clearTimeout(scrollTimer.current)
      scrollTimer.current = window.setTimeout(() => {
        scrollCount.current = 0
        updateItems('scroll')
      }, 17)
      scrollCount.current++
    }
  }

  const { scrollToOffset, scrollToEnd: _scrollToEnd } = useScrollTo(scrollEl)

  /**
   * 滑动到指定位置
   */
  const scrollTo: ScrollTo = options => {
    const animated = true
    let newOptions: ScrollToOffsetOptions

    if (typeof options === 'number') {
      newOptions = {
        x: horizontal ? options : 0,
        y: !horizontal ? options : 0,
        animated
      }
    } else {
      newOptions = {
        x: horizontal ? options.offset : 0,
        y: !horizontal ? options.offset : 0,
        animated: !(options.animated === false)
      }
    }

    return scrollToOffset(newOptions)
  }

  /**
   * 滑动到底
   */
  const scrollToEnd: ScrollToEnd = (animated = true) => {
    return _scrollToEnd({
      x: horizontal,
      y: !horizontal,
      animated
    })
  }

  /**
   * 滑动到第index个元素
   */
  const scrollToIndex: ScrollToIndex = options => {
    let index: number
    let animated = true
    let viewPosition: ViewPosition | undefined

    if (typeof options === 'number') {
      index = options
    } else {
      index = options.index
      animated = !(options.animated === false)
      viewPosition = getViewPosition(options.viewPosition)
    }

    if (index < 0) {
      return
    } else if (index >= list.current.length) {
      scrollToEnd(animated)
      return
    }

    const startCos = calcGroups.current[getNearsetIndex(index, 'index')]
    const newCols = cloneData(startCos.cols)

    for (
      let i = startCos.index, len = Math.min(index, list.current.length - 1);
      i <= len;
      i++
    ) {
      const item = list.current[i]

      if (item.size === -1) {
        return
      }

      let offset = 0
      let colMinIndex = 0
      if (newCols.length > 1) {
        // 瀑布流
        offset = Math.min(...newCols)
        colMinIndex = newCols.indexOf(offset)
      } else {
        colMinIndex = 0
        offset = newCols[colMinIndex]
      }

      newCols[colMinIndex] += item.size

      if (i === len) {
        if (viewPosition === 0.5) {
          offset += item.size / 2 - wrapperSize.current / 2
        } else if (viewPosition === 1) {
          offset += item.size - wrapperSize.current
        }

        scrollTo({
          offset,
          animated
        })
      }
    }
  }

  const renderItems = useMemo(() => {
    return renderList.map(item => (
      <li
        className="fx-virtual-list_item"
        key={item.id}
        data-index={item.index}
        style={item.style}
      >
        {render({ index: item.index, id: item.id })}
        {renderSeparator && renderSeparator({ index: item.index })}
      </li>
    ))
  }, [renderList, render, renderSeparator])

  const renderPoolItems = useMemo(() => {
    return renderPoolList.map(item => (
      <li
        className="fx-virtual-list_item"
        key={item.id}
        data-index={item.index}
      >
        {render({ index: item.index, id: item.id })}
        {renderSeparator && renderSeparator({ index: item.index })}
      </li>
    ))
  }, [renderPoolList, render, renderSeparator])

  function resetScrollContainer($el: HTMLElement) {
    if (scrollEl.current === $el) {
      return
    }

    scrollEl.current = $el
    resizeElChange()
    scrollElChange()
    handleResize()
  }

  function handleResize() {
    const newSize = getElSize(scrollEl.current)

    if (newSize !== 0 && newSize !== wrapperSize.current) {
      wrapperSize.current = newSize
      resetCalc()
      updateItems('resize')

      onResize && onResize(newSize)
    }
  }

  const { elChange: scrollElChange } = useScroll(scrollEl, handleScroll)
  const { elChange: resizeElChange } = useResizeObserver(scrollEl, handleResize)

  useEffect(() => {
    resetScrollContainer(root.current as HTMLElement)

    return () => {
      clearTimeout(scrollTimer.current)
    }
  }, [])

  useEffect(() => {
    dataToList(ids)
  }, [ids])

  useImperativeHandle(
    ref,
    () => ({
      scrollTo,
      scrollToIndex,
      scrollToEnd,
      recordInteraction,
      resetScrollContainer
    }),
    []
  )

  const listStyles = getListStyles(horizontal, colsSizeMax)

  return (
    <div {...attrs} className={classes} ref={root}>
      <ul className="fx-virtual-list_list" style={listStyles} ref={listEl}>
        {renderItems}
      </ul>
      <ul className="fx-virtual-list_list pool" ref={poolEl}>
        {renderPoolItems}
      </ul>
    </div>
  )
}

export default forwardRef(FxVirtualList)
