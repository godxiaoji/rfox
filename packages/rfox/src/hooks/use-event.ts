import type { MutableRefObject } from 'react'
import { useRef, useEffect } from 'react'
import { addEvent, touchEvent, addLongPressEvent } from '../helpers/events'
import type { LongPressEventCallback, Noop } from '../helpers/types'

type ElRef = MutableRefObject<HTMLElement | null | undefined>

function useFn(elRef: ElRef, fn: (el: HTMLElement) => Noop) {
  const stopHandle = useRef<Noop | null>(null)

  function on() {
    if (elRef.current) {
      stopHandle.current = fn(elRef.current)
    }
  }

  function off() {
    if (stopHandle.current) {
      stopHandle.current()
      stopHandle.current = null
    }
  }

  function elChange() {
    off()
    on()
  }

  useEffect(() => {
    on()

    return off
  }, [])

  return { off, elChange }
}

/**
 * 事件
 * @param elRef html element ref
 * @returns 取消函数
 */
export function useEvent(
  elRef: ElRef,
  event = touchEvent.touchstart,
  callback: EventListener
) {
  const callbackRef = useRef<EventListener | null>(null)
  callbackRef.current = callback

  const onEvent: EventListener = e => {
    callbackRef.current && callbackRef.current(e)
  }

  return useFn(elRef, el => addEvent(event, onEvent, el))
}

/**
 * 阻止冒泡
 * @param elRef html element ref
 * @returns 取消函数
 */
export function useStop(
  elRef: ElRef,
  event = touchEvent.touchstart,
  callback?: EventListener
) {
  const onStop: EventListener = e => {
    callback && callback(e)
    e.stopPropagation()
  }

  return useEvent(elRef, event, onStop)
}

/**
 * 单机、长按
 * @param elRef html element ref
 * @returns 取消函数
 */
export function useLongPress(elRef: ElRef, callback: LongPressEventCallback) {
  const callbackRef = useRef<LongPressEventCallback | null>(null)
  callbackRef.current = callback

  const onEvent: LongPressEventCallback = e => {
    callbackRef.current && callbackRef.current(e)
  }

  return useFn(elRef, el => addLongPressEvent(el, onEvent))
}

/**
 * 双击
 * @param elRef html element ref
 * @returns 取消函数
 */
export function useDbclick(
  elRef: ElRef,
  callback: ($el: HTMLElement, event: 'click' | 'dbclick') => void
) {
  const tag = useRef<string | null>(null)
  const timer = useRef<number>()

  function onClick(e: Event) {
    const $el = e.currentTarget as HTMLElement

    if (!tag.current) {
      tag.current = e.type
      timer.current = window.setTimeout(() => {
        tag.current = null
        callback($el, 'click')
      }, 300)
    } else if (tag.current === e.type) {
      clearTimeout(timer.current)
      tag.current = null
      callback($el, 'dbclick')
    }
  }

  return useFn(elRef, el => {
    const off = addEvent(touchEvent.touchstart, onClick, el)

    return () => {
      clearTimeout(timer.current)
      off()
    }
  })
}

export function useBlur(callback: Noop) {
  const elRef = useRef(document.documentElement)

  const { off } = useEvent(elRef, 'click', callback)

  return { off }
}
