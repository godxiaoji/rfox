import classNames from 'classnames'
import type { CountUpEmits, CountUpProps, CountUpRef } from './types'
import type { FRVFC } from '../helpers/types'
import { getDuration } from './util'
import { getNumber } from '../helpers/util'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { useFrameTask } from '../hooks/use-frame-task'
import { thousands as handleThousands } from '../helpers/digital-conversion'

const FxCountUp: FRVFC<CountUpRef, CountUpProps & CountUpEmits> = (
  {
    initialNumber = 0,
    number = 0,
    speed = 'normal',
    decimalDigits = 0,
    thousands = false,
    onCancel,
    onAnimated,
    ...props
  },
  ref
) => {
  const numberCache = useRef(getNumber(initialNumber))
  const [content, setContent] = useState('')

  const classes = classNames('fx-count-up', props.className)

  const { frameStart, frameStop, frameTask } = useFrameTask()

  function cancel() {
    if (frameTask.current) {
      onCancel &&
        onCancel({
          number: numberCache.current
        })

      frameStop()
    }
  }

  const update = useCallback(
    (newNumber: number) => {
      cancel()

      const _decimalDigits = getNumber(decimalDigits, 0)
      const carry = Math.pow(10, _decimalDigits)
      const from = Math.round(numberCache.current * carry)
      const to = Math.round(newNumber * carry)

      frameStart({
        from,
        to,
        duration: getDuration(newNumber - numberCache.current, speed),
        progress: ({ current }) => {
          numberCache.current = parseFloat(
            (current / carry).toFixed(_decimalDigits)
          )
          setContent(
            thousands
              ? handleThousands(numberCache.current.toFixed(_decimalDigits))
              : numberCache.current.toFixed(_decimalDigits)
          )
        },
        complete: () => {
          onAnimated && onAnimated({ number: numberCache.current })
        }
      })
    },
    [decimalDigits, thousands, speed, onAnimated]
  )

  useEffect(() => {
    if (number != null && getNumber(number) !== numberCache.current) {
      update(getNumber(number))
    }
  }, [number])

  useImperativeHandle(
    ref,
    () => ({
      cancel
    }),
    []
  )

  return <div className={classes}>{content}</div>
}

export default forwardRef(FxCountUp)
