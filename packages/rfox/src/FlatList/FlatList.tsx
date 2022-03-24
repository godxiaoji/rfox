import classNames from 'classnames'
import type { FlatListEmits, FlatListProps, FlatListRef } from './types'
import type { CSSProperties, FRFC, RenderProp } from '../helpers/types'
import { LoadMore } from '../LoadMore'
import { ScrollView } from '../ScrollView'
import { VirtualList } from '../VirtualList'
import type {
  VirtualListRef,
  ScrollToIndex,
  ScrollTo,
  ScrollToEnd
} from '../VirtualList/types'
import { useLocale } from '../ConfigProvider/context'
import type { PullDirection, ScrollViewRef } from '../ScrollView/types'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { getClasses } from './util'

const FxFlatList: FRFC<
  FlatListRef,
  FlatListProps &
    FlatListEmits & {
      style?: CSSProperties
      renderHeader?: RenderProp
      renderEmpty?: RenderProp
      renderFooter?: RenderProp
      render: RenderProp<{
        index: number
      }>
      renderSeparator?: RenderProp<{
        index: number
      }>
    }
> = (
  {
    ids = [],
    endReachedThreshold = 0.5,
    enablePullRefresh = false,
    initialWaterfallCount = 1,
    initialHorizontal = false,
    ...props
  },
  ref
) => {
  const { locale } = useLocale()
  const scrollViewRef = useRef<ScrollViewRef>(null)
  const virtualListRef = useRef<VirtualListRef>(null)
  const [horizontal] = useState(
    !!(initialWaterfallCount && initialWaterfallCount <= 1 && initialHorizontal)
  )
  const [wrapperSize, setWrapperSize] = useState(0)

  function getScrollContainer() {
    return scrollViewRef.current?.getScrollEl() as HTMLElement
  }

  function onResize(size: number) {
    setWrapperSize(size)
  }

  /**
   * 主动通知列表发生了一个事件，以使列表重新计算可视区域
   */
  function recordInteraction() {
    virtualListRef.current?.recordInteraction()
  }

  function onScrollToLower() {
    const $el = getScrollContainer()

    const distanceFromEnd = horizontal
      ? $el.scrollWidth - $el.scrollLeft - $el.offsetWidth
      : $el.scrollHeight - $el.scrollTop - $el.offsetHeight

    props.onEndReached &&
      props.onEndReached({
        distanceFromEnd
      })
  }

  const scrollTo: ScrollTo = options => {
    virtualListRef.current?.scrollTo(options as any)
  }
  const scrollToIndex: ScrollToIndex = options => {
    virtualListRef.current?.scrollToIndex(options as any)
  }
  const scrollToEnd: ScrollToEnd = animated => {
    virtualListRef.current?.scrollToEnd(animated)
  }

  const lowerThreshold = useMemo(
    () => wrapperSize * endReachedThreshold,
    [wrapperSize, endReachedThreshold]
  )

  const enablePullDirections: PullDirection[] = useMemo(() => {
    if (enablePullRefresh) {
      return horizontal ? ['right'] : ['down']
    }

    return []
  }, [enablePullRefresh])

  useEffect(() => {
    scrollViewRef.current &&
      virtualListRef.current?.resetScrollContainer(getScrollContainer())
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      scrollTo,
      scrollToIndex,
      scrollToEnd,
      recordInteraction
    }),
    []
  )

  const classes = classNames(getClasses(horizontal), props.className)

  return (
    <ScrollView
      ref={scrollViewRef}
      className={classes}
      scrollX={horizontal}
      scrollY={!horizontal}
      lowerThreshold={lowerThreshold}
      enablePullDirections={enablePullDirections}
      onScroll={props.onScroll}
      onScrollToLower={onScrollToLower}
      onRefreshing={props.onRefreshing}
      style={props.style}
    >
      {props.renderHeader ? (
        <div className="fx-flat-list_header">{props.renderHeader()}</div>
      ) : (
        <></>
      )}
      <VirtualList
        ref={virtualListRef}
        ids={ids}
        initialHorizontal={initialHorizontal}
        initialWaterfallCount={initialWaterfallCount}
        itemSize={props.itemSize}
        preLoad={props.preLoad}
        approvedItemVisibleScale={props.approvedItemVisibleScale}
        onResize={onResize}
        onVisibleItemsChange={props.onVisibleItemsChange}
        render={props.render}
        renderSeparator={props.renderSeparator}
      />
      {props.lowerLoading && ids.length > 0 ? (
        <LoadMore
          className="fx-flat-list_indicator"
          loading
          vertical={horizontal}
        >
          {locale.flatListLoadingText}
        </LoadMore>
      ) : (
        <></>
      )}
      {ids.length === 0 ? (
        <div className="fx-flat-list_empty">
          {props.renderEmpty && props.renderEmpty()}
        </div>
      ) : (
        <></>
      )}
      {props.renderFooter ? (
        <div className="fx-flat-list_footer">{props.renderFooter()}</div>
      ) : (
        <></>
      )}
    </ScrollView>
  )
}

export default forwardRef(FxFlatList)
