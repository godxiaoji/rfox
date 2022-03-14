import { useEffect } from 'react'
import { addTimer } from '../helpers/timer'
import type { Noop } from '../helpers/types'

export const useTimer = (callback: Noop, interval = 1000) => {
  let removeTimer: Noop

  useEffect(() => {
    removeTimer = addTimer(callback, interval)

    return () => removeTimer && removeTimer()
  }, [interval])
}
