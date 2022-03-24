import classNames from 'classnames'
import type { StopwatchEmits, StopwatchProps, StopwatchRef } from './types'
import type { FRFC, RenderProp } from '../helpers/types'
import { cloneData } from '../helpers/util'
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { useCountTime } from '../CountDown/use-count-time'
import { getCountTime } from '../CountDown/util'
import type { CountTime } from '../CountDown/types'

const FxStopwatch: FRFC<
  StopwatchRef,
  StopwatchProps &
    StopwatchEmits & {
      render?: RenderProp<CountTime>
    }
> = ({ showMilliseconds = true, thousands = true, render, ...props }, ref) => {
  const classes = classNames('fx-stopwatch', props.className)

  const time = useRef(0)
  const startTime = useRef(0)
  const laps = useRef<CountTime[]>([])

  const { timeStr, timeStart, timeStop, timeUpdate } = useCountTime(
    ({ update }) => {
      time.current = Date.now() - startTime.current
      update(time.current)
    }
  )

  function doing() {
    return startTime.current > 0
  }

  function stop() {
    if (doing()) {
      const _laps = cloneData(laps.current)
      _laps.push(getNextLap())

      props.onStop &&
        props.onStop({
          detail: getCountTime(time.current),
          laps: _laps
        })

      startTime.current = 0
      timeStop()
    }
  }

  function start() {
    if (startTime.current === 0) {
      startTime.current = Date.now() - time.current
    }

    props.onStart && props.onStart()

    timeStart()
  }

  function reset() {
    doing() && stop()

    props.onReset && props.onReset()

    time.current = 0
    laps.current = []

    timeUpdate(0)
    timeStop()
  }

  function getNextLap() {
    let totalTime = 0

    laps.current.forEach(({ time }) => {
      totalTime += time
    })

    return getCountTime(time.current - totalTime)
  }

  function lap(): CountTime[] {
    if (doing()) {
      laps.current.push(getNextLap())

      return cloneData(laps.current)
    }

    return []
  }

  useImperativeHandle(
    ref,
    () => ({
      start,
      stop,
      reset,
      lap
    }),
    []
  )

  const renderChildren = useCallback(() => {
    const countTime = JSON.parse(timeStr) as CountTime

    return render
      ? render(cloneData(countTime))
      : `${
          parseInt(countTime.fullHours) > 0
            ? (thousands ? countTime.thousandsFullHours : countTime.fullHours) +
              ':'
            : ''
        }${countTime.minutes}:${countTime.seconds}${
          showMilliseconds ? '.' + countTime.milliseconds : ''
        }`
  }, [timeStr, render, showMilliseconds])

  return <div className={classes}>{renderChildren()}</div>
}

export default forwardRef(FxStopwatch)
