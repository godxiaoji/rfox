import { useEffect, useRef, useState } from 'react'
import { getDefaultCountTime, getCountTime } from './util'

interface StepHandlers {
  update: (time: number) => void
  start: () => void
  stop: () => void
}

export function useCountTime(onStep: (handlers: StepHandlers) => void) {
  const [times, setTimes] = useState(getDefaultCountTime())

  function update(time: number) {
    setTimes(getCountTime(time))
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

  useEffect(stop, [])

  return {
    times,
    timeStart: start,
    timeStop: stop,
    timeUpdate: update
  }
}
