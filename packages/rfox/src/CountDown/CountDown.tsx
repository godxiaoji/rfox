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

  const { timeStr, timeStop, timeStart, timeUpdate } = useCountTime(
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
    onPause &&
      onPause({
        remainTime: remainTime.current
      })

    timeStop()
  }

  function resume() {
    onResume &&
      onResume({
        remainTime: remainTime.current
      })

    expiredTime.current = remainTime.current + Date.now()

    timeStart()
  }

  function reset(_timing: number) {
    startTime.current = Date.now()
    expiredTime.current = _timing + startTime.current
    remainTime.current = _timing

    timeUpdate(remainTime.current)
    timeStart()
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
    reset(initialTiming)
  }, [])

  const renderChildren = useCallback(() => {
    const countDown = JSON.parse(timeStr) as CountTime

    return render
      ? render(countDown)
      : `${
          showDays
            ? countDown.days + locale.countDownDayUnit + ' ' + countDown.hours
            : countDown.fullHours
        }:${countDown.minutes}:${countDown.seconds}`
  }, [timeStr, render, showDays])

  return <div className={classes}>{renderChildren()}</div>
}

export default forwardRef(FxCountDown)
