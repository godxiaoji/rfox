import { useEffect, useRef } from 'react'
import type { Noop } from '../helpers/types'

export function useDelay(callback: Noop, duration?: number) {
  const timer = useRef<number>()

  function removeDelayTask() {
    clearTimeout(timer.current)
    timer.current = undefined
  }

  function addDelayTask() {
    if (duration && duration > 0) {
      removeDelayTask()
      timer.current = window.setTimeout(callback, duration)
    }
  }

  useEffect(() => removeDelayTask, [])

  return { addDelayTask, removeDelayTask }
}
