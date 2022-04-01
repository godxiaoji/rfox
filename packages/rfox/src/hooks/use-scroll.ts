import type { ScrollToEnd, ScrollToOffset } from './types'
import type { MutableRefObject } from 'react'
import { isNumber } from '../helpers/util'
import { useEvent } from './use-event'

/**
 * 绑定 scroll 事件
 * @param elRef scroll element
 * @param callback onScroll
 * @returns off fn
 */
export function useScroll(
  elRef: MutableRefObject<HTMLElement | null | undefined>,
  callback: EventListener
) {
  return useEvent(elRef, 'scroll', callback)
}

export function useScrollTo(
  elRef: MutableRefObject<HTMLElement | null | undefined>
) {
  /**
   * 滚动列表到指定的偏移（以像素为单位）
   * @param args 配置
   */
  const scrollToOffset: ScrollToOffset = (...args) => {
    let behavior: 'auto' | 'smooth' = 'smooth'
    let top = 0
    let left = 0

    if (isNumber(args[0])) {
      // x y
      left = args[0]
      isNumber(args[1]) && (top = args[1])
      behavior = 'auto'
    } else if (args[0]) {
      isNumber(args[0].x) && (left = args[0].x)
      isNumber(args[0].y) && (top = args[0].y)
      args[0].animated === false && (behavior = 'auto')
    }

    elRef.current?.scrollTo({
      top,
      left,
      behavior
    })
  }

  /**
   * 滚动到底部
   * @param param0 {x = true, y = true, animated = true }
   * @returns void
   */
  const scrollToEnd: ScrollToEnd = ({ x, y, animated } = {}) => {
    const $root = elRef.current

    if (!$root) {
      return
    }

    scrollToOffset({
      x: x !== false ? $root.scrollWidth : undefined,
      y: y !== false ? $root.scrollHeight : undefined,
      animated
    })
  }

  return {
    scrollToOffset,
    scrollToEnd
  }
}
