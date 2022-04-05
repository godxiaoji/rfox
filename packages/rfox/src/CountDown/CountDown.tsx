import classNames from 'classnames'
import type {
  CountDownEmits,
  CountDownProps,
  CountDownRef,
  CountTime
} from './types'
import type { FRVFC, RenderProp } from '../helpers/types'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react'
import { useCountTime } from './use-count-time'
import { useLocale } from '../ConfigProvider/context'

const FxCountDown: FRVFC<
  CountDownRef,
  CountDownProps &
    CountDownEmits & {
      render?: RenderProp<CountTime>
    }
> = (
  {
    onChange,
    initialTiming = 0,
    showDays = false,
    onPause,
    onResume,
    render,
    ...props
  },
  ref
) => {
  const { locale } = useLocale()
  const classes = classNames('fx-count-down', props.className)

  const startTime = useRef(0)
  const expiredTime = useRef(0)
  const remainTime = useRef(0)
  const paused = useRef(false)

  const { times, timeStop, timeStart, timeUpdate } = useCountTime(
    ({ update, stop }) => {
      remainTime.current = expiredTime.current - Date.now()

      if (remainTime.current > 0) {
        update(remainTime.current)

        onChange && onChange(remainTime.current)
      } else {
        remainTime.current = 0
        update(remainTime.current)
        onChange && onChange(remainTime.current)

        props.onEnd &&
          props.onEnd({
            startTime: startTime.current,
            endTime: expiredTime.current
          })

        stop()
      }
    }
  )

  function pause() {
    if (paused.current) {
      return
    }

    paused.current = true

    onPause &&
      onPause({
        remainTime: remainTime.current
      })

    timeStop()
  }

  function resume() {
    if (!paused.current) {
      return
    }

    paused.current = false

    onResume &&
      onResume({
        remainTime: remainTime.current
      })

    expiredTime.current = remainTime.current + Date.now()

    timeStart()
  }

  function reset(_timing: number, autoStart = true) {
    timeStop()

    paused.current = !autoStart

    startTime.current = Date.now()
    expiredTime.current = _timing + startTime.current
    remainTime.current = _timing

    timeUpdate(remainTime.current)
    !paused.current && timeStart()
  }

  useImperativeHandle(
    ref,
    () => ({
      pause,
      resume,
      reset
    }),
    [onPause, onResume]
  )

  useEffect(() => {
    reset(initialTiming, !paused.current)
  }, [])

  const renderChildren = useCallback(() => {
    return render
      ? render(times)
      : `${
          showDays
            ? times.days + locale.countDownDayUnit + ' ' + times.hours
            : times.fullHours
        }:${times.minutes}:${times.seconds}`
  }, [times, render, showDays, locale])

  return <div className={classes}>{renderChildren()}</div>
}

export default forwardRef(FxCountDown)
