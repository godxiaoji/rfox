import { addEvent, removeEvent } from '../helpers/events'
import type { FxEventElement, FxEventCallback } from '../helpers/types'
import type { ScrollToOffsetOptions } from './types'
import { useEffect } from 'react'
import type { MutableRefObject } from 'react'

/**
 * 绑定 scroll 事件
 * @param container scroll element
 * @param callback onScroll
 * @returns off fn
 */
export function useScroll(
  container: MutableRefObject<FxEventElement | null | undefined>,
  callback: FxEventCallback
) {
  function on() {
    container.current && addEvent('scroll', callback, container.current)
  }

  function off() {
    if (container.current) {
      removeEvent('scroll', callback, container.current)
    }
  }

  useEffect(() => {
    on()
    return off
  }, [])

  return off
}

// export function useScrollTo(
//   container: Ref<HTMLElement | undefined>,
//   horizontal: Ref<boolean>
// ) {
//   /**
//    * 滚动列表到指定的偏移（以像素为单位）
//    * @param options 配置
//    */
//   function scrollToOffset(options: number | ScrollToOffsetOptions) {
//     let behavior: 'auto' | 'smooth' = 'smooth'
//     let top = 0
//     let left = 0

//     if (typeof options === 'number') {
//       top = options
//       behavior = 'auto'
//     } else if (options && typeof options.offset === 'number') {
//       top = options.offset
//       if (options.animated === false) behavior = 'auto'
//     }

//     if (horizontal.value) {
//       // 如果是水平的，数值换一下
//       top = [left, (left = top)][0]
//     }

//     container.value?.scrollTo({
//       top,
//       left,
//       behavior
//     })
//   }

//   /**
//    * 滚动到底部
//    */
//   function scrollToEnd(animated = false) {
//     const $root = container.value

//     if (!$root) {
//       return
//     }

//     scrollToOffset({
//       offset: scrollX ? $root.scrollWidth : $root.scrollHeight,
//       animated
//     })
//   }

//   return {
//     scrollToOffset,
//     scrollToEnd
//   }
// }
