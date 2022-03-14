import type { MutableRefObject } from 'react'
import { useRef, useEffect } from 'react'
import { isMobile } from '../helpers/device'
import { addEvent, removeEvent } from '../helpers/events'

export function useDbClick(
  container: MutableRefObject<HTMLElement | null | undefined>,
  callback: ($el: HTMLElement, event: 'click' | 'dbclick') => void
) {
  const el = useRef<HTMLElement | null>(null)
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

  function on() {
    if (container.current) {
      el.current = container.current
      addEvent(isMobile ? 'touchstart' : 'mousedown', onClick, el.current)
    }
  }

  function off() {
    clearTimeout(timer.current)
    if (el.current) {
      removeEvent(isMobile ? 'touchstart' : 'mousedown', onClick, el.current)
      el.current = null
    }
  }

  useEffect(() => {
    off()
    on()
  }, [container])

  useEffect(() => off, [])
}
