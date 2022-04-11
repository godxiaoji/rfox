import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import type { SwiperEmits, SwiperProps, SwiperRef, SwipeTo } from './types'
import {
  getPaginationItemClasses,
  getPaginationItemStyles,
  getClasses,
  getIndicatorsClasses
} from './util'
import type { FRFC, OnClick } from '../helpers/types'
import { useTouch } from '../hooks/use-touch'
import { CSSProperties2CssText } from '../helpers/dom'
import { getNumber, isNumber } from '../helpers/util'
import Exception from '../helpers/exception'
import LeftOutlined from '../Icon/icons/LeftOutlined'
import RightOutlined from '../Icon/icons/RightOutlined'
import { useResizeObserver } from '../hooks/use-resize-observer'
import { getStretchOffset } from '../helpers/animation'
import { Icon } from '../Icon'
import { useStableState } from '../hooks/use'
import { toArray } from '../helpers/react'

interface SwiperCoords {
  offset: boolean | null
  startX: number
  startY: number
  stopX: number
  stopY: number
  timeStamp: number
}

const FxSwiper: FRFC<SwiperRef, SwiperProps & SwiperEmits> = (
  {
    initialVertical = false,
    indicatorDots = false,
    initialCircular = false,
    navigationButtons = false,
    bounces = true,
    initialActiveIndex = 0,
    ...props
  },
  ref
) => {
  // 设置初始化数据
  const circular = useRef(!!initialCircular)
  const direction = useRef(initialVertical ? 'y' : 'x')
  const directionGroup = useRef(
    initialVertical
      ? ['Y', 'X', 'Height', 'Width']
      : ['X', 'Y', 'Width', 'Height']
  )

  const root = useRef<HTMLDivElement>(null)
  const listEl = useRef<HTMLDivElement>(null)
  const coords = useRef<SwiperCoords | null>(null)
  const inMove = useRef(false)
  const playing = useRef(false)
  const horizontal = useRef<boolean | null>(null)
  // const index = useRef(0)
  const itemSize = useRef(0)
  const autoplayTimer = useRef<number>()
  const durationTimer = useRef<number>()
  const prevTranSize = useRef(0)
  const [getActiveIndex, setActiveIndex] = useStableState(0)
  const itemCount = useRef(0)

  const [pagination, setPagination] = useState<boolean[]>([])

  function getItems(): HTMLDivElement[] {
    return listEl.current
      ? [].slice.call(listEl.current.querySelectorAll('.fx-swiper-item'), 0)
      : []
  }

  const classes = classNames(getClasses(direction.current), props.className)

  /**
   * 切换到
   * @param newIndex 索引
   */
  const swipeTo: SwipeTo = newIndex => {
    const len = itemCount.current

    if (isNumber(newIndex) && newIndex >= 0 && newIndex <= len) {
      if (len !== 0 && newIndex !== getActiveIndex(true)) {
        to(newIndex, false)
      }
    } else {
      console.error(
        new Exception(
          'This value of "activeIndex" is out of range.',
          Exception.TYPE.PROP_ERROR,
          'Swiper'
        )
      )
    }
  }

  /**
   * 跳转到上一项
   */
  function prev(useCircular = false) {
    to(useCircular ? getCircleIndex(-1) : getActiveIndex(true) - 1)
  }
  /**
   * 跳转到下一项
   */
  function next(useCircular = false) {
    to(useCircular ? getCircleIndex(1) : getActiveIndex(true) + 1)
  }

  /**
   * 获取循环的索引
   */
  function getCircleIndex(step: number) {
    const length = itemCount.current
    return (getActiveIndex(true) + length + (step % length)) % length
  }

  function updateSwipeLoop(offset?: number) {
    if (!circular.current) {
      return
    }

    const slideIndex = getActiveIndex(true)
    const lastIndex = getLastIndex()
    const itemCount = lastIndex + 1

    getItems().forEach(($item, index) => {
      if (offset != null && offset < 0) {
        if (slideIndex === 0 && index === lastIndex) {
          $item.style.transform = getTransformStyleValue(
            -itemSize.current * itemCount
          )
        } else {
          $item.style.transform = ''
        }
      } else if (offset != null && offset > 0) {
        if (slideIndex === lastIndex && index === 0) {
          $item.style.transform = getTransformStyleValue(
            itemSize.current * itemCount
          )
        } else {
          $item.style.transform = ''
        }
      } else {
        if (slideIndex === 0 && index === lastIndex) {
          $item.style.transform = getTransformStyleValue(
            -itemSize.current * itemCount
          )
        } else if (slideIndex === lastIndex && index === 0) {
          $item.style.transform = getTransformStyleValue(
            itemSize.current * itemCount
          )
        } else {
          $item.style.transform = ''
        }
      }
    })

    if (offset == null) {
      updateListStyle(-itemSize.current * slideIndex)
    }
  }

  function getLastIndex() {
    return itemCount.current - 1
  }

  /**
   * 获取滑动距离值
   */
  function getTransformStyleValue(size: number) {
    return (
      'translate3d(' +
      (direction.current === 'x'
        ? size + 'px, 0px, 0px'
        : '0px, ' + size + 'px, 0px') +
      ')'
    )
  }

  function updateListStyle(transSize: number, duration = 0) {
    const listStyle = (listEl.current as HTMLElement).style

    listStyle.transitionDuration = duration + 'ms'
    listStyle.transform = getTransformStyleValue(transSize)
    prevTranSize.current = transSize
  }

  function onBeforeSlide(toIndex: number, fromIndex: number) {
    if (toIndex !== fromIndex) {
      props.onChange && props.onChange(toIndex, fromIndex)
    }

    setActiveIndex(toIndex)
    udpatePagination()
  }

  function onSlide(toIndex: number, fromIndex: number) {
    props.onAnimated && props.onAnimated(toIndex, fromIndex)
  }

  const onClick: OnClick = e => {
    if (!horizontal.current) {
      props.onClick && props.onClick(e)
    }
  }

  /**
   *  到指定项
   */
  function to(toIndex: number, animated = true) {
    const lastIndex = getLastIndex()
    let slideIndex = toIndex

    if (lastIndex < 0) {
      return
    }

    if (
      toIndex >= 0 &&
      toIndex <= lastIndex &&
      toIndex != getActiveIndex(true)
    ) {
      slide(toIndex, slideIndex, animated)
    } else {
      if (circular.current) {
        if (toIndex < 0) {
          slideIndex = -1
          toIndex = lastIndex
        } else if (toIndex > lastIndex) {
          slideIndex = lastIndex + 1
          toIndex = 0
        }
      } else {
        toIndex = getActiveIndex(true)
      }

      slide(toIndex, slideIndex, animated)
    }
  }

  /**
   * 滑动实现
   */
  function slide(toIndex: number, slideIndex: number, animated = true) {
    if (itemSize.current === 0 || playing.current) {
      return
    }

    if (!circular.current) {
      slideIndex = toIndex
    }

    playing.current = true

    const fromIndex = getActiveIndex(true)
    const transSize = -itemSize.current * slideIndex
    const transSizeOffset = prevTranSize.current - transSize

    if (fromIndex !== slideIndex) {
      updateSwipeLoop(transSizeOffset)
    }

    onBeforeSlide(toIndex, fromIndex)

    // if (toIndex !== fromIndex) {
    //   onChange(toIndex, fromIndex)
    // }

    let duration = 0

    if (props.duration == null) {
      duration = Math.abs(transSizeOffset)
      duration = Math.max(100, Math.min(800, duration))
    } else {
      duration = getNumber(props.duration)
    }

    if (animated === false) {
      duration = 0
    }

    updateListStyle(transSize, duration)

    clearTimeout(durationTimer.current)
    durationTimer.current = window.setTimeout(() => {
      updateListStyle(transSize, 0)

      animateDone(transSize, toIndex, fromIndex, 0)
    }, duration)
  }

  function animateDone(
    transSize: number,
    toIndex: number,
    fromIndex: number,
    frameNumber: number
  ) {
    durationTimer.current = requestAnimationFrame(() => {
      const transform = window.getComputedStyle(
        listEl.current as HTMLElement
      ).transform

      const currentSize = transform.slice(7, transform.length - 1).split(', ')[
        direction.current === 'y' ? 5 : 4
      ]

      if (
        parseFloat(currentSize).toFixed(2) === transSize.toFixed(2) ||
        frameNumber > 0
      ) {
        // 校对清楚再回调
        playing.current = false

        // 滑动回调
        onSlide(toIndex, fromIndex)

        updateSwipeLoop()
      } else {
        animateDone(transSize, toIndex, fromIndex, ++frameNumber)
      }
    })
  }

  function resetItems() {
    setSlideStyle()

    const last = getLastIndex()

    if (getActiveIndex(true) > last) {
      to(last)
    }
  }

  /**
   * 设置滑动样式属性
   */
  function setSlideStyle() {
    if (!root.current || !listEl.current) {
      return
    }

    const $items = getItems()
    const sizeName = directionGroup.current[2] //  width height
    const _itemSize = root.current[('client' + sizeName) as 'clientWidth']
    if (_itemSize === 0) {
      return
    }
    itemSize.current = _itemSize

    root.current.style[
      ('overflow' + directionGroup.current[0]) as 'overflowY'
    ] = 'hidden'

    listEl.current.style.cssText = CSSProperties2CssText({
      WebkitBackfaceVisibility: 'hidden',
      WebkitPerspective: 1000,
      [sizeName.toLowerCase()]: itemSize.current * $items.length + 'px',
      transition: 'transform 0ms ease-out'
    })

    updateListStyle(-itemSize.current * getActiveIndex(true))

    $items.forEach(($item, i) => {
      $item.dataset.index = i.toString()

      let cssText = `${sizeName.toLowerCase()}: ${itemSize.current}px;`

      if (direction.current === 'x') {
        // 左右滑动
        cssText += 'float: left;'
      }

      $item.style.cssText = cssText
    })
  }

  function udpatePagination() {
    setPagination(pg =>
      pg.map((item, i) => {
        return i === getActiveIndex(true)
      })
    )
  }

  /**
   * 开始幻灯片
   */
  function start() {
    stop()
    props.autoplay &&
      (autoplayTimer.current = window.setInterval(() => {
        to(getCircleIndex(1))
      }, getNumber(props.interval)))
  }

  /**
   * 结束幻灯片
   */
  function stop() {
    clearTimeout(autoplayTimer.current)
  }

  // function getItemEl(index: number): HTMLElement | null {
  //   return $items.current[index] || null
  // }

  useTouch({
    el: root,
    // 滑动开始事件-记录坐标
    onTouchStart(e) {
      // 禁止图片拖拽
      if (e.target.tagName === 'IMG') {
        e.target.ondragstart = function () {
          return false
        }
      }
      // e.preventDefault()
      if (playing.current) {
        return
      }

      // 清除幻灯片
      stop()

      inMove.current = true
      horizontal.current = null
      // 记录坐标

      coords.current = {
        startX: e.touchObject.pageX,
        startY: e.touchObject.pageY,
        stopX: e.touchObject.pageX,
        stopY: e.touchObject.pageY,
        timeStamp: e.timeStamp,
        offset: null
      }
    },
    /**
     * 滑动过程事件-判断横竖向，跟随滑动
     */
    onTouchMove(e) {
      if (!inMove.current || !coords.current) {
        return
      }

      coords.current.stopX = e.touchObject.pageX
      coords.current.stopY = e.touchObject.pageY

      let offsetX = coords.current.startX - coords.current.stopX
      let offsetY = coords.current.startY - coords.current.stopY

      if (direction.current === 'y') {
        // 垂直
        offsetX = [offsetY, (offsetY = offsetX)][0]
      }

      const absX = Math.abs(offsetX)
      const absY = Math.abs(offsetY)

      if (horizontal.current === null) {
        // 首次
        if (offsetX !== 0) {
          // bug hack
          e.preventDefault()
        }
      } else {
        // 首次move确认是否水平移动
        if (absX > absY) {
          horizontal.current = true
          if (offsetX !== 0) {
            e.preventDefault()
          }
        } else {
          coords.current = null
          horizontal.current = false
          return
        }
      }

      const active = getActiveIndex(true)
      let transSize = active * itemSize.current

      if (
        !circular.current &&
        ((active === 0 && offsetX < 0) ||
          (active === getLastIndex() && offsetX > 0))
      ) {
        transSize += bounces ? getStretchOffset(offsetX) : 0
      } else {
        transSize += offsetX
      }

      if (absX < itemSize.current) {
        if (
          coords.current.offset == null ||
          offsetX > 0 !== coords.current.offset
        ) {
          updateSwipeLoop(offsetX)
          coords.current.offset = offsetX > 0
        }

        updateListStyle(-transSize)
      }
    },
    /**
     * 滑动结束事件-滑到指定位置，重置状态
     */
    onTouchEnd(e) {
      if (!inMove.current) {
        return
      }

      inMove.current = false

      if (coords.current) {
        const offsetX =
          direction.current === 'x'
            ? coords.current.startX - coords.current.stopX
            : coords.current.startY - coords.current.stopY
        let absX = Math.abs(offsetX)
        const active = getActiveIndex(true)

        let transIndex

        if (!isNaN(absX) && absX !== 0) {
          if (absX > itemSize.current) {
            absX = itemSize.current
          }
          if (absX >= 80 || e.timeStamp - coords.current.timeStamp < 200) {
            if (offsetX > 0) {
              transIndex = active + 1
            } else {
              transIndex = active - 1
            }
          } else {
            transIndex = active
          }

          to(transIndex)
          coords.current = null
        }
      }

      start()
    }
  })

  useEffect(start, [props.autoplay, props.interval])

  useResizeObserver(root, () => setSlideStyle())

  /**
   * 渲染小点导航
   */
  const renderPagination = useMemo(() => {
    const indicatorsClasses = classNames(
      getIndicatorsClasses(direction.current)
    )

    return indicatorDots ? (
      <div
        className={indicatorsClasses}
        style={{ display: indicatorDots ? undefined : 'none' }}
      >
        {pagination.map((item, _index) => (
          <span
            key={_index}
            className={classNames(
              getPaginationItemClasses(_index, getActiveIndex())
            )}
            style={getPaginationItemStyles(props, _index, getActiveIndex())}
          ></span>
        ))}
      </div>
    ) : (
      <></>
    )
  }, [pagination])

  /**
   * 显然上下页按钮
   */
  const renderNavigation = useMemo(() => {
    return navigationButtons && pagination.length > 1 ? (
      <>
        <button className="fx-swiper_prev" onClick={() => prev(true)}>
          <Icon icon={LeftOutlined} />
        </button>
        <button className="fx-swiper_next" onClick={() => next(true)}>
          <Icon icon={RightOutlined} />
        </button>
      </>
    ) : (
      <></>
    )
  }, [navigationButtons, pagination])

  useEffect(() => {
    let _itemCount = 0

    setPagination(
      toArray(props.children).map((item, i) => {
        _itemCount++
        return i === getActiveIndex(true)
      })
    )

    itemCount.current = _itemCount

    resetItems()
  }, [props.children])

  useEffect(() => {
    if (initialActiveIndex !== 0) {
      swipeTo(initialActiveIndex)
    }
    start()

    return () => {
      clearTimeout(durationTimer.current)
      stop()
    }
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      swipeTo,
      prev,
      next
    }),
    []
  )

  return (
    <div className={classes} onClick={onClick} ref={root}>
      <div className="fx-swiper_list" ref={listEl}>
        {props.children}
      </div>
      {renderPagination}
      {renderNavigation}
    </div>
  )
}

export default forwardRef(FxSwiper)
