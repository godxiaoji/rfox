import { noop } from '../helpers/util'
import { MutableRefObject, useEffect, useRef } from 'react'

export function useResizeObserver(
  container: MutableRefObject<HTMLElement | null | undefined>,
  callback: (rect: DOMRect) => void
) {
  if (typeof ResizeObserver === 'undefined') {
    return noop
  }

  const ro = useRef(
    new ResizeObserver(entries => {
      entries.forEach(entry => {
        callback(entry.contentRect)
      })
    })
  )

  useEffect(() => {
    off()
    on()
  }, [container])

  function on() {
    container.current && ro.current.observe(container.current)
  }

  function off() {
    ro.current.disconnect()
  }

  useEffect(() => off, [])

  return off
}
