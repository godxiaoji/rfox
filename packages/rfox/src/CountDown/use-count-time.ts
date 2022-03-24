import { getDefaultCountTime, getCountTime } from './util'
import { useEffect, useRef, useState } from 'react'

interface StepHandlers {
  update: (time: number) => void
  start: () => void
  stop: () => void
}

export function useCountTime(onStep: (handlers: StepHandlers) => void) {
  const [timeStr, setTimeStr] = useState(JSON.stringify(getDefaultCountTime()))

  function update(time: number) {
    setTimeStr(JSON.stringify(getCountTime(time)))
  }

  const timer = useRef<number>(-1)

  function start() {
    stop()
    timer.current = requestAnimationFrame(() => {
      start()
      onStep({ update, start, stop })
    })
  }

  function stop() {
    cancelAnimationFrame(timer.current)
  }

  useEffect(() => stop, [])

  return {
    timeStr,
    timeStart: start,
    timeStop: stop,
    timeUpdate: update
  }
}
