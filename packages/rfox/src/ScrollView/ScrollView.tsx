import classNames from 'classnames'
import type {
  PullDirection,
  PullDirectionOrDefault,
  PullIndicatorSafeArea,
  ScrollViewEmits,
  ScrollViewProps,
  ScrollViewRef
} from './types'
import type { CSSProperties, FRFC, RenderProp } from '../helpers/types'
import {
  getContentStyles,
  getIndicatorStyles,
  getLoadMoreClasses,
  getPullRefreshClasses,
  getScrollViewClasses,
  PullRefreshState,
  ScrollState
} from './util'
import { stringMix2StringArray } from '../helpers/util'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { useTouch } from '../hooks/use-touch'
import { useScrollTo } from '../hooks/use-scroll'
import { useLocale } from '../ConfigProvider/context'
import CircleOutlined from '../Icon/icons/CircleOutlined'
import { Icon } from '../Icon'
import { ActivityIndicator } from '../ActivityIndicator'

interface ScrollCoords {
  pageX: number
  pageY: number
  scrollX: boolean
  scrollY: boolean
  directions?: PullDirection[]
  direction?: PullDirection
  stop: boolean | null
  isSetSafeArea?: boolean
}

const FxScrollView: FRFC<
  ScrollViewRef,
  ScrollViewProps &
    ScrollViewEmits & {
      style?: CSSProperties
      renderIndicator?: RenderProp<{
        pullDirection: PullDirectionOrDefault
        pullRefreshState: number
        pullIndicatorSafeArea: PullIndicatorSafeArea
      }>
    }
> = (
  {
    upperThreshold = 50,
    lowerThreshold = 50,
    scrollX = false,
    scrollY = false,
    scrollAnimated = false,
    enablePullDirections,
    pullRefreshThreshold = 48,
    renderIndicator,
    onScrollToLower,
    onScrollToUpper,
    ...props
  },
  ref
) => {
  const { locale } = useLocale()
  const root = useRef<HTMLDivElement>(null)

  const _isToLowerOrUpperY = useRef(ScrollState.Upper)
  const _isToLowerOrUpperX = useRef(ScrollState.Upper)
  const _prevY = useRef(0)
  const _prevX = useRef(0)
  const coords = useRef<ScrollCoords | null>(null)

  const [pullRefreshState, setPullRefreshState] = useState(
    PullRefreshState.Pulling
  )
  const pullRefreshStateCache = useRef(PullRefreshState.Pulling)

  const [pullDistance, setPullDistance] = useState(0) // 不需要cache
  const [translateDuration, setTranslateDuration] = useState(0) // 不需要cache
  const [pullDirection, setPullDirection] = useState<PullDirectionOrDefault>('')
  const pullDirectionCache = useRef<PullDirectionOrDefault>('')
  const [pullIndicatorSafeArea, setPullIndicatorSafeArea] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }) // 不需要cache

  function loadComplete() {
    pullRefreshStateCache.current = PullRefreshState.Pulling
    setPullRefreshState(PullRefreshState.Pulling)

    setPullDistance(0)
  }

  // function updateScroll() {
  //   if ((scrollY || scrollX) && root.current) {
  //     scrollTo(
  //       root.current as HTMLElement,
  //       {
  //         top: scrollY ? props.scrollTop : 0,
  //         left: scrollX ? props.scrollLeft : 0
  //       },
  //       props.scrollAnimated
  //     )
  //   }
  // }
  // onMounted(() => updateScroll)
  //   watch([() => props.scrollLeft, () => props.scrollTop], updateScroll)

  /**
   * 滚动事件处理
   */
  function onScroll() {
    if (!root.current) {
      return
    }

    const {
      scrollTop,
      scrollLeft,
      scrollWidth,
      scrollHeight,
      clientHeight,
      clientWidth
    } = root.current

    let isToLowerY = false
    let isToUpperY = false
    let isToLowerX = false
    let isToUpperX = false

    props.onScroll &&
      props.onScroll({
        scrollTop,
        scrollLeft,
        scrollWidth,
        scrollHeight,
        clientHeight,
        clientWidth
      })

    // 上下滚动
    if (scrollY) {
      if (
        scrollTop + clientHeight + lowerThreshold >= scrollHeight &&
        scrollTop > _prevY.current
      ) {
        isToLowerY = true
      } else if (scrollTop <= upperThreshold && scrollTop < _prevY.current) {
        isToUpperY = true
      }
    }

    // 左右滚动
    if (scrollX) {
      if (
        scrollLeft + clientWidth + lowerThreshold >= scrollWidth &&
        scrollLeft > _prevX.current
      ) {
        isToLowerX = true
      } else if (scrollLeft <= upperThreshold && scrollLeft < _prevX.current) {
        isToUpperX = true
      }
    }

    // 防止重复报
    if (isToUpperY || isToLowerY) {
      if (_isToLowerOrUpperY.current === ScrollState.Upper) {
        // 当前在触顶期间
        isToUpperY = false
      } else if (_isToLowerOrUpperY.current === ScrollState.Lower) {
        // 当前在触底期间
        isToLowerY = false
      }
    } else {
      _isToLowerOrUpperY.current = ScrollState.Center
    }
    if (isToUpperX || isToLowerX) {
      if (_isToLowerOrUpperX.current === ScrollState.Upper) {
        // 当前在触顶期间
        isToUpperX = false
      } else if (_isToLowerOrUpperX.current === ScrollState.Lower) {
        // 当前在触底期间
        isToLowerX = false
      }
    } else {
      _isToLowerOrUpperX.current = ScrollState.Center
    }

    if (isToUpperY) {
      // 触顶
      _isToLowerOrUpperY.current = ScrollState.Upper

      onScrollToUpper &&
        onScrollToUpper({
          direction: 'top'
        })
    } else if (isToLowerY) {
      // 触底
      _isToLowerOrUpperY.current = ScrollState.Lower

      onScrollToLower &&
        onScrollToLower({
          direction: 'bottom'
        })
    }
    if (isToUpperX) {
      // 触顶
      _isToLowerOrUpperX.current = ScrollState.Upper

      onScrollToUpper &&
        onScrollToUpper({
          direction: 'left'
        })
    } else if (isToLowerX) {
      // 触底
      _isToLowerOrUpperX.current = ScrollState.Lower

      onScrollToLower &&
        onScrollToLower({
          direction: 'right'
        })
    }

    _prevY.current = scrollTop
    _prevX.current = scrollLeft
  }

  useTouch({
    el: root,
    onTouchStart(e) {
      const { pageX, pageY } = e.touchObject
      const $scroll = root.current as HTMLElement
      const {
        scrollHeight,
        scrollTop,
        clientHeight,
        scrollLeft,
        scrollWidth,
        clientWidth
      } = $scroll

      coords.current = {
        pageX,
        pageY,
        scrollX: scrollX && scrollWidth > clientWidth,
        scrollY: scrollY && scrollHeight > clientHeight,
        stop: null
      }

      if (pullRefreshStateCache.current === PullRefreshState.Refreshing) {
        return
      }

      const allowPullDirections = stringMix2StringArray(enablePullDirections)

      if (allowPullDirections.length === 0) {
        return
      }

      setPullDistance(0)
      setTranslateDuration(0)
      setPullDirection('')
      pullDirectionCache.current = ''

      // 猜想可能刷新的方向，0-4个都有可能
      const directions: PullDirection[] = []

      if (scrollTop === 0 && allowPullDirections.includes('down')) {
        directions.push('down')
      }
      if (
        scrollTop + clientHeight >= scrollHeight &&
        allowPullDirections.includes('up')
      ) {
        directions.push('up')
      }
      if (scrollLeft === 0 && allowPullDirections.includes('right')) {
        directions.push('right')
      }
      if (
        scrollLeft + clientWidth >= scrollWidth &&
        allowPullDirections.includes('left')
      ) {
        directions.push('left')
      }

      if (directions[0]) {
        // 只要命中一个方向
        coords.current.directions = directions
      }
    },

    onTouchMove(e) {
      if (!coords.current) {
        return
      }

      // 处理滑动穿透
      const { pageX, pageY } = e.touchObject
      const offsetX = pageX - coords.current.pageX
      const offsetY = pageY - coords.current.pageY
      const y = _isToLowerOrUpperY.current
      const x = _isToLowerOrUpperX.current

      if (coords.current.stop == null) {
        if (
          (coords.current.scrollY &&
            Math.abs(offsetY) >= Math.abs(offsetX) &&
            (y === ScrollState.Center ||
              (y === ScrollState.Upper && offsetY < 0) ||
              (y === ScrollState.Lower && offsetY > 0))) ||
          (coords.current.scrollX &&
            Math.abs(offsetX) >= Math.abs(offsetY) &&
            (x === ScrollState.Center ||
              (x === ScrollState.Upper && offsetX < 0) ||
              (x === ScrollState.Lower && offsetX > 0)))
        ) {
          coords.current.stop = true
        } else {
          coords.current.stop = false
        }
      }

      if (coords.current.stop) {
        e.stopPropagation()
      }

      // 处理下拉刷新
      if (!coords.current.directions) {
        return
      }

      let _pullDirection = coords.current.direction

      if (!_pullDirection) {
        // 如果可能存在两个方向，继续验证会走的方向
        if (Math.abs(offsetY) >= Math.abs(offsetX)) {
          coords.current.directions = coords.current.directions.filter(v => {
            return (
              ['up', 'down'].includes(v) &&
              ((v === 'down' && offsetY > 0) || (v === 'up' && offsetY < 0))
            )
          })
        } else {
          coords.current.directions = coords.current.directions.filter(v => {
            return (
              ['left', 'right'].includes(v) &&
              ((v === 'right' && offsetX > 0) || (v === 'left' && offsetX < 0))
            )
          })
        }

        coords.current.direction = _pullDirection = coords.current.directions[0]
      }

      if (!_pullDirection) {
        delete coords.current.directions
        return
      }

      e.preventDefault()

      if (!coords.current.isSetSafeArea) {
        const $scroll = root.current as HTMLElement
        const _pullIndicatorSafeArea = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }

        if (['up', 'down'].includes(_pullDirection)) {
          _pullIndicatorSafeArea.left = $scroll.scrollLeft
          _pullIndicatorSafeArea.right =
            $scroll.scrollWidth - $scroll.scrollLeft - $scroll.clientWidth
        } else {
          _pullIndicatorSafeArea.top = $scroll.scrollTop
          _pullIndicatorSafeArea.bottom =
            $scroll.scrollHeight - $scroll.scrollTop - $scroll.clientHeight
        }

        setPullIndicatorSafeArea(_pullIndicatorSafeArea)
        coords.current.isSetSafeArea = true
      }

      setPullDirection(_pullDirection)
      pullDirectionCache.current = _pullDirection

      let distance
      if (['up', 'down'].includes(_pullDirection)) {
        distance = offsetY
      } else {
        distance = offsetX
      }
      distance = Math.abs(distance)
      if (distance >= pullRefreshThreshold) {
        if (pullRefreshStateCache.current === PullRefreshState.Pulling) {
          pullRefreshStateCache.current = PullRefreshState.Holding
          setPullRefreshState(PullRefreshState.Holding)
        }

        distance =
          pullRefreshThreshold +
          Math.ceil(
            (distance - pullRefreshThreshold) /
              Math.log(Math.abs(distance - pullRefreshThreshold) / 2)
          ) // 除于2比不除更好拉一点
      }

      setPullDistance(
        ['down', 'right'].includes(_pullDirection) ? distance : -distance
      )
    },

    onTouchEnd() {
      if (!coords.current) {
        return
      }
      coords.current = null

      setTranslateDuration(200)

      if (pullRefreshStateCache.current === PullRefreshState.Holding) {
        pullRefreshStateCache.current = PullRefreshState.Refreshing
        setPullRefreshState(PullRefreshState.Refreshing)

        setPullDistance(
          ['down', 'right'].includes(pullDirectionCache.current)
            ? pullRefreshThreshold
            : -pullRefreshThreshold
        )

        props.onRefreshing &&
          props.onRefreshing(
            {
              pullDirection: pullDirectionCache.current as PullDirection
            },
            loadComplete
          )
      } else {
        setPullDistance(0)
      }
    }
  })

  const classes = classNames(
    getScrollViewClasses({
      scrollX,
      scrollY,
      scrollAnimated
    }),
    props.className
  )
  const contentStyles = getContentStyles({
    translateDuration,
    pullDirection,
    pullDistance
  })
  const indicatorStyles = getIndicatorStyles(pullIndicatorSafeArea)
  const pullRefreshClasses = classNames(getPullRefreshClasses(pullDirection))
  const loadMoreClasses = classNames(getLoadMoreClasses(pullDirection))

  const { scrollToOffset, scrollToEnd } = useScrollTo(root)

  useImperativeHandle(
    ref,
    () => ({
      getScrollEl: () => root.current,
      scrollTo: scrollToOffset,
      scrollToEnd
    }),
    []
  )

  return (
    <div className={classes} style={props.style} ref={root} onScroll={onScroll}>
      <div className="fx-scroll-view_inner">
        <div className="fx-scroll-view_content" style={contentStyles}>
          {enablePullDirections && enablePullDirections.length > 0 ? (
            <div className={pullRefreshClasses}>
              {renderIndicator ? (
                renderIndicator({
                  pullDirection,
                  pullRefreshState,
                  pullIndicatorSafeArea
                })
              ) : (
                <div className={loadMoreClasses} style={indicatorStyles}>
                  {pullRefreshState === PullRefreshState.Refreshing ? (
                    <ActivityIndicator
                      className="fx-load-more_icon"
                      size="18"
                    />
                  ) : (
                    <Icon className="fx-load-more_icon" icon={CircleOutlined} />
                  )}

                  <span className="fx-load-more_content">
                    {pullRefreshState === PullRefreshState.Refreshing
                      ? locale.scrollViewRefreshingText
                      : pullRefreshState === PullRefreshState.Holding
                      ? locale.scrollViewHoldingText
                      : locale.scrollViewPullingTexts[pullDirection]}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default forwardRef(FxScrollView)
