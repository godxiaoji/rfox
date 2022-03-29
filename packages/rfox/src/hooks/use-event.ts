import type { MutableRefObject } from 'react'
import { useRef, useEffect } from 'react'
import { addEvent, touchEvent, addLongPressEvent } from '../helpers/events'
import type {
  FxEventCallback,
  LongPressEventCallback,
  Noop
} from '../helpers/types'

type ElRef = MutableRefObject<HTMLElement | null | undefined>

function useFn(
  elRef: MutableRefObject<HTMLElement | null | undefined>,
  fn: (el: HTMLElement) => Noop
) {
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

  const _elRef = useRef<HTMLElement | null>(null)

  if (_elRef.current == null && elRef.current == null) {
    //
  } else if (elRef.current !== _elRef.current) {
    _elRef.current = elRef.current ?? null
    off()
    on()
  }

  useEffect(() => off, [])

  return off
}

type EventCallback = (e: Event) => void

/**
 * 事件
 * @param elRef html element ref
 * @returns 取消函数
 */
export function useEvent(
  elRef: ElRef,
  event = touchEvent.touchstart,
  callback: FxEventCallback
) {
  const callbackRef = useRef<FxEventCallback | null>(null)
  callbackRef.current = callback || null

  const onEvent: FxEventCallback = (e, $el) => {
    callbackRef.current && callbackRef.current(e, $el)
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
  callback?: EventCallback
) {
  const callbackRef = useRef<FxEventCallback | null>(null)
  callbackRef.current = callback || null

  const onStop: FxEventCallback = (e, $el) => {
    callbackRef.current && callbackRef.current(e, $el)

    e.stopPropagation()
  }

  return useFn(elRef, el => addEvent(event, onStop, el))
}

/**
 * 单机、长按
 * @param elRef html element ref
 * @returns 取消函数
 */
export function useLongPress(elRef: ElRef, callback: LongPressEventCallback) {
  return useFn(elRef, el => addLongPressEvent(el, callback))
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

  return useFn(elRef, el => addEvent('click', callback, el))
}
