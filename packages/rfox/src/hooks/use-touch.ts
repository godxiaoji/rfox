import { touchEvent } from '../helpers/events'
import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { noop } from '../helpers/util'

interface UseTouchEvent extends TouchEvent {
  touchObject: {
    pageX: number
    pageY: number
    clientX: number
    clientY: number
  }
  target: HTMLElement
}

interface UseOptions {
  el: RefObject<HTMLElement>
  onTouchStart: (e: UseTouchEvent) => void
  onTouchMove: (e: UseTouchEvent) => void
  onTouchEnd: (e: UseTouchEvent) => void
  handleEvent?: (e: Event) => void
}

const {
  touchstart,
  touchmove,
  touchend,
  addListeners,
  removeListeners,
  getTouch
} = touchEvent

/**
 * useTouch
 * @summary el 只支持生命周期内默认绑定的元素，不支持半途修改
 */
export function useTouch({
  el,
  onTouchStart,
  onTouchMove,
  onTouchEnd
}: UseOptions) {
  const object = useRef({ handleEvent: (e: UseTouchEvent) => noop() })

  object.current.handleEvent = (e: UseTouchEvent) => {
    e.touchObject = getTouch(e)

    switch (e.type) {
      case touchstart:
        onTouchStart(e)
        break
      case touchmove:
        onTouchMove(e)
        break
      case touchend:
        onTouchEnd(e)
        break
      case 'mouseleave':
        onTouchEnd(e)
        break
      default:
        break
    }
  }

  useEffect(() => {
    el.current && addListeners(el.current, object.current)
    return () => {
      el.current && removeListeners(el.current, object.current)
    }
  }, [])

  return {}
}
