import { useEffect, useRef } from 'react'
import type { MutableRefObject } from 'react'

type Callback = (rect: DOMRectReadOnly, resizeCount: number) => void

export function useResizeObserver(
  elRef: MutableRefObject<HTMLElement | null | undefined>,
  callback: Callback
) {
  const count = useRef(0)
  const callbackRef = useRef<Callback>(callback)
  callbackRef.current = callback

  const ro = useRef(
    new ResizeObserver(entries => {
      entries.forEach(entry => {
        count.current++
        callbackRef.current(entry.contentRect, count.current)
      })
    })
  )

  function on() {
    elRef.current && ro.current.observe(elRef.current)
  }

  function off() {
    ro.current.disconnect()
    count.current = 0
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
