import classNames from 'classnames'
import type {
  ScrollTo,
  ScrollToIndex,
  StickyViewEmits,
  StickyViewProps,
  StickyViewRef
} from './types'
import type { FRFC } from '../helpers/types'
import { getClasses, getFixedStyles } from './util'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { Sticky } from '../Sticky'
import {
  CSSProperties2CssText,
  getRelativeOffset,
  getScrollTop,
  getSizeValue,
  querySelector,
  scrollTo as _scrollTo
} from '../helpers/dom'
import { useScroll } from '../hooks/use-scroll'
import type { ResetContainer, StickyRef } from '../Sticky/types'
import { getFilteredChildren } from '../helpers/react'
import { isSameArray } from '../helpers/util'

const FxStickyView: FRFC<StickyViewRef, StickyViewProps & StickyViewEmits> = (
  { activeIndex = 0, onUpdateActiveIndex, onChange, ...props },
  ref
) => {
  const [isSelfContainer, setIsSelfContainer] = useState(false)
  const classes = classNames(getClasses(isSelfContainer), props.className)

  const root = useRef<HTMLDivElement>(null)
  const listEl = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLElement>()
  const fixedEl = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<StickyRef>(null)
  const _activeIndex = useRef(0)
  const itemNames = useRef<string[]>([])

  function updateTitle(t: string, tY: number | null) {
    if (!(fixedEl.current && fixedEl.current.firstElementChild)) {
      return
    }

    const $inner = fixedEl.current.firstElementChild as HTMLDivElement

    $inner.textContent = t
    $inner.style.cssText = CSSProperties2CssText(getFixedStyles(tY))
  }

  function getItems(): HTMLDivElement[] {
    return listEl.current
      ? [].slice.call(
          listEl.current.querySelectorAll('.fx-sticky-view-item'),
          0
        )
      : []
  }

  const isScrollTo = useRef(false)

  function getItemName(index: number) {
    return itemNames.current[index] || ''
  }

  function updateFixed(ss?: number) {
    if (!fixedEl.current || !container.current) {
      return
    }

    const h = fixedEl.current.clientHeight

    if (itemNames.current.length === 0) {
      updateTitle('', null)
      return
    }

    const scrollTop = ss == null ? getScrollTop(container.current) : ss

    const _index = _activeIndex.current
    const nextIndex = _index + 1
    const offsetTops = getOffsetTops()

    const current = offsetTops[_index]
    const next =
      offsetTops[nextIndex] != null ? offsetTops[nextIndex] : Infinity
    const first = offsetTops[0]

    if (scrollTop < first) {
      updateTitle('', null)
    } else if (scrollTop >= current) {
      if (scrollTop >= next) {
        _activeIndex.current = nextIndex
        updateTitle(getItemName(nextIndex), 0)

        if (
          offsetTops[nextIndex + 1] &&
          scrollTop >= offsetTops[nextIndex + 1]
        ) {
          // 超过了
          updateFixed(scrollTop)
        } else {
          if (!isScrollTo.current) {
            onUpdateActiveIndex && onUpdateActiveIndex(_activeIndex.current)
          }

          onChange && onChange(_activeIndex.current)
        }
      } else if (next - scrollTop < h) {
        updateTitle(getItemName(_index), next - scrollTop - h)
      } else {
        updateTitle(getItemName(_index), 0)
      }
    } else {
      if (current - scrollTop < h) {
        updateTitle(getItemName(_index - 1), current - scrollTop - h)
      } else {
        _activeIndex.current = _index - 1
        updateTitle(getItemName(_index - 1), 0)

        if (offsetTops[_index - 1] && offsetTops[_index - 1] > scrollTop) {
          updateFixed(scrollTop)
        } else {
          if (!isScrollTo.current) {
            onUpdateActiveIndex && onUpdateActiveIndex(_activeIndex.current)
          }
          onChange && onChange(_activeIndex.current)
        }
      }
    }

    isScrollTo.current = false
  }

  function getOffsetTops() {
    const offset =
      getRelativeOffset(
        listEl.current as HTMLElement,
        container.current as HTMLElement
      ).offsetTop - getSizeValue(props.offsetTop)

    return getItems().map($el => {
      return $el.offsetTop + offset
    })
  }

  /**
   * 滚动到第index个
   */
  const scrollToIndex: ScrollToIndex = options => {
    let _index = 0
    const $items = getItems()

    if (typeof options === 'number') {
      _index = options
    } else if (options && typeof options.index === 'number') {
      _index = options.index
    }

    if ($items[_index] && _index != _activeIndex.current) {
      scrollTo({
        offset: getRelativeOffset($items[_index], container.current).offsetTop
      })
    }
  }

  /**
   * 滚到到指定位置
   */
  const scrollTo: ScrollTo = options => {
    let offset = 0

    if (typeof options === 'number') {
      offset = options
    } else if (options && typeof options.offset === 'number') {
      offset = options.offset
    }

    isScrollTo.current = true
    container.current && _scrollTo(container.current, offset, false)
  }

  const resetContainer: ResetContainer = selector => {
    const newEl = querySelector(selector) || (root.current as HTMLElement)

    if (newEl === container.current) {
      return
    }

    container.current = newEl
    setIsSelfContainer(newEl === root.current)
    stickyRef.current?.resetContainer(newEl)
    scrollElChange()
    updateFixed()
  }

  const resetItems = () => {
    updateFixed()

    props.onResetItems &&
      props.onResetItems(
        itemNames.current.map((name, index) => ({
          name,
          index
        }))
      )
  }

  const { elChange: scrollElChange } = useScroll(container, () => updateFixed())

  useEffect(() => {
    resetContainer(props.containSelector)
  }, [props.containSelector])

  useEffect(() => {
    scrollToIndex(activeIndex)
  }, [activeIndex])

  useImperativeHandle(
    ref,
    () => ({
      resetContainer,
      scrollTo,
      scrollToIndex
    }),
    []
  )

  useEffect(() => {
    const newItemNames: string[] = []

    getFilteredChildren(props.children, 'FxStickyViewItem').forEach(child => {
      newItemNames.push(child.props.name ?? '')

      return child
    })

    if (!isSameArray(newItemNames, itemNames.current)) {
      itemNames.current = newItemNames
      resetItems()
      updateFixed()
    }
  }, [props.children])

  return (
    <div className={classes} ref={root}>
      <div className="fx-sticky-view_list" ref={listEl}>
        {props.children}
      </div>
      <Sticky
        offsetTop={props.offsetTop}
        disabled={props.disabled}
        className="fx-sticky-view_top"
        ref={stickyRef}
      >
        <div className="fx-sticky-view_fixed" ref={fixedEl}>
          <div className="fx-sticky-view_fixed-inner"></div>
        </div>
      </Sticky>
    </div>
  )
}

export default forwardRef(FxStickyView)
