import classNames from 'classnames'
import type { ResetContainer, StickyProps, StickyRef } from './types'
import type { FRFC } from '../helpers/types'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { widgetZIndex } from '../helpers/layer'
import { useScroll } from '../hooks/use-scroll'
import {
  getRelativeOffset,
  getScrollTop,
  getSizeValue,
  querySelector
} from '../helpers/dom'
import { getStyles } from './util'

const FxSticky: FRFC<StickyRef, StickyProps> = (
  { containSelector, ...props },
  ref
) => {
  const root = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLElement>()
  const contentEl = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number | null>(null)
  const [height, setHeight] = useState<number | null>(null)
  const fixed = useRef(false)

  function updateFixed() {
    if (!root.current || !container.current) {
      return
    }

    if (props.disabled) {
      updateStyles(false)
      return
    }

    const scrollTop = getScrollTop(container.current)
    const { clientHeight, clientWidth } = root.current
    const offsetTop = getRelativeOffset(
      root.current,
      container.current
    ).offsetTop

    if (scrollTop >= offsetTop - getSizeValue(props.offsetTop)) {
      setWidth(clientWidth)
      setHeight(clientHeight)
      updateStyles(true)
    } else {
      setWidth(null)
      setHeight(null)
      updateStyles(false)
    }
  }

  function updateStyles(isFixed: boolean) {
    if (!root.current || !container.current || !contentEl.current) {
      return
    }

    const styles = contentEl.current.style

    if (isFixed) {
      const { offsetTop } = getRelativeOffset(container.current as HTMLElement)
      const { offsetLeft } = getRelativeOffset(root.current)

      styles.top = offsetTop + getSizeValue(props.offsetTop) + 'px'
      styles.left = offsetLeft + 'px'
      styles.width = width + 'px'
      if (props.offsetBottom != null) {
        styles.bottom = getSizeValue(props.offsetBottom) + 'px'
      } else {
        styles.height = height + 'px'
      }
      styles.zIndex = widgetZIndex.toString()
      styles.position = 'fixed'
    } else {
      styles.cssText = ''
    }

    fixed.current = isFixed
  }

  const resetContainer: ResetContainer = selector => {
    const newEl = querySelector(selector) || document.documentElement

    if (newEl === container.current) {
      return
    }

    container.current = newEl
    scrollElChange()
    updateFixed()
  }

  const { elChange: scrollElChange } = useScroll(container, updateFixed)

  useEffect(updateFixed, [props.disabled])

  useEffect(() => {
    resetContainer(containSelector)
  }, [containSelector])

  useImperativeHandle(
    ref,
    () => ({
      resetContainer
    }),
    []
  )

  const classes = classNames('fx-sticky', props.className)

  return (
    <div className={classes} style={getStyles(height ?? undefined)} ref={root}>
      <div className="fx-sticky_content" ref={contentEl}>
        {props.children}
      </div>
    </div>
  )
}

export default forwardRef(FxSticky)
