import classNames from 'classnames'
import type { OrderProps, ID, Position, OrderEmits } from './types'
import type { FC, RenderProp } from '../helpers/types'
import {
  getClasses,
  getItemClasses,
  getItemRatioStyles,
  getItemStyles,
  getStyles
} from './util'
import { Icon } from '../Icon'
import { Drawer } from '../Drawer'
import { rangeNumber, cloneData, getNumber } from '../helpers/util'
import { useTouch } from '../hooks/use-touch'
import { addClassName, getParentTarget, removeClassName } from '../helpers/dom'
import type { OnVisibleStateChange } from '../popup/types'
import { useLocale } from '../ConfigProvider/context'
import DeleteOutlined from '../Icon/icons/DeleteOutlined'
import { useEffect, useRef, useState } from 'react'
import { useStableState } from '../hooks/use'

interface TargetObject {
  id: ID
  index: number
  startX: number
  startY: number
  top: number
  left: number
  height: number
  rectBottom: number
  fixedOffsetX: number
  fixedOffsetY: number
}

const FxOrder: FC<
  OrderProps &
    OrderEmits & {
      render?: RenderProp<{
        id: ID
        index: number
      }>
    }
> = props => {
  const { locale } = useLocale()
  const root = useRef<HTMLDivElement>(null)
  const deleteButtonEl = useRef<HTMLDivElement>(null)
  const [getPositions, setPositions] = useStableState<Position[]>([])

  const [dragOn, setDragOn] = useState(false)
  const [dragFixed, setDragFixed] = useState(-1)
  const [dragCurrent, setDragCurrent] = useState(-1)
  const [dragDelete, setDragDelete] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [orderHeight, setOrderHeight] = useState(0)

  const colNum = getNumber(props.columnNumber, 3)

  const drag = useRef<{
    on: boolean
    current: number
    targetObject?: TargetObject
    deletable: boolean
  }>({
    on: false,
    current: -1,
    deletable: false
  })

  const imgsMode = useRef<{
    itemSize: number
    sort: number[]
    size: number
    moveShift: number
    shift: number
    moveSort: number[] | null
  }>({
    itemSize: 0,
    sort: [],
    size: 0,
    moveShift: -1,
    shift: -1,
    moveSort: null
  })
  const deleteAreaY = useRef(0)
  const onTimer = useRef<number>()

  function getNewPositions() {
    return cloneData(getPositions(true))
  }

  function getNewIndex(sort: number[], index: number) {
    let newIndex = index
    for (let i = 0; i < sort.length; i++) {
      if (sort[i] === index) {
        newIndex = i
        break
      }
    }

    return newIndex
  }

  function enterDrag(targetObject: TargetObject) {
    const index = drag.current.current

    if (index === -1 || getPositions(true).length <= 1) {
      // 只有一张不进入编辑模式
      return
    }

    imgsMode.current.size = getPositions(true).length
    drag.current.targetObject = targetObject
    drag.current.on = true

    setDragOn(true)
    setDragFixed(index)
    setDragCurrent(index)
    setDragDelete(!!props.deletable)

    const newPoss = getNewPositions()
    newPoss[index].left = newPoss[index].left + targetObject.fixedOffsetX
    newPoss[index].top = newPoss[index].top + targetObject.fixedOffsetY
    setPositions(newPoss)

    imgsMode.current.shift = getNewIndex(imgsMode.current.sort, index)
  }

  const lazyTimer = useRef<number>()

  function exitDragDone(callback: () => void) {
    lazyTimer.current = window.setTimeout(() => {
      callback()
      drag.current.on = false
    }, 220)
  }

  function exitDrag() {
    const end = () => {
      setDragOn(false)
      setDragCurrent(-1)
      setDragDelete(false)
      setDeleting(false)

      delete drag.current.targetObject

      imgsMode.current.size = 0
      imgsMode.current.shift = -1
    }

    const restoreFixed = (index: number, left: number, top: number) => {
      addClassName(root.current as HTMLElement, 'forbid-animation')

      const newPoss = getNewPositions()
      newPoss[index].left = left
      newPoss[index].top = top
      setPositions(newPoss)

      setDragFixed(-1)
    }

    if (dragOn) {
      const sort = imgsMode.current.sort
      const index = drag.current.current
      const targetObject = drag.current.targetObject as TargetObject
      const newPoss = getNewPositions()

      if (dragDelete && deleting) {
        let currentPosition: Position | null = null

        for (let i = 0; i < sort.length; i++) {
          if (sort[i] === index) {
            newPoss[sort[i]].deleted = true
            currentPosition = newPoss[sort[i]]
            sort.splice(i, 1)
            break
          }
        }

        sort.forEach((v, k) => {
          newPoss[v].left = getItemPos(k).left
          newPoss[v].top = getItemPos(k).top
        })

        imgsMode.current.moveSort = null
        imgsMode.current.moveShift = -1

        if (currentPosition) {
          props.onDelete &&
            props.onDelete({
              type: 'delete',
              index,
              item: {
                id: currentPosition.id
              }
            })
        }

        exitDragDone(() => {
          setDragFixed(-1)
          updateOrderHeight()
          updateOptions()
        })
      } else if (
        imgsMode.current.moveShift !== -1 &&
        imgsMode.current.moveSort != null
      ) {
        // 先到最新位置
        const newIndex = getNewIndex(imgsMode.current.moveSort, index)
        const { left, top } = getItemPos(newIndex)

        newPoss[index].left = left + targetObject.fixedOffsetX
        newPoss[index].top = top + targetObject.fixedOffsetY
        setDragCurrent(-1)

        imgsMode.current.sort = imgsMode.current.moveSort
        imgsMode.current.moveSort = null
        imgsMode.current.moveShift = -1

        exitDragDone(() => {
          restoreFixed(index, left, top)
          updateOptions()
        })
      } else {
        const newIndex = getNewIndex(sort, index)
        const { left, top } = getItemPos(newIndex)

        newPoss[index].left = left + targetObject.fixedOffsetX
        newPoss[index].top = top + targetObject.fixedOffsetY

        exitDragDone(() => {
          restoreFixed(index, left, top)
        })
      }

      setPositions(newPoss)
      end()
    }
  }

  function updateOptions() {
    const newOptions = imgsMode.current.sort.map(v => {
      return props.items[v]
    })

    props.onUpdateItems && props.onUpdateItems(newOptions)
  }

  function getItemPos(index: number) {
    return {
      left: (index % colNum) * imgsMode.current.itemSize,
      top: Math.floor(index / colNum) * imgsMode.current.itemSize
    }
  }

  const max = useRef(Infinity)

  function updateItems() {
    if (!root.current) {
      return
    }

    imgsMode.current.itemSize = root.current.offsetWidth / colNum
    imgsMode.current.sort = []
    max.current = Infinity

    const newPoss: Position[] = []

    props.items.forEach((v, k) => {
      const position = Object.assign(
        {
          id: v.id,
          data: v,
          deleted: false,
          draggable: !(v.draggable === false)
        },
        getItemPos(k)
      )

      newPoss.push(position)

      imgsMode.current.sort.push(k)

      if (!position.draggable && max.current === Infinity) {
        max.current = k - 1
      }
    })

    setPositions(newPoss)
  }

  useEffect(updateOrderHeight, [getPositions()])

  function updateOrderHeight() {
    if (!root.current || drag.current.on) {
      return
    }

    // 排除按下元素变大问题的干扰
    setOrderHeight(
      Math.max(
        ...([].slice.call(root.current.children, 0) as HTMLElement[]).map(
          child => child.offsetHeight
        )
      ) * Math.ceil(imgsMode.current.sort.length / colNum)
    )
  }

  const onVisibleStateChange: OnVisibleStateChange = e => {
    if (e.state === 'shown') {
      const rects = (deleteButtonEl.current as HTMLElement).getClientRects()[0]

      deleteAreaY.current = rects.top
    }
  }

  useTouch({
    el: root,
    onTouchStart(e) {
      const target = getParentTarget(e.target, 'fx-order_item')

      if (!target || drag.current.on) {
        return
      }

      const index = parseInt(target.dataset.index as string)
      const rects = target.getClientRects()[0]
      const position = getPositions(true)[index]

      if (position.draggable === false) {
        return
      }

      removeClassName(root.current as HTMLElement, 'forbid-animation')

      const targetObject = {
        id: position.id,
        index,
        startX: e.touchObject.pageX,
        startY: e.touchObject.pageY,
        left: position.left,
        top: position.top,
        height: target.offsetHeight,
        fixedOffsetX: rects.left - position.left,
        fixedOffsetY: rects.top - position.top,
        rectBottom: rects.bottom
      }

      drag.current.current = index
      drag.current.targetObject = targetObject

      clearTimeout(onTimer.current)
      onTimer.current = window.setTimeout(() => {
        if (
          drag.current.targetObject &&
          drag.current.targetObject.id === targetObject.id
        ) {
          // 长按，进入拖拽模式
          enterDrag(targetObject)
        }
      }, 500)

      // const index = parseInt(target.dataset.index as string)
    },
    onTouchMove(e) {
      if (!dragOn || !drag.current.targetObject) {
        // 取消拖拽判定
        clearTimeout(onTimer.current)
        return
      }

      const targetObject = drag.current.targetObject
      const index = targetObject.index

      const moveX = e.touchObject.pageX - targetObject.startX
      const moveY = e.touchObject.pageY - targetObject.startY
      const left = targetObject.left + moveX
      const top = targetObject.top + moveY
      const itemSize = imgsMode.current.itemSize
      const sort = cloneData(imgsMode.current.sort)

      // 优先判断是否删除
      setDeleting(targetObject.rectBottom + moveY + 2 > deleteAreaY.current)

      const shift = rangeNumber(
        Math.round(top / itemSize) * 3 + Math.round(left / itemSize),
        0,
        max.current
      )

      const newPoss = getNewPositions()

      if (
        (imgsMode.current.moveShift > 0 &&
          imgsMode.current.moveShift != shift) ||
        imgsMode.current.shift != shift
      ) {
        // 计算位置
        sort.splice(imgsMode.current.shift, 1)
        sort.splice(shift, 0, index)

        const tempPoss = new Array(sort.length)

        sort.forEach((v, k) => {
          tempPoss[v] = getItemPos(k)
        })
        tempPoss[index].left = left + targetObject.fixedOffsetX
        tempPoss[index].top = top + targetObject.fixedOffsetY

        newPoss.forEach((v, k) => {
          if (tempPoss[k]) {
            v.left = tempPoss[k].left
            v.top = tempPoss[k].top
          }
        })

        imgsMode.current.moveShift = shift
        imgsMode.current.moveSort = sort
      } else {
        newPoss[index].left = left + targetObject.fixedOffsetX
        newPoss[index].top = top + targetObject.fixedOffsetY
      }

      setPositions(newPoss)
    },

    onTouchEnd() {
      clearTimeout(onTimer.current)

      if (dragOn) {
        exitDrag()
      }

      // console.log(imgsMode.current)
    }
  })

  // 改成JSON比对，防止地址一致导致的检测不到
  useEffect(updateItems, [JSON.stringify(props.items)])

  useEffect(() => {
    deleteAreaY.current = document.documentElement.clientHeight

    return () => {
      clearTimeout(onTimer.current)
      clearTimeout(lazyTimer.current)
    }
  }, [])

  const classes = classNames(getClasses(dragOn), props.className)
  const styles = getStyles(orderHeight)

  const renderItems = getPositions().map((item, index) => (
    <div
      className={classNames(
        getItemClasses(item, index, dragCurrent, dragFixed)
      )}
      style={getItemStyles(item, colNum)}
      data-index={index}
      key={item.id}
    >
      <span
        className="fx-order_item-ratio"
        style={getItemRatioStyles(props.aspectRatio)}
      ></span>
      <div className="fx-order_item-inner">
        {props.render && props.render({ id: item.id, index })}
      </div>
    </div>
  ))

  return (
    <>
      <div className={classes} style={styles} ref={root}>
        {renderItems}
      </div>
      <Drawer
        className="fx-order_delete"
        placement="bottom"
        visible={dragDelete}
        showMask={false}
        onVisibleStateChange={onVisibleStateChange}
      >
        <div className="fx-order_delete-button" ref={deleteButtonEl}>
          <Icon icon={DeleteOutlined} />
          <span>
            {deleting
              ? locale.orderDeleteButtonActiveText
              : locale.orderDeleteButtonText}
          </span>
        </div>
      </Drawer>
    </>
  )
}

export default FxOrder
